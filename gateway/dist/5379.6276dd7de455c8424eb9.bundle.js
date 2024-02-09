"use strict";
(self.webpackChunkbos_workspace_gateway =
  self.webpackChunkbos_workspace_gateway || []).push([
  [5379],
  {
    45379: (e, n, t) => {
      var r, o, c;
      function i() {
        return (function (e, n, t, r) {
          return new (t || (t = Promise))(function (n, o) {
            function c(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function i(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var r;
              e.done
                ? n(e.value)
                : ((r = e.value),
                  r instanceof t
                    ? r
                    : new t(function (e) {
                        e(r);
                      })).then(c, i);
            }
            u((r = r.apply(e, [])).next());
          });
        })(this, 0, void 0, function () {
          var e;
          return (function (e, n) {
            var t,
              r,
              o,
              c,
              i = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (c = { next: u(0), throw: u(1), return: u(2) }),
              "function" == typeof Symbol &&
                (c[Symbol.iterator] = function () {
                  return this;
                }),
              c
            );
            function u(u) {
              return function (a) {
                return (function (u) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; c && ((c = 0), u[0] && (i = 0)), i; )
                    try {
                      if (
                        ((t = 1),
                        r &&
                          (o =
                            2 & u[0]
                              ? r.return
                              : u[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, u[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                        case 0:
                        case 1:
                          o = u;
                          break;
                        case 4:
                          return i.label++, { value: u[1], done: !1 };
                        case 5:
                          i.label++, (r = u[1]), (u = [0]);
                          continue;
                        case 7:
                          (u = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (o =
                                (o = i.trys).length > 0 && o[o.length - 1]) ||
                              (6 !== u[0] && 2 !== u[0])
                            )
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === u[0] &&
                            (!o || (u[1] > o[0] && u[1] < o[3]))
                          ) {
                            i.label = u[1];
                            break;
                          }
                          if (6 === u[0] && i.label < o[1]) {
                            (i.label = o[1]), (o = u);
                            break;
                          }
                          if (o && i.label < o[2]) {
                            (i.label = o[2]), i.ops.push(u);
                            break;
                          }
                          o[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      u = n.call(e, i);
                    } catch (e) {
                      (u = [6, e]), (r = 0);
                    } finally {
                      t = o = 0;
                    }
                  if (5 & u[0]) throw u[1];
                  return { value: u[0] ? u[1] : void 0, done: !0 };
                })([u, a]);
              };
            }
          })(this, function (n) {
            return (
              (e = "ledgerConnectKit"),
              [
                2,
                new Promise(function (n, t) {
                  var r = "ledger-ck-script-".concat(e);
                  if ("undefined" != typeof document)
                    if (document.getElementById(r)) n(window[e]);
                    else {
                      var o = document.createElement("script");
                      (o.src =
                        "https://cdn.jsdelivr.net/npm/@ledgerhq/connect-kit@1"),
                        (o.id = r),
                        o.addEventListener("load", function () {
                          n(window[e]);
                        }),
                        o.addEventListener("error", function (e) {
                          t(e.error);
                        }),
                        document.head.appendChild(o);
                    }
                  else t("Connect Kit does not support server side");
                }),
              ]
            );
          });
        });
      }
      t.d(n, {
        SupportedProviderImplementations: () => r,
        SupportedProviders: () => o,
        loadConnectKit: () => i,
      }),
        "function" == typeof SuppressedError && SuppressedError,
        ((c = r || (r = {})).LedgerConnect = "LedgerConnect"),
        (c.WalletConnect = "WalletConnect"),
        (function (e) {
          e.Ethereum = "Ethereum";
        })(o || (o = {}));
    },
  },
]);
