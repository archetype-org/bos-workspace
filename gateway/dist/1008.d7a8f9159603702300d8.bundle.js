/*! For license information please see 1008.d7a8f9159603702300d8.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbos_workspace_gateway =
  self.webpackChunkbos_workspace_gateway || []).push([
  [1008],
  {
    61008: (e, t, r) => {
      r.d(t, { default: () => Ts });
      var n = r(17187),
        i = r.n(n),
        s = r(15501),
        o = r(512),
        a = r(31416),
        c = r(73294),
        u = r(57664),
        h = r(37466),
        l = r(66736),
        p = (r(62116), r(304), r(87283), r(93368));
      r(34155),
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const d = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function f(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      var g = r(32543),
        y = r(90772),
        m = r(9107),
        v = r(38200);
      class w extends v.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class b extends v.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class _ {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class E extends v.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class I extends v.q {
        constructor(e) {
          super();
        }
      }
      class S {
        constructor(e, t, r, n) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class P extends v.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class O extends v.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class N {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class R {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class C {
        constructor(e) {
          this.client = e;
        }
      }
      var x = r(85094),
        T = r(3478),
        A = r(34155),
        j = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, s = t.length; i < s; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        D = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        U = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = A.platform);
        },
        k = function (e, t, r, n) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = n),
            (this.type = "bot-device");
        },
        $ = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        q = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        L =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        M = 3,
        z = [
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
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        V = [
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
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function K(e) {
        var t = (function (e) {
          return (
            "" !== e &&
            z.reduce(function (t, r) {
              var n = r[0],
                i = r[1];
              if (t) return t;
              var s = i.exec(e);
              return !!s && [n, s];
            }, !1)
          );
        })(e);
        if (!t) return null;
        var r = t[0],
          n = t[1];
        if ("searchbot" === r) return new $();
        var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
        i
          ? i.length < M &&
            (i = j(
              j([], i, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(M - i.length),
              !0,
            ))
          : (i = []);
        var s = i.join("."),
          o = (function (e) {
            for (var t = 0, r = V.length; t < r; t++) {
              var n = V[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          })(e),
          a = L.exec(e);
        return a && a[1] ? new k(r, s, o, a[1]) : new D(r, s, o);
      }
      var W = r(18495),
        F = r(20416),
        H = r(87338),
        B = r(34155);
      function J(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      const G = "base10",
        Q = "base16",
        Y = "base64pad",
        Z = "utf8";
      function X() {
        const e = (0, a.randomBytes)(32);
        return (0, h.BB)(e, Q);
      }
      function ee(e) {
        const t = (0, c.vp)((0, h.mL)(e, Z));
        return (0, h.BB)(t, Q);
      }
      function te(e) {
        return Number((0, h.BB)(e, G));
      }
      function re(e) {
        const t = (0, h.mL)(e, Y),
          r = t.slice(0, 1);
        if (1 === te(r)) {
          const e = 33,
            n = e + 12,
            i = t.slice(1, e),
            s = t.slice(e, n);
          return { type: r, sealed: t.slice(n), iv: s, senderPublicKey: i };
        }
        const n = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: n };
      }
      function ne(e) {
        const t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw new Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function ie(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var se = Object.defineProperty,
        oe = Object.getOwnPropertySymbols,
        ae = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        ue = (e, t, r) =>
          t in e
            ? se(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        he = (e, t) => {
          for (var r in t || (t = {})) ae.call(t, r) && ue(e, r, t[r]);
          if (oe) for (var r of oe(t)) ce.call(t, r) && ue(e, r, t[r]);
          return e;
        };
      const le = "ReactNative",
        pe = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        de = "js";
      function fe() {
        return (
          typeof B < "u" &&
          typeof B.versions < "u" &&
          typeof B.versions.node < "u"
        );
      }
      function ge() {
        return (
          !(0, W.getDocument)() &&
          !!(0, W.getNavigator)() &&
          navigator.product === le
        );
      }
      function ye() {
        return !fe() && !!(0, W.getNavigator)();
      }
      function me() {
        return ge()
          ? pe.reactNative
          : fe()
            ? pe.node
            : ye()
              ? pe.browser
              : pe.unknown;
      }
      function ve(e, t, n) {
        const i = (function () {
            if (
              me() === pe.reactNative &&
              typeof r.g < "u" &&
              typeof (null == r.g ? void 0 : r.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            const e = t
              ? K(t)
              : "undefined" == typeof document &&
                  "undefined" != typeof navigator &&
                  "ReactNative" === navigator.product
                ? new q()
                : "undefined" != typeof navigator
                  ? K(navigator.userAgent)
                  : void 0 !== A && A.version
                    ? new U(A.version.slice(1))
                    : null;
            var t;
            if (null === e) return "unknown";
            const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [n, e.name, e.version].join("-")
              : [n, e.version].join("-");
          })(),
          s = (function () {
            var e;
            const t = me();
            return t === pe.browser
              ? [
                  t,
                  (null == (e = (0, W.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [de, n].join("-"), i, s].join("/");
      }
      function we(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function be(e) {
        return Object.fromEntries(e.entries());
      }
      function _e(e) {
        return new Map(Object.entries(e));
      }
      function Ee(e = l.FIVE_MINUTES, t) {
        const r = (0, l.toMiliseconds)(e || l.FIVE_MINUTES);
        let n, i, s;
        return {
          resolve: (e) => {
            s && n && (clearTimeout(s), n(e));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (s = setTimeout(() => {
                o(new Error(t));
              }, r)),
                (n = e),
                (i = o);
            }),
        };
      }
      function Ie(e, t, r) {
        return new Promise(async (n, i) => {
          const s = setTimeout(() => i(new Error(r)), t);
          try {
            n(await e);
          } catch (e) {
            i(e);
          }
          clearTimeout(s);
        });
      }
      function Se(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic',
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id',
            );
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function Pe(e) {
        const [t, r] = e.split(":"),
          n = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) n.topic = r;
        else {
          if ("id" !== t || !Number.isInteger(Number(r)))
            throw new Error(
              `Invalid target, expected id:number or topic:string, got ${t}:${r}`,
            );
          n.id = Number(r);
        }
        return n;
      }
      function Oe(e, t) {
        return (0, l.fromMiliseconds)(
          (t || Date.now()) + (0, l.toMiliseconds)(e),
        );
      }
      function Ne(e) {
        return Date.now() >= (0, l.toMiliseconds)(e);
      }
      function Re(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function Ce(e) {
        return e?.relay || { protocol: "irn" };
      }
      function xe(e) {
        const t = p.RELAY_JSONRPC[e];
        if (typeof t > "u")
          throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var Te = Object.defineProperty,
        Ae = Object.getOwnPropertySymbols,
        je = Object.prototype.hasOwnProperty,
        De = Object.prototype.propertyIsEnumerable,
        Ue = (e, t, r) =>
          t in e
            ? Te(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function ke(e, t = "-") {
        const r = {},
          n = "relay" + t;
        return (
          Object.keys(e).forEach((t) => {
            if (t.startsWith(n)) {
              const i = t.replace(n, ""),
                s = e[t];
              r[i] = s;
            }
          }),
          r
        );
      }
      function $e(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function qe(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, n] = e.split(":");
            t.push(`${r}:${n}`);
          }),
          t
        );
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Le = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Me = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function ze(e, t) {
        const { message: r, code: n } = Me[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function Ve(e, t) {
        const { message: r, code: n } = Le[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function Ke(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function We(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function Fe(e) {
        return typeof e > "u";
      }
      function He(e, t) {
        return !(!t || !Fe(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Be(e, t) {
        return !(!t || !Fe(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Je(e) {
        return !(!He(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function Ge(e) {
        let t = !0;
        return (
          Ke(e) ? e.length && (t = e.every((e) => He(e, !1))) : (t = !1), t
        );
      }
      function Qe(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const n = (function (e, t) {
              let r = null;
              return (
                Ge(e?.methods)
                  ? Ge(e?.events) ||
                    (r = Ve(
                      "UNSUPPORTED_EVENTS",
                      `${t}, events should be an array of strings or empty array for no events`,
                    ))
                  : (r = Ve(
                      "UNSUPPORTED_METHODS",
                      `${t}, methods should be an array of strings or empty array for no methods`,
                    )),
                r
              );
            })(e, `${t}, namespace`);
            n && (r = n);
          }),
          r
        );
      }
      function Ye(e, t) {
        let r = null;
        if (e && We(e)) {
          const n = Qe(e, t);
          n && (r = n);
          const i = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const n = (function (e, t) {
                  let r = null;
                  return (
                    Ke(e)
                      ? e.forEach((e) => {
                          r ||
                            (function (e) {
                              if (He(e, !1) && e.includes(":")) {
                                const t = e.split(":");
                                if (3 === t.length) {
                                  const e = t[0] + ":" + t[1];
                                  return !!t[2] && Je(e);
                                }
                              }
                              return !1;
                            })(e) ||
                            (r = Ve(
                              "UNSUPPORTED_ACCOUNTS",
                              `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`,
                            ));
                        })
                      : (r = Ve(
                          "UNSUPPORTED_ACCOUNTS",
                          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`,
                        )),
                    r
                  );
                })(e?.accounts, `${t} namespace`);
                n && (r = n);
              }),
              r
            );
          })(e, t);
          i && (r = i);
        } else
          r = ze(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`,
          );
        return r;
      }
      function Ze(e) {
        return He(e.protocol, !0);
      }
      function Xe(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function et(e, t) {
        return !(
          !Je(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...qe(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function tt(e, t, r) {
        let n = null;
        const i = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                var n;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (n = e[r].chains) ||
                    n.forEach((n) => {
                      t[n] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  const n = qe(e[r].accounts);
                  n?.forEach((n) => {
                    t[n] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${n}:`),
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(i),
          a = Object.keys(s),
          c = rt(Object.keys(e)),
          u = rt(Object.keys(t)),
          h = c.filter((e) => !u.includes(e));
        return (
          h.length &&
            (n = ze(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(t).toString()}`,
            )),
          we(o, a) ||
            (n = ze(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`,
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || n) return;
            const i = qe(t[e].accounts);
            i.includes(e) ||
              (n = ze(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`,
              ));
          }),
          o.forEach((e) => {
            n ||
              (we(i[e].methods, s[e].methods)
                ? we(i[e].events, s[e].events) ||
                  (n = ze(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`,
                  ))
                : (n = ze(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`,
                  )));
          }),
          n
        );
      }
      function rt(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      var nt = r(19303),
        it = r(56186);
      const st = (e) => e.split("?")[0],
        ot =
          "undefined" != typeof WebSocket
            ? WebSocket
            : void 0 !== r.g && void 0 !== r.g.WebSocket
              ? r.g.WebSocket
              : "undefined" != typeof window && void 0 !== window.WebSocket
                ? window.WebSocket
                : "undefined" != typeof self && void 0 !== self.WebSocket
                  ? self.WebSocket
                  : r(72030),
        at = class {
          constructor(e) {
            if (
              ((this.url = e),
              (this.events = new n.EventEmitter()),
              (this.registering = !1),
              !(0, it.isWsUrl)(e))
            )
              throw new Error(
                `Provided URL is not compatible with WebSocket connection: ${e}`,
              );
            this.url = e;
          }
          get connected() {
            return void 0 !== this.socket;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open(e = this.url) {
            await this.register(e);
          }
          async close() {
            return new Promise((e, t) => {
              void 0 !== this.socket
                ? ((this.socket.onclose = (t) => {
                    this.onClose(t), e();
                  }),
                  this.socket.close())
                : t(new Error("Connection already closed"));
            });
          }
          async send(e, t) {
            void 0 === this.socket && (this.socket = await this.register());
            try {
              this.socket.send((0, x.u)(e));
            } catch (t) {
              this.onError(e.id, t);
            }
          }
          register(e = this.url) {
            if (!(0, it.isWsUrl)(e))
              throw new Error(
                `Provided URL is not compatible with WebSocket connection: ${e}`,
              );
            if (this.registering) {
              const e = this.events.getMaxListeners();
              return (
                (this.events.listenerCount("register_error") >= e ||
                  this.events.listenerCount("open") >= e) &&
                  this.events.setMaxListeners(e + 1),
                new Promise((e, t) => {
                  this.events.once("register_error", (e) => {
                    this.resetMaxListeners(), t(e);
                  }),
                    this.events.once("open", () => {
                      if ((this.resetMaxListeners(), void 0 === this.socket))
                        return t(
                          new Error(
                            "WebSocket connection is missing or invalid",
                          ),
                        );
                      e(this.socket);
                    });
                })
              );
            }
            return (
              (this.url = e),
              (this.registering = !0),
              new Promise((t, n) => {
                const i = (0, it.isReactNative)()
                    ? void 0
                    : { rejectUnauthorized: !(0, it.isLocalhostUrl)(e) },
                  s = new ot(e, [], i);
                "undefined" != typeof WebSocket ||
                (void 0 !== r.g && void 0 !== r.g.WebSocket) ||
                ("undefined" != typeof window && void 0 !== window.WebSocket) ||
                ("undefined" != typeof self && void 0 !== self.WebSocket)
                  ? (s.onerror = (e) => {
                      const t = e;
                      n(this.emitError(t.error));
                    })
                  : s.on("error", (e) => {
                      n(this.emitError(e));
                    }),
                  (s.onopen = () => {
                    this.onOpen(s), t(s);
                  });
              })
            );
          }
          onOpen(e) {
            (e.onmessage = (e) => this.onPayload(e)),
              (e.onclose = (e) => this.onClose(e)),
              (this.socket = e),
              (this.registering = !1),
              this.events.emit("open");
          }
          onClose(e) {
            (this.socket = void 0),
              (this.registering = !1),
              this.events.emit("close", e);
          }
          onPayload(e) {
            if (void 0 === e.data) return;
            const t = "string" == typeof e.data ? (0, x.D)(e.data) : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            const r = this.parseError(t),
              n = r.message || r.toString(),
              i = (0, it.formatJsonRpcError)(e, n);
            this.events.emit("payload", i);
          }
          parseError(e, t = this.url) {
            return (0, it.parseConnectionError)(e, st(t), "WS");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 &&
              this.events.setMaxListeners(10);
          }
          emitError(e) {
            const t = this.parseError(
              new Error(
                (null == e ? void 0 : e.message) ||
                  `WebSocket connection failed for host: ${st(this.url)}`,
              ),
            );
            return this.events.emit("register_error", t), t;
          }
        };
      var ct = r(72307),
        ut = r.n(ct),
        ht = r(34155),
        lt = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var n = 0, i = 0; e[t] === c; ) n++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var l = 0, p = s - 1;
                  (0 !== h || l < i) && -1 !== p;
                  p--, l++
                )
                  (h += (a * o[p]) >>> 0),
                    (o[p] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (i = l), t++;
              }
              if (" " !== e[t]) {
                for (var d = s - i; d !== s && 0 === o[d]; ) d++;
                for (var f = new Uint8Array(n + (s - d)), g = n; d !== s; )
                  f[g++] = o[d++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = t[i], p = 0, d = o - 1;
                  (0 !== l || p < n) && -1 !== d;
                  d--, p++
                )
                  (l += (256 * u[d]) >>> 0),
                    (u[d] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (n = p), i++;
              }
              for (var f = o - n; f !== o && 0 === u[f]; ) f++;
              for (var g = c.repeat(r); f < o; ++f) g += e.charAt(u[f]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        };
      const pt = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class dt {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class ft {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`,
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return yt(this, e);
        }
      }
      class gt {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return yt(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`,
          );
        }
      }
      const yt = (e, t) =>
        new gt({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class mt {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new dt(e, t, r)),
            (this.decoder = new ft(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const vt = ({ name: e, prefix: t, encode: r, decode: n }) =>
          new mt(e, t, r, n),
        wt = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: n, decode: i } = lt(r, t);
          return vt({ prefix: e, name: t, encode: n, decode: (e) => pt(i(e)) });
        },
        bt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
          vt({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const n = "=" === t[t.length - 1],
                  i = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let n = 0; n < e.length; ++n)
                  for (a = (a << 8) | e[n], o += 8; o > r; )
                    (o -= r), (s += t[i & (a >> o)]);
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, n, r),
            decode: (t) =>
              ((e, t, r, n) => {
                const i = {};
                for (let e = 0; e < t.length; ++e) i[t[e]] = e;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let t = 0; t < s; ++t) {
                  const s = i[e[t]];
                  if (void 0 === s) throw new SyntaxError(`Non-${n} character`);
                  (c = (c << r) | s),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(t, n, r, e),
          }),
        _t = vt({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var Et = Object.freeze({ __proto__: null, identity: _t });
      const It = bt({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var St = Object.freeze({ __proto__: null, base2: It });
      const Pt = bt({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var Ot = Object.freeze({ __proto__: null, base8: Pt });
      const Nt = wt({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var Rt = Object.freeze({ __proto__: null, base10: Nt });
      const Ct = bt({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        xt = bt({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Tt = Object.freeze({ __proto__: null, base16: Ct, base16upper: xt });
      const At = bt({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        jt = bt({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Dt = bt({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Ut = bt({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        kt = bt({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        $t = bt({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        qt = bt({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Lt = bt({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Mt = bt({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var zt = Object.freeze({
        __proto__: null,
        base32: At,
        base32upper: jt,
        base32pad: Dt,
        base32padupper: Ut,
        base32hex: kt,
        base32hexupper: $t,
        base32hexpad: qt,
        base32hexpadupper: Lt,
        base32z: Mt,
      });
      const Vt = wt({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Kt = wt({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Wt = Object.freeze({ __proto__: null, base36: Vt, base36upper: Kt });
      const Ft = wt({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Ht = wt({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Bt = Object.freeze({
        __proto__: null,
        base58btc: Ft,
        base58flickr: Ht,
      });
      const Jt = bt({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Gt = bt({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Qt = bt({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Yt = bt({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Zt = Object.freeze({
        __proto__: null,
        base64: Jt,
        base64pad: Gt,
        base64url: Qt,
        base64urlpad: Yt,
      });
      const Xt = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂",
        ),
        er = Xt.reduce((e, t, r) => ((e[r] = t), e), []),
        tr = Xt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        rr = vt({
          prefix: "🚀",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => e + er[t], "");
          },
          decode: function (e) {
            const t = [];
            for (const r of e) {
              const e = tr[r.codePointAt(0)];
              if (void 0 === e)
                throw new Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var nr = Object.freeze({ __proto__: null, base256emoji: rr }),
        ir = 128,
        sr = -128,
        or = Math.pow(2, 31),
        ar = Math.pow(2, 7),
        cr = Math.pow(2, 14),
        ur = Math.pow(2, 21),
        hr = Math.pow(2, 28),
        lr = Math.pow(2, 35),
        pr = Math.pow(2, 42),
        dr = Math.pow(2, 49),
        fr = Math.pow(2, 56),
        gr = Math.pow(2, 63),
        yr = function e(t, r, n) {
          r = r || [];
          for (var i = (n = n || 0); t >= or; )
            (r[n++] = (255 & t) | ir), (t /= 128);
          for (; t & sr; ) (r[n++] = (255 & t) | ir), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        mr = function (e) {
          return e < ar
            ? 1
            : e < cr
              ? 2
              : e < ur
                ? 3
                : e < hr
                  ? 4
                  : e < lr
                    ? 5
                    : e < pr
                      ? 6
                      : e < dr
                        ? 7
                        : e < fr
                          ? 8
                          : e < gr
                            ? 9
                            : 10;
        };
      const vr = (e, t, r = 0) => (yr(e, t, r), t),
        wr = (e) => mr(e),
        br = (e, t) => {
          const r = t.byteLength,
            n = wr(e),
            i = n + wr(r),
            s = new Uint8Array(i + r);
          return vr(e, s, 0), vr(r, s, n), s.set(t, i), new _r(e, r, t, s);
        };
      class _r {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      const Er = ({ name: e, code: t, encode: r }) => new Ir(e, t, r);
      class Ir {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? br(this.code, t)
              : t.then((e) => br(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Sr = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        Pr = Er({ name: "sha2-256", code: 18, encode: Sr("SHA-256") }),
        Or = Er({ name: "sha2-512", code: 19, encode: Sr("SHA-512") });
      Object.freeze({ __proto__: null, sha256: Pr, sha512: Or });
      const Nr = pt,
        Rr = {
          code: 0,
          name: "identity",
          encode: Nr,
          digest: (e) => br(0, Nr(e)),
        };
      Object.freeze({ __proto__: null, identity: Rr }),
        new TextEncoder(),
        new TextDecoder();
      const Cr = {
        ...Et,
        ...St,
        ...Ot,
        ...Rt,
        ...Tt,
        ...zt,
        ...Wt,
        ...Bt,
        ...Zt,
        ...nr,
      };
      function xr(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Tr(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const Ar = Tr(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1)),
        ),
        jr = Tr(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? xr(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          },
        ),
        Dr = {
          utf8: Ar,
          "utf-8": Ar,
          hex: Cr.base16,
          latin1: jr,
          ascii: jr,
          binary: jr,
          ...Cr,
        },
        Ur = "core",
        kr = `wc@2:${Ur}:`,
        $r = { database: ":memory:" },
        qr = "client_ed25519_seed",
        Lr = l.ONE_DAY,
        Mr = l.SIX_HOURS,
        zr = "wss://relay.walletconnect.com",
        Vr = "wss://relay.walletconnect.org",
        Kr = "relayer_message",
        Wr = "relayer_message_ack",
        Fr = "relayer_connect",
        Hr = "relayer_disconnect",
        Br = "relayer_connection_stalled",
        Jr = "relayer_transport_closed",
        Gr = "relayer_publish",
        Qr = "disconnect",
        Yr = l.ONE_SECOND / 2,
        Zr = "subscription_created",
        Xr = "subscription_deleted",
        en = "subscription_resubscribed",
        tn = 1e3 * l.FIVE_SECONDS,
        rn = {
          wc_pairingDelete: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        nn = "history_created",
        sn = "history_updated",
        on = "history_deleted",
        an = "expirer_created",
        cn = "expirer_deleted",
        un = "expirer_expired",
        hn = "verify-api",
        ln = "https://verify.walletconnect.com";
      class pn {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = ze(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`,
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, m.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, be(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? _e(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class dn {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              const e = await this.getClientSeed(),
                t = T.generateKeyPair(e);
              return T.encodeIss(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = u.Au();
                return {
                  privateKey: (0, h.BB)(e.secretKey, Q),
                  publicKey: (0, h.BB)(e.publicKey, Q),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = await this.getClientSeed(),
                r = T.generateKeyPair(t),
                n = X(),
                i = Lr;
              return await T.signJWT(n, e, i, r);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = u.gi((0, h.mL)(e, Q), (0, h.mL)(t, Q)),
                  n = new o.t(c.mE, r).expand(32);
                return (0, h.BB)(n, Q);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(n, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r =
                t ||
                (function (e) {
                  const t = (0, c.vp)((0, h.mL)(e, Q));
                  return (0, h.BB)(t, Q);
                })(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              const n = ne(r),
                i = (0, x.u)(t);
              if (ie(n)) {
                const t = n.senderPublicKey,
                  r = n.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const o = this.getSymKey(e),
                { type: c, senderPublicKey: u } = n;
              return (function (e) {
                const t = (function (e) {
                  return (0, h.mL)(`${e}`, G);
                })(typeof e.type < "u" ? e.type : 0);
                if (1 === te(t) && typeof e.senderPublicKey > "u")
                  throw new Error(
                    "Missing sender public key for type 1 envelope",
                  );
                const r =
                    typeof e.senderPublicKey < "u"
                      ? (0, h.mL)(e.senderPublicKey, Q)
                      : void 0,
                  n =
                    typeof e.iv < "u"
                      ? (0, h.mL)(e.iv, Q)
                      : (0, a.randomBytes)(12);
                return (function (e) {
                  if (1 === te(e.type)) {
                    if (typeof e.senderPublicKey > "u")
                      throw new Error(
                        "Missing sender public key for type 1 envelope",
                      );
                    return (0, h.BB)(
                      (0, h.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]),
                      Y,
                    );
                  }
                  return (0, h.BB)((0, h.zo)([e.type, e.iv, e.sealed]), Y);
                })({
                  type: t,
                  sealed: new s.OK((0, h.mL)(e.symKey, Q)).seal(
                    n,
                    (0, h.mL)(e.message, Z),
                  ),
                  iv: n,
                  senderPublicKey: r,
                });
              })({ type: c, symKey: o, message: i, senderPublicKey: u });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = re(e);
                return ne({
                  type: te(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? (0, h.BB)(r.senderPublicKey, Q)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (ie(n)) {
                const t = n.receiverPublicKey,
                  r = n.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                const r = (function (e) {
                  const t = new s.OK((0, h.mL)(e.symKey, Q)),
                    { sealed: r, iv: n } = re(e.encoded),
                    i = t.open(n, r);
                  if (null === i) throw new Error("Failed to decrypt");
                  return (0, h.BB)(i, Z);
                })({ symKey: this.getSymKey(e), encoded: t });
                return (0, x.D)(r);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`,
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e) => te(re(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              const t = re(e);
              return t.senderPublicKey
                ? (0, h.BB)(t.senderPublicKey, Q)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.keychain = r || new pn(this.core, this.logger));
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(qr);
          } catch {
            (e = X()), await this.keychain.set(qr, e);
          }
          return (function (e, t = "utf8") {
            const r = Dr[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : xr(globalThis.Buffer.from(e, "utf-8"));
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class fn extends _ {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`,
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`,
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const r = ee(t);
              let n = this.messages.get(e);
              return (
                typeof n > "u" && (n = {}),
                typeof n[r] < "u" ||
                  ((n[r] = t), this.messages.set(e, n), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), typeof this.get(e)[ee(t)] < "u"
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, m.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, be(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? _e(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class gn extends E {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new n.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, l.toMiliseconds)(l.TEN_SECONDS)),
            (this.queueTimeout = (0, l.toMiliseconds)(l.FIVE_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                const n = r?.ttl || Mr,
                  i = Ce(r),
                  s = r?.prompt || !1,
                  o = r?.tag || 0,
                  a = r?.id || (0, it.getBigIntRpcId)().toString(),
                  c = {
                    topic: e,
                    message: t,
                    opts: { ttl: n, relay: i, prompt: s, tag: o, id: a },
                  },
                  u = setTimeout(() => this.queue.set(a, c), this.queueTimeout);
                try {
                  await await Ie(
                    this.rpcPublish(e, t, n, i, s, o, a),
                    this.publishTimeout,
                  ),
                    clearTimeout(u),
                    this.relayer.events.emit(Gr, c);
                } catch {
                  return (
                    this.logger.debug("Publishing Payload stalled"),
                    void (this.needsTransportRestart = !0)
                  );
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, r, n, i, s, o) {
          var a, c, u, h;
          const l = {
            method: xe(n.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: i, tag: s },
            id: o,
          };
          return (
            Fe(null == (a = l.params) ? void 0 : a.prompt) &&
              (null == (c = l.params) || delete c.prompt),
            Fe(null == (u = l.params) ? void 0 : u.tag) &&
              (null == (h = l.params) || delete h.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: l,
            }),
            this.relayer.request(l)
          );
        }
        onPublish(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            const { topic: t, message: r, opts: n } = e;
            await this.publish(t, r, n);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(Br)
              );
            this.checkQueue();
          }),
            this.relayer.on(Wr, (e) => {
              this.onPublish(e.id.toString());
            });
        }
      }
      class yn {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const n = r.filter((e) => e !== t);
              n.length ? this.map.set(e, n) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var mn = Object.defineProperty,
        vn = Object.defineProperties,
        wn = Object.getOwnPropertyDescriptors,
        bn = Object.getOwnPropertySymbols,
        _n = Object.prototype.hasOwnProperty,
        En = Object.prototype.propertyIsEnumerable,
        In = (e, t, r) =>
          t in e
            ? mn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Sn = (e, t) => {
          for (var r in t || (t = {})) _n.call(t, r) && In(e, r, t[r]);
          if (bn) for (var r of bn(t)) En.call(t, r) && In(e, r, t[r]);
          return e;
        },
        Pn = (e, t) => vn(e, wn(t));
      class On extends P {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new yn()),
            (this.events = new n.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = kr),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restart(),
                this.registerEventListeners(),
                this.onEnable(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const r = Ce(t),
                  n = { topic: e, relay: r };
                this.pending.set(e, n);
                const i = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(i, n),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  i
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof t?.id < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, r) => {
                const n = new l.Watch();
                n.start(this.pendingSubscriptionWatchLabel);
                const i = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(i),
                    n.stop(this.pendingSubscriptionWatchLabel),
                    t(!0)),
                    n.elapsed(this.pendingSubscriptionWatchLabel) >= tn &&
                      (clearInterval(i),
                      n.stop(this.pendingSubscriptionWatchLabel),
                      r(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t)),
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            const n = Ce(r);
            await this.rpcUnsubscribe(e, t, n);
            const i = Ve("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, i),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          const r = { method: xe(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await Ie(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(Br);
          }
          return ee(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: xe(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await Ie(
              this.relayer.request(t),
              this.subscribeTimeout,
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(Br);
          }
        }
        rpcUnsubscribe(e, t, r) {
          const n = {
            method: xe(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            }),
            this.relayer.request(n)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, Pn(Sn({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Sn({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, Sn({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(Zr, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = ze("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(Xr, Pn(Sn({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit("subscription_sync");
        }
        async reset() {
          if (this.cached.length) {
            const e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit,
            );
            for (let t = 0; t < e; t++) {
              const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(en);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = ze("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`,
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`,
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          const t = await this.rpcBatchSubscribe(e);
          Ke(t) &&
            this.onBatchSubscribe(t.map((t, r) => Pn(Sn({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (this.relayer.transportExplicitlyClosed) return;
          const e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(Fr, async () => {
              await this.onConnect();
            }),
            this.relayer.on(Hr, () => {
              this.onDisconnect();
            }),
            this.events.on(Zr, async (e) => {
              const t = Zr;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(Xr, async (e) => {
              const t = Xr;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var Nn = Object.defineProperty,
        Rn = Object.getOwnPropertySymbols,
        Cn = Object.prototype.hasOwnProperty,
        xn = Object.prototype.propertyIsEnumerable,
        Tn = (e, t, r) =>
          t in e
            ? Nn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      class An extends I {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new n.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.reconnecting = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(e)
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? (0, m.generateChildLogger)(e.logger, this.name)
                : (0, m.pino)(
                    (0, m.getDefaultLoggerOptions)({
                      level: e.logger || "error",
                    }),
                  )),
            (this.messages = new fn(this.logger, e.core)),
            (this.subscriber = new On(this, this.logger)),
            (this.publisher = new gn(this, this.logger)),
            (this.relayUrl = e?.relayUrl || zr),
            (this.projectId = e.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Vr}...`,
            ),
              await this.restartTransport(Vr);
          }
          this.registerEventListeners(),
            (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport",
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let n =
            (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
            "";
          return (
            n ||
            (await Promise.all([
              new Promise((t) => {
                this.subscriber.once(Zr, (r) => {
                  r.topic === e && t();
                });
              }),
              new Promise(async (r) => {
                (n = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            n)
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.connected &&
              (await this.provider.disconnect(), this.events.emit(Jr));
        }
        async transportOpen(e) {
          if (((this.transportExplicitlyClosed = !1), !this.reconnecting)) {
            (this.relayUrl = e || this.relayUrl), (this.reconnecting = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  this.initialized || e(),
                    this.subscriber.once(en, () => {
                      e();
                    });
                }),
                await Promise.race([
                  new Promise(async (e, t) => {
                    await Ie(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`,
                    )
                      .catch((e) => t(e))
                      .then(() => e())
                      .finally(() =>
                        this.removeListener(Jr, this.rejectTransportOpen),
                      );
                  }),
                  new Promise((e) => this.once(Jr, this.rejectTransportOpen)),
                ]),
              ]);
            } catch (e) {
              this.logger.error(e);
              const t = e;
              if (!this.isConnectionStalled(t.message)) throw e;
              this.events.emit(Jr);
            } finally {
              this.reconnecting = !1;
            }
          }
        }
        async restartTransport(e) {
          this.transportExplicitlyClosed ||
            this.reconnecting ||
            ((this.relayUrl = e || this.relayUrl),
            this.connected &&
              (await Promise.all([
                new Promise((e) => {
                  this.provider.once(Qr, () => {
                    e();
                  });
                }),
                this.transportClose(),
              ])),
            await this.createProvider(),
            await this.transportOpen());
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        rejectTransportOpen() {
          throw new Error(
            "Attempt to connect to relay via `transportOpen` has stalled. Retrying...",
          );
        }
        async createProvider() {
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new nt.r(
            new at(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: n,
                auth: i,
                projectId: s,
                useOnCloseEvent: o,
              }) {
                const a = r.split("?"),
                  c = {
                    auth: i,
                    ua: ve(e, t, n),
                    projectId: s,
                    useOnCloseEvent: o || void 0,
                  },
                  u = (function (e, t) {
                    let r = H.parse(e);
                    return (r = he(he({}, r), t)), H.stringify(r);
                  })(a[1] || "", c);
                return a[0] + "?" + u;
              })({
                sdkVersion: "2.9.1",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
              }),
            ),
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`,
              ),
              !0
            );
          const n = this.messages.has(t, r);
          return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, it.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: r, message: n, publishedAt: i } = t.data,
              s = { topic: r, message: n, publishedAt: i };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((e, t) => {
                  for (var r in t || (t = {})) Cn.call(t, r) && Tn(e, r, t[r]);
                  if (Rn) for (var r of Rn(t)) xn.call(t, r) && Tn(e, r, t[r]);
                  return e;
                })({ type: "event", event: t.id }, s),
              ),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else (0, it.isJsonRpcResponse)(e) && this.events.emit(Wr, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(Kr, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = (0, it.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        registerProviderListeners() {
          this.provider.on("payload", (e) => this.onProviderPayload(e)),
            this.provider.on("connect", () => {
              this.events.emit(Fr);
            }),
            this.provider.on(Qr, () => {
              this.onProviderDisconnect();
            }),
            this.provider.on("error", (e) => {
              this.logger.error(e), this.events.emit("relayer_error", e);
            });
        }
        registerEventListeners() {
          this.events.on(Br, async () => {
            await this.restartTransport();
          });
        }
        onProviderDisconnect() {
          this.events.emit(Hr), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            setTimeout(
              async () => {
                await this.restartTransport();
              },
              (0, l.toMiliseconds)(Yr),
            );
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          if (!this.connected) {
            if (this.connecting)
              return await new Promise((e) => {
                const t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var jn = Object.defineProperty,
        Dn = Object.getOwnPropertySymbols,
        Un = Object.prototype.hasOwnProperty,
        kn = Object.prototype.propertyIsEnumerable,
        $n = (e, t, r) =>
          t in e
            ? jn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        qn = (e, t) => {
          for (var r in t || (t = {})) Un.call(t, r) && $n(e, r, t[r]);
          if (Dn) for (var r of Dn(t)) kn.call(t, r) && $n(e, r, t[r]);
          return e;
        };
      class Ln extends S {
        constructor(e, t, r, n = kr, i = void 0) {
          super(e, t, r, n),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !Fe(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                          var t;
                          return null == (t = e?.proposer)
                            ? void 0
                            : t.publicKey;
                        })(e)
                      ? this.map.set(e.id, e)
                      : (function (e) {
                          return e?.topic;
                        })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => ut()(t[r], e[r])),
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const r = qn(qn({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.storagePrefix = n),
            (this.getKey = i);
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            const { message: t } = ze("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = ze("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Mn {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const e = X(),
                t = await this.core.crypto.setSymKey(e),
                r = Oe(l.FIVE_MINUTES),
                n = { protocol: "irn" },
                i = { topic: t, expiry: r, relay: n, active: !1 },
                s = (function (e) {
                  return (
                    `${e.protocol}:${e.topic}@${e.version}?` +
                    H.stringify(
                      ((e, t) => {
                        for (var r in t || (t = {}))
                          je.call(t, r) && Ue(e, r, t[r]);
                        if (Ae)
                          for (var r of Ae(t)) De.call(t, r) && Ue(e, r, t[r]);
                        return e;
                      })(
                        { symKey: e.symKey },
                        (function (e, t = "-") {
                          const r = {};
                          return (
                            Object.keys(e).forEach((n) => {
                              const i = "relay" + t + n;
                              e[n] && (r[i] = e[n]);
                            }),
                            r
                          );
                        })(e.relay),
                      ),
                    )
                  );
                })({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: n,
                });
              return (
                await this.pairings.set(t, i),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, r),
                { topic: t, uri: s }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              const {
                topic: t,
                symKey: r,
                relay: n,
              } = (function (e) {
                const t = e.indexOf(":"),
                  r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                  n = e.substring(0, t),
                  i = e.substring(t + 1, r).split("@"),
                  s = typeof r < "u" ? e.substring(r) : "",
                  o = H.parse(s);
                return {
                  protocol: n,
                  topic: $e(i[0]),
                  version: parseInt(i[1], 10),
                  symKey: o.symKey,
                  relay: ke(o),
                };
              })(e.uri);
              if (this.pairings.keys.includes(t))
                throw new Error(`Pairing already exists: ${t}`);
              if (this.core.crypto.hasKeys(t))
                throw new Error(`Keychain already exists: ${t}`);
              const i = Oe(l.FIVE_MINUTES),
                s = { topic: t, relay: n, expiry: i, active: !1 };
              return (
                await this.pairings.set(t, s),
                await this.core.crypto.setSymKey(r, t),
                await this.core.relayer.subscribe(t, { relay: n }),
                this.core.expirer.set(t, i),
                e.activatePairing && (await this.activate({ topic: t })),
                s
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              const t = Oe(l.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: n, reject: i } = Ee();
                this.events.once(Re("pairing_ping", e), ({ error: e }) => {
                  e ? i(e) : n();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  Ve("USER_DISCONNECTED"),
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              const n = (0, it.formatJsonRpcRequest)(t, r),
                i = await this.core.crypto.encode(e, n),
                s = rn[t].req;
              return (
                this.core.history.set(e, n),
                this.core.relayer.publish(e, i, s),
                n.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const n = (0, it.formatJsonRpcResult)(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = rn[s.request.method].res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, r) => {
              const n = (0, it.formatJsonRpcError)(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = rn[s.request.method]
                  ? rn[s.request.method].res
                  : rn.unregistered_method.res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, Ve("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => Ne(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === n
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(n);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit("pairing_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                (0, it.isJsonRpcResult)(t)
                  ? this.events.emit(Re("pairing_ping", r), {})
                  : (0, it.isJsonRpcError)(t) &&
                    this.events.emit(Re("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit("pairing_delete", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: r, method: n } = t;
              try {
                if (this.registeredMethods.includes(n)) return;
                const t = Ve("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(Ve("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`,
                );
                throw new Error(t);
              }
              if (
                !(function (e) {
                  if (He(e, !1))
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(e.uri)
              ) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`,
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!He(e, !1)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = ze(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              if (Ne(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = ze("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.pairings = new Ln(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix,
            ));
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(Kr, async (e) => {
            const { topic: t, message: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r),
              )
            )
              return;
            const n = await this.core.crypto.decode(t, r);
            (0, it.isJsonRpcRequest)(n)
              ? (this.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : (0, it.isJsonRpcResponse)(n) &&
                (await this.core.history.resolve(n),
                await this.onRelayEventResponse({ topic: t, payload: n }),
                this.core.history.delete(t, n.id));
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(un, async (e) => {
            const { topic: t } = Pe(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit("pairing_expire", { topic: t }));
          });
        }
      }
      class zn extends b {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              const n = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: Oe(l.THIRTY_DAYS),
              };
              this.records.set(n.id, n), this.events.emit(nn, n);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, it.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(sn, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(on, r);
                  }
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, m.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: (0, it.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id,
                ),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = ze("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values),
            this.events.emit("history_sync");
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = ze("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(nn, (e) => {
            const t = nn;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(sn, (e) => {
              const t = sn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(on, (e) => {
              const t = on;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, l.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Vn extends O {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                n = { target: r, expiry: t };
              this.expirations.set(r, n),
                this.checkExpiry(r, n),
                this.events.emit(an, { target: r, expiration: n });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(cn, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, m.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return Se("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return Se("id", e);
            })(e);
          const { message: t } = ze("UNKNOWN_TYPE", "Target type: " + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values),
            this.events.emit("expirer_sync");
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = ze("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = ze("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, l.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(un, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations(),
          ),
            this.events.on(an, (e) => {
              const t = an;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(un, (e) => {
              const t = un;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(cn, (e) => {
              const t = cn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Kn extends N {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = hn),
            (this.initialized = !1),
            (this.init = async (e) => {
              ge() ||
                !ye() ||
                ((this.verifyUrl = e?.verifyUrl || ln),
                await this.createIframe());
            }),
            (this.register = async (e) => {
              var t;
              if ((this.initialized || (await this.init()), this.iframe))
                try {
                  null == (t = this.iframe.contentWindow) ||
                    t.postMessage(e.attestationId, this.verifyUrl),
                    this.logger.info(
                      `postMessage sent: ${e.attestationId} ${this.verifyUrl}`,
                    );
                } catch {}
            }),
            (this.resolve = async (e) => {
              var t;
              if (this.isDevEnv) return "";
              this.logger.info(`resolving attestation: ${e.attestationId}`);
              const r = this.startAbortTimer(l.FIVE_SECONDS),
                n = await fetch(
                  `${this.verifyUrl}/attestation/${e.attestationId}`,
                  { signal: this.abortController.signal },
                );
              return (
                clearTimeout(r),
                200 === n.status
                  ? null == (t = await n.json())
                    ? void 0
                    : t.origin
                  : ""
              );
            }),
            (this.createIframe = async () => {
              try {
                await Promise.race([
                  new Promise((e, t) => {
                    if (document.getElementById(hn)) return e();
                    const r = document.createElement("iframe");
                    r.setAttribute("id", hn),
                      r.setAttribute(
                        "src",
                        `${this.verifyUrl}/${this.projectId}`,
                      ),
                      (r.style.display = "none"),
                      r.addEventListener("load", () => {
                        (this.initialized = !0), e();
                      }),
                      r.addEventListener("error", (e) => {
                        t(e);
                      }),
                      document.body.append(r),
                      (this.iframe = r);
                  }),
                  new Promise((e) => {
                    setTimeout(
                      () => e("iframe load timeout"),
                      (0, l.toMiliseconds)(l.ONE_SECOND / 2),
                    );
                  }),
                ]);
              } catch (e) {
                this.logger.error(
                  `Verify iframe failed to load: ${this.verifyUrl}`,
                ),
                  this.logger.error(e);
              }
            }),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.verifyUrl = ln),
            (this.abortController = new AbortController()),
            (this.isDevEnv = fe() && ht.env.IS_VITEST);
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return setTimeout(
            () => this.abortController.abort(),
            (0, l.toMiliseconds)(e),
          );
        }
      }
      var Wn = Object.defineProperty,
        Fn = Object.getOwnPropertySymbols,
        Hn = Object.prototype.hasOwnProperty,
        Bn = Object.prototype.propertyIsEnumerable,
        Jn = (e, t, r) =>
          t in e
            ? Wn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Gn = (e, t) => {
          for (var r in t || (t = {})) Hn.call(t, r) && Jn(e, r, t[r]);
          if (Fn) for (var r of Fn(t)) Bn.call(t, r) && Jn(e, r, t[r]);
          return e;
        };
      class Qn extends w {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Ur),
            (this.events = new n.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || zr);
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, m.pino)(
                  (0, m.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.heartbeat = new y.HeartBeat()),
            (this.crypto = new dn(this, this.logger, e?.keychain)),
            (this.history = new zn(this, this.logger)),
            (this.expirer = new Vn(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new g.Z(Gn(Gn({}, $r), e?.storageOptions))),
            (this.relayer = new An({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new Mn(this, this.logger)),
            (this.verify = new Kn(this.projectId || "", this.logger));
        }
        static async init(e) {
          const t = new Qn(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e,
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const Yn = Qn,
        Zn = "client",
        Xn = `wc@2:${Zn}:`,
        ei = Zn,
        ti = "Proposal expired",
        ri = l.SEVEN_DAYS,
        ni = {
          wc_sessionPropose: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        ii = { min: l.FIVE_MINUTES, max: l.SEVEN_DAYS },
        si = "idle",
        oi = "active",
        ai = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var ci = Object.defineProperty,
        ui = Object.defineProperties,
        hi = Object.getOwnPropertyDescriptors,
        li = Object.getOwnPropertySymbols,
        pi = Object.prototype.hasOwnProperty,
        di = Object.prototype.propertyIsEnumerable,
        fi = (e, t, r) =>
          t in e
            ? ci(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gi = (e, t) => {
          for (var r in t || (t = {})) pi.call(t, r) && fi(e, r, t[r]);
          if (li) for (var r of li(t)) di.call(t, r) && fi(e, r, t[r]);
          return e;
        },
        yi = (e, t) => ui(e, hi(t));
      class mi extends C {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.requestQueue = { state: si, requests: [] }),
            (this.requestQueueDelay = l.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.client.core.pairing.register({ methods: Object.keys(ni) }),
                (this.initialized = !0),
                setTimeout(
                  () => {
                    (this.requestQueue.requests =
                      this.getPendingSessionRequests()),
                      this.processRequestQueue();
                  },
                  (0, l.toMiliseconds)(this.requestQueueDelay),
                ));
            }),
            (this.connect = async (e) => {
              this.isInitialized();
              const t = yi(gi({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: n,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: o,
              } = t;
              let a,
                c = r,
                u = !1;
              if (
                (c && (u = this.client.core.pairing.pairings.get(c).active),
                !c || !u)
              ) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (a = t);
              }
              const h = await this.client.core.crypto.generateKeyPair(),
                p = gi(
                  {
                    requiredNamespaces: n,
                    optionalNamespaces: i,
                    relays: o ?? [{ protocol: "irn" }],
                    proposer: { publicKey: h, metadata: this.client.metadata },
                  },
                  s && { sessionProperties: s },
                ),
                { reject: d, resolve: f, done: g } = Ee(l.FIVE_MINUTES, ti);
              if (
                (this.events.once(
                  Re("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) d(e);
                    else if (t) {
                      t.self.publicKey = h;
                      const e = yi(gi({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        c &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: c,
                            metadata: t.peer.metadata,
                          })),
                        f(e);
                    }
                  },
                ),
                !c)
              ) {
                const { message: e } = ze(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`,
                );
                throw new Error(e);
              }
              const y = await this.sendRequest(c, "wc_sessionPropose", p),
                m = Oe(l.FIVE_MINUTES);
              return (
                await this.setProposal(y, gi({ id: y, expiry: m }, p)),
                { uri: a, approval: g }
              );
            }),
            (this.pair = async (e) => (
              this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              this.isInitialized(), await this.isValidApprove(e);
              const {
                  id: t,
                  relayProtocol: r,
                  namespaces: n,
                  sessionProperties: i,
                } = e,
                s = this.client.proposal.get(t);
              let {
                pairingTopic: o,
                proposer: a,
                requiredNamespaces: c,
                optionalNamespaces: u,
              } = s;
              (o = o || ""),
                We(c) ||
                  (c = (function (e, t) {
                    const r = Ye(e, "approve()");
                    if (r) throw new Error(r.message);
                    const n = {};
                    for (const [t, r] of Object.entries(e))
                      n[t] = {
                        methods: r.methods,
                        events: r.events,
                        chains: r.accounts.map(
                          (e) => `${e.split(":")[0]}:${e.split(":")[1]}`,
                        ),
                      };
                    return n;
                  })(n));
              const h = await this.client.core.crypto.generateKeyPair(),
                l = a.publicKey,
                p = await this.client.core.crypto.generateSharedKey(h, l);
              o &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: o,
                  metadata: a.metadata,
                }),
                await this.sendResult(t, o, {
                  relay: { protocol: r ?? "irn" },
                  responderPublicKey: h,
                }),
                await this.client.proposal.delete(t, Ve("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: o }));
              const d = gi(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: n,
                  requiredNamespaces: c,
                  optionalNamespaces: u,
                  pairingTopic: o,
                  controller: { publicKey: h, metadata: this.client.metadata },
                  expiry: Oe(ri),
                },
                i && { sessionProperties: i },
              );
              await this.client.core.relayer.subscribe(p),
                await this.sendRequest(p, "wc_sessionSettle", d);
              const f = yi(gi({}, d), {
                topic: p,
                pairingTopic: o,
                acknowledged: !1,
                self: d.controller,
                peer: { publicKey: a.publicKey, metadata: a.metadata },
                controller: h,
              });
              return (
                await this.client.session.set(p, f),
                await this.setExpiry(p, Oe(ri)),
                {
                  topic: p,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(p)), 500),
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              this.isInitialized(), await this.isValidReject(e);
              const { id: t, reason: r } = e,
                { pairingTopic: n } = this.client.proposal.get(t);
              n &&
                (await this.sendError(t, n, r),
                await this.client.proposal.delete(t, Ve("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.isValidUpdate(e);
              const { topic: t, namespaces: r } = e,
                n = await this.sendRequest(t, "wc_sessionUpdate", {
                  namespaces: r,
                }),
                { done: i, resolve: s, reject: o } = Ee();
              return (
                this.events.once(Re("session_update", n), ({ error: e }) => {
                  e ? o(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.isValidExtend(e);
              const { topic: t } = e,
                r = await this.sendRequest(t, "wc_sessionExtend", {}),
                { done: n, resolve: i, reject: s } = Ee();
              return (
                this.events.once(Re("session_extend", r), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                await this.setExpiry(t, Oe(ri)),
                { acknowledged: n }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized(), await this.isValidRequest(e);
              const { chainId: t, request: n, topic: i, expiry: s } = e,
                o = await this.sendRequest(
                  i,
                  "wc_sessionRequest",
                  { request: n, chainId: t },
                  s,
                ),
                { done: a, resolve: c, reject: u } = Ee(s);
              return (
                this.events.once(
                  Re("session_request", o),
                  ({ error: e, result: t }) => {
                    e ? u(e) : c(t);
                  },
                ),
                this.client.events.emit("session_request_sent", {
                  topic: i,
                  request: n,
                  chainId: t,
                  id: o,
                }),
                (async function ({ id: e, topic: t, wcDeepLink: n }) {
                  try {
                    if (!n) return;
                    const i = "string" == typeof n ? JSON.parse(n) : n;
                    let s = i?.href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    const o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                      a = me();
                    a === pe.browser
                      ? o.startsWith("https://")
                        ? window.open(o, "_blank", "noreferrer noopener")
                        : window.open(o, "_self", "noreferrer noopener")
                      : a === pe.reactNative &&
                        typeof (null == r.g ? void 0 : r.g.Linking) < "u" &&
                        (await r.g.Linking.openURL(o));
                  } catch (e) {
                    console.error(e);
                  }
                })({
                  id: o,
                  topic: i,
                  wcDeepLink: await this.client.core.storage.getItem(
                    "WALLETCONNECT_DEEPLINK_CHOICE",
                  ),
                }),
                await a()
              );
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: n } = r;
              (0, it.isJsonRpcResult)(r)
                ? await this.sendResult(n, t, r.result)
                : (0, it.isJsonRpcError)(r) &&
                  (await this.sendError(n, t, r.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_sessionPing", {}),
                  { done: r, resolve: n, reject: i } = Ee();
                this.events.once(Re("session_ping", e), ({ error: e }) => {
                  e ? i(e) : n();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(), await this.isValidEmit(e);
              const { topic: t, event: r, chainId: n } = e;
              await this.sendRequest(t, "wc_sessionEvent", {
                event: r,
                chainId: n,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = (0, it.getBigIntRpcId)().toString();
                let r;
                const n = (t) => {
                  t?.id.toString() === e &&
                    (this.client.core.relayer.events.removeListener(Wr, n),
                    r());
                };
                await Promise.all([
                  new Promise((e) => {
                    (r = e), this.client.core.relayer.on(Wr, n);
                  }),
                  this.sendRequest(
                    t,
                    "wc_sessionDelete",
                    Ve("USER_DISCONNECTED"),
                    void 0,
                    e,
                  ),
                ]),
                  await this.deleteSession(t);
              } else await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: r } = t,
                    n = Object.keys(e.namespaces),
                    i = Object.keys(r);
                  let s = !0;
                  return (
                    !!we(i, n) &&
                    (n.forEach((t) => {
                      const {
                          accounts: n,
                          methods: i,
                          events: o,
                        } = e.namespaces[t],
                        a = qe(n),
                        c = r[t];
                      (we(J(t, c), a) && we(c.methods, i) && we(c.events, o)) ||
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e),
              )
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic,
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var n, i;
                        return (
                          (null == (n = r.peerMetadata) ? void 0 : n.url) &&
                          (null == (i = r.peerMetadata) ? void 0 : i.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`,
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic }),
                      ),
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished",
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e, t) => {
              const { self: r } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, Ve("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(r.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e);
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, Ve("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                (this.requestQueue.requests = this.requestQueue.requests.filter(
                  (t) => t.id !== e,
                )),
                r && (this.requestQueue.state = si);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              const t = ni.wc_sessionRequest.req.ttl,
                { id: r, topic: n, params: i } = e;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: n,
                params: i,
              }),
                t && this.client.core.expirer.set(r, Oe(t));
            }),
            (this.sendRequest = async (e, t, r, n, i) => {
              const s = (0, it.formatJsonRpcRequest)(t, r);
              if (ye() && ai.includes(t)) {
                const e = ee(JSON.stringify(s));
                await this.client.core.verify.register({ attestationId: e });
              }
              const o = await this.client.core.crypto.encode(e, s),
                a = ni[t].req;
              return (
                n && (a.ttl = n),
                i && (a.id = i),
                this.client.core.history.set(e, s),
                this.client.core.relayer.publish(e, o, a),
                s.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const n = (0, it.formatJsonRpcResult)(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = ni[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, r) => {
              const n = (0, it.formatJsonRpcError)(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = ni[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                Ne(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  Ne(e.expiry) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession(e)),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e,
                n = r.method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${n}`,
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${n}`,
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: r } = ze(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`,
                );
              throw new Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                this.isValidConnect(gi({}, t.params));
                const i = Oe(l.FIVE_MINUTES),
                  s = gi({ id: n, pairingTopic: e, expiry: i }, r);
                await this.setProposal(n, s);
                const o = ee(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: n,
                  params: s,
                  verifyContext: a,
                });
              } catch (t) {
                await this.sendError(n, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              const { id: r } = t;
              if ((0, it.isJsonRpcResult)(t)) {
                const { result: n } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: n,
                });
                const i = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: i,
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = n.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                (0, it.isJsonRpcError)(t) &&
                  (await this.client.proposal.delete(
                    r,
                    Ve("USER_DISCONNECTED"),
                  ),
                  this.events.emit(Re("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidSessionSettleRequest(n);
                const {
                    relay: r,
                    controller: i,
                    expiry: s,
                    namespaces: o,
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    sessionProperties: u,
                    pairingTopic: h,
                  } = t.params,
                  l = gi(
                    {
                      topic: e,
                      relay: r,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: h,
                      requiredNamespaces: a,
                      optionalNamespaces: c,
                      controller: i.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: i.publicKey, metadata: i.metadata },
                    },
                    u && { sessionProperties: u },
                  );
                await this.sendResult(t.id, e, !0),
                  this.events.emit(Re("session_connect"), { session: l }),
                  this.cleanupDuplicatePairings(l);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: r } = t;
              (0, it.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(Re("session_approve", r), {}))
                : (0, it.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, Ve("USER_DISCONNECTED")),
                  this.events.emit(Re("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                this.isValidUpdate(gi({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult(n, e, !0),
                  this.client.events.emit("session_update", {
                    id: n,
                    topic: e,
                    params: r,
                  });
              } catch (t) {
                await this.sendError(n, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: r } = t;
              (0, it.isJsonRpcResult)(t)
                ? this.events.emit(Re("session_update", r), {})
                : (0, it.isJsonRpcError)(t) &&
                  this.events.emit(Re("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, Oe(ri)),
                  await this.sendResult(r, e, !0),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: r } = t;
              (0, it.isJsonRpcResult)(t)
                ? this.events.emit(Re("session_extend", r), {})
                : (0, it.isJsonRpcError)(t) &&
                  this.events.emit(Re("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                (0, it.isJsonRpcResult)(t)
                  ? this.events.emit(Re("session_ping", r), {})
                  : (0, it.isJsonRpcError)(t) &&
                    this.events.emit(Re("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(Gr, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult(r, e, !0),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: r,
                    topic: e,
                  });
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidRequest(gi({ topic: e }, n)),
                  await this.setPendingSessionRequest({
                    id: r,
                    topic: e,
                    params: n,
                  }),
                  this.addRequestToQueue({ id: r, topic: e, params: n }),
                  await this.processRequestQueue();
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: r } = t;
              (0, it.isJsonRpcResult)(t)
                ? this.events.emit(Re("session_request", r), {
                    result: t.result,
                  })
                : (0, it.isJsonRpcError)(t) &&
                  this.events.emit(Re("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidEmit(gi({ topic: e }, n)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: n,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.addRequestToQueue = (e) => {
              this.requestQueue.requests.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(
                  () => {
                    (this.requestQueue.state = si), this.processRequestQueue();
                  },
                  (0, l.toMiliseconds)(this.requestQueueDelay),
                );
            }),
            (this.processRequestQueue = async () => {
              if (this.requestQueue.state === oi)
                return void this.client.logger.info(
                  "session request queue is already active.",
                );
              const e = this.requestQueue.requests[0];
              if (e)
                try {
                  const { id: t, topic: r, params: n } = e,
                    i = ee(JSON.stringify({ id: t, params: n })),
                    s = this.client.session.get(r),
                    o = await this.getVerifyContext(i, s.peer.metadata);
                  (this.requestQueue.state = oi),
                    this.client.events.emit("session_request", {
                      id: t,
                      topic: r,
                      params: n,
                      verifyContext: o,
                    });
                } catch (e) {
                  this.client.logger.error(e);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.isValidConnect = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`,
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: n,
                sessionProperties: i,
                relays: s,
              } = e;
              if (
                (Fe(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    e
                      ? e &&
                        Ke(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = Ze(e);
                        })
                      : (r = !0),
                    r
                  );
                })(s))
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${s}`,
                );
                throw new Error(e);
              }
              !Fe(r) &&
                0 !== We(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !Fe(n) &&
                  0 !== We(n) &&
                  this.validateNamespaces(n, "optionalNamespaces"),
                Fe(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const r = (function (e, t, r) {
                let n = null;
                if (e && We(e)) {
                  const i = Qe(e, t);
                  i && (n = i);
                  const s = (function (e, t, r) {
                    let n = null;
                    return (
                      Object.entries(e).forEach(([e, i]) => {
                        if (n) return;
                        const s = (function (e, t, r) {
                          let n = null;
                          return (
                            Ke(t) && t.length
                              ? t.forEach((e) => {
                                  n ||
                                    Je(e) ||
                                    (n = Ve(
                                      "UNSUPPORTED_CHAINS",
                                      `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`,
                                    ));
                                })
                              : Je(e) ||
                                (n = Ve(
                                  "UNSUPPORTED_CHAINS",
                                  `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`,
                                )),
                            n
                          );
                        })(e, J(e, i), `${t} ${r}`);
                        s && (n = s);
                      }),
                      n
                    );
                  })(e, t, r);
                  s && (n = s);
                } else
                  n = ze(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`,
                  );
                return n;
              })(e, "connect()", t);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!Xe(e))
                throw new Error(
                  ze("MISSING_OR_INVALID", `approve() params: ${e}`).message,
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: n,
                sessionProperties: i,
              } = e;
              await this.isValidProposalId(t);
              const s = this.client.proposal.get(t),
                o = Ye(r, "approve()");
              if (o) throw new Error(o.message);
              const a = tt(s.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!He(n, !0)) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${n}`,
                );
                throw new Error(e);
              }
              Fe(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`,
                );
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (await this.isValidProposalId(t),
                !(function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    e.code &&
                    Be(e.code, !1) &&
                    e.message &&
                    He(e.message, !1)
                  );
                })(r))
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`,
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: n, expiry: i } = e;
              if (!Ze(t)) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string",
                );
                throw new Error(e);
              }
              const s = (function (e, t) {
                let r = null;
                return (
                  He(e?.publicKey, !1) ||
                    (r = ze(
                      "MISSING_OR_INVALID",
                      "onSessionSettleRequest() controller public key should be a string",
                    )),
                  r
                );
              })(r);
              if (s) throw new Error(s.message);
              const o = Ye(n, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (Ne(i)) {
                const { message: e } = ze(
                  "EXPIRED",
                  "onSessionSettleRequest()",
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              const n = this.client.session.get(t),
                i = Ye(r, "update()");
              if (i) throw new Error(i.message);
              const s = tt(n.requiredNamespaces, r, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: n, expiry: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!et(s, n)) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${n}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Fe(e) || !He(e.method, !1));
                })(r)
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!He(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          qe(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(s, n, r.method)
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`,
                );
                throw new Error(e);
              }
              if (
                i &&
                !(function (e, t) {
                  return Be(e, !1) && e <= t.max && e >= t.min;
                })(i, ii)
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${i}. Expiry must be a number (in seconds) between ${ii.min} and ${ii.max}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, response: r } = e;
              if (
                (await this.isValidSessionTopic(t),
                !(function (e) {
                  return !(
                    Fe(e) ||
                    (Fe(e.result) && Fe(e.error)) ||
                    !Be(e.id, !1) ||
                    !He(e.jsonrpc, !1)
                  );
                })(r))
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: n } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: i } = this.client.session.get(t);
              if (!et(i, n)) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${n}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Fe(e) || !He(e.name, !1));
                })(r)
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!He(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          qe(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(i, n, r.name)
              ) {
                const { message: e } = ze(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Xe(e)) {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              const r = {
                verified: {
                  verifyUrl: t.verifyUrl || "",
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                const n = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                n &&
                  ((r.verified.origin = n),
                  (r.verified.validation = n === t.url ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.error(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!He(e, !1)) {
                  const { message: r } = ze(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`,
                  );
                  throw new Error(r);
                }
              });
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = ze("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(Kr, async (e) => {
            const { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r),
              )
            )
              return;
            const n = await this.client.core.crypto.decode(t, r);
            (0, it.isJsonRpcRequest)(n)
              ? (this.client.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : (0, it.isJsonRpcResponse)(n)
                ? (await this.client.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: t, payload: n }),
                  this.client.core.history.delete(t, n.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: n });
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(un, async (e) => {
            const { topic: t, id: r } = Pe(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                ze("EXPIRED"),
                !0,
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession(t, !0),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        isValidPairingTopic(e) {
          if (!He(e, !1)) {
            const { message: t } = ze(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = ze(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (Ne(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = ze("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!He(e, !1)) {
            const { message: t } = ze(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            const { message: t } = ze(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (Ne(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            const { message: t } = ze("EXPIRED", `session topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (He(e, !1)) {
                const { message: t } = ze(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              {
                const { message: t } = ze(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            const { message: t } = ze(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = ze(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if (Ne(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            const { message: t } = ze("EXPIRED", `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class vi extends Ln {
        constructor(e, t) {
          super(e, t, "proposal", Xn), (this.core = e), (this.logger = t);
        }
      }
      class wi extends Ln {
        constructor(e, t) {
          super(e, t, "session", Xn), (this.core = e), (this.logger = t);
        }
      }
      class bi extends Ln {
        constructor(e, t) {
          super(e, t, "request", Xn, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class _i extends R {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = ei),
            (this.events = new n.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || ei),
            (this.metadata = e?.metadata ||
              (0, F.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, m.pino)(
                  (0, m.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.core = e?.core || new Yn(e)),
            (this.logger = (0, m.generateChildLogger)(t, this.name)),
            (this.session = new wi(this.core, this.logger)),
            (this.proposal = new vi(this.core, this.logger)),
            (this.pendingRequest = new bi(this.core, this.logger)),
            (this.engine = new mi(this));
        }
        static async init(e) {
          const t = new _i(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, m.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      function Ei(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      function Ii(e) {
        return e.includes(":");
      }
      function Si(e) {
        return Ii(e) ? e.split(":")[0] : e;
      }
      r(3382),
        r(99982),
        r(94543),
        r(34155),
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Pi = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function Oi(e, t) {
        const { message: r, code: n } = Pi[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function Ni(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      var Ri = r(84497);
      const Ci = "error",
        xi = "wc@2:universal_provider:",
        Ti = "default_chain_changed";
      var Ai =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
              ? window
              : typeof r.g < "u"
                ? r.g
                : typeof self < "u"
                  ? self
                  : {},
        ji = { exports: {} };
      !(function (e, t) {
        (function () {
          var r,
            n = "Expected a function",
            i = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 32,
            a = 128,
            c = 1 / 0,
            u = 9007199254740991,
            h = NaN,
            l = 4294967295,
            p = [
              ["ary", a],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", o],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            d = "[object Arguments]",
            f = "[object Array]",
            g = "[object Boolean]",
            y = "[object Date]",
            m = "[object Error]",
            v = "[object Function]",
            w = "[object GeneratorFunction]",
            b = "[object Map]",
            _ = "[object Number]",
            E = "[object Object]",
            I = "[object Promise]",
            S = "[object RegExp]",
            P = "[object Set]",
            O = "[object String]",
            N = "[object Symbol]",
            R = "[object WeakMap]",
            C = "[object ArrayBuffer]",
            x = "[object DataView]",
            T = "[object Float32Array]",
            A = "[object Float64Array]",
            j = "[object Int8Array]",
            D = "[object Int16Array]",
            U = "[object Int32Array]",
            k = "[object Uint8Array]",
            $ = "[object Uint8ClampedArray]",
            q = "[object Uint16Array]",
            L = "[object Uint32Array]",
            M = /\b__p \+= '';/g,
            z = /\b(__p \+=) '' \+/g,
            V = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            K = /&(?:amp|lt|gt|quot|#39);/g,
            W = /[&<>"']/g,
            F = RegExp(K.source),
            H = RegExp(W.source),
            B = /<%-([\s\S]+?)%>/g,
            J = /<%([\s\S]+?)%>/g,
            G = /<%=([\s\S]+?)%>/g,
            Q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Y = /^\w*$/,
            Z =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            X = /[\\^$.*+?()[\]{}|]/g,
            ee = RegExp(X.source),
            te = /^\s+/,
            re = /\s/,
            ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ie = /\{\n\/\* \[wrapped with (.+)\] \*/,
            se = /,? & /,
            oe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ae = /[()=,{}\[\]\/\s]/,
            ce = /\\(\\)?/g,
            ue = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            he = /\w*$/,
            le = /^[-+]0x[0-9a-f]+$/i,
            pe = /^0b[01]+$/i,
            de = /^\[object .+?Constructor\]$/,
            fe = /^0o[0-7]+$/i,
            ge = /^(?:0|[1-9]\d*)$/,
            ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            me = /($^)/,
            ve = /['\n\r\u2028\u2029\\]/g,
            we = "\\ud800-\\udfff",
            be = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            _e = "\\u2700-\\u27bf",
            Ee = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Ie = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Se = "\\ufe0e\\ufe0f",
            Pe =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Oe = "[" + we + "]",
            Ne = "[" + Pe + "]",
            Re = "[" + be + "]",
            Ce = "\\d+",
            xe = "[" + _e + "]",
            Te = "[" + Ee + "]",
            Ae = "[^" + we + Pe + Ce + _e + Ee + Ie + "]",
            je = "\\ud83c[\\udffb-\\udfff]",
            De = "[^" + we + "]",
            Ue = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            ke = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            $e = "[" + Ie + "]",
            qe = "\\u200d",
            Le = "(?:" + Te + "|" + Ae + ")",
            Me = "(?:" + $e + "|" + Ae + ")",
            ze = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Ve = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            Ke = "(?:" + Re + "|" + je + ")?",
            We = "[" + Se + "]?",
            Fe =
              We +
              Ke +
              "(?:" +
              qe +
              "(?:" +
              [De, Ue, ke].join("|") +
              ")" +
              We +
              Ke +
              ")*",
            He = "(?:" + [xe, Ue, ke].join("|") + ")" + Fe,
            Be = "(?:" + [De + Re + "?", Re, Ue, ke, Oe].join("|") + ")",
            Je = RegExp("['’]", "g"),
            Ge = RegExp(Re, "g"),
            Qe = RegExp(je + "(?=" + je + ")|" + Be + Fe, "g"),
            Ye = RegExp(
              [
                $e +
                  "?" +
                  Te +
                  "+" +
                  ze +
                  "(?=" +
                  [Ne, $e, "$"].join("|") +
                  ")",
                Me + "+" + Ve + "(?=" + [Ne, $e + Le, "$"].join("|") + ")",
                $e + "?" + Le + "+" + ze,
                $e + "+" + Ve,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Ce,
                He,
              ].join("|"),
              "g",
            ),
            Ze = RegExp("[" + qe + we + be + Se + "]"),
            Xe =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            et = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            tt = -1,
            rt = {};
          (rt[T] =
            rt[A] =
            rt[j] =
            rt[D] =
            rt[U] =
            rt[k] =
            rt[$] =
            rt[q] =
            rt[L] =
              !0),
            (rt[d] =
              rt[f] =
              rt[C] =
              rt[g] =
              rt[x] =
              rt[y] =
              rt[m] =
              rt[v] =
              rt[b] =
              rt[_] =
              rt[E] =
              rt[S] =
              rt[P] =
              rt[O] =
              rt[R] =
                !1);
          var nt = {};
          (nt[d] =
            nt[f] =
            nt[C] =
            nt[x] =
            nt[g] =
            nt[y] =
            nt[T] =
            nt[A] =
            nt[j] =
            nt[D] =
            nt[U] =
            nt[b] =
            nt[_] =
            nt[E] =
            nt[S] =
            nt[P] =
            nt[O] =
            nt[N] =
            nt[k] =
            nt[$] =
            nt[q] =
            nt[L] =
              !0),
            (nt[m] = nt[v] = nt[R] = !1);
          var it = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            st = parseFloat,
            ot = parseInt,
            at = "object" == typeof Ai && Ai && Ai.Object === Object && Ai,
            ct =
              "object" == typeof self && self && self.Object === Object && self,
            ut = at || ct || Function("return this")(),
            ht = t && !t.nodeType && t,
            lt = ht && e && !e.nodeType && e,
            pt = lt && lt.exports === ht,
            dt = pt && at.process,
            ft = (function () {
              try {
                return (
                  (lt && lt.require && lt.require("util").types) ||
                  (dt && dt.binding && dt.binding("util"))
                );
              } catch {}
            })(),
            gt = ft && ft.isArrayBuffer,
            yt = ft && ft.isDate,
            mt = ft && ft.isMap,
            vt = ft && ft.isRegExp,
            wt = ft && ft.isSet,
            bt = ft && ft.isTypedArray;
          function _t(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function Et(e, t, r, n) {
            for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
              var o = e[i];
              t(n, o, r(o), e);
            }
            return n;
          }
          function It(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length;
              ++r < n && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function St(e, t) {
            for (
              var r = null == e ? 0 : e.length;
              r-- && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function Pt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function Ot(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = 0, s = [];
              ++r < n;

            ) {
              var o = e[r];
              t(o, r, e) && (s[i++] = o);
            }
            return s;
          }
          function Nt(e, t) {
            return !(null == e || !e.length) && $t(e, t, 0) > -1;
          }
          function Rt(e, t, r) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
              if (r(t, e[n])) return !0;
            return !1;
          }
          function Ct(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = Array(n);
              ++r < n;

            )
              i[r] = t(e[r], r, e);
            return i;
          }
          function xt(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
            return e;
          }
          function Tt(e, t, r, n) {
            var i = -1,
              s = null == e ? 0 : e.length;
            for (n && s && (r = e[++i]); ++i < s; ) r = t(r, e[i], i, e);
            return r;
          }
          function At(e, t, r, n) {
            var i = null == e ? 0 : e.length;
            for (n && i && (r = e[--i]); i--; ) r = t(r, e[i], i, e);
            return r;
          }
          function jt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e)) return !0;
            return !1;
          }
          var Dt = zt("length");
          function Ut(e, t, r) {
            var n;
            return (
              r(e, function (e, r, i) {
                if (t(e, r, i)) return (n = r), !1;
              }),
              n
            );
          }
          function kt(e, t, r, n) {
            for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function $t(e, t, r) {
            return t == t
              ? (function (e, t, r) {
                  for (var n = r - 1, i = e.length; ++n < i; )
                    if (e[n] === t) return n;
                  return -1;
                })(e, t, r)
              : kt(e, Lt, r);
          }
          function qt(e, t, r, n) {
            for (var i = r - 1, s = e.length; ++i < s; )
              if (n(e[i], t)) return i;
            return -1;
          }
          function Lt(e) {
            return e != e;
          }
          function Mt(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? Wt(e, t) / r : h;
          }
          function zt(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function Vt(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function Kt(e, t, r, n, i) {
            return (
              i(e, function (e, i, s) {
                r = n ? ((n = !1), e) : t(r, e, i, s);
              }),
              r
            );
          }
          function Wt(e, t) {
            for (var n, i = -1, s = e.length; ++i < s; ) {
              var o = t(e[i]);
              o !== r && (n = n === r ? o : n + o);
            }
            return n;
          }
          function Ft(e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
          }
          function Ht(e) {
            return e && e.slice(0, cr(e) + 1).replace(te, "");
          }
          function Bt(e) {
            return function (t) {
              return e(t);
            };
          }
          function Jt(e, t) {
            return Ct(t, function (t) {
              return e[t];
            });
          }
          function Gt(e, t) {
            return e.has(t);
          }
          function Qt(e, t) {
            for (var r = -1, n = e.length; ++r < n && $t(t, e[r], 0) > -1; );
            return r;
          }
          function Yt(e, t) {
            for (var r = e.length; r-- && $t(t, e[r], 0) > -1; );
            return r;
          }
          var Zt = Vt({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            Xt = Vt({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function er(e) {
            return "\\" + it[e];
          }
          function tr(e) {
            return Ze.test(e);
          }
          function rr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, n) {
                r[++t] = [n, e];
              }),
              r
            );
          }
          function nr(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function ir(e, t) {
            for (var r = -1, n = e.length, i = 0, o = []; ++r < n; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[i++] = r));
            }
            return o;
          }
          function sr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function or(e) {
            return tr(e)
              ? (function (e) {
                  for (var t = (Qe.lastIndex = 0); Qe.test(e); ) ++t;
                  return t;
                })(e)
              : Dt(e);
          }
          function ar(e) {
            return tr(e)
              ? (function (e) {
                  return e.match(Qe) || [];
                })(e)
              : (function (e) {
                  return e.split("");
                })(e);
          }
          function cr(e) {
            for (var t = e.length; t-- && re.test(e.charAt(t)); );
            return t;
          }
          var ur = Vt({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            hr = (function e(t) {
              var re = (t =
                  null == t ? ut : hr.defaults(ut.Object(), t, hr.pick(ut, et)))
                  .Array,
                we = t.Date,
                be = t.Error,
                _e = t.Function,
                Ee = t.Math,
                Ie = t.Object,
                Se = t.RegExp,
                Pe = t.String,
                Oe = t.TypeError,
                Ne = re.prototype,
                Re = _e.prototype,
                Ce = Ie.prototype,
                xe = t["__core-js_shared__"],
                Te = Re.toString,
                Ae = Ce.hasOwnProperty,
                je = 0,
                De = (function () {
                  var e = /[^.]+$/.exec(
                    (xe && xe.keys && xe.keys.IE_PROTO) || "",
                  );
                  return e ? "Symbol(src)_1." + e : "";
                })(),
                Ue = Ce.toString,
                ke = Te.call(Ie),
                $e = ut._,
                qe = Se(
                  "^" +
                    Te.call(Ae)
                      .replace(X, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?",
                      ) +
                    "$",
                ),
                Le = pt ? t.Buffer : r,
                Me = t.Symbol,
                ze = t.Uint8Array,
                Ve = Le ? Le.allocUnsafe : r,
                Ke = nr(Ie.getPrototypeOf, Ie),
                We = Ie.create,
                Fe = Ce.propertyIsEnumerable,
                He = Ne.splice,
                Be = Me ? Me.isConcatSpreadable : r,
                Qe = Me ? Me.iterator : r,
                Ze = Me ? Me.toStringTag : r,
                it = (function () {
                  try {
                    var e = os(Ie, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                at = t.clearTimeout !== ut.clearTimeout && t.clearTimeout,
                ct = we && we.now !== ut.Date.now && we.now,
                ht = t.setTimeout !== ut.setTimeout && t.setTimeout,
                lt = Ee.ceil,
                dt = Ee.floor,
                ft = Ie.getOwnPropertySymbols,
                Dt = Le ? Le.isBuffer : r,
                Vt = t.isFinite,
                lr = Ne.join,
                pr = nr(Ie.keys, Ie),
                dr = Ee.max,
                fr = Ee.min,
                gr = we.now,
                yr = t.parseInt,
                mr = Ee.random,
                vr = Ne.reverse,
                wr = os(t, "DataView"),
                br = os(t, "Map"),
                _r = os(t, "Promise"),
                Er = os(t, "Set"),
                Ir = os(t, "WeakMap"),
                Sr = os(Ie, "create"),
                Pr = Ir && new Ir(),
                Or = {},
                Nr = Ds(wr),
                Rr = Ds(br),
                Cr = Ds(_r),
                xr = Ds(Er),
                Tr = Ds(Ir),
                Ar = Me ? Me.prototype : r,
                jr = Ar ? Ar.valueOf : r,
                Dr = Ar ? Ar.toString : r;
              function Ur(e) {
                if (Zo(e) && !zo(e) && !(e instanceof Lr)) {
                  if (e instanceof qr) return e;
                  if (Ae.call(e, "__wrapped__")) return Us(e);
                }
                return new qr(e);
              }
              var kr = (function () {
                function e() {}
                return function (t) {
                  if (!Yo(t)) return {};
                  if (We) return We(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = r), n;
                };
              })();
              function $r() {}
              function qr(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = r);
              }
              function Lr(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = l),
                  (this.__views__ = []);
              }
              function Mr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function zr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function Vr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function Kr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new Vr(); ++t < r; ) this.add(e[t]);
              }
              function Wr(e) {
                var t = (this.__data__ = new zr(e));
                this.size = t.size;
              }
              function Fr(e, t) {
                var r = zo(e),
                  n = !r && Mo(e),
                  i = !r && !n && Fo(e),
                  s = !r && !n && !i && oa(e),
                  o = r || n || i || s,
                  a = o ? Ft(e.length, Pe) : [],
                  c = a.length;
                for (var u in e)
                  (t || Ae.call(e, u)) &&
                    (!o ||
                      !(
                        "length" == u ||
                        (i && ("offset" == u || "parent" == u)) ||
                        (s &&
                          ("buffer" == u ||
                            "byteLength" == u ||
                            "byteOffset" == u)) ||
                        ds(u, c)
                      )) &&
                    a.push(u);
                return a;
              }
              function Hr(e) {
                var t = e.length;
                return t ? e[Kn(0, t - 1)] : r;
              }
              function Br(e, t) {
                return Cs(Si(e), rn(t, 0, e.length));
              }
              function Jr(e) {
                return Cs(Si(e));
              }
              function Gr(e, t, n) {
                ((n !== r && !$o(e[t], n)) || (n === r && !(t in e))) &&
                  en(e, t, n);
              }
              function Qr(e, t, n) {
                var i = e[t];
                (!Ae.call(e, t) || !$o(i, n) || (n === r && !(t in e))) &&
                  en(e, t, n);
              }
              function Yr(e, t) {
                for (var r = e.length; r--; ) if ($o(e[r][0], t)) return r;
                return -1;
              }
              function Zr(e, t, r, n) {
                return (
                  cn(e, function (e, i, s) {
                    t(n, e, r(e), s);
                  }),
                  n
                );
              }
              function Xr(e, t) {
                return e && Pi(t, Ra(t), e);
              }
              function en(e, t, r) {
                "__proto__" == t && it
                  ? it(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                    })
                  : (e[t] = r);
              }
              function tn(e, t) {
                for (
                  var n = -1, i = t.length, s = re(i), o = null == e;
                  ++n < i;

                )
                  s[n] = o ? r : Ia(e, t[n]);
                return s;
              }
              function rn(e, t, n) {
                return (
                  e == e &&
                    (n !== r && (e = e <= n ? e : n),
                    t !== r && (e = e >= t ? e : t)),
                  e
                );
              }
              function nn(e, t, n, i, s, o) {
                var a,
                  c = 1 & t,
                  u = 2 & t,
                  h = 4 & t;
                if ((n && (a = s ? n(e, i, s, o) : n(e)), a !== r)) return a;
                if (!Yo(e)) return e;
                var l = zo(e);
                if (l) {
                  if (
                    ((a = (function (e) {
                      var t = e.length,
                        r = new e.constructor(t);
                      return (
                        t &&
                          "string" == typeof e[0] &&
                          Ae.call(e, "index") &&
                          ((r.index = e.index), (r.input = e.input)),
                        r
                      );
                    })(e)),
                    !c)
                  )
                    return Si(e, a);
                } else {
                  var p = us(e),
                    f = p == v || p == w;
                  if (Fo(e)) return vi(e, c);
                  if (p == E || p == d || (f && !s)) {
                    if (((a = u || f ? {} : ls(e)), !c))
                      return u
                        ? (function (e, t) {
                            return Pi(e, cs(e), t);
                          })(
                            e,
                            (function (e, t) {
                              return e && Pi(t, Ca(t), e);
                            })(a, e),
                          )
                        : (function (e, t) {
                            return Pi(e, as(e), t);
                          })(e, Xr(a, e));
                  } else {
                    if (!nt[p]) return s ? e : {};
                    a = (function (e, t, r) {
                      var n = e.constructor;
                      switch (t) {
                        case C:
                          return wi(e);
                        case g:
                        case y:
                          return new n(+e);
                        case x:
                          return (function (e, t) {
                            var r = t ? wi(e.buffer) : e.buffer;
                            return new e.constructor(
                              r,
                              e.byteOffset,
                              e.byteLength,
                            );
                          })(e, r);
                        case T:
                        case A:
                        case j:
                        case D:
                        case U:
                        case k:
                        case $:
                        case q:
                        case L:
                          return bi(e, r);
                        case b:
                          return new n();
                        case _:
                        case O:
                          return new n(e);
                        case S:
                          return (function (e) {
                            var t = new e.constructor(e.source, he.exec(e));
                            return (t.lastIndex = e.lastIndex), t;
                          })(e);
                        case P:
                          return new n();
                        case N:
                          return (function (e) {
                            return jr ? Ie(jr.call(e)) : {};
                          })(e);
                      }
                    })(e, p, c);
                  }
                }
                o || (o = new Wr());
                var m = o.get(e);
                if (m) return m;
                o.set(e, a),
                  na(e)
                    ? e.forEach(function (r) {
                        a.add(nn(r, t, n, r, e, o));
                      })
                    : Xo(e) &&
                      e.forEach(function (r, i) {
                        a.set(i, nn(r, t, n, i, e, o));
                      });
                var I = l ? r : (h ? (u ? Xi : Zi) : u ? Ca : Ra)(e);
                return (
                  It(I || e, function (r, i) {
                    I && (r = e[(i = r)]), Qr(a, i, nn(r, t, n, i, e, o));
                  }),
                  a
                );
              }
              function sn(e, t, n) {
                var i = n.length;
                if (null == e) return !i;
                for (e = Ie(e); i--; ) {
                  var s = n[i],
                    o = t[s],
                    a = e[s];
                  if ((a === r && !(s in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function on(e, t, i) {
                if ("function" != typeof e) throw new Oe(n);
                return Ps(function () {
                  e.apply(r, i);
                }, t);
              }
              function an(e, t, r, n) {
                var i = -1,
                  s = Nt,
                  o = !0,
                  a = e.length,
                  c = [],
                  u = t.length;
                if (!a) return c;
                r && (t = Ct(t, Bt(r))),
                  n
                    ? ((s = Rt), (o = !1))
                    : t.length >= 200 && ((s = Gt), (o = !1), (t = new Kr(t)));
                e: for (; ++i < a; ) {
                  var h = e[i],
                    l = null == r ? h : r(h);
                  if (((h = n || 0 !== h ? h : 0), o && l == l)) {
                    for (var p = u; p--; ) if (t[p] === l) continue e;
                    c.push(h);
                  } else s(t, l, n) || c.push(h);
                }
                return c;
              }
              (Ur.templateSettings = {
                escape: B,
                evaluate: J,
                interpolate: G,
                variable: "",
                imports: { _: Ur },
              }),
                (Ur.prototype = $r.prototype),
                (Ur.prototype.constructor = Ur),
                (qr.prototype = kr($r.prototype)),
                (qr.prototype.constructor = qr),
                (Lr.prototype = kr($r.prototype)),
                (Lr.prototype.constructor = Lr),
                (Mr.prototype.clear = function () {
                  (this.__data__ = Sr ? Sr(null) : {}), (this.size = 0);
                }),
                (Mr.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (Mr.prototype.get = function (e) {
                  var t = this.__data__;
                  if (Sr) {
                    var n = t[e];
                    return n === i ? r : n;
                  }
                  return Ae.call(t, e) ? t[e] : r;
                }),
                (Mr.prototype.has = function (e) {
                  var t = this.__data__;
                  return Sr ? t[e] !== r : Ae.call(t, e);
                }),
                (Mr.prototype.set = function (e, t) {
                  var n = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (n[e] = Sr && t === r ? i : t),
                    this
                  );
                }),
                (zr.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (zr.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = Yr(t, e);
                  return !(
                    r < 0 ||
                    (r == t.length - 1 ? t.pop() : He.call(t, r, 1),
                    --this.size,
                    0)
                  );
                }),
                (zr.prototype.get = function (e) {
                  var t = this.__data__,
                    n = Yr(t, e);
                  return n < 0 ? r : t[n][1];
                }),
                (zr.prototype.has = function (e) {
                  return Yr(this.__data__, e) > -1;
                }),
                (zr.prototype.set = function (e, t) {
                  var r = this.__data__,
                    n = Yr(r, e);
                  return (
                    n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
                  );
                }),
                (Vr.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new Mr(),
                      map: new (br || zr)(),
                      string: new Mr(),
                    });
                }),
                (Vr.prototype.delete = function (e) {
                  var t = is(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (Vr.prototype.get = function (e) {
                  return is(this, e).get(e);
                }),
                (Vr.prototype.has = function (e) {
                  return is(this, e).has(e);
                }),
                (Vr.prototype.set = function (e, t) {
                  var r = is(this, e),
                    n = r.size;
                  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
                }),
                (Kr.prototype.add = Kr.prototype.push =
                  function (e) {
                    return this.__data__.set(e, i), this;
                  }),
                (Kr.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Wr.prototype.clear = function () {
                  (this.__data__ = new zr()), (this.size = 0);
                }),
                (Wr.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (Wr.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (Wr.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Wr.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof zr) {
                    var n = r.__data__;
                    if (!br || n.length < 199)
                      return n.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new Vr(n);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var cn = Ri(yn),
                un = Ri(mn, !0);
              function hn(e, t) {
                var r = !0;
                return (
                  cn(e, function (e, n, i) {
                    return (r = !!t(e, n, i));
                  }),
                  r
                );
              }
              function ln(e, t, n) {
                for (var i = -1, s = e.length; ++i < s; ) {
                  var o = e[i],
                    a = t(o);
                  if (null != a && (c === r ? a == a && !sa(a) : n(a, c)))
                    var c = a,
                      u = o;
                }
                return u;
              }
              function pn(e, t) {
                var r = [];
                return (
                  cn(e, function (e, n, i) {
                    t(e, n, i) && r.push(e);
                  }),
                  r
                );
              }
              function dn(e, t, r, n, i) {
                var s = -1,
                  o = e.length;
                for (r || (r = ps), i || (i = []); ++s < o; ) {
                  var a = e[s];
                  t > 0 && r(a)
                    ? t > 1
                      ? dn(a, t - 1, r, n, i)
                      : xt(i, a)
                    : n || (i[i.length] = a);
                }
                return i;
              }
              var fn = Ci(),
                gn = Ci(!0);
              function yn(e, t) {
                return e && fn(e, t, Ra);
              }
              function mn(e, t) {
                return e && gn(e, t, Ra);
              }
              function vn(e, t) {
                return Ot(t, function (t) {
                  return Jo(e[t]);
                });
              }
              function wn(e, t) {
                for (var n = 0, i = (t = fi(t, e)).length; null != e && n < i; )
                  e = e[js(t[n++])];
                return n && n == i ? e : r;
              }
              function bn(e, t, r) {
                var n = t(e);
                return zo(e) ? n : xt(n, r(e));
              }
              function _n(e) {
                return null == e
                  ? e === r
                    ? "[object Undefined]"
                    : "[object Null]"
                  : Ze && Ze in Ie(e)
                    ? (function (e) {
                        var t = Ae.call(e, Ze),
                          n = e[Ze];
                        try {
                          e[Ze] = r;
                          var i = !0;
                        } catch {}
                        var s = Ue.call(e);
                        return i && (t ? (e[Ze] = n) : delete e[Ze]), s;
                      })(e)
                    : (function (e) {
                        return Ue.call(e);
                      })(e);
              }
              function En(e, t) {
                return e > t;
              }
              function In(e, t) {
                return null != e && Ae.call(e, t);
              }
              function Sn(e, t) {
                return null != e && t in Ie(e);
              }
              function Pn(e, t, n) {
                for (
                  var i = n ? Rt : Nt,
                    s = e[0].length,
                    o = e.length,
                    a = o,
                    c = re(o),
                    u = 1 / 0,
                    h = [];
                  a--;

                ) {
                  var l = e[a];
                  a && t && (l = Ct(l, Bt(t))),
                    (u = fr(l.length, u)),
                    (c[a] =
                      !n && (t || (s >= 120 && l.length >= 120))
                        ? new Kr(a && l)
                        : r);
                }
                l = e[0];
                var p = -1,
                  d = c[0];
                e: for (; ++p < s && h.length < u; ) {
                  var f = l[p],
                    g = t ? t(f) : f;
                  if (
                    ((f = n || 0 !== f ? f : 0), !(d ? Gt(d, g) : i(h, g, n)))
                  ) {
                    for (a = o; --a; ) {
                      var y = c[a];
                      if (!(y ? Gt(y, g) : i(e[a], g, n))) continue e;
                    }
                    d && d.push(g), h.push(f);
                  }
                }
                return h;
              }
              function On(e, t, n) {
                var i = null == (e = Es(e, (t = fi(t, e)))) ? e : e[js(Hs(t))];
                return null == i ? r : _t(i, e, n);
              }
              function Nn(e) {
                return Zo(e) && _n(e) == d;
              }
              function Rn(e, t, n, i, s) {
                return (
                  e === t ||
                  (null == e || null == t || (!Zo(e) && !Zo(t))
                    ? e != e && t != t
                    : (function (e, t, n, i, s, o) {
                        var a = zo(e),
                          c = zo(t),
                          u = a ? f : us(e),
                          h = c ? f : us(t),
                          l = (u = u == d ? E : u) == E,
                          p = (h = h == d ? E : h) == E,
                          v = u == h;
                        if (v && Fo(e)) {
                          if (!Fo(t)) return !1;
                          (a = !0), (l = !1);
                        }
                        if (v && !l)
                          return (
                            o || (o = new Wr()),
                            a || oa(e)
                              ? Qi(e, t, n, i, s, o)
                              : (function (e, t, r, n, i, s, o) {
                                  switch (r) {
                                    case x:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (t = t.buffer);
                                    case C:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !s(new ze(e), new ze(t))
                                      );
                                    case g:
                                    case y:
                                    case _:
                                      return $o(+e, +t);
                                    case m:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case S:
                                    case O:
                                      return e == t + "";
                                    case b:
                                      var a = rr;
                                    case P:
                                      var c = 1 & n;
                                      if (
                                        (a || (a = sr), e.size != t.size && !c)
                                      )
                                        return !1;
                                      var u = o.get(e);
                                      if (u) return u == t;
                                      (n |= 2), o.set(e, t);
                                      var h = Qi(a(e), a(t), n, i, s, o);
                                      return o.delete(e), h;
                                    case N:
                                      if (jr) return jr.call(e) == jr.call(t);
                                  }
                                  return !1;
                                })(e, t, u, n, i, s, o)
                          );
                        if (!(1 & n)) {
                          var w = l && Ae.call(e, "__wrapped__"),
                            I = p && Ae.call(t, "__wrapped__");
                          if (w || I) {
                            var R = w ? e.value() : e,
                              T = I ? t.value() : t;
                            return o || (o = new Wr()), s(R, T, n, i, o);
                          }
                        }
                        return (
                          !!v &&
                          (o || (o = new Wr()),
                          (function (e, t, n, i, s, o) {
                            var a = 1 & n,
                              c = Zi(e),
                              u = c.length;
                            if (u != Zi(t).length && !a) return !1;
                            for (var h = u; h--; ) {
                              var l = c[h];
                              if (!(a ? l in t : Ae.call(t, l))) return !1;
                            }
                            var p = o.get(e),
                              d = o.get(t);
                            if (p && d) return p == t && d == e;
                            var f = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++h < u; ) {
                              var y = e[(l = c[h])],
                                m = t[l];
                              if (i)
                                var v = a
                                  ? i(m, y, l, t, e, o)
                                  : i(y, m, l, e, t, o);
                              if (
                                !(v === r ? y === m || s(y, m, n, i, o) : v)
                              ) {
                                f = !1;
                                break;
                              }
                              g || (g = "constructor" == l);
                            }
                            if (f && !g) {
                              var w = e.constructor,
                                b = t.constructor;
                              w != b &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof b &&
                                  b instanceof b
                                ) &&
                                (f = !1);
                            }
                            return o.delete(e), o.delete(t), f;
                          })(e, t, n, i, s, o))
                        );
                      })(e, t, n, i, Rn, s))
                );
              }
              function Cn(e, t, n, i) {
                var s = n.length,
                  o = s,
                  a = !i;
                if (null == e) return !o;
                for (e = Ie(e); s--; ) {
                  var c = n[s];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++s < o; ) {
                  var u = (c = n[s])[0],
                    h = e[u],
                    l = c[1];
                  if (a && c[2]) {
                    if (h === r && !(u in e)) return !1;
                  } else {
                    var p = new Wr();
                    if (i) var d = i(h, l, u, e, t, p);
                    if (!(d === r ? Rn(l, h, 3, i, p) : d)) return !1;
                  }
                }
                return !0;
              }
              function xn(e) {
                return (
                  !(
                    !Yo(e) ||
                    (function (e) {
                      return !!De && De in e;
                    })(e)
                  ) && (Jo(e) ? qe : de).test(Ds(e))
                );
              }
              function Tn(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                    ? ec
                    : "object" == typeof e
                      ? zo(e)
                        ? kn(e[0], e[1])
                        : Un(e)
                      : uc(e);
              }
              function An(e) {
                if (!vs(e)) return pr(e);
                var t = [];
                for (var r in Ie(e))
                  Ae.call(e, r) && "constructor" != r && t.push(r);
                return t;
              }
              function jn(e, t) {
                return e < t;
              }
              function Dn(e, t) {
                var r = -1,
                  n = Ko(e) ? re(e.length) : [];
                return (
                  cn(e, function (e, i, s) {
                    n[++r] = t(e, i, s);
                  }),
                  n
                );
              }
              function Un(e) {
                var t = ss(e);
                return 1 == t.length && t[0][2]
                  ? bs(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || Cn(r, e, t);
                    };
              }
              function kn(e, t) {
                return gs(e) && ws(t)
                  ? bs(js(e), t)
                  : function (n) {
                      var i = Ia(n, e);
                      return i === r && i === t ? Sa(n, e) : Rn(t, i, 3);
                    };
              }
              function $n(e, t, n, i, s) {
                e !== t &&
                  fn(
                    t,
                    function (o, a) {
                      if ((s || (s = new Wr()), Yo(o)))
                        !(function (e, t, n, i, s, o, a) {
                          var c = Is(e, n),
                            u = Is(t, n),
                            h = a.get(u);
                          if (h) Gr(e, n, h);
                          else {
                            var l = o ? o(c, u, n + "", e, t, a) : r,
                              p = l === r;
                            if (p) {
                              var d = zo(u),
                                f = !d && Fo(u),
                                g = !d && !f && oa(u);
                              (l = u),
                                d || f || g
                                  ? zo(c)
                                    ? (l = c)
                                    : Wo(c)
                                      ? (l = Si(c))
                                      : f
                                        ? ((p = !1), (l = vi(u, !0)))
                                        : g
                                          ? ((p = !1), (l = bi(u, !0)))
                                          : (l = [])
                                  : ta(u) || Mo(u)
                                    ? ((l = c),
                                      Mo(c)
                                        ? (l = fa(c))
                                        : (!Yo(c) || Jo(c)) && (l = ls(u)))
                                    : (p = !1);
                            }
                            p && (a.set(u, l), s(l, u, i, o, a), a.delete(u)),
                              Gr(e, n, l);
                          }
                        })(e, t, a, n, $n, i, s);
                      else {
                        var c = i ? i(Is(e, a), o, a + "", e, t, s) : r;
                        c === r && (c = o), Gr(e, a, c);
                      }
                    },
                    Ca,
                  );
              }
              function qn(e, t) {
                var n = e.length;
                if (n) return ds((t += t < 0 ? n : 0), n) ? e[t] : r;
              }
              function Ln(e, t, r) {
                t = t.length
                  ? Ct(t, function (e) {
                      return zo(e)
                        ? function (t) {
                            return wn(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [ec];
                var n = -1;
                return (
                  (t = Ct(t, Bt(ns()))),
                  (function (e, t) {
                    var n = e.length;
                    for (
                      e.sort(function (e, t) {
                        return (function (e, t, r) {
                          for (
                            var n = -1,
                              i = e.criteria,
                              s = t.criteria,
                              o = i.length,
                              a = r.length;
                            ++n < o;

                          ) {
                            var c = _i(i[n], s[n]);
                            if (c)
                              return n >= a ? c : c * ("desc" == r[n] ? -1 : 1);
                          }
                          return e.index - t.index;
                        })(e, t, r);
                      });
                      n--;

                    )
                      e[n] = e[n].value;
                    return e;
                  })(
                    Dn(e, function (e, r, i) {
                      return {
                        criteria: Ct(t, function (t) {
                          return t(e);
                        }),
                        index: ++n,
                        value: e,
                      };
                    }),
                  )
                );
              }
              function Mn(e, t, r) {
                for (var n = -1, i = t.length, s = {}; ++n < i; ) {
                  var o = t[n],
                    a = wn(e, o);
                  r(a, o) && Jn(s, fi(o, e), a);
                }
                return s;
              }
              function zn(e, t, r, n) {
                var i = n ? qt : $t,
                  s = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = Si(t)), r && (a = Ct(e, Bt(r))); ++s < o; )
                  for (
                    var c = 0, u = t[s], h = r ? r(u) : u;
                    (c = i(a, h, c, n)) > -1;

                  )
                    a !== e && He.call(a, c, 1), He.call(e, c, 1);
                return e;
              }
              function Vn(e, t) {
                for (var r = e ? t.length : 0, n = r - 1; r--; ) {
                  var i = t[r];
                  if (r == n || i !== s) {
                    var s = i;
                    ds(i) ? He.call(e, i, 1) : oi(e, i);
                  }
                }
                return e;
              }
              function Kn(e, t) {
                return e + dt(mr() * (t - e + 1));
              }
              function Wn(e, t) {
                var r = "";
                if (!e || t < 1 || t > u) return r;
                do {
                  t % 2 && (r += e), (t = dt(t / 2)) && (e += e);
                } while (t);
                return r;
              }
              function Fn(e, t) {
                return Os(_s(e, t, ec), e + "");
              }
              function Hn(e) {
                return Hr($a(e));
              }
              function Bn(e, t) {
                var r = $a(e);
                return Cs(r, rn(t, 0, r.length));
              }
              function Jn(e, t, n, i) {
                if (!Yo(e)) return e;
                for (
                  var s = -1, o = (t = fi(t, e)).length, a = o - 1, c = e;
                  null != c && ++s < o;

                ) {
                  var u = js(t[s]),
                    h = n;
                  if (
                    "__proto__" === u ||
                    "constructor" === u ||
                    "prototype" === u
                  )
                    return e;
                  if (s != a) {
                    var l = c[u];
                    (h = i ? i(l, u, c) : r) === r &&
                      (h = Yo(l) ? l : ds(t[s + 1]) ? [] : {});
                  }
                  Qr(c, u, h), (c = c[u]);
                }
                return e;
              }
              var Gn = Pr
                  ? function (e, t) {
                      return Pr.set(e, t), e;
                    }
                  : ec,
                Qn = it
                  ? function (e, t) {
                      return it(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Ya(t),
                        writable: !0,
                      });
                    }
                  : ec;
              function Yn(e) {
                return Cs($a(e));
              }
              function Zn(e, t, r) {
                var n = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (r = r > i ? i : r) < 0 && (r += i),
                  (i = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                for (var s = re(i); ++n < i; ) s[n] = e[n + t];
                return s;
              }
              function Xn(e, t) {
                var r;
                return (
                  cn(e, function (e, n, i) {
                    return !(r = t(e, n, i));
                  }),
                  !!r
                );
              }
              function ei(e, t, r) {
                var n = 0,
                  i = null == e ? n : e.length;
                if ("number" == typeof t && t == t && i <= 2147483647) {
                  for (; n < i; ) {
                    var s = (n + i) >>> 1,
                      o = e[s];
                    null !== o && !sa(o) && (r ? o <= t : o < t)
                      ? (n = s + 1)
                      : (i = s);
                  }
                  return i;
                }
                return ti(e, t, ec, r);
              }
              function ti(e, t, n, i) {
                var s = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                for (
                  var a = (t = n(t)) != t,
                    c = null === t,
                    u = sa(t),
                    h = t === r;
                  s < o;

                ) {
                  var l = dt((s + o) / 2),
                    p = n(e[l]),
                    d = p !== r,
                    f = null === p,
                    g = p == p,
                    y = sa(p);
                  if (a) var m = i || g;
                  else
                    m = h
                      ? g && (i || d)
                      : c
                        ? g && d && (i || !f)
                        : u
                          ? g && d && !f && (i || !y)
                          : !f && !y && (i ? p <= t : p < t);
                  m ? (s = l + 1) : (o = l);
                }
                return fr(o, 4294967294);
              }
              function ri(e, t) {
                for (var r = -1, n = e.length, i = 0, s = []; ++r < n; ) {
                  var o = e[r],
                    a = t ? t(o) : o;
                  if (!r || !$o(a, c)) {
                    var c = a;
                    s[i++] = 0 === o ? 0 : o;
                  }
                }
                return s;
              }
              function ni(e) {
                return "number" == typeof e ? e : sa(e) ? h : +e;
              }
              function ii(e) {
                if ("string" == typeof e) return e;
                if (zo(e)) return Ct(e, ii) + "";
                if (sa(e)) return Dr ? Dr.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -c ? "-0" : t;
              }
              function si(e, t, r) {
                var n = -1,
                  i = Nt,
                  s = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (r) (o = !1), (i = Rt);
                else if (s >= 200) {
                  var u = t ? null : Wi(e);
                  if (u) return sr(u);
                  (o = !1), (i = Gt), (c = new Kr());
                } else c = t ? [] : a;
                e: for (; ++n < s; ) {
                  var h = e[n],
                    l = t ? t(h) : h;
                  if (((h = r || 0 !== h ? h : 0), o && l == l)) {
                    for (var p = c.length; p--; ) if (c[p] === l) continue e;
                    t && c.push(l), a.push(h);
                  } else i(c, l, r) || (c !== a && c.push(l), a.push(h));
                }
                return a;
              }
              function oi(e, t) {
                return (
                  null == (e = Es(e, (t = fi(t, e)))) || delete e[js(Hs(t))]
                );
              }
              function ai(e, t, r, n) {
                return Jn(e, t, r(wn(e, t)), n);
              }
              function ci(e, t, r, n) {
                for (
                  var i = e.length, s = n ? i : -1;
                  (n ? s-- : ++s < i) && t(e[s], s, e);

                );
                return r
                  ? Zn(e, n ? 0 : s, n ? s + 1 : i)
                  : Zn(e, n ? s + 1 : 0, n ? i : s);
              }
              function ui(e, t) {
                var r = e;
                return (
                  r instanceof Lr && (r = r.value()),
                  Tt(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, xt([e], t.args));
                    },
                    r,
                  )
                );
              }
              function hi(e, t, r) {
                var n = e.length;
                if (n < 2) return n ? si(e[0]) : [];
                for (var i = -1, s = re(n); ++i < n; )
                  for (var o = e[i], a = -1; ++a < n; )
                    a != i && (s[i] = an(s[i] || o, e[a], t, r));
                return si(dn(s, 1), t, r);
              }
              function li(e, t, n) {
                for (
                  var i = -1, s = e.length, o = t.length, a = {};
                  ++i < s;

                ) {
                  var c = i < o ? t[i] : r;
                  n(a, e[i], c);
                }
                return a;
              }
              function pi(e) {
                return Wo(e) ? e : [];
              }
              function di(e) {
                return "function" == typeof e ? e : ec;
              }
              function fi(e, t) {
                return zo(e) ? e : gs(e, t) ? [e] : As(ga(e));
              }
              var gi = Fn;
              function yi(e, t, n) {
                var i = e.length;
                return (n = n === r ? i : n), !t && n >= i ? e : Zn(e, t, n);
              }
              var mi =
                at ||
                function (e) {
                  return ut.clearTimeout(e);
                };
              function vi(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  n = Ve ? Ve(r) : new e.constructor(r);
                return e.copy(n), n;
              }
              function wi(e) {
                var t = new e.constructor(e.byteLength);
                return new ze(t).set(new ze(e)), t;
              }
              function bi(e, t) {
                var r = t ? wi(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function _i(e, t) {
                if (e !== t) {
                  var n = e !== r,
                    i = null === e,
                    s = e == e,
                    o = sa(e),
                    a = t !== r,
                    c = null === t,
                    u = t == t,
                    h = sa(t);
                  if (
                    (!c && !h && !o && e > t) ||
                    (o && a && u && !c && !h) ||
                    (i && a && u) ||
                    (!n && u) ||
                    !s
                  )
                    return 1;
                  if (
                    (!i && !o && !h && e < t) ||
                    (h && n && s && !i && !o) ||
                    (c && n && s) ||
                    (!a && s) ||
                    !u
                  )
                    return -1;
                }
                return 0;
              }
              function Ei(e, t, r, n) {
                for (
                  var i = -1,
                    s = e.length,
                    o = r.length,
                    a = -1,
                    c = t.length,
                    u = dr(s - o, 0),
                    h = re(c + u),
                    l = !n;
                  ++a < c;

                )
                  h[a] = t[a];
                for (; ++i < o; ) (l || i < s) && (h[r[i]] = e[i]);
                for (; u--; ) h[a++] = e[i++];
                return h;
              }
              function Ii(e, t, r, n) {
                for (
                  var i = -1,
                    s = e.length,
                    o = -1,
                    a = r.length,
                    c = -1,
                    u = t.length,
                    h = dr(s - a, 0),
                    l = re(h + u),
                    p = !n;
                  ++i < h;

                )
                  l[i] = e[i];
                for (var d = i; ++c < u; ) l[d + c] = t[c];
                for (; ++o < a; ) (p || i < s) && (l[d + r[o]] = e[i++]);
                return l;
              }
              function Si(e, t) {
                var r = -1,
                  n = e.length;
                for (t || (t = re(n)); ++r < n; ) t[r] = e[r];
                return t;
              }
              function Pi(e, t, n, i) {
                var s = !n;
                n || (n = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    u = i ? i(n[c], e[c], c, n, e) : r;
                  u === r && (u = e[c]), s ? en(n, c, u) : Qr(n, c, u);
                }
                return n;
              }
              function Oi(e, t) {
                return function (r, n) {
                  var i = zo(r) ? Et : Zr,
                    s = t ? t() : {};
                  return i(r, e, ns(n, 2), s);
                };
              }
              function Ni(e) {
                return Fn(function (t, n) {
                  var i = -1,
                    s = n.length,
                    o = s > 1 ? n[s - 1] : r,
                    a = s > 2 ? n[2] : r;
                  for (
                    o = e.length > 3 && "function" == typeof o ? (s--, o) : r,
                      a && fs(n[0], n[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                      t = Ie(t);
                    ++i < s;

                  ) {
                    var c = n[i];
                    c && e(t, c, i, o);
                  }
                  return t;
                });
              }
              function Ri(e, t) {
                return function (r, n) {
                  if (null == r) return r;
                  if (!Ko(r)) return e(r, n);
                  for (
                    var i = r.length, s = t ? i : -1, o = Ie(r);
                    (t ? s-- : ++s < i) && !1 !== n(o[s], s, o);

                  );
                  return r;
                };
              }
              function Ci(e) {
                return function (t, r, n) {
                  for (var i = -1, s = Ie(t), o = n(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++i];
                    if (!1 === r(s[c], c, s)) break;
                  }
                  return t;
                };
              }
              function xi(e) {
                return function (t) {
                  var n = tr((t = ga(t))) ? ar(t) : r,
                    i = n ? n[0] : t.charAt(0),
                    s = n ? yi(n, 1).join("") : t.slice(1);
                  return i[e]() + s;
                };
              }
              function Ti(e) {
                return function (t) {
                  return Tt(Ja(Ma(t).replace(Je, "")), e, "");
                };
              }
              function Ai(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = kr(e.prototype),
                    n = e.apply(r, t);
                  return Yo(n) ? n : r;
                };
              }
              function ji(e) {
                return function (t, n, i) {
                  var s = Ie(t);
                  if (!Ko(t)) {
                    var o = ns(n, 3);
                    (t = Ra(t)),
                      (n = function (e) {
                        return o(s[e], e, s);
                      });
                  }
                  var a = e(t, n, i);
                  return a > -1 ? s[o ? t[a] : a] : r;
                };
              }
              function Di(e) {
                return Yi(function (t) {
                  var i = t.length,
                    s = i,
                    o = qr.prototype.thru;
                  for (e && t.reverse(); s--; ) {
                    var a = t[s];
                    if ("function" != typeof a) throw new Oe(n);
                    if (o && !c && "wrapper" == ts(a)) var c = new qr([], !0);
                  }
                  for (s = c ? s : i; ++s < i; ) {
                    var u = ts((a = t[s])),
                      h = "wrapper" == u ? es(a) : r;
                    c =
                      h && ys(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                        ? c[ts(h[0])].apply(c, h[3])
                        : 1 == a.length && ys(a)
                          ? c[u]()
                          : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && zo(r)) return c.plant(r).value();
                    for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i; )
                      s = t[n].call(this, s);
                    return s;
                  };
                });
              }
              function Ui(e, t, n, i, s, o, c, u, h, l) {
                var p = t & a,
                  d = 1 & t,
                  f = 2 & t,
                  g = 24 & t,
                  y = 512 & t,
                  m = f ? r : Ai(e);
                return function a() {
                  for (var v = arguments.length, w = re(v), b = v; b--; )
                    w[b] = arguments[b];
                  if (g)
                    var _ = rs(a),
                      E = (function (e, t) {
                        for (var r = e.length, n = 0; r--; ) e[r] === t && ++n;
                        return n;
                      })(w, _);
                  if (
                    (i && (w = Ei(w, i, s, g)),
                    o && (w = Ii(w, o, c, g)),
                    (v -= E),
                    g && v < l)
                  ) {
                    var I = ir(w, _);
                    return Vi(e, t, Ui, a.placeholder, n, w, I, u, h, l - v);
                  }
                  var S = d ? n : this,
                    P = f ? S[e] : e;
                  return (
                    (v = w.length),
                    u
                      ? (w = (function (e, t) {
                          for (
                            var n = e.length, i = fr(t.length, n), s = Si(e);
                            i--;

                          ) {
                            var o = t[i];
                            e[i] = ds(o, n) ? s[o] : r;
                          }
                          return e;
                        })(w, u))
                      : y && v > 1 && w.reverse(),
                    p && h < v && (w.length = h),
                    this &&
                      this !== ut &&
                      this instanceof a &&
                      (P = m || Ai(P)),
                    P.apply(S, w)
                  );
                };
              }
              function ki(e, t) {
                return function (r, n) {
                  return (function (e, t, r, n) {
                    return (
                      yn(e, function (e, i, s) {
                        t(n, r(e), i, s);
                      }),
                      n
                    );
                  })(r, e, t(n), {});
                };
              }
              function $i(e, t) {
                return function (n, i) {
                  var s;
                  if (n === r && i === r) return t;
                  if ((n !== r && (s = n), i !== r)) {
                    if (s === r) return i;
                    "string" == typeof n || "string" == typeof i
                      ? ((n = ii(n)), (i = ii(i)))
                      : ((n = ni(n)), (i = ni(i))),
                      (s = e(n, i));
                  }
                  return s;
                };
              }
              function qi(e) {
                return Yi(function (t) {
                  return (
                    (t = Ct(t, Bt(ns()))),
                    Fn(function (r) {
                      var n = this;
                      return e(t, function (e) {
                        return _t(e, n, r);
                      });
                    })
                  );
                });
              }
              function Li(e, t) {
                var n = (t = t === r ? " " : ii(t)).length;
                if (n < 2) return n ? Wn(t, e) : t;
                var i = Wn(t, lt(e / or(t)));
                return tr(t) ? yi(ar(i), 0, e).join("") : i.slice(0, e);
              }
              function Mi(e) {
                return function (t, n, i) {
                  return (
                    i && "number" != typeof i && fs(t, n, i) && (n = i = r),
                    (t = ha(t)),
                    n === r ? ((n = t), (t = 0)) : (n = ha(n)),
                    (function (e, t, r, n) {
                      for (
                        var i = -1,
                          s = dr(lt((t - e) / (r || 1)), 0),
                          o = re(s);
                        s--;

                      )
                        (o[n ? s : ++i] = e), (e += r);
                      return o;
                    })(t, n, (i = i === r ? (t < n ? 1 : -1) : ha(i)), e)
                  );
                };
              }
              function zi(e) {
                return function (t, r) {
                  return (
                    ("string" == typeof t && "string" == typeof r) ||
                      ((t = da(t)), (r = da(r))),
                    e(t, r)
                  );
                };
              }
              function Vi(e, t, n, i, s, a, c, u, h, l) {
                var p = 8 & t;
                (t |= p ? o : 64), 4 & (t &= ~(p ? 64 : o)) || (t &= -4);
                var d = [
                    e,
                    t,
                    s,
                    p ? a : r,
                    p ? c : r,
                    p ? r : a,
                    p ? r : c,
                    u,
                    h,
                    l,
                  ],
                  f = n.apply(r, d);
                return ys(e) && Ss(f, d), (f.placeholder = i), Ns(f, e, t);
              }
              function Ki(e) {
                var t = Ee[e];
                return function (e, r) {
                  if (
                    ((e = da(e)), (r = null == r ? 0 : fr(la(r), 292)) && Vt(e))
                  ) {
                    var n = (ga(e) + "e").split("e");
                    return +(
                      (n = (ga(t(n[0] + "e" + (+n[1] + r))) + "e").split(
                        "e",
                      ))[0] +
                      "e" +
                      (+n[1] - r)
                    );
                  }
                  return t(e);
                };
              }
              var Wi =
                Er && 1 / sr(new Er([, -0]))[1] == c
                  ? function (e) {
                      return new Er(e);
                    }
                  : sc;
              function Fi(e) {
                return function (t) {
                  var r = us(t);
                  return r == b
                    ? rr(t)
                    : r == P
                      ? (function (e) {
                          var t = -1,
                            r = Array(e.size);
                          return (
                            e.forEach(function (e) {
                              r[++t] = [e, e];
                            }),
                            r
                          );
                        })(t)
                      : (function (e, t) {
                          return Ct(t, function (t) {
                            return [t, e[t]];
                          });
                        })(t, e(t));
                };
              }
              function Hi(e, t, i, c, u, h, l, p) {
                var d = 2 & t;
                if (!d && "function" != typeof e) throw new Oe(n);
                var f = c ? c.length : 0;
                if (
                  (f || ((t &= -97), (c = u = r)),
                  (l = l === r ? l : dr(la(l), 0)),
                  (p = p === r ? p : la(p)),
                  (f -= u ? u.length : 0),
                  64 & t)
                ) {
                  var g = c,
                    y = u;
                  c = u = r;
                }
                var m = d ? r : es(e),
                  v = [e, t, i, c, u, g, y, h, l, p];
                if (
                  (m &&
                    (function (e, t) {
                      var r = e[1],
                        n = t[1],
                        i = r | n,
                        o = i < 131,
                        c =
                          (n == a && 8 == r) ||
                          (n == a && 256 == r && e[7].length <= t[8]) ||
                          (384 == n && t[7].length <= t[8] && 8 == r);
                      if (!o && !c) return e;
                      1 & n && ((e[2] = t[2]), (i |= 1 & r ? 0 : 4));
                      var u = t[3];
                      if (u) {
                        var h = e[3];
                        (e[3] = h ? Ei(h, u, t[4]) : u),
                          (e[4] = h ? ir(e[3], s) : t[4]);
                      }
                      (u = t[5]) &&
                        ((h = e[5]),
                        (e[5] = h ? Ii(h, u, t[6]) : u),
                        (e[6] = h ? ir(e[5], s) : t[6])),
                        (u = t[7]) && (e[7] = u),
                        n & a && (e[8] = null == e[8] ? t[8] : fr(e[8], t[8])),
                        null == e[9] && (e[9] = t[9]),
                        (e[0] = t[0]),
                        (e[1] = i);
                    })(v, m),
                  (e = v[0]),
                  (t = v[1]),
                  (i = v[2]),
                  (c = v[3]),
                  (u = v[4]),
                  !(p = v[9] =
                    v[9] === r ? (d ? 0 : e.length) : dr(v[9] - f, 0)) &&
                    24 & t &&
                    (t &= -25),
                  t && 1 != t)
                )
                  w =
                    8 == t || 16 == t
                      ? (function (e, t, n) {
                          var i = Ai(e);
                          return function s() {
                            for (
                              var o = arguments.length,
                                a = re(o),
                                c = o,
                                u = rs(s);
                              c--;

                            )
                              a[c] = arguments[c];
                            var h =
                              o < 3 && a[0] !== u && a[o - 1] !== u
                                ? []
                                : ir(a, u);
                            return (o -= h.length) < n
                              ? Vi(
                                  e,
                                  t,
                                  Ui,
                                  s.placeholder,
                                  r,
                                  a,
                                  h,
                                  r,
                                  r,
                                  n - o,
                                )
                              : _t(
                                  this && this !== ut && this instanceof s
                                    ? i
                                    : e,
                                  this,
                                  a,
                                );
                          };
                        })(e, t, p)
                      : (t != o && 33 != t) || u.length
                        ? Ui.apply(r, v)
                        : (function (e, t, r, n) {
                            var i = 1 & t,
                              s = Ai(e);
                            return function t() {
                              for (
                                var o = -1,
                                  a = arguments.length,
                                  c = -1,
                                  u = n.length,
                                  h = re(u + a),
                                  l =
                                    this && this !== ut && this instanceof t
                                      ? s
                                      : e;
                                ++c < u;

                              )
                                h[c] = n[c];
                              for (; a--; ) h[c++] = arguments[++o];
                              return _t(l, i ? r : this, h);
                            };
                          })(e, t, i, c);
                else
                  var w = (function (e, t, r) {
                    var n = 1 & t,
                      i = Ai(e);
                    return function t() {
                      return (
                        this && this !== ut && this instanceof t ? i : e
                      ).apply(n ? r : this, arguments);
                    };
                  })(e, t, i);
                return Ns((m ? Gn : Ss)(w, v), e, t);
              }
              function Bi(e, t, n, i) {
                return e === r || ($o(e, Ce[n]) && !Ae.call(i, n)) ? t : e;
              }
              function Ji(e, t, n, i, s, o) {
                return (
                  Yo(e) &&
                    Yo(t) &&
                    (o.set(t, e), $n(e, t, r, Ji, o), o.delete(t)),
                  e
                );
              }
              function Gi(e) {
                return ta(e) ? r : e;
              }
              function Qi(e, t, n, i, s, o) {
                var a = 1 & n,
                  c = e.length,
                  u = t.length;
                if (c != u && !(a && u > c)) return !1;
                var h = o.get(e),
                  l = o.get(t);
                if (h && l) return h == t && l == e;
                var p = -1,
                  d = !0,
                  f = 2 & n ? new Kr() : r;
                for (o.set(e, t), o.set(t, e); ++p < c; ) {
                  var g = e[p],
                    y = t[p];
                  if (i) var m = a ? i(y, g, p, t, e, o) : i(g, y, p, e, t, o);
                  if (m !== r) {
                    if (m) continue;
                    d = !1;
                    break;
                  }
                  if (f) {
                    if (
                      !jt(t, function (e, t) {
                        if (!Gt(f, t) && (g === e || s(g, e, n, i, o)))
                          return f.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (g !== y && !s(g, y, n, i, o)) {
                    d = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), d;
              }
              function Yi(e) {
                return Os(_s(e, r, zs), e + "");
              }
              function Zi(e) {
                return bn(e, Ra, as);
              }
              function Xi(e) {
                return bn(e, Ca, cs);
              }
              var es = Pr
                ? function (e) {
                    return Pr.get(e);
                  }
                : sc;
              function ts(e) {
                for (
                  var t = e.name + "",
                    r = Or[t],
                    n = Ae.call(Or, t) ? r.length : 0;
                  n--;

                ) {
                  var i = r[n],
                    s = i.func;
                  if (null == s || s == e) return i.name;
                }
                return t;
              }
              function rs(e) {
                return (Ae.call(Ur, "placeholder") ? Ur : e).placeholder;
              }
              function ns() {
                var e = Ur.iteratee || tc;
                return (
                  (e = e === tc ? Tn : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function is(e, t) {
                var r = e.__data__;
                return (function (e) {
                  var t = typeof e;
                  return "string" == t ||
                    "number" == t ||
                    "symbol" == t ||
                    "boolean" == t
                    ? "__proto__" !== e
                    : null === e;
                })(t)
                  ? r["string" == typeof t ? "string" : "hash"]
                  : r.map;
              }
              function ss(e) {
                for (var t = Ra(e), r = t.length; r--; ) {
                  var n = t[r],
                    i = e[n];
                  t[r] = [n, i, ws(i)];
                }
                return t;
              }
              function os(e, t) {
                var n = (function (e, t) {
                  return null == e ? r : e[t];
                })(e, t);
                return xn(n) ? n : r;
              }
              var as = ft
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = Ie(e)),
                          Ot(ft(e), function (t) {
                            return Fe.call(e, t);
                          }));
                    }
                  : pc,
                cs = ft
                  ? function (e) {
                      for (var t = []; e; ) xt(t, as(e)), (e = Ke(e));
                      return t;
                    }
                  : pc,
                us = _n;
              function hs(e, t, r) {
                for (var n = -1, i = (t = fi(t, e)).length, s = !1; ++n < i; ) {
                  var o = js(t[n]);
                  if (!(s = null != e && r(e, o))) break;
                  e = e[o];
                }
                return s || ++n != i
                  ? s
                  : !!(i = null == e ? 0 : e.length) &&
                      Qo(i) &&
                      ds(o, i) &&
                      (zo(e) || Mo(e));
              }
              function ls(e) {
                return "function" != typeof e.constructor || vs(e)
                  ? {}
                  : kr(Ke(e));
              }
              function ps(e) {
                return zo(e) || Mo(e) || !!(Be && e && e[Be]);
              }
              function ds(e, t) {
                var r = typeof e;
                return (
                  !!(t = t ?? u) &&
                  ("number" == r || ("symbol" != r && ge.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function fs(e, t, r) {
                if (!Yo(r)) return !1;
                var n = typeof t;
                return (
                  !!("number" == n
                    ? Ko(r) && ds(t, r.length)
                    : "string" == n && t in r) && $o(r[t], e)
                );
              }
              function gs(e, t) {
                if (zo(e)) return !1;
                var r = typeof e;
                return (
                  !(
                    "number" != r &&
                    "symbol" != r &&
                    "boolean" != r &&
                    null != e &&
                    !sa(e)
                  ) ||
                  Y.test(e) ||
                  !Q.test(e) ||
                  (null != t && e in Ie(t))
                );
              }
              function ys(e) {
                var t = ts(e),
                  r = Ur[t];
                if ("function" != typeof r || !(t in Lr.prototype)) return !1;
                if (e === r) return !0;
                var n = es(r);
                return !!n && e === n[0];
              }
              ((wr && us(new wr(new ArrayBuffer(1))) != x) ||
                (br && us(new br()) != b) ||
                (_r && us(_r.resolve()) != I) ||
                (Er && us(new Er()) != P) ||
                (Ir && us(new Ir()) != R)) &&
                (us = function (e) {
                  var t = _n(e),
                    n = t == E ? e.constructor : r,
                    i = n ? Ds(n) : "";
                  if (i)
                    switch (i) {
                      case Nr:
                        return x;
                      case Rr:
                        return b;
                      case Cr:
                        return I;
                      case xr:
                        return P;
                      case Tr:
                        return R;
                    }
                  return t;
                });
              var ms = xe ? Jo : dc;
              function vs(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || Ce);
              }
              function ws(e) {
                return e == e && !Yo(e);
              }
              function bs(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== r || e in Ie(n));
                };
              }
              function _s(e, t, n) {
                return (
                  (t = dr(t === r ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        i = -1,
                        s = dr(r.length - t, 0),
                        o = re(s);
                      ++i < s;

                    )
                      o[i] = r[t + i];
                    i = -1;
                    for (var a = re(t + 1); ++i < t; ) a[i] = r[i];
                    return (a[t] = n(o)), _t(e, this, a);
                  }
                );
              }
              function Es(e, t) {
                return t.length < 2 ? e : wn(e, Zn(t, 0, -1));
              }
              function Is(e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var Ss = Rs(Gn),
                Ps =
                  ht ||
                  function (e, t) {
                    return ut.setTimeout(e, t);
                  },
                Os = Rs(Qn);
              function Ns(e, t, r) {
                var n = t + "";
                return Os(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var n = r - 1;
                    return (
                      (t[n] = (r > 1 ? "& " : "") + t[n]),
                      (t = t.join(r > 2 ? ", " : " ")),
                      e.replace(ne, "{\n/* [wrapped with " + t + "] */\n")
                    );
                  })(
                    n,
                    (function (e, t) {
                      return (
                        It(p, function (r) {
                          var n = "_." + r[0];
                          t & r[1] && !Nt(e, n) && e.push(n);
                        }),
                        e.sort()
                      );
                    })(
                      (function (e) {
                        var t = e.match(ie);
                        return t ? t[1].split(se) : [];
                      })(n),
                      r,
                    ),
                  ),
                );
              }
              function Rs(e) {
                var t = 0,
                  n = 0;
                return function () {
                  var i = gr(),
                    s = 16 - (i - n);
                  if (((n = i), s > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(r, arguments);
                };
              }
              function Cs(e, t) {
                var n = -1,
                  i = e.length,
                  s = i - 1;
                for (t = t === r ? i : t; ++n < t; ) {
                  var o = Kn(n, s),
                    a = e[o];
                  (e[o] = e[n]), (e[n] = a);
                }
                return (e.length = t), e;
              }
              var xs,
                Ts,
                As =
                  ((xs = To(
                    function (e) {
                      var t = [];
                      return (
                        46 === e.charCodeAt(0) && t.push(""),
                        e.replace(Z, function (e, r, n, i) {
                          t.push(n ? i.replace(ce, "$1") : r || e);
                        }),
                        t
                      );
                    },
                    function (e) {
                      return 500 === Ts.size && Ts.clear(), e;
                    },
                  )),
                  (Ts = xs.cache),
                  xs);
              function js(e) {
                if ("string" == typeof e || sa(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -c ? "-0" : t;
              }
              function Ds(e) {
                if (null != e) {
                  try {
                    return Te.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function Us(e) {
                if (e instanceof Lr) return e.clone();
                var t = new qr(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = Si(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var ks = Fn(function (e, t) {
                  return Wo(e) ? an(e, dn(t, 1, Wo, !0)) : [];
                }),
                $s = Fn(function (e, t) {
                  var n = Hs(t);
                  return (
                    Wo(n) && (n = r),
                    Wo(e) ? an(e, dn(t, 1, Wo, !0), ns(n, 2)) : []
                  );
                }),
                qs = Fn(function (e, t) {
                  var n = Hs(t);
                  return (
                    Wo(n) && (n = r), Wo(e) ? an(e, dn(t, 1, Wo, !0), r, n) : []
                  );
                });
              function Ls(e, t, r) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var i = null == r ? 0 : la(r);
                return i < 0 && (i = dr(n + i, 0)), kt(e, ns(t, 3), i);
              }
              function Ms(e, t, n) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var s = i - 1;
                return (
                  n !== r &&
                    ((s = la(n)), (s = n < 0 ? dr(i + s, 0) : fr(s, i - 1))),
                  kt(e, ns(t, 3), s, !0)
                );
              }
              function zs(e) {
                return null != e && e.length ? dn(e, 1) : [];
              }
              function Vs(e) {
                return e && e.length ? e[0] : r;
              }
              var Ks = Fn(function (e) {
                  var t = Ct(e, pi);
                  return t.length && t[0] === e[0] ? Pn(t) : [];
                }),
                Ws = Fn(function (e) {
                  var t = Hs(e),
                    n = Ct(e, pi);
                  return (
                    t === Hs(n) ? (t = r) : n.pop(),
                    n.length && n[0] === e[0] ? Pn(n, ns(t, 2)) : []
                  );
                }),
                Fs = Fn(function (e) {
                  var t = Hs(e),
                    n = Ct(e, pi);
                  return (
                    (t = "function" == typeof t ? t : r) && n.pop(),
                    n.length && n[0] === e[0] ? Pn(n, r, t) : []
                  );
                });
              function Hs(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : r;
              }
              var Bs = Fn(Js);
              function Js(e, t) {
                return e && e.length && t && t.length ? zn(e, t) : e;
              }
              var Gs = Yi(function (e, t) {
                var r = null == e ? 0 : e.length,
                  n = tn(e, t);
                return (
                  Vn(
                    e,
                    Ct(t, function (e) {
                      return ds(e, r) ? +e : e;
                    }).sort(_i),
                  ),
                  n
                );
              });
              function Qs(e) {
                return null == e ? e : vr.call(e);
              }
              var Ys = Fn(function (e) {
                  return si(dn(e, 1, Wo, !0));
                }),
                Zs = Fn(function (e) {
                  var t = Hs(e);
                  return Wo(t) && (t = r), si(dn(e, 1, Wo, !0), ns(t, 2));
                }),
                Xs = Fn(function (e) {
                  var t = Hs(e);
                  return (
                    (t = "function" == typeof t ? t : r),
                    si(dn(e, 1, Wo, !0), r, t)
                  );
                });
              function eo(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = Ot(e, function (e) {
                    if (Wo(e)) return (t = dr(e.length, t)), !0;
                  })),
                  Ft(t, function (t) {
                    return Ct(e, zt(t));
                  })
                );
              }
              function to(e, t) {
                if (!e || !e.length) return [];
                var n = eo(e);
                return null == t
                  ? n
                  : Ct(n, function (e) {
                      return _t(t, r, e);
                    });
              }
              var ro = Fn(function (e, t) {
                  return Wo(e) ? an(e, t) : [];
                }),
                no = Fn(function (e) {
                  return hi(Ot(e, Wo));
                }),
                io = Fn(function (e) {
                  var t = Hs(e);
                  return Wo(t) && (t = r), hi(Ot(e, Wo), ns(t, 2));
                }),
                so = Fn(function (e) {
                  var t = Hs(e);
                  return (
                    (t = "function" == typeof t ? t : r), hi(Ot(e, Wo), r, t)
                  );
                }),
                oo = Fn(eo),
                ao = Fn(function (e) {
                  var t = e.length,
                    n = t > 1 ? e[t - 1] : r;
                  return (
                    (n = "function" == typeof n ? (e.pop(), n) : r), to(e, n)
                  );
                });
              function co(e) {
                var t = Ur(e);
                return (t.__chain__ = !0), t;
              }
              function uo(e, t) {
                return t(e);
              }
              var ho = Yi(function (e) {
                  var t = e.length,
                    n = t ? e[0] : 0,
                    i = this.__wrapped__,
                    s = function (t) {
                      return tn(t, e);
                    };
                  return !(t > 1 || this.__actions__.length) &&
                    i instanceof Lr &&
                    ds(n)
                    ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                        func: uo,
                        args: [s],
                        thisArg: r,
                      }),
                      new qr(i, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(r), e;
                      }))
                    : this.thru(s);
                }),
                lo = Oi(function (e, t, r) {
                  Ae.call(e, r) ? ++e[r] : en(e, r, 1);
                }),
                po = ji(Ls),
                fo = ji(Ms);
              function go(e, t) {
                return (zo(e) ? It : cn)(e, ns(t, 3));
              }
              function yo(e, t) {
                return (zo(e) ? St : un)(e, ns(t, 3));
              }
              var mo = Oi(function (e, t, r) {
                  Ae.call(e, r) ? e[r].push(t) : en(e, r, [t]);
                }),
                vo = Fn(function (e, t, r) {
                  var n = -1,
                    i = "function" == typeof t,
                    s = Ko(e) ? re(e.length) : [];
                  return (
                    cn(e, function (e) {
                      s[++n] = i ? _t(t, e, r) : On(e, t, r);
                    }),
                    s
                  );
                }),
                wo = Oi(function (e, t, r) {
                  en(e, r, t);
                });
              function bo(e, t) {
                return (zo(e) ? Ct : Dn)(e, ns(t, 3));
              }
              var _o = Oi(
                  function (e, t, r) {
                    e[r ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  },
                ),
                Eo = Fn(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return (
                    r > 1 && fs(e, t[0], t[1])
                      ? (t = [])
                      : r > 2 && fs(t[0], t[1], t[2]) && (t = [t[0]]),
                    Ln(e, dn(t, 1), [])
                  );
                }),
                Io =
                  ct ||
                  function () {
                    return ut.Date.now();
                  };
              function So(e, t, n) {
                return (
                  (t = n ? r : t),
                  (t = e && null == t ? e.length : t),
                  Hi(e, a, r, r, r, r, t)
                );
              }
              function Po(e, t) {
                var i;
                if ("function" != typeof t) throw new Oe(n);
                return (
                  (e = la(e)),
                  function () {
                    return (
                      --e > 0 && (i = t.apply(this, arguments)),
                      e <= 1 && (t = r),
                      i
                    );
                  }
                );
              }
              var Oo = Fn(function (e, t, r) {
                  var n = 1;
                  if (r.length) {
                    var i = ir(r, rs(Oo));
                    n |= o;
                  }
                  return Hi(e, n, t, r, i);
                }),
                No = Fn(function (e, t, r) {
                  var n = 3;
                  if (r.length) {
                    var i = ir(r, rs(No));
                    n |= o;
                  }
                  return Hi(t, n, e, r, i);
                });
              function Ro(e, t, i) {
                var s,
                  o,
                  a,
                  c,
                  u,
                  h,
                  l = 0,
                  p = !1,
                  d = !1,
                  f = !0;
                if ("function" != typeof e) throw new Oe(n);
                function g(t) {
                  var n = s,
                    i = o;
                  return (s = o = r), (l = t), (c = e.apply(i, n));
                }
                function y(e) {
                  var n = e - h;
                  return h === r || n >= t || n < 0 || (d && e - l >= a);
                }
                function m() {
                  var e = Io();
                  if (y(e)) return v(e);
                  u = Ps(
                    m,
                    (function (e) {
                      var r = t - (e - h);
                      return d ? fr(r, a - (e - l)) : r;
                    })(e),
                  );
                }
                function v(e) {
                  return (u = r), f && s ? g(e) : ((s = o = r), c);
                }
                function w() {
                  var e = Io(),
                    n = y(e);
                  if (((s = arguments), (o = this), (h = e), n)) {
                    if (u === r)
                      return (function (e) {
                        return (l = e), (u = Ps(m, t)), p ? g(e) : c;
                      })(h);
                    if (d) return mi(u), (u = Ps(m, t)), g(h);
                  }
                  return u === r && (u = Ps(m, t)), c;
                }
                return (
                  (t = da(t) || 0),
                  Yo(i) &&
                    ((p = !!i.leading),
                    (a = (d = "maxWait" in i) ? dr(da(i.maxWait) || 0, t) : a),
                    (f = "trailing" in i ? !!i.trailing : f)),
                  (w.cancel = function () {
                    u !== r && mi(u), (l = 0), (s = h = o = u = r);
                  }),
                  (w.flush = function () {
                    return u === r ? c : v(Io());
                  }),
                  w
                );
              }
              var Co = Fn(function (e, t) {
                  return on(e, 1, t);
                }),
                xo = Fn(function (e, t, r) {
                  return on(e, da(t) || 0, r);
                });
              function To(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new Oe(n);
                var r = function () {
                  var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    s = r.cache;
                  if (s.has(i)) return s.get(i);
                  var o = e.apply(this, n);
                  return (r.cache = s.set(i, o) || s), o;
                };
                return (r.cache = new (To.Cache || Vr)()), r;
              }
              function Ao(e) {
                if ("function" != typeof e) throw new Oe(n);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              To.Cache = Vr;
              var jo = gi(function (e, t) {
                  var r = (t =
                    1 == t.length && zo(t[0])
                      ? Ct(t[0], Bt(ns()))
                      : Ct(dn(t, 1), Bt(ns()))).length;
                  return Fn(function (n) {
                    for (var i = -1, s = fr(n.length, r); ++i < s; )
                      n[i] = t[i].call(this, n[i]);
                    return _t(e, this, n);
                  });
                }),
                Do = Fn(function (e, t) {
                  var n = ir(t, rs(Do));
                  return Hi(e, o, r, t, n);
                }),
                Uo = Fn(function (e, t) {
                  var n = ir(t, rs(Uo));
                  return Hi(e, 64, r, t, n);
                }),
                ko = Yi(function (e, t) {
                  return Hi(e, 256, r, r, r, t);
                });
              function $o(e, t) {
                return e === t || (e != e && t != t);
              }
              var qo = zi(En),
                Lo = zi(function (e, t) {
                  return e >= t;
                }),
                Mo = Nn(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? Nn
                  : function (e) {
                      return (
                        Zo(e) && Ae.call(e, "callee") && !Fe.call(e, "callee")
                      );
                    },
                zo = re.isArray,
                Vo = gt
                  ? Bt(gt)
                  : function (e) {
                      return Zo(e) && _n(e) == C;
                    };
              function Ko(e) {
                return null != e && Qo(e.length) && !Jo(e);
              }
              function Wo(e) {
                return Zo(e) && Ko(e);
              }
              var Fo = Dt || dc,
                Ho = yt
                  ? Bt(yt)
                  : function (e) {
                      return Zo(e) && _n(e) == y;
                    };
              function Bo(e) {
                if (!Zo(e)) return !1;
                var t = _n(e);
                return (
                  t == m ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !ta(e))
                );
              }
              function Jo(e) {
                if (!Yo(e)) return !1;
                var t = _n(e);
                return (
                  t == v ||
                  t == w ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function Go(e) {
                return "number" == typeof e && e == la(e);
              }
              function Qo(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= u;
              }
              function Yo(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function Zo(e) {
                return null != e && "object" == typeof e;
              }
              var Xo = mt
                ? Bt(mt)
                : function (e) {
                    return Zo(e) && us(e) == b;
                  };
              function ea(e) {
                return "number" == typeof e || (Zo(e) && _n(e) == _);
              }
              function ta(e) {
                if (!Zo(e) || _n(e) != E) return !1;
                var t = Ke(e);
                if (null === t) return !0;
                var r = Ae.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof r && r instanceof r && Te.call(r) == ke
                );
              }
              var ra = vt
                  ? Bt(vt)
                  : function (e) {
                      return Zo(e) && _n(e) == S;
                    },
                na = wt
                  ? Bt(wt)
                  : function (e) {
                      return Zo(e) && us(e) == P;
                    };
              function ia(e) {
                return "string" == typeof e || (!zo(e) && Zo(e) && _n(e) == O);
              }
              function sa(e) {
                return "symbol" == typeof e || (Zo(e) && _n(e) == N);
              }
              var oa = bt
                  ? Bt(bt)
                  : function (e) {
                      return Zo(e) && Qo(e.length) && !!rt[_n(e)];
                    },
                aa = zi(jn),
                ca = zi(function (e, t) {
                  return e <= t;
                });
              function ua(e) {
                if (!e) return [];
                if (Ko(e)) return ia(e) ? ar(e) : Si(e);
                if (Qe && e[Qe])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[Qe]());
                var t = us(e);
                return (t == b ? rr : t == P ? sr : $a)(e);
              }
              function ha(e) {
                return e
                  ? (e = da(e)) === c || e === -c
                    ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                    : e == e
                      ? e
                      : 0
                  : 0 === e
                    ? e
                    : 0;
              }
              function la(e) {
                var t = ha(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function pa(e) {
                return e ? rn(la(e), 0, l) : 0;
              }
              function da(e) {
                if ("number" == typeof e) return e;
                if (sa(e)) return h;
                if (Yo(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = Yo(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Ht(e);
                var r = pe.test(e);
                return r || fe.test(e)
                  ? ot(e.slice(2), r ? 2 : 8)
                  : le.test(e)
                    ? h
                    : +e;
              }
              function fa(e) {
                return Pi(e, Ca(e));
              }
              function ga(e) {
                return null == e ? "" : ii(e);
              }
              var ya = Ni(function (e, t) {
                  if (vs(t) || Ko(t)) Pi(t, Ra(t), e);
                  else for (var r in t) Ae.call(t, r) && Qr(e, r, t[r]);
                }),
                ma = Ni(function (e, t) {
                  Pi(t, Ca(t), e);
                }),
                va = Ni(function (e, t, r, n) {
                  Pi(t, Ca(t), e, n);
                }),
                wa = Ni(function (e, t, r, n) {
                  Pi(t, Ra(t), e, n);
                }),
                ba = Yi(tn),
                _a = Fn(function (e, t) {
                  e = Ie(e);
                  var n = -1,
                    i = t.length,
                    s = i > 2 ? t[2] : r;
                  for (s && fs(t[0], t[1], s) && (i = 1); ++n < i; )
                    for (
                      var o = t[n], a = Ca(o), c = -1, u = a.length;
                      ++c < u;

                    ) {
                      var h = a[c],
                        l = e[h];
                      (l === r || ($o(l, Ce[h]) && !Ae.call(e, h))) &&
                        (e[h] = o[h]);
                    }
                  return e;
                }),
                Ea = Fn(function (e) {
                  return e.push(r, Ji), _t(Ta, r, e);
                });
              function Ia(e, t, n) {
                var i = null == e ? r : wn(e, t);
                return i === r ? n : i;
              }
              function Sa(e, t) {
                return null != e && hs(e, t, Sn);
              }
              var Pa = ki(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = Ue.call(t)),
                    (e[t] = r);
                }, Ya(ec)),
                Oa = ki(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = Ue.call(t)),
                    Ae.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, ns),
                Na = Fn(On);
              function Ra(e) {
                return Ko(e) ? Fr(e) : An(e);
              }
              function Ca(e) {
                return Ko(e)
                  ? Fr(e, !0)
                  : (function (e) {
                      if (!Yo(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var r in Ie(e)) t.push(r);
                          return t;
                        })(e);
                      var t = vs(e),
                        r = [];
                      for (var n in e)
                        ("constructor" == n && (t || !Ae.call(e, n))) ||
                          r.push(n);
                      return r;
                    })(e);
              }
              var xa = Ni(function (e, t, r) {
                  $n(e, t, r);
                }),
                Ta = Ni(function (e, t, r, n) {
                  $n(e, t, r, n);
                }),
                Aa = Yi(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var n = !1;
                  (t = Ct(t, function (t) {
                    return (t = fi(t, e)), n || (n = t.length > 1), t;
                  })),
                    Pi(e, Xi(e), r),
                    n && (r = nn(r, 7, Gi));
                  for (var i = t.length; i--; ) oi(r, t[i]);
                  return r;
                }),
                ja = Yi(function (e, t) {
                  return null == e
                    ? {}
                    : (function (e, t) {
                        return Mn(e, t, function (t, r) {
                          return Sa(e, r);
                        });
                      })(e, t);
                });
              function Da(e, t) {
                if (null == e) return {};
                var r = Ct(Xi(e), function (e) {
                  return [e];
                });
                return (
                  (t = ns(t)),
                  Mn(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var Ua = Fi(Ra),
                ka = Fi(Ca);
              function $a(e) {
                return null == e ? [] : Jt(e, Ra(e));
              }
              var qa = Ti(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? La(t) : t);
              });
              function La(e) {
                return Ba(ga(e).toLowerCase());
              }
              function Ma(e) {
                return (e = ga(e)) && e.replace(ye, Zt).replace(Ge, "");
              }
              var za = Ti(function (e, t, r) {
                  return e + (r ? "-" : "") + t.toLowerCase();
                }),
                Va = Ti(function (e, t, r) {
                  return e + (r ? " " : "") + t.toLowerCase();
                }),
                Ka = xi("toLowerCase"),
                Wa = Ti(function (e, t, r) {
                  return e + (r ? "_" : "") + t.toLowerCase();
                }),
                Fa = Ti(function (e, t, r) {
                  return e + (r ? " " : "") + Ba(t);
                }),
                Ha = Ti(function (e, t, r) {
                  return e + (r ? " " : "") + t.toUpperCase();
                }),
                Ba = xi("toUpperCase");
              function Ja(e, t, n) {
                return (
                  (e = ga(e)),
                  (t = n ? r : t) === r
                    ? (function (e) {
                        return Xe.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(Ye) || [];
                        })(e)
                      : (function (e) {
                          return e.match(oe) || [];
                        })(e)
                    : e.match(t) || []
                );
              }
              var Ga = Fn(function (e, t) {
                  try {
                    return _t(e, r, t);
                  } catch (e) {
                    return Bo(e) ? e : new be(e);
                  }
                }),
                Qa = Yi(function (e, t) {
                  return (
                    It(t, function (t) {
                      (t = js(t)), en(e, t, Oo(e[t], e));
                    }),
                    e
                  );
                });
              function Ya(e) {
                return function () {
                  return e;
                };
              }
              var Za = Di(),
                Xa = Di(!0);
              function ec(e) {
                return e;
              }
              function tc(e) {
                return Tn("function" == typeof e ? e : nn(e, 1));
              }
              var rc = Fn(function (e, t) {
                  return function (r) {
                    return On(r, e, t);
                  };
                }),
                nc = Fn(function (e, t) {
                  return function (r) {
                    return On(e, r, t);
                  };
                });
              function ic(e, t, r) {
                var n = Ra(t),
                  i = vn(t, n);
                null == r &&
                  (!Yo(t) || (!i.length && n.length)) &&
                  ((r = t), (t = e), (e = this), (i = vn(t, Ra(t))));
                var s = !(Yo(r) && "chain" in r && !r.chain),
                  o = Jo(e);
                return (
                  It(i, function (r) {
                    var n = t[r];
                    (e[r] = n),
                      o &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var r = e(this.__wrapped__);
                            return (
                              (r.__actions__ = Si(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: e,
                              }),
                              (r.__chain__ = t),
                              r
                            );
                          }
                          return n.apply(e, xt([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function sc() {}
              var oc = qi(Ct),
                ac = qi(Pt),
                cc = qi(jt);
              function uc(e) {
                return gs(e)
                  ? zt(js(e))
                  : (function (e) {
                      return function (t) {
                        return wn(t, e);
                      };
                    })(e);
              }
              var hc = Mi(),
                lc = Mi(!0);
              function pc() {
                return [];
              }
              function dc() {
                return !1;
              }
              var fc = $i(function (e, t) {
                  return e + t;
                }, 0),
                gc = Ki("ceil"),
                yc = $i(function (e, t) {
                  return e / t;
                }, 1),
                mc = Ki("floor"),
                vc = $i(function (e, t) {
                  return e * t;
                }, 1),
                wc = Ki("round"),
                bc = $i(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (Ur.after = function (e, t) {
                  if ("function" != typeof t) throw new Oe(n);
                  return (
                    (e = la(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (Ur.ary = So),
                (Ur.assign = ya),
                (Ur.assignIn = ma),
                (Ur.assignInWith = va),
                (Ur.assignWith = wa),
                (Ur.at = ba),
                (Ur.before = Po),
                (Ur.bind = Oo),
                (Ur.bindAll = Qa),
                (Ur.bindKey = No),
                (Ur.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return zo(e) ? e : [e];
                }),
                (Ur.chain = co),
                (Ur.chunk = function (e, t, n) {
                  t = (n ? fs(e, t, n) : t === r) ? 1 : dr(la(t), 0);
                  var i = null == e ? 0 : e.length;
                  if (!i || t < 1) return [];
                  for (var s = 0, o = 0, a = re(lt(i / t)); s < i; )
                    a[o++] = Zn(e, s, (s += t));
                  return a;
                }),
                (Ur.compact = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = 0, i = [];
                    ++t < r;

                  ) {
                    var s = e[t];
                    s && (i[n++] = s);
                  }
                  return i;
                }),
                (Ur.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = re(e - 1), r = arguments[0], n = e; n--; )
                    t[n - 1] = arguments[n];
                  return xt(zo(r) ? Si(r) : [r], dn(t, 1));
                }),
                (Ur.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = ns();
                  return (
                    (e = t
                      ? Ct(e, function (e) {
                          if ("function" != typeof e[1]) throw new Oe(n);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    Fn(function (r) {
                      for (var n = -1; ++n < t; ) {
                        var i = e[n];
                        if (_t(i[0], this, r)) return _t(i[1], this, r);
                      }
                    })
                  );
                }),
                (Ur.conforms = function (e) {
                  return (function (e) {
                    var t = Ra(e);
                    return function (r) {
                      return sn(r, e, t);
                    };
                  })(nn(e, 1));
                }),
                (Ur.constant = Ya),
                (Ur.countBy = lo),
                (Ur.create = function (e, t) {
                  var r = kr(e);
                  return null == t ? r : Xr(r, t);
                }),
                (Ur.curry = function e(t, n, i) {
                  var s = Hi(t, 8, r, r, r, r, r, (n = i ? r : n));
                  return (s.placeholder = e.placeholder), s;
                }),
                (Ur.curryRight = function e(t, n, i) {
                  var s = Hi(t, 16, r, r, r, r, r, (n = i ? r : n));
                  return (s.placeholder = e.placeholder), s;
                }),
                (Ur.debounce = Ro),
                (Ur.defaults = _a),
                (Ur.defaultsDeep = Ea),
                (Ur.defer = Co),
                (Ur.delay = xo),
                (Ur.difference = ks),
                (Ur.differenceBy = $s),
                (Ur.differenceWith = qs),
                (Ur.drop = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Zn(e, (t = n || t === r ? 1 : la(t)) < 0 ? 0 : t, i)
                    : [];
                }),
                (Ur.dropRight = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Zn(
                        e,
                        0,
                        (t = i - (t = n || t === r ? 1 : la(t))) < 0 ? 0 : t,
                      )
                    : [];
                }),
                (Ur.dropRightWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !0, !0) : [];
                }),
                (Ur.dropWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !0) : [];
                }),
                (Ur.fill = function (e, t, n, i) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (n &&
                        "number" != typeof n &&
                        fs(e, t, n) &&
                        ((n = 0), (i = s)),
                      (function (e, t, n, i) {
                        var s = e.length;
                        for (
                          (n = la(n)) < 0 && (n = -n > s ? 0 : s + n),
                            (i = i === r || i > s ? s : la(i)) < 0 && (i += s),
                            i = n > i ? 0 : pa(i);
                          n < i;

                        )
                          e[n++] = t;
                        return e;
                      })(e, t, n, i))
                    : [];
                }),
                (Ur.filter = function (e, t) {
                  return (zo(e) ? Ot : pn)(e, ns(t, 3));
                }),
                (Ur.flatMap = function (e, t) {
                  return dn(bo(e, t), 1);
                }),
                (Ur.flatMapDeep = function (e, t) {
                  return dn(bo(e, t), c);
                }),
                (Ur.flatMapDepth = function (e, t, n) {
                  return (n = n === r ? 1 : la(n)), dn(bo(e, t), n);
                }),
                (Ur.flatten = zs),
                (Ur.flattenDeep = function (e) {
                  return null != e && e.length ? dn(e, c) : [];
                }),
                (Ur.flattenDepth = function (e, t) {
                  return null != e && e.length
                    ? dn(e, (t = t === r ? 1 : la(t)))
                    : [];
                }),
                (Ur.flip = function (e) {
                  return Hi(e, 512);
                }),
                (Ur.flow = Za),
                (Ur.flowRight = Xa),
                (Ur.fromPairs = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = {};
                    ++t < r;

                  ) {
                    var i = e[t];
                    n[i[0]] = i[1];
                  }
                  return n;
                }),
                (Ur.functions = function (e) {
                  return null == e ? [] : vn(e, Ra(e));
                }),
                (Ur.functionsIn = function (e) {
                  return null == e ? [] : vn(e, Ca(e));
                }),
                (Ur.groupBy = mo),
                (Ur.initial = function (e) {
                  return null != e && e.length ? Zn(e, 0, -1) : [];
                }),
                (Ur.intersection = Ks),
                (Ur.intersectionBy = Ws),
                (Ur.intersectionWith = Fs),
                (Ur.invert = Pa),
                (Ur.invertBy = Oa),
                (Ur.invokeMap = vo),
                (Ur.iteratee = tc),
                (Ur.keyBy = wo),
                (Ur.keys = Ra),
                (Ur.keysIn = Ca),
                (Ur.map = bo),
                (Ur.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = ns(t, 3)),
                    yn(e, function (e, n, i) {
                      en(r, t(e, n, i), e);
                    }),
                    r
                  );
                }),
                (Ur.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = ns(t, 3)),
                    yn(e, function (e, n, i) {
                      en(r, n, t(e, n, i));
                    }),
                    r
                  );
                }),
                (Ur.matches = function (e) {
                  return Un(nn(e, 1));
                }),
                (Ur.matchesProperty = function (e, t) {
                  return kn(e, nn(t, 1));
                }),
                (Ur.memoize = To),
                (Ur.merge = xa),
                (Ur.mergeWith = Ta),
                (Ur.method = rc),
                (Ur.methodOf = nc),
                (Ur.mixin = ic),
                (Ur.negate = Ao),
                (Ur.nthArg = function (e) {
                  return (
                    (e = la(e)),
                    Fn(function (t) {
                      return qn(t, e);
                    })
                  );
                }),
                (Ur.omit = Aa),
                (Ur.omitBy = function (e, t) {
                  return Da(e, Ao(ns(t)));
                }),
                (Ur.once = function (e) {
                  return Po(2, e);
                }),
                (Ur.orderBy = function (e, t, n, i) {
                  return null == e
                    ? []
                    : (zo(t) || (t = null == t ? [] : [t]),
                      zo((n = i ? r : n)) || (n = null == n ? [] : [n]),
                      Ln(e, t, n));
                }),
                (Ur.over = oc),
                (Ur.overArgs = jo),
                (Ur.overEvery = ac),
                (Ur.overSome = cc),
                (Ur.partial = Do),
                (Ur.partialRight = Uo),
                (Ur.partition = _o),
                (Ur.pick = ja),
                (Ur.pickBy = Da),
                (Ur.property = uc),
                (Ur.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? r : wn(e, t);
                  };
                }),
                (Ur.pull = Bs),
                (Ur.pullAll = Js),
                (Ur.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length
                    ? zn(e, t, ns(r, 2))
                    : e;
                }),
                (Ur.pullAllWith = function (e, t, n) {
                  return e && e.length && t && t.length ? zn(e, t, r, n) : e;
                }),
                (Ur.pullAt = Gs),
                (Ur.range = hc),
                (Ur.rangeRight = lc),
                (Ur.rearg = ko),
                (Ur.reject = function (e, t) {
                  return (zo(e) ? Ot : pn)(e, Ao(ns(t, 3)));
                }),
                (Ur.remove = function (e, t) {
                  var r = [];
                  if (!e || !e.length) return r;
                  var n = -1,
                    i = [],
                    s = e.length;
                  for (t = ns(t, 3); ++n < s; ) {
                    var o = e[n];
                    t(o, n, e) && (r.push(o), i.push(n));
                  }
                  return Vn(e, i), r;
                }),
                (Ur.rest = function (e, t) {
                  if ("function" != typeof e) throw new Oe(n);
                  return Fn(e, (t = t === r ? t : la(t)));
                }),
                (Ur.reverse = Qs),
                (Ur.sampleSize = function (e, t, n) {
                  return (
                    (t = (n ? fs(e, t, n) : t === r) ? 1 : la(t)),
                    (zo(e) ? Br : Bn)(e, t)
                  );
                }),
                (Ur.set = function (e, t, r) {
                  return null == e ? e : Jn(e, t, r);
                }),
                (Ur.setWith = function (e, t, n, i) {
                  return (
                    (i = "function" == typeof i ? i : r),
                    null == e ? e : Jn(e, t, n, i)
                  );
                }),
                (Ur.shuffle = function (e) {
                  return (zo(e) ? Jr : Yn)(e);
                }),
                (Ur.slice = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? (n && "number" != typeof n && fs(e, t, n)
                        ? ((t = 0), (n = i))
                        : ((t = null == t ? 0 : la(t)),
                          (n = n === r ? i : la(n))),
                      Zn(e, t, n))
                    : [];
                }),
                (Ur.sortBy = Eo),
                (Ur.sortedUniq = function (e) {
                  return e && e.length ? ri(e) : [];
                }),
                (Ur.sortedUniqBy = function (e, t) {
                  return e && e.length ? ri(e, ns(t, 2)) : [];
                }),
                (Ur.split = function (e, t, n) {
                  return (
                    n && "number" != typeof n && fs(e, t, n) && (t = n = r),
                    (n = n === r ? l : n >>> 0)
                      ? (e = ga(e)) &&
                        ("string" == typeof t || (null != t && !ra(t))) &&
                        !(t = ii(t)) &&
                        tr(e)
                        ? yi(ar(e), 0, n)
                        : e.split(t, n)
                      : []
                  );
                }),
                (Ur.spread = function (e, t) {
                  if ("function" != typeof e) throw new Oe(n);
                  return (
                    (t = null == t ? 0 : dr(la(t), 0)),
                    Fn(function (r) {
                      var n = r[t],
                        i = yi(r, 0, t);
                      return n && xt(i, n), _t(e, this, i);
                    })
                  );
                }),
                (Ur.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? Zn(e, 1, t) : [];
                }),
                (Ur.take = function (e, t, n) {
                  return e && e.length
                    ? Zn(e, 0, (t = n || t === r ? 1 : la(t)) < 0 ? 0 : t)
                    : [];
                }),
                (Ur.takeRight = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Zn(
                        e,
                        (t = i - (t = n || t === r ? 1 : la(t))) < 0 ? 0 : t,
                        i,
                      )
                    : [];
                }),
                (Ur.takeRightWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !1, !0) : [];
                }),
                (Ur.takeWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3)) : [];
                }),
                (Ur.tap = function (e, t) {
                  return t(e), e;
                }),
                (Ur.throttle = function (e, t, r) {
                  var i = !0,
                    s = !0;
                  if ("function" != typeof e) throw new Oe(n);
                  return (
                    Yo(r) &&
                      ((i = "leading" in r ? !!r.leading : i),
                      (s = "trailing" in r ? !!r.trailing : s)),
                    Ro(e, t, { leading: i, maxWait: t, trailing: s })
                  );
                }),
                (Ur.thru = uo),
                (Ur.toArray = ua),
                (Ur.toPairs = Ua),
                (Ur.toPairsIn = ka),
                (Ur.toPath = function (e) {
                  return zo(e) ? Ct(e, js) : sa(e) ? [e] : Si(As(ga(e)));
                }),
                (Ur.toPlainObject = fa),
                (Ur.transform = function (e, t, r) {
                  var n = zo(e),
                    i = n || Fo(e) || oa(e);
                  if (((t = ns(t, 4)), null == r)) {
                    var s = e && e.constructor;
                    r = i
                      ? n
                        ? new s()
                        : []
                      : Yo(e) && Jo(s)
                        ? kr(Ke(e))
                        : {};
                  }
                  return (
                    (i ? It : yn)(e, function (e, n, i) {
                      return t(r, e, n, i);
                    }),
                    r
                  );
                }),
                (Ur.unary = function (e) {
                  return So(e, 1);
                }),
                (Ur.union = Ys),
                (Ur.unionBy = Zs),
                (Ur.unionWith = Xs),
                (Ur.uniq = function (e) {
                  return e && e.length ? si(e) : [];
                }),
                (Ur.uniqBy = function (e, t) {
                  return e && e.length ? si(e, ns(t, 2)) : [];
                }),
                (Ur.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : r),
                    e && e.length ? si(e, r, t) : []
                  );
                }),
                (Ur.unset = function (e, t) {
                  return null == e || oi(e, t);
                }),
                (Ur.unzip = eo),
                (Ur.unzipWith = to),
                (Ur.update = function (e, t, r) {
                  return null == e ? e : ai(e, t, di(r));
                }),
                (Ur.updateWith = function (e, t, n, i) {
                  return (
                    (i = "function" == typeof i ? i : r),
                    null == e ? e : ai(e, t, di(n), i)
                  );
                }),
                (Ur.values = $a),
                (Ur.valuesIn = function (e) {
                  return null == e ? [] : Jt(e, Ca(e));
                }),
                (Ur.without = ro),
                (Ur.words = Ja),
                (Ur.wrap = function (e, t) {
                  return Do(di(t), e);
                }),
                (Ur.xor = no),
                (Ur.xorBy = io),
                (Ur.xorWith = so),
                (Ur.zip = oo),
                (Ur.zipObject = function (e, t) {
                  return li(e || [], t || [], Qr);
                }),
                (Ur.zipObjectDeep = function (e, t) {
                  return li(e || [], t || [], Jn);
                }),
                (Ur.zipWith = ao),
                (Ur.entries = Ua),
                (Ur.entriesIn = ka),
                (Ur.extend = ma),
                (Ur.extendWith = va),
                ic(Ur, Ur),
                (Ur.add = fc),
                (Ur.attempt = Ga),
                (Ur.camelCase = qa),
                (Ur.capitalize = La),
                (Ur.ceil = gc),
                (Ur.clamp = function (e, t, n) {
                  return (
                    n === r && ((n = t), (t = r)),
                    n !== r && (n = (n = da(n)) == n ? n : 0),
                    t !== r && (t = (t = da(t)) == t ? t : 0),
                    rn(da(e), t, n)
                  );
                }),
                (Ur.clone = function (e) {
                  return nn(e, 4);
                }),
                (Ur.cloneDeep = function (e) {
                  return nn(e, 5);
                }),
                (Ur.cloneDeepWith = function (e, t) {
                  return nn(e, 5, (t = "function" == typeof t ? t : r));
                }),
                (Ur.cloneWith = function (e, t) {
                  return nn(e, 4, (t = "function" == typeof t ? t : r));
                }),
                (Ur.conformsTo = function (e, t) {
                  return null == t || sn(e, t, Ra(t));
                }),
                (Ur.deburr = Ma),
                (Ur.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (Ur.divide = yc),
                (Ur.endsWith = function (e, t, n) {
                  (e = ga(e)), (t = ii(t));
                  var i = e.length,
                    s = (n = n === r ? i : rn(la(n), 0, i));
                  return (n -= t.length) >= 0 && e.slice(n, s) == t;
                }),
                (Ur.eq = $o),
                (Ur.escape = function (e) {
                  return (e = ga(e)) && H.test(e) ? e.replace(W, Xt) : e;
                }),
                (Ur.escapeRegExp = function (e) {
                  return (e = ga(e)) && ee.test(e) ? e.replace(X, "\\$&") : e;
                }),
                (Ur.every = function (e, t, n) {
                  var i = zo(e) ? Pt : hn;
                  return n && fs(e, t, n) && (t = r), i(e, ns(t, 3));
                }),
                (Ur.find = po),
                (Ur.findIndex = Ls),
                (Ur.findKey = function (e, t) {
                  return Ut(e, ns(t, 3), yn);
                }),
                (Ur.findLast = fo),
                (Ur.findLastIndex = Ms),
                (Ur.findLastKey = function (e, t) {
                  return Ut(e, ns(t, 3), mn);
                }),
                (Ur.floor = mc),
                (Ur.forEach = go),
                (Ur.forEachRight = yo),
                (Ur.forIn = function (e, t) {
                  return null == e ? e : fn(e, ns(t, 3), Ca);
                }),
                (Ur.forInRight = function (e, t) {
                  return null == e ? e : gn(e, ns(t, 3), Ca);
                }),
                (Ur.forOwn = function (e, t) {
                  return e && yn(e, ns(t, 3));
                }),
                (Ur.forOwnRight = function (e, t) {
                  return e && mn(e, ns(t, 3));
                }),
                (Ur.get = Ia),
                (Ur.gt = qo),
                (Ur.gte = Lo),
                (Ur.has = function (e, t) {
                  return null != e && hs(e, t, In);
                }),
                (Ur.hasIn = Sa),
                (Ur.head = Vs),
                (Ur.identity = ec),
                (Ur.includes = function (e, t, r, n) {
                  (e = Ko(e) ? e : $a(e)), (r = r && !n ? la(r) : 0);
                  var i = e.length;
                  return (
                    r < 0 && (r = dr(i + r, 0)),
                    ia(e)
                      ? r <= i && e.indexOf(t, r) > -1
                      : !!i && $t(e, t, r) > -1
                  );
                }),
                (Ur.indexOf = function (e, t, r) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var i = null == r ? 0 : la(r);
                  return i < 0 && (i = dr(n + i, 0)), $t(e, t, i);
                }),
                (Ur.inRange = function (e, t, n) {
                  return (
                    (t = ha(t)),
                    n === r ? ((n = t), (t = 0)) : (n = ha(n)),
                    (function (e, t, r) {
                      return e >= fr(t, r) && e < dr(t, r);
                    })((e = da(e)), t, n)
                  );
                }),
                (Ur.invoke = Na),
                (Ur.isArguments = Mo),
                (Ur.isArray = zo),
                (Ur.isArrayBuffer = Vo),
                (Ur.isArrayLike = Ko),
                (Ur.isArrayLikeObject = Wo),
                (Ur.isBoolean = function (e) {
                  return !0 === e || !1 === e || (Zo(e) && _n(e) == g);
                }),
                (Ur.isBuffer = Fo),
                (Ur.isDate = Ho),
                (Ur.isElement = function (e) {
                  return Zo(e) && 1 === e.nodeType && !ta(e);
                }),
                (Ur.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    Ko(e) &&
                    (zo(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Fo(e) ||
                      oa(e) ||
                      Mo(e))
                  )
                    return !e.length;
                  var t = us(e);
                  if (t == b || t == P) return !e.size;
                  if (vs(e)) return !An(e).length;
                  for (var r in e) if (Ae.call(e, r)) return !1;
                  return !0;
                }),
                (Ur.isEqual = function (e, t) {
                  return Rn(e, t);
                }),
                (Ur.isEqualWith = function (e, t, n) {
                  var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                  return i === r ? Rn(e, t, r, n) : !!i;
                }),
                (Ur.isError = Bo),
                (Ur.isFinite = function (e) {
                  return "number" == typeof e && Vt(e);
                }),
                (Ur.isFunction = Jo),
                (Ur.isInteger = Go),
                (Ur.isLength = Qo),
                (Ur.isMap = Xo),
                (Ur.isMatch = function (e, t) {
                  return e === t || Cn(e, t, ss(t));
                }),
                (Ur.isMatchWith = function (e, t, n) {
                  return (
                    (n = "function" == typeof n ? n : r), Cn(e, t, ss(t), n)
                  );
                }),
                (Ur.isNaN = function (e) {
                  return ea(e) && e != +e;
                }),
                (Ur.isNative = function (e) {
                  if (ms(e))
                    throw new be(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    );
                  return xn(e);
                }),
                (Ur.isNil = function (e) {
                  return null == e;
                }),
                (Ur.isNull = function (e) {
                  return null === e;
                }),
                (Ur.isNumber = ea),
                (Ur.isObject = Yo),
                (Ur.isObjectLike = Zo),
                (Ur.isPlainObject = ta),
                (Ur.isRegExp = ra),
                (Ur.isSafeInteger = function (e) {
                  return Go(e) && e >= -u && e <= u;
                }),
                (Ur.isSet = na),
                (Ur.isString = ia),
                (Ur.isSymbol = sa),
                (Ur.isTypedArray = oa),
                (Ur.isUndefined = function (e) {
                  return e === r;
                }),
                (Ur.isWeakMap = function (e) {
                  return Zo(e) && us(e) == R;
                }),
                (Ur.isWeakSet = function (e) {
                  return Zo(e) && "[object WeakSet]" == _n(e);
                }),
                (Ur.join = function (e, t) {
                  return null == e ? "" : lr.call(e, t);
                }),
                (Ur.kebabCase = za),
                (Ur.last = Hs),
                (Ur.lastIndexOf = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var s = i;
                  return (
                    n !== r &&
                      (s = (s = la(n)) < 0 ? dr(i + s, 0) : fr(s, i - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var n = r + 1; n--; ) if (e[n] === t) return n;
                          return n;
                        })(e, t, s)
                      : kt(e, Lt, s, !0)
                  );
                }),
                (Ur.lowerCase = Va),
                (Ur.lowerFirst = Ka),
                (Ur.lt = aa),
                (Ur.lte = ca),
                (Ur.max = function (e) {
                  return e && e.length ? ln(e, ec, En) : r;
                }),
                (Ur.maxBy = function (e, t) {
                  return e && e.length ? ln(e, ns(t, 2), En) : r;
                }),
                (Ur.mean = function (e) {
                  return Mt(e, ec);
                }),
                (Ur.meanBy = function (e, t) {
                  return Mt(e, ns(t, 2));
                }),
                (Ur.min = function (e) {
                  return e && e.length ? ln(e, ec, jn) : r;
                }),
                (Ur.minBy = function (e, t) {
                  return e && e.length ? ln(e, ns(t, 2), jn) : r;
                }),
                (Ur.stubArray = pc),
                (Ur.stubFalse = dc),
                (Ur.stubObject = function () {
                  return {};
                }),
                (Ur.stubString = function () {
                  return "";
                }),
                (Ur.stubTrue = function () {
                  return !0;
                }),
                (Ur.multiply = vc),
                (Ur.nth = function (e, t) {
                  return e && e.length ? qn(e, la(t)) : r;
                }),
                (Ur.noConflict = function () {
                  return ut._ === this && (ut._ = $e), this;
                }),
                (Ur.noop = sc),
                (Ur.now = Io),
                (Ur.pad = function (e, t, r) {
                  e = ga(e);
                  var n = (t = la(t)) ? or(e) : 0;
                  if (!t || n >= t) return e;
                  var i = (t - n) / 2;
                  return Li(dt(i), r) + e + Li(lt(i), r);
                }),
                (Ur.padEnd = function (e, t, r) {
                  e = ga(e);
                  var n = (t = la(t)) ? or(e) : 0;
                  return t && n < t ? e + Li(t - n, r) : e;
                }),
                (Ur.padStart = function (e, t, r) {
                  e = ga(e);
                  var n = (t = la(t)) ? or(e) : 0;
                  return t && n < t ? Li(t - n, r) + e : e;
                }),
                (Ur.parseInt = function (e, t, r) {
                  return (
                    r || null == t ? (t = 0) : t && (t = +t),
                    yr(ga(e).replace(te, ""), t || 0)
                  );
                }),
                (Ur.random = function (e, t, n) {
                  if (
                    (n && "boolean" != typeof n && fs(e, t, n) && (t = n = r),
                    n === r &&
                      ("boolean" == typeof t
                        ? ((n = t), (t = r))
                        : "boolean" == typeof e && ((n = e), (e = r))),
                    e === r && t === r
                      ? ((e = 0), (t = 1))
                      : ((e = ha(e)),
                        t === r ? ((t = e), (e = 0)) : (t = ha(t))),
                    e > t)
                  ) {
                    var i = e;
                    (e = t), (t = i);
                  }
                  if (n || e % 1 || t % 1) {
                    var s = mr();
                    return fr(
                      e + s * (t - e + st("1e-" + ((s + "").length - 1))),
                      t,
                    );
                  }
                  return Kn(e, t);
                }),
                (Ur.reduce = function (e, t, r) {
                  var n = zo(e) ? Tt : Kt,
                    i = arguments.length < 3;
                  return n(e, ns(t, 4), r, i, cn);
                }),
                (Ur.reduceRight = function (e, t, r) {
                  var n = zo(e) ? At : Kt,
                    i = arguments.length < 3;
                  return n(e, ns(t, 4), r, i, un);
                }),
                (Ur.repeat = function (e, t, n) {
                  return (
                    (t = (n ? fs(e, t, n) : t === r) ? 1 : la(t)), Wn(ga(e), t)
                  );
                }),
                (Ur.replace = function () {
                  var e = arguments,
                    t = ga(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (Ur.result = function (e, t, n) {
                  var i = -1,
                    s = (t = fi(t, e)).length;
                  for (s || ((s = 1), (e = r)); ++i < s; ) {
                    var o = null == e ? r : e[js(t[i])];
                    o === r && ((i = s), (o = n)), (e = Jo(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (Ur.round = wc),
                (Ur.runInContext = e),
                (Ur.sample = function (e) {
                  return (zo(e) ? Hr : Hn)(e);
                }),
                (Ur.size = function (e) {
                  if (null == e) return 0;
                  if (Ko(e)) return ia(e) ? or(e) : e.length;
                  var t = us(e);
                  return t == b || t == P ? e.size : An(e).length;
                }),
                (Ur.snakeCase = Wa),
                (Ur.some = function (e, t, n) {
                  var i = zo(e) ? jt : Xn;
                  return n && fs(e, t, n) && (t = r), i(e, ns(t, 3));
                }),
                (Ur.sortedIndex = function (e, t) {
                  return ei(e, t);
                }),
                (Ur.sortedIndexBy = function (e, t, r) {
                  return ti(e, t, ns(r, 2));
                }),
                (Ur.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var n = ei(e, t);
                    if (n < r && $o(e[n], t)) return n;
                  }
                  return -1;
                }),
                (Ur.sortedLastIndex = function (e, t) {
                  return ei(e, t, !0);
                }),
                (Ur.sortedLastIndexBy = function (e, t, r) {
                  return ti(e, t, ns(r, 2), !0);
                }),
                (Ur.sortedLastIndexOf = function (e, t) {
                  if (null != e && e.length) {
                    var r = ei(e, t, !0) - 1;
                    if ($o(e[r], t)) return r;
                  }
                  return -1;
                }),
                (Ur.startCase = Fa),
                (Ur.startsWith = function (e, t, r) {
                  return (
                    (e = ga(e)),
                    (r = null == r ? 0 : rn(la(r), 0, e.length)),
                    (t = ii(t)),
                    e.slice(r, r + t.length) == t
                  );
                }),
                (Ur.subtract = bc),
                (Ur.sum = function (e) {
                  return e && e.length ? Wt(e, ec) : 0;
                }),
                (Ur.sumBy = function (e, t) {
                  return e && e.length ? Wt(e, ns(t, 2)) : 0;
                }),
                (Ur.template = function (e, t, n) {
                  var i = Ur.templateSettings;
                  n && fs(e, t, n) && (t = r),
                    (e = ga(e)),
                    (t = va({}, t, i, Bi));
                  var s,
                    o,
                    a = va({}, t.imports, i.imports, Bi),
                    c = Ra(a),
                    u = Jt(a, c),
                    h = 0,
                    l = t.interpolate || me,
                    p = "__p += '",
                    d = Se(
                      (t.escape || me).source +
                        "|" +
                        l.source +
                        "|" +
                        (l === G ? ue : me).source +
                        "|" +
                        (t.evaluate || me).source +
                        "|$",
                      "g",
                    ),
                    f =
                      "//# sourceURL=" +
                      (Ae.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++tt + "]") +
                      "\n";
                  e.replace(d, function (t, r, n, i, a, c) {
                    return (
                      n || (n = i),
                      (p += e.slice(h, c).replace(ve, er)),
                      r && ((s = !0), (p += "' +\n__e(" + r + ") +\n'")),
                      a && ((o = !0), (p += "';\n" + a + ";\n__p += '")),
                      n &&
                        (p +=
                          "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                      (h = c + t.length),
                      t
                    );
                  }),
                    (p += "';\n");
                  var g = Ae.call(t, "variable") && t.variable;
                  if (g) {
                    if (ae.test(g))
                      throw new be(
                        "Invalid `variable` option passed into `_.template`",
                      );
                  } else p = "with (obj) {\n" + p + "\n}\n";
                  (p = (o ? p.replace(M, "") : p)
                    .replace(z, "$1")
                    .replace(V, "$1;")),
                    (p =
                      "function(" +
                      (g || "obj") +
                      ") {\n" +
                      (g ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (s ? ", __e = _.escape" : "") +
                      (o
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      p +
                      "return __p\n}");
                  var y = Ga(function () {
                    return _e(c, f + "return " + p).apply(r, u);
                  });
                  if (((y.source = p), Bo(y))) throw y;
                  return y;
                }),
                (Ur.times = function (e, t) {
                  if ((e = la(e)) < 1 || e > u) return [];
                  var r = l,
                    n = fr(e, l);
                  (t = ns(t)), (e -= l);
                  for (var i = Ft(n, t); ++r < e; ) t(r);
                  return i;
                }),
                (Ur.toFinite = ha),
                (Ur.toInteger = la),
                (Ur.toLength = pa),
                (Ur.toLower = function (e) {
                  return ga(e).toLowerCase();
                }),
                (Ur.toNumber = da),
                (Ur.toSafeInteger = function (e) {
                  return e ? rn(la(e), -u, u) : 0 === e ? e : 0;
                }),
                (Ur.toString = ga),
                (Ur.toUpper = function (e) {
                  return ga(e).toUpperCase();
                }),
                (Ur.trim = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r)) return Ht(e);
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e),
                    s = ar(t);
                  return yi(i, Qt(i, s), Yt(i, s) + 1).join("");
                }),
                (Ur.trimEnd = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r))
                    return e.slice(0, cr(e) + 1);
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e);
                  return yi(i, 0, Yt(i, ar(t)) + 1).join("");
                }),
                (Ur.trimStart = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r)) return e.replace(te, "");
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e);
                  return yi(i, Qt(i, ar(t))).join("");
                }),
                (Ur.truncate = function (e, t) {
                  var n = 30,
                    i = "...";
                  if (Yo(t)) {
                    var s = "separator" in t ? t.separator : s;
                    (n = "length" in t ? la(t.length) : n),
                      (i = "omission" in t ? ii(t.omission) : i);
                  }
                  var o = (e = ga(e)).length;
                  if (tr(e)) {
                    var a = ar(e);
                    o = a.length;
                  }
                  if (n >= o) return e;
                  var c = n - or(i);
                  if (c < 1) return i;
                  var u = a ? yi(a, 0, c).join("") : e.slice(0, c);
                  if (s === r) return u + i;
                  if ((a && (c += u.length - c), ra(s))) {
                    if (e.slice(c).search(s)) {
                      var h,
                        l = u;
                      for (
                        s.global || (s = Se(s.source, ga(he.exec(s)) + "g")),
                          s.lastIndex = 0;
                        (h = s.exec(l));

                      )
                        var p = h.index;
                      u = u.slice(0, p === r ? c : p);
                    }
                  } else if (e.indexOf(ii(s), c) != c) {
                    var d = u.lastIndexOf(s);
                    d > -1 && (u = u.slice(0, d));
                  }
                  return u + i;
                }),
                (Ur.unescape = function (e) {
                  return (e = ga(e)) && F.test(e) ? e.replace(K, ur) : e;
                }),
                (Ur.uniqueId = function (e) {
                  var t = ++je;
                  return ga(e) + t;
                }),
                (Ur.upperCase = Ha),
                (Ur.upperFirst = Ba),
                (Ur.each = go),
                (Ur.eachRight = yo),
                (Ur.first = Vs),
                ic(
                  Ur,
                  (function () {
                    var e = {};
                    return (
                      yn(Ur, function (t, r) {
                        Ae.call(Ur.prototype, r) || (e[r] = t);
                      }),
                      e
                    );
                  })(),
                  { chain: !1 },
                ),
                (Ur.VERSION = "4.17.21"),
                It(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    Ur[e].placeholder = Ur;
                  },
                ),
                It(["drop", "take"], function (e, t) {
                  (Lr.prototype[e] = function (n) {
                    n = n === r ? 1 : dr(la(n), 0);
                    var i =
                      this.__filtered__ && !t ? new Lr(this) : this.clone();
                    return (
                      i.__filtered__
                        ? (i.__takeCount__ = fr(n, i.__takeCount__))
                        : i.__views__.push({
                            size: fr(n, l),
                            type: e + (i.__dir__ < 0 ? "Right" : ""),
                          }),
                      i
                    );
                  }),
                    (Lr.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                It(["filter", "map", "takeWhile"], function (e, t) {
                  var r = t + 1,
                    n = 1 == r || 3 == r;
                  Lr.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: ns(e, 3), type: r }),
                      (t.__filtered__ = t.__filtered__ || n),
                      t
                    );
                  };
                }),
                It(["head", "last"], function (e, t) {
                  var r = "take" + (t ? "Right" : "");
                  Lr.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                It(["initial", "tail"], function (e, t) {
                  var r = "drop" + (t ? "" : "Right");
                  Lr.prototype[e] = function () {
                    return this.__filtered__ ? new Lr(this) : this[r](1);
                  };
                }),
                (Lr.prototype.compact = function () {
                  return this.filter(ec);
                }),
                (Lr.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (Lr.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (Lr.prototype.invokeMap = Fn(function (e, t) {
                  return "function" == typeof e
                    ? new Lr(this)
                    : this.map(function (r) {
                        return On(r, e, t);
                      });
                })),
                (Lr.prototype.reject = function (e) {
                  return this.filter(Ao(ns(e)));
                }),
                (Lr.prototype.slice = function (e, t) {
                  e = la(e);
                  var n = this;
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new Lr(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== r &&
                        (n = (t = la(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                      n);
                }),
                (Lr.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (Lr.prototype.toArray = function () {
                  return this.take(l);
                }),
                yn(Lr.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    i = /^(?:head|last)$/.test(t),
                    s = Ur[i ? "take" + ("last" == t ? "Right" : "") : t],
                    o = i || /^find/.test(t);
                  s &&
                    (Ur.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = i ? [1] : arguments,
                        c = t instanceof Lr,
                        u = a[0],
                        h = c || zo(t),
                        l = function (e) {
                          var t = s.apply(Ur, xt([e], a));
                          return i && p ? t[0] : t;
                        };
                      h &&
                        n &&
                        "function" == typeof u &&
                        1 != u.length &&
                        (c = h = !1);
                      var p = this.__chain__,
                        d = !!this.__actions__.length,
                        f = o && !p,
                        g = c && !d;
                      if (!o && h) {
                        t = g ? t : new Lr(this);
                        var y = e.apply(t, a);
                        return (
                          y.__actions__.push({
                            func: uo,
                            args: [l],
                            thisArg: r,
                          }),
                          new qr(y, p)
                        );
                      }
                      return f && g
                        ? e.apply(this, a)
                        : ((y = this.thru(l)),
                          f ? (i ? y.value()[0] : y.value()) : y);
                    });
                }),
                It(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = Ne[e],
                      r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      n = /^(?:pop|shift)$/.test(e);
                    Ur.prototype[e] = function () {
                      var e = arguments;
                      if (n && !this.__chain__) {
                        var i = this.value();
                        return t.apply(zo(i) ? i : [], e);
                      }
                      return this[r](function (r) {
                        return t.apply(zo(r) ? r : [], e);
                      });
                    };
                  },
                ),
                yn(Lr.prototype, function (e, t) {
                  var r = Ur[t];
                  if (r) {
                    var n = r.name + "";
                    Ae.call(Or, n) || (Or[n] = []),
                      Or[n].push({ name: t, func: r });
                  }
                }),
                (Or[Ui(r, 2).name] = [{ name: "wrapper", func: r }]),
                (Lr.prototype.clone = function () {
                  var e = new Lr(this.__wrapped__);
                  return (
                    (e.__actions__ = Si(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = Si(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = Si(this.__views__)),
                    e
                  );
                }),
                (Lr.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new Lr(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                (Lr.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = zo(e),
                    n = t < 0,
                    i = r ? e.length : 0,
                    s = (function (e, t, r) {
                      for (var n = -1, i = r.length; ++n < i; ) {
                        var s = r[n],
                          o = s.size;
                        switch (s.type) {
                          case "drop":
                            e += o;
                            break;
                          case "dropRight":
                            t -= o;
                            break;
                          case "take":
                            t = fr(t, e + o);
                            break;
                          case "takeRight":
                            e = dr(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, i, this.__views__),
                    o = s.start,
                    a = s.end,
                    c = a - o,
                    u = n ? a : o - 1,
                    h = this.__iteratees__,
                    l = h.length,
                    p = 0,
                    d = fr(c, this.__takeCount__);
                  if (!r || (!n && i == c && d == c))
                    return ui(e, this.__actions__);
                  var f = [];
                  e: for (; c-- && p < d; ) {
                    for (var g = -1, y = e[(u += t)]; ++g < l; ) {
                      var m = h[g],
                        v = m.iteratee,
                        w = m.type,
                        b = v(y);
                      if (2 == w) y = b;
                      else if (!b) {
                        if (1 == w) continue e;
                        break e;
                      }
                    }
                    f[p++] = y;
                  }
                  return f;
                }),
                (Ur.prototype.at = ho),
                (Ur.prototype.chain = function () {
                  return co(this);
                }),
                (Ur.prototype.commit = function () {
                  return new qr(this.value(), this.__chain__);
                }),
                (Ur.prototype.next = function () {
                  this.__values__ === r && (this.__values__ = ua(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? r : this.__values__[this.__index__++],
                  };
                }),
                (Ur.prototype.plant = function (e) {
                  for (var t, n = this; n instanceof $r; ) {
                    var i = Us(n);
                    (i.__index__ = 0),
                      (i.__values__ = r),
                      t ? (s.__wrapped__ = i) : (t = i);
                    var s = i;
                    n = n.__wrapped__;
                  }
                  return (s.__wrapped__ = e), t;
                }),
                (Ur.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof Lr) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new Lr(this)),
                      (t = t.reverse()).__actions__.push({
                        func: uo,
                        args: [Qs],
                        thisArg: r,
                      }),
                      new qr(t, this.__chain__)
                    );
                  }
                  return this.thru(Qs);
                }),
                (Ur.prototype.toJSON =
                  Ur.prototype.valueOf =
                  Ur.prototype.value =
                    function () {
                      return ui(this.__wrapped__, this.__actions__);
                    }),
                (Ur.prototype.first = Ur.prototype.head),
                Qe &&
                  (Ur.prototype[Qe] = function () {
                    return this;
                  }),
                Ur
              );
            })();
          lt ? (((lt.exports = hr)._ = hr), (ht._ = hr)) : (ut._ = hr);
        }).call(Ai);
      })(ji, ji.exports);
      var Di = Object.defineProperty,
        Ui = Object.defineProperties,
        ki = Object.getOwnPropertyDescriptors,
        $i = Object.getOwnPropertySymbols,
        qi = Object.prototype.hasOwnProperty,
        Li = Object.prototype.propertyIsEnumerable,
        Mi = (e, t, r) =>
          t in e
            ? Di(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        zi = (e, t) => {
          for (var r in t || (t = {})) qi.call(t, r) && Mi(e, r, t[r]);
          if ($i) for (var r of $i(t)) Li.call(t, r) && Mi(e, r, t[r]);
          return e;
        },
        Vi = (e, t) => Ui(e, ki(t));
      function Ki(e, t, r) {
        let n;
        const i = Wi(e);
        return (
          t.rpcMap && (n = t.rpcMap[i]),
          n ||
            (n = `https://rpc.walletconnect.com/v1?chainId=eip155:${i}&projectId=${r}`),
          n
        );
      }
      function Wi(e) {
        return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e);
      }
      function Fi(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function Hi(e) {
        var t, r, n, i;
        const s = {};
        if (
          ((o = e),
          Object.getPrototypeOf(o) !== Object.prototype ||
            !Object.keys(o).length)
        )
          return s;
        var o;
        for (const [o, a] of Object.entries(e)) {
          const e = Ii(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            h = a.rpcMap || {},
            l = Si(o);
          s[l] = Vi(zi(zi({}, s[l]), a), {
            chains: Ei(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: Ei(c, null == (r = s[l]) ? void 0 : r.methods),
            events: Ei(u, null == (n = s[l]) ? void 0 : n.events),
            rpcMap: zi(zi({}, h), null == (i = s[l]) ? void 0 : i.rpcMap),
          });
        }
        return s;
      }
      function Bi(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function Ji(e) {
        const t = {};
        for (const [r, n] of Object.entries(e)) {
          const e = n.methods || [],
            i = n.events || [],
            s = n.accounts || [],
            o = Ii(r) ? [r] : n.chains ? n.chains : Fi(n.accounts);
          t[r] = { chains: o, methods: e, events: i, accounts: s };
        }
        return t;
      }
      const Gi = {},
        Qi = (e) => Gi[e],
        Yi = (e, t) => {
          Gi[e] = t;
        };
      class Zi {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || Ki(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Ki(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      class Xi {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          const r = Wi(e);
          if (!this.httpProviders[r]) {
            const e =
              t ||
              Ki(
                `${this.name}:${r}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!e) throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, e);
          }
          (this.chainId = r), this.events.emit(Ti, `${this.name}:${r}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          const r =
            t ||
            Ki(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.k(r, Qi("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = Wi(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let n = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          n = n.startsWith("0x") ? n : `0x${n}`;
          const i = parseInt(n, 16);
          if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                `Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`,
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: n }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${i}`);
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class es {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              Ki(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Ki(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      class ts {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r =
              t ||
              Ki(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Ki(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      class rs {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || this.getCardanoRPCUrl(e);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const r = this.getCardanoRPCUrl(t);
              e[t] = this.createHttpProvider(t, r);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || this.getCardanoRPCUrl(e);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      class ns {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              Ki(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Ki(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      class is {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = Qi("events")),
            (this.client = Qi("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              Ki(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(Ti, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Ki(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nt.r(new Ri.Z(r, Qi("disableProviderPing")));
        }
      }
      var ss = Object.defineProperty,
        os = Object.defineProperties,
        as = Object.getOwnPropertyDescriptors,
        cs = Object.getOwnPropertySymbols,
        us = Object.prototype.hasOwnProperty,
        hs = Object.prototype.propertyIsEnumerable,
        ls = (e, t, r) =>
          t in e
            ? ss(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ps = (e, t) => {
          for (var r in t || (t = {})) us.call(t, r) && ls(e, r, t[r]);
          if (cs) for (var r of cs(t)) hs.call(t, r) && ls(e, r, t[r]);
          return e;
        },
        ds = (e, t) => os(e, as(t));
      class fs {
        constructor(e) {
          (this.events = new (i())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              typeof e?.logger < "u" && "string" != typeof e?.logger
                ? e.logger
                : (0, m.pino)(
                    (0, m.getDefaultLoggerOptions)({ level: e?.logger || Ci }),
                  )),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          const t = new fs(e);
          return await t.initialize(), t;
        }
        async request(e, t) {
          const [r, n] = this.validateChain(t);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: ps({}, e),
            chainId: `${r}:${n}`,
            topic: this.session.topic,
          });
        }
        sendAsync(e, t, r) {
          this.request(e, r)
            .then((e) => t(null, e))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: Oi("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt)
              throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw new Error("Max auto pairing attempts reached");
            const { uri: r, approval: n } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await n()
                .then((e) => {
                  (this.session = e),
                    this.namespaces ||
                      ((this.namespaces = Ji(e.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((e) => {
                  if (e.message !== ti) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [r, n] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(n, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          const t = this.client.pairing.getAll();
          if (Ni(t)) {
            for (const r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic,
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            const e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e],
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await _i.init({
              logger: this.providerOpts.logger || Ci,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()",
            );
          const e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => Si(e))),
          ];
          Yi("client", this.client),
            Yi("events", this.events),
            Yi("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e),
                  );
                  if (!r.length) return [];
                  const n = [];
                  return (
                    r.forEach((e) => {
                      const r = t.namespaces[e].accounts;
                      n.push(...r);
                    }),
                    n
                  );
                })(e, this.session),
                r = Fi(t),
                n = (function (e = {}, t = {}) {
                  const r = Hi(e),
                    n = Hi(t);
                  return ji.exports.merge(r, n);
                })(this.namespaces, this.optionalNamespaces),
                i = ds(ps({}, n[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new Xi({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new es({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new ts({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new Zi({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new rs({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new ns({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new is({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              const { params: t } = e,
                { event: r } = t;
              if ("accountsChanged" === r.name) {
                const e = r.data;
                e && Ni(e) && this.events.emit("accountsChanged", e.map(Bi));
              } else
                "chainChanged" === r.name
                  ? this.onChainChanged(t.chainId)
                  : this.events.emit(r.name, r.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r;
              const { namespaces: n } = t,
                i = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = ds(ps({}, i), { namespaces: n })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  ds(ps({}, Oi("USER_DISCONNECTED")), { data: e.topic }),
                );
            }),
            this.on(Ti, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e])
            throw new Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e],
            );
          });
        }
        setNamespaces(e) {
          const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: n,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = n),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", r);
        }
        validateChain(e) {
          const [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => Si(e))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`,
            );
          if (t && r) return [t, r];
          const n = Si(Object.keys(this.namespaces)[0]);
          return [n, this.rpcProviders[n].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          var r;
          if (!this.namespaces) return;
          const [n, i] = this.validateChain(e);
          t || this.getProvider(n).setDefaultChain(i),
            ((null != (r = this.namespaces[n])
              ? r
              : this.namespaces[`${n}:${i}`]
            ).defaultChain = i),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", i);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${xi}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${xi}/${e}`);
        }
      }
      const gs = fs,
        ys = ["eth_sendTransaction", "personal_sign"],
        ms = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        vs = ["chainChanged", "accountsChanged"],
        ws = ["message", "disconnect", "connect"];
      var bs = Object.defineProperty,
        _s = Object.defineProperties,
        Es = Object.getOwnPropertyDescriptors,
        Is = Object.getOwnPropertySymbols,
        Ss = Object.prototype.hasOwnProperty,
        Ps = Object.prototype.propertyIsEnumerable,
        Os = (e, t, r) =>
          t in e
            ? bs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ns = (e, t) => {
          for (var r in t || (t = {})) Ss.call(t, r) && Os(e, r, t[r]);
          if (Is) for (var r of Is(t)) Ps.call(t, r) && Os(e, r, t[r]);
          return e;
        },
        Rs = (e, t) => _s(e, Es(t));
      function Cs(e) {
        return Number(e[0].split(":")[1]);
      }
      function xs(e) {
        return `0x${e.toString(16)}`;
      }
      class Ts {
        constructor() {
          (this.events = new n.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          const t = new Ts();
          return await t.initialize(e), t;
        }
        async request(e) {
          return await this.signer.request(e, this.formatChainId(this.chainId));
        }
        sendAsync(e, t) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          const { required: t, optional: r } = (function (e) {
            const {
              chains: t,
              optionalChains: r,
              methods: n,
              optionalMethods: i,
              events: s,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!f(t)) throw new Error("Invalid chains");
            const c = {
                chains: t,
                methods: n || ys,
                events: s || vs,
                rpcMap: Ns({}, t.length ? { [Cs(t)]: a[Cs(t)] } : {}),
              },
              u = s?.filter((e) => !vs.includes(e)),
              h = n?.filter((e) => !ys.includes(e));
            if (
              !(
                r ||
                o ||
                i ||
                (null != u && u.length) ||
                (null != h && h.length)
              )
            )
              return { required: t.length ? c : void 0 };
            const l = {
              chains: [
                ...new Set(
                  (u?.length && h?.length) || !r ? c.chains.concat(r || []) : r,
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != i && i.length ? i : ms)),
              ],
              events: [...new Set(c.events.concat(o || ws))],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? l : void 0,
            };
          })(this.rpc);
          try {
            const n = await new Promise(async (n, i) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    !e.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      i(
                        new Error(
                          "Connection request reset. Please try again.",
                        ),
                      ));
                  })),
                await this.signer
                  .connect(
                    Rs(
                      Ns(
                        { namespaces: Ns({}, t && { [this.namespace]: t }) },
                        r && { optionalNamespaces: { [this.namespace]: r } },
                      ),
                      { pairingTopic: e?.pairingTopic },
                    ),
                  )
                  .then((e) => {
                    n(e);
                  })
                  .catch((e) => {
                    i(new Error(e.message));
                  });
            });
            if (!n) return;
            this.setChainIds(this.rpc.chains);
            const i = (function (e, t = []) {
              const r = [];
              return (
                Object.keys(e).forEach((n) => {
                  if (t.length && !t.includes(n)) return;
                  const i = e[n];
                  r.push(...i.accounts);
                }),
                r
              );
            })(n.namespaces, [this.namespace]);
            this.setAccounts(i),
              this.events.emit("connect", { chainId: xs(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            const { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
                ? this.setChainId(this.formatChainId(r.data))
                : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              const t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", xs(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Rs(
                    Ns(
                      {},
                      (function (e, t) {
                        const { message: r, code: n } = d[e];
                        return { message: t ? `${r} ${t}` : r, code: n };
                      })("USER_DISCONNECTED"),
                    ),
                    { data: e.topic, name: "USER_DISCONNECTED" },
                  ),
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          const t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", xs(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          const [t, r, n] = e.split(":");
          return { chainId: `${t}:${r}`, address: n };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId,
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          const n = null != (t = e?.chains) ? t : [],
            i = null != (r = e?.optionalChains) ? r : [],
            s = n.concat(i);
          if (!s.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`",
            );
          const o = n.length ? e?.methods || ys : [],
            a = n.length ? e?.events || vs : [],
            c = e?.optionalMethods || [],
            u = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(s, e.projectId),
            l = e?.qrModalOptions || void 0;
          return {
            chains: n?.map((e) => this.formatChainId(e)),
            optionalChains: i.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: l,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          const r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? Cs(this.rpc.chains)
              : Cs(this.rpc.optionalChains)),
            (this.signer = await gs.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              const { WalletConnectModal: t } = await r
                .e(9343)
                .then(r.bind(r, 59343));
              e = t;
            } catch {
              throw new Error(
                "To use QR modal, please install @walletconnect/modal package",
              );
            }
            if (e)
              try {
                this.modal = new e(
                  Ns(
                    {
                      walletConnectVersion: 2,
                      projectId: this.rpc.projectId,
                      standaloneChains: this.rpc.chains,
                    },
                    this.rpc.qrModalOptions,
                  ),
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  new Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          const { chains: t, optionalChains: r, rpcMap: n } = e;
          t &&
            f(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
            })),
            r &&
              f(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          const e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`,
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId,
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
    },
    62116: (e, t) => {
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    304: (e, t, r) => {
      r(62116);
    },
    87283: (e, t, r) => {
      const n = r(70610),
        i = r(44020),
        s = r(80500),
        o = r(92806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function h(e, t) {
        return t.decode ? i(e) : e;
      }
      function l(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
            ? l(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map((t) => e[t])
            : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      h(r, e).includes(e.arrayFormatSeparator);
                  r = s ? h(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => h(t, e))
                      : null === r
                        ? r
                        : h(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? h(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => h(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                    t.arrayFormat,
                  )
                ? o
                : h(o, t)),
            r(h(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = f(r[e], t);
          else n[e] = f(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = l(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[", i, "]"].join("")]
                        : [
                            ...r,
                            [u(t, e), "[", u(i, e), "]=", u(n, e)].join(""),
                          ];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[]"].join("")]
                        : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), ":list="].join("")]
                        : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, u(t, e)]
                        : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                    ? u(r, t)
                    : Array.isArray(i)
                      ? 0 === i.length && "bracket-separator" === t.arrayFormat
                        ? u(r, t) + "[]"
                        : i.reduce(n(r), []).join("&")
                      : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(d(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: h(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let h = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (h = `#${r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier}`),
            `${n}${c}${h}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    72030: (e) => {
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object",
        );
      };
    },
    18495: (e, t) => {
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    20416: (e, t, r) => {
      t.D = void 0;
      const n = r(18495);
      t.D = function () {
        let e, t;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function r(...t) {
          const r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            const n = r[e],
              i = ["itemprop", "property", "name"]
                .map((e) => n.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (i.length && i) {
              const e = n.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        const i = (function () {
          let t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords",
          ),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName("link"),
              n = [];
            for (let e = 0; e < r.length; e++) {
              const i = r[e],
                s = i.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const e = i.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      const n = t.pathname.split("/");
                      n.pop(), (r += n.join("/") + "/" + e);
                    }
                    n.push(r);
                  } else if (0 === e.indexOf("//")) {
                    const r = t.protocol + e;
                    n.push(r);
                  } else n.push(e);
              }
            }
            return n;
          })(),
          name: i,
        };
      };
    },
    87338: (e, t, r) => {
      const n = r(70610),
        i = r(44020),
        s = r(80500),
        o = r(92806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function h(e, t) {
        return t.decode ? i(e) : e;
      }
      function l(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
            ? l(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map((t) => e[t])
            : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      h(r, e).includes(e.arrayFormatSeparator);
                  r = s ? h(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => h(t, e))
                      : null === r
                        ? r
                        : h(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? h(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => h(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                    t.arrayFormat,
                  )
                ? o
                : h(o, t)),
            r(h(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = f(r[e], t);
          else n[e] = f(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = l(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[", i, "]"].join("")]
                        : [
                            ...r,
                            [u(t, e), "[", u(i, e), "]=", u(n, e)].join(""),
                          ];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[]"].join("")]
                        : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), ":list="].join("")]
                        : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, u(t, e)]
                        : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                    ? u(r, t)
                    : Array.isArray(i)
                      ? 0 === i.length && "bracket-separator" === t.arrayFormat
                        ? u(r, t) + "[]"
                        : i.reduce(n(r), []).join("&")
                      : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(d(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: h(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let h = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (h = `#${r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier}`),
            `${n}${c}${h}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    3382: (e, t) => {
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    99982: (e, t, r) => {
      r(3382);
    },
    94543: (e, t, r) => {
      const n = r(70610),
        i = r(44020),
        s = r(80500),
        o = r(92806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function h(e, t) {
        return t.decode ? i(e) : e;
      }
      function l(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
            ? l(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map((t) => e[t])
            : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      h(r, e).includes(e.arrayFormatSeparator);
                  r = s ? h(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => h(t, e))
                      : null === r
                        ? r
                        : h(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? h(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => h(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                    t.arrayFormat,
                  )
                ? o
                : h(o, t)),
            r(h(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = f(r[e], t);
          else n[e] = f(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = l(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[", i, "]"].join("")]
                        : [
                            ...r,
                            [u(t, e), "[", u(i, e), "]=", u(n, e)].join(""),
                          ];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), "[]"].join("")]
                        : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, [u(t, e), ":list="].join("")]
                        : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                        ? [...r, u(t, e)]
                        : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                    ? u(r, t)
                    : Array.isArray(i)
                      ? 0 === i.length && "bracket-separator" === t.arrayFormat
                        ? u(r, t) + "[]"
                        : i.reduce(n(r), []).join("&")
                      : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(d(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: h(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let h = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (h = `#${r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier}`),
            `${n}${c}${h}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
  },
]);
