var $e = Object.defineProperty;
var Ge = (c, e, t) => e in c ? $e(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var _ = (c, e, t) => Ge(c, typeof e != "symbol" ? e + "" : e, t);
var We;
(function(c) {
  c.csv = "text/csv", c.tsv = "text/tab-separated-values", c.plain = "text/plain";
})(We || (We = {}));
We.csv;
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qe(c) {
  if (c.__esModule) return c;
  var e = c.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(c).forEach(function(r) {
    var w = Object.getOwnPropertyDescriptor(c, r);
    Object.defineProperty(t, r, w.get ? w : {
      enumerable: !0,
      get: function() {
        return c[r];
      }
    });
  }), t;
}
var Ke = { exports: {} };
(function(c) {
  (function(e) {
    var t = I(), r = C(), w = W(), T = Y(), L = {
      // Default is to fail on error, no placeholder
      imagePlaceholder: void 0,
      // Default cache bust is false, it will use the cache
      cacheBust: !1
    }, q = {
      toSvg: te,
      toPng: Q,
      toJpeg: ce,
      toBlob: le,
      toPixelData: se,
      impl: {
        fontFaces: w,
        images: T,
        util: t,
        inliner: r,
        options: {}
      }
    };
    c.exports = q;
    function te(f, u) {
      return u = u || {}, de(u), Promise.resolve(f).then(function(p) {
        return fe(p, u.filter, !0);
      }).then(M).then(H).then(a).then(function(p) {
        return U(
          p,
          u.width || t.width(f),
          u.height || t.height(f)
        );
      });
      function a(p) {
        return u.bgcolor && (p.style.backgroundColor = u.bgcolor), u.width && (p.style.width = u.width + "px"), u.height && (p.style.height = u.height + "px"), u.style && Object.keys(u.style).forEach(function(b) {
          p.style[b] = u.style[b];
        }), p;
      }
    }
    function se(f, u) {
      return K(f, u || {}).then(function(a) {
        return a.getContext("2d").getImageData(
          0,
          0,
          t.width(f),
          t.height(f)
        ).data;
      });
    }
    function Q(f, u) {
      return K(f, u || {}).then(function(a) {
        return a.toDataURL();
      });
    }
    function ce(f, u) {
      return u = u || {}, K(f, u).then(function(a) {
        return a.toDataURL("image/jpeg", u.quality || 1);
      });
    }
    function le(f, u) {
      return K(f, u || {}).then(t.canvasToBlob);
    }
    function de(f) {
      typeof f.imagePlaceholder > "u" ? q.impl.options.imagePlaceholder = L.imagePlaceholder : q.impl.options.imagePlaceholder = f.imagePlaceholder, typeof f.cacheBust > "u" ? q.impl.options.cacheBust = L.cacheBust : q.impl.options.cacheBust = f.cacheBust;
    }
    function K(f, u) {
      return te(f, u).then(t.makeImage).then(t.delay(100)).then(function(p) {
        var b = a(f);
        return b.getContext("2d").drawImage(p, 0, 0), b;
      });
      function a(p) {
        var b = document.createElement("canvas");
        if (b.width = u.width || t.width(p), b.height = u.height || t.height(p), u.bgcolor) {
          var g = b.getContext("2d");
          g.fillStyle = u.bgcolor, g.fillRect(0, 0, b.width, b.height);
        }
        return b;
      }
    }
    function fe(f, u, a) {
      if (!a && u && !u(f)) return Promise.resolve();
      return Promise.resolve(f).then(p).then(function(y) {
        return b(f, y, u);
      }).then(function(y) {
        return g(f, y);
      });
      function p(y) {
        return y instanceof HTMLCanvasElement ? t.makeImage(y.toDataURL()) : y.cloneNode(!1);
      }
      function b(y, x, $) {
        var ae = y.childNodes;
        if (ae.length === 0) return Promise.resolve(x);
        return N(x, t.asArray(ae), $).then(function() {
          return x;
        });
        function N(J, ne, Z) {
          var he = Promise.resolve();
          return ne.forEach(function(pe) {
            he = he.then(function() {
              return fe(pe, Z);
            }).then(function(ue) {
              ue && J.appendChild(ue);
            });
          }), he;
        }
      }
      function g(y, x) {
        if (!(x instanceof Element)) return x;
        return Promise.resolve().then($).then(ae).then(N).then(J).then(function() {
          return x;
        });
        function $() {
          ne(window.getComputedStyle(y), x.style);
          function ne(Z, he) {
            Z.cssText ? he.cssText = Z.cssText : pe(Z, he);
            function pe(ue, ye) {
              t.asArray(ue).forEach(function(v) {
                ye.setProperty(
                  v,
                  ue.getPropertyValue(v),
                  ue.getPropertyPriority(v)
                );
              });
            }
          }
        }
        function ae() {
          [":before", ":after"].forEach(function(Z) {
            ne(Z);
          });
          function ne(Z) {
            var he = window.getComputedStyle(y, Z), pe = he.getPropertyValue("content");
            if (pe === "" || pe === "none") return;
            var ue = t.uid();
            x.className = x.className + " " + ue;
            var ye = document.createElement("style");
            ye.appendChild(v(ue, Z, he)), x.appendChild(ye);
            function v(S, R, z) {
              var ge = "." + S + ":" + R, xe = z.cssText ? Ue(z) : Ce(z);
              return document.createTextNode(ge + "{" + xe + "}");
              function Ue(_e) {
                var Ae = _e.getPropertyValue("content");
                return _e.cssText + " content: " + Ae + ";";
              }
              function Ce(_e) {
                return t.asArray(_e).map(Ae).join("; ") + ";";
                function Ae(qe) {
                  return qe + ": " + _e.getPropertyValue(qe) + (_e.getPropertyPriority(qe) ? " !important" : "");
                }
              }
            }
          }
        }
        function N() {
          y instanceof HTMLTextAreaElement && (x.innerHTML = y.value), y instanceof HTMLInputElement && x.setAttribute("value", y.value);
        }
        function J() {
          x instanceof SVGElement && (x.setAttribute("xmlns", "http://www.w3.org/2000/svg"), x instanceof SVGRectElement && ["width", "height"].forEach(function(ne) {
            var Z = x.getAttribute(ne);
            Z && x.style.setProperty(ne, Z);
          }));
        }
      }
    }
    function M(f) {
      return w.resolveAll().then(function(u) {
        var a = document.createElement("style");
        return f.appendChild(a), a.appendChild(document.createTextNode(u)), f;
      });
    }
    function H(f) {
      return T.inlineAll(f).then(function() {
        return f;
      });
    }
    function U(f, u, a) {
      return Promise.resolve(f).then(function(p) {
        return p.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(p);
      }).then(t.escapeXhtml).then(function(p) {
        return '<foreignObject x="0" y="0" width="100%" height="100%">' + p + "</foreignObject>";
      }).then(function(p) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + u + '" height="' + a + '">' + p + "</svg>";
      }).then(function(p) {
        return "data:image/svg+xml;charset=utf-8," + p;
      });
    }
    function I() {
      return {
        escape: J,
        parseExtension: u,
        mimeType: a,
        dataAsUrl: N,
        isDataUrl: p,
        canvasToBlob: g,
        resolveUrl: y,
        getAndEncode: ae,
        uid: x(),
        delay: ne,
        asArray: Z,
        escapeXhtml: he,
        makeImage: $,
        width: pe,
        height: ue
      };
      function f() {
        var v = "application/font-woff", S = "image/jpeg";
        return {
          woff: v,
          woff2: v,
          ttf: "application/font-truetype",
          eot: "application/vnd.ms-fontobject",
          png: "image/png",
          jpg: S,
          jpeg: S,
          gif: "image/gif",
          tiff: "image/tiff",
          svg: "image/svg+xml"
        };
      }
      function u(v) {
        var S = /\.([^\.\/]*?)$/g.exec(v);
        return S ? S[1] : "";
      }
      function a(v) {
        var S = u(v).toLowerCase();
        return f()[S] || "";
      }
      function p(v) {
        return v.search(/^(data:)/) !== -1;
      }
      function b(v) {
        return new Promise(function(S) {
          for (var R = window.atob(v.toDataURL().split(",")[1]), z = R.length, ge = new Uint8Array(z), xe = 0; xe < z; xe++)
            ge[xe] = R.charCodeAt(xe);
          S(new Blob([ge], {
            type: "image/png"
          }));
        });
      }
      function g(v) {
        return v.toBlob ? new Promise(function(S) {
          v.toBlob(S);
        }) : b(v);
      }
      function y(v, S) {
        var R = document.implementation.createHTMLDocument(), z = R.createElement("base");
        R.head.appendChild(z);
        var ge = R.createElement("a");
        return R.body.appendChild(ge), z.href = S, ge.href = v, ge.href;
      }
      function x() {
        var v = 0;
        return function() {
          return "u" + S() + v++;
          function S() {
            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
          }
        };
      }
      function $(v) {
        return new Promise(function(S, R) {
          var z = new Image();
          z.onload = function() {
            S(z);
          }, z.onerror = R, z.src = v;
        });
      }
      function ae(v) {
        var S = 3e4;
        return q.impl.options.cacheBust && (v += (/\?/.test(v) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), new Promise(function(R) {
          var z = new XMLHttpRequest();
          z.onreadystatechange = Ue, z.ontimeout = Ce, z.responseType = "blob", z.timeout = S, z.open("GET", v, !0), z.send();
          var ge;
          if (q.impl.options.imagePlaceholder) {
            var xe = q.impl.options.imagePlaceholder.split(/,/);
            xe && xe[1] && (ge = xe[1]);
          }
          function Ue() {
            if (z.readyState === 4) {
              if (z.status !== 200) {
                ge ? R(ge) : _e("cannot fetch resource: " + v + ", status: " + z.status);
                return;
              }
              var Ae = new FileReader();
              Ae.onloadend = function() {
                var qe = Ae.result.split(/,/)[1];
                R(qe);
              }, Ae.readAsDataURL(z.response);
            }
          }
          function Ce() {
            ge ? R(ge) : _e("timeout of " + S + "ms occured while fetching resource: " + v);
          }
          function _e(Ae) {
            console.error(Ae), R("");
          }
        });
      }
      function N(v, S) {
        return "data:" + S + ";base64," + v;
      }
      function J(v) {
        return v.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
      }
      function ne(v) {
        return function(S) {
          return new Promise(function(R) {
            setTimeout(function() {
              R(S);
            }, v);
          });
        };
      }
      function Z(v) {
        for (var S = [], R = v.length, z = 0; z < R; z++) S.push(v[z]);
        return S;
      }
      function he(v) {
        return v.replace(/#/g, "%23").replace(/\n/g, "%0A");
      }
      function pe(v) {
        var S = ye(v, "border-left-width"), R = ye(v, "border-right-width");
        return v.scrollWidth + S + R;
      }
      function ue(v) {
        var S = ye(v, "border-top-width"), R = ye(v, "border-bottom-width");
        return v.scrollHeight + S + R;
      }
      function ye(v, S) {
        var R = window.getComputedStyle(v).getPropertyValue(S);
        return parseFloat(R.replace("px", ""));
      }
    }
    function C() {
      var f = /url\(['"]?([^'"]+?)['"]?\)/g;
      return {
        inlineAll: b,
        shouldProcess: u,
        impl: {
          readUrls: a,
          inline: p
        }
      };
      function u(g) {
        return g.search(f) !== -1;
      }
      function a(g) {
        for (var y = [], x; (x = f.exec(g)) !== null; )
          y.push(x[1]);
        return y.filter(function($) {
          return !t.isDataUrl($);
        });
      }
      function p(g, y, x, $) {
        return Promise.resolve(y).then(function(N) {
          return x ? t.resolveUrl(N, x) : N;
        }).then($ || t.getAndEncode).then(function(N) {
          return t.dataAsUrl(N, t.mimeType(y));
        }).then(function(N) {
          return g.replace(ae(y), "$1" + N + "$3");
        });
        function ae(N) {
          return new RegExp(`(url\\(['"]?)(` + t.escape(N) + `)(['"]?\\))`, "g");
        }
      }
      function b(g, y, x) {
        if ($()) return Promise.resolve(g);
        return Promise.resolve(g).then(a).then(function(ae) {
          var N = Promise.resolve(g);
          return ae.forEach(function(J) {
            N = N.then(function(ne) {
              return p(ne, J, y, x);
            });
          }), N;
        });
        function $() {
          return !u(g);
        }
      }
    }
    function W() {
      return {
        resolveAll: f,
        impl: {
          readAll: u
        }
      };
      function f() {
        return u().then(function(a) {
          return Promise.all(
            a.map(function(p) {
              return p.resolve();
            })
          );
        }).then(function(a) {
          return a.join(`
`);
        });
      }
      function u() {
        return Promise.resolve(t.asArray(document.styleSheets)).then(p).then(a).then(function(g) {
          return g.map(b);
        });
        function a(g) {
          return g.filter(function(y) {
            return y.type === CSSRule.FONT_FACE_RULE;
          }).filter(function(y) {
            return r.shouldProcess(y.style.getPropertyValue("src"));
          });
        }
        function p(g) {
          var y = [];
          return g.forEach(function(x) {
            try {
              t.asArray(x.cssRules || []).forEach(y.push.bind(y));
            } catch ($) {
              console.log("Error while reading CSS rules from " + x.href, $.toString());
            }
          }), y;
        }
        function b(g) {
          return {
            resolve: function() {
              var x = (g.parentStyleSheet || {}).href;
              return r.inlineAll(g.cssText, x);
            },
            src: function() {
              return g.style.getPropertyValue("src");
            }
          };
        }
      }
    }
    function Y() {
      return {
        inlineAll: u,
        impl: {
          newImage: f
        }
      };
      function f(a) {
        return {
          inline: p
        };
        function p(b) {
          return t.isDataUrl(a.src) ? Promise.resolve() : Promise.resolve(a.src).then(b || t.getAndEncode).then(function(g) {
            return t.dataAsUrl(g, t.mimeType(a.src));
          }).then(function(g) {
            return new Promise(function(y, x) {
              a.onload = y, a.onerror = x, a.src = g;
            });
          });
        }
      }
      function u(a) {
        if (!(a instanceof Element)) return Promise.resolve(a);
        return p(a).then(function() {
          return a instanceof HTMLImageElement ? f(a).inline() : Promise.all(
            t.asArray(a.childNodes).map(function(b) {
              return u(b);
            })
          );
        });
        function p(b) {
          var g = b.style.getPropertyValue("background");
          return g ? r.inlineAll(g).then(function(y) {
            b.style.setProperty(
              "background",
              y,
              b.style.getPropertyPriority("background")
            );
          }).then(function() {
            return b;
          }) : Promise.resolve(b);
        }
      }
    }
  })();
})(Ke);
var Ie = { exports: {} };
const Ye = {}, Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Me = /* @__PURE__ */ Qe(Je);
/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 9.3.3
 * @date    2025-06-27
 *
 * @license
 * Copyright (C) 2014-2022 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function(c, e) {
  (function(t, r) {
    r(e);
  })(Xe, function(t) {
    var r = {}, w = { exports: {} };
    (function(s) {
      var d = function(A) {
        return typeof A < "u" && A.versions != null && A.versions.node != null && A + "" == "[object process]";
      };
      s.exports.isNode = d, s.exports.platform = typeof process < "u" && d(process) ? "node" : "browser";
      var h = s.exports.platform === "node" && Me;
      s.exports.isMainThread = s.exports.platform === "node" ? (!h || h.isMainThread) && !process.connected : typeof Window < "u", s.exports.cpus = s.exports.platform === "browser" ? self.navigator.hardwareConcurrency : Me.cpus().length;
    })(w);
    var T = w.exports, L = {}, q;
    function te() {
      if (q) return L;
      q = 1;
      function s(A, ee) {
        var n = this;
        if (!(this instanceof s))
          throw new SyntaxError("Constructor must be called with the new operator");
        if (typeof A != "function")
          throw new SyntaxError("Function parameter handler(resolve, reject) missing");
        var oe = [], G = [];
        this.resolved = !1, this.rejected = !1, this.pending = !0, this[Symbol.toStringTag] = "Promise";
        var ve = function(i, k) {
          oe.push(i), G.push(k);
        };
        this.then = function(l, i) {
          return new s(function(k, O) {
            var V = l ? d(l, k, O) : k, ke = i ? d(i, k, O) : O;
            ve(V, ke);
          }, n);
        };
        var be = function(i) {
          return n.resolved = !0, n.rejected = !1, n.pending = !1, oe.forEach(function(k) {
            k(i);
          }), ve = function(O, V) {
            O(i);
          }, be = m = function() {
          }, n;
        }, m = function(i) {
          return n.resolved = !1, n.rejected = !0, n.pending = !1, G.forEach(function(k) {
            k(i);
          }), ve = function(O, V) {
            V(i);
          }, be = m = function() {
          }, n;
        };
        this.cancel = function() {
          return ee ? ee.cancel() : m(new h()), n;
        }, this.timeout = function(l) {
          if (ee)
            ee.timeout(l);
          else {
            var i = setTimeout(function() {
              m(new F("Promise timed out after " + l + " ms"));
            }, l);
            n.always(function() {
              clearTimeout(i);
            });
          }
          return n;
        }, A(function(l) {
          be(l);
        }, function(l) {
          m(l);
        });
      }
      function d(A, ee, n) {
        return function(oe) {
          try {
            var G = A(oe);
            G && typeof G.then == "function" && typeof G.catch == "function" ? G.then(ee, n) : ee(G);
          } catch (ve) {
            n(ve);
          }
        };
      }
      s.prototype.catch = function(A) {
        return this.then(null, A);
      }, s.prototype.always = function(A) {
        return this.then(A, A);
      }, s.prototype.finally = function(A) {
        var ee = this, n = function() {
          return new s(function(G) {
            return G();
          }).then(A).then(function() {
            return ee;
          });
        };
        return this.then(n, n);
      }, s.all = function(A) {
        return new s(function(ee, n) {
          var oe = A.length, G = [];
          oe ? A.forEach(function(ve, be) {
            ve.then(function(m) {
              G[be] = m, oe--, oe == 0 && ee(G);
            }, function(m) {
              oe = 0, n(m);
            });
          }) : ee(G);
        });
      }, s.defer = function() {
        var A = {};
        return A.promise = new s(function(ee, n) {
          A.resolve = ee, A.reject = n;
        }), A;
      };
      function h(A) {
        this.message = A || "promise cancelled", this.stack = new Error().stack;
      }
      h.prototype = new Error(), h.prototype.constructor = Error, h.prototype.name = "CancellationError", s.CancellationError = h;
      function F(A) {
        this.message = A || "timeout exceeded", this.stack = new Error().stack;
      }
      return F.prototype = new Error(), F.prototype.constructor = Error, F.prototype.name = "TimeoutError", s.TimeoutError = F, L.Promise = s, L;
    }
    function se(s, d) {
      (d == null || d > s.length) && (d = s.length);
      for (var h = 0, F = Array(d); h < d; h++) F[h] = s[h];
      return F;
    }
    function Q(s, d) {
      var h = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
      if (!h) {
        if (Array.isArray(s) || (h = H(s)) || d) {
          h && (s = h);
          var F = 0, A = function() {
          };
          return {
            s: A,
            n: function() {
              return F >= s.length ? {
                done: !0
              } : {
                done: !1,
                value: s[F++]
              };
            },
            e: function(G) {
              throw G;
            },
            f: A
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var ee, n = !0, oe = !1;
      return {
        s: function() {
          h = h.call(s);
        },
        n: function() {
          var G = h.next();
          return n = G.done, G;
        },
        e: function(G) {
          oe = !0, ee = G;
        },
        f: function() {
          try {
            n || h.return == null || h.return();
          } finally {
            if (oe) throw ee;
          }
        }
      };
    }
    function ce(s, d, h) {
      return (d = fe(d)) in s ? Object.defineProperty(s, d, {
        value: h,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : s[d] = h, s;
    }
    function le(s, d) {
      var h = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var F = Object.getOwnPropertySymbols(s);
        d && (F = F.filter(function(A) {
          return Object.getOwnPropertyDescriptor(s, A).enumerable;
        })), h.push.apply(h, F);
      }
      return h;
    }
    function de(s) {
      for (var d = 1; d < arguments.length; d++) {
        var h = arguments[d] != null ? arguments[d] : {};
        d % 2 ? le(Object(h), !0).forEach(function(F) {
          ce(s, F, h[F]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(h)) : le(Object(h)).forEach(function(F) {
          Object.defineProperty(s, F, Object.getOwnPropertyDescriptor(h, F));
        });
      }
      return s;
    }
    function K(s, d) {
      if (typeof s != "object" || !s) return s;
      var h = s[Symbol.toPrimitive];
      if (h !== void 0) {
        var F = h.call(s, d);
        if (typeof F != "object") return F;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (d === "string" ? String : Number)(s);
    }
    function fe(s) {
      var d = K(s, "string");
      return typeof d == "symbol" ? d : d + "";
    }
    function M(s) {
      "@babel/helpers - typeof";
      return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
        return typeof d;
      } : function(d) {
        return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
      }, M(s);
    }
    function H(s, d) {
      if (s) {
        if (typeof s == "string") return se(s, d);
        var h = {}.toString.call(s).slice(8, -1);
        return h === "Object" && s.constructor && (h = s.constructor.name), h === "Map" || h === "Set" ? Array.from(s) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? se(s, d) : void 0;
      }
    }
    var U = { exports: {} }, I = {}, C;
    function W() {
      return C || (C = 1, I.validateOptions = function(d, h, F) {
        if (d) {
          var A = d ? Object.keys(d) : [], ee = A.find(function(oe) {
            return !h.includes(oe);
          });
          if (ee)
            throw new Error('Object "' + F + '" contains an unknown option "' + ee + '"');
          var n = h.find(function(oe) {
            return Object.prototype[oe] && !A.includes(oe);
          });
          if (n)
            throw new Error('Object "' + F + '" contains an inherited option "' + n + '" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');
          return d;
        }
      }, I.workerOptsNames = ["credentials", "name", "type"], I.forkOptsNames = ["cwd", "detached", "env", "execPath", "execArgv", "gid", "serialization", "signal", "killSignal", "silent", "stdio", "uid", "windowsVerbatimArguments", "timeout"], I.workerThreadOptsNames = ["argv", "env", "eval", "execArgv", "stdin", "stdout", "stderr", "workerData", "trackUnmanagedFds", "transferList", "resourceLimits", "name"]), I;
    }
    var Y, f;
    function u() {
      return f || (f = 1, Y = `!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return new i((function(e,n){o.then(e,n),r.then(e,n)})).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`), Y;
    }
    var a;
    function p() {
      if (a) return U.exports;
      a = 1;
      var s = te(), d = s.Promise, h = T, F = W(), A = F.validateOptions, ee = F.forkOptsNames, n = F.workerThreadOptsNames, oe = F.workerOptsNames, G = "__workerpool-terminate__", ve = "__workerpool-cleanup__";
      function be() {
        var E = l();
        if (!E)
          throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");
        return E;
      }
      function m() {
        if (typeof Worker != "function" && ((typeof Worker > "u" ? "undefined" : M(Worker)) !== "object" || typeof Worker.prototype.constructor != "function"))
          throw new Error("WorkerPool: Web Workers not supported");
      }
      function l() {
        try {
          return Me;
        } catch (E) {
          if (M(E) === "object" && E !== null && E.code === "MODULE_NOT_FOUND")
            return null;
          throw E;
        }
      }
      function i() {
        if (h.platform === "browser") {
          if (typeof Blob > "u")
            throw new Error("Blob not supported by the browser");
          if (!window.URL || typeof window.URL.createObjectURL != "function")
            throw new Error("URL.createObjectURL not supported by the browser");
          var E = new Blob([u()], {
            type: "text/javascript"
          });
          return window.URL.createObjectURL(E);
        } else
          return __dirname + "/worker.js";
      }
      function k(E, B) {
        if (B.workerType === "web")
          return m(), O(E, B.workerOpts, Worker);
        if (B.workerType === "thread")
          return o = be(), V(E, o, B);
        if (B.workerType === "process" || !B.workerType)
          return ke(E, Pe(B), Me);
        if (h.platform === "browser")
          return m(), O(E, B.workerOpts, Worker);
        var o = l();
        return o ? V(E, o, B) : ke(E, Pe(B), Me);
      }
      function O(E, B, o) {
        A(B, oe, "workerOpts");
        var P = new o(E, B);
        return P.isBrowserWorker = !0, P.on = function(D, X) {
          this.addEventListener(D, function(re) {
            X(re.data);
          });
        }, P.send = function(D, X) {
          this.postMessage(D, X);
        }, P;
      }
      function V(E, B, o) {
        var P, D;
        A(o == null ? void 0 : o.workerThreadOpts, n, "workerThreadOpts");
        var X = new B.Worker(E, de({
          stdout: (P = o == null ? void 0 : o.emitStdStreams) !== null && P !== void 0 ? P : !1,
          // pipe worker.STDOUT to process.STDOUT if not requested
          stderr: (D = o == null ? void 0 : o.emitStdStreams) !== null && D !== void 0 ? D : !1
        }, o == null ? void 0 : o.workerThreadOpts));
        return X.isWorkerThread = !0, X.send = function(re, j) {
          this.postMessage(re, j);
        }, X.kill = function() {
          return this.terminate(), !0;
        }, X.disconnect = function() {
          this.terminate();
        }, o != null && o.emitStdStreams && (X.stdout.on("data", function(re) {
          return X.emit("stdout", re);
        }), X.stderr.on("data", function(re) {
          return X.emit("stderr", re);
        })), X;
      }
      function ke(E, B, o) {
        A(B.forkOpts, ee, "forkOpts");
        var P = o.fork(E, B.forkArgs, B.forkOpts), D = P.send;
        return P.send = function(X) {
          return D.call(P, X);
        }, B.emitStdStreams && (P.stdout.on("data", function(X) {
          return P.emit("stdout", X);
        }), P.stderr.on("data", function(X) {
          return P.emit("stderr", X);
        })), P.isChildProcess = !0, P;
      }
      function Pe(E) {
        E = E || {};
        var B = process.execArgv.join(" "), o = B.indexOf("--inspect") !== -1, P = B.indexOf("--debug-brk") !== -1, D = [];
        return o && (D.push("--inspect=" + E.debugPort), P && D.push("--debug-brk")), process.execArgv.forEach(function(X) {
          X.indexOf("--max-old-space-size") > -1 && D.push(X);
        }), Object.assign({}, E, {
          forkArgs: E.forkArgs,
          forkOpts: Object.assign({}, E.forkOpts, {
            execArgv: (E.forkOpts && E.forkOpts.execArgv || []).concat(D),
            stdio: E.emitStdStreams ? "pipe" : void 0
          })
        });
      }
      function Se(E) {
        for (var B = new Error(""), o = Object.keys(E), P = 0; P < o.length; P++)
          B[o[P]] = E[o[P]];
        return B;
      }
      function Te(E, B) {
        Object.values(E.processing).forEach(function(o) {
          var P;
          return o == null || (P = o.options) === null || P === void 0 ? void 0 : P.on(B);
        }), Object.values(E.tracking).forEach(function(o) {
          var P;
          return o == null || (P = o.options) === null || P === void 0 ? void 0 : P.on(B);
        });
      }
      function Oe(E, B) {
        var o = this, P = B || {};
        this.script = E || i(), this.worker = k(this.script, P), this.debugPort = P.debugPort, this.forkOpts = P.forkOpts, this.forkArgs = P.forkArgs, this.workerOpts = P.workerOpts, this.workerThreadOpts = P.workerThreadOpts, this.workerTerminateTimeout = P.workerTerminateTimeout, E || (this.worker.ready = !0), this.requestQueue = [], this.worker.on("stdout", function(j) {
          Te(o, {
            stdout: j.toString()
          });
        }), this.worker.on("stderr", function(j) {
          Te(o, {
            stderr: j.toString()
          });
        }), this.worker.on("message", function(j) {
          if (!o.terminated)
            if (typeof j == "string" && j === "ready")
              o.worker.ready = !0, X();
            else {
              var we = j.id, ie = o.processing[we];
              if (ie !== void 0)
                j.isEvent ? ie.options && typeof ie.options.on == "function" && ie.options.on(j.payload) : (delete o.processing[we], o.terminating === !0 && o.terminate(), j.error ? ie.resolver.reject(Se(j.error)) : ie.resolver.resolve(j.result));
              else {
                var ie = o.tracking[we];
                ie !== void 0 && j.isEvent && ie.options && typeof ie.options.on == "function" && ie.options.on(j.payload);
              }
              if (j.method === ve) {
                var Ee = o.tracking[j.id];
                Ee !== void 0 && (j.error ? (clearTimeout(Ee.timeoutId), Ee.resolver.reject(Se(j.error))) : (o.tracking && clearTimeout(Ee.timeoutId), Ee.resolver.reject(new Re(Ee.error)))), delete o.tracking[we];
              }
            }
        });
        function D(j) {
          o.terminated = !0;
          for (var we in o.processing)
            o.processing[we] !== void 0 && o.processing[we].resolver.reject(j);
          o.processing = /* @__PURE__ */ Object.create(null);
        }
        function X() {
          var j = Q(o.requestQueue.splice(0)), we;
          try {
            for (j.s(); !(we = j.n()).done; ) {
              var ie = we.value;
              o.worker.send(ie.message, ie.transfer);
            }
          } catch (Ee) {
            j.e(Ee);
          } finally {
            j.f();
          }
        }
        var re = this.worker;
        this.worker.on("error", D), this.worker.on("exit", function(j, we) {
          var ie = `Workerpool Worker terminated Unexpectedly
`;
          ie += "    exitCode: `" + j + "`\n", ie += "    signalCode: `" + we + "`\n", ie += "    workerpool.script: `" + o.script + "`\n", ie += "    spawnArgs: `" + re.spawnargs + "`\n", ie += "    spawnfile: `" + re.spawnfile + "`\n", ie += "    stdout: `" + re.stdout + "`\n", ie += "    stderr: `" + re.stderr + "`\n", D(new Error(ie));
        }), this.processing = /* @__PURE__ */ Object.create(null), this.tracking = /* @__PURE__ */ Object.create(null), this.terminating = !1, this.terminated = !1, this.cleaning = !1, this.terminationHandler = null, this.lastId = 0;
      }
      Oe.prototype.methods = function() {
        return this.exec("methods");
      }, Oe.prototype.exec = function(E, B, o, P) {
        o || (o = d.defer());
        var D = ++this.lastId;
        this.processing[D] = {
          id: D,
          resolver: o,
          options: P
        };
        var X = {
          message: {
            id: D,
            method: E,
            params: B
          },
          transfer: P && P.transfer
        };
        this.terminated ? o.reject(new Error("Worker is terminated")) : this.worker.ready ? this.worker.send(X.message, X.transfer) : this.requestQueue.push(X);
        var re = this;
        return o.promise.catch(function(j) {
          if (j instanceof d.CancellationError || j instanceof d.TimeoutError)
            return re.tracking[D] = {
              id: D,
              resolver: d.defer(),
              options: P,
              error: j
            }, delete re.processing[D], re.tracking[D].resolver.promise = re.tracking[D].resolver.promise.catch(function(we) {
              if (delete re.tracking[D], we instanceof Re)
                throw we.error;
              var ie = re.terminateAndNotify(!0).then(function() {
                throw we;
              }, function(Ee) {
                throw Ee;
              });
              return ie;
            }), re.worker.send({
              id: D,
              method: ve
            }), re.tracking[D].timeoutId = setTimeout(function() {
              re.tracking[D].resolver.reject(j);
            }, re.workerTerminateTimeout), re.tracking[D].resolver.promise;
          throw j;
        });
      }, Oe.prototype.busy = function() {
        return this.cleaning || Object.keys(this.processing).length > 0;
      }, Oe.prototype.terminate = function(E, B) {
        var o = this;
        if (E) {
          for (var P in this.processing)
            this.processing[P] !== void 0 && this.processing[P].resolver.reject(new Error("Worker terminated"));
          this.processing = /* @__PURE__ */ Object.create(null);
        }
        for (var D = 0, X = Object.values(o.tracking); D < X.length; D++) {
          var re = X[D];
          clearTimeout(re.timeoutId), re.resolver.reject(new Error("Worker Terminating"));
        }
        if (o.tracking = /* @__PURE__ */ Object.create(null), typeof B == "function" && (this.terminationHandler = B), this.busy())
          this.terminating = !0;
        else {
          var j = function(Ee) {
            if (o.terminated = !0, o.cleaning = !1, o.worker != null && o.worker.removeAllListeners && o.worker.removeAllListeners("message"), o.worker = null, o.terminating = !1, o.terminationHandler)
              o.terminationHandler(Ee, o);
            else if (Ee)
              throw Ee;
          };
          if (this.worker)
            if (typeof this.worker.kill == "function") {
              if (this.worker.killed) {
                j(new Error("worker already killed!"));
                return;
              }
              var we = setTimeout(function() {
                o.worker && o.worker.kill();
              }, this.workerTerminateTimeout);
              this.worker.once("exit", function() {
                clearTimeout(we), o.worker && (o.worker.killed = !0), j();
              }), this.worker.ready ? this.worker.send(G) : this.requestQueue.push({
                message: G
              }), this.cleaning = !0;
              return;
            } else if (typeof this.worker.terminate == "function")
              this.worker.terminate(), this.worker.killed = !0;
            else
              throw new Error("Failed to terminate worker");
          j();
        }
      }, Oe.prototype.terminateAndNotify = function(E, B) {
        var o = d.defer();
        return B && o.promise.timeout(B), this.terminate(E, function(P, D) {
          P ? o.reject(P) : o.resolve(D);
        }), o.promise;
      };
      function Re(E) {
        this.error = E, this.stack = new Error().stack;
      }
      return U.exports = Oe, U.exports._tryRequireWorkerThreads = l, U.exports._setupProcessWorker = ke, U.exports._setupBrowserWorker = O, U.exports._setupWorkerThreadWorker = V, U.exports.ensureWorkerThreads = be, U.exports;
    }
    var b, g;
    function y() {
      if (g) return b;
      g = 1;
      var s = 65535;
      b = d;
      function d() {
        this.ports = /* @__PURE__ */ Object.create(null), this.length = 0;
      }
      return d.prototype.nextAvailableStartingAt = function(h) {
        for (; this.ports[h] === !0; )
          h++;
        if (h >= s)
          throw new Error("WorkerPool debug port limit reached: " + h + ">= " + s);
        return this.ports[h] = !0, this.length++, h;
      }, d.prototype.releasePort = function(h) {
        delete this.ports[h], this.length--;
      }, b;
    }
    var x, $;
    function ae() {
      if ($) return x;
      $ = 1;
      var s = te(), d = s.Promise, h = p(), F = T, A = y(), ee = new A();
      function n(m, l) {
        typeof m == "string" ? this.script = m || null : (this.script = null, l = m), this.workers = [], this.tasks = [], l = l || {}, this.forkArgs = Object.freeze(l.forkArgs || []), this.forkOpts = Object.freeze(l.forkOpts || {}), this.workerOpts = Object.freeze(l.workerOpts || {}), this.workerThreadOpts = Object.freeze(l.workerThreadOpts || {}), this.debugPortStart = l.debugPortStart || 43210, this.nodeWorker = l.nodeWorker, this.workerType = l.workerType || l.nodeWorker || "auto", this.maxQueueSize = l.maxQueueSize || 1 / 0, this.workerTerminateTimeout = l.workerTerminateTimeout || 1e3, this.onCreateWorker = l.onCreateWorker || function() {
          return null;
        }, this.onTerminateWorker = l.onTerminateWorker || function() {
          return null;
        }, this.emitStdStreams = l.emitStdStreams || !1, l && "maxWorkers" in l ? (oe(l.maxWorkers), this.maxWorkers = l.maxWorkers) : this.maxWorkers = Math.max((F.cpus || 4) - 1, 1), l && "minWorkers" in l && (l.minWorkers === "max" ? this.minWorkers = this.maxWorkers : (G(l.minWorkers), this.minWorkers = l.minWorkers, this.maxWorkers = Math.max(this.minWorkers, this.maxWorkers)), this._ensureMinWorkers()), this._boundNext = this._next.bind(this), this.workerType === "thread" && h.ensureWorkerThreads();
      }
      n.prototype.exec = function(m, l, i) {
        if (l && !Array.isArray(l))
          throw new TypeError('Array expected as argument "params"');
        if (typeof m == "string") {
          var k = d.defer();
          if (this.tasks.length >= this.maxQueueSize)
            throw new Error("Max queue size of " + this.maxQueueSize + " reached");
          var O = this.tasks, V = {
            method: m,
            params: l,
            resolver: k,
            timeout: null,
            options: i
          };
          O.push(V);
          var ke = k.promise.timeout;
          return k.promise.timeout = function(Se) {
            return O.indexOf(V) !== -1 ? (V.timeout = Se, k.promise) : ke.call(k.promise, Se);
          }, this._next(), k.promise;
        } else {
          if (typeof m == "function")
            return this.exec("run", [String(m), l], i);
          throw new TypeError('Function or string expected as argument "method"');
        }
      }, n.prototype.proxy = function() {
        if (arguments.length > 0)
          throw new Error("No arguments expected");
        var m = this;
        return this.exec("methods").then(function(l) {
          var i = {};
          return l.forEach(function(k) {
            i[k] = function() {
              return m.exec(k, Array.prototype.slice.call(arguments));
            };
          }), i;
        });
      }, n.prototype._next = function() {
        if (this.tasks.length > 0) {
          var m = this._getWorker();
          if (m) {
            var l = this, i = this.tasks.shift();
            if (i.resolver.promise.pending) {
              var k = m.exec(i.method, i.params, i.resolver, i.options).then(l._boundNext).catch(function() {
                if (m.terminated)
                  return l._removeWorker(m);
              }).then(function() {
                l._next();
              });
              typeof i.timeout == "number" && k.timeout(i.timeout);
            } else
              l._next();
          }
        }
      }, n.prototype._getWorker = function() {
        for (var m = this.workers, l = 0; l < m.length; l++) {
          var i = m[l];
          if (i.busy() === !1)
            return i;
        }
        return m.length < this.maxWorkers ? (i = this._createWorkerHandler(), m.push(i), i) : null;
      }, n.prototype._removeWorker = function(m) {
        var l = this;
        return ee.releasePort(m.debugPort), this._removeWorkerFromList(m), this._ensureMinWorkers(), new d(function(i, k) {
          m.terminate(!1, function(O) {
            l.onTerminateWorker({
              forkArgs: m.forkArgs,
              forkOpts: m.forkOpts,
              workerThreadOpts: m.workerThreadOpts,
              script: m.script
            }), O ? k(O) : i(m);
          });
        });
      }, n.prototype._removeWorkerFromList = function(m) {
        var l = this.workers.indexOf(m);
        l !== -1 && this.workers.splice(l, 1);
      }, n.prototype.terminate = function(m, l) {
        var i = this;
        this.tasks.forEach(function(Pe) {
          Pe.resolver.reject(new Error("Pool terminated"));
        }), this.tasks.length = 0;
        var k = function(Se) {
          ee.releasePort(Se.debugPort), this._removeWorkerFromList(Se);
        }, O = k.bind(this), V = [], ke = this.workers.slice();
        return ke.forEach(function(Pe) {
          var Se = Pe.terminateAndNotify(m, l).then(O).always(function() {
            i.onTerminateWorker({
              forkArgs: Pe.forkArgs,
              forkOpts: Pe.forkOpts,
              workerThreadOpts: Pe.workerThreadOpts,
              script: Pe.script
            });
          });
          V.push(Se);
        }), d.all(V);
      }, n.prototype.stats = function() {
        var m = this.workers.length, l = this.workers.filter(function(i) {
          return i.busy();
        }).length;
        return {
          totalWorkers: m,
          busyWorkers: l,
          idleWorkers: m - l,
          pendingTasks: this.tasks.length,
          activeTasks: l
        };
      }, n.prototype._ensureMinWorkers = function() {
        if (this.minWorkers)
          for (var m = this.workers.length; m < this.minWorkers; m++)
            this.workers.push(this._createWorkerHandler());
      }, n.prototype._createWorkerHandler = function() {
        var m = this.onCreateWorker({
          forkArgs: this.forkArgs,
          forkOpts: this.forkOpts,
          workerOpts: this.workerOpts,
          workerThreadOpts: this.workerThreadOpts,
          script: this.script
        }) || {};
        return new h(m.script || this.script, {
          forkArgs: m.forkArgs || this.forkArgs,
          forkOpts: m.forkOpts || this.forkOpts,
          workerOpts: m.workerOpts || this.workerOpts,
          workerThreadOpts: m.workerThreadOpts || this.workerThreadOpts,
          debugPort: ee.nextAvailableStartingAt(this.debugPortStart),
          workerType: this.workerType,
          workerTerminateTimeout: this.workerTerminateTimeout,
          emitStdStreams: this.emitStdStreams
        });
      };
      function oe(m) {
        if (!ve(m) || !be(m) || m < 1)
          throw new TypeError("Option maxWorkers must be an integer number >= 1");
      }
      function G(m) {
        if (!ve(m) || !be(m) || m < 0)
          throw new TypeError("Option minWorkers must be an integer number >= 0");
      }
      function ve(m) {
        return typeof m == "number";
      }
      function be(m) {
        return Math.round(m) == m;
      }
      return x = n, x;
    }
    var N = {}, J, ne;
    function Z() {
      if (ne) return J;
      ne = 1;
      function s(d, h) {
        this.message = d, this.transfer = h;
      }
      return J = s, J;
    }
    var he;
    function pe() {
      return he || (he = 1, function(s) {
        var d = Z(), h = te().Promise, F = "__workerpool-terminate__", A = "__workerpool-cleanup__", ee = 1e3, n = {
          exit: function() {
          }
        }, oe = {
          /**
           * Registers listeners which will trigger when a task is timed out or cancled. If all listeners resolve, the worker executing the given task will not be terminated.
           * *Note*: If there is a blocking operation within a listener, the worker will be terminated.
           * @param {() => Promise<void>} listener
          */
          addAbortListener: function(k) {
            n.abortListeners.push(k);
          },
          /**
            * Emit an event from the worker thread to the main thread.
            * @param {any} payload
          */
          emit: n.emit
        };
        if (typeof self < "u" && typeof postMessage == "function" && typeof addEventListener == "function")
          n.on = function(i, k) {
            addEventListener(i, function(O) {
              k(O.data);
            });
          }, n.send = function(i, k) {
            k ? postMessage(i, k) : postMessage(i);
          };
        else if (typeof process < "u") {
          var G;
          try {
            G = Me;
          } catch (i) {
            if (!(M(i) === "object" && i !== null && i.code === "MODULE_NOT_FOUND")) throw i;
          }
          if (G && /* if there is a parentPort, we are in a WorkerThread */
          G.parentPort !== null) {
            var ve = G.parentPort;
            n.send = ve.postMessage.bind(ve), n.on = ve.on.bind(ve), n.exit = process.exit.bind(process);
          } else
            n.on = process.on.bind(process), n.send = function(i) {
              process.send(i);
            }, n.on("disconnect", function() {
              process.exit(1);
            }), n.exit = process.exit.bind(process);
        } else
          throw new Error("Script must be executed as a worker");
        function be(i) {
          return Object.getOwnPropertyNames(i).reduce(function(k, O) {
            return Object.defineProperty(k, O, {
              value: i[O],
              enumerable: !0
            });
          }, {});
        }
        function m(i) {
          return i && typeof i.then == "function" && typeof i.catch == "function";
        }
        n.methods = {}, n.methods.run = function(k, O) {
          var V = new Function("return (" + k + ").apply(this, arguments);");
          return V.worker = oe, V.apply(V, O);
        }, n.methods.methods = function() {
          return Object.keys(n.methods);
        }, n.terminationHandler = void 0, n.abortListenerTimeout = ee, n.abortListeners = [], n.terminateAndExit = function(i) {
          var k = function() {
            n.exit(i);
          };
          if (!n.terminationHandler)
            return k();
          var O = n.terminationHandler(i);
          return m(O) ? (O.then(k, k), O) : (k(), new h(function(V, ke) {
            ke(new Error("Worker terminating"));
          }));
        }, n.cleanup = function(i) {
          if (!n.abortListeners.length)
            return n.send({
              id: i,
              method: A,
              error: be(new Error("Worker terminating"))
            }), new h(function(Te) {
              Te();
            });
          var k = function() {
            n.exit();
          }, O = function() {
            n.abortListeners.length || (n.abortListeners = []);
          }, V = n.abortListeners.map(function(Te) {
            return Te();
          }), ke, Pe = new h(function(Te, Oe) {
            ke = setTimeout(function() {
              Oe(new Error("Timeout occured waiting for abort handler, killing worker"));
            }, n.abortListenerTimeout);
          }), Se = h.all(V).then(function() {
            clearTimeout(ke), O();
          }, function() {
            clearTimeout(ke), k();
          });
          return new h(function(Te, Oe) {
            Se.then(Te, Oe), Pe.then(Te, Oe);
          }).then(function() {
            n.send({
              id: i,
              method: A,
              error: null
            });
          }, function(Te) {
            n.send({
              id: i,
              method: A,
              error: Te ? be(Te) : null
            });
          });
        };
        var l = null;
        n.on("message", function(i) {
          if (i === F)
            return n.terminateAndExit(0);
          if (i.method === A)
            return n.cleanup(i.id);
          try {
            var k = n.methods[i.method];
            if (k) {
              l = i.id;
              var O = k.apply(k, i.params);
              m(O) ? O.then(function(V) {
                V instanceof d ? n.send({
                  id: i.id,
                  result: V.message,
                  error: null
                }, V.transfer) : n.send({
                  id: i.id,
                  result: V,
                  error: null
                }), l = null;
              }).catch(function(V) {
                n.send({
                  id: i.id,
                  result: null,
                  error: be(V)
                }), l = null;
              }) : (O instanceof d ? n.send({
                id: i.id,
                result: O.message,
                error: null
              }, O.transfer) : n.send({
                id: i.id,
                result: O,
                error: null
              }), l = null);
            } else
              throw new Error('Unknown method "' + i.method + '"');
          } catch (V) {
            n.send({
              id: i.id,
              result: null,
              error: be(V)
            });
          }
        }), n.register = function(i, k) {
          if (i)
            for (var O in i)
              i.hasOwnProperty(O) && (n.methods[O] = i[O], n.methods[O].worker = oe);
          k && (n.terminationHandler = k.onTerminate, n.abortListenerTimeout = k.abortListenerTimeout || ee), n.send("ready");
        }, n.emit = function(i) {
          if (l) {
            if (i instanceof d) {
              n.send({
                id: l,
                isEvent: !0,
                payload: i.message
              }, i.transfer);
              return;
            }
            n.send({
              id: l,
              isEvent: !0,
              payload: i
            });
          }
        }, s.add = n.register, s.emit = n.emit;
      }(N)), N;
    }
    var ue = T.platform, ye = T.isMainThread, v = T.cpus;
    function S(s, d) {
      var h = ae();
      return new h(s, d);
    }
    var R = r.pool = S;
    function z(s, d) {
      var h = pe();
      h.add(s, d);
    }
    var ge = r.worker = z;
    function xe(s) {
      var d = pe();
      d.emit(s);
    }
    var Ue = r.workerEmit = xe, Ce = te(), _e = Ce.Promise, Ae = r.Promise = _e, qe = r.Transfer = Z(), He = r.platform = ue, ze = r.isMainThread = ye, Ve = r.cpus = v;
    t.Promise = Ae, t.Transfer = qe, t.cpus = Ve, t.default = r, t.isMainThread = ze, t.platform = He, t.pool = R, t.worker = ge, t.workerEmit = Ue, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(Ie, Ie.exports);
var Ze = Ie.exports, et = () => {
  const c = [];
  for (let e = 0; e <= 255; e++)
    c.push(`rgb(${e},${e},${e})`);
  return c;
};
et();
var tt = class extends Map {
  /** @deprecated use set method instead */
  add(c, e) {
    this.set(c, e);
  }
  call(...c) {
    this.forEach((e) => e(...c));
  }
}, me;
me = class {
  constructor(e, t) {
    _(this, "_built", !1);
    _(this, "_hydrated", !1);
    _(this, "_hover", !1);
    // Layers
    /** The layer holding the canvas element and also analysis DOM */
    _(this, "_canvasLayer");
    /** Visible layer holding an eventual visible object */
    _(this, "_visibleLayer");
    /** Cursor layer will draw the cursor and its label on top of everything */
    _(this, "_cursorLayer");
    /** Listener layer is on top of everything and it handles all mouse events */
    _(this, "_listenerLayer");
    this.parent = e, this.root = t, this.root.classList.add(me.CLASS_BASE), this.root.dataset.thermalInstanceId = this.parent.id, this.root.dataset.thermalInstanceUrl = this.parent.thermalUrl;
  }
  get built() {
    return this._built;
  }
  setBuilt(e) {
    this._built = e, e === !0 ? (this.root.classList.add(me.CLASS_BUILT), this.root.dataset.built = "true", this.root.style.transition = "border-color .1s ease-in-out", this.root.style.zIndex = "10", this.root.style.position = "relative", this.root.style.lineHeight = "0") : (this.root.classList.remove(me.CLASS_BUILT), delete this.root.dataset.built, this.root.style.removeProperty("transition"), this.root.style.removeProperty("zIndex"), this.root.style.removeProperty("position"), this.root.style.removeProperty("lineHeight"));
  }
  get hydrated() {
    return this._hydrated;
  }
  setHydrated(e) {
    this._hydrated = e, e === !0 ? (this.root.classList.add(me.CLASS_HYDRATED), this.root.dataset.hydrated = "true") : (this.root.classList.remove(me.CLASS_HYDRATED), delete this.root.dataset.hydrated);
  }
  get hover() {
    return this._hover;
  }
  setHover(e) {
    this._hover = e, e === !0 ? (this.root.classList.add(me.CLASS_HOVER), this.root.dataset.hover = "true") : (this.root.classList.remove(me.CLASS_HOVER), delete this.root.dataset.hover);
  }
  get canvasLayer() {
    return this._canvasLayer;
  }
  get visibleLayer() {
    return this._visibleLayer;
  }
  get cursorLayer() {
    return this._cursorLayer;
  }
  get listenerLayer() {
    return this._listenerLayer;
  }
  /**
   * Use the parent's create inner method to build and assign all inner DOM
   */
  build() {
    this.root !== null && this.built === !0 && (console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`), this.destroy());
    const e = this.parent.createInnerDom();
    this._canvasLayer = e.canvasLayer, this._visibleLayer = e.visibleLayer, this._cursorLayer = e.cursorLayer, this._listenerLayer = e.listenerLayer, this._canvasLayer.mount(), this._visibleLayer.mount(), this._cursorLayer.mount(), this._listenerLayer.mount(), this.root.appendChild(this._visibleLayer.getLayerRoot()), this.root.appendChild(this._canvasLayer.getLayerRoot()), this.root.appendChild(this._cursorLayer.getLayerRoot()), this.root.appendChild(this._listenerLayer.getLayerRoot()), this.setBuilt(!0);
  }
  /** Destroy the entire DOM and remove all listeners */
  destroy() {
    this.built === !0 && (this._canvasLayer && (this._canvasLayer.unmount(), delete this._canvasLayer, this._canvasLayer = void 0), this._visibleLayer && (this._visibleLayer.unmount(), delete this._visibleLayer, this._visibleLayer = void 0), this._cursorLayer && (this._cursorLayer.unmount(), delete this._cursorLayer, this._cursorLayer = void 0), this._listenerLayer && (this.hydrated === !0 && this.dehydrate(), this._listenerLayer.unmount(), delete this._listenerLayer, this._listenerLayer = void 0), this.setBuilt(!1), this.root.classList.remove(me.CLASS_BASE), delete this.root.dataset.thermalInstanceId, delete this.root.dataset.thermalInstanceUrl, this.root.innerHTML = "");
  }
  /** Activate all listeners */
  hydrate() {
    if (this.listenerLayer === void 0) {
      console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);
      return;
    }
    this.hydrated === !0 && this.dehydrate(), this.parent.hydrateListener(this), this.setHydrated(!0);
  }
  /** Deactivate all listeners */
  dehydrate() {
    if (this.hydrated === !1) {
      console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);
      return;
    }
    if (this.listenerLayer === void 0) {
      console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);
      return;
    }
    this.parent.dehydrateListener(this), this.setHydrated(!1);
  }
}, _(me, "CLASS_BASE", "thermalImageRoot"), _(me, "CLASS_BUILT", me.CLASS_BASE + "__built"), _(me, "CLASS_HYDRATED", me.CLASS_BASE + "__mounted"), _(me, "CLASS_HOVER", me.CLASS_BASE + "__hover");
var rt = async (c) => {
  const e = new DataView(c), t = e.getUint16(17, !0), r = e.getUint16(19, !0), w = c.byteLength, T = (a, p) => {
    const b = a.getBigInt64(p, !0), g = 62135596800000n, y = 10000n, x = 24n * 60n * 60n * 1000n * y, $ = 0x4000000000000000n, ae = 0x8000000000000000n;
    let J = b & 0x3fffffffffffffffn;
    b & ae && (J > $ - x && (J -= $), J < 0 && (J += x));
    const Z = J / y - g;
    return Number(Z);
  }, L = e.getUint8(15);
  let q = 2;
  L === 1 && (q = 4);
  const te = 57, se = t * r * q, Q = te + se, ce = c.slice(25), le = ce.byteLength / Q, de = (a) => {
    const p = a * Q, b = p + Q, g = ce.slice(p, b), y = new DataView(g), x = y.getFloat32(8, !0), $ = y.getFloat32(12, !0), ae = T(y, 0), N = y.getFloat32(24, !0), J = y.getFloat32(28, !0);
    return {
      timestamp: ae,
      min: x,
      max: $,
      emissivity: N,
      reflectedKelvins: J
    };
  }, K = [];
  for (let a = 0; a < le; a++) {
    const p = de(a);
    K.push(p);
  }
  const fe = {
    emissivity: 0,
    reflectedKelvins: 0
  };
  let M = 1 / 0, H = -1 / 0;
  const U = [];
  K.forEach((a) => {
    fe.emissivity = fe.emissivity + a.emissivity, fe.reflectedKelvins = fe.reflectedKelvins + a.reflectedKelvins, a.min < M && (M = a.min), a.max > H && (H = a.max), U.push(a.timestamp);
  });
  const I = U[0], C = [];
  U.forEach((a, p) => {
    const b = U[p + 1];
    let g = 0;
    b === void 0 && (g = 0), g = b - a;
    const y = a - I;
    C.push({
      absolute: a,
      relative: y,
      // isNaN( relativeTime ) ? 0 : relativeTime,
      offset: isNaN(g) ? 0 : g,
      index: p
    });
  });
  const W = K[K.length - 1].timestamp - K[0].timestamp, Y = W / le, f = 1e3 / Y, u = K[0].timestamp;
  return {
    width: t,
    height: r,
    timestamp: u,
    bytesize: w,
    frameCount: le,
    duration: W,
    frameInterval: Y,
    fps: f,
    timeline: C,
    min: M,
    max: H,
    averageEmissivity: fe.emissivity / K.length,
    averageReflectedKelvins: fe.reflectedKelvins / K.length
  };
}, nt = (c, e) => {
  const t = new DataView(c.slice(0, 25)), r = t.getUint8(15), w = t.getUint16(17, !0), T = t.getUint16(19, !0), L = r === 1 ? 4 : 2, q = 57, te = w * T * L, se = q + te, Q = c.slice(25), ce = e * se, le = ce + se;
  return {
    array: Q.slice(ce, le),
    dataType: r
  };
}, it = async (c, e) => {
  const t = new DataView(c), r = t.getBigInt64(0, !0), w = 62135596800000n, T = 10000n, L = 24n * 60n * 60n * 1000n * T, q = 0x4000000000000000n, te = 0x8000000000000000n;
  let Q = r & 0x3fffffffffffffffn;
  r & te && (Q > q - L && (Q -= q), Q < 0 && (Q += L));
  const le = Q / T - w, de = Number(le), K = t.getFloat32(8, !0), fe = t.getFloat32(12, !0), M = t.getFloat32(24, !0), H = t.getFloat32(28, !0), U = c.slice(57);
  let I = [];
  if (e === 0) {
    const C = new Uint16Array(U), W = Math.abs(K - fe), Y = 65535;
    C.forEach((f) => {
      const u = f / Y;
      I.push(K + W * u);
    });
  } else e === 1 && (I = Array.from(new Float32Array(U)));
  return {
    timestamp: de,
    min: K,
    max: fe,
    emissivity: M,
    reflectedKelvins: H,
    pixels: I
  };
}, st = async (c, e, t) => {
  const r = new DataView(c), w = r.getUint16(17, !0), T = r.getUint16(19, !0), L = (H, U) => {
    const I = H.getBigInt64(U, !0), C = 62135596800000n, W = 10000n, Y = 24n * 60n * 60n * 1000n * W, f = 0x4000000000000000n, u = 0x8000000000000000n;
    let p = I & 0x3fffffffffffffffn;
    I & u && (p > f - Y && (p -= f), p < 0 && (p += Y));
    const g = p / W - C;
    return Number(g);
  }, q = r.getUint8(15);
  let te = 2;
  q === 1 && (te = 4);
  const se = 57, Q = w * T * te, ce = se + Q, le = c.slice(25), de = le.byteLength / ce, K = {}, fe = (H) => {
    const U = H * ce, I = U + ce, C = le.slice(U, I), W = new DataView(C), Y = L(W, 0), f = W.getFloat32(8, !0), a = W.getFloat32(12, !0) - f, b = 57 + t * te * w + e * te;
    let g = 0;
    if (q === 1)
      g = W.getFloat32(b, !0);
    else if (q === 0) {
      const $ = W.getInt16(b, !0) / 65535;
      g = f + a * $;
    }
    return {
      timestamp: Y,
      temperature: g
    };
  };
  let M = 0;
  for (let H = 0; H < de; H++) {
    const U = fe(H);
    M === 0 && (M = U.timestamp), K[U.timestamp - M] = U.temperature;
  }
  return K;
}, ot = async (c, e, t, r, w) => {
  const T = new DataView(c), L = T.getUint16(17, !0), q = T.getUint16(19, !0), te = (I, C) => {
    const W = I.getBigInt64(C, !0), Y = 62135596800000n, f = 10000n, u = 24n * 60n * 60n * 1000n * f, a = 0x4000000000000000n, p = 0x8000000000000000n;
    let g = W & 0x3fffffffffffffffn;
    W & p && (g > a - u && (g -= a), g < 0 && (g += u));
    const x = g / f - Y;
    return Number(x);
  }, se = T.getUint8(15);
  let Q = 2;
  se === 1 && (Q = 4);
  const ce = 57, le = L * q * Q, de = ce + le, K = c.slice(25), fe = K.byteLength / de, M = {}, H = (I) => {
    const C = I * de, W = C + de, Y = K.slice(C, W), f = new DataView(Y), u = te(f, 0), a = f.getFloat32(8, !0), b = f.getFloat32(12, !0) - a, g = 57, y = e, x = e + r, $ = t, ae = t + w;
    let N = 1 / 0, J = -1 / 0, ne = 0, Z = 0;
    for (let pe = $; pe <= ae; pe++) {
      const ue = pe * L;
      for (let ye = y; ye <= x; ye++) {
        const v = g + (ue + ye) * Q;
        let S = NaN;
        if (se === 1)
          S = f.getFloat32(v, !0);
        else {
          const ge = f.getInt16(v, !0) / 65535;
          S = a + b * ge;
        }
        S < N && (N = S), S > J && (J = S), Z += S, ne++;
      }
    }
    const he = {
      min: N,
      max: J,
      avg: Z / ne,
      count: ne
    };
    return {
      timestamp: u,
      result: he
    };
  };
  let U = 0;
  for (let I = 0; I < fe; I++) {
    const C = H(I);
    U === 0 && (U = C.timestamp), M[C.timestamp - U] = C.result;
  }
  return M;
}, at = async (c) => {
  console.log("Reading histogram");
  let e = [];
  const t = async (M) => {
    const H = new DataView(M.slice(0, 25)), U = H.getUint8(15), I = H.getUint16(17, !0), C = H.getUint16(19, !0), W = U === 1 ? 4 : 2, Y = 57, f = I * C * W, u = Y + f, a = M.slice(25), p = a.byteLength / u;
    let b = [];
    for (let g = 0; g < p; g++) {
      const y = g * u, x = y + 57, $ = x + f, ae = a.slice(x, $);
      if (U === 0) {
        const N = new DataView(a.slice(y, 56)), J = N.getFloat32(8, !0), ne = N.getFloat32(12, !0), Z = new Uint16Array(ae), he = Math.abs(J - ne), pe = 65535;
        Z.forEach((ue) => {
          const ye = ue / pe;
          b.push(J + he * ye);
        });
      } else U === 1 && (b = b.concat(Array.from(new Float32Array(ae))));
    }
    return b;
  };
  (await Promise.all(c.map((M) => t(M)))).forEach((M) => {
    e = e.concat(M);
  }), e.sort((M, H) => M - H);
  const w = e[0], T = e[e.length - 1], L = Math.abs(w - T), q = 255, te = L / q, se = [];
  let Q = [...e];
  for (let M = 0; M < q; M++) {
    const H = w + te * M, U = H + te, I = Q.findIndex((C) => C > U);
    if (I === 0) {
      const C = {
        from: H,
        to: U,
        count: 0,
        percentage: 0
      };
      se.push(C);
    } else {
      const W = Q.slice(0, I - 1).length, Y = W / e.length * 100, f = {
        from: H,
        to: U,
        count: W,
        percentage: Y
      };
      se.push(f), Q = Q.slice(I);
    }
  }
  const ce = [...se].sort((M, H) => M.percentage - H.percentage), le = ce[0].percentage, de = ce[ce.length - 1].percentage, K = Math.abs(le - de);
  return se.map((M) => ({
    ...M,
    height: M.percentage / K * 100
  }));
}, ct = (c, e) => {
  const t = e.endsWith("lrc"), w = new TextDecoder().decode(c.slice(0, 4)) === "LRC\0";
  return t && w;
}, ut = async (c, e, t, r, w) => {
  const T = new DataView(c), L = T.getUint16(17, !0), q = T.getUint16(19, !0), te = (C, W) => {
    const Y = C.getBigInt64(W, !0), f = 62135596800000n, u = 10000n, a = 24n * 60n * 60n * 1000n * u, p = 0x4000000000000000n, b = 0x8000000000000000n;
    let y = Y & 0x3fffffffffffffffn;
    Y & b && (y > p - a && (y -= p), y < 0 && (y += a));
    const $ = y / u - f;
    return Number($);
  }, se = T.getUint8(15);
  let Q = 2;
  se === 1 && (Q = 4);
  const ce = 57, le = L * q * Q, de = ce + le, K = c.slice(25), fe = K.byteLength / de, M = {}, H = (C, W) => {
    const Y = e + r / 2, f = t + w / 2, u = (C - Y) / (r / 2), a = (W - f) / (w / 2);
    return u * u + a * a <= 1;
  }, U = (C) => {
    const W = C * de, Y = W + de, f = K.slice(W, Y), u = new DataView(f), a = te(u, 0), p = u.getFloat32(8, !0), g = u.getFloat32(12, !0) - p, y = 57, x = e, $ = e + r, ae = t, N = t + w;
    let J = 1 / 0, ne = -1 / 0, Z = 0, he = 0;
    for (let ue = ae; ue <= N; ue++) {
      const ye = ue * L;
      for (let v = x; v <= $; v++)
        if (H(v, ue)) {
          const S = y + (ye + v) * Q;
          let R = NaN;
          if (se === 1)
            R = u.getFloat32(S, !0);
          else {
            const xe = u.getInt16(S, !0) / 65535;
            R = p + g * xe;
          }
          R < J && (J = R), R > ne && (ne = R), he += R, Z++;
        }
    }
    const pe = {
      min: J,
      max: ne,
      avg: he / Z,
      count: Z
    };
    return {
      timestamp: a,
      result: pe
    };
  };
  let I = 0;
  for (let C = 0; C < fe; C++) {
    const W = U(C);
    I === 0 && (I = W.timestamp), M[W.timestamp - I] = W.result;
  }
  return M;
}, lt = [{
  extension: "lrc",
  minme: "application/octet-stream"
}], ft = {
  name: "LabIR Recording (.lrc)",
  description: "Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",
  devices: [
    {
      deviceName: "TIMI Edu Infrared Camera",
      deviceUrl: "https://edu.labir.cz",
      deviceDescription: "A thermal camera designed for school education.",
      manufacturer: "TIMI Creation, s.r.o.",
      manufacturerUrl: "https://timic.cz"
    },
    {
      deviceName: "Custom measurement systems by IRT UWB in Pilsen (CZ)",
      deviceUrl: "https://irt.zcu.cz",
      deviceDescription: "Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",
      manufacturer: "IRT UWB in Pilsen (CZ)",
      manufacturerUrl: "https://irt.zcu.cz"
    }
  ],
  extensions: lt,
  is: ct,
  baseInfo: rt,
  getFrameSubset: nt,
  frameData: it,
  registryHistogram: at,
  pointAnalysisData: st,
  rectAnalysisData: ot,
  ellipsisAnalysisData: ut
}, ht = Object.freeze(ft), dt = {
  LrcParser: ht
}, mt = Object.values(dt), pt = mt.map((c) => c.extensions);
pt.map(
  (c) => c.map((e) => e.minme + ", ." + e.extension).join(", ")
).join(", ");
var De = "chrome" in window;
console.log("is chromium", De);
var yt = De ? {
  maxWorkers: 4
} : {};
Ze.pool(yt);
class gt {
  constructor(e) {
    _(this, "identity");
    _(this, "session");
    _(this, "onIdentity", new tt());
    this.client = e;
  }
  isLoggedIn() {
    return this.identity !== void 0;
  }
  login(e) {
    this.identity = e, this.onIdentity.call(this.identity);
  }
  logout() {
    this.identity = void 0, this.onIdentity.call(void 0);
  }
  setSession(e) {
    this.session = e;
  }
  getSession() {
    return this.session;
  }
  getIdentity() {
    return this.identity;
  }
  getAuthorisationHeader() {
    if (this.identity)
      return `Basic ${this.toBase64(`${this.identity.user}:${this.identity.token}`)}`;
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : typeof btoa < "u" ? btoa(e) : this.manualBase64Encode(e);
  }
  manualBase64Encode(e) {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let r = "";
    for (let T = 0; T < e.length; T += 3) {
      const L = e.charCodeAt(T) << 16 | (T + 1 < e.length ? e.charCodeAt(T + 1) << 8 : 0) | (T + 2 < e.length ? e.charCodeAt(T + 2) : 0);
      r += t[L >> 18 & 63] + t[L >> 12 & 63] + t[L >> 6 & 63] + t[L & 63];
    }
    const w = e.length % 3;
    return w > 0 && (r = r.slice(0, -w) + "=".repeat(w)), r;
  }
}
class vt {
  constructor(e) {
    _(this, "path");
    _(this, "method", "GET");
    _(this, "action");
    _(this, "query", /* @__PURE__ */ new Map());
    _(this, "body", {});
    _(this, "headers", {});
    _(this, "files", {});
    this.client = e;
  }
  setPath(e) {
    return e = e.replace(/^\/+|\/+$/g, ""), this.path = e, this;
  }
  setMethod(e) {
    return this.method = e, this;
  }
  setAction(e) {
    return this.action = e, this;
  }
  addQueryParameter(e, t) {
    return this.query.set(e, t), this;
  }
  addBodyParameter(e, t) {
    return this.body[e] = t, this;
  }
  addHeader(e, t) {
    return this.headers[e] = t, this;
  }
  addFile(e, t) {
    return this.files[e] = t, this;
  }
  createRequestInit() {
    const e = [
      "connect",
      "login",
      "logout",
      "currentusertree"
    ].includes(this.action || "");
    if (this.path === void 0 && !e)
      return !1;
    let t = this.client.getServerUrl();
    e || (t += this.path);
    const r = {};
    this.action !== void 0 && (r.action = this.action), this.query.size > 0 && this.query.forEach((te, se) => {
      r[se] = te;
    }), Object.keys(r).length > 0 && (t += "?", t += new URLSearchParams(r).toString());
    const w = new URL(t), T = { ...this.headers };
    this.client.auth.isLoggedIn() && (T.Authorization = this.client.auth.getAuthorisationHeader() || "");
    const L = this.client.auth.getSession();
    L && (T.Cookie = L);
    const q = {
      method: this.method,
      headers: T,
      credentials: "include"
    };
    return {
      url: w,
      options: q
    };
  }
  /**
   * Vytvoří Request s application/json body (bez souborů)
   */
  createRequestJson() {
    const e = this.createRequestInit();
    if (e !== !1) {
      const { url: t, options: r } = e;
      this.method === "POST" && Object.keys(this.body).length > 0 && (r.body = JSON.stringify(this.body));
      const w = {
        ...r,
        headers: {
          ...r.headers,
          "Content-Type": "application/json"
        }
      };
      return new Request(t, w);
    }
    return !1;
  }
  /**
   * Vytvoří Request s multipart/form-data (pro upload souborů)
   */
  createRequestFormData() {
    const e = this.createRequestInit();
    if (e === !1)
      return !1;
    const { url: t, options: r } = e, w = new FormData();
    for (const [L, q] of Object.entries(this.body))
      w.append(L, typeof q == "object" ? JSON.stringify(q) : String(q));
    for (const [L, q] of Object.entries(this.files))
      w.append(L, q, q.name);
    const T = {
      ...r,
      body: w
    };
    return T.headers && typeof T.headers == "object" && delete T.headers["Content-Type"], new Request(t, T);
  }
  createRequest() {
    return Object.keys(this.files).length > 0 ? this.createRequestFormData() : this.createRequestJson();
  }
  getAction() {
    return this.action;
  }
}
class Be {
  constructor(e) {
    _(this, "request");
    this.client = e, this.request = this.client.createRequest();
  }
}
class wt extends Be {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("connect"), this;
  }
  async execute() {
    const e = await this.client.fetch(this.request);
    if (e.success) {
      const t = e;
      t.data.identity !== !1 && this.client.auth.login(t.data.identity);
    }
    return e;
  }
}
class bt extends Be {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("currentusertree"), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class Le extends Be {
  setPath(e) {
    return this.request.setPath(e), this;
  }
}
class kt extends Le {
  init() {
    return this.request.setMethod("GET"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Tt extends Le {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("file"), this;
  }
  setFileName(e) {
    return this.request.addQueryParameter("file", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class Ne extends Le {
  constructor() {
    super(...arguments);
    _(this, "tags", []);
  }
  setFrom(t) {
    const r = t instanceof Date ? t.getTime() : t;
    return this.request.addQueryParameter("from", r.toString()), this;
  }
  setTo(t) {
    const r = t instanceof Date ? t.getTime() : t;
    return this.request.addQueryParameter("to", r.toString()), this;
  }
  setTags(t) {
    return this.tags = t, this.applyTags(), this;
  }
  addTag(t) {
    return this.tags.includes(t) || (this.tags.push(t), this.applyTags()), this;
  }
  removeTag(t) {
    const r = this.tags.length;
    return this.tags = this.tags.filter((w) => w !== t), this.tags.length !== r && this.applyTags(), this;
  }
  /**
   * Internal method used to propagate changed tags to the request.
   */
  applyTags() {
    return this.request.addQueryParameter("tags", this.tags.join(",")), this;
  }
}
class xt extends Ne {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("files"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Pt extends Ne {
  constructor() {
    super(...arguments);
    _(this, "folders", []);
    _(this, "by", "hour");
  }
  init() {
    return this.request.setMethod("GET"), this.request.setAction("grid"), this.request.addQueryParameter("by", this.by), this;
  }
  setBy(t) {
    return this.by = t, this.request.addQueryParameter("by", t), this;
  }
  setFolders(t) {
    return this.folders = t, this.applyFolders(), this;
  }
  addFolder(t) {
    return this.folders.includes(t) || (this.folders.push(t), this.applyFolders()), this;
  }
  removeFolder(t) {
    const r = this.folders.length;
    return this.folders = this.folders.filter((w) => w !== t), this.folders.length !== r && this.applyFolders(), this;
  }
  applyFolders() {
    return this.request.addQueryParameter("folders", this.folders.join(",")), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Et {
  constructor(e) {
    this.client = e;
  }
  /**
   * Connects to a server, eventually returning the existing identity of the currently logged-in user.
   * 
   * If you want to load existing user identity, you need to pass the PHPSESSID to the client before calling this method using `auth.setSession()`.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.auth.setSession("PHPSESSID=1234567890abcdef"); // Set the session ID
   * await client.connect(); // This method is accessible from the Client object itself
   * ```
   */
  connect() {
    return new wt(this.client).init();
  }
  /**
   * Get information about a folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.info("path/to/folder");
   * // Configure request:
   * request.setPath("path/to/folder"); // already set by factory
   * const result = await request.execute();
   * ```
   * 
   * @param path Path of the folder.
   */
  info(e) {
    return new kt(this.client).init().setPath(e);
  }
  /**
   * List of files in the given folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.files("path/to/folder");
   * request
   *  .setFrom(new Date("2023-01-01")) // Optional filter
   *  .setTo(new Date("2023-12-31")) // Optional filter
   *  .addTag("tag-slug"); // Optional filter
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want to get the files
   */
  files(e) {
    return new xt(this.client).init().setPath(e);
  }
  /**
   * List of files in the given folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.files("path/to/folder");
   * // Configure request:
   * request.setFrom(new Date("2023-01-01")); // Optional filter
   * request.setTo(new Date("2023-12-31"));   // Optional filter
   * request.addTag("tag-slug");              // Optional filter
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want to get the files
   */
  grid(e) {
    return new Pt(this.client).init().setPath(e);
  }
  /**
   * Generate the grid from subfolders inside the given directory.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.grid("path/to/folder");
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want the grid to be generated
   * @param filename Name of the LRC file
   */
  file(e, t) {
    return new Tt(this.client).init().setPath(e).setFileName(t);
  }
  /**
   * Get list of folders accessible by the currently logged-in user.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.currentUserTree();
   * const result = await request.execute();
   * ```
   */
  currentUserTree() {
    return new bt(this.client).init();
  }
}
class St extends Le {
  constructor() {
    super(...arguments);
    // Tag buffer for accumulating tags one by one
    _(this, "tagBuffer", {});
    _(this, "accessBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("create"), this;
  }
  setName(t) {
    return this.request.addBodyParameter("name", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  setMeta(t) {
    return this.request.addBodyParameter("meta", t), this;
  }
  /**
   * Přidej jeden tag (klíčem je název, hodnotou objekt s name, description, color)
   */
  addTag(t, r, w) {
    return this.tagBuffer[t] = { name: t }, r !== void 0 && (this.tagBuffer[t].description = r), w !== void 0 && (this.tagBuffer[t].color = w), this;
  }
  /**
   * Nastaví access.show (viditelnost složky)
   */
  setShow(t) {
    return this.accessBuffer.show = t, this;
  }
  /**
   * Nastaví access.may_have_files (zda složka může obsahovat soubory)
   */
  setMayHaveFiles(t) {
    return this.accessBuffer.may_have_files = t, this;
  }
  async execute() {
    return Object.keys(this.tagBuffer).length > 0 && this.request.addBodyParameter("tags", this.tagBuffer), Object.keys(this.accessBuffer).length > 0 && this.request.addBodyParameter("access", this.accessBuffer), await this.client.fetch(this.request);
  }
}
class je extends Le {
  setFile(e) {
    return this.request.addQueryParameter("file", e), this;
  }
}
class _t extends je {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileaddcomment"), this;
  }
  /**
   * Nastaví text komentáře, který bude odeslán na server.
   *
   * @param message Text komentáře
   */
  setMessage(e) {
    return this.request.addBodyParameter("message", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class At extends je {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileclearcomments"), this;
  }
  /**
   * Executes the request to clear comments on a file.
   */
  execute() {
    return this.client.fetch(this.request);
  }
}
class Ot extends je {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("filedeletecomment"), this;
  }
  setCommentTimestamp(e) {
    return this.request.addBodyParameter("timestamp", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class Lt extends je {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileupdatecomment"), this;
  }
  setCommentTimestamp(e) {
    return this.request.addBodyParameter("timestamp", e), this;
  }
  /**
   * Nastaví text komentáře, který bude odeslán na server.
   *
   * @param message Text komentáře
   */
  setMessage(e) {
    return this.request.addBodyParameter("message", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class qt extends Be {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("login"), this;
  }
  setUser(e) {
    return this.request.addBodyParameter("user", e), this;
  }
  setPassword(e) {
    return this.request.addBodyParameter("password", e), this;
  }
  async execute() {
    const e = await this.client.fetch(this.request);
    if (e.success) {
      const t = e;
      this.client.auth.login(t.data.login);
    }
    return e;
  }
}
class Mt extends Be {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("logout"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Ut extends Le {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("move"), this;
  }
  setTarget(e) {
    return this.request.addBodyParameter("target", e), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Ct extends je {
  constructor() {
    super(...arguments);
    _(this, "_clearTags", !1);
    _(this, "_clearAnalyses", !1);
    _(this, "_tagsAdd", []);
    _(this, "_tagsRemove", []);
    _(this, "_analysisAdd", []);
    _(this, "_analysisRemove", []);
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("updatefile"), this;
  }
  setLabel(t) {
    return this.request.addBodyParameter("label", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  addTag(t) {
    return this._tagsAdd.push(t), this;
  }
  removeTag(t) {
    return this._tagsRemove.push(t), this;
  }
  addAnalysis(t) {
    return this._analysisAdd.push(t), this;
  }
  removeAnalysis(t) {
    return this._analysisRemove.push(t), this;
  }
  clearTags() {
    return this._clearTags = !0, this;
  }
  clearAnalyses() {
    return this._clearAnalyses = !0, this;
  }
  async execute() {
    return this._clearTags === !0 ? this.request.addBodyParameter("clearTags", !0) : (this._tagsAdd.length > 0 && this.request.addBodyParameter("addTags", this._tagsAdd), this._tagsRemove.length > 0 && this.request.addBodyParameter("removeTags", this._tagsRemove)), this._clearAnalyses === !0 ? this.request.addBodyParameter("clearAnalyses", !0) : (this._analysisAdd.length > 0 && this.request.addBodyParameter("addAnalyses", this._analysisAdd), this._analysisRemove.length > 0 && this.request.addBodyParameter("removeAnalyses", this._analysisRemove)), await this.client.fetch(this.request);
  }
}
class Bt extends Le {
  constructor() {
    super(...arguments);
    _(this, "tagBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("update"), this;
  }
  setName(t) {
    return this.request.addBodyParameter("name", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  addTag(t, r, w, T) {
    return this.tagBuffer[t] = { name: r }, w !== void 0 && (this.tagBuffer[t].description = w), T !== void 0 && (this.tagBuffer[t].color = T), this.request.addBodyParameter("addTags", this.tagBuffer), this;
  }
  removeTags(t) {
    return this.request.addBodyParameter("removeTags", t), this;
  }
  setMetadata(t) {
    this.request.addBodyParameter("meta", t);
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class jt extends Le {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("uploadfile"), this;
  }
  setLrc(e) {
    return this.request.addFile("lrc", e), this;
  }
  setVisual(e) {
    return this.request.addFile("visual", e), this;
  }
  setPreview(e) {
    return this.request.addFile("preview", e), this;
  }
  /**
   * Nastaví label pro uploadovaný soubor
   */
  setLabel(e) {
    return this.request.addBodyParameter("label", e), this;
  }
  /**
   * Nastaví description pro uploadovaný soubor
   */
  setDescription(e) {
    return this.request.addBodyParameter("description", e), this;
  }
  /**
   * Nastaví tagy pro uploadovaný soubor
   */
  setTags(e) {
    return this.request.addBodyParameter("tags", e), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class Wt {
  constructor(e) {
    this.client = e;
  }
  login(e, t) {
    return new qt(this.client).init().setUser(e).setPassword(t);
  }
  logout() {
    return new Mt(this.client).init();
  }
  createFolder(e, t) {
    return new St(this.client).init().setName(t).setPath(e);
  }
  updateFolder(e) {
    return new Bt(this.client).init().setPath(e);
  }
  moveFolder(e, t) {
    return new Ut(this.client).init().setPath(e).setTarget(t);
  }
  uploadFile(e, t) {
    return new jt(this.client).init().setPath(e).setLrc(t);
  }
  updateFile(e, t) {
    return new Ct(this.client).init().setPath(e).setFile(t);
  }
  fileAddComment(e, t, r) {
    return new _t(this.client).init().setPath(e).setFile(t).setMessage(r);
  }
  fileClearComments(e, t) {
    return new At(this.client).init().setPath(e).setFile(t);
  }
  fileUpdateComment(e, t, r, w) {
    return new Lt(this.client).init().setPath(e).setFile(t).setCommentTimestamp(r).setMessage(w);
  }
  fileDeleteComment(e, t, r) {
    return new Ot(this.client).init().setPath(e).setFile(t).setCommentTimestamp(r);
  }
}
class It {
  constructor(e) {
    /** 
     * All the available GET routed of the API 
     */
    _(this, "get");
    /**
     * All the available POST routes of the API
     */
    _(this, "post");
    this.client = e, this.get = new Et(this.client), this.post = new Wt(this.client);
  }
}
class Rt {
  constructor(e) {
    _(this, "observers", /* @__PURE__ */ new Set());
    _(this, "connected", !1);
    this.client = e;
  }
  observe(e) {
    return this.observers.has(e) || this.observers.add(e), this;
  }
  unobserve(e) {
    return this.observers.has(e) && this.observers.delete(e), this;
  }
  emit(e, t = !1, r) {
    this.onEmit(e, t, r);
  }
}
class Fe {
  constructor(e, t) {
    _(this, "pending");
    this.entity = e, this.name = t;
  }
  /** Is there a pending change in this property? */
  isPending() {
    return this.pending !== void 0;
  }
  /** Gets the value that shall be persisted. */
  getEnqueued() {
    return this.pending;
  }
  /** Enqueue a change of the new value */
  enqueue(e) {
    this.pending = e;
  }
  /** Reset any mutations */
  reset() {
    this.pending = void 0;
  }
  /** Generate the report entry for mutations message */
  report(e = void 0) {
    return e !== void 0 ? [this.name, e] : !1;
  }
}
class Ft extends Rt {
  constructor(t, r) {
    super(t);
    _(this, "info");
    _(this, "update");
    this.path = r, this.update = {
      name: new Fe(this, "name"),
      description: new Fe(this, "description")
    };
  }
  forEveryUpdate(t) {
    Object.values(this.update).forEach(t);
  }
  resetUpdaates() {
    this.forEveryUpdate((t) => t.reset());
  }
  async persist() {
    const t = this.client.routes.post.updateFolder(this.path);
    this.update.name.isPending() && t.setName(this.update.name.getEnqueued()), this.update.description.isPending() && t.setDescription(this.update.description.getEnqueued());
    const r = await t.execute();
    if (r.success === !0) {
      this.info = r.data.result.info;
      const w = [];
      this.forEveryUpdate((L) => {
        if (this.info !== void 0 && L.isPending()) {
          const q = L.report(this.info[L.name]);
          q !== !1 && w.push(q), L.reset();
        }
      });
      const T = Object.fromEntries(w);
      return this.emit("updated", !0, T), this.info;
    }
  }
  current() {
    return this.info;
  }
  async connect() {
    const r = await this.client.routes.get.info(this.path).execute();
    return r.success === !0 ? (this.info = r.data.folder, this.connected = !0, this.emit("connected", !0), !0) : !1;
  }
  disconnect() {
    this.connected = !1, this.emit("disconnected", !1);
  }
  onEmit(t, r, w) {
    this.observers.forEach((T) => {
      const L = r ? this.current() : void 0;
      T.onFolderChanged(t, L, w);
    });
  }
}
class Dt {
  constructor(e) {
    _(this, "folders", /* @__PURE__ */ new Map());
    this.client = e;
  }
  /** 
   * Creates a connection to a folder
  */
  async connectToFolder(e, t) {
    if (this.folders.has(e)) {
      const T = this.folders.get(e);
      return T.observe(t), T;
    }
    const r = new Ft(this.client, e);
    if (r.observe(t), this.folders.set(e, r), !await r.connect())
      throw new Error(`Could not connect to folder at path: ${e}`);
    return r;
  }
}
class Ht {
  constructor(e) {
    /** 
     * The core server URL ending with a slash */
    _(this, "serverUrl");
    /**
     * The authentication service stores the session ID and also the identity of the currently logged in user.
     * - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
     */
    _(this, "auth");
    /**
     * The factories for creating requests to the API.
     * 
     * ```typescript
     * // Create a client
     * const client = new Client("http://localhost:8080");
     * 
     * // Connect it to the server
     * await client.connect();
     * 
     * // Create a request to list files inside a folder
     * const request = client.routes.get.files("path/to/folder");
     * 
     * request
     *  .setFrom( new Date("2023-01-01") ) // Set optional filter
     *  .setTo( new Date("2023-12-31") ) // Set optional filter
     *  .addTag( "tag-slug" ); // Set optional filter
     * 
     * // Execute the request
     * const result = await request.execute();
     * ```
     * 
     * All requests are created as instances of `Operation`, or one of its subclasses.
     * 
     * A request contains a hidden `RequestFactory` that is used to create the actual `Request` object. This object shall never be exposed nor manipulated publically.
     * Every individual `Operation` has its own methods for setting parameters, such as `setPath()`, `addTags()`, etc. 
     * 
     * These methods will store the data in the internal `RequestFactory` object. The `Operation` instance needs to be executed using its asynchronous `execute()` method, which will return a promise that resolves to an `ApiResponseType` object.
     * 
     * Note:
     * - upon creation of the `Client` instance, the route `connect` needs to be called
     * - after connection to the server, other requests are available
     * @package `@labir/server`
     */
    _(this, "routes");
    /**
     * Access server entities directly and manipulate them using a comfortable API.
     * 
     * All entities are observable by their consuming objects, so there should be only one instance of every entity by its given identification.
     */
    _(this, "entities", new Dt(this));
    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    _(this, "connected", !1);
    this.serverUrl = e.trim(), this.serverUrl.endsWith("/") || (this.serverUrl += "/"), this.auth = new gt(this), this.routes = new It(this);
  }
  /** 
   * Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
   * - PHPSESSID is stored in `Auth.setSesson()` 
   * - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
   */
  async connect() {
    if (this.connected)
      throw new Error("Client is already connected.");
    const t = await this.routes.get.connect().execute();
    return t.success === !0 && (this.connected = !0), t;
  }
  /** 
   * Was this `Client` already connected using `Client.connect()`? 
   */
  isConnected() {
    return this.connected;
  }
  /**
   * Creates a new RequestFactory instance
   * - do not use this method directly, use the `routes` property instead
   */
  createRequest() {
    return new vt(this);
  }
  /**
   * @returns The server URL with a trailing slash
   */
  getServerUrl() {
    return this.serverUrl;
  }
  /** 
   * Automatically process every incoming response. 
   * - store the session ID in Auth class
   */
  processResponse(e) {
    const r = (e.headers.get("set-cookie") || "").match(/PHPSESSID=([^;]+)/);
    this.auth.setSession(r ? r[0] : void 0);
  }
  /** 
   * Processes a request factory created using `routes` 
   * 
   * All request factories need to be executed this way because there are necessary checks & processes upon every request:
   * - request is refused until the client is connected
   * - handling of unavailable server errors
   * - storage of the PHPSESSID in the `Auth` class
   * 
   * @todo implement emission of events using the `EventEmitter` class
   * @param factory The request factory to execute
   */
  async fetch(e) {
    if (e.getAction() !== "connect" && this.connected === !1)
      throw new Error("Client is not connected to the server!");
    const t = e.createRequest();
    if (!t)
      throw new Error("Invalid request configuration");
    let r;
    try {
      r = await fetch(t);
    } catch {
      throw new Error("Server is not available or network error occurred.");
    }
    this.processResponse(r);
    const w = await r.json();
    if (w.raw = {
      request: t,
      response: r
    }, !r.ok)
      throw new Error("Request was not successfull at all!");
    return w;
  }
}
export {
  Ht as default
};
