(self.webpackChunkbos_workspace_gateway =
  self.webpackChunkbos_workspace_gateway || []).push([
  [270],
  {
    70270: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => Bt });
      var r = {};
      i.r(r),
        i.d(r, {
          decrypt: () => Lt,
          encrypt: () => Nt,
          generateKey: () => Ct,
          verifyHmac: () => jt,
        });
      var n = i(65755),
        s = i(62873),
        o = i(34155),
        h = function () {
          for (var t = 0, e = 0, i = arguments.length; e < i; e++)
            t += arguments[e].length;
          var r = Array(t),
            n = 0;
          for (e = 0; e < i; e++)
            for (var s = arguments[e], o = 0, h = s.length; o < h; o++, n++)
              r[n] = s[o];
          return r;
        },
        a = function (t, e, i) {
          (this.name = t),
            (this.version = e),
            (this.os = i),
            (this.type = "browser");
        },
        u = function (t) {
          (this.version = t),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = o.platform);
        },
        c = function (t, e, i, r) {
          (this.name = t),
            (this.version = e),
            (this.os = i),
            (this.bot = r),
            (this.type = "bot-device");
        },
        l = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        d = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        p =
          /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        f = 3,
        m = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        g = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function v(t) {
        var e = (function (t) {
          return (
            "" !== t &&
            m.reduce(function (e, i) {
              var r = i[0],
                n = i[1];
              if (e) return e;
              var s = n.exec(t);
              return !!s && [r, s];
            }, !1)
          );
        })(t);
        if (!e) return null;
        var i = e[0],
          r = e[1];
        if ("searchbot" === i) return new l();
        var n = r[1] && r[1].split(/[._]/).slice(0, 3);
        n
          ? n.length < f &&
            (n = h(
              n,
              (function (t) {
                for (var e = [], i = 0; i < t; i++) e.push("0");
                return e;
              })(f - n.length),
            ))
          : (n = []);
        var s = n.join("."),
          o = (function (t) {
            for (var e = 0, i = g.length; e < i; e++) {
              var r = g[e],
                n = r[0];
              if (r[1].exec(t)) return n;
            }
            return null;
          })(t),
          u = p.exec(t);
        return u && u[1] ? new c(i, s, o, u[1]) : new a(i, s, o);
      }
      function w(t) {
        return (function (t) {
          return t
            ? v(t)
            : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new d()
              : "undefined" != typeof navigator
                ? v(navigator.userAgent)
                : void 0 !== o && o.version
                  ? new u(o.version.slice(1))
                  : null;
        })(t);
      }
      function M() {
        const t = w();
        return t && t.os ? t.os : void 0;
      }
      s.getFromWindow,
        s.getFromWindowOrThrow,
        s.getDocumentOrThrow,
        s.getDocument,
        s.getNavigatorOrThrow;
      const y = s.getNavigator,
        _ = (s.getLocationOrThrow, s.getLocation),
        b =
          (s.getCryptoOrThrow,
          s.getCrypto,
          s.getLocalStorageOrThrow,
          s.getLocalStorage);
      function k() {
        return n.D();
      }
      function S(t) {
        let e = null,
          i = null;
        const r = b();
        return (
          r && (i = r.getItem(t)),
          (e = i
            ? (function (t) {
                if ("string" != typeof t)
                  throw new Error(
                    "Cannot safe json parse value of type " + typeof t,
                  );
                try {
                  return JSON.parse(t);
                } catch (e) {
                  return t;
                }
              })(i)
            : i),
          e
        );
      }
      function I(t) {
        const e = b();
        e && e.removeItem(t);
      }
      const O = "WALLETCONNECT_DEEPLINK_CHOICE",
        R = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        T = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ];
      var q = i(11460),
        A = i.n(q),
        E = (i(4501), i(65054)),
        x = i.n(E),
        C = i(48764).Buffer;
      const j = "hex",
        N = "utf8",
        L = "0";
      function B(t) {
        return new Uint8Array(t);
      }
      function W(t, e = !1) {
        const i = t.toString(j);
        return e ? z(i) : i;
      }
      function U(t) {
        return x()(t);
      }
      function P(t, e = !1) {
        return W(U(t), e);
      }
      function F(t) {
        return U(t).toString(N);
      }
      function $(t) {
        return B(
          (function (t) {
            return C.from(K(t), j);
          })(t),
        );
      }
      function D(t) {
        return C.from(t, N);
      }
      function Z(...t) {
        let e = [];
        return (
          t.forEach((t) => (e = e.concat(Array.from(t)))),
          new Uint8Array([...e])
        );
      }
      function J(t, e = 8, i = L) {
        return (function (t, e, i = L) {
          return (function (t, e, i, r = L) {
            const n = e - t.length;
            let s = t;
            if (n > 0) {
              const e = r.repeat(n);
              s = i ? e + t : t + e;
            }
            return s;
          })(t, e, !0, i);
        })(
          t,
          (function (t, e = 8) {
            const i = t % e;
            return i ? ((t - i) / e) * e + e : t;
          })(t.length, e),
          i,
        );
      }
      function K(t) {
        return t.replace(/^0x/, "");
      }
      function z(t) {
        return t.startsWith("0x") ? t : `0x${t}`;
      }
      function Q(t) {
        return (t = J((t = K(t)), 2)) && (t = z(t)), t;
      }
      function V(t) {
        return U(new Uint8Array(t));
      }
      function H(t, e) {
        const i = K(Q(new (A())(t).toString(16)));
        return e ? i : z(i);
      }
      var X = i(91094);
      function G(t) {
        return Q(t);
      }
      const Y = i(56186).payloadId;
      function tt() {
        return ((t, e) => {
          for (
            e = t = "";
            t++ < 36;
            e +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : "-"
          );
          return e;
        })();
      }
      function et(t, e) {
        return (function (t, e) {
          return !(
            "string" != typeof t ||
            !t.match(/^0x[0-9A-Fa-f]*$/) ||
            (e && t.length !== 2 + 2 * e)
          );
        })(t, e);
      }
      function it(t) {
        return void 0 !== t.result;
      }
      function rt(t) {
        return void 0 !== t.error;
      }
      function nt(t) {
        return void 0 !== t.event;
      }
      function st(t) {
        var e, i;
        return (
          (e = t) &&
            e.length &&
            !et(t[0]) &&
            (t[0] = (function (t, e = !1) {
              return W(D(t), e);
            })(t[0], !i)),
          t
        );
      }
      function ot(t) {
        if (void 0 !== t.type && "0" !== t.type) return t;
        if (
          void 0 === t.from ||
          !(e = t.from) ||
          "0x" !== e.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(e) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(e) &&
            !/^(0x)?[0-9A-F]{40}$/.test(e) &&
            e !==
              (function (t) {
                t = K(t.toLowerCase());
                const e = K((0, X.keccak_256)(D(t)));
                let i = "";
                for (let r = 0; r < t.length; r++)
                  parseInt(e[r], 16) > 7
                    ? (i += t[r].toUpperCase())
                    : (i += t[r]);
                return z(i);
              })(e))
        )
          throw new Error(
            "Transaction object must include a valid 'from' value.",
          );
        var e;
        function i(t) {
          let e = t;
          return (
            ("number" == typeof t ||
              ("string" == typeof t &&
                !(function (t) {
                  return "" === t || ("string" == typeof t && "" === t.trim());
                })(t))) &&
              (et(t) ? "string" == typeof t && (e = G(t)) : (e = H(t))),
            "string" == typeof e &&
              (e = (function (t) {
                const e = t.startsWith("0x");
                return (
                  (t = (t = K(t)).startsWith(L) ? t.substring(1) : t),
                  e ? z(t) : t
                );
              })(z(e))),
            e
          );
        }
        const r = {
            from: G(t.from),
            to: void 0 === t.to ? void 0 : G(t.to),
            gasPrice: void 0 === t.gasPrice ? "" : i(t.gasPrice),
            gas:
              void 0 === t.gas
                ? void 0 === t.gasLimit
                  ? ""
                  : i(t.gasLimit)
                : i(t.gas),
            value: void 0 === t.value ? "" : i(t.value),
            nonce: void 0 === t.nonce ? "" : i(t.nonce),
            data: void 0 === t.data ? "" : G(t.data) || "0x",
          },
          n = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(r).forEach((t) => {
            (void 0 === r[t] ||
              ("string" == typeof r[t] && !r[t].trim().length)) &&
              n.includes(t) &&
              delete r[t];
          }),
          r
        );
      }
      var ht = i(17563);
      function at(t) {
        return ht.parse(t);
      }
      const ut = class {
          constructor() {
            (this._eventEmitters = []),
              "undefined" != typeof window &&
                void 0 !== window.addEventListener &&
                (window.addEventListener("online", () =>
                  this.trigger("online"),
                ),
                window.addEventListener("offline", () =>
                  this.trigger("offline"),
                ));
          }
          on(t, e) {
            this._eventEmitters.push({ event: t, callback: e });
          }
          trigger(t) {
            let e = [];
            t && (e = this._eventEmitters.filter((e) => e.event === t)),
              e.forEach((t) => {
                t.callback();
              });
          }
        },
        ct = void 0 !== i.g.WebSocket ? i.g.WebSocket : i(68007),
        lt = class {
          constructor(t) {
            if (
              ((this.opts = t),
              (this._queue = []),
              (this._events = []),
              (this._subscriptions = []),
              (this._protocol = t.protocol),
              (this._version = t.version),
              (this._url = ""),
              (this._netMonitor = null),
              (this._socket = null),
              (this._nextSocket = null),
              (this._subscriptions = t.subscriptions || []),
              (this._netMonitor = t.netMonitor || new ut()),
              !t.url || "string" != typeof t.url)
            )
              throw new Error("Missing or invalid WebSocket url");
            (this._url = t.url),
              this._netMonitor.on("online", () => this._socketCreate());
          }
          set readyState(t) {}
          get readyState() {
            return this._socket ? this._socket.readyState : -1;
          }
          set connecting(t) {}
          get connecting() {
            return 0 === this.readyState;
          }
          set connected(t) {}
          get connected() {
            return 1 === this.readyState;
          }
          set closing(t) {}
          get closing() {
            return 2 === this.readyState;
          }
          set closed(t) {}
          get closed() {
            return 3 === this.readyState;
          }
          open() {
            this._socketCreate();
          }
          close() {
            this._socketClose();
          }
          send(t, e, i) {
            if (!e || "string" != typeof e)
              throw new Error("Missing or invalid topic field");
            this._socketSend({
              topic: e,
              type: "pub",
              payload: t,
              silent: !!i,
            });
          }
          subscribe(t) {
            this._socketSend({
              topic: t,
              type: "sub",
              payload: "",
              silent: !0,
            });
          }
          on(t, e) {
            this._events.push({ event: t, callback: e });
          }
          _socketCreate() {
            if (this._nextSocket) return;
            const t = (function (t, e, i) {
              var r, n;
              const s = (
                  t.startsWith("https")
                    ? t.replace("https", "wss")
                    : t.startsWith("http")
                      ? t.replace("http", "ws")
                      : t
                ).split("?"),
                o =
                  !(function () {
                    const t = w();
                    return !(!t || !t.name) && "node" === t.name.toLowerCase();
                  })() && y()
                    ? {
                        protocol: e,
                        version: i,
                        env: "browser",
                        host:
                          (null === (r = _()) || void 0 === r
                            ? void 0
                            : r.host) || "",
                      }
                    : {
                        protocol: e,
                        version: i,
                        env:
                          (null === (n = w()) || void 0 === n
                            ? void 0
                            : n.name) || "",
                      },
                h = (function (t, e) {
                  let i = at(t);
                  return (
                    (i = Object.assign(Object.assign({}, i), e)),
                    (t = (function (t) {
                      return ht.stringify(t);
                    })(i)),
                    t
                  );
                })(
                  (function (t) {
                    const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                    return void 0 !== e ? t.substr(e) : "";
                  })(s[1] || ""),
                  o,
                );
              return s[0] + "?" + h;
            })(this._url, this._protocol, this._version);
            if (((this._nextSocket = new ct(t)), !this._nextSocket))
              throw new Error("Failed to create socket");
            (this._nextSocket.onmessage = (t) => this._socketReceive(t)),
              (this._nextSocket.onopen = () => this._socketOpen()),
              (this._nextSocket.onerror = (t) => this._socketError(t)),
              (this._nextSocket.onclose = () => {
                setTimeout(() => {
                  (this._nextSocket = null), this._socketCreate();
                }, 1e3);
              });
          }
          _socketOpen() {
            this._socketClose(),
              (this._socket = this._nextSocket),
              (this._nextSocket = null),
              this._queueSubscriptions(),
              this._pushQueue();
          }
          _socketClose() {
            this._socket &&
              ((this._socket.onclose = () => {}), this._socket.close());
          }
          _socketSend(t) {
            const e = JSON.stringify(t);
            this._socket && 1 === this._socket.readyState
              ? this._socket.send(e)
              : (this._setToQueue(t), this._socketCreate());
          }
          async _socketReceive(t) {
            let e;
            try {
              e = JSON.parse(t.data);
            } catch (t) {
              return;
            }
            if (
              (this._socketSend({
                topic: e.topic,
                type: "ack",
                payload: "",
                silent: !0,
              }),
              this._socket && 1 === this._socket.readyState)
            ) {
              const t = this._events.filter((t) => "message" === t.event);
              t && t.length && t.forEach((t) => t.callback(e));
            }
          }
          _socketError(t) {
            const e = this._events.filter((t) => "error" === t.event);
            e && e.length && e.forEach((e) => e.callback(t));
          }
          _queueSubscriptions() {
            this._subscriptions.forEach((t) =>
              this._queue.push({
                topic: t,
                type: "sub",
                payload: "",
                silent: !0,
              }),
            ),
              (this._subscriptions = this.opts.subscriptions || []);
          }
          _setToQueue(t) {
            this._queue.push(t);
          }
          _pushQueue() {
            this._queue.forEach((t) => this._socketSend(t)), (this._queue = []);
          }
        },
        dt = "Session currently connected",
        pt = "Session currently disconnected",
        ft = "JSON RPC response format is invalid",
        mt = "User close QRCode Modal",
        gt = class {
          constructor() {
            this._eventEmitters = [];
          }
          subscribe(t) {
            this._eventEmitters.push(t);
          }
          unsubscribe(t) {
            this._eventEmitters = this._eventEmitters.filter(
              (e) => e.event !== t,
            );
          }
          trigger(t) {
            let e,
              i = [];
            (e =
              void 0 !== t.method
                ? t.method
                : it(t) || rt(t)
                  ? `response:${t.id}`
                  : nt(t)
                    ? t.event
                    : ""),
              e && (i = this._eventEmitters.filter((t) => t.event === e)),
              (i && i.length) ||
                (function (t) {
                  return R.includes(t) || t.startsWith("wc_");
                })(e) ||
                nt(e) ||
                (i = this._eventEmitters.filter(
                  (t) => "call_request" === t.event,
                )),
              i.forEach((e) => {
                if (rt(t)) {
                  const i = new Error(t.error.message);
                  e.callback(i, null);
                } else e.callback(null, t);
              });
          }
        },
        vt = class {
          constructor(t = "walletconnect") {
            this.storageId = t;
          }
          getSession() {
            let t = null;
            const e = S(this.storageId);
            return e && void 0 !== e.bridge && (t = e), t;
          }
          setSession(t) {
            return (
              (function (t, e) {
                const i = "string" == typeof (n = e) ? n : JSON.stringify(n),
                  r = b();
                var n;
                r && r.setItem(t, i);
              })(this.storageId, t),
              t
            );
          }
          removeSession() {
            I(this.storageId);
          }
        },
        wt = "abcdefghijklmnopqrstuvwxyz0123456789"
          .split("")
          .map((t) => `https://${t}.bridge.walletconnect.org`);
      function Mt(t) {
        return (function (t) {
          return (
            "walletconnect.org" ===
            (function (t) {
              return (function (t) {
                let e =
                  t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
                return (e = e.split(":")[0]), (e = e.split("?")[0]), e;
              })(t)
                .split(".")
                .slice(-2)
                .join(".");
            })(t)
          );
        })(t)
          ? wt[Math.floor(Math.random() * wt.length)]
          : t;
      }
      const yt = class {
        constructor(t) {
          if (
            ((this.protocol = "wc"),
            (this.version = 1),
            (this._bridge = ""),
            (this._key = null),
            (this._clientId = ""),
            (this._clientMeta = null),
            (this._peerId = ""),
            (this._peerMeta = null),
            (this._handshakeId = 0),
            (this._handshakeTopic = ""),
            (this._connected = !1),
            (this._accounts = []),
            (this._chainId = 0),
            (this._networkId = 0),
            (this._rpcUrl = ""),
            (this._eventManager = new gt()),
            (this._clientMeta = k() || t.connectorOpts.clientMeta || null),
            (this._cryptoLib = t.cryptoLib),
            (this._sessionStorage =
              t.sessionStorage || new vt(t.connectorOpts.storageId)),
            (this._qrcodeModal = t.connectorOpts.qrcodeModal),
            (this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions),
            (this._signingMethods = [
              ...T,
              ...(t.connectorOpts.signingMethods || []),
            ]),
            !t.connectorOpts.bridge &&
              !t.connectorOpts.uri &&
              !t.connectorOpts.session)
          )
            throw new Error(
              "Missing one of the required parameters: bridge / uri / session",
            );
          t.connectorOpts.bridge && (this.bridge = Mt(t.connectorOpts.bridge)),
            t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
          const e = t.connectorOpts.session || this._getStorageSession();
          e && (this.session = e),
            this.handshakeId &&
              this._subscribeToSessionResponse(
                this.handshakeId,
                "Session request rejected",
              ),
            (this._transport =
              t.transport ||
              new lt({
                protocol: this.protocol,
                version: this.version,
                url: this.bridge,
                subscriptions: [this.clientId],
              })),
            this._subscribeToInternalEvents(),
            this._initTransport(),
            t.connectorOpts.uri && this._subscribeToSessionRequest(),
            t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
        }
        set bridge(t) {
          t && (this._bridge = t);
        }
        get bridge() {
          return this._bridge;
        }
        set key(t) {
          if (!t) return;
          const e = $(t).buffer;
          this._key = e;
        }
        get key() {
          return this._key
            ? ((t = this._key), !0, P(new Uint8Array(t), !1))
            : "";
          var t;
        }
        set clientId(t) {
          t && (this._clientId = t);
        }
        get clientId() {
          let t = this._clientId;
          return t || (t = this._clientId = tt()), this._clientId;
        }
        set peerId(t) {
          t && (this._peerId = t);
        }
        get peerId() {
          return this._peerId;
        }
        set clientMeta(t) {}
        get clientMeta() {
          let t = this._clientMeta;
          return t || (t = this._clientMeta = k()), t;
        }
        set peerMeta(t) {
          this._peerMeta = t;
        }
        get peerMeta() {
          return this._peerMeta;
        }
        set handshakeTopic(t) {
          t && (this._handshakeTopic = t);
        }
        get handshakeTopic() {
          return this._handshakeTopic;
        }
        set handshakeId(t) {
          t && (this._handshakeId = t);
        }
        get handshakeId() {
          return this._handshakeId;
        }
        get uri() {
          return this._formatUri();
        }
        set uri(t) {
          if (!t) return;
          const { handshakeTopic: e, bridge: i, key: r } = this._parseUri(t);
          (this.handshakeTopic = e), (this.bridge = i), (this.key = r);
        }
        set chainId(t) {
          this._chainId = t;
        }
        get chainId() {
          return this._chainId;
        }
        set networkId(t) {
          this._networkId = t;
        }
        get networkId() {
          return this._networkId;
        }
        set accounts(t) {
          this._accounts = t;
        }
        get accounts() {
          return this._accounts;
        }
        set rpcUrl(t) {
          this._rpcUrl = t;
        }
        get rpcUrl() {
          return this._rpcUrl;
        }
        set connected(t) {}
        get connected() {
          return this._connected;
        }
        set pending(t) {}
        get pending() {
          return !!this._handshakeTopic;
        }
        get session() {
          return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
          };
        }
        set session(t) {
          t &&
            ((this._connected = t.connected),
            (this.accounts = t.accounts),
            (this.chainId = t.chainId),
            (this.bridge = t.bridge),
            (this.key = t.key),
            (this.clientId = t.clientId),
            (this.clientMeta = t.clientMeta),
            (this.peerId = t.peerId),
            (this.peerMeta = t.peerMeta),
            (this.handshakeId = t.handshakeId),
            (this.handshakeTopic = t.handshakeTopic));
        }
        on(t, e) {
          const i = { event: t, callback: e };
          this._eventManager.subscribe(i);
        }
        off(t) {
          this._eventManager.unsubscribe(t);
        }
        async createInstantRequest(t) {
          this._key = await this._generateKey();
          const e = this._formatRequest({
            method: "wc_instantRequest",
            params: [
              {
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                request: this._formatRequest(t),
              },
            ],
          });
          (this.handshakeId = e.id),
            (this.handshakeTopic = tt()),
            this._eventManager.trigger({
              event: "display_uri",
              params: [this.uri],
            }),
            this.on("modal_closed", () => {
              throw new Error(mt);
            });
          const i = () => {
            this.killSession();
          };
          try {
            const t = await this._sendCallRequest(e);
            return t && i(), t;
          } catch (t) {
            throw (i(), t);
          }
        }
        async connect(t) {
          if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
          return this.connected
            ? { chainId: this.chainId, accounts: this.accounts }
            : (await this.createSession(t),
              new Promise(async (t, e) => {
                this.on("modal_closed", () => e(new Error(mt))),
                  this.on("connect", (i, r) => {
                    if (i) return e(i);
                    t(r.params[0]);
                  });
              }));
        }
        async createSession(t) {
          if (this._connected) throw new Error(dt);
          if (this.pending) return;
          this._key = await this._generateKey();
          const e = this._formatRequest({
            method: "wc_sessionRequest",
            params: [
              {
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                chainId: t && t.chainId ? t.chainId : null,
              },
            ],
          });
          (this.handshakeId = e.id),
            (this.handshakeTopic = tt()),
            this._sendSessionRequest(e, "Session update rejected", {
              topic: this.handshakeTopic,
            }),
            this._eventManager.trigger({
              event: "display_uri",
              params: [this.uri],
            });
        }
        approveSession(t) {
          if (this._connected) throw new Error(dt);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || "");
          const e = {
              approved: !0,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl,
              peerId: this.clientId,
              peerMeta: this.clientMeta,
            },
            i = { id: this.handshakeId, jsonrpc: "2.0", result: e };
          this._sendResponse(i),
            (this._connected = !0),
            this._setStorageSession(),
            this._eventManager.trigger({
              event: "connect",
              params: [
                {
                  peerId: this.peerId,
                  peerMeta: this.peerMeta,
                  chainId: this.chainId,
                  accounts: this.accounts,
                },
              ],
            });
        }
        rejectSession(t) {
          if (this._connected) throw new Error(dt);
          const e = t && t.message ? t.message : "Session Rejected",
            i = this._formatResponse({
              id: this.handshakeId,
              error: { message: e },
            });
          this._sendResponse(i),
            (this._connected = !1),
            this._eventManager.trigger({
              event: "disconnect",
              params: [{ message: e }],
            }),
            this._removeStorageSession();
        }
        updateSession(t) {
          if (!this._connected) throw new Error(pt);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || "");
          const e = {
              approved: !0,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl,
            },
            i = this._formatRequest({
              method: "wc_sessionUpdate",
              params: [e],
            });
          this._sendSessionRequest(i, "Session update rejected"),
            this._eventManager.trigger({
              event: "session_update",
              params: [{ chainId: this.chainId, accounts: this.accounts }],
            }),
            this._manageStorageSession();
        }
        async killSession(t) {
          const e = t ? t.message : "Session Disconnected",
            i = this._formatRequest({
              method: "wc_sessionUpdate",
              params: [
                {
                  approved: !1,
                  chainId: null,
                  networkId: null,
                  accounts: null,
                },
              ],
            });
          await this._sendRequest(i), this._handleSessionDisconnect(e);
        }
        async sendTransaction(t) {
          if (!this._connected) throw new Error(pt);
          const e = ot(t),
            i = this._formatRequest({
              method: "eth_sendTransaction",
              params: [e],
            });
          return await this._sendCallRequest(i);
        }
        async signTransaction(t) {
          if (!this._connected) throw new Error(pt);
          const e = ot(t),
            i = this._formatRequest({
              method: "eth_signTransaction",
              params: [e],
            });
          return await this._sendCallRequest(i);
        }
        async signMessage(t) {
          if (!this._connected) throw new Error(pt);
          const e = this._formatRequest({ method: "eth_sign", params: t });
          return await this._sendCallRequest(e);
        }
        async signPersonalMessage(t) {
          if (!this._connected) throw new Error(pt);
          t = st(t);
          const e = this._formatRequest({ method: "personal_sign", params: t });
          return await this._sendCallRequest(e);
        }
        async signTypedData(t) {
          if (!this._connected) throw new Error(pt);
          const e = this._formatRequest({
            method: "eth_signTypedData",
            params: t,
          });
          return await this._sendCallRequest(e);
        }
        async updateChain(t) {
          if (!this._connected)
            throw new Error("Session currently disconnected");
          const e = this._formatRequest({
            method: "wallet_updateChain",
            params: [t],
          });
          return await this._sendCallRequest(e);
        }
        unsafeSend(t, e) {
          return (
            this._sendRequest(t, e),
            this._eventManager.trigger({
              event: "call_request_sent",
              params: [{ request: t, options: e }],
            }),
            new Promise((e, i) => {
              this._subscribeToResponse(t.id, (t, r) => {
                if (t) i(t);
                else {
                  if (!r) throw new Error("Missing JSON RPC response");
                  e(r);
                }
              });
            })
          );
        }
        async sendCustomRequest(t, e) {
          if (!this._connected) throw new Error(pt);
          switch (t.method) {
            case "eth_accounts":
              return this.accounts;
            case "eth_chainId":
              return H(this.chainId);
            case "eth_sendTransaction":
            case "eth_signTransaction":
              t.params && (t.params[0] = ot(t.params[0]));
              break;
            case "personal_sign":
              t.params && (t.params = st(t.params));
          }
          const i = this._formatRequest(t);
          return await this._sendCallRequest(i, e);
        }
        approveRequest(t) {
          if (!it(t))
            throw new Error(
              'JSON-RPC success response must include "result" field',
            );
          {
            const e = this._formatResponse(t);
            this._sendResponse(e);
          }
        }
        rejectRequest(t) {
          if (!rt(t))
            throw new Error(
              'JSON-RPC error response must include "error" field',
            );
          {
            const e = this._formatResponse(t);
            this._sendResponse(e);
          }
        }
        transportClose() {
          this._transport.close();
        }
        async _sendRequest(t, e) {
          const i = this._formatRequest(t),
            r = await this._encrypt(i),
            n =
              void 0 !== (null == e ? void 0 : e.topic) ? e.topic : this.peerId,
            s = JSON.stringify(r),
            o =
              void 0 !== (null == e ? void 0 : e.forcePushNotification)
                ? !e.forcePushNotification
                : (function (t) {
                    return (
                      !!t.method.startsWith("wc_") || !T.includes(t.method)
                    );
                  })(i);
          this._transport.send(s, n, o);
        }
        async _sendResponse(t) {
          const e = await this._encrypt(t),
            i = this.peerId,
            r = JSON.stringify(e);
          this._transport.send(r, i, !0);
        }
        async _sendSessionRequest(t, e, i) {
          this._sendRequest(t, i), this._subscribeToSessionResponse(t.id, e);
        }
        _sendCallRequest(t, e) {
          return (
            this._sendRequest(t, e),
            this._eventManager.trigger({
              event: "call_request_sent",
              params: [{ request: t, options: e }],
            }),
            this._subscribeToCallResponse(t.id)
          );
        }
        _formatRequest(t) {
          if (void 0 === t.method)
            throw new Error('JSON RPC request must have valid "method" value');
          return {
            id: void 0 === t.id ? Y() : t.id,
            jsonrpc: "2.0",
            method: t.method,
            params: void 0 === t.params ? [] : t.params,
          };
        }
        _formatResponse(t) {
          if (void 0 === t.id)
            throw new Error('JSON RPC request must have valid "id" value');
          const e = { id: t.id, jsonrpc: "2.0" };
          if (rt(t)) {
            const i = (function (t) {
              const e = t.message || "Failed or Rejected Request";
              let i = -32e3;
              if (t && !t.code)
                switch (e) {
                  case "Parse error":
                    i = -32700;
                    break;
                  case "Invalid request":
                    i = -32600;
                    break;
                  case "Method not found":
                    i = -32601;
                    break;
                  case "Invalid params":
                    i = -32602;
                    break;
                  case "Internal error":
                    i = -32603;
                    break;
                  default:
                    i = -32e3;
                }
              const r = { code: i, message: e };
              return t.data && (r.data = t.data), r;
            })(t.error);
            return Object.assign(Object.assign(Object.assign({}, e), t), {
              error: i,
            });
          }
          if (it(t)) return Object.assign(Object.assign({}, e), t);
          throw new Error(ft);
        }
        _handleSessionDisconnect(t) {
          const e = t || "Session Disconnected";
          this._connected ||
            (this._qrcodeModal && this._qrcodeModal.close(), I(O)),
            this._connected && (this._connected = !1),
            this._handshakeId && (this._handshakeId = 0),
            this._handshakeTopic && (this._handshakeTopic = ""),
            this._peerId && (this._peerId = ""),
            this._eventManager.trigger({
              event: "disconnect",
              params: [{ message: e }],
            }),
            this._removeStorageSession(),
            this.transportClose();
        }
        _handleSessionResponse(t, e) {
          e && e.approved
            ? (this._connected
                ? (e.chainId && (this.chainId = e.chainId),
                  e.accounts && (this.accounts = e.accounts),
                  this._eventManager.trigger({
                    event: "session_update",
                    params: [
                      { chainId: this.chainId, accounts: this.accounts },
                    ],
                  }))
                : ((this._connected = !0),
                  e.chainId && (this.chainId = e.chainId),
                  e.accounts && (this.accounts = e.accounts),
                  e.peerId && !this.peerId && (this.peerId = e.peerId),
                  e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta),
                  this._eventManager.trigger({
                    event: "connect",
                    params: [
                      {
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        chainId: this.chainId,
                        accounts: this.accounts,
                      },
                    ],
                  })),
              this._manageStorageSession())
            : this._handleSessionDisconnect(t);
        }
        async _handleIncomingMessages(t) {
          if (![this.clientId, this.handshakeTopic].includes(t.topic)) return;
          let e;
          try {
            e = JSON.parse(t.payload);
          } catch (t) {
            return;
          }
          const i = await this._decrypt(e);
          i && this._eventManager.trigger(i);
        }
        _subscribeToSessionRequest() {
          this._transport.subscribe(this.handshakeTopic);
        }
        _subscribeToResponse(t, e) {
          this.on(`response:${t}`, e);
        }
        _subscribeToSessionResponse(t, e) {
          this._subscribeToResponse(t, (t, i) => {
            t
              ? this._handleSessionResponse(t.message)
              : it(i)
                ? this._handleSessionResponse(e, i.result)
                : i.error && i.error.message
                  ? this._handleSessionResponse(i.error.message)
                  : this._handleSessionResponse(e);
          });
        }
        _subscribeToCallResponse(t) {
          return new Promise((e, i) => {
            this._subscribeToResponse(t, (t, r) => {
              t
                ? i(t)
                : it(r)
                  ? e(r.result)
                  : r.error && r.error.message
                    ? i(r.error)
                    : i(new Error(ft));
            });
          });
        }
        _subscribeToInternalEvents() {
          this.on("display_uri", () => {
            this._qrcodeModal &&
              this._qrcodeModal.open(
                this.uri,
                () => {
                  this._eventManager.trigger({
                    event: "modal_closed",
                    params: [],
                  });
                },
                this._qrcodeModalOptions,
              );
          }),
            this.on("connect", () => {
              this._qrcodeModal && this._qrcodeModal.close();
            }),
            this.on("call_request_sent", (t, e) => {
              const { request: i } = e.params[0];
              if (
                M() &&
                ((function () {
                  const t = M();
                  return !!t && t.toLowerCase().includes("android");
                })() ||
                  (function () {
                    const t = M();
                    return (
                      !!t &&
                      (t.toLowerCase().includes("ios") ||
                        (t.toLowerCase().includes("mac") &&
                          navigator.maxTouchPoints > 1))
                    );
                  })()) &&
                this._signingMethods.includes(i.method)
              ) {
                const t = S(O);
                t && (window.location.href = t.href);
              }
            }),
            this.on("wc_sessionRequest", (t, e) => {
              t &&
                this._eventManager.trigger({
                  event: "error",
                  params: [
                    { code: "SESSION_REQUEST_ERROR", message: t.toString() },
                  ],
                }),
                (this.handshakeId = e.id),
                (this.peerId = e.params[0].peerId),
                (this.peerMeta = e.params[0].peerMeta);
              const i = Object.assign(Object.assign({}, e), {
                method: "session_request",
              });
              this._eventManager.trigger(i);
            }),
            this.on("wc_sessionUpdate", (t, e) => {
              t && this._handleSessionResponse(t.message),
                this._handleSessionResponse(
                  "Session disconnected",
                  e.params[0],
                );
            });
        }
        _initTransport() {
          this._transport.on("message", (t) => this._handleIncomingMessages(t)),
            this._transport.on("open", () =>
              this._eventManager.trigger({
                event: "transport_open",
                params: [],
              }),
            ),
            this._transport.on("close", () =>
              this._eventManager.trigger({
                event: "transport_close",
                params: [],
              }),
            ),
            this._transport.on("error", () =>
              this._eventManager.trigger({
                event: "transport_error",
                params: ["Websocket connection failed"],
              }),
            ),
            this._transport.open();
        }
        _formatUri() {
          return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`;
        }
        _parseUri(t) {
          const e = (function (t) {
            const e = t.indexOf(":"),
              i = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
              r = t.substring(0, e),
              n = (function (t) {
                const e = t.split("@");
                return { handshakeTopic: e[0], version: parseInt(e[1], 10) };
              })(t.substring(e + 1, i)),
              s = (function (t) {
                const e = at(t);
                return { key: e.key || "", bridge: e.bridge || "" };
              })(void 0 !== i ? t.substr(i) : "");
            return Object.assign(Object.assign({ protocol: r }, n), s);
          })(t);
          if (e.protocol === this.protocol) {
            if (!e.handshakeTopic)
              throw Error("Invalid or missing handshakeTopic parameter value");
            const t = e.handshakeTopic;
            if (!e.bridge)
              throw Error("Invalid or missing bridge url parameter value");
            const i = decodeURIComponent(e.bridge);
            if (!e.key) throw Error("Invalid or missing key parameter value");
            return { handshakeTopic: t, bridge: i, key: e.key };
          }
          throw new Error("URI format is invalid");
        }
        async _generateKey() {
          return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
        }
        async _encrypt(t) {
          const e = this._key;
          return this._cryptoLib && e
            ? await this._cryptoLib.encrypt(t, e)
            : null;
        }
        async _decrypt(t) {
          const e = this._key;
          return this._cryptoLib && e
            ? await this._cryptoLib.decrypt(t, e)
            : null;
        }
        _getStorageSession() {
          let t = null;
          return (
            this._sessionStorage && (t = this._sessionStorage.getSession()), t
          );
        }
        _setStorageSession() {
          this._sessionStorage && this._sessionStorage.setSession(this.session);
        }
        _removeStorageSession() {
          this._sessionStorage && this._sessionStorage.removeSession();
        }
        _manageStorageSession() {
          this._connected
            ? this._setStorageSession()
            : this._removeStorageSession();
        }
        _registerPushServer(t) {
          if (!t.url || "string" != typeof t.url)
            throw Error(
              "Invalid or missing pushServerOpts.url parameter value",
            );
          if (!t.type || "string" != typeof t.type)
            throw Error(
              "Invalid or missing pushServerOpts.type parameter value",
            );
          if (!t.token || "string" != typeof t.token)
            throw Error(
              "Invalid or missing pushServerOpts.token parameter value",
            );
          const e = {
            bridge: this.bridge,
            topic: this.clientId,
            type: t.type,
            token: t.token,
            peerName: "",
            language: t.language || "",
          };
          this.on("connect", async (i, r) => {
            if (i) throw i;
            if (t.peerMeta) {
              const t = r.params[0].peerMeta.name;
              e.peerName = t;
            }
            try {
              const i = await fetch(`${t.url}/new`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(e),
              });
              if (!(await i.json()).success)
                throw Error("Failed to register in Push Server");
            } catch (i) {
              throw Error("Failed to register in Push Server");
            }
          });
        }
      };
      var _t = i(1468);
      const bt = 256,
        kt = 256,
        St = "AES-CBC",
        It = `SHA-${bt}`,
        Ot = "HMAC",
        Rt = "encrypt",
        Tt = "decrypt",
        qt = "sign",
        At = "verify";
      async function Et(t, e = St) {
        return _t.getSubtleCrypto().importKey(
          "raw",
          t,
          (function (t) {
            return t === St
              ? { length: bt, name: St }
              : { hash: { name: It }, name: Ot };
          })(e),
          !0,
          (function (t) {
            return t === St ? [Rt, Tt] : [qt, At];
          })(e),
        );
      }
      async function xt(t, e) {
        const i = await (async function (t, e) {
          const i = _t.getSubtleCrypto(),
            r = await Et(t, Ot),
            n = await i.sign({ length: kt, name: Ot }, r, e);
          return new Uint8Array(n);
        })(t, e);
        return i;
      }
      async function Ct(t) {
        const e = (function (t) {
          return _t.getBrowerCrypto().getRandomValues(new Uint8Array(t));
        })((t || 256) / 8);
        return B(U(e)).buffer;
      }
      async function jt(t, e) {
        const i = $(t.data),
          r = $(t.iv),
          n = P($(t.hmac), !1),
          s = Z(i, r),
          o = P(await xt(e, s), !1);
        return K(n) === K(o);
      }
      async function Nt(t, e, i) {
        const r = B(V(e)),
          n = B(V(i || (await Ct(128)))),
          s = P(n, !1),
          o = B(D(JSON.stringify(t))),
          h = await (function (t, e, i) {
            return (async function (t, e, i) {
              const r = _t.getSubtleCrypto(),
                n = await Et(e, St),
                s = await r.encrypt({ iv: t, name: St }, n, i);
              return new Uint8Array(s);
            })(t, e, i);
          })(n, r, o),
          a = P(h, !1),
          u = Z(h, n);
        return { data: a, hmac: P(await xt(r, u), !1), iv: s };
      }
      async function Lt(t, e) {
        const i = B(V(e));
        if (!i) throw new Error("Missing key: required for decryption");
        if (!(await jt(t, i))) return null;
        const r = $(t.data),
          n = $(t.iv),
          s = F(
            await (function (t, e, i) {
              return (async function (t, e, i) {
                const r = _t.getSubtleCrypto(),
                  n = await Et(e, St),
                  s = await r.decrypt({ iv: t, name: St }, n, i);
                return new Uint8Array(s);
              })(t, e, i);
            })(n, i, r),
          );
        let o;
        try {
          o = JSON.parse(s);
        } catch (t) {
          return null;
        }
        return o;
      }
      const Bt = class extends yt {
        constructor(t, e) {
          super({ cryptoLib: r, connectorOpts: t, pushServerOpts: e });
        }
      };
    },
    68007: (t) => {
      "use strict";
      t.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object",
        );
      };
    },
    11460: function (t, e, i) {
      !(function (t, e) {
        "use strict";
        function r(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function n(t, e) {
          t.super_ = e;
          var i = function () {};
          (i.prototype = e.prototype),
            (t.prototype = new i()),
            (t.prototype.constructor = t);
        }
        function s(t, e, i) {
          if (s.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
              this._init(t || 0, e || 10, i || "be"));
        }
        var o;
        "object" == typeof t ? (t.exports = s) : (e.BN = s),
          (s.BN = s),
          (s.wordSize = 26);
        try {
          o = i(36563).Buffer;
        } catch (t) {}
        function h(t, e, i) {
          for (var r = 0, n = Math.min(t.length, i), s = e; s < n; s++) {
            var o = t.charCodeAt(s) - 48;
            (r <<= 4),
              (r |=
                o >= 49 && o <= 54
                  ? o - 49 + 10
                  : o >= 17 && o <= 22
                    ? o - 17 + 10
                    : 15 & o);
          }
          return r;
        }
        function a(t, e, i, r) {
          for (var n = 0, s = Math.min(t.length, i), o = e; o < s; o++) {
            var h = t.charCodeAt(o) - 48;
            (n *= r), (n += h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h);
          }
          return n;
        }
        (s.isBN = function (t) {
          return (
            t instanceof s ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === s.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (s.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (s.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (s.prototype._init = function (t, e, i) {
            if ("number" == typeof t) return this._initNumber(t, e, i);
            if ("object" == typeof t) return this._initArray(t, e, i);
            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++,
              16 === e ? this._parseHex(t, n) : this._parseBase(t, e, n),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === i && this._initArray(this.toArray(), e, i);
          }),
          (s.prototype._initNumber = function (t, e, i) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
              "le" === i && this._initArray(this.toArray(), e, i);
          }),
          (s.prototype._initArray = function (t, e, i) {
            if ((r("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var s,
              o,
              h = 0;
            if ("be" === i)
              for (n = t.length - 1, s = 0; n >= 0; n -= 3)
                (o = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[s] |= (o << h) & 67108863),
                  (this.words[s + 1] = (o >>> (26 - h)) & 67108863),
                  (h += 24) >= 26 && ((h -= 26), s++);
            else if ("le" === i)
              for (n = 0, s = 0; n < t.length; n += 3)
                (o = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[s] |= (o << h) & 67108863),
                  (this.words[s + 1] = (o >>> (26 - h)) & 67108863),
                  (h += 24) >= 26 && ((h -= 26), s++);
            return this.strip();
          }),
          (s.prototype._parseHex = function (t, e) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var r,
              n,
              s = 0;
            for (i = t.length - 6, r = 0; i >= e; i -= 6)
              (n = h(t, i, i + 6)),
                (this.words[r] |= (n << s) & 67108863),
                (this.words[r + 1] |= (n >>> (26 - s)) & 4194303),
                (s += 24) >= 26 && ((s -= 26), r++);
            i + 6 !== e &&
              ((n = h(t, e, i + 6)),
              (this.words[r] |= (n << s) & 67108863),
              (this.words[r + 1] |= (n >>> (26 - s)) & 4194303)),
              this.strip();
          }),
          (s.prototype._parseBase = function (t, e, i) {
            (this.words = [0]), (this.length = 1);
            for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
            r--, (n = (n / e) | 0);
            for (
              var s = t.length - i,
                o = s % r,
                h = Math.min(s, s - o) + i,
                u = 0,
                c = i;
              c < h;
              c += r
            )
              (u = a(t, c, c + r, e)),
                this.imuln(n),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== o) {
              var l = 1;
              for (u = a(t, c, t.length, e), c = 0; c < o; c++) l *= e;
              this.imuln(l),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
          }),
          (s.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (s.prototype.clone = function () {
            var t = new s(null);
            return this.copy(t), t;
          }),
          (s.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (s.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (s.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (s.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var u = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          l = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function d(t, e, i) {
          i.negative = e.negative ^ t.negative;
          var r = (t.length + e.length) | 0;
          (i.length = r), (r = (r - 1) | 0);
          var n = 0 | t.words[0],
            s = 0 | e.words[0],
            o = n * s,
            h = 67108863 & o,
            a = (o / 67108864) | 0;
          i.words[0] = h;
          for (var u = 1; u < r; u++) {
            for (
              var c = a >>> 26,
                l = 67108863 & a,
                d = Math.min(u, e.length - 1),
                p = Math.max(0, u - t.length + 1);
              p <= d;
              p++
            ) {
              var f = (u - p) | 0;
              (c +=
                ((o = (n = 0 | t.words[f]) * (s = 0 | e.words[p]) + l) /
                  67108864) |
                0),
                (l = 67108863 & o);
            }
            (i.words[u] = 0 | l), (a = 0 | c);
          }
          return 0 !== a ? (i.words[u] = 0 | a) : i.length--, i.strip();
        }
        (s.prototype.toString = function (t, e) {
          var i;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            i = "";
            for (var n = 0, s = 0, o = 0; o < this.length; o++) {
              var h = this.words[o],
                a = (16777215 & ((h << n) | s)).toString(16);
              (i =
                0 != (s = (h >>> (24 - n)) & 16777215) || o !== this.length - 1
                  ? u[6 - a.length] + a + i
                  : a + i),
                (n += 2) >= 26 && ((n -= 26), o--);
            }
            for (0 !== s && (i = s.toString(16) + i); i.length % e != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var d = c[t],
              p = l[t];
            i = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero(); ) {
              var m = f.modn(p).toString(t);
              i = (f = f.idivn(p)).isZero() ? m + i : u[d - m.length] + m + i;
            }
            for (this.isZero() && (i = "0" + i); i.length % e != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (s.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (s.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (s.prototype.toBuffer = function (t, e) {
            return r(void 0 !== o), this.toArrayLike(o, t, e);
          }),
          (s.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (s.prototype.toArrayLike = function (t, e, i) {
            var n = this.byteLength(),
              s = i || Math.max(1, n);
            r(n <= s, "byte array longer than desired length"),
              r(s > 0, "Requested array length <= 0"),
              this.strip();
            var o,
              h,
              a = "le" === e,
              u = new t(s),
              c = this.clone();
            if (a) {
              for (h = 0; !c.isZero(); h++)
                (o = c.andln(255)), c.iushrn(8), (u[h] = o);
              for (; h < s; h++) u[h] = 0;
            } else {
              for (h = 0; h < s - n; h++) u[h] = 0;
              for (h = 0; !c.isZero(); h++)
                (o = c.andln(255)), c.iushrn(8), (u[s - h - 1] = o);
            }
            return u;
          }),
          Math.clz32
            ? (s.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (s.prototype._countBits = function (t) {
                var e = t,
                  i = 0;
                return (
                  e >= 4096 && ((i += 13), (e >>>= 13)),
                  e >= 64 && ((i += 7), (e >>>= 7)),
                  e >= 8 && ((i += 4), (e >>>= 4)),
                  e >= 2 && ((i += 2), (e >>>= 2)),
                  i + e
                );
              }),
          (s.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              i = 0;
            return (
              0 == (8191 & e) && ((i += 13), (e >>>= 13)),
              0 == (127 & e) && ((i += 7), (e >>>= 7)),
              0 == (15 & e) && ((i += 4), (e >>>= 4)),
              0 == (3 & e) && ((i += 2), (e >>>= 2)),
              0 == (1 & e) && i++,
              i
            );
          }),
          (s.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var i = this._zeroBits(this.words[e]);
              if (((t += i), 26 !== i)) break;
            }
            return t;
          }),
          (s.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (s.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (s.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (s.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (s.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (s.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (s.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (s.prototype.ior = function (t) {
            return r(0 == (this.negative | t.negative)), this.iuor(t);
          }),
          (s.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (s.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (s.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var i = 0; i < e.length; i++)
              this.words[i] = this.words[i] & t.words[i];
            return (this.length = e.length), this.strip();
          }),
          (s.prototype.iand = function (t) {
            return r(0 == (this.negative | t.negative)), this.iuand(t);
          }),
          (s.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (s.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (s.prototype.iuxor = function (t) {
            var e, i;
            this.length > t.length
              ? ((e = this), (i = t))
              : ((e = t), (i = this));
            for (var r = 0; r < i.length; r++)
              this.words[r] = e.words[r] ^ i.words[r];
            if (this !== e)
              for (; r < e.length; r++) this.words[r] = e.words[r];
            return (this.length = e.length), this.strip();
          }),
          (s.prototype.ixor = function (t) {
            return r(0 == (this.negative | t.negative)), this.iuxor(t);
          }),
          (s.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (s.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (s.prototype.inotn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              i = t % 26;
            this._expand(e), i > 0 && e--;
            for (var n = 0; n < e; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              i > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
              this.strip()
            );
          }),
          (s.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (s.prototype.setn = function (t, e) {
            r("number" == typeof t && t >= 0);
            var i = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(i + 1),
              (this.words[i] = e
                ? this.words[i] | (1 << n)
                : this.words[i] & ~(1 << n)),
              this.strip()
            );
          }),
          (s.prototype.iadd = function (t) {
            var e, i, r;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((i = this), (r = t))
              : ((i = t), (r = this));
            for (var n = 0, s = 0; s < r.length; s++)
              (e = (0 | i.words[s]) + (0 | r.words[s]) + n),
                (this.words[s] = 67108863 & e),
                (n = e >>> 26);
            for (; 0 !== n && s < i.length; s++)
              (e = (0 | i.words[s]) + n),
                (this.words[s] = 67108863 & e),
                (n = e >>> 26);
            if (((this.length = i.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (i !== this)
              for (; s < i.length; s++) this.words[s] = i.words[s];
            return this;
          }),
          (s.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                  ? this.clone().iadd(t)
                  : t.clone().iadd(this);
          }),
          (s.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i,
              r,
              n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
            for (var s = 0, o = 0; o < r.length; o++)
              (s = (e = (0 | i.words[o]) - (0 | r.words[o]) + s) >> 26),
                (this.words[o] = 67108863 & e);
            for (; 0 !== s && o < i.length; o++)
              (s = (e = (0 | i.words[o]) + s) >> 26),
                (this.words[o] = 67108863 & e);
            if (0 === s && o < i.length && i !== this)
              for (; o < i.length; o++) this.words[o] = i.words[o];
            return (
              (this.length = Math.max(this.length, o)),
              i !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (s.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, i) {
          var r,
            n,
            s,
            o = t.words,
            h = e.words,
            a = i.words,
            u = 0,
            c = 0 | o[0],
            l = 8191 & c,
            d = c >>> 13,
            p = 0 | o[1],
            f = 8191 & p,
            m = p >>> 13,
            g = 0 | o[2],
            v = 8191 & g,
            w = g >>> 13,
            M = 0 | o[3],
            y = 8191 & M,
            _ = M >>> 13,
            b = 0 | o[4],
            k = 8191 & b,
            S = b >>> 13,
            I = 0 | o[5],
            O = 8191 & I,
            R = I >>> 13,
            T = 0 | o[6],
            q = 8191 & T,
            A = T >>> 13,
            E = 0 | o[7],
            x = 8191 & E,
            C = E >>> 13,
            j = 0 | o[8],
            N = 8191 & j,
            L = j >>> 13,
            B = 0 | o[9],
            W = 8191 & B,
            U = B >>> 13,
            P = 0 | h[0],
            F = 8191 & P,
            $ = P >>> 13,
            D = 0 | h[1],
            Z = 8191 & D,
            J = D >>> 13,
            K = 0 | h[2],
            z = 8191 & K,
            Q = K >>> 13,
            V = 0 | h[3],
            H = 8191 & V,
            X = V >>> 13,
            G = 0 | h[4],
            Y = 8191 & G,
            tt = G >>> 13,
            et = 0 | h[5],
            it = 8191 & et,
            rt = et >>> 13,
            nt = 0 | h[6],
            st = 8191 & nt,
            ot = nt >>> 13,
            ht = 0 | h[7],
            at = 8191 & ht,
            ut = ht >>> 13,
            ct = 0 | h[8],
            lt = 8191 & ct,
            dt = ct >>> 13,
            pt = 0 | h[9],
            ft = 8191 & pt,
            mt = pt >>> 13;
          (i.negative = t.negative ^ e.negative), (i.length = 19);
          var gt =
            (((u + (r = Math.imul(l, F))) | 0) +
              ((8191 & (n = ((n = Math.imul(l, $)) + Math.imul(d, F)) | 0)) <<
                13)) |
            0;
          (u = ((((s = Math.imul(d, $)) + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (r = Math.imul(f, F)),
            (n = ((n = Math.imul(f, $)) + Math.imul(m, F)) | 0),
            (s = Math.imul(m, $));
          var vt =
            (((u + (r = (r + Math.imul(l, Z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, J)) | 0) + Math.imul(d, Z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, J)) | 0) + (n >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (r = Math.imul(v, F)),
            (n = ((n = Math.imul(v, $)) + Math.imul(w, F)) | 0),
            (s = Math.imul(w, $)),
            (r = (r + Math.imul(f, Z)) | 0),
            (n = ((n = (n + Math.imul(f, J)) | 0) + Math.imul(m, Z)) | 0),
            (s = (s + Math.imul(m, J)) | 0);
          var wt =
            (((u + (r = (r + Math.imul(l, z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, Q)) | 0) + Math.imul(d, z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, Q)) | 0) + (n >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (r = Math.imul(y, F)),
            (n = ((n = Math.imul(y, $)) + Math.imul(_, F)) | 0),
            (s = Math.imul(_, $)),
            (r = (r + Math.imul(v, Z)) | 0),
            (n = ((n = (n + Math.imul(v, J)) | 0) + Math.imul(w, Z)) | 0),
            (s = (s + Math.imul(w, J)) | 0),
            (r = (r + Math.imul(f, z)) | 0),
            (n = ((n = (n + Math.imul(f, Q)) | 0) + Math.imul(m, z)) | 0),
            (s = (s + Math.imul(m, Q)) | 0);
          var Mt =
            (((u + (r = (r + Math.imul(l, H)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, X)) | 0) + Math.imul(d, H)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, X)) | 0) + (n >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (r = Math.imul(k, F)),
            (n = ((n = Math.imul(k, $)) + Math.imul(S, F)) | 0),
            (s = Math.imul(S, $)),
            (r = (r + Math.imul(y, Z)) | 0),
            (n = ((n = (n + Math.imul(y, J)) | 0) + Math.imul(_, Z)) | 0),
            (s = (s + Math.imul(_, J)) | 0),
            (r = (r + Math.imul(v, z)) | 0),
            (n = ((n = (n + Math.imul(v, Q)) | 0) + Math.imul(w, z)) | 0),
            (s = (s + Math.imul(w, Q)) | 0),
            (r = (r + Math.imul(f, H)) | 0),
            (n = ((n = (n + Math.imul(f, X)) | 0) + Math.imul(m, H)) | 0),
            (s = (s + Math.imul(m, X)) | 0);
          var yt =
            (((u + (r = (r + Math.imul(l, Y)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(d, Y)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, tt)) | 0) + (n >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (r = Math.imul(O, F)),
            (n = ((n = Math.imul(O, $)) + Math.imul(R, F)) | 0),
            (s = Math.imul(R, $)),
            (r = (r + Math.imul(k, Z)) | 0),
            (n = ((n = (n + Math.imul(k, J)) | 0) + Math.imul(S, Z)) | 0),
            (s = (s + Math.imul(S, J)) | 0),
            (r = (r + Math.imul(y, z)) | 0),
            (n = ((n = (n + Math.imul(y, Q)) | 0) + Math.imul(_, z)) | 0),
            (s = (s + Math.imul(_, Q)) | 0),
            (r = (r + Math.imul(v, H)) | 0),
            (n = ((n = (n + Math.imul(v, X)) | 0) + Math.imul(w, H)) | 0),
            (s = (s + Math.imul(w, X)) | 0),
            (r = (r + Math.imul(f, Y)) | 0),
            (n = ((n = (n + Math.imul(f, tt)) | 0) + Math.imul(m, Y)) | 0),
            (s = (s + Math.imul(m, tt)) | 0);
          var _t =
            (((u + (r = (r + Math.imul(l, it)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, rt)) | 0) + Math.imul(d, it)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, rt)) | 0) + (n >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (r = Math.imul(q, F)),
            (n = ((n = Math.imul(q, $)) + Math.imul(A, F)) | 0),
            (s = Math.imul(A, $)),
            (r = (r + Math.imul(O, Z)) | 0),
            (n = ((n = (n + Math.imul(O, J)) | 0) + Math.imul(R, Z)) | 0),
            (s = (s + Math.imul(R, J)) | 0),
            (r = (r + Math.imul(k, z)) | 0),
            (n = ((n = (n + Math.imul(k, Q)) | 0) + Math.imul(S, z)) | 0),
            (s = (s + Math.imul(S, Q)) | 0),
            (r = (r + Math.imul(y, H)) | 0),
            (n = ((n = (n + Math.imul(y, X)) | 0) + Math.imul(_, H)) | 0),
            (s = (s + Math.imul(_, X)) | 0),
            (r = (r + Math.imul(v, Y)) | 0),
            (n = ((n = (n + Math.imul(v, tt)) | 0) + Math.imul(w, Y)) | 0),
            (s = (s + Math.imul(w, tt)) | 0),
            (r = (r + Math.imul(f, it)) | 0),
            (n = ((n = (n + Math.imul(f, rt)) | 0) + Math.imul(m, it)) | 0),
            (s = (s + Math.imul(m, rt)) | 0);
          var bt =
            (((u + (r = (r + Math.imul(l, st)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ot)) | 0) + Math.imul(d, st)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, ot)) | 0) + (n >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (r = Math.imul(x, F)),
            (n = ((n = Math.imul(x, $)) + Math.imul(C, F)) | 0),
            (s = Math.imul(C, $)),
            (r = (r + Math.imul(q, Z)) | 0),
            (n = ((n = (n + Math.imul(q, J)) | 0) + Math.imul(A, Z)) | 0),
            (s = (s + Math.imul(A, J)) | 0),
            (r = (r + Math.imul(O, z)) | 0),
            (n = ((n = (n + Math.imul(O, Q)) | 0) + Math.imul(R, z)) | 0),
            (s = (s + Math.imul(R, Q)) | 0),
            (r = (r + Math.imul(k, H)) | 0),
            (n = ((n = (n + Math.imul(k, X)) | 0) + Math.imul(S, H)) | 0),
            (s = (s + Math.imul(S, X)) | 0),
            (r = (r + Math.imul(y, Y)) | 0),
            (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(_, Y)) | 0),
            (s = (s + Math.imul(_, tt)) | 0),
            (r = (r + Math.imul(v, it)) | 0),
            (n = ((n = (n + Math.imul(v, rt)) | 0) + Math.imul(w, it)) | 0),
            (s = (s + Math.imul(w, rt)) | 0),
            (r = (r + Math.imul(f, st)) | 0),
            (n = ((n = (n + Math.imul(f, ot)) | 0) + Math.imul(m, st)) | 0),
            (s = (s + Math.imul(m, ot)) | 0);
          var kt =
            (((u + (r = (r + Math.imul(l, at)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ut)) | 0) + Math.imul(d, at)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, ut)) | 0) + (n >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (r = Math.imul(N, F)),
            (n = ((n = Math.imul(N, $)) + Math.imul(L, F)) | 0),
            (s = Math.imul(L, $)),
            (r = (r + Math.imul(x, Z)) | 0),
            (n = ((n = (n + Math.imul(x, J)) | 0) + Math.imul(C, Z)) | 0),
            (s = (s + Math.imul(C, J)) | 0),
            (r = (r + Math.imul(q, z)) | 0),
            (n = ((n = (n + Math.imul(q, Q)) | 0) + Math.imul(A, z)) | 0),
            (s = (s + Math.imul(A, Q)) | 0),
            (r = (r + Math.imul(O, H)) | 0),
            (n = ((n = (n + Math.imul(O, X)) | 0) + Math.imul(R, H)) | 0),
            (s = (s + Math.imul(R, X)) | 0),
            (r = (r + Math.imul(k, Y)) | 0),
            (n = ((n = (n + Math.imul(k, tt)) | 0) + Math.imul(S, Y)) | 0),
            (s = (s + Math.imul(S, tt)) | 0),
            (r = (r + Math.imul(y, it)) | 0),
            (n = ((n = (n + Math.imul(y, rt)) | 0) + Math.imul(_, it)) | 0),
            (s = (s + Math.imul(_, rt)) | 0),
            (r = (r + Math.imul(v, st)) | 0),
            (n = ((n = (n + Math.imul(v, ot)) | 0) + Math.imul(w, st)) | 0),
            (s = (s + Math.imul(w, ot)) | 0),
            (r = (r + Math.imul(f, at)) | 0),
            (n = ((n = (n + Math.imul(f, ut)) | 0) + Math.imul(m, at)) | 0),
            (s = (s + Math.imul(m, ut)) | 0);
          var St =
            (((u + (r = (r + Math.imul(l, lt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, dt)) | 0) + Math.imul(d, lt)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, dt)) | 0) + (n >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (r = Math.imul(W, F)),
            (n = ((n = Math.imul(W, $)) + Math.imul(U, F)) | 0),
            (s = Math.imul(U, $)),
            (r = (r + Math.imul(N, Z)) | 0),
            (n = ((n = (n + Math.imul(N, J)) | 0) + Math.imul(L, Z)) | 0),
            (s = (s + Math.imul(L, J)) | 0),
            (r = (r + Math.imul(x, z)) | 0),
            (n = ((n = (n + Math.imul(x, Q)) | 0) + Math.imul(C, z)) | 0),
            (s = (s + Math.imul(C, Q)) | 0),
            (r = (r + Math.imul(q, H)) | 0),
            (n = ((n = (n + Math.imul(q, X)) | 0) + Math.imul(A, H)) | 0),
            (s = (s + Math.imul(A, X)) | 0),
            (r = (r + Math.imul(O, Y)) | 0),
            (n = ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(R, Y)) | 0),
            (s = (s + Math.imul(R, tt)) | 0),
            (r = (r + Math.imul(k, it)) | 0),
            (n = ((n = (n + Math.imul(k, rt)) | 0) + Math.imul(S, it)) | 0),
            (s = (s + Math.imul(S, rt)) | 0),
            (r = (r + Math.imul(y, st)) | 0),
            (n = ((n = (n + Math.imul(y, ot)) | 0) + Math.imul(_, st)) | 0),
            (s = (s + Math.imul(_, ot)) | 0),
            (r = (r + Math.imul(v, at)) | 0),
            (n = ((n = (n + Math.imul(v, ut)) | 0) + Math.imul(w, at)) | 0),
            (s = (s + Math.imul(w, ut)) | 0),
            (r = (r + Math.imul(f, lt)) | 0),
            (n = ((n = (n + Math.imul(f, dt)) | 0) + Math.imul(m, lt)) | 0),
            (s = (s + Math.imul(m, dt)) | 0);
          var It =
            (((u + (r = (r + Math.imul(l, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, mt)) | 0) + Math.imul(d, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, mt)) | 0) + (n >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (r = Math.imul(W, Z)),
            (n = ((n = Math.imul(W, J)) + Math.imul(U, Z)) | 0),
            (s = Math.imul(U, J)),
            (r = (r + Math.imul(N, z)) | 0),
            (n = ((n = (n + Math.imul(N, Q)) | 0) + Math.imul(L, z)) | 0),
            (s = (s + Math.imul(L, Q)) | 0),
            (r = (r + Math.imul(x, H)) | 0),
            (n = ((n = (n + Math.imul(x, X)) | 0) + Math.imul(C, H)) | 0),
            (s = (s + Math.imul(C, X)) | 0),
            (r = (r + Math.imul(q, Y)) | 0),
            (n = ((n = (n + Math.imul(q, tt)) | 0) + Math.imul(A, Y)) | 0),
            (s = (s + Math.imul(A, tt)) | 0),
            (r = (r + Math.imul(O, it)) | 0),
            (n = ((n = (n + Math.imul(O, rt)) | 0) + Math.imul(R, it)) | 0),
            (s = (s + Math.imul(R, rt)) | 0),
            (r = (r + Math.imul(k, st)) | 0),
            (n = ((n = (n + Math.imul(k, ot)) | 0) + Math.imul(S, st)) | 0),
            (s = (s + Math.imul(S, ot)) | 0),
            (r = (r + Math.imul(y, at)) | 0),
            (n = ((n = (n + Math.imul(y, ut)) | 0) + Math.imul(_, at)) | 0),
            (s = (s + Math.imul(_, ut)) | 0),
            (r = (r + Math.imul(v, lt)) | 0),
            (n = ((n = (n + Math.imul(v, dt)) | 0) + Math.imul(w, lt)) | 0),
            (s = (s + Math.imul(w, dt)) | 0);
          var Ot =
            (((u + (r = (r + Math.imul(f, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(f, mt)) | 0) + Math.imul(m, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(m, mt)) | 0) + (n >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (r = Math.imul(W, z)),
            (n = ((n = Math.imul(W, Q)) + Math.imul(U, z)) | 0),
            (s = Math.imul(U, Q)),
            (r = (r + Math.imul(N, H)) | 0),
            (n = ((n = (n + Math.imul(N, X)) | 0) + Math.imul(L, H)) | 0),
            (s = (s + Math.imul(L, X)) | 0),
            (r = (r + Math.imul(x, Y)) | 0),
            (n = ((n = (n + Math.imul(x, tt)) | 0) + Math.imul(C, Y)) | 0),
            (s = (s + Math.imul(C, tt)) | 0),
            (r = (r + Math.imul(q, it)) | 0),
            (n = ((n = (n + Math.imul(q, rt)) | 0) + Math.imul(A, it)) | 0),
            (s = (s + Math.imul(A, rt)) | 0),
            (r = (r + Math.imul(O, st)) | 0),
            (n = ((n = (n + Math.imul(O, ot)) | 0) + Math.imul(R, st)) | 0),
            (s = (s + Math.imul(R, ot)) | 0),
            (r = (r + Math.imul(k, at)) | 0),
            (n = ((n = (n + Math.imul(k, ut)) | 0) + Math.imul(S, at)) | 0),
            (s = (s + Math.imul(S, ut)) | 0),
            (r = (r + Math.imul(y, lt)) | 0),
            (n = ((n = (n + Math.imul(y, dt)) | 0) + Math.imul(_, lt)) | 0),
            (s = (s + Math.imul(_, dt)) | 0);
          var Rt =
            (((u + (r = (r + Math.imul(v, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(v, mt)) | 0) + Math.imul(w, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(w, mt)) | 0) + (n >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (r = Math.imul(W, H)),
            (n = ((n = Math.imul(W, X)) + Math.imul(U, H)) | 0),
            (s = Math.imul(U, X)),
            (r = (r + Math.imul(N, Y)) | 0),
            (n = ((n = (n + Math.imul(N, tt)) | 0) + Math.imul(L, Y)) | 0),
            (s = (s + Math.imul(L, tt)) | 0),
            (r = (r + Math.imul(x, it)) | 0),
            (n = ((n = (n + Math.imul(x, rt)) | 0) + Math.imul(C, it)) | 0),
            (s = (s + Math.imul(C, rt)) | 0),
            (r = (r + Math.imul(q, st)) | 0),
            (n = ((n = (n + Math.imul(q, ot)) | 0) + Math.imul(A, st)) | 0),
            (s = (s + Math.imul(A, ot)) | 0),
            (r = (r + Math.imul(O, at)) | 0),
            (n = ((n = (n + Math.imul(O, ut)) | 0) + Math.imul(R, at)) | 0),
            (s = (s + Math.imul(R, ut)) | 0),
            (r = (r + Math.imul(k, lt)) | 0),
            (n = ((n = (n + Math.imul(k, dt)) | 0) + Math.imul(S, lt)) | 0),
            (s = (s + Math.imul(S, dt)) | 0);
          var Tt =
            (((u + (r = (r + Math.imul(y, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(y, mt)) | 0) + Math.imul(_, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(_, mt)) | 0) + (n >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (r = Math.imul(W, Y)),
            (n = ((n = Math.imul(W, tt)) + Math.imul(U, Y)) | 0),
            (s = Math.imul(U, tt)),
            (r = (r + Math.imul(N, it)) | 0),
            (n = ((n = (n + Math.imul(N, rt)) | 0) + Math.imul(L, it)) | 0),
            (s = (s + Math.imul(L, rt)) | 0),
            (r = (r + Math.imul(x, st)) | 0),
            (n = ((n = (n + Math.imul(x, ot)) | 0) + Math.imul(C, st)) | 0),
            (s = (s + Math.imul(C, ot)) | 0),
            (r = (r + Math.imul(q, at)) | 0),
            (n = ((n = (n + Math.imul(q, ut)) | 0) + Math.imul(A, at)) | 0),
            (s = (s + Math.imul(A, ut)) | 0),
            (r = (r + Math.imul(O, lt)) | 0),
            (n = ((n = (n + Math.imul(O, dt)) | 0) + Math.imul(R, lt)) | 0),
            (s = (s + Math.imul(R, dt)) | 0);
          var qt =
            (((u + (r = (r + Math.imul(k, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(k, mt)) | 0) + Math.imul(S, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(S, mt)) | 0) + (n >>> 13)) | 0) +
              (qt >>> 26)) |
            0),
            (qt &= 67108863),
            (r = Math.imul(W, it)),
            (n = ((n = Math.imul(W, rt)) + Math.imul(U, it)) | 0),
            (s = Math.imul(U, rt)),
            (r = (r + Math.imul(N, st)) | 0),
            (n = ((n = (n + Math.imul(N, ot)) | 0) + Math.imul(L, st)) | 0),
            (s = (s + Math.imul(L, ot)) | 0),
            (r = (r + Math.imul(x, at)) | 0),
            (n = ((n = (n + Math.imul(x, ut)) | 0) + Math.imul(C, at)) | 0),
            (s = (s + Math.imul(C, ut)) | 0),
            (r = (r + Math.imul(q, lt)) | 0),
            (n = ((n = (n + Math.imul(q, dt)) | 0) + Math.imul(A, lt)) | 0),
            (s = (s + Math.imul(A, dt)) | 0);
          var At =
            (((u + (r = (r + Math.imul(O, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(O, mt)) | 0) + Math.imul(R, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(R, mt)) | 0) + (n >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (r = Math.imul(W, st)),
            (n = ((n = Math.imul(W, ot)) + Math.imul(U, st)) | 0),
            (s = Math.imul(U, ot)),
            (r = (r + Math.imul(N, at)) | 0),
            (n = ((n = (n + Math.imul(N, ut)) | 0) + Math.imul(L, at)) | 0),
            (s = (s + Math.imul(L, ut)) | 0),
            (r = (r + Math.imul(x, lt)) | 0),
            (n = ((n = (n + Math.imul(x, dt)) | 0) + Math.imul(C, lt)) | 0),
            (s = (s + Math.imul(C, dt)) | 0);
          var Et =
            (((u + (r = (r + Math.imul(q, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(q, mt)) | 0) + Math.imul(A, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(A, mt)) | 0) + (n >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (r = Math.imul(W, at)),
            (n = ((n = Math.imul(W, ut)) + Math.imul(U, at)) | 0),
            (s = Math.imul(U, ut)),
            (r = (r + Math.imul(N, lt)) | 0),
            (n = ((n = (n + Math.imul(N, dt)) | 0) + Math.imul(L, lt)) | 0),
            (s = (s + Math.imul(L, dt)) | 0);
          var xt =
            (((u + (r = (r + Math.imul(x, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(x, mt)) | 0) + Math.imul(C, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(C, mt)) | 0) + (n >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (r = Math.imul(W, lt)),
            (n = ((n = Math.imul(W, dt)) + Math.imul(U, lt)) | 0),
            (s = Math.imul(U, dt));
          var Ct =
            (((u + (r = (r + Math.imul(N, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(N, mt)) | 0) + Math.imul(L, ft)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(L, mt)) | 0) + (n >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863);
          var jt =
            (((u + (r = Math.imul(W, ft))) | 0) +
              ((8191 & (n = ((n = Math.imul(W, mt)) + Math.imul(U, ft)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((s = Math.imul(U, mt)) + (n >>> 13)) | 0) + (jt >>> 26)) | 0),
            (jt &= 67108863),
            (a[0] = gt),
            (a[1] = vt),
            (a[2] = wt),
            (a[3] = Mt),
            (a[4] = yt),
            (a[5] = _t),
            (a[6] = bt),
            (a[7] = kt),
            (a[8] = St),
            (a[9] = It),
            (a[10] = Ot),
            (a[11] = Rt),
            (a[12] = Tt),
            (a[13] = qt),
            (a[14] = At),
            (a[15] = Et),
            (a[16] = xt),
            (a[17] = Ct),
            (a[18] = jt),
            0 !== u && ((a[19] = u), i.length++),
            i
          );
        };
        function f(t, e, i) {
          return new m().mulp(t, e, i);
        }
        function m(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = d),
          (s.prototype.mulTo = function (t, e) {
            var i,
              r = this.length + t.length;
            return (
              (i =
                10 === this.length && 10 === t.length
                  ? p(this, t, e)
                  : r < 63
                    ? d(this, t, e)
                    : r < 1024
                      ? (function (t, e, i) {
                          (i.negative = e.negative ^ t.negative),
                            (i.length = t.length + e.length);
                          for (var r = 0, n = 0, s = 0; s < i.length - 1; s++) {
                            var o = n;
                            n = 0;
                            for (
                              var h = 67108863 & r,
                                a = Math.min(s, e.length - 1),
                                u = Math.max(0, s - t.length + 1);
                              u <= a;
                              u++
                            ) {
                              var c = s - u,
                                l = (0 | t.words[c]) * (0 | e.words[u]),
                                d = 67108863 & l;
                              (h = 67108863 & (d = (d + h) | 0)),
                                (n +=
                                  (o =
                                    ((o = (o + ((l / 67108864) | 0)) | 0) +
                                      (d >>> 26)) |
                                    0) >>> 26),
                                (o &= 67108863);
                            }
                            (i.words[s] = h), (r = o), (o = n);
                          }
                          return (
                            0 !== r ? (i.words[s] = r) : i.length--, i.strip()
                          );
                        })(this, t, e)
                      : f(this, t, e)),
              i
            );
          }),
          (m.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), i = s.prototype._countBits(t) - 1, r = 0;
              r < t;
              r++
            )
              e[r] = this.revBin(r, i, t);
            return e;
          }),
          (m.prototype.revBin = function (t, e, i) {
            if (0 === t || t === i - 1) return t;
            for (var r = 0, n = 0; n < e; n++)
              (r |= (1 & t) << (e - n - 1)), (t >>= 1);
            return r;
          }),
          (m.prototype.permute = function (t, e, i, r, n, s) {
            for (var o = 0; o < s; o++) (r[o] = e[t[o]]), (n[o] = i[t[o]]);
          }),
          (m.prototype.transform = function (t, e, i, r, n, s) {
            this.permute(s, t, e, i, r, n);
            for (var o = 1; o < n; o <<= 1)
              for (
                var h = o << 1,
                  a = Math.cos((2 * Math.PI) / h),
                  u = Math.sin((2 * Math.PI) / h),
                  c = 0;
                c < n;
                c += h
              )
                for (var l = a, d = u, p = 0; p < o; p++) {
                  var f = i[c + p],
                    m = r[c + p],
                    g = i[c + p + o],
                    v = r[c + p + o],
                    w = l * g - d * v;
                  (v = l * v + d * g),
                    (g = w),
                    (i[c + p] = f + g),
                    (r[c + p] = m + v),
                    (i[c + p + o] = f - g),
                    (r[c + p + o] = m - v),
                    p !== h &&
                      ((w = a * l - u * d), (d = a * d + u * l), (l = w));
                }
          }),
          (m.prototype.guessLen13b = function (t, e) {
            var i = 1 | Math.max(e, t),
              r = 1 & i,
              n = 0;
            for (i = (i / 2) | 0; i; i >>>= 1) n++;
            return 1 << (n + 1 + r);
          }),
          (m.prototype.conjugate = function (t, e, i) {
            if (!(i <= 1))
              for (var r = 0; r < i / 2; r++) {
                var n = t[r];
                (t[r] = t[i - r - 1]),
                  (t[i - r - 1] = n),
                  (n = e[r]),
                  (e[r] = -e[i - r - 1]),
                  (e[i - r - 1] = -n);
              }
          }),
          (m.prototype.normalize13b = function (t, e) {
            for (var i = 0, r = 0; r < e / 2; r++) {
              var n =
                8192 * Math.round(t[2 * r + 1] / e) +
                Math.round(t[2 * r] / e) +
                i;
              (t[r] = 67108863 & n),
                (i = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (m.prototype.convert13b = function (t, e, i, n) {
            for (var s = 0, o = 0; o < e; o++)
              (s += 0 | t[o]),
                (i[2 * o] = 8191 & s),
                (s >>>= 13),
                (i[2 * o + 1] = 8191 & s),
                (s >>>= 13);
            for (o = 2 * e; o < n; ++o) i[o] = 0;
            r(0 === s), r(0 == (-8192 & s));
          }),
          (m.prototype.stub = function (t) {
            for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
            return e;
          }),
          (m.prototype.mulp = function (t, e, i) {
            var r = 2 * this.guessLen13b(t.length, e.length),
              n = this.makeRBT(r),
              s = this.stub(r),
              o = new Array(r),
              h = new Array(r),
              a = new Array(r),
              u = new Array(r),
              c = new Array(r),
              l = new Array(r),
              d = i.words;
            (d.length = r),
              this.convert13b(t.words, t.length, o, r),
              this.convert13b(e.words, e.length, u, r),
              this.transform(o, s, h, a, r, n),
              this.transform(u, s, c, l, r, n);
            for (var p = 0; p < r; p++) {
              var f = h[p] * c[p] - a[p] * l[p];
              (a[p] = h[p] * l[p] + a[p] * c[p]), (h[p] = f);
            }
            return (
              this.conjugate(h, a, r),
              this.transform(h, a, d, s, r, n),
              this.conjugate(d, s, r),
              this.normalize13b(d, r),
              (i.negative = t.negative ^ e.negative),
              (i.length = t.length + e.length),
              i.strip()
            );
          }),
          (s.prototype.mul = function (t) {
            var e = new s(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (s.prototype.mulf = function (t) {
            var e = new s(null);
            return (e.words = new Array(this.length + t.length)), f(this, t, e);
          }),
          (s.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (s.prototype.imuln = function (t) {
            r("number" == typeof t), r(t < 67108864);
            for (var e = 0, i = 0; i < this.length; i++) {
              var n = (0 | this.words[i]) * t,
                s = (67108863 & n) + (67108863 & e);
              (e >>= 26),
                (e += (n / 67108864) | 0),
                (e += s >>> 26),
                (this.words[i] = 67108863 & s);
            }
            return 0 !== e && ((this.words[i] = e), this.length++), this;
          }),
          (s.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (s.prototype.sqr = function () {
            return this.mul(this);
          }),
          (s.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (s.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
                var r = (i / 26) | 0,
                  n = i % 26;
                e[i] = (t.words[r] & (1 << n)) >>> n;
              }
              return e;
            })(t);
            if (0 === e.length) return new s(1);
            for (
              var i = this, r = 0;
              r < e.length && 0 === e[r];
              r++, i = i.sqr()
            );
            if (++r < e.length)
              for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                0 !== e[r] && (i = i.mul(n));
            return i;
          }),
          (s.prototype.iushln = function (t) {
            r("number" == typeof t && t >= 0);
            var e,
              i = t % 26,
              n = (t - i) / 26,
              s = (67108863 >>> (26 - i)) << (26 - i);
            if (0 !== i) {
              var o = 0;
              for (e = 0; e < this.length; e++) {
                var h = this.words[e] & s,
                  a = ((0 | this.words[e]) - h) << i;
                (this.words[e] = a | o), (o = h >>> (26 - i));
              }
              o && ((this.words[e] = o), this.length++);
            }
            if (0 !== n) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + n] = this.words[e];
              for (e = 0; e < n; e++) this.words[e] = 0;
              this.length += n;
            }
            return this.strip();
          }),
          (s.prototype.ishln = function (t) {
            return r(0 === this.negative), this.iushln(t);
          }),
          (s.prototype.iushrn = function (t, e, i) {
            var n;
            r("number" == typeof t && t >= 0),
              (n = e ? (e - (e % 26)) / 26 : 0);
            var s = t % 26,
              o = Math.min((t - s) / 26, this.length),
              h = 67108863 ^ ((67108863 >>> s) << s),
              a = i;
            if (((n -= o), (n = Math.max(0, n)), a)) {
              for (var u = 0; u < o; u++) a.words[u] = this.words[u];
              a.length = o;
            }
            if (0 === o);
            else if (this.length > o)
              for (this.length -= o, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + o];
            else (this.words[0] = 0), (this.length = 1);
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= n); u--) {
              var l = 0 | this.words[u];
              (this.words[u] = (c << (26 - s)) | (l >>> s)), (c = l & h);
            }
            return (
              a && 0 !== c && (a.words[a.length++] = c),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (s.prototype.ishrn = function (t, e, i) {
            return r(0 === this.negative), this.iushrn(t, e, i);
          }),
          (s.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (s.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (s.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (s.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (s.prototype.testn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
              i = (t - e) / 26,
              n = 1 << e;
            return !(this.length <= i || !(this.words[i] & n));
          }),
          (s.prototype.imaskn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
              i = (t - e) / 26;
            if (
              (r(
                0 === this.negative,
                "imaskn works only with positive numbers",
              ),
              this.length <= i)
            )
              return this;
            if (
              (0 !== e && i++,
              (this.length = Math.min(i, this.length)),
              0 !== e)
            ) {
              var n = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= n;
            }
            return this.strip();
          }),
          (s.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (s.prototype.iaddn = function (t) {
            return (
              r("number" == typeof t),
              r(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
            );
          }),
          (s.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (s.prototype.isubn = function (t) {
            if ((r("number" == typeof t), r(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (s.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (s.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (s.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (s.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (s.prototype._ishlnsubmul = function (t, e, i) {
            var n,
              s,
              o = t.length + i;
            this._expand(o);
            var h = 0;
            for (n = 0; n < t.length; n++) {
              s = (0 | this.words[n + i]) + h;
              var a = (0 | t.words[n]) * e;
              (h = ((s -= 67108863 & a) >> 26) - ((a / 67108864) | 0)),
                (this.words[n + i] = 67108863 & s);
            }
            for (; n < this.length - i; n++)
              (h = (s = (0 | this.words[n + i]) + h) >> 26),
                (this.words[n + i] = 67108863 & s);
            if (0 === h) return this.strip();
            for (r(-1 === h), h = 0, n = 0; n < this.length; n++)
              (h = (s = -(0 | this.words[n]) + h) >> 26),
                (this.words[n] = 67108863 & s);
            return (this.negative = 1), this.strip();
          }),
          (s.prototype._wordDiv = function (t, e) {
            var i = (this.length, t.length),
              r = this.clone(),
              n = t,
              o = 0 | n.words[n.length - 1];
            0 != (i = 26 - this._countBits(o)) &&
              ((n = n.ushln(i)), r.iushln(i), (o = 0 | n.words[n.length - 1]));
            var h,
              a = r.length - n.length;
            if ("mod" !== e) {
              ((h = new s(null)).length = a + 1),
                (h.words = new Array(h.length));
              for (var u = 0; u < h.length; u++) h.words[u] = 0;
            }
            var c = r.clone()._ishlnsubmul(n, 1, a);
            0 === c.negative && ((r = c), h && (h.words[a] = 1));
            for (var l = a - 1; l >= 0; l--) {
              var d =
                67108864 * (0 | r.words[n.length + l]) +
                (0 | r.words[n.length + l - 1]);
              for (
                d = Math.min((d / o) | 0, 67108863), r._ishlnsubmul(n, d, l);
                0 !== r.negative;

              )
                d--,
                  (r.negative = 0),
                  r._ishlnsubmul(n, 1, l),
                  r.isZero() || (r.negative ^= 1);
              h && (h.words[l] = d);
            }
            return (
              h && h.strip(),
              r.strip(),
              "div" !== e && 0 !== i && r.iushrn(i),
              { div: h || null, mod: r }
            );
          }),
          (s.prototype.divmod = function (t, e, i) {
            return (
              r(!t.isZero()),
              this.isZero()
                ? { div: new s(0), mod: new s(0) }
                : 0 !== this.negative && 0 === t.negative
                  ? ((h = this.neg().divmod(t, e)),
                    "mod" !== e && (n = h.div.neg()),
                    "div" !== e &&
                      ((o = h.mod.neg()), i && 0 !== o.negative && o.iadd(t)),
                    { div: n, mod: o })
                  : 0 === this.negative && 0 !== t.negative
                    ? ((h = this.divmod(t.neg(), e)),
                      "mod" !== e && (n = h.div.neg()),
                      { div: n, mod: h.mod })
                    : 0 != (this.negative & t.negative)
                      ? ((h = this.neg().divmod(t.neg(), e)),
                        "div" !== e &&
                          ((o = h.mod.neg()),
                          i && 0 !== o.negative && o.isub(t)),
                        { div: h.div, mod: o })
                      : t.length > this.length || this.cmp(t) < 0
                        ? { div: new s(0), mod: this }
                        : 1 === t.length
                          ? "div" === e
                            ? { div: this.divn(t.words[0]), mod: null }
                            : "mod" === e
                              ? { div: null, mod: new s(this.modn(t.words[0])) }
                              : {
                                  div: this.divn(t.words[0]),
                                  mod: new s(this.modn(t.words[0])),
                                }
                          : this._wordDiv(t, e)
            );
            var n, o, h;
          }),
          (s.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (s.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (s.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (s.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              r = t.ushrn(1),
              n = t.andln(1),
              s = i.cmp(r);
            return s < 0 || (1 === n && 0 === s)
              ? e.div
              : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
          }),
          (s.prototype.modn = function (t) {
            r(t <= 67108863);
            for (var e = (1 << 26) % t, i = 0, n = this.length - 1; n >= 0; n--)
              i = (e * i + (0 | this.words[n])) % t;
            return i;
          }),
          (s.prototype.idivn = function (t) {
            r(t <= 67108863);
            for (var e = 0, i = this.length - 1; i >= 0; i--) {
              var n = (0 | this.words[i]) + 67108864 * e;
              (this.words[i] = (n / t) | 0), (e = n % t);
            }
            return this.strip();
          }),
          (s.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (s.prototype.egcd = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              i = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n = new s(1), o = new s(0), h = new s(0), a = new s(1), u = 0;
              e.isEven() && i.isEven();

            )
              e.iushrn(1), i.iushrn(1), ++u;
            for (var c = i.clone(), l = e.clone(); !e.isZero(); ) {
              for (
                var d = 0, p = 1;
                0 == (e.words[0] & p) && d < 26;
                ++d, p <<= 1
              );
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (n.isOdd() || o.isOdd()) && (n.iadd(c), o.isub(l)),
                    n.iushrn(1),
                    o.iushrn(1);
              for (
                var f = 0, m = 1;
                0 == (i.words[0] & m) && f < 26;
                ++f, m <<= 1
              );
              if (f > 0)
                for (i.iushrn(f); f-- > 0; )
                  (h.isOdd() || a.isOdd()) && (h.iadd(c), a.isub(l)),
                    h.iushrn(1),
                    a.iushrn(1);
              e.cmp(i) >= 0
                ? (e.isub(i), n.isub(h), o.isub(a))
                : (i.isub(e), h.isub(n), a.isub(o));
            }
            return { a: h, b: a, gcd: i.iushln(u) };
          }),
          (s.prototype._invmp = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              i = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n, o = new s(1), h = new s(0), a = i.clone();
              e.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, c = 1;
                0 == (e.words[0] & c) && u < 26;
                ++u, c <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  o.isOdd() && o.iadd(a), o.iushrn(1);
              for (
                var l = 0, d = 1;
                0 == (i.words[0] & d) && l < 26;
                ++l, d <<= 1
              );
              if (l > 0)
                for (i.iushrn(l); l-- > 0; )
                  h.isOdd() && h.iadd(a), h.iushrn(1);
              e.cmp(i) >= 0 ? (e.isub(i), o.isub(h)) : (i.isub(e), h.isub(o));
            }
            return (n = 0 === e.cmpn(1) ? o : h).cmpn(0) < 0 && n.iadd(t), n;
          }),
          (s.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              i = t.clone();
            (e.negative = 0), (i.negative = 0);
            for (var r = 0; e.isEven() && i.isEven(); r++)
              e.iushrn(1), i.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; i.isEven(); ) i.iushrn(1);
              var n = e.cmp(i);
              if (n < 0) {
                var s = e;
                (e = i), (i = s);
              } else if (0 === n || 0 === i.cmpn(1)) break;
              e.isub(i);
            }
            return i.iushln(r);
          }),
          (s.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (s.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (s.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (s.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (s.prototype.bincn = function (t) {
            r("number" == typeof t);
            var e = t % 26,
              i = (t - e) / 26,
              n = 1 << e;
            if (this.length <= i)
              return this._expand(i + 1), (this.words[i] |= n), this;
            for (var s = n, o = i; 0 !== s && o < this.length; o++) {
              var h = 0 | this.words[o];
              (s = (h += s) >>> 26), (h &= 67108863), (this.words[o] = h);
            }
            return 0 !== s && ((this.words[o] = s), this.length++), this;
          }),
          (s.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (s.prototype.cmpn = function (t) {
            var e,
              i = t < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              i && (t = -t), r(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              e = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (s.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (s.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, i = this.length - 1; i >= 0; i--) {
              var r = 0 | this.words[i],
                n = 0 | t.words[i];
              if (r !== n) {
                r < n ? (e = -1) : r > n && (e = 1);
                break;
              }
            }
            return e;
          }),
          (s.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (s.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (s.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (s.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (s.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (s.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (s.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (s.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (s.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (s.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (s.red = function (t) {
            return new b(t);
          }),
          (s.prototype.toRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (s.prototype.fromRed = function () {
            return (
              r(
                this.red,
                "fromRed works only with numbers in reduction context",
              ),
              this.red.convertFrom(this)
            );
          }),
          (s.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (s.prototype.forceRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (s.prototype.redAdd = function (t) {
            return (
              r(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (s.prototype.redIAdd = function (t) {
            return (
              r(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (s.prototype.redSub = function (t) {
            return (
              r(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (s.prototype.redISub = function (t) {
            return (
              r(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (s.prototype.redShl = function (t) {
            return (
              r(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (s.prototype.redMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (s.prototype.redIMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (s.prototype.redSqr = function () {
            return (
              r(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (s.prototype.redISqr = function () {
            return (
              r(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (s.prototype.redSqrt = function () {
            return (
              r(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (s.prototype.redInvm = function () {
            return (
              r(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (s.prototype.redNeg = function () {
            return (
              r(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (s.prototype.redPow = function (t) {
            return (
              r(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var g = { k256: null, p224: null, p192: null, p25519: null };
        function v(t, e) {
          (this.name = t),
            (this.p = new s(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new s(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function w() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
          );
        }
        function M() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          );
        }
        function y() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          );
        }
        function _() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          );
        }
        function b(t) {
          if ("string" == typeof t) {
            var e = s._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            r(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function k(t) {
          b.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new s(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function () {
          var t = new s(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (v.prototype.ireduce = function (t) {
            var e,
              i = t;
            do {
              this.split(i, this.tmp),
                (e = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var r = e < this.n ? -1 : i.ucmp(this.p);
            return (
              0 === r
                ? ((i.words[0] = 0), (i.length = 1))
                : r > 0
                  ? i.isub(this.p)
                  : i.strip(),
              i
            );
          }),
          (v.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (v.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(w, v),
          (w.prototype.split = function (t, e) {
            for (var i = 4194303, r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var s = t.words[9];
            for (e.words[e.length++] = s & i, n = 10; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((o & i) << 4) | (s >>> 22)), (s = o);
            }
            (s >>>= 22),
              (t.words[n - 10] = s),
              0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (w.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, i = 0; i < t.length; i++) {
              var r = 0 | t.words[i];
              (e += 977 * r),
                (t.words[i] = 67108863 & e),
                (e = 64 * r + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(M, v),
          n(y, v),
          n(_, v),
          (_.prototype.imulK = function (t) {
            for (var e = 0, i = 0; i < t.length; i++) {
              var r = 19 * (0 | t.words[i]) + e,
                n = 67108863 & r;
              (r >>>= 26), (t.words[i] = n), (e = r);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (s._prime = function (t) {
            if (g[t]) return g[t];
            var e;
            if ("k256" === t) e = new w();
            else if ("p224" === t) e = new M();
            else if ("p192" === t) e = new y();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new _();
            }
            return (g[t] = e), e;
          }),
          (b.prototype._verify1 = function (t) {
            r(0 === t.negative, "red works only with positives"),
              r(t.red, "red works only with red numbers");
          }),
          (b.prototype._verify2 = function (t, e) {
            r(0 == (t.negative | e.negative), "red works only with positives"),
              r(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (b.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (b.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (b.prototype.add = function (t, e) {
            this._verify2(t, e);
            var i = t.add(e);
            return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this);
          }),
          (b.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var i = t.iadd(e);
            return i.cmp(this.m) >= 0 && i.isub(this.m), i;
          }),
          (b.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var i = t.sub(e);
            return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this);
          }),
          (b.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var i = t.isub(e);
            return i.cmpn(0) < 0 && i.iadd(this.m), i;
          }),
          (b.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (b.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (b.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (b.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (b.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (b.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((r(e % 2 == 1), 3 === e)) {
              var i = this.m.add(new s(1)).iushrn(2);
              return this.pow(t, i);
            }
            for (
              var n = this.m.subn(1), o = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              o++, n.iushrn(1);
            r(!n.isZero());
            var h = new s(1).toRed(this),
              a = h.redNeg(),
              u = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new s(2 * c * c).toRed(this);
              0 !== this.pow(c, u).cmp(a);

            )
              c.redIAdd(a);
            for (
              var l = this.pow(c, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                p = this.pow(t, n),
                f = o;
              0 !== p.cmp(h);

            ) {
              for (var m = p, g = 0; 0 !== m.cmp(h); g++) m = m.redSqr();
              r(g < f);
              var v = this.pow(l, new s(1).iushln(f - g - 1));
              (d = d.redMul(v)), (l = v.redSqr()), (p = p.redMul(l)), (f = g);
            }
            return d;
          }),
          (b.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (b.prototype.pow = function (t, e) {
            if (e.isZero()) return new s(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var i = new Array(16);
            (i[0] = new s(1).toRed(this)), (i[1] = t);
            for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], t);
            var n = i[0],
              o = 0,
              h = 0,
              a = e.bitLength() % 26;
            for (0 === a && (a = 26), r = e.length - 1; r >= 0; r--) {
              for (var u = e.words[r], c = a - 1; c >= 0; c--) {
                var l = (u >> c) & 1;
                n !== i[0] && (n = this.sqr(n)),
                  0 !== l || 0 !== o
                    ? ((o <<= 1),
                      (o |= l),
                      (4 == ++h || (0 === r && 0 === c)) &&
                        ((n = this.mul(n, i[o])), (h = 0), (o = 0)))
                    : (h = 0);
              }
              a = 26;
            }
            return n;
          }),
          (b.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (b.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (s.mont = function (t) {
            return new k(t);
          }),
          n(k, b),
          (k.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (k.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (k.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var i = t.imul(e),
              r = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = i.isub(r).iushrn(this.shift),
              s = n;
            return (
              n.cmp(this.m) >= 0
                ? (s = n.isub(this.m))
                : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (k.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
            var i = t.mul(e),
              r = i
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = i.isub(r).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (k.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = i.nmd(t)), this);
    },
    62873: (t, e) => {
      "use strict";
      function i(t) {
        let e;
        return (
          "undefined" != typeof window &&
            void 0 !== window[t] &&
            (e = window[t]),
          e
        );
      }
      function r(t) {
        const e = i(t);
        if (!e) throw new Error(`${t} is not defined in Window`);
        return e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = i),
        (e.getFromWindowOrThrow = r),
        (e.getDocumentOrThrow = function () {
          return r("document");
        }),
        (e.getDocument = function () {
          return i("document");
        }),
        (e.getNavigatorOrThrow = function () {
          return r("navigator");
        }),
        (e.getNavigator = function () {
          return i("navigator");
        }),
        (e.getLocationOrThrow = function () {
          return r("location");
        }),
        (e.getLocation = function () {
          return i("location");
        }),
        (e.getCryptoOrThrow = function () {
          return r("crypto");
        }),
        (e.getCrypto = function () {
          return i("crypto");
        }),
        (e.getLocalStorageOrThrow = function () {
          return r("localStorage");
        }),
        (e.getLocalStorage = function () {
          return i("localStorage");
        });
    },
    65755: (t, e, i) => {
      "use strict";
      e.D = void 0;
      const r = i(62873);
      e.D = function () {
        let t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (t) {
          return null;
        }
        function i(...e) {
          const i = t.getElementsByTagName("meta");
          for (let t = 0; t < i.length; t++) {
            const r = i[t],
              n = ["itemprop", "property", "name"]
                .map((t) => r.getAttribute(t))
                .filter((t) => !!t && e.includes(t));
            if (n.length && n) {
              const t = r.getAttribute("content");
              if (t) return t;
            }
          }
          return "";
        }
        const n = (function () {
          let e = i("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: i(
            "description",
            "og:description",
            "twitter:description",
            "keywords",
          ),
          url: e.origin,
          icons: (function () {
            const i = t.getElementsByTagName("link"),
              r = [];
            for (let t = 0; t < i.length; t++) {
              const n = i[t],
                s = n.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const t = n.getAttribute("href");
                if (t)
                  if (
                    -1 === t.toLowerCase().indexOf("https:") &&
                    -1 === t.toLowerCase().indexOf("http:") &&
                    0 !== t.indexOf("//")
                  ) {
                    let i = e.protocol + "//" + e.host;
                    if (0 === t.indexOf("/")) i += t;
                    else {
                      const r = e.pathname.split("/");
                      r.pop(), (i += r.join("/") + "/" + t);
                    }
                    r.push(i);
                  } else if (0 === t.indexOf("//")) {
                    const i = e.protocol + t;
                    r.push(i);
                  } else r.push(t);
              }
            }
            return r;
          })(),
          name: n,
        };
      };
    },
    4501: (t) => {
      (t.exports = r), (r.strict = n), (r.loose = s);
      var e = Object.prototype.toString,
        i = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function r(t) {
        return n(t) || s(t);
      }
      function n(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function s(t) {
        return i[e.call(t)];
      }
    },
    17563: (t, e, i) => {
      "use strict";
      const r = i(70610),
        n = i(44020),
        s = i(80500);
      function o(t) {
        if ("string" != typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function h(t, e) {
        return e.encode ? (e.strict ? r(t) : encodeURIComponent(t)) : t;
      }
      function a(t, e) {
        return e.decode ? n(t) : t;
      }
      function u(t) {
        return Array.isArray(t)
          ? t.sort()
          : "object" == typeof t
            ? u(Object.keys(t))
                .sort((t, e) => Number(t) - Number(e))
                .map((e) => t[e])
            : t;
      }
      function c(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function l(t) {
        const e = (t = c(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function d(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" == typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function p(t, e) {
        o(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e,
          )).arrayFormatSeparator,
        );
        const i = (function (t) {
            let e;
            switch (t.arrayFormat) {
              case "index":
                return (t, i, r) => {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = i))
                      : (r[t] = i);
                };
              case "bracket":
                return (t, i, r) => {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== r[t]
                        ? (r[t] = [].concat(r[t], i))
                        : (r[t] = [i])
                      : (r[t] = i);
                };
              case "comma":
              case "separator":
                return (e, i, r) => {
                  const n =
                    "string" == typeof i &&
                    i.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? i.split(t.arrayFormatSeparator).map((e) => a(e, t))
                      : null === i
                        ? i
                        : a(i, t);
                  r[e] = n;
                };
              default:
                return (t, e, i) => {
                  void 0 !== i[t] ? (i[t] = [].concat(i[t], e)) : (i[t] = e);
                };
            }
          })(e),
          r = Object.create(null);
        if ("string" != typeof t) return r;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
        for (const n of t.split("&")) {
          let [t, o] = s(e.decode ? n.replace(/\+/g, " ") : n, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator"].includes(e.arrayFormat)
                ? o
                : a(o, e)),
            i(a(t, e), o, r);
        }
        for (const t of Object.keys(r)) {
          const i = r[t];
          if ("object" == typeof i && null !== i)
            for (const t of Object.keys(i)) i[t] = d(i[t], e);
          else r[t] = d(i, e);
        }
        return !1 === e.sort
          ? r
          : (!0 === e.sort
              ? Object.keys(r).sort()
              : Object.keys(r).sort(e.sort)
            ).reduce((t, e) => {
              const i = r[e];
              return (
                Boolean(i) && "object" == typeof i && !Array.isArray(i)
                  ? (t[e] = u(i))
                  : (t[e] = i),
                t
              );
            }, Object.create(null));
      }
      (e.extract = l),
        (e.parse = p),
        (e.stringify = (t, e) => {
          if (!t) return "";
          o(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e,
            )).arrayFormatSeparator,
          );
          const i = (i) =>
              (e.skipNull && null == t[i]) ||
              (e.skipEmptyString && "" === t[i]),
            r = (function (t) {
              switch (t.arrayFormat) {
                case "index":
                  return (e) => (i, r) => {
                    const n = i.length;
                    return void 0 === r ||
                      (t.skipNull && null === r) ||
                      (t.skipEmptyString && "" === r)
                      ? i
                      : null === r
                        ? [...i, [h(e, t), "[", n, "]"].join("")]
                        : [
                            ...i,
                            [h(e, t), "[", h(n, t), "]=", h(r, t)].join(""),
                          ];
                  };
                case "bracket":
                  return (e) => (i, r) =>
                    void 0 === r ||
                    (t.skipNull && null === r) ||
                    (t.skipEmptyString && "" === r)
                      ? i
                      : null === r
                        ? [...i, [h(e, t), "[]"].join("")]
                        : [...i, [h(e, t), "[]=", h(r, t)].join("")];
                case "comma":
                case "separator":
                  return (e) => (i, r) =>
                    null == r || 0 === r.length
                      ? i
                      : 0 === i.length
                        ? [[h(e, t), "=", h(r, t)].join("")]
                        : [[i, h(r, t)].join(t.arrayFormatSeparator)];
                default:
                  return (e) => (i, r) =>
                    void 0 === r ||
                    (t.skipNull && null === r) ||
                    (t.skipEmptyString && "" === r)
                      ? i
                      : null === r
                        ? [...i, h(e, t)]
                        : [...i, [h(e, t), "=", h(r, t)].join("")];
              }
            })(e),
            n = {};
          for (const e of Object.keys(t)) i(e) || (n[e] = t[e]);
          const s = Object.keys(n);
          return (
            !1 !== e.sort && s.sort(e.sort),
            s
              .map((i) => {
                const n = t[i];
                return void 0 === n
                  ? ""
                  : null === n
                    ? h(i, e)
                    : Array.isArray(n)
                      ? n.reduce(r(i), []).join("&")
                      : h(i, e) + "=" + h(n, e);
              })
              .filter((t) => t.length > 0)
              .join("&")
          );
        }),
        (e.parseUrl = (t, e) => {
          e = Object.assign({ decode: !0 }, e);
          const [i, r] = s(t, "#");
          return Object.assign(
            { url: i.split("?")[0] || "", query: p(l(t), e) },
            e && e.parseFragmentIdentifier && r
              ? { fragmentIdentifier: a(r, e) }
              : {},
          );
        }),
        (e.stringifyUrl = (t, i) => {
          i = Object.assign({ encode: !0, strict: !0 }, i);
          const r = c(t.url).split("?")[0] || "",
            n = e.extract(t.url),
            s = e.parse(n, { sort: !1 }),
            o = Object.assign(s, t.query);
          let a = e.stringify(o, i);
          a && (a = `?${a}`);
          let u = (function (t) {
            let e = "";
            const i = t.indexOf("#");
            return -1 !== i && (e = t.slice(i)), e;
          })(t.url);
          return (
            t.fragmentIdentifier && (u = `#${h(t.fragmentIdentifier, i)}`),
            `${r}${a}${u}`
          );
        });
    },
    65054: (t, e, i) => {
      var r = i(48764).Buffer,
        n = i(4501).strict;
      t.exports = function (t) {
        if (n(t)) {
          var e = r.from(t.buffer);
          return (
            t.byteLength !== t.buffer.byteLength &&
              (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)),
            e
          );
        }
        return r.from(t);
      };
    },
  },
]);
