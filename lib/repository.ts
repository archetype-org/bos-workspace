import fs from "fs";
import { SHA256 } from "crypto-js";
import { DEFAULT_CONFIG } from "./config";
import path from "path";
import axios, { AxiosRequestConfig } from "axios";

const NEAR_MAINNET_RPC = "https://rpc.mainnet.near.org/";
const TREE_DIR = "./tree.json";

interface RpcRequest {
  method: string;
  params: {
    request_type: string;
    account_id: string;
    method_name: string;
    args_base64: string;
    finality: string;
  };
  id: number;
  jsonrpc: string;
}

interface RpcResponse {
  result: {
    result: string;
  };
}

const RpcManager = {
  id: 0,
  send: async (request: RpcRequest) => {
    const config: AxiosRequestConfig = {
      method: "post",
      url: NEAR_MAINNET_RPC,
      headers: {
        "Content-Type": "application/json",
      },
      data: request,
    };
    const response = await axios(config);
    return response.data;
  },
  getWidget: async (accountId: string, widgetPath: string) => {
    return RpcManager.getWidgets(accountId, [widgetPath]);
  },
  getWidgets: async (accountId: string, widgetsPath: string[]) => {
    const keys = await RpcManager.getAccountWidgetKeys(accountId, widgetsPath);
    const chunks = RpcManager.chunkinize(keys);

    const widgets = chunks.map(async (chunk) => {
      const request = {
        keys: chunk.map((path) => RpcManager.getWidgetPath(accountId, path)),
      };

      const result = await RpcManager.send(RpcManager.createRequest(request));

      console.log(result.result.result)
      if (!result.result.result) {
        console.error("Error fetching widgets. Please try again.");
        return {};
      } 

      const response = (await result.json()) as RpcResponse;

      const {
        [accountId]: { widget },
      } = RpcManager.parseResponse(response);

      return widget;
    });

    return (await Promise.all(widgets)).reduce((acc, obj) => ({ ...acc, ...obj }), {});
  },
  getAccountWidgetKeys: async (accountId: string, widgetsPath: string[]) => {
    const request = {
      keys: widgetsPath.map((path) => RpcManager.getWidgetPath(accountId, path)),
    };

    const result = await RpcManager.send(RpcManager.createRequest(request, "keys"));

    const response = (await result.json()) as RpcResponse;

    const {
      [accountId]: { widget: keys },
    } = RpcManager.parseResponse(response);

    return Object.keys(keys || []);
  },
  createRequest: (args: any, method?: string): RpcRequest => {
    return {
      method: "query",
      params: {
        request_type: "call_function",
        account_id: "social.near",
        method_name: method || "get",
        args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
        finality: "optimistic",
      },
      id: ++RpcManager.id,
      jsonrpc: "2.0",
    };
  },
  getWidgetPath: (accountId: string, widgetPath: string) => {
    return `${accountId}/widget/${widgetPath}`;
  },
  parseResponse: (response: RpcResponse) => {
    const encodedData = RpcManager.processData(response.result.result);
    return JSON.parse(decodeURIComponent(escape(encodedData)));
  },
  processData: (data: any) => {
    let result = "";
    const chunkSize = 10000;

    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      result += String.fromCharCode(...chunk);
    }

    return result;
  },
  chunkinize: (data: string[], size?: number) => {
    return [...RpcManager.chunk(data, size ? size : 100)];
  },
  *chunk(data: string[], size: number) {
    for (let i = 0; i < data.length; i += size) {
      yield data.slice(i, i + size);
    }
  },
};

interface Tree {
  [accountId: string]: any;
}

const Tree = {
  get: (): Tree => {
    if (fs.existsSync(TREE_DIR)) {
      const file = fs.readFileSync(TREE_DIR);
      return JSON.parse(file.toString("utf8") || "{}");
    }

    return {};
  },
  getAccount: (accountId: string, tree?: Tree): any => {
    const { [accountId]: accountTree } = tree || Tree.get();
    return accountTree || {};
  },
  update: (accountId: string, newAccountTree: any) => {
    let tree = Tree.get();
    tree[accountId] = newAccountTree;

    fs.writeFile(TREE_DIR, JSON.stringify(tree), "utf-8", (err) => {
      if (err) {
        console.log("Error updating tree: ", err);
      }
    });
  },
  delete: (accountId: string) => {
    let tree = Tree.get();
    delete tree[accountId];

    fs.writeFile(TREE_DIR, JSON.stringify(tree), "utf-8", (err) => {
      if (err) {
        console.log("Error updating tree: ", err);
      }
    });
  },
};

const WidgetManager = {
  save: (path: string, fileName: string, content: string) => {
    return new Promise<{ path: string; hash: string }>((resolve, reject) => {
      const { fullPath, writeFilePath } = WidgetManager.getFullPath(path, fileName);

      if (fs.existsSync(fullPath)) {
        let hash = SHA256(content).toString();

        fs.writeFile(writeFilePath, content, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }
          console.log("Added " + fileName);
          resolve({
            path: writeFilePath,
            hash,
          });
        });
      } else {
        fs.mkdir(fullPath, { recursive: true }, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }

          WidgetManager.save(path, fileName, content)
            .then(resolve)
            .catch(reject);
        });
      }
    });
  },
  sync: (path: string, fileName: string, content: string, tree: Tree) => {
    return new Promise<{ path: string; hash: string } | null>((resolve, reject) => {
      const { fullPath, writeFilePath } = WidgetManager.getFullPath(path, fileName);

      if (fs.existsSync(fullPath)) {
        let hash = SHA256(content).toString();

        if (!tree[writeFilePath] || tree[writeFilePath] !== hash) {
          fs.writeFile(writeFilePath, content, (err) => {
            if (err) {
              return reject(err);
            }

            console.log((!tree[writeFilePath] ? "Added " : "Updated ") + fileName);
            resolve({
              path: writeFilePath,
              hash,
            });
          });
        } else {
          resolve(null);
        }
      } else {
        fs.mkdir(fullPath, { recursive: true }, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }

          WidgetManager.sync(path, fileName, content, tree)
            .then(resolve)
            .catch(reject);
        });
      }
    });
  },
  delete: (file: string) => {
    fs.unlinkSync(file);
  },
  deleteAccount: (accountId: string) => {
    fs.rmSync(`./apps/${accountId}`, { recursive: true });
  },
  getFullPath: (path: string, fileName: string) => {
    const breadcrumb = fileName.split(".");
    const widgetName = breadcrumb.pop()!;
    const widgetPath = breadcrumb.join("/");

    return {
      fullPath: `./${path}/${widgetPath}/`,
      writeFilePath: `./${path}/${widgetPath}/${widgetName}.jsx`,
      widget: widgetName,
    };
  },
};

async function clone(accountId: string) {
  const folder = `apps/${accountId}/widget`;
  const widgets = await RpcManager.getWidgets(accountId, ["*"]);
  let accountTree: Tree = {};
  let treeModificationCount = 0;

  let processed = Object.keys(widgets).map(async (widgetName) => {
    const file = await WidgetManager.save(folder, widgetName, widgets[widgetName]);

    if (file !== null) {
      accountTree[file.path] = file.hash;
      treeModificationCount++;
    }
  });

  await Promise.all(processed);

  if (treeModificationCount > 0) {
    Tree.update(accountId, accountTree);
    console.log(`Download finished. Added ${treeModificationCount} files.`);
    DEFAULT_CONFIG.account = accountId;
    fs.writeFileSync(path.join(folder, ".."), JSON.stringify(DEFAULT_CONFIG, null, 2));
    console.log("\nHappy coding!");
  }
}

async function pull(accountId: string) {
  const folder = `apps/${accountId}/widget`;
  const widgets = await RpcManager.getWidgets(accountId, ["*"]);
  let accountTree = Tree.getAccount(accountId);
  let treeModificationCount = 0;

  if (!Object.keys(accountTree).length) {
    console.log(
      "Cannot sync. You have to clone the project first using: bos-workspace clone " + accountId
    );
    return;
  }

  let processed = Object.keys(widgets).map(async (widgetName) => {
    const file = await WidgetManager.sync(folder, widgetName, widgets[widgetName], accountTree);

    if (file !== null) {
      accountTree[file.path] = file.hash;
      treeModificationCount++;
    }
  });

  await Promise.all(processed);

  if (treeModificationCount > 0) {
    Tree.update(accountId, accountTree);
    console.log(`Sync finished. Updated ${treeModificationCount} files.`);
  } else {
    console.log("Sync finished. No updates.");
  }
}

async function remove(accountId: string) {
  const accountTree = Tree.getAccount(accountId);

  if (!Object.keys(accountTree).length) {
    console.error(
      "Cannot remove account. You don't have components from " + accountId
    );
    return;
  }

  let widgetCount = Object.keys(accountTree).length || 0;

  try {
    WidgetManager.deleteAccount(accountId);
    Tree.delete(accountId);
  } catch (error) {
    console.error(`Unable to remove ${accountId} components`);
  }

  console.log(`Removed ${widgetCount} components from ${accountId}`);
}

export {
  clone,
  pull,
  remove,
};