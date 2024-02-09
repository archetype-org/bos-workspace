"use strict";
(self.webpackChunkbos_workspace_gateway =
  self.webpackChunkbos_workspace_gateway || []).push([
  [5259],
  {
    15259: (e, t, o) => {
      o.r(t), o.d(t, { WcmModal: () => et, WcmQrCode: () => ne }), o(77898);
      var r = o(33692),
        l = o(8922),
        a = o(15713),
        i = o(99662),
        n = o(39158),
        c = (o(57935), o(30043), o(83057)),
        s = o(22928),
        d = o(4213),
        m = o(30577),
        w = o(92592),
        h = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        v = (e, t, o) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[t] = o),
        b = (e, t) => {
          for (var o in t || (t = {})) g.call(t, o) && v(e, o, t[o]);
          if (p) for (var o of p(t)) u.call(t, o) && v(e, o, t[o]);
          return e;
        };
      const f = {
          getPreset: (e) =>
            ({
              "--wcm-accent-color": "#3396FF",
              "--wcm-accent-fill-color": "#FFFFFF",
              "--wcm-z-index": "89",
              "--wcm-background-color": "#3396FF",
              "--wcm-background-border-radius": "8px",
              "--wcm-container-border-radius": "30px",
              "--wcm-wallet-icon-border-radius": "15px",
              "--wcm-wallet-icon-large-border-radius": "30px",
              "--wcm-wallet-icon-small-border-radius": "7px",
              "--wcm-input-border-radius": "28px",
              "--wcm-button-border-radius": "10px",
              "--wcm-notification-border-radius": "36px",
              "--wcm-secondary-button-border-radius": "28px",
              "--wcm-icon-button-border-radius": "50%",
              "--wcm-button-hover-highlight-border-radius": "10px",
              "--wcm-text-big-bold-size": "20px",
              "--wcm-text-big-bold-weight": "600",
              "--wcm-text-big-bold-line-height": "24px",
              "--wcm-text-big-bold-letter-spacing": "-0.03em",
              "--wcm-text-big-bold-text-transform": "none",
              "--wcm-text-xsmall-bold-size": "10px",
              "--wcm-text-xsmall-bold-weight": "700",
              "--wcm-text-xsmall-bold-line-height": "12px",
              "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
              "--wcm-text-xsmall-bold-text-transform": "uppercase",
              "--wcm-text-xsmall-regular-size": "12px",
              "--wcm-text-xsmall-regular-weight": "600",
              "--wcm-text-xsmall-regular-line-height": "14px",
              "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
              "--wcm-text-xsmall-regular-text-transform": "none",
              "--wcm-text-small-thin-size": "14px",
              "--wcm-text-small-thin-weight": "500",
              "--wcm-text-small-thin-line-height": "16px",
              "--wcm-text-small-thin-letter-spacing": "-0.03em",
              "--wcm-text-small-thin-text-transform": "none",
              "--wcm-text-small-regular-size": "14px",
              "--wcm-text-small-regular-weight": "600",
              "--wcm-text-small-regular-line-height": "16px",
              "--wcm-text-small-regular-letter-spacing": "-0.03em",
              "--wcm-text-small-regular-text-transform": "none",
              "--wcm-text-medium-regular-size": "16px",
              "--wcm-text-medium-regular-weight": "600",
              "--wcm-text-medium-regular-line-height": "20px",
              "--wcm-text-medium-regular-letter-spacing": "-0.03em",
              "--wcm-text-medium-regular-text-transform": "none",
              "--wcm-font-family":
                "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
              "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
              "--wcm-success-color": "rgb(38,181,98)",
              "--wcm-error-color": "rgb(242, 90, 103)",
              "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
              "--wcm-overlay-backdrop-filter": "none",
            })[e],
          setTheme() {
            const e = document.querySelector(":root"),
              { themeVariables: t } = s.ThemeCtrl.state;
            if (e) {
              const o = b(
                b(
                  b(
                    {},
                    (function () {
                      var e;
                      const t = {
                        light: {
                          foreground: {
                            1: "rgb(20,20,20)",
                            2: "rgb(121,134,134)",
                            3: "rgb(158,169,169)",
                          },
                          background: {
                            1: "rgb(255,255,255)",
                            2: "rgb(241,243,243)",
                            3: "rgb(228,231,231)",
                          },
                          overlay: "rgba(0,0,0,0.1)",
                        },
                        dark: {
                          foreground: {
                            1: "rgb(228,231,231)",
                            2: "rgb(148,158,158)",
                            3: "rgb(110,119,119)",
                          },
                          background: {
                            1: "rgb(20,20,20)",
                            2: "rgb(39,42,42)",
                            3: "rgb(59,64,64)",
                          },
                          overlay: "rgba(255,255,255,0.1)",
                        },
                      }[null != (e = s.ThemeCtrl.state.themeMode) ? e : "dark"];
                      return {
                        "--wcm-color-fg-1": t.foreground[1],
                        "--wcm-color-fg-2": t.foreground[2],
                        "--wcm-color-fg-3": t.foreground[3],
                        "--wcm-color-bg-1": t.background[1],
                        "--wcm-color-bg-2": t.background[2],
                        "--wcm-color-bg-3": t.background[3],
                        "--wcm-color-overlay": t.overlay,
                      };
                    })(),
                  ),
                  {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family":
                      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings":
                      "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none",
                  },
                ),
                t,
              );
              Object.entries(o).forEach(([t, o]) => e.style.setProperty(t, o));
            }
          },
          globalCss: l.iv`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
        },
        x = l.iv`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
      var y = Object.defineProperty,
        C = Object.getOwnPropertyDescriptor,
        k = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? C(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && y(t, o, a), a;
        };
      let O = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          const e = {
            "wcm-icon-left": void 0 !== this.iconLeft,
            "wcm-icon-right": void 0 !== this.iconRight,
            "wcm-ghost": "ghost" === this.variant,
            "wcm-outline": "outline" === this.variant,
          };
          let t = "inverse";
          return (
            "ghost" === this.variant && (t = "secondary"),
            "outline" === this.variant && (t = "accent"),
            l.dy`<button class="${(0, c.$)(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${this.iconRight}</button>`
          );
        }
      };
      (O.styles = [f.globalCss, x]),
        k([(0, i.C)({ type: Boolean })], O.prototype, "disabled", 2),
        k([(0, i.C)()], O.prototype, "iconLeft", 2),
        k([(0, i.C)()], O.prototype, "iconRight", 2),
        k([(0, i.C)()], O.prototype, "onClick", 2),
        k([(0, i.C)()], O.prototype, "variant", 2),
        (O = k([(0, a.M)("wcm-button")], O));
      const $ = l.iv`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
      var E = Object.defineProperty,
        I = Object.getOwnPropertyDescriptor,
        M = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? I(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && E(t, o, a), a;
        };
      let A = class extends l.oi {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          const e = { "wcm-secondary": "secondary" === this.variant };
          return l.dy`<button ?disabled="${this.disabled}" class="${(0, c.$)(e)}"><slot></slot></button>`;
        }
      };
      (A.styles = [f.globalCss, $]),
        M([(0, i.C)({ type: Boolean })], A.prototype, "disabled", 2),
        M([(0, i.C)()], A.prototype, "variant", 2),
        (A = M([(0, a.M)("wcm-button-big")], A));
      const P = l.iv`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let W = class extends l.oi {
        render() {
          return l.dy`<div><slot></slot></div>`;
        }
      };
      (W.styles = [f.globalCss, P]),
        (W = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-info-footer")], W));
      const L = {
          CROSS_ICON: r.YP`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: r.YP`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: r.YP`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: r.YP`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: r.YP`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: r.YP`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: r.YP`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: r.YP`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: r.YP`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: r.YP`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: r.YP`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: r.YP`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: r.YP`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: r.YP`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: r.YP`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          SEARCH_ICON: r.YP`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          WALLET_PLACEHOLDER: r.YP`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          GLOBE_ICON: r.YP`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        R = l.iv`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let T = class extends l.oi {
        render() {
          return l.dy`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${L.WALLET_CONNECT_LOGO} <button @click="${s.jb.close}">${L.CROSS_ICON}</button></div>`;
        }
      };
      (T.styles = [f.globalCss, R]),
        (T = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-backcard")], T));
      const j = l.iv`main{padding:20px;padding-top:0;width:100%}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let _ = class extends l.oi {
        render() {
          return l.dy`<main><slot></slot></main>`;
        }
      };
      (_.styles = [f.globalCss, j]),
        (_ = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-content")], _));
      const D = l.iv`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let z = class extends l.oi {
        render() {
          return l.dy`<footer><slot></slot></footer>`;
        }
      };
      (z.styles = [f.globalCss, D]),
        (z = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-footer")], z));
      const N = l.iv`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
      var S = Object.defineProperty,
        Z = Object.getOwnPropertyDescriptor,
        B = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Z(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && S(t, o, a), a;
        };
      let H = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return l.dy`<button class="wcm-back-btn" @click="${s.AV.goBack}">${L.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return l.dy`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          const e = { "wcm-border": this.border },
            t = s.AV.state.history.length > 1,
            o = this.title
              ? l.dy`<wcm-text variant="big-bold">${this.title}</wcm-text>`
              : l.dy`<slot></slot>`;
          return l.dy`<header class="${(0, c.$)(e)}">${t ? this.backBtnTemplate() : null} ${o} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (H.styles = [f.globalCss, N]),
        B([(0, i.C)()], H.prototype, "title", 2),
        B([(0, i.C)()], H.prototype, "onAction", 2),
        B([(0, i.C)()], H.prototype, "actionIcon", 2),
        B([(0, i.C)({ type: Boolean })], H.prototype, "border", 2),
        (H = B([(0, a.M)("wcm-modal-header")], H));
      const U = {
          MOBILE_BREAKPOINT: 600,
          WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          getShadowRootElement(e, t) {
            const o = e.renderRoot.querySelector(t);
            if (!o) throw new Error(`${t} not found`);
            return o;
          },
          getWalletIcon({ id: e, image_id: t }) {
            const { walletImages: o } = s.ConfigCtrl.state;
            return null != o && o[e]
              ? o[e]
              : t
                ? s.ExplorerCtrl.getWalletImageUrl(t)
                : "";
          },
          getWalletName: (e, t = !1) =>
            t && e.length > 8 ? `${e.substring(0, 8)}..` : e,
          isMobileAnimation: () => window.innerWidth <= U.MOBILE_BREAKPOINT,
          async preloadImage(e) {
            const t = new Promise((t, o) => {
              const r = new Image();
              (r.onload = t),
                (r.onerror = o),
                (r.crossOrigin = "anonymous"),
                (r.src = e);
            });
            return Promise.race([t, s.zv.wait(3e3)]);
          },
          getErrorMessage: (e) =>
            e instanceof Error ? e.message : "Unknown Error",
          debounce(e, t = 500) {
            let o;
            return (...r) => {
              o && clearTimeout(o),
                (o = setTimeout(function () {
                  e(...r);
                }, t));
            };
          },
          handleMobileLinking(e) {
            const { walletConnectUri: t } = s.OptionsCtrl.state,
              { mobile: o, name: r } = e,
              l = o?.native,
              a = o?.universal;
            U.setRecentWallet(e),
              t &&
                (function (e) {
                  let t = "";
                  l
                    ? (t = s.zv.formatUniversalUrl(l, e, r))
                    : a && (t = s.zv.formatNativeUrl(a, e, r)),
                    s.zv.openHref(t, "_self");
                })(t);
          },
          handleAndroidLinking() {
            const { walletConnectUri: e } = s.OptionsCtrl.state;
            e &&
              (s.zv.setWalletConnectAndroidDeepLink(e),
              s.zv.openHref(e, "_self"));
          },
          async handleUriCopy() {
            const { walletConnectUri: e } = s.OptionsCtrl.state;
            if (e)
              try {
                await navigator.clipboard.writeText(e),
                  s.ToastCtrl.openToast("Link copied", "success");
              } catch {
                s.ToastCtrl.openToast("Failed to copy", "error");
              }
          },
          getCustomImageUrls() {
            const { walletImages: e } = s.ConfigCtrl.state,
              t = Object.values(e ?? {});
            return Object.values(t);
          },
          truncate: (e, t = 8) =>
            e.length <= t
              ? e
              : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`,
          setRecentWallet(e) {
            try {
              localStorage.setItem(U.WCM_RECENT_WALLET_DATA, JSON.stringify(e));
            } catch {
              console.info("Unable to set recent wallet");
            }
          },
          getRecentWallet() {
            try {
              const e = localStorage.getItem(U.WCM_RECENT_WALLET_DATA);
              return e ? JSON.parse(e) : void 0;
            } catch {
              console.info("Unable to get recent wallet");
            }
          },
          caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
          openWalletExplorerUrl() {
            s.zv.openHref(U.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            const { desktop: e, mobile: t } = s.zv.getWalletRouterData(),
              o = Boolean(e?.native),
              r = Boolean(e?.universal);
            return {
              isDesktop: o,
              isMobile: Boolean(t?.native) || Boolean(t?.universal),
              isWeb: r,
            };
          },
          goToConnectingView(e) {
            s.AV.setData({ Wallet: e });
            const t = s.zv.isMobile(),
              {
                isDesktop: o,
                isWeb: r,
                isMobile: l,
              } = U.getCachedRouterWalletPlatforms();
            t
              ? l
                ? s.AV.push("MobileConnecting")
                : r
                  ? s.AV.push("WebConnecting")
                  : s.AV.push("InstallWallet")
              : o
                ? s.AV.push("DesktopConnecting")
                : r
                  ? s.AV.push("WebConnecting")
                  : l
                    ? s.AV.push("MobileQrcodeConnecting")
                    : s.AV.push("InstallWallet");
          },
        },
        V = l.iv`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
      var F = Object.defineProperty,
        Y = Object.getOwnPropertyDescriptor,
        q = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Y(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && F(t, o, a), a;
        };
      let Q = class extends l.oi {
        constructor() {
          super(),
            (this.view = s.AV.state.view),
            (this.prevView = s.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = s.AV.subscribe((e) => {
              this.view !== e.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([e]) => {
            const t = `${e.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              (0, d.j)(
                this.routerEl,
                { height: [this.oldHeight, t] },
                { duration: 0.2 },
              ),
              (this.oldHeight = t);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var e, t;
          null == (e = this.unsubscribe) || e.call(this),
            null == (t = this.resizeObserver) || t.disconnect();
        }
        get routerEl() {
          return U.getShadowRootElement(this, ".wcm-router");
        }
        get contentEl() {
          return U.getShadowRootElement(this, ".wcm-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return l.dy`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
            case "DesktopConnecting":
              return l.dy`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
            case "MobileConnecting":
              return l.dy`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
            case "WebConnecting":
              return l.dy`<wcm-web-connecting-view></wcm-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return l.dy`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
            case "WalletExplorer":
              return l.dy`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
            case "Qrcode":
              return l.dy`<wcm-qrcode-view></wcm-qrcode-view>`;
            case "InstallWallet":
              return l.dy`<wcm-install-wallet-view></wcm-install-wallet-view>`;
            default:
              return l.dy`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await (0, d.j)(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 },
          ).finished,
            (this.view = s.AV.state.view),
            (0, d.j)(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 },
            );
        }
        render() {
          return l.dy`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (Q.styles = [f.globalCss, V]),
        q([(0, n.S)()], Q.prototype, "view", 2),
        q([(0, n.S)()], Q.prototype, "prevView", 2),
        (Q = q([(0, a.M)("wcm-modal-router")], Q));
      const K = l.iv`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
      var G = Object.defineProperty,
        X = Object.getOwnPropertyDescriptor,
        J = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? X(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && G(t, o, a), a;
        };
      let ee = class extends l.oi {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = s.ToastCtrl.subscribe((e) => {
              e.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => s.ToastCtrl.closeToast(),
                    2200,
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribe) || e.call(this),
            clearTimeout(this.timeout),
            s.ToastCtrl.closeToast();
        }
        render() {
          const { message: e, variant: t } = s.ToastCtrl.state,
            o = { "wcm-success": "success" === t, "wcm-error": "error" === t };
          return this.open
            ? l.dy`<div class="${(0, c.$)(o)}">${"success" === t ? L.CHECKMARK_ICON : null} ${"error" === t ? L.CROSS_ICON : null}<wcm-text variant="small-regular">${e}</wcm-text></div>`
            : null;
        }
      };
      function te(e, t, o) {
        return e !== t && (e - t < 0 ? t - e : e - t) <= o + 0.1;
      }
      (ee.styles = [f.globalCss, K]),
        J([(0, n.S)()], ee.prototype, "open", 2),
        (ee = J([(0, a.M)("wcm-modal-toast")], ee));
      const oe = {
          generate(e, t, o) {
            const r = "#141414",
              a = [],
              i = (function (e, t) {
                const o = Array.prototype.slice.call(
                    w.create(e, { errorCorrectionLevel: "Q" }).modules.data,
                    0,
                  ),
                  r = Math.sqrt(o.length);
                return o.reduce(
                  (e, t, o) =>
                    (o % r == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
                  [],
                );
              })(e),
              n = t / i.length,
              c = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            c.forEach(({ x: e, y: t }) => {
              const o = (i.length - 7) * n * e,
                s = (i.length - 7) * n * t;
              for (let e = 0; e < c.length; e += 1) {
                const t = n * (7 - 2 * e);
                a.push(
                  l.YP`<rect fill="${e % 2 == 0 ? r : "#ffffff"}" height="${t}" rx="${0.45 * t}" ry="${0.45 * t}" width="${t}" x="${o + n * e}" y="${s + n * e}">`,
                );
              }
            });
            const s = Math.floor((o + 25) / n),
              d = i.length / 2 - s / 2,
              m = i.length / 2 + s / 2 - 1,
              h = [];
            i.forEach((e, t) => {
              e.forEach((e, o) => {
                if (
                  i[t][o] &&
                  !(
                    (t < 7 && o < 7) ||
                    (t > i.length - 8 && o < 7) ||
                    (t < 7 && o > i.length - 8)
                  ) &&
                  !(t > d && t < m && o > d && o < m)
                ) {
                  const e = t * n + n / 2,
                    r = o * n + n / 2;
                  h.push([e, r]);
                }
              });
            });
            const p = {};
            return (
              h.forEach(([e, t]) => {
                p[e] ? p[e].push(t) : (p[e] = [t]);
              }),
              Object.entries(p)
                .map(([e, t]) => {
                  const o = t.filter((e) => t.every((t) => !te(e, t, n)));
                  return [Number(e), o];
                })
                .forEach(([e, t]) => {
                  t.forEach((t) => {
                    a.push(
                      l.YP`<circle cx="${e}" cy="${t}" fill="${r}" r="${n / 2.5}">`,
                    );
                  });
                }),
              Object.entries(p)
                .filter(([e, t]) => t.length > 1)
                .map(([e, t]) => {
                  const o = t.filter((e) => t.some((t) => te(e, t, n)));
                  return [Number(e), o];
                })
                .map(([e, t]) => {
                  t.sort((e, t) => (e < t ? -1 : 1));
                  const o = [];
                  for (const e of t) {
                    const t = o.find((t) => t.some((t) => te(e, t, n)));
                    t ? t.push(e) : o.push([e]);
                  }
                  return [e, o.map((e) => [e[0], e[e.length - 1]])];
                })
                .forEach(([e, t]) => {
                  t.forEach(([t, o]) => {
                    a.push(
                      l.YP`<line x1="${e}" x2="${e}" y1="${t}" y2="${o}" stroke="${r}" stroke-width="${n / 1.25}" stroke-linecap="round">`,
                    );
                  });
                }),
              a
            );
          },
        },
        re = l.iv`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
      var le = Object.defineProperty,
        ae = Object.getOwnPropertyDescriptor,
        ie = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? ae(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && le(t, o, a), a;
        };
      let ne = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          const e =
            "light" === s.ThemeCtrl.state.themeMode
              ? this.size
              : this.size - 36;
          return l.YP`<svg height="${e}" width="${e}">${oe.generate(this.uri, e, e / 4)}</svg>`;
        }
        render() {
          const e = { "wcm-dark": "dark" === s.ThemeCtrl.state.themeMode };
          return l.dy`<div style="${`width: ${this.size}px`}" class="${(0, c.$)(e)}">${this.walletId || this.imageUrl ? l.dy`<wcm-wallet-image walletId="${(0, m.o)(this.walletId)}" imageId="${(0, m.o)(this.imageId)}" imageUrl="${(0, m.o)(this.imageUrl)}"></wcm-wallet-image>` : L.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
        }
      };
      (ne.styles = [f.globalCss, re]),
        ie([(0, i.C)()], ne.prototype, "uri", 2),
        ie([(0, i.C)({ type: Number })], ne.prototype, "size", 2),
        ie([(0, i.C)()], ne.prototype, "imageId", 2),
        ie([(0, i.C)()], ne.prototype, "walletId", 2),
        ie([(0, i.C)()], ne.prototype, "imageUrl", 2),
        (ne = ie([(0, a.M)("wcm-qrcode")], ne));
      const ce = l.iv`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
      var se = Object.defineProperty,
        de = Object.getOwnPropertyDescriptor,
        me = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? de(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && se(t, o, a), a;
        };
      let we = class extends l.oi {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return l.dy`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${L.SEARCH_ICON}`;
        }
      };
      (we.styles = [f.globalCss, ce]),
        me([(0, i.C)()], we.prototype, "onChange", 2),
        (we = me([(0, a.M)("wcm-search-input")], we));
      const he = l.iv`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let pe = class extends l.oi {
        render() {
          return l.dy`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (pe.styles = [f.globalCss, he]),
        (pe = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-spinner")], pe));
      const ge = l.iv`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
      var ue = Object.defineProperty,
        ve = Object.getOwnPropertyDescriptor,
        be = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? ve(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && ue(t, o, a), a;
        };
      let fe = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          const e = {
            "wcm-big-bold": "big-bold" === this.variant,
            "wcm-medium-regular": "medium-regular" === this.variant,
            "wcm-small-regular": "small-regular" === this.variant,
            "wcm-small-thin": "small-thin" === this.variant,
            "wcm-xsmall-regular": "xsmall-regular" === this.variant,
            "wcm-xsmall-bold": "xsmall-bold" === this.variant,
            "wcm-color-primary": "primary" === this.color,
            "wcm-color-secondary": "secondary" === this.color,
            "wcm-color-tertiary": "tertiary" === this.color,
            "wcm-color-inverse": "inverse" === this.color,
            "wcm-color-accnt": "accent" === this.color,
            "wcm-color-error": "error" === this.color,
          };
          return l.dy`<span><slot class="${(0, c.$)(e)}"></slot></span>`;
        }
      };
      (fe.styles = [f.globalCss, ge]),
        be([(0, i.C)()], fe.prototype, "variant", 2),
        be([(0, i.C)()], fe.prototype, "color", 2),
        (fe = be([(0, a.M)("wcm-text")], fe));
      const xe = l.iv`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
      var ye = Object.defineProperty,
        Ce = Object.getOwnPropertyDescriptor,
        ke = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Ce(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && ye(t, o, a), a;
        };
      let Oe = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? l.dy`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
            : this.installed
              ? l.dy`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
              : null;
        }
        handleClick() {
          s.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var e;
          return l.dy`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${(0, m.o)(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null != (e = this.label) ? e : U.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (Oe.styles = [f.globalCss, xe]),
        ke([(0, i.C)()], Oe.prototype, "onClick", 2),
        ke([(0, i.C)()], Oe.prototype, "name", 2),
        ke([(0, i.C)()], Oe.prototype, "walletId", 2),
        ke([(0, i.C)()], Oe.prototype, "label", 2),
        ke([(0, i.C)()], Oe.prototype, "imageId", 2),
        ke([(0, i.C)({ type: Boolean })], Oe.prototype, "installed", 2),
        ke([(0, i.C)({ type: Boolean })], Oe.prototype, "recent", 2),
        (Oe = ke([(0, a.M)("wcm-wallet-button")], Oe));
      const $e = l.iv`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var Ee = Object.defineProperty,
        Ie = Object.getOwnPropertyDescriptor,
        Me = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Ie(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && Ee(t, o, a), a;
        };
      let Ae = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var e;
          const t =
            null != (e = this.imageUrl) && e.length
              ? this.imageUrl
              : U.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return l.dy`${t.length ? l.dy`<div><img crossorigin="anonymous" src="${t}" alt="${this.id}"></div>` : L.WALLET_PLACEHOLDER}`;
        }
      };
      (Ae.styles = [f.globalCss, $e]),
        Me([(0, i.C)()], Ae.prototype, "walletId", 2),
        Me([(0, i.C)()], Ae.prototype, "imageId", 2),
        Me([(0, i.C)()], Ae.prototype, "imageUrl", 2),
        (Ae = Me([(0, a.M)("wcm-wallet-image")], Ae));
      var Pe = Object.defineProperty,
        We = Object.getOwnPropertyDescriptor,
        Le = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? We(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && Pe(t, o, a), a;
        };
      let Re = class extends l.oi {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(e) {
          try {
            null != e &&
              e.length &&
              (await Promise.all(e.map(async (e) => U.preloadImage(e))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images", e);
          }
        }
        async preloadListings() {
          if (s.ConfigCtrl.state.enableExplorer) {
            await s.ExplorerCtrl.getRecomendedWallets(),
              s.OptionsCtrl.setIsDataLoaded(!0);
            const { recomendedWallets: e } = s.ExplorerCtrl.state,
              t = e.map((e) => U.getWalletIcon(e));
            await this.loadImages(t);
          } else s.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          const e = U.getCustomImageUrls();
          await this.loadImages(e);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (e) {
            console.error(e),
              s.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      Le([(0, n.S)()], Re.prototype, "preload", 2),
        (Re = Le([(0, a.M)("wcm-explorer-context")], Re));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Te = class extends l.oi {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            f.setTheme(),
            (this.unsubscribeTheme = s.ThemeCtrl.subscribe(f.setTheme));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeTheme) || e.call(this);
        }
      };
      Te = ((e, t, o, r) => {
        for (var l, a = t, i = e.length - 1; i >= 0; i--)
          (l = e[i]) && (a = l(a) || a);
        return a;
      })([(0, a.M)("wcm-theme-context")], Te);
      const je = l.iv`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let _e = class extends l.oi {
        onGoToQrcode() {
          s.AV.push("Qrcode");
        }
        render() {
          const { recomendedWallets: e } = s.ExplorerCtrl.state,
            t = [...e, ...e],
            o = 2 * s.zv.RECOMMENDED_WALLET_AMOUNT;
          return l.dy`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${L.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${L.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
            ...Array(o),
          ].map((e, o) => {
            const r = t[o % t.length];
            return r
              ? l.dy`<wcm-wallet-image walletId="${r.id}" imageId="${r.image_id}"></wcm-wallet-image>`
              : L.WALLET_PLACEHOLDER;
          })}</div><wcm-button-big @click="${U.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
        }
      };
      (_e.styles = [f.globalCss, je]),
        (_e = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-android-wallet-selection")], _e));
      const De = l.iv`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
      var ze = Object.defineProperty,
        Ne = Object.getOwnPropertyDescriptor,
        Se = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Ne(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && ze(t, o, a), a;
        };
      let Ze = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var e, t;
          const o =
            null !=
            (t =
              null == (e = s.ThemeCtrl.state.themeVariables)
                ? void 0
                : e["--wcm-wallet-icon-large-border-radius"])
              ? t
              : f.getPreset("--wcm-wallet-icon-large-border-radius");
          let r = 0;
          (r = o.includes("%") ? 0.88 * parseInt(o, 10) : parseInt(o, 10)),
            (r *= 1.17);
          const a = 317 - 1.57 * r,
            i = 425 - 1.8 * r;
          return l.dy`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${r}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${a}" stroke-dashoffset="${i}"></use></svg>`;
        }
        render() {
          const e = { "wcm-error": this.isError, "wcm-stale": this.isStale };
          return l.dy`<div class="${(0, c.$)(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${(0, m.o)(this.walletId)}" imageId="${(0, m.o)(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
        }
      };
      (Ze.styles = [f.globalCss, De]),
        Se([(0, i.C)()], Ze.prototype, "walletId", 2),
        Se([(0, i.C)()], Ze.prototype, "imageId", 2),
        Se([(0, i.C)({ type: Boolean })], Ze.prototype, "isError", 2),
        Se([(0, i.C)({ type: Boolean })], Ze.prototype, "isStale", 2),
        Se([(0, i.C)()], Ze.prototype, "label", 2),
        (Ze = Se([(0, a.M)("wcm-connector-waiting")], Ze));
      const Be = {
          manualWallets() {
            var e, t;
            const { mobileWallets: o, desktopWallets: r } = s.ConfigCtrl.state,
              l = null == (e = Be.recentWallet()) ? void 0 : e.id,
              a = s.zv.isMobile() ? o : r,
              i = a?.filter((e) => l !== e.id);
            return null !=
              (t = s.zv.isMobile()
                ? i?.map(({ id: e, name: t, links: o }) => ({
                    id: e,
                    name: t,
                    mobile: o,
                    links: o,
                  }))
                : i?.map(({ id: e, name: t, links: o }) => ({
                    id: e,
                    name: t,
                    desktop: o,
                    links: o,
                  })))
              ? t
              : [];
          },
          recentWallet: () => U.getRecentWallet(),
          recomendedWallets(e = !1) {
            var t;
            const o = e || null == (t = Be.recentWallet()) ? void 0 : t.id,
              { recomendedWallets: r } = s.ExplorerCtrl.state;
            return r.filter((e) => o !== e.id);
          },
        },
        He = {
          onConnecting(e) {
            U.goToConnectingView(e);
          },
          manualWalletsTemplate() {
            return Be.manualWallets().map(
              (e) =>
                l.dy`<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`,
            );
          },
          recomendedWalletsTemplate(e = !1) {
            return Be.recomendedWallets(e).map(
              (e) =>
                l.dy`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`,
            );
          },
          recentWalletTemplate() {
            const e = Be.recentWallet();
            if (e)
              return l.dy`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${(0, m.o)(e.image_id)}" .recent="${!0}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`;
          },
        },
        Ue = l.iv`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Ve = class extends l.oi {
        render() {
          const { explorerExcludedWalletIds: e, enableExplorer: t } =
              s.ConfigCtrl.state,
            o = "ALL" !== e && t,
            r = He.manualWalletsTemplate(),
            a = He.recomendedWalletsTemplate();
          let i = [He.recentWalletTemplate(), ...r, ...a];
          i = i.filter(Boolean);
          const n = i.length > 4 || o;
          let c = [];
          c = n ? i.slice(0, 3) : i;
          const d = Boolean(c.length);
          return l.dy`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${U.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${L.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${L.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${d ? l.dy`<wcm-modal-footer><div class="wcm-desktop-title">${L.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${c} ${n ? l.dy`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
        }
      };
      (Ve.styles = [f.globalCss, Ue]),
        (Ve = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-desktop-wallet-selection")], Ve));
      const Fe = l.iv`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Ye = class extends l.oi {
        render() {
          const { termsOfServiceUrl: e, privacyPolicyUrl: t } =
            s.ConfigCtrl.state;
          return e ?? t
            ? l.dy`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e ? l.dy`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && t ? "and" : null} ${t ? l.dy`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>`
            : null;
        }
      };
      (Ye.styles = [f.globalCss, Fe]),
        (Ye = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-legal-notice")], Ye));
      const qe = l.iv`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Qe = class extends l.oi {
        onQrcode() {
          s.AV.push("Qrcode");
        }
        render() {
          const { explorerExcludedWalletIds: e, enableExplorer: t } =
              s.ConfigCtrl.state,
            o = "ALL" !== e && t,
            r = He.manualWalletsTemplate(),
            a = He.recomendedWalletsTemplate();
          let i = [He.recentWalletTemplate(), ...r, ...a];
          i = i.filter(Boolean);
          const n = i.length > 8 || o;
          let c = [];
          c = n ? i.slice(0, 7) : i;
          const d = Boolean(c.length);
          return l.dy`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${L.QRCODE_ICON}"></wcm-modal-header>${d ? l.dy`<wcm-modal-content><div>${c} ${n ? l.dy`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
        }
      };
      (Qe.styles = [f.globalCss, qe]),
        (Qe = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-mobile-wallet-selection")], Qe));
      const Ke = l.iv`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
      var Ge = Object.defineProperty,
        Xe = Object.getOwnPropertyDescriptor,
        Je = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Xe(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && Ge(t, o, a), a;
        };
      let et = class extends l.oi {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = s.jb.subscribe((e) => {
              e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var e;
          null == (e = this.unsubscribeModal) || e.call(this);
        }
        get overlayEl() {
          return U.getShadowRootElement(this, ".wcm-overlay");
        }
        get containerEl() {
          return U.getShadowRootElement(this, ".wcm-container");
        }
        toggleBodyScroll(e) {
          if (document.querySelector("body"))
            if (e) {
              const e = document.getElementById("wcm-styles");
              e?.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>',
              );
        }
        onCloseModal(e) {
          e.target === e.currentTarget && s.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              const e = U.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                (0, d.j)(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 },
                ).finished,
                (0, d.j)(this.containerEl, e, { delay: 0.1, duration: 0.2 })
                  .finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          const e = U.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            (0, d.j)(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 })
              .finished,
            (0, d.j)(this.containerEl, e, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (e) => {
                var t;
                "Escape" === e.key
                  ? s.jb.close()
                  : "Tab" === e.key &&
                    ((null != (t = e.target) && t.tagName.includes("wcm-")) ||
                      this.containerEl.focus());
              },
              this.abortController,
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var e;
          null == (e = this.abortController) || e.abort(),
            (this.abortController = void 0);
        }
        render() {
          const e = { "wcm-overlay": !0, "wcm-active": this.active };
          return l.dy`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${(0, c.$)(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? l.dy`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
        }
      };
      (et.styles = [f.globalCss, Ke]),
        Je([(0, n.S)()], et.prototype, "open", 2),
        Je([(0, n.S)()], et.prototype, "active", 2),
        (et = Je([(0, a.M)("wcm-modal")], et));
      const tt = l.iv`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
      var ot = Object.defineProperty,
        rt = Object.getOwnPropertyDescriptor,
        lt = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? rt(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && ot(t, o, a), a;
        };
      let at = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          s.zv.isMobile()
            ? s.AV.replace("MobileConnecting")
            : s.AV.replace("MobileQrcodeConnecting");
        }
        onDesktop() {
          s.AV.replace("DesktopConnecting");
        }
        onWeb() {
          s.AV.replace("WebConnecting");
        }
        render() {
          return l.dy`<div>${this.isRetry ? l.dy`<slot></slot>` : null} ${this.isMobile ? l.dy`<wcm-button .onClick="${this.onMobile}" .iconLeft="${L.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? l.dy`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${L.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? l.dy`<wcm-button .onClick="${this.onWeb}" .iconLeft="${L.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
        }
      };
      (at.styles = [f.globalCss, tt]),
        lt([(0, i.C)({ type: Boolean })], at.prototype, "isMobile", 2),
        lt([(0, i.C)({ type: Boolean })], at.prototype, "isDesktop", 2),
        lt([(0, i.C)({ type: Boolean })], at.prototype, "isWeb", 2),
        lt([(0, i.C)({ type: Boolean })], at.prototype, "isRetry", 2),
        (at = lt([(0, a.M)("wcm-platform-selection")], at));
      const it = l.iv`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let nt = class extends l.oi {
        onClick() {
          s.AV.push("WalletExplorer");
        }
        render() {
          const { recomendedWallets: e } = s.ExplorerCtrl.state,
            t = [...e, ...Be.manualWallets()].reverse().slice(0, 4);
          return l.dy`<button @click="${this.onClick}"><div class="wcm-icons">${t.map(
            (e) => {
              const t = U.getWalletIcon(e);
              if (t) return l.dy`<img crossorigin="anonymous" src="${t}">`;
              const o = U.getWalletIcon({ id: e.id });
              return o
                ? l.dy`<img crossorigin="anonymous" src="${o}">`
                : L.WALLET_PLACEHOLDER;
            },
          )} ${[...Array(4 - t.length)].map(() => L.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
        }
      };
      (nt.styles = [f.globalCss, it]),
        (nt = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-view-all-wallets-button")], nt));
      const ct = l.iv`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var st = Object.defineProperty,
        dt = Object.getOwnPropertyDescriptor,
        mt = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? dt(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && st(t, o, a), a;
        };
      let wt = class extends l.oi {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            setTimeout(() => {
              const { walletConnectUri: e } = s.OptionsCtrl.state;
              this.uri = e;
            }, 0);
        }
        get overlayEl() {
          return U.getShadowRootElement(this, ".wcm-qr-container");
        }
        render() {
          return l.dy`<div class="wcm-qr-container">${this.uri ? l.dy`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${(0, m.o)(this.walletId)}" imageId="${(0, m.o)(this.imageId)}"></wcm-qrcode>` : l.dy`<wcm-spinner></wcm-spinner>`}</div>`;
        }
      };
      (wt.styles = [f.globalCss, ct]),
        mt([(0, i.C)()], wt.prototype, "walletId", 2),
        mt([(0, i.C)()], wt.prototype, "imageId", 2),
        mt([(0, n.S)()], wt.prototype, "uri", 2),
        (wt = mt([(0, a.M)("wcm-walletconnect-qr")], wt));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let ht = class extends l.oi {
        viewTemplate() {
          return s.zv.isAndroid()
            ? l.dy`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
            : s.zv.isMobile()
              ? l.dy`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
              : l.dy`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
        }
        render() {
          return l.dy`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
        }
      };
      (ht.styles = [f.globalCss]),
        (ht = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-connect-wallet-view")], ht));
      const pt = l.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var gt = Object.defineProperty,
        ut = Object.getOwnPropertyDescriptor,
        vt = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? ut(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && gt(t, o, a), a;
        };
      let bt = class extends l.oi {
        constructor() {
          super(), (this.isError = !1), this.openDesktopApp();
        }
        onFormatAndRedirect(e) {
          const { desktop: t, name: o } = s.zv.getWalletRouterData(),
            r = t?.native;
          if (r) {
            const t = s.zv.formatNativeUrl(r, e, o);
            s.zv.openHref(t, "_self");
          }
        }
        openDesktopApp() {
          const { walletConnectUri: e } = s.OptionsCtrl.state,
            t = s.zv.getWalletRouterData();
          U.setRecentWallet(t), e && this.onFormatAndRedirect(e);
        }
        render() {
          const { name: e, id: t, image_id: o } = s.zv.getWalletRouterData(),
            { isMobile: r, isWeb: a } = U.getCachedRouterWalletPlatforms();
          return l.dy`<wcm-modal-header title="${e}" .onAction="${U.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${(0, m.o)(o)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${r}" .isWeb="${a}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${L.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (bt.styles = [f.globalCss, pt]),
        vt([(0, n.S)()], bt.prototype, "isError", 2),
        (bt = vt([(0, a.M)("wcm-desktop-connecting-view")], bt));
      const ft = l.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let xt = class extends l.oi {
        onInstall(e) {
          e && s.zv.openHref(e, "_blank");
        }
        render() {
          const {
            name: e,
            id: t,
            image_id: o,
            homepage: r,
          } = s.zv.getWalletRouterData();
          return l.dy`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${(0, m.o)(o)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(r)}" .iconLeft="${L.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
        }
      };
      (xt.styles = [f.globalCss, ft]),
        (xt = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-install-wallet-view")], xt));
      const yt = l.iv`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
      var Ct = Object.defineProperty,
        kt = Object.getOwnPropertyDescriptor,
        Ot = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? kt(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && Ct(t, o, a), a;
        };
      let $t = class extends l.oi {
        constructor() {
          super(), (this.isError = !1), this.openMobileApp();
        }
        onFormatAndRedirect(e, t = !1) {
          const { mobile: o, name: r } = s.zv.getWalletRouterData(),
            l = o?.native,
            a = o?.universal;
          if (l && !t) {
            const t = s.zv.formatNativeUrl(l, e, r);
            s.zv.openHref(t, "_self");
          } else if (a) {
            const t = s.zv.formatUniversalUrl(a, e, r);
            s.zv.openHref(t, "_self");
          }
        }
        openMobileApp(e = !1) {
          const { walletConnectUri: t } = s.OptionsCtrl.state,
            o = s.zv.getWalletRouterData();
          U.setRecentWallet(o), t && this.onFormatAndRedirect(t, e);
        }
        onGoToAppStore(e) {
          e && s.zv.openHref(e, "_blank");
        }
        render() {
          const {
              name: e,
              id: t,
              image_id: o,
              app: r,
              mobile: a,
            } = s.zv.getWalletRouterData(),
            { isWeb: i } = U.getCachedRouterWalletPlatforms(),
            n = r?.ios,
            c = a?.universal;
          return l.dy`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${(0, m.o)(o)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${() => this.openMobileApp(!1)}" .iconRight="${L.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${c ? l.dy`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${(0, m.o)(o)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${L.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(n)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
        }
      };
      ($t.styles = [f.globalCss, yt]),
        Ot([(0, n.S)()], $t.prototype, "isError", 2),
        ($t = Ot([(0, a.M)("wcm-mobile-connecting-view")], $t));
      const Et = l.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let It = class extends l.oi {
        render() {
          const { name: e, id: t, image_id: o } = s.zv.getWalletRouterData(),
            { isDesktop: r, isWeb: a } = U.getCachedRouterWalletPlatforms();
          return l.dy`<wcm-modal-header title="${e}" .onAction="${U.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${(0, m.o)(o)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${r}" .isWeb="${a}"></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (It.styles = [f.globalCss, Et]),
        (It = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-mobile-qr-connecting-view")], It));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Mt = class extends l.oi {
        render() {
          return l.dy`<wcm-modal-header title="Scan the code" .onAction="${U.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
        }
      };
      (Mt.styles = [f.globalCss]),
        (Mt = ((e, t, o, r) => {
          for (var l, a = t, i = e.length - 1; i >= 0; i--)
            (l = e[i]) && (a = l(a) || a);
          return a;
        })([(0, a.M)("wcm-qrcode-view")], Mt));
      const At = l.iv`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var Pt = Object.defineProperty,
        Wt = Object.getOwnPropertyDescriptor,
        Lt = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? Wt(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && Pt(t, o, a), a;
        };
      let Rt = class extends l.oi {
        constructor() {
          super(...arguments),
            (this.loading = !s.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !s.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = U.debounce((e) => {
              e.length >= 1
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = e),
                  s.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  s.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var e;
          null == (e = this.intersectionObserver) || e.disconnect();
        }
        get placeholderEl() {
          return U.getShadowRootElement(this, ".wcm-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([e]) => {
            e.isIntersecting &&
              (!this.search || !this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          const { wallets: e, search: t } = s.ExplorerCtrl.state,
            { listings: o, total: r } = this.search ? t : e;
          return r <= 40 || o.length >= r;
        }
        async fetchWallets() {
          var e;
          const { wallets: t, search: o } = s.ExplorerCtrl.state,
            { listings: r, total: l, page: a } = this.search ? o : t;
          if (!this.endReached && (this.firstFetch || (l > 40 && r.length < l)))
            try {
              this.loading = !0;
              const t =
                  null == (e = s.OptionsCtrl.state.chains)
                    ? void 0
                    : e.join(","),
                { listings: o } = await s.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : a + 1,
                  entries: 40,
                  search: this.search,
                  version: 2,
                  chains: t,
                }),
                r = o.map((e) => U.getWalletIcon(e));
              await Promise.all([
                ...r.map(async (e) => U.preloadImage(e)),
                s.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (e) {
              console.error(e),
                s.ToastCtrl.openToast(U.getErrorMessage(e), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(e) {
          s.zv.isAndroid() ? U.handleMobileLinking(e) : U.goToConnectingView(e);
        }
        onSearchChange(e) {
          const { value: t } = e.target;
          this.searchDebounce(t);
        }
        render() {
          const { wallets: e, search: t } = s.ExplorerCtrl.state,
            { listings: o } = this.search ? t : e,
            r = this.loading && !o.length,
            a = this.search.length >= 3;
          let i = He.manualWalletsTemplate(),
            n = He.recomendedWalletsTemplate(!0);
          a &&
            ((i = i.filter(({ values: e }) =>
              U.caseSafeIncludes(e[0], this.search),
            )),
            (n = n.filter(({ values: e }) =>
              U.caseSafeIncludes(e[0], this.search),
            )));
          const d = !this.loading && !o.length && !n.length,
            m = {
              "wcm-loading": r,
              "wcm-end-reached": this.endReached || !this.loading,
              "wcm-empty": d,
            };
          return l.dy`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${(0, c.$)(m)}"><div class="wcm-grid">${r ? null : i} ${r ? null : n} ${r ? null : o.map((e) => l.dy`${e ? l.dy`<wcm-wallet-button imageId="${e.image_id}" name="${e.name}" walletId="${e.id}" .onClick="${() => this.onConnect(e)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${d ? l.dy`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!d && this.loading ? l.dy`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
        }
      };
      (Rt.styles = [f.globalCss, At]),
        Lt([(0, n.S)()], Rt.prototype, "loading", 2),
        Lt([(0, n.S)()], Rt.prototype, "firstFetch", 2),
        Lt([(0, n.S)()], Rt.prototype, "search", 2),
        Lt([(0, n.S)()], Rt.prototype, "endReached", 2),
        (Rt = Lt([(0, a.M)("wcm-wallet-explorer-view")], Rt));
      const Tt = l.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var jt = Object.defineProperty,
        _t = Object.getOwnPropertyDescriptor,
        Dt = (e, t, o, r) => {
          for (
            var l, a = r > 1 ? void 0 : r ? _t(t, o) : t, i = e.length - 1;
            i >= 0;
            i--
          )
            (l = e[i]) && (a = (r ? l(t, o, a) : l(a)) || a);
          return r && a && jt(t, o, a), a;
        };
      let zt = class extends l.oi {
        constructor() {
          super(), (this.isError = !1), this.openWebWallet();
        }
        onFormatAndRedirect(e) {
          const { desktop: t, name: o } = s.zv.getWalletRouterData(),
            r = t?.universal;
          if (r) {
            const t = s.zv.formatUniversalUrl(r, e, o);
            s.zv.openHref(t, "_blank");
          }
        }
        openWebWallet() {
          const { walletConnectUri: e } = s.OptionsCtrl.state,
            t = s.zv.getWalletRouterData();
          U.setRecentWallet(t), e && this.onFormatAndRedirect(e);
        }
        render() {
          const { name: e, id: t, image_id: o } = s.zv.getWalletRouterData(),
            { isMobile: r, isDesktop: a } = U.getCachedRouterWalletPlatforms(),
            i = s.zv.isMobile();
          return l.dy`<wcm-modal-header title="${e}" .onAction="${U.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${(0, m.o)(o)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${r}" .isDesktop="${!i && a}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${L.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (zt.styles = [f.globalCss, Tt]),
        Dt([(0, n.S)()], zt.prototype, "isError", 2),
        (zt = Dt([(0, a.M)("wcm-web-connecting-view")], zt));
    },
  },
]);
