(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // app/javascript/vendor/jquery.js
  var require_jquery = __commonJS({
    "app/javascript/vendor/jquery.js"(exports, module) {
      !(function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
          if (!e2.document) throw new Error("jQuery requires a window with a document");
          return t(e2);
        } : t(e);
      })("undefined" != typeof window ? window : exports, function(ie, e) {
        "use strict";
        var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
          return oe.flat.call(e2);
        } : function(e2) {
          return oe.concat.apply([], e2);
        }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
          return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
        }, y = function(e2) {
          return null != e2 && e2 === e2.window;
        }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
        function m(e2, t2, n2) {
          var r2, i2, o2 = (n2 = n2 || C).createElement("script");
          if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
          n2.head.appendChild(o2).parentNode.removeChild(o2);
        }
        function x(e2) {
          return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
        }
        var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
          return new ce.fn.init(e2, t2);
        };
        function c(e2) {
          var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
          return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
        }
        function fe(e2, t2) {
          return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
        }
        ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
          return ae.call(this);
        }, get: function(e2) {
          return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
        }, pushStack: function(e2) {
          var t2 = ce.merge(this.constructor(), e2);
          return t2.prevObject = this, t2;
        }, each: function(e2) {
          return ce.each(this, e2);
        }, map: function(n2) {
          return this.pushStack(ce.map(this, function(e2, t2) {
            return n2.call(e2, t2, e2);
          }));
        }, slice: function() {
          return this.pushStack(ae.apply(this, arguments));
        }, first: function() {
          return this.eq(0);
        }, last: function() {
          return this.eq(-1);
        }, even: function() {
          return this.pushStack(ce.grep(this, function(e2, t2) {
            return (t2 + 1) % 2;
          }));
        }, odd: function() {
          return this.pushStack(ce.grep(this, function(e2, t2) {
            return t2 % 2;
          }));
        }, eq: function(e2) {
          var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
          return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
        }, end: function() {
          return this.prevObject || this.constructor();
        }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
          var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
          for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
          return a2;
        }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
          throw new Error(e2);
        }, noop: function() {
        }, isPlainObject: function(e2) {
          var t2, n2;
          return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
        }, isEmptyObject: function(e2) {
          var t2;
          for (t2 in e2) return false;
          return true;
        }, globalEval: function(e2, t2, n2) {
          m(e2, { nonce: t2 && t2.nonce }, n2);
        }, each: function(e2, t2) {
          var n2, r2 = 0;
          if (c(e2)) {
            for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
          } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
          return e2;
        }, text: function(e2) {
          var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
          if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
          return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
        }, makeArray: function(e2, t2) {
          var n2 = t2 || [];
          return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
        }, inArray: function(e2, t2, n2) {
          return null == t2 ? -1 : se.call(t2, e2, n2);
        }, isXMLDoc: function(e2) {
          var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
          return !l.test(t2 || n2 && n2.nodeName || "HTML");
        }, merge: function(e2, t2) {
          for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
          return e2.length = i2, e2;
        }, grep: function(e2, t2, n2) {
          for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
          return r2;
        }, map: function(e2, t2, n2) {
          var r2, i2, o2 = 0, a2 = [];
          if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          return g(a2);
        }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
          n["[object " + t2 + "]"] = t2.toLowerCase();
        });
        var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
        ce.contains = function(e2, t2) {
          var n2 = t2 && t2.parentNode;
          return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
        };
        var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function p(e2, t2) {
          return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
        }
        ce.escapeSelector = function(e2) {
          return (e2 + "").replace(f, p);
        };
        var ye = C, me = s;
        !(function() {
          var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
            return e3 === t3 && (a2 = true), 0;
          }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
            var n3 = "0x" + e3.slice(1) - 65536;
            return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
          }, M2 = function() {
            V2();
          }, R2 = J2(function(e3) {
            return true === e3.disabled && fe(e3, "fieldset");
          }, { dir: "parentNode", next: "legend" });
          try {
            k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
          } catch (e3) {
            k2 = { apply: function(e4, t3) {
              me.apply(e4, ae.call(t3));
            }, call: function(e4) {
              me.apply(e4, ae.call(arguments, 1));
            } };
          }
          function I2(t3, e3, n3, r3) {
            var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
            if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
            if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
              if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
                if (9 === p3) {
                  if (!(a3 = e3.getElementById(i3))) return n3;
                  if (a3.id === i3) return k2.call(n3, a3), n3;
                } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
              } else {
                if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
                if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
              }
              if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
                if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
                  (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
                  while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
                  c3 = l3.join(",");
                }
                try {
                  return k2.apply(n3, f3.querySelectorAll(c3)), n3;
                } catch (e4) {
                  h2(t3, true);
                } finally {
                  s3 === S2 && e3.removeAttribute("id");
                }
              }
            }
            return re2(t3.replace(ve, "$1"), e3, n3, r3);
          }
          function W2() {
            var r3 = [];
            return function e3(t3, n3) {
              return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
            };
          }
          function F2(e3) {
            return e3[S2] = true, e3;
          }
          function $2(e3) {
            var t3 = T2.createElement("fieldset");
            try {
              return !!e3(t3);
            } catch (e4) {
              return false;
            } finally {
              t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
            }
          }
          function B2(t3) {
            return function(e3) {
              return fe(e3, "input") && e3.type === t3;
            };
          }
          function _2(t3) {
            return function(e3) {
              return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
            };
          }
          function z2(t3) {
            return function(e3) {
              return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
            };
          }
          function X2(a3) {
            return F2(function(o3) {
              return o3 = +o3, F2(function(e3, t3) {
                var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
                while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
              });
            });
          }
          function U2(e3) {
            return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
          }
          function V2(e3) {
            var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
            return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
              return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
            }), le.disconnectedMatch = $2(function(e4) {
              return i2.call(e4, "*");
            }), le.scope = $2(function() {
              return T2.querySelectorAll(":scope");
            }), le.cssHas = $2(function() {
              try {
                return T2.querySelector(":has(*,:jqfake)"), false;
              } catch (e4) {
                return true;
              }
            }), le.getById ? (b2.filter.ID = function(e4) {
              var t4 = e4.replace(O2, P2);
              return function(e5) {
                return e5.getAttribute("id") === t4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && C2) {
                var n4 = t4.getElementById(e4);
                return n4 ? [n4] : [];
              }
            }) : (b2.filter.ID = function(e4) {
              var n4 = e4.replace(O2, P2);
              return function(e5) {
                var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
                return t4 && t4.value === n4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && C2) {
                var n4, r3, i3, o3 = t4.getElementById(e4);
                if (o3) {
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
                  i3 = t4.getElementsByName(e4), r3 = 0;
                  while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
                }
                return [];
              }
            }), b2.find.TAG = function(e4, t4) {
              return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
            }, b2.find.CLASS = function(e4, t4) {
              if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
            }, d2 = [], $2(function(e4) {
              var t4;
              r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
            }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
              if (e4 === t4) return a2 = true, 0;
              var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
              return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
            }), T2;
          }
          for (e2 in I2.matches = function(e3, t3) {
            return I2(e3, null, null, t3);
          }, I2.matchesSelector = function(e3, t3) {
            if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
              var n3 = i2.call(e3, t3);
              if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
            } catch (e4) {
              h2(t3, true);
            }
            return 0 < I2(t3, T2, null, [e3]).length;
          }, I2.contains = function(e3, t3) {
            return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
          }, I2.attr = function(e3, t3) {
            (e3.ownerDocument || e3) != T2 && V2(e3);
            var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
            return void 0 !== r3 ? r3 : e3.getAttribute(t3);
          }, I2.error = function(e3) {
            throw new Error("Syntax error, unrecognized expression: " + e3);
          }, ce.uniqueSort = function(e3) {
            var t3, n3 = [], r3 = 0, i3 = 0;
            if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
              while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
              while (r3--) he.call(e3, n3[r3], 1);
            }
            return o2 = null, e3;
          }, ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(ae.apply(this)));
          }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
            return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
          }, CHILD: function(e3) {
            return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
          }, PSEUDO: function(e3) {
            var t3, n3 = !e3[6] && e3[2];
            return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
          } }, filter: { TAG: function(e3) {
            var t3 = e3.replace(O2, P2).toLowerCase();
            return "*" === e3 ? function() {
              return true;
            } : function(e4) {
              return fe(e4, t3);
            };
          }, CLASS: function(e3) {
            var t3 = s2[e3 + " "];
            return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
              return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
            });
          }, ATTR: function(n3, r3, i3) {
            return function(e3) {
              var t3 = I2.attr(e3, n3);
              return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
            };
          }, CHILD: function(d3, e3, t3, h3, g3) {
            var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
            return 1 === h3 && 0 === g3 ? function(e4) {
              return !!e4.parentNode;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
              if (l3) {
                if (v3) {
                  while (u3) {
                    o3 = e4;
                    while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
                    s3 = u3 = "only" === d3 && !s3 && "nextSibling";
                  }
                  return true;
                }
                if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
                  p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
                  while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
                    i3[d3] = [E2, a3, p3];
                    break;
                  }
                } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
                  while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
                }
                return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
              }
            };
          }, PSEUDO: function(e3, o3) {
            var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
            return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
              var n3, r3 = a3(e4, o3), i3 = r3.length;
              while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
            }) : function(e4) {
              return a3(e4, 0, t3);
            }) : a3;
          } }, pseudos: { not: F2(function(e3) {
            var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
            return s3[S2] ? F2(function(e4, t3, n3, r4) {
              var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
              while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
            }) : function(e4, t3, n3) {
              return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
            };
          }), has: F2(function(t3) {
            return function(e3) {
              return 0 < I2(t3, e3).length;
            };
          }), contains: F2(function(t3) {
            return t3 = t3.replace(O2, P2), function(e3) {
              return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
            };
          }), lang: F2(function(n3) {
            return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
              var t3;
              do {
                if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
              } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
              return false;
            };
          }), target: function(e3) {
            var t3 = ie.location && ie.location.hash;
            return t3 && t3.slice(1) === e3.id;
          }, root: function(e3) {
            return e3 === r2;
          }, focus: function(e3) {
            return e3 === (function() {
              try {
                return T2.activeElement;
              } catch (e4) {
              }
            })() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
          }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
            return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
          }, selected: function(e3) {
            return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
          }, empty: function(e3) {
            for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
            return true;
          }, parent: function(e3) {
            return !b2.pseudos.empty(e3);
          }, header: function(e3) {
            return q2.test(e3.nodeName);
          }, input: function(e3) {
            return N2.test(e3.nodeName);
          }, button: function(e3) {
            return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
          }, text: function(e3) {
            var t3;
            return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
          }, first: X2(function() {
            return [0];
          }), last: X2(function(e3, t3) {
            return [t3 - 1];
          }), eq: X2(function(e3, t3, n3) {
            return [n3 < 0 ? n3 + t3 : n3];
          }), even: X2(function(e3, t3) {
            for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
            return e3;
          }), odd: X2(function(e3, t3) {
            for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
            return e3;
          }), lt: X2(function(e3, t3, n3) {
            var r3;
            for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
            return e3;
          }), gt: X2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
            return e3;
          }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
          for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
          function G2() {
          }
          function Y2(e3, t3) {
            var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
            if (l3) return t3 ? 0 : l3.slice(0);
            a3 = e3, s3 = [], u3 = b2.preFilter;
            while (a3) {
              for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
              if (!n3) break;
            }
            return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
          }
          function Q2(e3) {
            for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
            return r3;
          }
          function J2(a3, e3, t3) {
            var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
            return e3.first ? function(e4, t4, n3) {
              while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
              return false;
            } : function(e4, t4, n3) {
              var r3, i3, o3 = [E2, f3];
              if (n3) {
                while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
              } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
              else {
                if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
                if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
              }
              return false;
            };
          }
          function K2(i3) {
            return 1 < i3.length ? function(e3, t3, n3) {
              var r3 = i3.length;
              while (r3--) if (!i3[r3](e3, t3, n3)) return false;
              return true;
            } : i3[0];
          }
          function Z2(e3, t3, n3, r3, i3) {
            for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
            return a3;
          }
          function ee2(d3, h3, g3, v3, y3, e3) {
            return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
              var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || (function(e5, t4, n4) {
                for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
                return n4;
              })(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
              if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
                i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
                while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
              }
              if (e4) {
                if (y3 || d3) {
                  if (y3) {
                    i3 = [], o3 = s3.length;
                    while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
                    y3(null, s3 = [], i3, r3);
                  }
                  o3 = s3.length;
                  while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
                }
              } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
            });
          }
          function te2(e3) {
            for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
              return e4 === i3;
            }, a3, true), l3 = J2(function(e4) {
              return -1 < se.call(i3, e4);
            }, a3, true), c3 = [function(e4, t4, n4) {
              var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
              return i3 = null, r4;
            }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
            else {
              if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
                return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
              }
              c3.push(t3);
            }
            return K2(c3);
          }
          function ne2(e3, t3) {
            var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
            if (!a3) {
              t3 || (t3 = Y2(e3)), n3 = t3.length;
              while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
              (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
                var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
                for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
                  if (x3 && o4) {
                    a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
                    while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                      k2.call(r4, o4);
                      break;
                    }
                    i4 && (E2 = h3);
                  }
                  m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
                }
                if (u3 += l3, m3 && l3 !== u3) {
                  a4 = 0;
                  while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
                  if (e4) {
                    if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
                    f3 = Z2(f3);
                  }
                  k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
                }
                return i4 && (E2 = h3, w2 = p3), c3;
              }, m3 ? F2(r3) : r3))).selector = e3;
            }
            return a3;
          }
          function re2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
            if (n3 = n3 || [], 1 === c3.length) {
              if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
                if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
                l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
              }
              i3 = D2.needsContext.test(e3) ? 0 : o3.length;
              while (i3--) {
                if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
                if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
                  if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
                  break;
                }
              }
            }
            return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
          }
          G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
            return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
          }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
        })();
        var d = function(e2, t2, n2) {
          var r2 = [], i2 = void 0 !== n2;
          while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
            if (i2 && ce(e2).is(n2)) break;
            r2.push(e2);
          }
          return r2;
        }, h = function(e2, t2) {
          for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
          return n2;
        }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function T(e2, n2, r2) {
          return v(n2) ? ce.grep(e2, function(e3, t2) {
            return !!n2.call(e3, t2, e3) !== r2;
          }) : n2.nodeType ? ce.grep(e2, function(e3) {
            return e3 === n2 !== r2;
          }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
            return -1 < se.call(n2, e3) !== r2;
          }) : ce.filter(n2, e2, r2);
        }
        ce.filter = function(e2, t2, n2) {
          var r2 = t2[0];
          return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
            return 1 === e3.nodeType;
          }));
        }, ce.fn.extend({ find: function(e2) {
          var t2, n2, r2 = this.length, i2 = this;
          if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
            for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
          }));
          for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
          return 1 < r2 ? ce.uniqueSort(n2) : n2;
        }, filter: function(e2) {
          return this.pushStack(T(this, e2 || [], false));
        }, not: function(e2) {
          return this.pushStack(T(this, e2 || [], true));
        }, is: function(e2) {
          return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
        } });
        var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ce.fn.init = function(e2, t2, n2) {
          var r2, i2;
          if (!e2) return this;
          if (n2 = n2 || k, "string" == typeof e2) {
            if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
            if (r2[1]) {
              if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
              return this;
            }
            return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
          }
          return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
        }).prototype = ce.fn, k = ce(C);
        var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
        function A(e2, t2) {
          while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
          return e2;
        }
        ce.fn.extend({ has: function(e2) {
          var t2 = ce(e2, this), n2 = t2.length;
          return this.filter(function() {
            for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
          });
        }, closest: function(e2, t2) {
          var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
          if (!b.test(e2)) {
            for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
              o2.push(n2);
              break;
            }
          }
          return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
        }, index: function(e2) {
          return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function(e2, t2) {
          return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
        }, addBack: function(e2) {
          return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
        } }), ce.each({ parent: function(e2) {
          var t2 = e2.parentNode;
          return t2 && 11 !== t2.nodeType ? t2 : null;
        }, parents: function(e2) {
          return d(e2, "parentNode");
        }, parentsUntil: function(e2, t2, n2) {
          return d(e2, "parentNode", n2);
        }, next: function(e2) {
          return A(e2, "nextSibling");
        }, prev: function(e2) {
          return A(e2, "previousSibling");
        }, nextAll: function(e2) {
          return d(e2, "nextSibling");
        }, prevAll: function(e2) {
          return d(e2, "previousSibling");
        }, nextUntil: function(e2, t2, n2) {
          return d(e2, "nextSibling", n2);
        }, prevUntil: function(e2, t2, n2) {
          return d(e2, "previousSibling", n2);
        }, siblings: function(e2) {
          return h((e2.parentNode || {}).firstChild, e2);
        }, children: function(e2) {
          return h(e2.firstChild);
        }, contents: function(e2) {
          return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
        } }, function(r2, i2) {
          ce.fn[r2] = function(e2, t2) {
            var n2 = ce.map(this, i2, e2);
            return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
          };
        });
        var D = /[^\x20\t\r\n\f]+/g;
        function N(e2) {
          return e2;
        }
        function q(e2) {
          throw e2;
        }
        function L(e2, t2, n2, r2) {
          var i2;
          try {
            e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
          } catch (e3) {
            n2.apply(void 0, [e3]);
          }
        }
        ce.Callbacks = function(r2) {
          var e2, n2;
          r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
            n2[t3] = true;
          }), n2) : ce.extend({}, r2);
          var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
            for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
              t2 = u2.shift();
              while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
            }
            r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
          }, f2 = { add: function() {
            return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), (function n3(e3) {
              ce.each(e3, function(e4, t3) {
                v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
              });
            })(arguments), t2 && !i2 && c2()), this;
          }, remove: function() {
            return ce.each(arguments, function(e3, t3) {
              var n3;
              while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
            }), this;
          }, has: function(e3) {
            return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
          }, empty: function() {
            return s2 && (s2 = []), this;
          }, disable: function() {
            return a2 = u2 = [], s2 = t2 = "", this;
          }, disabled: function() {
            return !s2;
          }, lock: function() {
            return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
          }, locked: function() {
            return !!a2;
          }, fireWith: function(e3, t3) {
            return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
          }, fire: function() {
            return f2.fireWith(this, arguments), this;
          }, fired: function() {
            return !!o2;
          } };
          return f2;
        }, ce.extend({ Deferred: function(e2) {
          var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
            return i2;
          }, always: function() {
            return s2.done(arguments).fail(arguments), this;
          }, "catch": function(e3) {
            return a2.then(null, e3);
          }, pipe: function() {
            var i3 = arguments;
            return ce.Deferred(function(r2) {
              ce.each(o2, function(e3, t2) {
                var n2 = v(i3[t2[4]]) && i3[t2[4]];
                s2[t2[1]](function() {
                  var e4 = n2 && n2.apply(this, arguments);
                  e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
                });
              }), i3 = null;
            }).promise();
          }, then: function(t2, n2, r2) {
            var u2 = 0;
            function l2(i3, o3, a3, s3) {
              return function() {
                var n3 = this, r3 = arguments, e3 = function() {
                  var e4, t4;
                  if (!(i3 < u2)) {
                    if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
                    t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                  }
                }, t3 = s3 ? e3 : function() {
                  try {
                    e3();
                  } catch (e4) {
                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                  }
                };
                i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
              };
            }
            return ce.Deferred(function(e3) {
              o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
            }).promise();
          }, promise: function(e3) {
            return null != e3 ? ce.extend(e3, a2) : a2;
          } }, s2 = {};
          return ce.each(o2, function(e3, t2) {
            var n2 = t2[2], r2 = t2[5];
            a2[t2[1]] = n2.add, r2 && n2.add(function() {
              i2 = r2;
            }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
              return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
            }, s2[t2[0] + "With"] = n2.fireWith;
          }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
        }, when: function(e2) {
          var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
            return function(e3) {
              r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
            };
          };
          if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
          while (t2--) L(i2[t2], a2(t2), o2.reject);
          return o2.promise();
        } });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ce.Deferred.exceptionHook = function(e2, t2) {
          ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
        }, ce.readyException = function(e2) {
          ie.setTimeout(function() {
            throw e2;
          });
        };
        var O = ce.Deferred();
        function P() {
          C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
        }
        ce.fn.ready = function(e2) {
          return O.then(e2)["catch"](function(e3) {
            ce.readyException(e3);
          }), this;
        }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
          (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
        } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
        var M = function(e2, t2, n2, r2, i2, o2, a2) {
          var s2 = 0, u2 = e2.length, l2 = null == n2;
          if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
          else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
            return l2.call(ce(e3), n3);
          })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
          return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
        }, R = /^-ms-/, I = /-([a-z])/g;
        function W(e2, t2) {
          return t2.toUpperCase();
        }
        function F(e2) {
          return e2.replace(R, "ms-").replace(I, W);
        }
        var $ = function(e2) {
          return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
        };
        function B() {
          this.expando = ce.expando + B.uid++;
        }
        B.uid = 1, B.prototype = { cache: function(e2) {
          var t2 = e2[this.expando];
          return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
        }, set: function(e2, t2, n2) {
          var r2, i2 = this.cache(e2);
          if ("string" == typeof t2) i2[F(t2)] = n2;
          else for (r2 in t2) i2[F(r2)] = t2[r2];
          return i2;
        }, get: function(e2, t2) {
          return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
        }, access: function(e2, t2, n2) {
          return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
        }, remove: function(e2, t2) {
          var n2, r2 = e2[this.expando];
          if (void 0 !== r2) {
            if (void 0 !== t2) {
              n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
              while (n2--) delete r2[t2[n2]];
            }
            (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
          }
        }, hasData: function(e2) {
          var t2 = e2[this.expando];
          return void 0 !== t2 && !ce.isEmptyObject(t2);
        } };
        var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
        function V(e2, t2, n2) {
          var r2, i2;
          if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
            try {
              n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
            } catch (e3) {
            }
            z.set(e2, t2, n2);
          } else n2 = void 0;
          return n2;
        }
        ce.extend({ hasData: function(e2) {
          return z.hasData(e2) || _.hasData(e2);
        }, data: function(e2, t2, n2) {
          return z.access(e2, t2, n2);
        }, removeData: function(e2, t2) {
          z.remove(e2, t2);
        }, _data: function(e2, t2, n2) {
          return _.access(e2, t2, n2);
        }, _removeData: function(e2, t2) {
          _.remove(e2, t2);
        } }), ce.fn.extend({ data: function(n2, e2) {
          var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
          if (void 0 === n2) {
            if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
              t2 = a2.length;
              while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
              _.set(o2, "hasDataAttrs", true);
            }
            return i2;
          }
          return "object" == typeof n2 ? this.each(function() {
            z.set(this, n2);
          }) : M(this, function(e3) {
            var t3;
            if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
            this.each(function() {
              z.set(this, n2, e3);
            });
          }, null, e2, 1 < arguments.length, null, true);
        }, removeData: function(e2) {
          return this.each(function() {
            z.remove(this, e2);
          });
        } }), ce.extend({ queue: function(e2, t2, n2) {
          var r2;
          if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
        }, dequeue: function(e2, t2) {
          t2 = t2 || "fx";
          var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
          "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
            ce.dequeue(e2, t2);
          }, o2)), !r2 && o2 && o2.empty.fire();
        }, _queueHooks: function(e2, t2) {
          var n2 = t2 + "queueHooks";
          return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
            _.remove(e2, [t2 + "queue", n2]);
          }) });
        } }), ce.fn.extend({ queue: function(t2, n2) {
          var e2 = 2;
          return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
            var e3 = ce.queue(this, t2, n2);
            ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
          });
        }, dequeue: function(e2) {
          return this.each(function() {
            ce.dequeue(this, e2);
          });
        }, clearQueue: function(e2) {
          return this.queue(e2 || "fx", []);
        }, promise: function(e2, t2) {
          var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
            --r2 || i2.resolveWith(o2, [o2]);
          };
          "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
          while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
          return s2(), i2.promise(t2);
        } });
        var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
          return ce.contains(e2.ownerDocument, e2);
        }, Z = { composed: true };
        J.getRootNode && (K = function(e2) {
          return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
        });
        var ee = function(e2, t2) {
          return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
        };
        function te(e2, t2, n2, r2) {
          var i2, o2, a2 = 20, s2 = r2 ? function() {
            return r2.cur();
          } : function() {
            return ce.css(e2, t2, "");
          }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
          if (c2 && c2[3] !== l2) {
            u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
            while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
            c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
          }
          return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
        }
        var ne = {};
        function re(e2, t2) {
          for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
          for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
          return e2;
        }
        ce.fn.extend({ show: function() {
          return re(this, true);
        }, hide: function() {
          return re(this);
        }, toggle: function(e2) {
          return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
        } });
        var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
        xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
        var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function Se(e2, t2) {
          var n2;
          return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
        }
        function Ee(e2, t2) {
          for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
        }
        ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
        var je = /<|&#?\w+;/;
        function Ae(e2, t2, n2, r2, i2) {
          for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
          else if (je.test(o2)) {
            a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
            while (c2--) a2 = a2.lastChild;
            ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
          } else p2.push(t2.createTextNode(o2));
          f2.textContent = "", d2 = 0;
          while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
          else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
            c2 = 0;
            while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
          }
          return f2;
        }
        var De = /^([^.]*)(?:\.(.+)|)/;
        function Ne() {
          return true;
        }
        function qe() {
          return false;
        }
        function Le(e2, t2, n2, r2, i2, o2) {
          var a2, s2;
          if ("object" == typeof t2) {
            for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
            return e2;
          }
          if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
          else if (!i2) return e2;
          return 1 === o2 && (a2 = i2, (i2 = function(e3) {
            return ce().off(e3), a2.apply(this, arguments);
          }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
            ce.event.add(this, t2, i2, r2, n2);
          });
        }
        function He(e2, r2, t2) {
          t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
            var t3, n2 = _.get(this, r2);
            if (1 & e3.isTrigger && this[r2]) {
              if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
              else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
            } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
          } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
        }
        ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
          if ($(t2)) {
            n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
              return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
            }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
            while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
          }
        }, remove: function(e2, t2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
          if (v2 && (u2 = v2.events)) {
            l2 = (t2 = (t2 || "").match(D) || [""]).length;
            while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
              f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
              while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
              a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
            } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
            ce.isEmptyObject(u2) && _.remove(e2, "handle events");
          }
        }, dispatch: function(e2) {
          var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
          for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
          if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
            a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
            while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
              u2.currentTarget = i2.elem, n2 = 0;
              while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
            }
            return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
          }
        }, handlers: function(e2, t2) {
          var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
          if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
            for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
              for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
              o2.length && s2.push({ elem: l2, handlers: o2 });
            }
          }
          return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
        }, addProp: function(t2, e2) {
          Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
            if (this.originalEvent) return e2(this.originalEvent);
          } : function() {
            if (this.originalEvent) return this.originalEvent[t2];
          }, set: function(e3) {
            Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
          } });
        }, fix: function(e2) {
          return e2[ce.expando] ? e2 : new ce.Event(e2);
        }, special: { load: { noBubble: true }, click: { setup: function(e2) {
          var t2 = this || e2;
          return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
        }, trigger: function(e2) {
          var t2 = this || e2;
          return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
        }, _default: function(e2) {
          var t2 = e2.target;
          return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
        } }, beforeunload: { postDispatch: function(e2) {
          void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
        } } } }, ce.removeEvent = function(e2, t2, n2) {
          e2.removeEventListener && e2.removeEventListener(t2, n2);
        }, ce.Event = function(e2, t2) {
          if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
          e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
        }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
          var e2 = this.originalEvent;
          this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
        }, stopPropagation: function() {
          var e2 = this.originalEvent;
          this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
        }, stopImmediatePropagation: function() {
          var e2 = this.originalEvent;
          this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
        } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
          function o2(e2) {
            if (C.documentMode) {
              var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
              n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
            } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
          }
          ce.event.special[r2] = { setup: function() {
            var e2;
            if (He(this, r2, true), !C.documentMode) return false;
            (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
          }, trigger: function() {
            return He(this, r2), true;
          }, teardown: function() {
            var e2;
            if (!C.documentMode) return false;
            (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
          }, _default: function(e2) {
            return _.get(e2.target, r2);
          }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
            n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
          }, teardown: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
            n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
          } };
        }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
          ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
            var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
            return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
          } };
        }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
          return Le(this, e2, t2, n2, r2);
        }, one: function(e2, t2, n2, r2) {
          return Le(this, e2, t2, n2, r2, 1);
        }, off: function(e2, t2, n2) {
          var r2, i2;
          if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
          if ("object" == typeof e2) {
            for (i2 in e2) this.off(i2, t2, e2[i2]);
            return this;
          }
          return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
            ce.event.remove(this, e2, n2, t2);
          });
        } });
        var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Re(e2, t2) {
          return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
        }
        function Ie(e2) {
          return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
        }
        function We(e2) {
          return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
        }
        function Fe(e2, t2) {
          var n2, r2, i2, o2, a2, s2;
          if (1 === t2.nodeType) {
            if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
            z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
          }
        }
        function $e(n2, r2, i2, o2) {
          r2 = g(r2);
          var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
          if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
            var t3 = n2.eq(e3);
            h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
          });
          if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
            for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
            if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
          }
          return n2;
        }
        function Be(e2, t2, n2) {
          for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
          return e2;
        }
        ce.extend({ htmlPrefilter: function(e2) {
          return e2;
        }, clone: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
          if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
          if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
          else Fe(e2, c2);
          return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
        }, cleanData: function(e2) {
          for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
            if (t2 = n2[_.expando]) {
              if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
              n2[_.expando] = void 0;
            }
            n2[z.expando] && (n2[z.expando] = void 0);
          }
        } }), ce.fn.extend({ detach: function(e2) {
          return Be(this, e2, true);
        }, remove: function(e2) {
          return Be(this, e2);
        }, text: function(e2) {
          return M(this, function(e3) {
            return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
            });
          }, null, e2, arguments.length);
        }, append: function() {
          return $e(this, arguments, function(e2) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
          });
        }, prepend: function() {
          return $e(this, arguments, function(e2) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t2 = Re(this, e2);
              t2.insertBefore(e2, t2.firstChild);
            }
          });
        }, before: function() {
          return $e(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this);
          });
        }, after: function() {
          return $e(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
          });
        }, empty: function() {
          for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
          return this;
        }, clone: function(e2, t2) {
          return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
            return ce.clone(this, e2, t2);
          });
        }, html: function(e2) {
          return M(this, function(e3) {
            var t2 = this[0] || {}, n2 = 0, r2 = this.length;
            if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
            if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
              e3 = ce.htmlPrefilter(e3);
              try {
                for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
                t2 = 0;
              } catch (e4) {
              }
            }
            t2 && this.empty().append(e3);
          }, null, e2, arguments.length);
        }, replaceWith: function() {
          var n2 = [];
          return $e(this, arguments, function(e2) {
            var t2 = this.parentNode;
            ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
          }, n2);
        } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
          ce.fn[e2] = function(e3) {
            for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
            return this.pushStack(n2);
          };
        });
        var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
          var t2 = e2.ownerDocument.defaultView;
          return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
        }, Ue = function(e2, t2, n2) {
          var r2, i2, o2 = {};
          for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
          for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
          return r2;
        }, Ve = new RegExp(Q.join("|"), "i");
        function Ge(e2, t2, n2) {
          var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
          return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
        }
        function Ye(e2, t2) {
          return { get: function() {
            if (!e2()) return (this.get = t2).apply(this, arguments);
            delete this.get;
          } };
        }
        !(function() {
          function e2() {
            if (l2) {
              u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
              var e3 = ie.getComputedStyle(l2);
              n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
            }
          }
          function t2(e3) {
            return Math.round(parseFloat(e3));
          }
          var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
          l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
            return e2(), r2;
          }, pixelBoxStyles: function() {
            return e2(), o2;
          }, pixelPosition: function() {
            return e2(), n2;
          }, reliableMarginLeft: function() {
            return e2(), s2;
          }, scrollboxSize: function() {
            return e2(), i2;
          }, reliableTrDimensions: function() {
            var e3, t3, n3, r3;
            return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
          } }));
        })();
        var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
        function Ze(e2) {
          var t2 = ce.cssProps[e2] || Ke[e2];
          return t2 || (e2 in Je ? e2 : Ke[e2] = (function(e3) {
            var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
            while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
          })(e2) || e2);
        }
        var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
        function rt(e2, t2, n2) {
          var r2 = Y.exec(t2);
          return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
        }
        function it(e2, t2, n2, r2, i2, o2) {
          var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
          if (n2 === (r2 ? "border" : "content")) return 0;
          for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
          return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
        }
        function ot(e2, t2, n2) {
          var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
          if (_e.test(a2)) {
            if (!n2) return a2;
            a2 = "auto";
          }
          return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
        }
        function at(e2, t2, n2, r2, i2) {
          return new at.prototype.init(e2, t2, n2, r2, i2);
        }
        ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
          if (t2) {
            var n2 = Ge(e2, "opacity");
            return "" === n2 ? "1" : n2;
          }
        } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
          if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
            var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
            if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
            "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
          }
        }, css: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2 = F(t2);
          return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
        } }), ce.each(["height", "width"], function(e2, u2) {
          ce.cssHooks[u2] = { get: function(e3, t2, n2) {
            if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
              return ot(e3, u2, n2);
            });
          }, set: function(e3, t2, n2) {
            var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
            return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
          } };
        }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
          if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
            return e2.getBoundingClientRect().left;
          })) + "px";
        }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
          ce.cssHooks[i2 + o2] = { expand: function(e2) {
            for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
            return n2;
          } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
        }), ce.fn.extend({ css: function(e2, t2) {
          return M(this, function(e3, t3, n2) {
            var r2, i2, o2 = {}, a2 = 0;
            if (Array.isArray(t3)) {
              for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
              return o2;
            }
            return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
          }, e2, t2, 1 < arguments.length);
        } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
          this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
        }, cur: function() {
          var e2 = at.propHooks[this.prop];
          return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
        }, run: function(e2) {
          var t2, n2 = at.propHooks[this.prop];
          return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
        } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
          var t2;
          return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
        }, set: function(e2) {
          ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
        } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
          e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
        } }, ce.easing = { linear: function(e2) {
          return e2;
        }, swing: function(e2) {
          return 0.5 - Math.cos(e2 * Math.PI) / 2;
        }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
        var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
        function dt() {
          ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
        }
        function ht() {
          return ie.setTimeout(function() {
            st = void 0;
          }), st = Date.now();
        }
        function gt(e2, t2) {
          var n2, r2 = 0, i2 = { height: e2 };
          for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
          return t2 && (i2.opacity = i2.width = e2), i2;
        }
        function vt(e2, t2, n2) {
          for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
        }
        function yt(o2, e2, t2) {
          var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
            delete u2.elem;
          }), u2 = function() {
            if (a2) return false;
            for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
            return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
          }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
            var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
            return l2.tweens.push(n3), n3;
          }, stop: function(e3) {
            var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
            if (a2) return this;
            for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
            return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
          } }), c2 = l2.props;
          for (!(function(e3, t3) {
            var n3, r3, i3, o3, a3;
            for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
            else t3[r3] = i3;
          })(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
          return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
        }
        ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
          var n2 = this.createTween(e2, t2);
          return te(n2.elem, e2, Y.exec(t2), n2), n2;
        }] }, tweener: function(e2, t2) {
          v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
          for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
        }, prefilters: [function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
          for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
            a2.unqueued || s2();
          }), a2.unqueued++, p2.always(function() {
            p2.always(function() {
              a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
            });
          })), t2) if (i2 = t2[r2], ft.test(i2)) {
            if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
              if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
              g2 = true;
            }
            d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
          }
          if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
            h2.display = l2;
          }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
            h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
          })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
            for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
          })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
        }], prefilter: function(e2, t2) {
          t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
        } }), ce.speed = function(e2, t2, n2) {
          var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
          return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
            v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
          }, r2;
        }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
          return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
        }, animate: function(t2, e2, n2, r2) {
          var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
            var e3 = yt(this, ce.extend({}, t2), o2);
            (i2 || _.get(this, "finish")) && e3.stop(true);
          };
          return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
        }, stop: function(i2, e2, o2) {
          var a2 = function(e3) {
            var t2 = e3.stop;
            delete e3.stop, t2(o2);
          };
          return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
            var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
            if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
            else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
            for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
            !e3 && o2 || ce.dequeue(this, i2);
          });
        }, finish: function(a2) {
          return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
            var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
            for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
            for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
            delete t2.finish;
          });
        } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
          var i2 = ce.fn[r2];
          ce.fn[r2] = function(e3, t2, n2) {
            return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
          };
        }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
          ce.fn[e2] = function(e3, t2, n2) {
            return this.animate(r2, e3, t2, n2);
          };
        }), ce.timers = [], ce.fx.tick = function() {
          var e2, t2 = 0, n2 = ce.timers;
          for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
          n2.length || ce.fx.stop(), st = void 0;
        }, ce.fx.timer = function(e2) {
          ce.timers.push(e2), ce.fx.start();
        }, ce.fx.interval = 13, ce.fx.start = function() {
          ut || (ut = true, dt());
        }, ce.fx.stop = function() {
          ut = null;
        }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
          return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
            var n2 = ie.setTimeout(e3, r2);
            t2.stop = function() {
              ie.clearTimeout(n2);
            };
          });
        }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
        var mt, xt = ce.expr.attrHandle;
        ce.fn.extend({ attr: function(e2, t2) {
          return M(this, ce.attr, e2, t2, 1 < arguments.length);
        }, removeAttr: function(e2) {
          return this.each(function() {
            ce.removeAttr(this, e2);
          });
        } }), ce.extend({ attr: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
        }, attrHooks: { type: { set: function(e2, t2) {
          if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
            var n2 = e2.value;
            return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
          }
        } } }, removeAttr: function(e2, t2) {
          var n2, r2 = 0, i2 = t2 && t2.match(D);
          if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
        } }), mt = { set: function(e2, t2, n2) {
          return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
        } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
          var a2 = xt[t2] || ce.find.attr;
          xt[t2] = function(e3, t3, n2) {
            var r2, i2, o2 = t3.toLowerCase();
            return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
          };
        });
        var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
        function Tt(e2) {
          return (e2.match(D) || []).join(" ");
        }
        function Ct(e2) {
          return e2.getAttribute && e2.getAttribute("class") || "";
        }
        function kt(e2) {
          return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
        }
        ce.fn.extend({ prop: function(e2, t2) {
          return M(this, ce.prop, e2, t2, 1 < arguments.length);
        }, removeProp: function(e2) {
          return this.each(function() {
            delete this[ce.propFix[e2] || e2];
          });
        } }), ce.extend({ prop: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
        }, propHooks: { tabIndex: { get: function(e2) {
          var t2 = ce.find.attr(e2, "tabindex");
          return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
          var t2 = e2.parentNode;
          return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
        }, set: function(e2) {
          var t2 = e2.parentNode;
          t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
        } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          ce.propFix[this.toLowerCase()] = this;
        }), ce.fn.extend({ addClass: function(t2) {
          var e2, n2, r2, i2, o2, a2;
          return v(t2) ? this.each(function(e3) {
            ce(this).addClass(t2.call(this, e3, Ct(this)));
          }) : (e2 = kt(t2)).length ? this.each(function() {
            if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
              for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
              a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
            }
          }) : this;
        }, removeClass: function(t2) {
          var e2, n2, r2, i2, o2, a2;
          return v(t2) ? this.each(function(e3) {
            ce(this).removeClass(t2.call(this, e3, Ct(this)));
          }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
            if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
              for (o2 = 0; o2 < e2.length; o2++) {
                i2 = e2[o2];
                while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
              }
              a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
            }
          }) : this : this.attr("class", "");
        }, toggleClass: function(t2, n2) {
          var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
          return v(t2) ? this.each(function(e3) {
            ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
          }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
            if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
            else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
          }));
        }, hasClass: function(e2) {
          var t2, n2, r2 = 0;
          t2 = " " + e2 + " ";
          while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
          return false;
        } });
        var St = /\r/g;
        ce.fn.extend({ val: function(n2) {
          var r2, e2, i2, t2 = this[0];
          return arguments.length ? (i2 = v(n2), this.each(function(e3) {
            var t3;
            1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
              return null == e4 ? "" : e4 + "";
            })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
          })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
        } }), ce.extend({ valHooks: { option: { get: function(e2) {
          var t2 = ce.find.attr(e2, "value");
          return null != t2 ? t2 : Tt(ce.text(e2));
        } }, select: { get: function(e2) {
          var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
          for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
            if (t2 = ce(n2).val(), a2) return t2;
            s2.push(t2);
          }
          return s2;
        }, set: function(e2, t2) {
          var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
          while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
          return n2 || (e2.selectedIndex = -1), o2;
        } } } }), ce.each(["radio", "checkbox"], function() {
          ce.valHooks[this] = { set: function(e2, t2) {
            if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
          } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
            return null === e2.getAttribute("value") ? "on" : e2.value;
          });
        });
        var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
        ce.parseXML = function(e2) {
          var t2, n2;
          if (!e2 || "string" != typeof e2) return null;
          try {
            t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
          } catch (e3) {
          }
          return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
            return e3.textContent;
          }).join("\n") : e2)), t2;
        };
        var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
          e2.stopPropagation();
        };
        ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
          if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
            if (!r2 && !c2.noBubble && !y(n2)) {
              for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
              a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
            }
            i2 = 0;
            while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
            return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
          }
        }, simulate: function(e2, t2, n2) {
          var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
          ce.event.trigger(r2, null, t2);
        } }), ce.fn.extend({ trigger: function(e2, t2) {
          return this.each(function() {
            ce.event.trigger(e2, t2, this);
          });
        }, triggerHandler: function(e2, t2) {
          var n2 = this[0];
          if (n2) return ce.event.trigger(e2, t2, n2, true);
        } });
        var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
        function Pt(n2, e2, r2, i2) {
          var t2;
          if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
            r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
          });
          else if (r2 || "object" !== x(e2)) i2(n2, e2);
          else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
        }
        ce.param = function(e2, t2) {
          var n2, r2 = [], i2 = function(e3, t3) {
            var n3 = v(t3) ? t3() : t3;
            r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
          };
          if (null == e2) return "";
          if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
            i2(this.name, this.value);
          });
          else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
          return r2.join("&");
        }, ce.fn.extend({ serialize: function() {
          return ce.param(this.serializeArray());
        }, serializeArray: function() {
          return this.map(function() {
            var e2 = ce.prop(this, "elements");
            return e2 ? ce.makeArray(e2) : this;
          }).filter(function() {
            var e2 = this.type;
            return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
          }).map(function(e2, t2) {
            var n2 = ce(this).val();
            return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
              return { name: t2.name, value: e3.replace(Lt, "\r\n") };
            }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
          }).get();
        } });
        var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
        function Ut(o2) {
          return function(e2, t2) {
            "string" != typeof e2 && (t2 = e2, e2 = "*");
            var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
            if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
          };
        }
        function Vt(t2, i2, o2, a2) {
          var s2 = {}, u2 = t2 === _t;
          function l2(e2) {
            var r2;
            return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
              var n2 = t3(i2, o2, a2);
              return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
            }), r2;
          }
          return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
        }
        function Gt(e2, t2) {
          var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
          for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
          return r2 && ce.extend(true, e2, r2), e2;
        }
        Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
          return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
        }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
          "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
          var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
            var t3;
            if (h2) {
              if (!n2) {
                n2 = {};
                while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
              }
              t3 = n2[e3.toLowerCase() + " "];
            }
            return null == t3 ? null : t3.join(", ");
          }, getAllResponseHeaders: function() {
            return h2 ? p2 : null;
          }, setRequestHeader: function(e3, t3) {
            return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
          }, overrideMimeType: function(e3) {
            return null == h2 && (v2.mimeType = e3), this;
          }, statusCode: function(e3) {
            var t3;
            if (e3) if (h2) T2.always(e3[T2.status]);
            else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
            return this;
          }, abort: function(e3) {
            var t3 = e3 || u2;
            return c2 && c2.abort(t3), l2(0, t3), this;
          } };
          if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
            r2 = C.createElement("a");
            try {
              r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
            } catch (e3) {
              v2.crossDomain = true;
            }
          }
          if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
          for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
          if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
          if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
            if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
            v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
              T2.abort("timeout");
            }, v2.timeout));
            try {
              h2 = false, c2.send(a2, l2);
            } catch (e3) {
              if (h2) throw e3;
              l2(-1, e3);
            }
          } else l2(-1, "No Transport");
          function l2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = t3;
            h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = (function(e4, t4, n4) {
              var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
              while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
              if (r4) {
                for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
                  u4.unshift(i4);
                  break;
                }
              }
              if (u4[0] in n4) o4 = u4[0];
              else {
                for (i4 in n4) {
                  if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                    o4 = i4;
                    break;
                  }
                  a4 || (a4 = i4);
                }
                o4 = o4 || a4;
              }
              if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
            })(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
            }), s3 = (function(e4, t4, n4, r4) {
              var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
              if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
              o4 = c3.shift();
              while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                if ("*" === o4) o4 = u4;
                else if ("*" !== u4 && u4 !== o4) {
                  if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                    for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                      true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                      break;
                    }
                  }
                  if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
                  else try {
                    t4 = a4(t4);
                  } catch (e5) {
                    return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                  }
                }
              }
              return { state: "success", data: t4 };
            })(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
          }
          return T2;
        }, getJSON: function(e2, t2, n2) {
          return ce.get(e2, t2, n2, "json");
        }, getScript: function(e2, t2) {
          return ce.get(e2, void 0, t2, "script");
        } }), ce.each(["get", "post"], function(e2, i2) {
          ce[i2] = function(e3, t2, n2, r2) {
            return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
          };
        }), ce.ajaxPrefilter(function(e2) {
          var t2;
          for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
        }), ce._evalUrl = function(e2, t2, n2) {
          return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
          } }, dataFilter: function(e3) {
            ce.globalEval(e3, t2, n2);
          } });
        }, ce.fn.extend({ wrapAll: function(e2) {
          var t2;
          return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
            var e3 = this;
            while (e3.firstElementChild) e3 = e3.firstElementChild;
            return e3;
          }).append(this)), this;
        }, wrapInner: function(n2) {
          return v(n2) ? this.each(function(e2) {
            ce(this).wrapInner(n2.call(this, e2));
          }) : this.each(function() {
            var e2 = ce(this), t2 = e2.contents();
            t2.length ? t2.wrapAll(n2) : e2.append(n2);
          });
        }, wrap: function(t2) {
          var n2 = v(t2);
          return this.each(function(e2) {
            ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
          });
        }, unwrap: function(e2) {
          return this.parent(e2).not("body").each(function() {
            ce(this).replaceWith(this.childNodes);
          }), this;
        } }), ce.expr.pseudos.hidden = function(e2) {
          return !ce.expr.pseudos.visible(e2);
        }, ce.expr.pseudos.visible = function(e2) {
          return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
        }, ce.ajaxSettings.xhr = function() {
          try {
            return new ie.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
        le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
          var o2, a2;
          if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
            var n2, r2 = i2.xhr();
            if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
            for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
            o2 = function(e3) {
              return function() {
                o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
              };
            }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
              4 === r2.readyState && ie.setTimeout(function() {
                o2 && a2();
              });
            }, o2 = o2("abort");
            try {
              r2.send(i2.hasContent && i2.data || null);
            } catch (e3) {
              if (o2) throw e3;
            }
          }, abort: function() {
            o2 && o2();
          } };
        }), ce.ajaxPrefilter(function(e2) {
          e2.crossDomain && (e2.contents.script = false);
        }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
          return ce.globalEval(e2), e2;
        } } }), ce.ajaxPrefilter("script", function(e2) {
          void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
        }), ce.ajaxTransport("script", function(n2) {
          var r2, i2;
          if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
            r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
              r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
            }), C.head.appendChild(r2[0]);
          }, abort: function() {
            i2 && i2();
          } };
        });
        var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
          var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
          return this[e2] = true, e2;
        } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
          var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
          if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
            return o2 || ce.error(r2 + " was not called"), o2[0];
          }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
            o2 = arguments;
          }, n2.always(function() {
            void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
          }), "script";
        }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
          return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
          var r2, i2, o2;
        }, ce.fn.load = function(e2, t2, n2) {
          var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
          return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
            o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
          }).always(n2 && function(e3, t3) {
            a2.each(function() {
              n2.apply(this, o2 || [e3.responseText, t3, e3]);
            });
          }), this;
        }, ce.expr.pseudos.animated = function(t2) {
          return ce.grep(ce.timers, function(e2) {
            return t2 === e2.elem;
          }).length;
        }, ce.offset = { setOffset: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
          "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
        } }, ce.fn.extend({ offset: function(t2) {
          if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
            ce.offset.setOffset(this, t2, e3);
          });
          var e2, n2, r2 = this[0];
          return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function() {
          if (this[0]) {
            var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
            if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
            else {
              t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
              while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
              e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
            }
            return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
          }
        }, offsetParent: function() {
          return this.map(function() {
            var e2 = this.offsetParent;
            while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
            return e2 || J;
          });
        } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
          var o2 = "pageYOffset" === i2;
          ce.fn[t2] = function(e2) {
            return M(this, function(e3, t3, n2) {
              var r2;
              if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
              r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
            }, t2, e2, arguments.length);
          };
        }), ce.each(["top", "left"], function(e2, n2) {
          ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
            if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
          });
        }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
          ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
            ce.fn[o2] = function(e2, t2) {
              var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
              return M(this, function(e3, t3, n3) {
                var r3;
                return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
              }, s2, n2 ? e2 : void 0, n2);
            };
          });
        }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
          ce.fn[t2] = function(e3) {
            return this.on(t2, e3);
          };
        }), ce.fn.extend({ bind: function(e2, t2, n2) {
          return this.on(e2, null, t2, n2);
        }, unbind: function(e2, t2) {
          return this.off(e2, null, t2);
        }, delegate: function(e2, t2, n2, r2) {
          return this.on(t2, e2, n2, r2);
        }, undelegate: function(e2, t2, n2) {
          return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
        }, hover: function(e2, t2) {
          return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
        } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
          ce.fn[n2] = function(e3, t2) {
            return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
          };
        });
        var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        ce.proxy = function(e2, t2) {
          var n2, r2, i2;
          if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
            return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
          }).guid = e2.guid = e2.guid || ce.guid++, i2;
        }, ce.holdReady = function(e2) {
          e2 ? ce.readyWait++ : ce.ready(true);
        }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
          var t2 = ce.type(e2);
          return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
        }, ce.trim = function(e2) {
          return null == e2 ? "" : (e2 + "").replace(en, "$1");
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
          return ce;
        });
        var tn = ie.jQuery, nn = ie.$;
        return ce.noConflict = function(e2) {
          return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
        }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
      });
    }
  });

  // app/javascript/vendor/cocoon.js
  var require_cocoon = __commonJS({
    "app/javascript/vendor/cocoon.js"(exports, module) {
      !(function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
          if (!e2.document) throw new Error("jQuery requires a window with a document");
          return t(e2);
        } : t(e);
      })("undefined" != typeof window ? window : exports, function(ie, e) {
        "use strict";
        var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
          return oe.flat.call(e2);
        } : function(e2) {
          return oe.concat.apply([], e2);
        }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
          return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
        }, y = function(e2) {
          return null != e2 && e2 === e2.window;
        }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
        function m(e2, t2, n2) {
          var r2, i2, o2 = (n2 = n2 || C).createElement("script");
          if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
          n2.head.appendChild(o2).parentNode.removeChild(o2);
        }
        function x(e2) {
          return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
        }
        var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
          return new ce.fn.init(e2, t2);
        };
        function c(e2) {
          var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
          return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
        }
        function fe(e2, t2) {
          return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
        }
        ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
          return ae.call(this);
        }, get: function(e2) {
          return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
        }, pushStack: function(e2) {
          var t2 = ce.merge(this.constructor(), e2);
          return t2.prevObject = this, t2;
        }, each: function(e2) {
          return ce.each(this, e2);
        }, map: function(n2) {
          return this.pushStack(ce.map(this, function(e2, t2) {
            return n2.call(e2, t2, e2);
          }));
        }, slice: function() {
          return this.pushStack(ae.apply(this, arguments));
        }, first: function() {
          return this.eq(0);
        }, last: function() {
          return this.eq(-1);
        }, even: function() {
          return this.pushStack(ce.grep(this, function(e2, t2) {
            return (t2 + 1) % 2;
          }));
        }, odd: function() {
          return this.pushStack(ce.grep(this, function(e2, t2) {
            return t2 % 2;
          }));
        }, eq: function(e2) {
          var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
          return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
        }, end: function() {
          return this.prevObject || this.constructor();
        }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
          var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
          for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
          return a2;
        }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
          throw new Error(e2);
        }, noop: function() {
        }, isPlainObject: function(e2) {
          var t2, n2;
          return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
        }, isEmptyObject: function(e2) {
          var t2;
          for (t2 in e2) return false;
          return true;
        }, globalEval: function(e2, t2, n2) {
          m(e2, { nonce: t2 && t2.nonce }, n2);
        }, each: function(e2, t2) {
          var n2, r2 = 0;
          if (c(e2)) {
            for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
          } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
          return e2;
        }, text: function(e2) {
          var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
          if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
          return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
        }, makeArray: function(e2, t2) {
          var n2 = t2 || [];
          return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
        }, inArray: function(e2, t2, n2) {
          return null == t2 ? -1 : se.call(t2, e2, n2);
        }, isXMLDoc: function(e2) {
          var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
          return !l.test(t2 || n2 && n2.nodeName || "HTML");
        }, merge: function(e2, t2) {
          for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
          return e2.length = i2, e2;
        }, grep: function(e2, t2, n2) {
          for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
          return r2;
        }, map: function(e2, t2, n2) {
          var r2, i2, o2 = 0, a2 = [];
          if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
          return g(a2);
        }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
          n["[object " + t2 + "]"] = t2.toLowerCase();
        });
        var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
        ce.contains = function(e2, t2) {
          var n2 = t2 && t2.parentNode;
          return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
        };
        var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function p(e2, t2) {
          return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
        }
        ce.escapeSelector = function(e2) {
          return (e2 + "").replace(f, p);
        };
        var ye = C, me = s;
        !(function() {
          var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
            return e3 === t3 && (a2 = true), 0;
          }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
            var n3 = "0x" + e3.slice(1) - 65536;
            return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
          }, M2 = function() {
            V2();
          }, R2 = J2(function(e3) {
            return true === e3.disabled && fe(e3, "fieldset");
          }, { dir: "parentNode", next: "legend" });
          try {
            k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
          } catch (e3) {
            k2 = { apply: function(e4, t3) {
              me.apply(e4, ae.call(t3));
            }, call: function(e4) {
              me.apply(e4, ae.call(arguments, 1));
            } };
          }
          function I2(t3, e3, n3, r3) {
            var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
            if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
            if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
              if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
                if (9 === p3) {
                  if (!(a3 = e3.getElementById(i3))) return n3;
                  if (a3.id === i3) return k2.call(n3, a3), n3;
                } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
              } else {
                if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
                if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
              }
              if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
                if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
                  (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
                  while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
                  c3 = l3.join(",");
                }
                try {
                  return k2.apply(n3, f3.querySelectorAll(c3)), n3;
                } catch (e4) {
                  h2(t3, true);
                } finally {
                  s3 === S2 && e3.removeAttribute("id");
                }
              }
            }
            return re2(t3.replace(ve, "$1"), e3, n3, r3);
          }
          function W2() {
            var r3 = [];
            return function e3(t3, n3) {
              return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
            };
          }
          function F2(e3) {
            return e3[S2] = true, e3;
          }
          function $2(e3) {
            var t3 = T2.createElement("fieldset");
            try {
              return !!e3(t3);
            } catch (e4) {
              return false;
            } finally {
              t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
            }
          }
          function B2(t3) {
            return function(e3) {
              return fe(e3, "input") && e3.type === t3;
            };
          }
          function _2(t3) {
            return function(e3) {
              return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
            };
          }
          function z2(t3) {
            return function(e3) {
              return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
            };
          }
          function X2(a3) {
            return F2(function(o3) {
              return o3 = +o3, F2(function(e3, t3) {
                var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
                while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
              });
            });
          }
          function U2(e3) {
            return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
          }
          function V2(e3) {
            var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
            return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
              return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
            }), le.disconnectedMatch = $2(function(e4) {
              return i2.call(e4, "*");
            }), le.scope = $2(function() {
              return T2.querySelectorAll(":scope");
            }), le.cssHas = $2(function() {
              try {
                return T2.querySelector(":has(*,:jqfake)"), false;
              } catch (e4) {
                return true;
              }
            }), le.getById ? (b2.filter.ID = function(e4) {
              var t4 = e4.replace(O2, P2);
              return function(e5) {
                return e5.getAttribute("id") === t4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && C2) {
                var n4 = t4.getElementById(e4);
                return n4 ? [n4] : [];
              }
            }) : (b2.filter.ID = function(e4) {
              var n4 = e4.replace(O2, P2);
              return function(e5) {
                var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
                return t4 && t4.value === n4;
              };
            }, b2.find.ID = function(e4, t4) {
              if ("undefined" != typeof t4.getElementById && C2) {
                var n4, r3, i3, o3 = t4.getElementById(e4);
                if (o3) {
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
                  i3 = t4.getElementsByName(e4), r3 = 0;
                  while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
                }
                return [];
              }
            }), b2.find.TAG = function(e4, t4) {
              return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
            }, b2.find.CLASS = function(e4, t4) {
              if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
            }, d2 = [], $2(function(e4) {
              var t4;
              r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
            }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
              if (e4 === t4) return a2 = true, 0;
              var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
              return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
            }), T2;
          }
          for (e2 in I2.matches = function(e3, t3) {
            return I2(e3, null, null, t3);
          }, I2.matchesSelector = function(e3, t3) {
            if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
              var n3 = i2.call(e3, t3);
              if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
            } catch (e4) {
              h2(t3, true);
            }
            return 0 < I2(t3, T2, null, [e3]).length;
          }, I2.contains = function(e3, t3) {
            return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
          }, I2.attr = function(e3, t3) {
            (e3.ownerDocument || e3) != T2 && V2(e3);
            var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
            return void 0 !== r3 ? r3 : e3.getAttribute(t3);
          }, I2.error = function(e3) {
            throw new Error("Syntax error, unrecognized expression: " + e3);
          }, ce.uniqueSort = function(e3) {
            var t3, n3 = [], r3 = 0, i3 = 0;
            if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
              while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
              while (r3--) he.call(e3, n3[r3], 1);
            }
            return o2 = null, e3;
          }, ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(ae.apply(this)));
          }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
            return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
          }, CHILD: function(e3) {
            return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
          }, PSEUDO: function(e3) {
            var t3, n3 = !e3[6] && e3[2];
            return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
          } }, filter: { TAG: function(e3) {
            var t3 = e3.replace(O2, P2).toLowerCase();
            return "*" === e3 ? function() {
              return true;
            } : function(e4) {
              return fe(e4, t3);
            };
          }, CLASS: function(e3) {
            var t3 = s2[e3 + " "];
            return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
              return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
            });
          }, ATTR: function(n3, r3, i3) {
            return function(e3) {
              var t3 = I2.attr(e3, n3);
              return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
            };
          }, CHILD: function(d3, e3, t3, h3, g3) {
            var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
            return 1 === h3 && 0 === g3 ? function(e4) {
              return !!e4.parentNode;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
              if (l3) {
                if (v3) {
                  while (u3) {
                    o3 = e4;
                    while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
                    s3 = u3 = "only" === d3 && !s3 && "nextSibling";
                  }
                  return true;
                }
                if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
                  p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
                  while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
                    i3[d3] = [E2, a3, p3];
                    break;
                  }
                } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
                  while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
                }
                return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
              }
            };
          }, PSEUDO: function(e3, o3) {
            var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
            return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
              var n3, r3 = a3(e4, o3), i3 = r3.length;
              while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
            }) : function(e4) {
              return a3(e4, 0, t3);
            }) : a3;
          } }, pseudos: { not: F2(function(e3) {
            var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
            return s3[S2] ? F2(function(e4, t3, n3, r4) {
              var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
              while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
            }) : function(e4, t3, n3) {
              return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
            };
          }), has: F2(function(t3) {
            return function(e3) {
              return 0 < I2(t3, e3).length;
            };
          }), contains: F2(function(t3) {
            return t3 = t3.replace(O2, P2), function(e3) {
              return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
            };
          }), lang: F2(function(n3) {
            return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
              var t3;
              do {
                if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
              } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
              return false;
            };
          }), target: function(e3) {
            var t3 = ie.location && ie.location.hash;
            return t3 && t3.slice(1) === e3.id;
          }, root: function(e3) {
            return e3 === r2;
          }, focus: function(e3) {
            return e3 === (function() {
              try {
                return T2.activeElement;
              } catch (e4) {
              }
            })() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
          }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
            return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
          }, selected: function(e3) {
            return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
          }, empty: function(e3) {
            for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
            return true;
          }, parent: function(e3) {
            return !b2.pseudos.empty(e3);
          }, header: function(e3) {
            return q2.test(e3.nodeName);
          }, input: function(e3) {
            return N2.test(e3.nodeName);
          }, button: function(e3) {
            return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
          }, text: function(e3) {
            var t3;
            return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
          }, first: X2(function() {
            return [0];
          }), last: X2(function(e3, t3) {
            return [t3 - 1];
          }), eq: X2(function(e3, t3, n3) {
            return [n3 < 0 ? n3 + t3 : n3];
          }), even: X2(function(e3, t3) {
            for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
            return e3;
          }), odd: X2(function(e3, t3) {
            for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
            return e3;
          }), lt: X2(function(e3, t3, n3) {
            var r3;
            for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
            return e3;
          }), gt: X2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
            return e3;
          }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
          for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
          function G2() {
          }
          function Y2(e3, t3) {
            var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
            if (l3) return t3 ? 0 : l3.slice(0);
            a3 = e3, s3 = [], u3 = b2.preFilter;
            while (a3) {
              for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
              if (!n3) break;
            }
            return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
          }
          function Q2(e3) {
            for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
            return r3;
          }
          function J2(a3, e3, t3) {
            var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
            return e3.first ? function(e4, t4, n3) {
              while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
              return false;
            } : function(e4, t4, n3) {
              var r3, i3, o3 = [E2, f3];
              if (n3) {
                while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
              } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
              else {
                if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
                if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
              }
              return false;
            };
          }
          function K2(i3) {
            return 1 < i3.length ? function(e3, t3, n3) {
              var r3 = i3.length;
              while (r3--) if (!i3[r3](e3, t3, n3)) return false;
              return true;
            } : i3[0];
          }
          function Z2(e3, t3, n3, r3, i3) {
            for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
            return a3;
          }
          function ee2(d3, h3, g3, v3, y3, e3) {
            return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
              var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || (function(e5, t4, n4) {
                for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
                return n4;
              })(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
              if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
                i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
                while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
              }
              if (e4) {
                if (y3 || d3) {
                  if (y3) {
                    i3 = [], o3 = s3.length;
                    while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
                    y3(null, s3 = [], i3, r3);
                  }
                  o3 = s3.length;
                  while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
                }
              } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
            });
          }
          function te2(e3) {
            for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
              return e4 === i3;
            }, a3, true), l3 = J2(function(e4) {
              return -1 < se.call(i3, e4);
            }, a3, true), c3 = [function(e4, t4, n4) {
              var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
              return i3 = null, r4;
            }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
            else {
              if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
                return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
              }
              c3.push(t3);
            }
            return K2(c3);
          }
          function ne2(e3, t3) {
            var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
            if (!a3) {
              t3 || (t3 = Y2(e3)), n3 = t3.length;
              while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
              (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
                var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
                for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
                  if (x3 && o4) {
                    a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
                    while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                      k2.call(r4, o4);
                      break;
                    }
                    i4 && (E2 = h3);
                  }
                  m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
                }
                if (u3 += l3, m3 && l3 !== u3) {
                  a4 = 0;
                  while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
                  if (e4) {
                    if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
                    f3 = Z2(f3);
                  }
                  k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
                }
                return i4 && (E2 = h3, w2 = p3), c3;
              }, m3 ? F2(r3) : r3))).selector = e3;
            }
            return a3;
          }
          function re2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
            if (n3 = n3 || [], 1 === c3.length) {
              if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
                if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
                l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
              }
              i3 = D2.needsContext.test(e3) ? 0 : o3.length;
              while (i3--) {
                if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
                if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
                  if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
                  break;
                }
              }
            }
            return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
          }
          G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
            return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
          }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
        })();
        var d = function(e2, t2, n2) {
          var r2 = [], i2 = void 0 !== n2;
          while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
            if (i2 && ce(e2).is(n2)) break;
            r2.push(e2);
          }
          return r2;
        }, h = function(e2, t2) {
          for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
          return n2;
        }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function T(e2, n2, r2) {
          return v(n2) ? ce.grep(e2, function(e3, t2) {
            return !!n2.call(e3, t2, e3) !== r2;
          }) : n2.nodeType ? ce.grep(e2, function(e3) {
            return e3 === n2 !== r2;
          }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
            return -1 < se.call(n2, e3) !== r2;
          }) : ce.filter(n2, e2, r2);
        }
        ce.filter = function(e2, t2, n2) {
          var r2 = t2[0];
          return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
            return 1 === e3.nodeType;
          }));
        }, ce.fn.extend({ find: function(e2) {
          var t2, n2, r2 = this.length, i2 = this;
          if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
            for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
          }));
          for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
          return 1 < r2 ? ce.uniqueSort(n2) : n2;
        }, filter: function(e2) {
          return this.pushStack(T(this, e2 || [], false));
        }, not: function(e2) {
          return this.pushStack(T(this, e2 || [], true));
        }, is: function(e2) {
          return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
        } });
        var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ce.fn.init = function(e2, t2, n2) {
          var r2, i2;
          if (!e2) return this;
          if (n2 = n2 || k, "string" == typeof e2) {
            if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
            if (r2[1]) {
              if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
              return this;
            }
            return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
          }
          return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
        }).prototype = ce.fn, k = ce(C);
        var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
        function A(e2, t2) {
          while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
          return e2;
        }
        ce.fn.extend({ has: function(e2) {
          var t2 = ce(e2, this), n2 = t2.length;
          return this.filter(function() {
            for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
          });
        }, closest: function(e2, t2) {
          var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
          if (!b.test(e2)) {
            for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
              o2.push(n2);
              break;
            }
          }
          return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
        }, index: function(e2) {
          return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function(e2, t2) {
          return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
        }, addBack: function(e2) {
          return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
        } }), ce.each({ parent: function(e2) {
          var t2 = e2.parentNode;
          return t2 && 11 !== t2.nodeType ? t2 : null;
        }, parents: function(e2) {
          return d(e2, "parentNode");
        }, parentsUntil: function(e2, t2, n2) {
          return d(e2, "parentNode", n2);
        }, next: function(e2) {
          return A(e2, "nextSibling");
        }, prev: function(e2) {
          return A(e2, "previousSibling");
        }, nextAll: function(e2) {
          return d(e2, "nextSibling");
        }, prevAll: function(e2) {
          return d(e2, "previousSibling");
        }, nextUntil: function(e2, t2, n2) {
          return d(e2, "nextSibling", n2);
        }, prevUntil: function(e2, t2, n2) {
          return d(e2, "previousSibling", n2);
        }, siblings: function(e2) {
          return h((e2.parentNode || {}).firstChild, e2);
        }, children: function(e2) {
          return h(e2.firstChild);
        }, contents: function(e2) {
          return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
        } }, function(r2, i2) {
          ce.fn[r2] = function(e2, t2) {
            var n2 = ce.map(this, i2, e2);
            return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
          };
        });
        var D = /[^\x20\t\r\n\f]+/g;
        function N(e2) {
          return e2;
        }
        function q(e2) {
          throw e2;
        }
        function L(e2, t2, n2, r2) {
          var i2;
          try {
            e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
          } catch (e3) {
            n2.apply(void 0, [e3]);
          }
        }
        ce.Callbacks = function(r2) {
          var e2, n2;
          r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
            n2[t3] = true;
          }), n2) : ce.extend({}, r2);
          var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
            for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
              t2 = u2.shift();
              while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
            }
            r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
          }, f2 = { add: function() {
            return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), (function n3(e3) {
              ce.each(e3, function(e4, t3) {
                v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
              });
            })(arguments), t2 && !i2 && c2()), this;
          }, remove: function() {
            return ce.each(arguments, function(e3, t3) {
              var n3;
              while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
            }), this;
          }, has: function(e3) {
            return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
          }, empty: function() {
            return s2 && (s2 = []), this;
          }, disable: function() {
            return a2 = u2 = [], s2 = t2 = "", this;
          }, disabled: function() {
            return !s2;
          }, lock: function() {
            return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
          }, locked: function() {
            return !!a2;
          }, fireWith: function(e3, t3) {
            return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
          }, fire: function() {
            return f2.fireWith(this, arguments), this;
          }, fired: function() {
            return !!o2;
          } };
          return f2;
        }, ce.extend({ Deferred: function(e2) {
          var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
            return i2;
          }, always: function() {
            return s2.done(arguments).fail(arguments), this;
          }, "catch": function(e3) {
            return a2.then(null, e3);
          }, pipe: function() {
            var i3 = arguments;
            return ce.Deferred(function(r2) {
              ce.each(o2, function(e3, t2) {
                var n2 = v(i3[t2[4]]) && i3[t2[4]];
                s2[t2[1]](function() {
                  var e4 = n2 && n2.apply(this, arguments);
                  e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
                });
              }), i3 = null;
            }).promise();
          }, then: function(t2, n2, r2) {
            var u2 = 0;
            function l2(i3, o3, a3, s3) {
              return function() {
                var n3 = this, r3 = arguments, e3 = function() {
                  var e4, t4;
                  if (!(i3 < u2)) {
                    if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
                    t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                  }
                }, t3 = s3 ? e3 : function() {
                  try {
                    e3();
                  } catch (e4) {
                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                  }
                };
                i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
              };
            }
            return ce.Deferred(function(e3) {
              o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
            }).promise();
          }, promise: function(e3) {
            return null != e3 ? ce.extend(e3, a2) : a2;
          } }, s2 = {};
          return ce.each(o2, function(e3, t2) {
            var n2 = t2[2], r2 = t2[5];
            a2[t2[1]] = n2.add, r2 && n2.add(function() {
              i2 = r2;
            }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
              return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
            }, s2[t2[0] + "With"] = n2.fireWith;
          }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
        }, when: function(e2) {
          var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
            return function(e3) {
              r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
            };
          };
          if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
          while (t2--) L(i2[t2], a2(t2), o2.reject);
          return o2.promise();
        } });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ce.Deferred.exceptionHook = function(e2, t2) {
          ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
        }, ce.readyException = function(e2) {
          ie.setTimeout(function() {
            throw e2;
          });
        };
        var O = ce.Deferred();
        function P() {
          C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
        }
        ce.fn.ready = function(e2) {
          return O.then(e2)["catch"](function(e3) {
            ce.readyException(e3);
          }), this;
        }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
          (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
        } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
        var M = function(e2, t2, n2, r2, i2, o2, a2) {
          var s2 = 0, u2 = e2.length, l2 = null == n2;
          if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
          else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
            return l2.call(ce(e3), n3);
          })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
          return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
        }, R = /^-ms-/, I = /-([a-z])/g;
        function W(e2, t2) {
          return t2.toUpperCase();
        }
        function F(e2) {
          return e2.replace(R, "ms-").replace(I, W);
        }
        var $ = function(e2) {
          return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
        };
        function B() {
          this.expando = ce.expando + B.uid++;
        }
        B.uid = 1, B.prototype = { cache: function(e2) {
          var t2 = e2[this.expando];
          return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
        }, set: function(e2, t2, n2) {
          var r2, i2 = this.cache(e2);
          if ("string" == typeof t2) i2[F(t2)] = n2;
          else for (r2 in t2) i2[F(r2)] = t2[r2];
          return i2;
        }, get: function(e2, t2) {
          return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
        }, access: function(e2, t2, n2) {
          return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
        }, remove: function(e2, t2) {
          var n2, r2 = e2[this.expando];
          if (void 0 !== r2) {
            if (void 0 !== t2) {
              n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
              while (n2--) delete r2[t2[n2]];
            }
            (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
          }
        }, hasData: function(e2) {
          var t2 = e2[this.expando];
          return void 0 !== t2 && !ce.isEmptyObject(t2);
        } };
        var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
        function V(e2, t2, n2) {
          var r2, i2;
          if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
            try {
              n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
            } catch (e3) {
            }
            z.set(e2, t2, n2);
          } else n2 = void 0;
          return n2;
        }
        ce.extend({ hasData: function(e2) {
          return z.hasData(e2) || _.hasData(e2);
        }, data: function(e2, t2, n2) {
          return z.access(e2, t2, n2);
        }, removeData: function(e2, t2) {
          z.remove(e2, t2);
        }, _data: function(e2, t2, n2) {
          return _.access(e2, t2, n2);
        }, _removeData: function(e2, t2) {
          _.remove(e2, t2);
        } }), ce.fn.extend({ data: function(n2, e2) {
          var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
          if (void 0 === n2) {
            if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
              t2 = a2.length;
              while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
              _.set(o2, "hasDataAttrs", true);
            }
            return i2;
          }
          return "object" == typeof n2 ? this.each(function() {
            z.set(this, n2);
          }) : M(this, function(e3) {
            var t3;
            if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
            this.each(function() {
              z.set(this, n2, e3);
            });
          }, null, e2, 1 < arguments.length, null, true);
        }, removeData: function(e2) {
          return this.each(function() {
            z.remove(this, e2);
          });
        } }), ce.extend({ queue: function(e2, t2, n2) {
          var r2;
          if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
        }, dequeue: function(e2, t2) {
          t2 = t2 || "fx";
          var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
          "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
            ce.dequeue(e2, t2);
          }, o2)), !r2 && o2 && o2.empty.fire();
        }, _queueHooks: function(e2, t2) {
          var n2 = t2 + "queueHooks";
          return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
            _.remove(e2, [t2 + "queue", n2]);
          }) });
        } }), ce.fn.extend({ queue: function(t2, n2) {
          var e2 = 2;
          return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
            var e3 = ce.queue(this, t2, n2);
            ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
          });
        }, dequeue: function(e2) {
          return this.each(function() {
            ce.dequeue(this, e2);
          });
        }, clearQueue: function(e2) {
          return this.queue(e2 || "fx", []);
        }, promise: function(e2, t2) {
          var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
            --r2 || i2.resolveWith(o2, [o2]);
          };
          "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
          while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
          return s2(), i2.promise(t2);
        } });
        var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
          return ce.contains(e2.ownerDocument, e2);
        }, Z = { composed: true };
        J.getRootNode && (K = function(e2) {
          return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
        });
        var ee = function(e2, t2) {
          return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
        };
        function te(e2, t2, n2, r2) {
          var i2, o2, a2 = 20, s2 = r2 ? function() {
            return r2.cur();
          } : function() {
            return ce.css(e2, t2, "");
          }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
          if (c2 && c2[3] !== l2) {
            u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
            while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
            c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
          }
          return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
        }
        var ne = {};
        function re(e2, t2) {
          for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
          for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
          return e2;
        }
        ce.fn.extend({ show: function() {
          return re(this, true);
        }, hide: function() {
          return re(this);
        }, toggle: function(e2) {
          return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
        } });
        var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
        xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
        var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function Se(e2, t2) {
          var n2;
          return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
        }
        function Ee(e2, t2) {
          for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
        }
        ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
        var je = /<|&#?\w+;/;
        function Ae(e2, t2, n2, r2, i2) {
          for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
          else if (je.test(o2)) {
            a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
            while (c2--) a2 = a2.lastChild;
            ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
          } else p2.push(t2.createTextNode(o2));
          f2.textContent = "", d2 = 0;
          while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
          else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
            c2 = 0;
            while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
          }
          return f2;
        }
        var De = /^([^.]*)(?:\.(.+)|)/;
        function Ne() {
          return true;
        }
        function qe() {
          return false;
        }
        function Le(e2, t2, n2, r2, i2, o2) {
          var a2, s2;
          if ("object" == typeof t2) {
            for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
            return e2;
          }
          if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
          else if (!i2) return e2;
          return 1 === o2 && (a2 = i2, (i2 = function(e3) {
            return ce().off(e3), a2.apply(this, arguments);
          }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
            ce.event.add(this, t2, i2, r2, n2);
          });
        }
        function He(e2, r2, t2) {
          t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
            var t3, n2 = _.get(this, r2);
            if (1 & e3.isTrigger && this[r2]) {
              if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
              else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
            } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
          } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
        }
        ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
          if ($(t2)) {
            n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
              return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
            }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
            while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
          }
        }, remove: function(e2, t2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
          if (v2 && (u2 = v2.events)) {
            l2 = (t2 = (t2 || "").match(D) || [""]).length;
            while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
              f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
              while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
              a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
            } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
            ce.isEmptyObject(u2) && _.remove(e2, "handle events");
          }
        }, dispatch: function(e2) {
          var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
          for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
          if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
            a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
            while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
              u2.currentTarget = i2.elem, n2 = 0;
              while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
            }
            return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
          }
        }, handlers: function(e2, t2) {
          var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
          if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
            for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
              for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
              o2.length && s2.push({ elem: l2, handlers: o2 });
            }
          }
          return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
        }, addProp: function(t2, e2) {
          Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
            if (this.originalEvent) return e2(this.originalEvent);
          } : function() {
            if (this.originalEvent) return this.originalEvent[t2];
          }, set: function(e3) {
            Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
          } });
        }, fix: function(e2) {
          return e2[ce.expando] ? e2 : new ce.Event(e2);
        }, special: { load: { noBubble: true }, click: { setup: function(e2) {
          var t2 = this || e2;
          return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
        }, trigger: function(e2) {
          var t2 = this || e2;
          return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
        }, _default: function(e2) {
          var t2 = e2.target;
          return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
        } }, beforeunload: { postDispatch: function(e2) {
          void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
        } } } }, ce.removeEvent = function(e2, t2, n2) {
          e2.removeEventListener && e2.removeEventListener(t2, n2);
        }, ce.Event = function(e2, t2) {
          if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
          e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
        }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
          var e2 = this.originalEvent;
          this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
        }, stopPropagation: function() {
          var e2 = this.originalEvent;
          this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
        }, stopImmediatePropagation: function() {
          var e2 = this.originalEvent;
          this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
        } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
          function o2(e2) {
            if (C.documentMode) {
              var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
              n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
            } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
          }
          ce.event.special[r2] = { setup: function() {
            var e2;
            if (He(this, r2, true), !C.documentMode) return false;
            (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
          }, trigger: function() {
            return He(this, r2), true;
          }, teardown: function() {
            var e2;
            if (!C.documentMode) return false;
            (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
          }, _default: function(e2) {
            return _.get(e2.target, r2);
          }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
            n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
          }, teardown: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
            n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
          } };
        }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
          ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
            var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
            return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
          } };
        }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
          return Le(this, e2, t2, n2, r2);
        }, one: function(e2, t2, n2, r2) {
          return Le(this, e2, t2, n2, r2, 1);
        }, off: function(e2, t2, n2) {
          var r2, i2;
          if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
          if ("object" == typeof e2) {
            for (i2 in e2) this.off(i2, t2, e2[i2]);
            return this;
          }
          return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
            ce.event.remove(this, e2, n2, t2);
          });
        } });
        var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Re(e2, t2) {
          return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
        }
        function Ie(e2) {
          return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
        }
        function We(e2) {
          return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
        }
        function Fe(e2, t2) {
          var n2, r2, i2, o2, a2, s2;
          if (1 === t2.nodeType) {
            if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
            z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
          }
        }
        function $e(n2, r2, i2, o2) {
          r2 = g(r2);
          var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
          if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
            var t3 = n2.eq(e3);
            h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
          });
          if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
            for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
            if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
          }
          return n2;
        }
        function Be(e2, t2, n2) {
          for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
          return e2;
        }
        ce.extend({ htmlPrefilter: function(e2) {
          return e2;
        }, clone: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
          if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
          if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
          else Fe(e2, c2);
          return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
        }, cleanData: function(e2) {
          for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
            if (t2 = n2[_.expando]) {
              if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
              n2[_.expando] = void 0;
            }
            n2[z.expando] && (n2[z.expando] = void 0);
          }
        } }), ce.fn.extend({ detach: function(e2) {
          return Be(this, e2, true);
        }, remove: function(e2) {
          return Be(this, e2);
        }, text: function(e2) {
          return M(this, function(e3) {
            return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
            });
          }, null, e2, arguments.length);
        }, append: function() {
          return $e(this, arguments, function(e2) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
          });
        }, prepend: function() {
          return $e(this, arguments, function(e2) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t2 = Re(this, e2);
              t2.insertBefore(e2, t2.firstChild);
            }
          });
        }, before: function() {
          return $e(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this);
          });
        }, after: function() {
          return $e(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
          });
        }, empty: function() {
          for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
          return this;
        }, clone: function(e2, t2) {
          return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
            return ce.clone(this, e2, t2);
          });
        }, html: function(e2) {
          return M(this, function(e3) {
            var t2 = this[0] || {}, n2 = 0, r2 = this.length;
            if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
            if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
              e3 = ce.htmlPrefilter(e3);
              try {
                for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
                t2 = 0;
              } catch (e4) {
              }
            }
            t2 && this.empty().append(e3);
          }, null, e2, arguments.length);
        }, replaceWith: function() {
          var n2 = [];
          return $e(this, arguments, function(e2) {
            var t2 = this.parentNode;
            ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
          }, n2);
        } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
          ce.fn[e2] = function(e3) {
            for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
            return this.pushStack(n2);
          };
        });
        var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
          var t2 = e2.ownerDocument.defaultView;
          return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
        }, Ue = function(e2, t2, n2) {
          var r2, i2, o2 = {};
          for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
          for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
          return r2;
        }, Ve = new RegExp(Q.join("|"), "i");
        function Ge(e2, t2, n2) {
          var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
          return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
        }
        function Ye(e2, t2) {
          return { get: function() {
            if (!e2()) return (this.get = t2).apply(this, arguments);
            delete this.get;
          } };
        }
        !(function() {
          function e2() {
            if (l2) {
              u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
              var e3 = ie.getComputedStyle(l2);
              n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
            }
          }
          function t2(e3) {
            return Math.round(parseFloat(e3));
          }
          var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
          l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
            return e2(), r2;
          }, pixelBoxStyles: function() {
            return e2(), o2;
          }, pixelPosition: function() {
            return e2(), n2;
          }, reliableMarginLeft: function() {
            return e2(), s2;
          }, scrollboxSize: function() {
            return e2(), i2;
          }, reliableTrDimensions: function() {
            var e3, t3, n3, r3;
            return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
          } }));
        })();
        var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
        function Ze(e2) {
          var t2 = ce.cssProps[e2] || Ke[e2];
          return t2 || (e2 in Je ? e2 : Ke[e2] = (function(e3) {
            var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
            while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
          })(e2) || e2);
        }
        var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
        function rt(e2, t2, n2) {
          var r2 = Y.exec(t2);
          return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
        }
        function it(e2, t2, n2, r2, i2, o2) {
          var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
          if (n2 === (r2 ? "border" : "content")) return 0;
          for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
          return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
        }
        function ot(e2, t2, n2) {
          var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
          if (_e.test(a2)) {
            if (!n2) return a2;
            a2 = "auto";
          }
          return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
        }
        function at(e2, t2, n2, r2, i2) {
          return new at.prototype.init(e2, t2, n2, r2, i2);
        }
        ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
          if (t2) {
            var n2 = Ge(e2, "opacity");
            return "" === n2 ? "1" : n2;
          }
        } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
          if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
            var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
            if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
            "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
          }
        }, css: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2 = F(t2);
          return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
        } }), ce.each(["height", "width"], function(e2, u2) {
          ce.cssHooks[u2] = { get: function(e3, t2, n2) {
            if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
              return ot(e3, u2, n2);
            });
          }, set: function(e3, t2, n2) {
            var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
            return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
          } };
        }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
          if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
            return e2.getBoundingClientRect().left;
          })) + "px";
        }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
          ce.cssHooks[i2 + o2] = { expand: function(e2) {
            for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
            return n2;
          } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
        }), ce.fn.extend({ css: function(e2, t2) {
          return M(this, function(e3, t3, n2) {
            var r2, i2, o2 = {}, a2 = 0;
            if (Array.isArray(t3)) {
              for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
              return o2;
            }
            return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
          }, e2, t2, 1 < arguments.length);
        } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
          this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
        }, cur: function() {
          var e2 = at.propHooks[this.prop];
          return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
        }, run: function(e2) {
          var t2, n2 = at.propHooks[this.prop];
          return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
        } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
          var t2;
          return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
        }, set: function(e2) {
          ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
        } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
          e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
        } }, ce.easing = { linear: function(e2) {
          return e2;
        }, swing: function(e2) {
          return 0.5 - Math.cos(e2 * Math.PI) / 2;
        }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
        var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
        function dt() {
          ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
        }
        function ht() {
          return ie.setTimeout(function() {
            st = void 0;
          }), st = Date.now();
        }
        function gt(e2, t2) {
          var n2, r2 = 0, i2 = { height: e2 };
          for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
          return t2 && (i2.opacity = i2.width = e2), i2;
        }
        function vt(e2, t2, n2) {
          for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
        }
        function yt(o2, e2, t2) {
          var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
            delete u2.elem;
          }), u2 = function() {
            if (a2) return false;
            for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
            return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
          }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
            var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
            return l2.tweens.push(n3), n3;
          }, stop: function(e3) {
            var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
            if (a2) return this;
            for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
            return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
          } }), c2 = l2.props;
          for (!(function(e3, t3) {
            var n3, r3, i3, o3, a3;
            for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
            else t3[r3] = i3;
          })(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
          return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
        }
        ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
          var n2 = this.createTween(e2, t2);
          return te(n2.elem, e2, Y.exec(t2), n2), n2;
        }] }, tweener: function(e2, t2) {
          v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
          for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
        }, prefilters: [function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
          for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
            a2.unqueued || s2();
          }), a2.unqueued++, p2.always(function() {
            p2.always(function() {
              a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
            });
          })), t2) if (i2 = t2[r2], ft.test(i2)) {
            if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
              if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
              g2 = true;
            }
            d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
          }
          if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
            h2.display = l2;
          }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
            h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
          })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
            for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
          })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
        }], prefilter: function(e2, t2) {
          t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
        } }), ce.speed = function(e2, t2, n2) {
          var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
          return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
            v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
          }, r2;
        }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
          return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
        }, animate: function(t2, e2, n2, r2) {
          var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
            var e3 = yt(this, ce.extend({}, t2), o2);
            (i2 || _.get(this, "finish")) && e3.stop(true);
          };
          return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
        }, stop: function(i2, e2, o2) {
          var a2 = function(e3) {
            var t2 = e3.stop;
            delete e3.stop, t2(o2);
          };
          return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
            var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
            if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
            else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
            for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
            !e3 && o2 || ce.dequeue(this, i2);
          });
        }, finish: function(a2) {
          return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
            var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
            for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
            for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
            delete t2.finish;
          });
        } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
          var i2 = ce.fn[r2];
          ce.fn[r2] = function(e3, t2, n2) {
            return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
          };
        }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
          ce.fn[e2] = function(e3, t2, n2) {
            return this.animate(r2, e3, t2, n2);
          };
        }), ce.timers = [], ce.fx.tick = function() {
          var e2, t2 = 0, n2 = ce.timers;
          for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
          n2.length || ce.fx.stop(), st = void 0;
        }, ce.fx.timer = function(e2) {
          ce.timers.push(e2), ce.fx.start();
        }, ce.fx.interval = 13, ce.fx.start = function() {
          ut || (ut = true, dt());
        }, ce.fx.stop = function() {
          ut = null;
        }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
          return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
            var n2 = ie.setTimeout(e3, r2);
            t2.stop = function() {
              ie.clearTimeout(n2);
            };
          });
        }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
        var mt, xt = ce.expr.attrHandle;
        ce.fn.extend({ attr: function(e2, t2) {
          return M(this, ce.attr, e2, t2, 1 < arguments.length);
        }, removeAttr: function(e2) {
          return this.each(function() {
            ce.removeAttr(this, e2);
          });
        } }), ce.extend({ attr: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
        }, attrHooks: { type: { set: function(e2, t2) {
          if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
            var n2 = e2.value;
            return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
          }
        } } }, removeAttr: function(e2, t2) {
          var n2, r2 = 0, i2 = t2 && t2.match(D);
          if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
        } }), mt = { set: function(e2, t2, n2) {
          return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
        } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
          var a2 = xt[t2] || ce.find.attr;
          xt[t2] = function(e3, t3, n2) {
            var r2, i2, o2 = t3.toLowerCase();
            return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
          };
        });
        var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
        function Tt(e2) {
          return (e2.match(D) || []).join(" ");
        }
        function Ct(e2) {
          return e2.getAttribute && e2.getAttribute("class") || "";
        }
        function kt(e2) {
          return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
        }
        ce.fn.extend({ prop: function(e2, t2) {
          return M(this, ce.prop, e2, t2, 1 < arguments.length);
        }, removeProp: function(e2) {
          return this.each(function() {
            delete this[ce.propFix[e2] || e2];
          });
        } }), ce.extend({ prop: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
        }, propHooks: { tabIndex: { get: function(e2) {
          var t2 = ce.find.attr(e2, "tabindex");
          return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
          var t2 = e2.parentNode;
          return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
        }, set: function(e2) {
          var t2 = e2.parentNode;
          t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
        } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          ce.propFix[this.toLowerCase()] = this;
        }), ce.fn.extend({ addClass: function(t2) {
          var e2, n2, r2, i2, o2, a2;
          return v(t2) ? this.each(function(e3) {
            ce(this).addClass(t2.call(this, e3, Ct(this)));
          }) : (e2 = kt(t2)).length ? this.each(function() {
            if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
              for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
              a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
            }
          }) : this;
        }, removeClass: function(t2) {
          var e2, n2, r2, i2, o2, a2;
          return v(t2) ? this.each(function(e3) {
            ce(this).removeClass(t2.call(this, e3, Ct(this)));
          }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
            if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
              for (o2 = 0; o2 < e2.length; o2++) {
                i2 = e2[o2];
                while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
              }
              a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
            }
          }) : this : this.attr("class", "");
        }, toggleClass: function(t2, n2) {
          var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
          return v(t2) ? this.each(function(e3) {
            ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
          }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
            if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
            else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
          }));
        }, hasClass: function(e2) {
          var t2, n2, r2 = 0;
          t2 = " " + e2 + " ";
          while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
          return false;
        } });
        var St = /\r/g;
        ce.fn.extend({ val: function(n2) {
          var r2, e2, i2, t2 = this[0];
          return arguments.length ? (i2 = v(n2), this.each(function(e3) {
            var t3;
            1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
              return null == e4 ? "" : e4 + "";
            })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
          })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
        } }), ce.extend({ valHooks: { option: { get: function(e2) {
          var t2 = ce.find.attr(e2, "value");
          return null != t2 ? t2 : Tt(ce.text(e2));
        } }, select: { get: function(e2) {
          var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
          for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
            if (t2 = ce(n2).val(), a2) return t2;
            s2.push(t2);
          }
          return s2;
        }, set: function(e2, t2) {
          var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
          while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
          return n2 || (e2.selectedIndex = -1), o2;
        } } } }), ce.each(["radio", "checkbox"], function() {
          ce.valHooks[this] = { set: function(e2, t2) {
            if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
          } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
            return null === e2.getAttribute("value") ? "on" : e2.value;
          });
        });
        var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
        ce.parseXML = function(e2) {
          var t2, n2;
          if (!e2 || "string" != typeof e2) return null;
          try {
            t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
          } catch (e3) {
          }
          return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
            return e3.textContent;
          }).join("\n") : e2)), t2;
        };
        var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
          e2.stopPropagation();
        };
        ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
          if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
            if (!r2 && !c2.noBubble && !y(n2)) {
              for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
              a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
            }
            i2 = 0;
            while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
            return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
          }
        }, simulate: function(e2, t2, n2) {
          var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
          ce.event.trigger(r2, null, t2);
        } }), ce.fn.extend({ trigger: function(e2, t2) {
          return this.each(function() {
            ce.event.trigger(e2, t2, this);
          });
        }, triggerHandler: function(e2, t2) {
          var n2 = this[0];
          if (n2) return ce.event.trigger(e2, t2, n2, true);
        } });
        var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
        function Pt(n2, e2, r2, i2) {
          var t2;
          if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
            r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
          });
          else if (r2 || "object" !== x(e2)) i2(n2, e2);
          else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
        }
        ce.param = function(e2, t2) {
          var n2, r2 = [], i2 = function(e3, t3) {
            var n3 = v(t3) ? t3() : t3;
            r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
          };
          if (null == e2) return "";
          if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
            i2(this.name, this.value);
          });
          else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
          return r2.join("&");
        }, ce.fn.extend({ serialize: function() {
          return ce.param(this.serializeArray());
        }, serializeArray: function() {
          return this.map(function() {
            var e2 = ce.prop(this, "elements");
            return e2 ? ce.makeArray(e2) : this;
          }).filter(function() {
            var e2 = this.type;
            return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
          }).map(function(e2, t2) {
            var n2 = ce(this).val();
            return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
              return { name: t2.name, value: e3.replace(Lt, "\r\n") };
            }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
          }).get();
        } });
        var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
        function Ut(o2) {
          return function(e2, t2) {
            "string" != typeof e2 && (t2 = e2, e2 = "*");
            var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
            if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
          };
        }
        function Vt(t2, i2, o2, a2) {
          var s2 = {}, u2 = t2 === _t;
          function l2(e2) {
            var r2;
            return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
              var n2 = t3(i2, o2, a2);
              return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
            }), r2;
          }
          return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
        }
        function Gt(e2, t2) {
          var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
          for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
          return r2 && ce.extend(true, e2, r2), e2;
        }
        Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
          return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
        }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
          "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
          var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
            var t3;
            if (h2) {
              if (!n2) {
                n2 = {};
                while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
              }
              t3 = n2[e3.toLowerCase() + " "];
            }
            return null == t3 ? null : t3.join(", ");
          }, getAllResponseHeaders: function() {
            return h2 ? p2 : null;
          }, setRequestHeader: function(e3, t3) {
            return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
          }, overrideMimeType: function(e3) {
            return null == h2 && (v2.mimeType = e3), this;
          }, statusCode: function(e3) {
            var t3;
            if (e3) if (h2) T2.always(e3[T2.status]);
            else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
            return this;
          }, abort: function(e3) {
            var t3 = e3 || u2;
            return c2 && c2.abort(t3), l2(0, t3), this;
          } };
          if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
            r2 = C.createElement("a");
            try {
              r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
            } catch (e3) {
              v2.crossDomain = true;
            }
          }
          if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
          for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
          if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
          if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
            if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
            v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
              T2.abort("timeout");
            }, v2.timeout));
            try {
              h2 = false, c2.send(a2, l2);
            } catch (e3) {
              if (h2) throw e3;
              l2(-1, e3);
            }
          } else l2(-1, "No Transport");
          function l2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = t3;
            h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = (function(e4, t4, n4) {
              var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
              while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
              if (r4) {
                for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
                  u4.unshift(i4);
                  break;
                }
              }
              if (u4[0] in n4) o4 = u4[0];
              else {
                for (i4 in n4) {
                  if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                    o4 = i4;
                    break;
                  }
                  a4 || (a4 = i4);
                }
                o4 = o4 || a4;
              }
              if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
            })(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
            }), s3 = (function(e4, t4, n4, r4) {
              var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
              if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
              o4 = c3.shift();
              while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                if ("*" === o4) o4 = u4;
                else if ("*" !== u4 && u4 !== o4) {
                  if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                    for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                      true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                      break;
                    }
                  }
                  if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
                  else try {
                    t4 = a4(t4);
                  } catch (e5) {
                    return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                  }
                }
              }
              return { state: "success", data: t4 };
            })(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
          }
          return T2;
        }, getJSON: function(e2, t2, n2) {
          return ce.get(e2, t2, n2, "json");
        }, getScript: function(e2, t2) {
          return ce.get(e2, void 0, t2, "script");
        } }), ce.each(["get", "post"], function(e2, i2) {
          ce[i2] = function(e3, t2, n2, r2) {
            return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
          };
        }), ce.ajaxPrefilter(function(e2) {
          var t2;
          for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
        }), ce._evalUrl = function(e2, t2, n2) {
          return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
          } }, dataFilter: function(e3) {
            ce.globalEval(e3, t2, n2);
          } });
        }, ce.fn.extend({ wrapAll: function(e2) {
          var t2;
          return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
            var e3 = this;
            while (e3.firstElementChild) e3 = e3.firstElementChild;
            return e3;
          }).append(this)), this;
        }, wrapInner: function(n2) {
          return v(n2) ? this.each(function(e2) {
            ce(this).wrapInner(n2.call(this, e2));
          }) : this.each(function() {
            var e2 = ce(this), t2 = e2.contents();
            t2.length ? t2.wrapAll(n2) : e2.append(n2);
          });
        }, wrap: function(t2) {
          var n2 = v(t2);
          return this.each(function(e2) {
            ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
          });
        }, unwrap: function(e2) {
          return this.parent(e2).not("body").each(function() {
            ce(this).replaceWith(this.childNodes);
          }), this;
        } }), ce.expr.pseudos.hidden = function(e2) {
          return !ce.expr.pseudos.visible(e2);
        }, ce.expr.pseudos.visible = function(e2) {
          return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
        }, ce.ajaxSettings.xhr = function() {
          try {
            return new ie.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
        le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
          var o2, a2;
          if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
            var n2, r2 = i2.xhr();
            if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
            for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
            o2 = function(e3) {
              return function() {
                o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
              };
            }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
              4 === r2.readyState && ie.setTimeout(function() {
                o2 && a2();
              });
            }, o2 = o2("abort");
            try {
              r2.send(i2.hasContent && i2.data || null);
            } catch (e3) {
              if (o2) throw e3;
            }
          }, abort: function() {
            o2 && o2();
          } };
        }), ce.ajaxPrefilter(function(e2) {
          e2.crossDomain && (e2.contents.script = false);
        }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
          return ce.globalEval(e2), e2;
        } } }), ce.ajaxPrefilter("script", function(e2) {
          void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
        }), ce.ajaxTransport("script", function(n2) {
          var r2, i2;
          if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
            r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
              r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
            }), C.head.appendChild(r2[0]);
          }, abort: function() {
            i2 && i2();
          } };
        });
        var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
          var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
          return this[e2] = true, e2;
        } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
          var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
          if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
            return o2 || ce.error(r2 + " was not called"), o2[0];
          }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
            o2 = arguments;
          }, n2.always(function() {
            void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
          }), "script";
        }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
          return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
          var r2, i2, o2;
        }, ce.fn.load = function(e2, t2, n2) {
          var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
          return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
            o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
          }).always(n2 && function(e3, t3) {
            a2.each(function() {
              n2.apply(this, o2 || [e3.responseText, t3, e3]);
            });
          }), this;
        }, ce.expr.pseudos.animated = function(t2) {
          return ce.grep(ce.timers, function(e2) {
            return t2 === e2.elem;
          }).length;
        }, ce.offset = { setOffset: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
          "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
        } }, ce.fn.extend({ offset: function(t2) {
          if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
            ce.offset.setOffset(this, t2, e3);
          });
          var e2, n2, r2 = this[0];
          return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function() {
          if (this[0]) {
            var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
            if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
            else {
              t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
              while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
              e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
            }
            return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
          }
        }, offsetParent: function() {
          return this.map(function() {
            var e2 = this.offsetParent;
            while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
            return e2 || J;
          });
        } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
          var o2 = "pageYOffset" === i2;
          ce.fn[t2] = function(e2) {
            return M(this, function(e3, t3, n2) {
              var r2;
              if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
              r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
            }, t2, e2, arguments.length);
          };
        }), ce.each(["top", "left"], function(e2, n2) {
          ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
            if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
          });
        }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
          ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
            ce.fn[o2] = function(e2, t2) {
              var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
              return M(this, function(e3, t3, n3) {
                var r3;
                return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
              }, s2, n2 ? e2 : void 0, n2);
            };
          });
        }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
          ce.fn[t2] = function(e3) {
            return this.on(t2, e3);
          };
        }), ce.fn.extend({ bind: function(e2, t2, n2) {
          return this.on(e2, null, t2, n2);
        }, unbind: function(e2, t2) {
          return this.off(e2, null, t2);
        }, delegate: function(e2, t2, n2, r2) {
          return this.on(t2, e2, n2, r2);
        }, undelegate: function(e2, t2, n2) {
          return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
        }, hover: function(e2, t2) {
          return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
        } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
          ce.fn[n2] = function(e3, t2) {
            return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
          };
        });
        var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        ce.proxy = function(e2, t2) {
          var n2, r2, i2;
          if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
            return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
          }).guid = e2.guid = e2.guid || ce.guid++, i2;
        }, ce.holdReady = function(e2) {
          e2 ? ce.readyWait++ : ce.ready(true);
        }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
          var t2 = ce.type(e2);
          return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
        }, ce.trim = function(e2) {
          return null == e2 ? "" : (e2 + "").replace(en, "$1");
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
          return ce;
        });
        var tn = ie.jQuery, nn = ie.$;
        return ce.noConflict = function(e2) {
          return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
        }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
      });
    }
  });

  // node_modules/@rails/actioncable/src/adapters.js
  var adapters_default;
  var init_adapters = __esm({
    "node_modules/@rails/actioncable/src/adapters.js"() {
      adapters_default = {
        logger: typeof console !== "undefined" ? console : void 0,
        WebSocket: typeof WebSocket !== "undefined" ? WebSocket : void 0
      };
    }
  });

  // node_modules/@rails/actioncable/src/logger.js
  var logger_default;
  var init_logger = __esm({
    "node_modules/@rails/actioncable/src/logger.js"() {
      init_adapters();
      logger_default = {
        log(...messages) {
          if (this.enabled) {
            messages.push(Date.now());
            adapters_default.logger.log("[ActionCable]", ...messages);
          }
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/connection_monitor.js
  var now, secondsSince, ConnectionMonitor, connection_monitor_default;
  var init_connection_monitor = __esm({
    "node_modules/@rails/actioncable/src/connection_monitor.js"() {
      init_logger();
      now = () => (/* @__PURE__ */ new Date()).getTime();
      secondsSince = (time) => (now() - time) / 1e3;
      ConnectionMonitor = class {
        constructor(connection) {
          this.visibilityDidChange = this.visibilityDidChange.bind(this);
          this.connection = connection;
          this.reconnectAttempts = 0;
        }
        start() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            addEventListener("visibilitychange", this.visibilityDidChange);
            logger_default.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`);
          }
        }
        stop() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            removeEventListener("visibilitychange", this.visibilityDidChange);
            logger_default.log("ConnectionMonitor stopped");
          }
        }
        isRunning() {
          return this.startedAt && !this.stoppedAt;
        }
        recordMessage() {
          this.pingedAt = now();
        }
        recordConnect() {
          this.reconnectAttempts = 0;
          delete this.disconnectedAt;
          logger_default.log("ConnectionMonitor recorded connect");
        }
        recordDisconnect() {
          this.disconnectedAt = now();
          logger_default.log("ConnectionMonitor recorded disconnect");
        }
        // Private
        startPolling() {
          this.stopPolling();
          this.poll();
        }
        stopPolling() {
          clearTimeout(this.pollTimeout);
        }
        poll() {
          this.pollTimeout = setTimeout(
            () => {
              this.reconnectIfStale();
              this.poll();
            },
            this.getPollInterval()
          );
        }
        getPollInterval() {
          const { staleThreshold, reconnectionBackoffRate } = this.constructor;
          const backoff = Math.pow(1 + reconnectionBackoffRate, Math.min(this.reconnectAttempts, 10));
          const jitterMax = this.reconnectAttempts === 0 ? 1 : reconnectionBackoffRate;
          const jitter = jitterMax * Math.random();
          return staleThreshold * 1e3 * backoff * (1 + jitter);
        }
        reconnectIfStale() {
          if (this.connectionIsStale()) {
            logger_default.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${secondsSince(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`);
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              logger_default.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${secondsSince(this.disconnectedAt)} s`);
            } else {
              logger_default.log("ConnectionMonitor reopening");
              this.connection.reopen();
            }
          }
        }
        get refreshedAt() {
          return this.pingedAt ? this.pingedAt : this.startedAt;
        }
        connectionIsStale() {
          return secondsSince(this.refreshedAt) > this.constructor.staleThreshold;
        }
        disconnectedRecently() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        }
        visibilityDidChange() {
          if (document.visibilityState === "visible") {
            setTimeout(
              () => {
                if (this.connectionIsStale() || !this.connection.isOpen()) {
                  logger_default.log(`ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`);
                  this.connection.reopen();
                }
              },
              200
            );
          }
        }
      };
      ConnectionMonitor.staleThreshold = 6;
      ConnectionMonitor.reconnectionBackoffRate = 0.15;
      connection_monitor_default = ConnectionMonitor;
    }
  });

  // node_modules/@rails/actioncable/src/internal.js
  var internal_default;
  var init_internal = __esm({
    "node_modules/@rails/actioncable/src/internal.js"() {
      internal_default = {
        "message_types": {
          "welcome": "welcome",
          "disconnect": "disconnect",
          "ping": "ping",
          "confirmation": "confirm_subscription",
          "rejection": "reject_subscription"
        },
        "disconnect_reasons": {
          "unauthorized": "unauthorized",
          "invalid_request": "invalid_request",
          "server_restart": "server_restart",
          "remote": "remote"
        },
        "default_mount_path": "/cable",
        "protocols": [
          "actioncable-v1-json",
          "actioncable-unsupported"
        ]
      };
    }
  });

  // node_modules/@rails/actioncable/src/connection.js
  var message_types, protocols, supportedProtocols, indexOf, Connection, connection_default;
  var init_connection = __esm({
    "node_modules/@rails/actioncable/src/connection.js"() {
      init_adapters();
      init_connection_monitor();
      init_internal();
      init_logger();
      ({ message_types, protocols } = internal_default);
      supportedProtocols = protocols.slice(0, protocols.length - 1);
      indexOf = [].indexOf;
      Connection = class {
        constructor(consumer2) {
          this.open = this.open.bind(this);
          this.consumer = consumer2;
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new connection_monitor_default(this);
          this.disconnected = true;
        }
        send(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        }
        open() {
          if (this.isActive()) {
            logger_default.log(`Attempted to open WebSocket, but existing socket is ${this.getState()}`);
            return false;
          } else {
            const socketProtocols = [...protocols, ...this.consumer.subprotocols || []];
            logger_default.log(`Opening WebSocket, current state is ${this.getState()}, subprotocols: ${socketProtocols}`);
            if (this.webSocket) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new adapters_default.WebSocket(this.consumer.url, socketProtocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        }
        close({ allowReconnect } = { allowReconnect: true }) {
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isOpen()) {
            return this.webSocket.close();
          }
        }
        reopen() {
          logger_default.log(`Reopening WebSocket, current state is ${this.getState()}`);
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error) {
              logger_default.log("Failed to reopen WebSocket", error);
            } finally {
              logger_default.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`);
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        }
        getProtocol() {
          if (this.webSocket) {
            return this.webSocket.protocol;
          }
        }
        isOpen() {
          return this.isState("open");
        }
        isActive() {
          return this.isState("open", "connecting");
        }
        triedToReconnect() {
          return this.monitor.reconnectAttempts > 0;
        }
        // Private
        isProtocolSupported() {
          return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
        }
        isState(...states) {
          return indexOf.call(states, this.getState()) >= 0;
        }
        getState() {
          if (this.webSocket) {
            for (let state in adapters_default.WebSocket) {
              if (adapters_default.WebSocket[state] === this.webSocket.readyState) {
                return state.toLowerCase();
              }
            }
          }
          return null;
        }
        installEventHandlers() {
          for (let eventName in this.events) {
            const handler = this.events[eventName].bind(this);
            this.webSocket[`on${eventName}`] = handler;
          }
        }
        uninstallEventHandlers() {
          for (let eventName in this.events) {
            this.webSocket[`on${eventName}`] = function() {
            };
          }
        }
      };
      Connection.reopenDelay = 500;
      Connection.prototype.events = {
        message(event) {
          if (!this.isProtocolSupported()) {
            return;
          }
          const { identifier, message, reason, reconnect, type } = JSON.parse(event.data);
          this.monitor.recordMessage();
          switch (type) {
            case message_types.welcome:
              if (this.triedToReconnect()) {
                this.reconnectAttempted = true;
              }
              this.monitor.recordConnect();
              return this.subscriptions.reload();
            case message_types.disconnect:
              logger_default.log(`Disconnecting. Reason: ${reason}`);
              return this.close({ allowReconnect: reconnect });
            case message_types.ping:
              return null;
            case message_types.confirmation:
              this.subscriptions.confirmSubscription(identifier);
              if (this.reconnectAttempted) {
                this.reconnectAttempted = false;
                return this.subscriptions.notify(identifier, "connected", { reconnected: true });
              } else {
                return this.subscriptions.notify(identifier, "connected", { reconnected: false });
              }
            case message_types.rejection:
              return this.subscriptions.reject(identifier);
            default:
              return this.subscriptions.notify(identifier, "received", message);
          }
        },
        open() {
          logger_default.log(`WebSocket onopen event, using '${this.getProtocol()}' subprotocol`);
          this.disconnected = false;
          if (!this.isProtocolSupported()) {
            logger_default.log("Protocol is unsupported. Stopping monitor and disconnecting.");
            return this.close({ allowReconnect: false });
          }
        },
        close(event) {
          logger_default.log("WebSocket onclose event");
          if (this.disconnected) {
            return;
          }
          this.disconnected = true;
          this.monitor.recordDisconnect();
          return this.subscriptions.notifyAll("disconnected", { willAttemptReconnect: this.monitor.isRunning() });
        },
        error() {
          logger_default.log("WebSocket onerror event");
        }
      };
      connection_default = Connection;
    }
  });

  // node_modules/@rails/actioncable/src/subscription.js
  var extend, Subscription;
  var init_subscription = __esm({
    "node_modules/@rails/actioncable/src/subscription.js"() {
      extend = function(object, properties) {
        if (properties != null) {
          for (let key in properties) {
            const value = properties[key];
            object[key] = value;
          }
        }
        return object;
      };
      Subscription = class {
        constructor(consumer2, params = {}, mixin) {
          this.consumer = consumer2;
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }
        // Perform a channel action with the optional data passed as an attribute
        perform(action, data = {}) {
          data.action = action;
          return this.send(data);
        }
        send(data) {
          return this.consumer.send({ command: "message", identifier: this.identifier, data: JSON.stringify(data) });
        }
        unsubscribe() {
          return this.consumer.subscriptions.remove(this);
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/subscription_guarantor.js
  var SubscriptionGuarantor, subscription_guarantor_default;
  var init_subscription_guarantor = __esm({
    "node_modules/@rails/actioncable/src/subscription_guarantor.js"() {
      init_logger();
      SubscriptionGuarantor = class {
        constructor(subscriptions) {
          this.subscriptions = subscriptions;
          this.pendingSubscriptions = [];
        }
        guarantee(subscription) {
          if (this.pendingSubscriptions.indexOf(subscription) == -1) {
            logger_default.log(`SubscriptionGuarantor guaranteeing ${subscription.identifier}`);
            this.pendingSubscriptions.push(subscription);
          } else {
            logger_default.log(`SubscriptionGuarantor already guaranteeing ${subscription.identifier}`);
          }
          this.startGuaranteeing();
        }
        forget(subscription) {
          logger_default.log(`SubscriptionGuarantor forgetting ${subscription.identifier}`);
          this.pendingSubscriptions = this.pendingSubscriptions.filter((s) => s !== subscription);
        }
        startGuaranteeing() {
          this.stopGuaranteeing();
          this.retrySubscribing();
        }
        stopGuaranteeing() {
          clearTimeout(this.retryTimeout);
        }
        retrySubscribing() {
          this.retryTimeout = setTimeout(
            () => {
              if (this.subscriptions && typeof this.subscriptions.subscribe === "function") {
                this.pendingSubscriptions.map((subscription) => {
                  logger_default.log(`SubscriptionGuarantor resubscribing ${subscription.identifier}`);
                  this.subscriptions.subscribe(subscription);
                });
              }
            },
            500
          );
        }
      };
      subscription_guarantor_default = SubscriptionGuarantor;
    }
  });

  // node_modules/@rails/actioncable/src/subscriptions.js
  var Subscriptions;
  var init_subscriptions = __esm({
    "node_modules/@rails/actioncable/src/subscriptions.js"() {
      init_subscription();
      init_subscription_guarantor();
      init_logger();
      Subscriptions = class {
        constructor(consumer2) {
          this.consumer = consumer2;
          this.guarantor = new subscription_guarantor_default(this);
          this.subscriptions = [];
        }
        create(channelName, mixin) {
          const channel = channelName;
          const params = typeof channel === "object" ? channel : { channel };
          const subscription = new Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        }
        // Private
        add(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.subscribe(subscription);
          return subscription;
        }
        remove(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        }
        reject(identifier) {
          return this.findAll(identifier).map((subscription) => {
            this.forget(subscription);
            this.notify(subscription, "rejected");
            return subscription;
          });
        }
        forget(subscription) {
          this.guarantor.forget(subscription);
          this.subscriptions = this.subscriptions.filter((s) => s !== subscription);
          return subscription;
        }
        findAll(identifier) {
          return this.subscriptions.filter((s) => s.identifier === identifier);
        }
        reload() {
          return this.subscriptions.map((subscription) => this.subscribe(subscription));
        }
        notifyAll(callbackName, ...args) {
          return this.subscriptions.map((subscription) => this.notify(subscription, callbackName, ...args));
        }
        notify(subscription, callbackName, ...args) {
          let subscriptions;
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          return subscriptions.map((subscription2) => typeof subscription2[callbackName] === "function" ? subscription2[callbackName](...args) : void 0);
        }
        subscribe(subscription) {
          if (this.sendCommand(subscription, "subscribe")) {
            this.guarantor.guarantee(subscription);
          }
        }
        confirmSubscription(identifier) {
          logger_default.log(`Subscription confirmed ${identifier}`);
          this.findAll(identifier).map((subscription) => this.guarantor.forget(subscription));
        }
        sendCommand(subscription, command) {
          const { identifier } = subscription;
          return this.consumer.send({ command, identifier });
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/consumer.js
  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }
    if (url && !/^wss?:/i.test(url)) {
      const a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }
  var Consumer;
  var init_consumer = __esm({
    "node_modules/@rails/actioncable/src/consumer.js"() {
      init_connection();
      init_subscriptions();
      Consumer = class {
        constructor(url) {
          this._url = url;
          this.subscriptions = new Subscriptions(this);
          this.connection = new connection_default(this);
          this.subprotocols = [];
        }
        get url() {
          return createWebSocketURL(this._url);
        }
        send(data) {
          return this.connection.send(data);
        }
        connect() {
          return this.connection.open();
        }
        disconnect() {
          return this.connection.close({ allowReconnect: false });
        }
        ensureActiveConnection() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        }
        addSubProtocol(subprotocol) {
          this.subprotocols = [...this.subprotocols, subprotocol];
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/index.js
  var src_exports = {};
  __export(src_exports, {
    Connection: () => connection_default,
    ConnectionMonitor: () => connection_monitor_default,
    Consumer: () => Consumer,
    INTERNAL: () => internal_default,
    Subscription: () => Subscription,
    SubscriptionGuarantor: () => subscription_guarantor_default,
    Subscriptions: () => Subscriptions,
    adapters: () => adapters_default,
    createConsumer: () => createConsumer,
    createWebSocketURL: () => createWebSocketURL,
    getConfig: () => getConfig,
    logger: () => logger_default
  });
  function createConsumer(url = getConfig("url") || internal_default.default_mount_path) {
    return new Consumer(url);
  }
  function getConfig(name) {
    const element = document.head.querySelector(`meta[name='action-cable-${name}']`);
    if (element) {
      return element.getAttribute("content");
    }
  }
  var init_src = __esm({
    "node_modules/@rails/actioncable/src/index.js"() {
      init_connection();
      init_connection_monitor();
      init_consumer();
      init_internal();
      init_subscription();
      init_subscriptions();
      init_subscription_guarantor();
      init_adapters();
      init_logger();
    }
  });

  // app/javascript/application.js
  var import_jquery = __toESM(require_jquery());
  var import_cocoon = __toESM(require_cocoon());

  // node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js
  var turbo_es2017_esm_exports = {};
  __export(turbo_es2017_esm_exports, {
    FetchEnctype: () => FetchEnctype,
    FetchMethod: () => FetchMethod,
    FetchRequest: () => FetchRequest,
    FetchResponse: () => FetchResponse,
    FrameElement: () => FrameElement,
    FrameLoadingStyle: () => FrameLoadingStyle,
    FrameRenderer: () => FrameRenderer,
    PageRenderer: () => PageRenderer,
    PageSnapshot: () => PageSnapshot,
    StreamActions: () => StreamActions,
    StreamElement: () => StreamElement,
    StreamSourceElement: () => StreamSourceElement,
    cache: () => cache,
    clearCache: () => clearCache,
    config: () => config,
    connectStreamSource: () => connectStreamSource,
    disconnectStreamSource: () => disconnectStreamSource,
    fetch: () => fetchWithTurboHeaders,
    fetchEnctypeFromString: () => fetchEnctypeFromString,
    fetchMethodFromString: () => fetchMethodFromString,
    isSafe: () => isSafe,
    morphBodyElements: () => morphBodyElements,
    morphChildren: () => morphChildren,
    morphElements: () => morphElements,
    morphTurboFrameElements: () => morphTurboFrameElements,
    navigator: () => navigator$1,
    registerAdapter: () => registerAdapter,
    renderStreamMessage: () => renderStreamMessage,
    session: () => session,
    setConfirmMethod: () => setConfirmMethod,
    setFormMode: () => setFormMode,
    setProgressBarDelay: () => setProgressBarDelay,
    start: () => start,
    visit: () => visit
  });
  (function(prototype) {
    if (typeof prototype.requestSubmit == "function") return;
    prototype.requestSubmit = function(submitter2) {
      if (submitter2) {
        validateSubmitter(submitter2, this);
        submitter2.click();
      } else {
        submitter2 = document.createElement("input");
        submitter2.type = "submit";
        submitter2.hidden = true;
        this.appendChild(submitter2);
        submitter2.click();
        this.removeChild(submitter2);
      }
    };
    function validateSubmitter(submitter2, form) {
      submitter2 instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
      submitter2.type == "submit" || raise(TypeError, "The specified element is not a submit button");
      submitter2.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
    }
    function raise(errorConstructor, message, name) {
      throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
    }
  })(HTMLFormElement.prototype);
  var submittersByForm = /* @__PURE__ */ new WeakMap();
  function findSubmitterFromClickTarget(target) {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    const candidate = element ? element.closest("input, button") : null;
    return candidate?.type == "submit" ? candidate : null;
  }
  function clickCaptured(event) {
    const submitter2 = findSubmitterFromClickTarget(event.target);
    if (submitter2 && submitter2.form) {
      submittersByForm.set(submitter2.form, submitter2);
    }
  }
  (function() {
    if ("submitter" in Event.prototype) return;
    let prototype = window.Event.prototype;
    if ("SubmitEvent" in window) {
      const prototypeOfSubmitEvent = window.SubmitEvent.prototype;
      if (/Apple Computer/.test(navigator.vendor) && !("submitter" in prototypeOfSubmitEvent)) {
        prototype = prototypeOfSubmitEvent;
      } else {
        return;
      }
    }
    addEventListener("click", clickCaptured, true);
    Object.defineProperty(prototype, "submitter", {
      get() {
        if (this.type == "submit" && this.target instanceof HTMLFormElement) {
          return submittersByForm.get(this.target);
        }
      }
    });
  })();
  var FrameLoadingStyle = {
    eager: "eager",
    lazy: "lazy"
  };
  var FrameElement = class _FrameElement extends HTMLElement {
    static delegateConstructor = void 0;
    loaded = Promise.resolve();
    static get observedAttributes() {
      return ["disabled", "loading", "src"];
    }
    constructor() {
      super();
      this.delegate = new _FrameElement.delegateConstructor(this);
    }
    connectedCallback() {
      this.delegate.connect();
    }
    disconnectedCallback() {
      this.delegate.disconnect();
    }
    reload() {
      return this.delegate.sourceURLReloaded();
    }
    attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      } else if (name == "disabled") {
        this.delegate.disabledChanged();
      }
    }
    /**
     * Gets the URL to lazily load source HTML from
     */
    get src() {
      return this.getAttribute("src");
    }
    /**
     * Sets the URL to lazily load source HTML from
     */
    set src(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }
    /**
     * Gets the refresh mode for the frame.
     */
    get refresh() {
      return this.getAttribute("refresh");
    }
    /**
     * Sets the refresh mode for the frame.
     */
    set refresh(value) {
      if (value) {
        this.setAttribute("refresh", value);
      } else {
        this.removeAttribute("refresh");
      }
    }
    get shouldReloadWithMorph() {
      return this.src && this.refresh === "morph";
    }
    /**
     * Determines if the element is loading
     */
    get loading() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    }
    /**
     * Sets the value of if the element is loading
     */
    set loading(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }
    /**
     * Gets the disabled state of the frame.
     *
     * If disabled, no requests will be intercepted by the frame.
     */
    get disabled() {
      return this.hasAttribute("disabled");
    }
    /**
     * Sets the disabled state of the frame.
     *
     * If disabled, no requests will be intercepted by the frame.
     */
    set disabled(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }
    /**
     * Gets the autoscroll state of the frame.
     *
     * If true, the frame will be scrolled into view automatically on update.
     */
    get autoscroll() {
      return this.hasAttribute("autoscroll");
    }
    /**
     * Sets the autoscroll state of the frame.
     *
     * If true, the frame will be scrolled into view automatically on update.
     */
    set autoscroll(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }
    /**
     * Determines if the element has finished loading
     */
    get complete() {
      return !this.delegate.isLoading;
    }
    /**
     * Gets the active state of the frame.
     *
     * If inactive, source changes will not be observed.
     */
    get isActive() {
      return this.ownerDocument === document && !this.isPreview;
    }
    /**
     * Sets the active state of the frame.
     *
     * If inactive, source changes will not be observed.
     */
    get isPreview() {
      return this.ownerDocument?.documentElement?.hasAttribute("data-turbo-preview");
    }
  };
  function frameLoadingStyleFromString(style) {
    switch (style.toLowerCase()) {
      case "lazy":
        return FrameLoadingStyle.lazy;
      default:
        return FrameLoadingStyle.eager;
    }
  }
  var drive = {
    enabled: true,
    progressBarDelay: 500,
    unvisitableExtensions: /* @__PURE__ */ new Set(
      [
        ".7z",
        ".aac",
        ".apk",
        ".avi",
        ".bmp",
        ".bz2",
        ".css",
        ".csv",
        ".deb",
        ".dmg",
        ".doc",
        ".docx",
        ".exe",
        ".gif",
        ".gz",
        ".heic",
        ".heif",
        ".ico",
        ".iso",
        ".jpeg",
        ".jpg",
        ".js",
        ".json",
        ".m4a",
        ".mkv",
        ".mov",
        ".mp3",
        ".mp4",
        ".mpeg",
        ".mpg",
        ".msi",
        ".ogg",
        ".ogv",
        ".pdf",
        ".pkg",
        ".png",
        ".ppt",
        ".pptx",
        ".rar",
        ".rtf",
        ".svg",
        ".tar",
        ".tif",
        ".tiff",
        ".txt",
        ".wav",
        ".webm",
        ".webp",
        ".wma",
        ".wmv",
        ".xls",
        ".xlsx",
        ".xml",
        ".zip"
      ]
    )
  };
  function activateScriptElement(element) {
    if (element.getAttribute("data-turbo-eval") == "false") {
      return element;
    } else {
      const createdScriptElement = document.createElement("script");
      const cspNonce = getCspNonce();
      if (cspNonce) {
        createdScriptElement.nonce = cspNonce;
      }
      createdScriptElement.textContent = element.textContent;
      createdScriptElement.async = false;
      copyElementAttributes(createdScriptElement, element);
      return createdScriptElement;
    }
  }
  function copyElementAttributes(destinationElement, sourceElement) {
    for (const { name, value } of sourceElement.attributes) {
      destinationElement.setAttribute(name, value);
    }
  }
  function createDocumentFragment(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
  }
  function dispatch(eventName, { target, cancelable, detail } = {}) {
    const event = new CustomEvent(eventName, {
      cancelable,
      bubbles: true,
      composed: true,
      detail
    });
    if (target && target.isConnected) {
      target.dispatchEvent(event);
    } else {
      document.documentElement.dispatchEvent(event);
    }
    return event;
  }
  function cancelEvent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  function nextRepaint() {
    if (document.visibilityState === "hidden") {
      return nextEventLoopTick();
    } else {
      return nextAnimationFrame();
    }
  }
  function nextAnimationFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  function nextEventLoopTick() {
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }
  function nextMicrotask() {
    return Promise.resolve();
  }
  function parseHTMLDocument(html = "") {
    return new DOMParser().parseFromString(html, "text/html");
  }
  function unindent(strings, ...values) {
    const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
    const match = lines[0].match(/^\s+/);
    const indent = match ? match[0].length : 0;
    return lines.map((line) => line.slice(indent)).join("\n");
  }
  function interpolate(strings, values) {
    return strings.reduce((result, string, i) => {
      const value = values[i] == void 0 ? "" : values[i];
      return result + string + value;
    }, "");
  }
  function uuid() {
    return Array.from({ length: 36 }).map((_, i) => {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        return "-";
      } else if (i == 14) {
        return "4";
      } else if (i == 19) {
        return (Math.floor(Math.random() * 4) + 8).toString(16);
      } else {
        return Math.floor(Math.random() * 15).toString(16);
      }
    }).join("");
  }
  function getAttribute(attributeName, ...elements) {
    for (const value of elements.map((element) => element?.getAttribute(attributeName))) {
      if (typeof value == "string") return value;
    }
    return null;
  }
  function hasAttribute(attributeName, ...elements) {
    return elements.some((element) => element && element.hasAttribute(attributeName));
  }
  function markAsBusy(...elements) {
    for (const element of elements) {
      if (element.localName == "turbo-frame") {
        element.setAttribute("busy", "");
      }
      element.setAttribute("aria-busy", "true");
    }
  }
  function clearBusyState(...elements) {
    for (const element of elements) {
      if (element.localName == "turbo-frame") {
        element.removeAttribute("busy");
      }
      element.removeAttribute("aria-busy");
    }
  }
  function waitForLoad(element, timeoutInMilliseconds = 2e3) {
    return new Promise((resolve) => {
      const onComplete = () => {
        element.removeEventListener("error", onComplete);
        element.removeEventListener("load", onComplete);
        resolve();
      };
      element.addEventListener("load", onComplete, { once: true });
      element.addEventListener("error", onComplete, { once: true });
      setTimeout(resolve, timeoutInMilliseconds);
    });
  }
  function getHistoryMethodForAction(action) {
    switch (action) {
      case "replace":
        return history.replaceState;
      case "advance":
      case "restore":
        return history.pushState;
    }
  }
  function isAction(action) {
    return action == "advance" || action == "replace" || action == "restore";
  }
  function getVisitAction(...elements) {
    const action = getAttribute("data-turbo-action", ...elements);
    return isAction(action) ? action : null;
  }
  function getMetaElement(name) {
    return document.querySelector(`meta[name="${name}"]`);
  }
  function getMetaContent(name) {
    const element = getMetaElement(name);
    return element && element.content;
  }
  function getCspNonce() {
    const element = getMetaElement("csp-nonce");
    if (element) {
      const { nonce, content } = element;
      return nonce == "" ? content : nonce;
    }
  }
  function setMetaContent(name, content) {
    let element = getMetaElement(name);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
    return element;
  }
  function findClosestRecursively(element, selector) {
    if (element instanceof Element) {
      return element.closest(selector) || findClosestRecursively(element.assignedSlot || element.getRootNode()?.host, selector);
    }
  }
  function elementIsFocusable(element) {
    const inertDisabledOrHidden = "[inert], :disabled, [hidden], details:not([open]), dialog:not([open])";
    return !!element && element.closest(inertDisabledOrHidden) == null && typeof element.focus == "function";
  }
  function queryAutofocusableElement(elementOrDocumentFragment) {
    return Array.from(elementOrDocumentFragment.querySelectorAll("[autofocus]")).find(elementIsFocusable);
  }
  async function around(callback, reader) {
    const before = reader();
    callback();
    await nextAnimationFrame();
    const after = reader();
    return [before, after];
  }
  function doesNotTargetIFrame(name) {
    if (name === "_blank") {
      return false;
    } else if (name) {
      for (const element of document.getElementsByName(name)) {
        if (element instanceof HTMLIFrameElement) return false;
      }
      return true;
    } else {
      return true;
    }
  }
  function findLinkFromClickTarget(target) {
    const link = findClosestRecursively(target, "a[href], a[xlink\\:href]");
    if (!link) return null;
    if (link.hasAttribute("download")) return null;
    if (link.hasAttribute("target") && link.target !== "_self") return null;
    return link;
  }
  function getLocationForLink(link) {
    return expandURL(link.getAttribute("href") || "");
  }
  function debounce(fn, delay) {
    let timeoutId = null;
    return (...args) => {
      const callback = () => fn.apply(this, args);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }
  var submitter = {
    "aria-disabled": {
      beforeSubmit: (submitter2) => {
        submitter2.setAttribute("aria-disabled", "true");
        submitter2.addEventListener("click", cancelEvent);
      },
      afterSubmit: (submitter2) => {
        submitter2.removeAttribute("aria-disabled");
        submitter2.removeEventListener("click", cancelEvent);
      }
    },
    "disabled": {
      beforeSubmit: (submitter2) => submitter2.disabled = true,
      afterSubmit: (submitter2) => submitter2.disabled = false
    }
  };
  var Config = class {
    #submitter = null;
    constructor(config2) {
      Object.assign(this, config2);
    }
    get submitter() {
      return this.#submitter;
    }
    set submitter(value) {
      this.#submitter = submitter[value] || value;
    }
  };
  var forms = new Config({
    mode: "on",
    submitter: "disabled"
  });
  var config = {
    drive,
    forms
  };
  function expandURL(locatable) {
    return new URL(locatable.toString(), document.baseURI);
  }
  function getAnchor(url) {
    let anchorMatch;
    if (url.hash) {
      return url.hash.slice(1);
    } else if (anchorMatch = url.href.match(/#(.*)$/)) {
      return anchorMatch[1];
    }
  }
  function getAction$1(form, submitter2) {
    const action = submitter2?.getAttribute("formaction") || form.getAttribute("action") || form.action;
    return expandURL(action);
  }
  function getExtension(url) {
    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
  }
  function isPrefixedBy(baseURL, url) {
    const prefix = addTrailingSlash(url.origin + url.pathname);
    return addTrailingSlash(baseURL.href) === prefix || baseURL.href.startsWith(prefix);
  }
  function locationIsVisitable(location2, rootLocation) {
    return isPrefixedBy(location2, rootLocation) && !config.drive.unvisitableExtensions.has(getExtension(location2));
  }
  function getRequestURL(url) {
    const anchor = getAnchor(url);
    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
  }
  function toCacheKey(url) {
    return getRequestURL(url);
  }
  function urlsAreEqual(left, right) {
    return expandURL(left).href == expandURL(right).href;
  }
  function getPathComponents(url) {
    return url.pathname.split("/").slice(1);
  }
  function getLastPathComponent(url) {
    return getPathComponents(url).slice(-1)[0];
  }
  function addTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
  }
  var FetchResponse = class {
    constructor(response) {
      this.response = response;
    }
    get succeeded() {
      return this.response.ok;
    }
    get failed() {
      return !this.succeeded;
    }
    get clientError() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
    get serverError() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
    get redirected() {
      return this.response.redirected;
    }
    get location() {
      return expandURL(this.response.url);
    }
    get isHTML() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
    get statusCode() {
      return this.response.status;
    }
    get contentType() {
      return this.header("Content-Type");
    }
    get responseText() {
      return this.response.clone().text();
    }
    get responseHTML() {
      if (this.isHTML) {
        return this.response.clone().text();
      } else {
        return Promise.resolve(void 0);
      }
    }
    header(name) {
      return this.response.headers.get(name);
    }
  };
  var LimitedSet = class extends Set {
    constructor(maxSize) {
      super();
      this.maxSize = maxSize;
    }
    add(value) {
      if (this.size >= this.maxSize) {
        const iterator = this.values();
        const oldestValue = iterator.next().value;
        this.delete(oldestValue);
      }
      super.add(value);
    }
  };
  var recentRequests = new LimitedSet(20);
  function fetchWithTurboHeaders(url, options = {}) {
    const modifiedHeaders = new Headers(options.headers || {});
    const requestUID = uuid();
    recentRequests.add(requestUID);
    modifiedHeaders.append("X-Turbo-Request-Id", requestUID);
    return window.fetch(url, {
      ...options,
      headers: modifiedHeaders
    });
  }
  function fetchMethodFromString(method) {
    switch (method.toLowerCase()) {
      case "get":
        return FetchMethod.get;
      case "post":
        return FetchMethod.post;
      case "put":
        return FetchMethod.put;
      case "patch":
        return FetchMethod.patch;
      case "delete":
        return FetchMethod.delete;
    }
  }
  var FetchMethod = {
    get: "get",
    post: "post",
    put: "put",
    patch: "patch",
    delete: "delete"
  };
  function fetchEnctypeFromString(encoding) {
    switch (encoding.toLowerCase()) {
      case FetchEnctype.multipart:
        return FetchEnctype.multipart;
      case FetchEnctype.plain:
        return FetchEnctype.plain;
      default:
        return FetchEnctype.urlEncoded;
    }
  }
  var FetchEnctype = {
    urlEncoded: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    plain: "text/plain"
  };
  var FetchRequest = class {
    abortController = new AbortController();
    #resolveRequestPromise = (_value) => {
    };
    constructor(delegate, method, location2, requestBody = new URLSearchParams(), target = null, enctype = FetchEnctype.urlEncoded) {
      const [url, body] = buildResourceAndBody(expandURL(location2), method, requestBody, enctype);
      this.delegate = delegate;
      this.url = url;
      this.target = target;
      this.fetchOptions = {
        credentials: "same-origin",
        redirect: "follow",
        method: method.toUpperCase(),
        headers: { ...this.defaultHeaders },
        body,
        signal: this.abortSignal,
        referrer: this.delegate.referrer?.href
      };
      this.enctype = enctype;
    }
    get method() {
      return this.fetchOptions.method;
    }
    set method(value) {
      const fetchBody = this.isSafe ? this.url.searchParams : this.fetchOptions.body || new FormData();
      const fetchMethod = fetchMethodFromString(value) || FetchMethod.get;
      this.url.search = "";
      const [url, body] = buildResourceAndBody(this.url, fetchMethod, fetchBody, this.enctype);
      this.url = url;
      this.fetchOptions.body = body;
      this.fetchOptions.method = fetchMethod.toUpperCase();
    }
    get headers() {
      return this.fetchOptions.headers;
    }
    set headers(value) {
      this.fetchOptions.headers = value;
    }
    get body() {
      if (this.isSafe) {
        return this.url.searchParams;
      } else {
        return this.fetchOptions.body;
      }
    }
    set body(value) {
      this.fetchOptions.body = value;
    }
    get location() {
      return this.url;
    }
    get params() {
      return this.url.searchParams;
    }
    get entries() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
    cancel() {
      this.abortController.abort();
    }
    async perform() {
      const { fetchOptions } = this;
      this.delegate.prepareRequest(this);
      const event = await this.#allowRequestToBeIntercepted(fetchOptions);
      try {
        this.delegate.requestStarted(this);
        if (event.detail.fetchRequest) {
          this.response = event.detail.fetchRequest.response;
        } else {
          this.response = fetchWithTurboHeaders(this.url.href, fetchOptions);
        }
        const response = await this.response;
        return await this.receive(response);
      } catch (error) {
        if (error.name !== "AbortError") {
          if (this.#willDelegateErrorHandling(error)) {
            this.delegate.requestErrored(this, error);
          }
          throw error;
        }
      } finally {
        this.delegate.requestFinished(this);
      }
    }
    async receive(response) {
      const fetchResponse = new FetchResponse(response);
      const event = dispatch("turbo:before-fetch-response", {
        cancelable: true,
        detail: { fetchResponse },
        target: this.target
      });
      if (event.defaultPrevented) {
        this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
      } else if (fetchResponse.succeeded) {
        this.delegate.requestSucceededWithResponse(this, fetchResponse);
      } else {
        this.delegate.requestFailedWithResponse(this, fetchResponse);
      }
      return fetchResponse;
    }
    get defaultHeaders() {
      return {
        Accept: "text/html, application/xhtml+xml"
      };
    }
    get isSafe() {
      return isSafe(this.method);
    }
    get abortSignal() {
      return this.abortController.signal;
    }
    acceptResponseType(mimeType) {
      this.headers["Accept"] = [mimeType, this.headers["Accept"]].join(", ");
    }
    async #allowRequestToBeIntercepted(fetchOptions) {
      const requestInterception = new Promise((resolve) => this.#resolveRequestPromise = resolve);
      const event = dispatch("turbo:before-fetch-request", {
        cancelable: true,
        detail: {
          fetchOptions,
          url: this.url,
          resume: this.#resolveRequestPromise
        },
        target: this.target
      });
      this.url = event.detail.url;
      if (event.defaultPrevented) await requestInterception;
      return event;
    }
    #willDelegateErrorHandling(error) {
      const event = dispatch("turbo:fetch-request-error", {
        target: this.target,
        cancelable: true,
        detail: { request: this, error }
      });
      return !event.defaultPrevented;
    }
  };
  function isSafe(fetchMethod) {
    return fetchMethodFromString(fetchMethod) == FetchMethod.get;
  }
  function buildResourceAndBody(resource, method, requestBody, enctype) {
    const searchParams = Array.from(requestBody).length > 0 ? new URLSearchParams(entriesExcludingFiles(requestBody)) : resource.searchParams;
    if (isSafe(method)) {
      return [mergeIntoURLSearchParams(resource, searchParams), null];
    } else if (enctype == FetchEnctype.urlEncoded) {
      return [resource, searchParams];
    } else {
      return [resource, requestBody];
    }
  }
  function entriesExcludingFiles(requestBody) {
    const entries = [];
    for (const [name, value] of requestBody) {
      if (value instanceof File) continue;
      else entries.push([name, value]);
    }
    return entries;
  }
  function mergeIntoURLSearchParams(url, requestBody) {
    const searchParams = new URLSearchParams(entriesExcludingFiles(requestBody));
    url.search = searchParams.toString();
    return url;
  }
  var AppearanceObserver = class {
    started = false;
    constructor(delegate, element) {
      this.delegate = delegate;
      this.element = element;
      this.intersectionObserver = new IntersectionObserver(this.intersect);
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
    intersect = (entries) => {
      const lastEntry = entries.slice(-1)[0];
      if (lastEntry?.isIntersecting) {
        this.delegate.elementAppearedInViewport(this.element);
      }
    };
  };
  var StreamMessage = class {
    static contentType = "text/vnd.turbo-stream.html";
    static wrap(message) {
      if (typeof message == "string") {
        return new this(createDocumentFragment(message));
      } else {
        return message;
      }
    }
    constructor(fragment) {
      this.fragment = importStreamElements(fragment);
    }
  };
  function importStreamElements(fragment) {
    for (const element of fragment.querySelectorAll("turbo-stream")) {
      const streamElement = document.importNode(element, true);
      for (const inertScriptElement of streamElement.templateElement.content.querySelectorAll("script")) {
        inertScriptElement.replaceWith(activateScriptElement(inertScriptElement));
      }
      element.replaceWith(streamElement);
    }
    return fragment;
  }
  var PREFETCH_DELAY = 100;
  var PrefetchCache = class {
    #prefetchTimeout = null;
    #prefetched = null;
    get(url) {
      if (this.#prefetched && this.#prefetched.url === url && this.#prefetched.expire > Date.now()) {
        return this.#prefetched.request;
      }
    }
    setLater(url, request, ttl) {
      this.clear();
      this.#prefetchTimeout = setTimeout(() => {
        request.perform();
        this.set(url, request, ttl);
        this.#prefetchTimeout = null;
      }, PREFETCH_DELAY);
    }
    set(url, request, ttl) {
      this.#prefetched = { url, request, expire: new Date((/* @__PURE__ */ new Date()).getTime() + ttl) };
    }
    clear() {
      if (this.#prefetchTimeout) clearTimeout(this.#prefetchTimeout);
      this.#prefetched = null;
    }
  };
  var cacheTtl = 10 * 1e3;
  var prefetchCache = new PrefetchCache();
  var FormSubmissionState = {
    initialized: "initialized",
    requesting: "requesting",
    waiting: "waiting",
    receiving: "receiving",
    stopping: "stopping",
    stopped: "stopped"
  };
  var FormSubmission = class _FormSubmission {
    state = FormSubmissionState.initialized;
    static confirmMethod(message) {
      return Promise.resolve(confirm(message));
    }
    constructor(delegate, formElement, submitter2, mustRedirect = false) {
      const method = getMethod(formElement, submitter2);
      const action = getAction(getFormAction(formElement, submitter2), method);
      const body = buildFormData(formElement, submitter2);
      const enctype = getEnctype(formElement, submitter2);
      this.delegate = delegate;
      this.formElement = formElement;
      this.submitter = submitter2;
      this.fetchRequest = new FetchRequest(this, method, action, body, formElement, enctype);
      this.mustRedirect = mustRedirect;
    }
    get method() {
      return this.fetchRequest.method;
    }
    set method(value) {
      this.fetchRequest.method = value;
    }
    get action() {
      return this.fetchRequest.url.toString();
    }
    set action(value) {
      this.fetchRequest.url = expandURL(value);
    }
    get body() {
      return this.fetchRequest.body;
    }
    get enctype() {
      return this.fetchRequest.enctype;
    }
    get isSafe() {
      return this.fetchRequest.isSafe;
    }
    get location() {
      return this.fetchRequest.url;
    }
    // The submission process
    async start() {
      const { initialized, requesting } = FormSubmissionState;
      const confirmationMessage = getAttribute("data-turbo-confirm", this.submitter, this.formElement);
      if (typeof confirmationMessage === "string") {
        const confirmMethod = typeof config.forms.confirm === "function" ? config.forms.confirm : _FormSubmission.confirmMethod;
        const answer = await confirmMethod(confirmationMessage, this.formElement, this.submitter);
        if (!answer) {
          return;
        }
      }
      if (this.state == initialized) {
        this.state = requesting;
        return this.fetchRequest.perform();
      }
    }
    stop() {
      const { stopping, stopped } = FormSubmissionState;
      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }
    // Fetch request delegate
    prepareRequest(request) {
      if (!request.isSafe) {
        const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
        if (token) {
          request.headers["X-CSRF-Token"] = token;
        }
      }
      if (this.requestAcceptsTurboStreamResponse(request)) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted(_request) {
      this.state = FormSubmissionState.waiting;
      if (this.submitter) config.forms.submitter.beforeSubmit(this.submitter);
      this.setSubmitsWith();
      markAsBusy(this.formElement);
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: { formSubmission: this }
      });
      this.delegate.formSubmissionStarted(this);
    }
    requestPreventedHandlingResponse(request, response) {
      prefetchCache.clear();
      this.result = { success: response.succeeded, fetchResponse: response };
    }
    requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
        return;
      }
      prefetchCache.clear();
      if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        const error = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = { success: true, fetchResponse: response };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
    requestFailedWithResponse(request, response) {
      this.result = { success: false, fetchResponse: response };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
    requestErrored(request, error) {
      this.result = { success: false, error };
      this.delegate.formSubmissionErrored(this, error);
    }
    requestFinished(_request) {
      this.state = FormSubmissionState.stopped;
      if (this.submitter) config.forms.submitter.afterSubmit(this.submitter);
      this.resetSubmitterText();
      clearBusyState(this.formElement);
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: { formSubmission: this, ...this.result }
      });
      this.delegate.formSubmissionFinished(this);
    }
    // Private
    setSubmitsWith() {
      if (!this.submitter || !this.submitsWith) return;
      if (this.submitter.matches("button")) {
        this.originalSubmitText = this.submitter.innerHTML;
        this.submitter.innerHTML = this.submitsWith;
      } else if (this.submitter.matches("input")) {
        const input = this.submitter;
        this.originalSubmitText = input.value;
        input.value = this.submitsWith;
      }
    }
    resetSubmitterText() {
      if (!this.submitter || !this.originalSubmitText) return;
      if (this.submitter.matches("button")) {
        this.submitter.innerHTML = this.originalSubmitText;
      } else if (this.submitter.matches("input")) {
        const input = this.submitter;
        input.value = this.originalSubmitText;
      }
    }
    requestMustRedirect(request) {
      return !request.isSafe && this.mustRedirect;
    }
    requestAcceptsTurboStreamResponse(request) {
      return !request.isSafe || hasAttribute("data-turbo-stream", this.submitter, this.formElement);
    }
    get submitsWith() {
      return this.submitter?.getAttribute("data-turbo-submits-with");
    }
  };
  function buildFormData(formElement, submitter2) {
    const formData = new FormData(formElement);
    const name = submitter2?.getAttribute("name");
    const value = submitter2?.getAttribute("value");
    if (name) {
      formData.append(name, value || "");
    }
    return formData;
  }
  function getCookieValue(cookieName) {
    if (cookieName != null) {
      const cookies = document.cookie ? document.cookie.split("; ") : [];
      const cookie = cookies.find((cookie2) => cookie2.startsWith(cookieName));
      if (cookie) {
        const value = cookie.split("=").slice(1).join("=");
        return value ? decodeURIComponent(value) : void 0;
      }
    }
  }
  function responseSucceededWithoutRedirect(response) {
    return response.statusCode == 200 && !response.redirected;
  }
  function getFormAction(formElement, submitter2) {
    const formElementAction = typeof formElement.action === "string" ? formElement.action : null;
    if (submitter2?.hasAttribute("formaction")) {
      return submitter2.getAttribute("formaction") || "";
    } else {
      return formElement.getAttribute("action") || formElementAction || "";
    }
  }
  function getAction(formAction, fetchMethod) {
    const action = expandURL(formAction);
    if (isSafe(fetchMethod)) {
      action.search = "";
    }
    return action;
  }
  function getMethod(formElement, submitter2) {
    const method = submitter2?.getAttribute("formmethod") || formElement.getAttribute("method") || "";
    return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
  }
  function getEnctype(formElement, submitter2) {
    return fetchEnctypeFromString(submitter2?.getAttribute("formenctype") || formElement.enctype);
  }
  var Snapshot = class {
    constructor(element) {
      this.element = element;
    }
    get activeElement() {
      return this.element.ownerDocument.activeElement;
    }
    get children() {
      return [...this.element.children];
    }
    hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
    getElementForAnchor(anchor) {
      return anchor ? this.element.querySelector(`[id='${anchor}'], a[name='${anchor}']`) : null;
    }
    get isConnected() {
      return this.element.isConnected;
    }
    get firstAutofocusableElement() {
      return queryAutofocusableElement(this.element);
    }
    get permanentElements() {
      return queryPermanentElementsAll(this.element);
    }
    getPermanentElementById(id) {
      return getPermanentElementById(this.element, id);
    }
    getPermanentElementMapForSnapshot(snapshot) {
      const permanentElementMap = {};
      for (const currentPermanentElement of this.permanentElements) {
        const { id } = currentPermanentElement;
        const newPermanentElement = snapshot.getPermanentElementById(id);
        if (newPermanentElement) {
          permanentElementMap[id] = [currentPermanentElement, newPermanentElement];
        }
      }
      return permanentElementMap;
    }
  };
  function getPermanentElementById(node, id) {
    return node.querySelector(`#${id}[data-turbo-permanent]`);
  }
  function queryPermanentElementsAll(node) {
    return node.querySelectorAll("[id][data-turbo-permanent]");
  }
  var FormSubmitObserver = class {
    started = false;
    constructor(delegate, eventTarget) {
      this.delegate = delegate;
      this.eventTarget = eventTarget;
    }
    start() {
      if (!this.started) {
        this.eventTarget.addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
    submitCaptured = () => {
      this.eventTarget.removeEventListener("submit", this.submitBubbled, false);
      this.eventTarget.addEventListener("submit", this.submitBubbled, false);
    };
    submitBubbled = (event) => {
      if (!event.defaultPrevented) {
        const form = event.target instanceof HTMLFormElement ? event.target : void 0;
        const submitter2 = event.submitter || void 0;
        if (form && submissionDoesNotDismissDialog(form, submitter2) && submissionDoesNotTargetIFrame(form, submitter2) && this.delegate.willSubmitForm(form, submitter2)) {
          event.preventDefault();
          event.stopImmediatePropagation();
          this.delegate.formSubmitted(form, submitter2);
        }
      }
    };
  };
  function submissionDoesNotDismissDialog(form, submitter2) {
    const method = submitter2?.getAttribute("formmethod") || form.getAttribute("method");
    return method != "dialog";
  }
  function submissionDoesNotTargetIFrame(form, submitter2) {
    const target = submitter2?.getAttribute("formtarget") || form.getAttribute("target");
    return doesNotTargetIFrame(target);
  }
  var View = class {
    #resolveRenderPromise = (_value) => {
    };
    #resolveInterceptionPromise = (_value) => {
    };
    constructor(delegate, element) {
      this.delegate = delegate;
      this.element = element;
    }
    // Scrolling
    scrollToAnchor(anchor) {
      const element = this.snapshot.getElementForAnchor(anchor);
      if (element) {
        this.focusElement(element);
        this.scrollToElement(element);
      } else {
        this.scrollToPosition({ x: 0, y: 0 });
      }
    }
    scrollToAnchorFromLocation(location2) {
      this.scrollToAnchor(getAnchor(location2));
    }
    scrollToElement(element) {
      element.scrollIntoView();
    }
    focusElement(element) {
      if (element instanceof HTMLElement) {
        if (element.hasAttribute("tabindex")) {
          element.focus();
        } else {
          element.setAttribute("tabindex", "-1");
          element.focus();
          element.removeAttribute("tabindex");
        }
      }
    }
    scrollToPosition({ x, y }) {
      this.scrollRoot.scrollTo(x, y);
    }
    scrollToTop() {
      this.scrollToPosition({ x: 0, y: 0 });
    }
    get scrollRoot() {
      return window;
    }
    // Rendering
    async render(renderer) {
      const { isPreview, shouldRender, willRender, newSnapshot: snapshot } = renderer;
      const shouldInvalidate = willRender;
      if (shouldRender) {
        try {
          this.renderPromise = new Promise((resolve) => this.#resolveRenderPromise = resolve);
          this.renderer = renderer;
          await this.prepareToRenderSnapshot(renderer);
          const renderInterception = new Promise((resolve) => this.#resolveInterceptionPromise = resolve);
          const options = { resume: this.#resolveInterceptionPromise, render: this.renderer.renderElement, renderMethod: this.renderer.renderMethod };
          const immediateRender = this.delegate.allowsImmediateRender(snapshot, options);
          if (!immediateRender) await renderInterception;
          await this.renderSnapshot(renderer);
          this.delegate.viewRenderedSnapshot(snapshot, isPreview, this.renderer.renderMethod);
          this.delegate.preloadOnLoadLinksForView(this.element);
          this.finishRenderingSnapshot(renderer);
        } finally {
          delete this.renderer;
          this.#resolveRenderPromise(void 0);
          delete this.renderPromise;
        }
      } else if (shouldInvalidate) {
        this.invalidate(renderer.reloadReason);
      }
    }
    invalidate(reason) {
      this.delegate.viewInvalidated(reason);
    }
    async prepareToRenderSnapshot(renderer) {
      this.markAsPreview(renderer.isPreview);
      await renderer.prepareToRender();
    }
    markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
    markVisitDirection(direction) {
      this.element.setAttribute("data-turbo-visit-direction", direction);
    }
    unmarkVisitDirection() {
      this.element.removeAttribute("data-turbo-visit-direction");
    }
    async renderSnapshot(renderer) {
      await renderer.render();
    }
    finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  };
  var FrameView = class extends View {
    missing() {
      this.element.innerHTML = `<strong class="turbo-frame-error">Content missing</strong>`;
    }
    get snapshot() {
      return new Snapshot(this.element);
    }
  };
  var LinkInterceptor = class {
    constructor(delegate, element) {
      this.delegate = delegate;
      this.element = element;
    }
    start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
    stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
    clickBubbled = (event) => {
      if (this.clickEventIsSignificant(event)) {
        this.clickEvent = event;
      } else {
        delete this.clickEvent;
      }
    };
    linkClicked = (event) => {
      if (this.clickEvent && this.clickEventIsSignificant(event)) {
        if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url, event.detail.originalEvent)) {
          this.clickEvent.preventDefault();
          event.preventDefault();
          this.delegate.linkClickIntercepted(event.target, event.detail.url, event.detail.originalEvent);
        }
      }
      delete this.clickEvent;
    };
    willVisit = (_event) => {
      delete this.clickEvent;
    };
    clickEventIsSignificant(event) {
      const target = event.composed ? event.target?.parentElement : event.target;
      const element = findLinkFromClickTarget(target) || target;
      return element instanceof Element && element.closest("turbo-frame, html") == this.element;
    }
  };
  var LinkClickObserver = class {
    started = false;
    constructor(delegate, eventTarget) {
      this.delegate = delegate;
      this.eventTarget = eventTarget;
    }
    start() {
      if (!this.started) {
        this.eventTarget.addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
    clickCaptured = () => {
      this.eventTarget.removeEventListener("click", this.clickBubbled, false);
      this.eventTarget.addEventListener("click", this.clickBubbled, false);
    };
    clickBubbled = (event) => {
      if (event instanceof MouseEvent && this.clickEventIsSignificant(event)) {
        const target = event.composedPath && event.composedPath()[0] || event.target;
        const link = findLinkFromClickTarget(target);
        if (link && doesNotTargetIFrame(link.target)) {
          const location2 = getLocationForLink(link);
          if (this.delegate.willFollowLinkToLocation(link, location2, event)) {
            event.preventDefault();
            this.delegate.followedLinkToLocation(link, location2);
          }
        }
      }
    };
    clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
  };
  var FormLinkClickObserver = class {
    constructor(delegate, element) {
      this.delegate = delegate;
      this.linkInterceptor = new LinkClickObserver(this, element);
    }
    start() {
      this.linkInterceptor.start();
    }
    stop() {
      this.linkInterceptor.stop();
    }
    // Link hover observer delegate
    canPrefetchRequestToLocation(link, location2) {
      return false;
    }
    prefetchAndCacheRequestToLocation(link, location2) {
      return;
    }
    // Link click observer delegate
    willFollowLinkToLocation(link, location2, originalEvent) {
      return this.delegate.willSubmitFormLinkToLocation(link, location2, originalEvent) && (link.hasAttribute("data-turbo-method") || link.hasAttribute("data-turbo-stream"));
    }
    followedLinkToLocation(link, location2) {
      const form = document.createElement("form");
      const type = "hidden";
      for (const [name, value] of location2.searchParams) {
        form.append(Object.assign(document.createElement("input"), { type, name, value }));
      }
      const action = Object.assign(location2, { search: "" });
      form.setAttribute("data-turbo", "true");
      form.setAttribute("action", action.href);
      form.setAttribute("hidden", "");
      const method = link.getAttribute("data-turbo-method");
      if (method) form.setAttribute("method", method);
      const turboFrame = link.getAttribute("data-turbo-frame");
      if (turboFrame) form.setAttribute("data-turbo-frame", turboFrame);
      const turboAction = getVisitAction(link);
      if (turboAction) form.setAttribute("data-turbo-action", turboAction);
      const turboConfirm = link.getAttribute("data-turbo-confirm");
      if (turboConfirm) form.setAttribute("data-turbo-confirm", turboConfirm);
      const turboStream = link.hasAttribute("data-turbo-stream");
      if (turboStream) form.setAttribute("data-turbo-stream", "");
      this.delegate.submittedFormLinkToLocation(link, location2, form);
      document.body.appendChild(form);
      form.addEventListener("turbo:submit-end", () => form.remove(), { once: true });
      requestAnimationFrame(() => form.requestSubmit());
    }
  };
  var Bardo = class {
    static async preservingPermanentElements(delegate, permanentElementMap, callback) {
      const bardo = new this(delegate, permanentElementMap);
      bardo.enter();
      await callback();
      bardo.leave();
    }
    constructor(delegate, permanentElementMap) {
      this.delegate = delegate;
      this.permanentElementMap = permanentElementMap;
    }
    enter() {
      for (const id in this.permanentElementMap) {
        const [currentPermanentElement, newPermanentElement] = this.permanentElementMap[id];
        this.delegate.enteringBardo(currentPermanentElement, newPermanentElement);
        this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
      }
    }
    leave() {
      for (const id in this.permanentElementMap) {
        const [currentPermanentElement] = this.permanentElementMap[id];
        this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
        this.replacePlaceholderWithPermanentElement(currentPermanentElement);
        this.delegate.leavingBardo(currentPermanentElement);
      }
    }
    replaceNewPermanentElementWithPlaceholder(permanentElement) {
      const placeholder = createPlaceholderForPermanentElement(permanentElement);
      permanentElement.replaceWith(placeholder);
    }
    replaceCurrentPermanentElementWithClone(permanentElement) {
      const clone = permanentElement.cloneNode(true);
      permanentElement.replaceWith(clone);
    }
    replacePlaceholderWithPermanentElement(permanentElement) {
      const placeholder = this.getPlaceholderById(permanentElement.id);
      placeholder?.replaceWith(permanentElement);
    }
    getPlaceholderById(id) {
      return this.placeholders.find((element) => element.content == id);
    }
    get placeholders() {
      return [...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")];
    }
  };
  function createPlaceholderForPermanentElement(permanentElement) {
    const element = document.createElement("meta");
    element.setAttribute("name", "turbo-permanent-placeholder");
    element.setAttribute("content", permanentElement.id);
    return element;
  }
  var Renderer = class {
    #activeElement = null;
    static renderElement(currentElement, newElement) {
    }
    constructor(currentSnapshot, newSnapshot, isPreview, willRender = true) {
      this.currentSnapshot = currentSnapshot;
      this.newSnapshot = newSnapshot;
      this.isPreview = isPreview;
      this.willRender = willRender;
      this.renderElement = this.constructor.renderElement;
      this.promise = new Promise((resolve, reject) => this.resolvingFunctions = { resolve, reject });
    }
    get shouldRender() {
      return true;
    }
    get shouldAutofocus() {
      return true;
    }
    get reloadReason() {
      return;
    }
    prepareToRender() {
      return;
    }
    render() {
    }
    finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
    async preservingPermanentElements(callback) {
      await Bardo.preservingPermanentElements(this, this.permanentElementMap, callback);
    }
    focusFirstAutofocusableElement() {
      if (this.shouldAutofocus) {
        const element = this.connectedSnapshot.firstAutofocusableElement;
        if (element) {
          element.focus();
        }
      }
    }
    // Bardo delegate
    enteringBardo(currentPermanentElement) {
      if (this.#activeElement) return;
      if (currentPermanentElement.contains(this.currentSnapshot.activeElement)) {
        this.#activeElement = this.currentSnapshot.activeElement;
      }
    }
    leavingBardo(currentPermanentElement) {
      if (currentPermanentElement.contains(this.#activeElement) && this.#activeElement instanceof HTMLElement) {
        this.#activeElement.focus();
        this.#activeElement = null;
      }
    }
    get connectedSnapshot() {
      return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
    get currentElement() {
      return this.currentSnapshot.element;
    }
    get newElement() {
      return this.newSnapshot.element;
    }
    get permanentElementMap() {
      return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
    get renderMethod() {
      return "replace";
    }
  };
  var FrameRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      const destinationRange = document.createRange();
      destinationRange.selectNodeContents(currentElement);
      destinationRange.deleteContents();
      const frameElement = newElement;
      const sourceRange = frameElement.ownerDocument?.createRange();
      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        currentElement.appendChild(sourceRange.extractContents());
      }
    }
    constructor(delegate, currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true) {
      super(currentSnapshot, newSnapshot, renderElement, isPreview, willRender);
      this.delegate = delegate;
    }
    get shouldRender() {
      return true;
    }
    async render() {
      await nextRepaint();
      this.preservingPermanentElements(() => {
        this.loadFrameElement();
      });
      this.scrollFrameIntoView();
      await nextRepaint();
      this.focusFirstAutofocusableElement();
      await nextRepaint();
      this.activateScriptElements();
    }
    loadFrameElement() {
      this.delegate.willRenderFrame(this.currentElement, this.newElement);
      this.renderElement(this.currentElement, this.newElement);
    }
    scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        const element = this.currentElement.firstElementChild;
        const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
        const behavior = readScrollBehavior(this.currentElement.getAttribute("data-autoscroll-behavior"), "auto");
        if (element) {
          element.scrollIntoView({ block, behavior });
          return true;
        }
      }
      return false;
    }
    activateScriptElements() {
      for (const inertScriptElement of this.newScriptElements) {
        const activatedScriptElement = activateScriptElement(inertScriptElement);
        inertScriptElement.replaceWith(activatedScriptElement);
      }
    }
    get newScriptElements() {
      return this.currentElement.querySelectorAll("script");
    }
  };
  function readScrollLogicalPosition(value, defaultValue) {
    if (value == "end" || value == "start" || value == "center" || value == "nearest") {
      return value;
    } else {
      return defaultValue;
    }
  }
  function readScrollBehavior(value, defaultValue) {
    if (value == "auto" || value == "smooth") {
      return value;
    } else {
      return defaultValue;
    }
  }
  var Idiomorph = (function() {
    const noOp = () => {
    };
    const defaults = {
      morphStyle: "outerHTML",
      callbacks: {
        beforeNodeAdded: noOp,
        afterNodeAdded: noOp,
        beforeNodeMorphed: noOp,
        afterNodeMorphed: noOp,
        beforeNodeRemoved: noOp,
        afterNodeRemoved: noOp,
        beforeAttributeUpdated: noOp
      },
      head: {
        style: "merge",
        shouldPreserve: (elt) => elt.getAttribute("im-preserve") === "true",
        shouldReAppend: (elt) => elt.getAttribute("im-re-append") === "true",
        shouldRemove: noOp,
        afterHeadMorphed: noOp
      },
      restoreFocus: true
    };
    function morph(oldNode, newContent, config2 = {}) {
      oldNode = normalizeElement(oldNode);
      const newNode = normalizeParent(newContent);
      const ctx = createMorphContext(oldNode, newNode, config2);
      const morphedNodes = saveAndRestoreFocus(ctx, () => {
        return withHeadBlocking(
          ctx,
          oldNode,
          newNode,
          /** @param {MorphContext} ctx */
          (ctx2) => {
            if (ctx2.morphStyle === "innerHTML") {
              morphChildren2(ctx2, oldNode, newNode);
              return Array.from(oldNode.childNodes);
            } else {
              return morphOuterHTML(ctx2, oldNode, newNode);
            }
          }
        );
      });
      ctx.pantry.remove();
      return morphedNodes;
    }
    function morphOuterHTML(ctx, oldNode, newNode) {
      const oldParent = normalizeParent(oldNode);
      let childNodes = Array.from(oldParent.childNodes);
      const index = childNodes.indexOf(oldNode);
      const rightMargin = childNodes.length - (index + 1);
      morphChildren2(
        ctx,
        oldParent,
        newNode,
        // these two optional params are the secret sauce
        oldNode,
        // start point for iteration
        oldNode.nextSibling
        // end point for iteration
      );
      childNodes = Array.from(oldParent.childNodes);
      return childNodes.slice(index, childNodes.length - rightMargin);
    }
    function saveAndRestoreFocus(ctx, fn) {
      if (!ctx.config.restoreFocus) return fn();
      let activeElement = (
        /** @type {HTMLInputElement|HTMLTextAreaElement|null} */
        document.activeElement
      );
      if (!(activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement)) {
        return fn();
      }
      const { id: activeElementId, selectionStart, selectionEnd } = activeElement;
      const results = fn();
      if (activeElementId && activeElementId !== document.activeElement?.id) {
        activeElement = ctx.target.querySelector(`#${activeElementId}`);
        activeElement?.focus();
      }
      if (activeElement && !activeElement.selectionEnd && selectionEnd) {
        activeElement.setSelectionRange(selectionStart, selectionEnd);
      }
      return results;
    }
    const morphChildren2 = /* @__PURE__ */ (function() {
      function morphChildren3(ctx, oldParent, newParent, insertionPoint = null, endPoint = null) {
        if (oldParent instanceof HTMLTemplateElement && newParent instanceof HTMLTemplateElement) {
          oldParent = oldParent.content;
          newParent = newParent.content;
        }
        insertionPoint ||= oldParent.firstChild;
        for (const newChild of newParent.childNodes) {
          if (insertionPoint && insertionPoint != endPoint) {
            const bestMatch = findBestMatch(
              ctx,
              newChild,
              insertionPoint,
              endPoint
            );
            if (bestMatch) {
              if (bestMatch !== insertionPoint) {
                removeNodesBetween(ctx, insertionPoint, bestMatch);
              }
              morphNode(bestMatch, newChild, ctx);
              insertionPoint = bestMatch.nextSibling;
              continue;
            }
          }
          if (newChild instanceof Element && ctx.persistentIds.has(newChild.id)) {
            const movedChild = moveBeforeById(
              oldParent,
              newChild.id,
              insertionPoint,
              ctx
            );
            morphNode(movedChild, newChild, ctx);
            insertionPoint = movedChild.nextSibling;
            continue;
          }
          const insertedNode = createNode(
            oldParent,
            newChild,
            insertionPoint,
            ctx
          );
          if (insertedNode) {
            insertionPoint = insertedNode.nextSibling;
          }
        }
        while (insertionPoint && insertionPoint != endPoint) {
          const tempNode = insertionPoint;
          insertionPoint = insertionPoint.nextSibling;
          removeNode(ctx, tempNode);
        }
      }
      function createNode(oldParent, newChild, insertionPoint, ctx) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return null;
        if (ctx.idMap.has(newChild)) {
          const newEmptyChild = document.createElement(
            /** @type {Element} */
            newChild.tagName
          );
          oldParent.insertBefore(newEmptyChild, insertionPoint);
          morphNode(newEmptyChild, newChild, ctx);
          ctx.callbacks.afterNodeAdded(newEmptyChild);
          return newEmptyChild;
        } else {
          const newClonedChild = document.importNode(newChild, true);
          oldParent.insertBefore(newClonedChild, insertionPoint);
          ctx.callbacks.afterNodeAdded(newClonedChild);
          return newClonedChild;
        }
      }
      const findBestMatch = /* @__PURE__ */ (function() {
        function findBestMatch2(ctx, node, startPoint, endPoint) {
          let softMatch = null;
          let nextSibling = node.nextSibling;
          let siblingSoftMatchCount = 0;
          let cursor = startPoint;
          while (cursor && cursor != endPoint) {
            if (isSoftMatch(cursor, node)) {
              if (isIdSetMatch(ctx, cursor, node)) {
                return cursor;
              }
              if (softMatch === null) {
                if (!ctx.idMap.has(cursor)) {
                  softMatch = cursor;
                }
              }
            }
            if (softMatch === null && nextSibling && isSoftMatch(cursor, nextSibling)) {
              siblingSoftMatchCount++;
              nextSibling = nextSibling.nextSibling;
              if (siblingSoftMatchCount >= 2) {
                softMatch = void 0;
              }
            }
            if (cursor.contains(document.activeElement)) break;
            cursor = cursor.nextSibling;
          }
          return softMatch || null;
        }
        function isIdSetMatch(ctx, oldNode, newNode) {
          let oldSet = ctx.idMap.get(oldNode);
          let newSet = ctx.idMap.get(newNode);
          if (!newSet || !oldSet) return false;
          for (const id of oldSet) {
            if (newSet.has(id)) {
              return true;
            }
          }
          return false;
        }
        function isSoftMatch(oldNode, newNode) {
          const oldElt = (
            /** @type {Element} */
            oldNode
          );
          const newElt = (
            /** @type {Element} */
            newNode
          );
          return oldElt.nodeType === newElt.nodeType && oldElt.tagName === newElt.tagName && // If oldElt has an `id` with possible state and it doesn't match newElt.id then avoid morphing.
          // We'll still match an anonymous node with an IDed newElt, though, because if it got this far,
          // its not persistent, and new nodes can't have any hidden state.
          (!oldElt.id || oldElt.id === newElt.id);
        }
        return findBestMatch2;
      })();
      function removeNode(ctx, node) {
        if (ctx.idMap.has(node)) {
          moveBefore(ctx.pantry, node, null);
        } else {
          if (ctx.callbacks.beforeNodeRemoved(node) === false) return;
          node.parentNode?.removeChild(node);
          ctx.callbacks.afterNodeRemoved(node);
        }
      }
      function removeNodesBetween(ctx, startInclusive, endExclusive) {
        let cursor = startInclusive;
        while (cursor && cursor !== endExclusive) {
          let tempNode = (
            /** @type {Node} */
            cursor
          );
          cursor = cursor.nextSibling;
          removeNode(ctx, tempNode);
        }
        return cursor;
      }
      function moveBeforeById(parentNode, id, after, ctx) {
        const target = (
          /** @type {Element} - will always be found */
          ctx.target.querySelector(`#${id}`) || ctx.pantry.querySelector(`#${id}`)
        );
        removeElementFromAncestorsIdMaps(target, ctx);
        moveBefore(parentNode, target, after);
        return target;
      }
      function removeElementFromAncestorsIdMaps(element, ctx) {
        const id = element.id;
        while (element = element.parentNode) {
          let idSet = ctx.idMap.get(element);
          if (idSet) {
            idSet.delete(id);
            if (!idSet.size) {
              ctx.idMap.delete(element);
            }
          }
        }
      }
      function moveBefore(parentNode, element, after) {
        if (parentNode.moveBefore) {
          try {
            parentNode.moveBefore(element, after);
          } catch (e) {
            parentNode.insertBefore(element, after);
          }
        } else {
          parentNode.insertBefore(element, after);
        }
      }
      return morphChildren3;
    })();
    const morphNode = /* @__PURE__ */ (function() {
      function morphNode2(oldNode, newContent, ctx) {
        if (ctx.ignoreActive && oldNode === document.activeElement) {
          return null;
        }
        if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) {
          return oldNode;
        }
        if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) ;
        else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
          handleHeadElement(
            oldNode,
            /** @type {HTMLHeadElement} */
            newContent,
            ctx
          );
        } else {
          morphAttributes(oldNode, newContent, ctx);
          if (!ignoreValueOfActiveElement(oldNode, ctx)) {
            morphChildren2(ctx, oldNode, newContent);
          }
        }
        ctx.callbacks.afterNodeMorphed(oldNode, newContent);
        return oldNode;
      }
      function morphAttributes(oldNode, newNode, ctx) {
        let type = newNode.nodeType;
        if (type === 1) {
          const oldElt = (
            /** @type {Element} */
            oldNode
          );
          const newElt = (
            /** @type {Element} */
            newNode
          );
          const oldAttributes = oldElt.attributes;
          const newAttributes = newElt.attributes;
          for (const newAttribute of newAttributes) {
            if (ignoreAttribute(newAttribute.name, oldElt, "update", ctx)) {
              continue;
            }
            if (oldElt.getAttribute(newAttribute.name) !== newAttribute.value) {
              oldElt.setAttribute(newAttribute.name, newAttribute.value);
            }
          }
          for (let i = oldAttributes.length - 1; 0 <= i; i--) {
            const oldAttribute = oldAttributes[i];
            if (!oldAttribute) continue;
            if (!newElt.hasAttribute(oldAttribute.name)) {
              if (ignoreAttribute(oldAttribute.name, oldElt, "remove", ctx)) {
                continue;
              }
              oldElt.removeAttribute(oldAttribute.name);
            }
          }
          if (!ignoreValueOfActiveElement(oldElt, ctx)) {
            syncInputValue(oldElt, newElt, ctx);
          }
        }
        if (type === 8 || type === 3) {
          if (oldNode.nodeValue !== newNode.nodeValue) {
            oldNode.nodeValue = newNode.nodeValue;
          }
        }
      }
      function syncInputValue(oldElement, newElement, ctx) {
        if (oldElement instanceof HTMLInputElement && newElement instanceof HTMLInputElement && newElement.type !== "file") {
          let newValue = newElement.value;
          let oldValue = oldElement.value;
          syncBooleanAttribute(oldElement, newElement, "checked", ctx);
          syncBooleanAttribute(oldElement, newElement, "disabled", ctx);
          if (!newElement.hasAttribute("value")) {
            if (!ignoreAttribute("value", oldElement, "remove", ctx)) {
              oldElement.value = "";
              oldElement.removeAttribute("value");
            }
          } else if (oldValue !== newValue) {
            if (!ignoreAttribute("value", oldElement, "update", ctx)) {
              oldElement.setAttribute("value", newValue);
              oldElement.value = newValue;
            }
          }
        } else if (oldElement instanceof HTMLOptionElement && newElement instanceof HTMLOptionElement) {
          syncBooleanAttribute(oldElement, newElement, "selected", ctx);
        } else if (oldElement instanceof HTMLTextAreaElement && newElement instanceof HTMLTextAreaElement) {
          let newValue = newElement.value;
          let oldValue = oldElement.value;
          if (ignoreAttribute("value", oldElement, "update", ctx)) {
            return;
          }
          if (newValue !== oldValue) {
            oldElement.value = newValue;
          }
          if (oldElement.firstChild && oldElement.firstChild.nodeValue !== newValue) {
            oldElement.firstChild.nodeValue = newValue;
          }
        }
      }
      function syncBooleanAttribute(oldElement, newElement, attributeName, ctx) {
        const newLiveValue = newElement[attributeName], oldLiveValue = oldElement[attributeName];
        if (newLiveValue !== oldLiveValue) {
          const ignoreUpdate = ignoreAttribute(
            attributeName,
            oldElement,
            "update",
            ctx
          );
          if (!ignoreUpdate) {
            oldElement[attributeName] = newElement[attributeName];
          }
          if (newLiveValue) {
            if (!ignoreUpdate) {
              oldElement.setAttribute(attributeName, "");
            }
          } else {
            if (!ignoreAttribute(attributeName, oldElement, "remove", ctx)) {
              oldElement.removeAttribute(attributeName);
            }
          }
        }
      }
      function ignoreAttribute(attr, element, updateType, ctx) {
        if (attr === "value" && ctx.ignoreActiveValue && element === document.activeElement) {
          return true;
        }
        return ctx.callbacks.beforeAttributeUpdated(attr, element, updateType) === false;
      }
      function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
        return !!ctx.ignoreActiveValue && possibleActiveElement === document.activeElement && possibleActiveElement !== document.body;
      }
      return morphNode2;
    })();
    function withHeadBlocking(ctx, oldNode, newNode, callback) {
      if (ctx.head.block) {
        const oldHead = oldNode.querySelector("head");
        const newHead = newNode.querySelector("head");
        if (oldHead && newHead) {
          const promises = handleHeadElement(oldHead, newHead, ctx);
          return Promise.all(promises).then(() => {
            const newCtx = Object.assign(ctx, {
              head: {
                block: false,
                ignore: true
              }
            });
            return callback(newCtx);
          });
        }
      }
      return callback(ctx);
    }
    function handleHeadElement(oldHead, newHead, ctx) {
      let added = [];
      let removed = [];
      let preserved = [];
      let nodesToAppend = [];
      let srcToNewHeadNodes = /* @__PURE__ */ new Map();
      for (const newHeadChild of newHead.children) {
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }
      for (const currentHeadElt of oldHead.children) {
        let inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        let isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        let isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            removed.push(currentHeadElt);
          } else {
            srcToNewHeadNodes.delete(currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (ctx.head.style === "append") {
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }
      nodesToAppend.push(...srcToNewHeadNodes.values());
      let promises = [];
      for (const newNode of nodesToAppend) {
        let newElt = (
          /** @type {ChildNode} */
          document.createRange().createContextualFragment(newNode.outerHTML).firstChild
        );
        if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
          if ("href" in newElt && newElt.href || "src" in newElt && newElt.src) {
            let resolve;
            let promise = new Promise(function(_resolve) {
              resolve = _resolve;
            });
            newElt.addEventListener("load", function() {
              resolve();
            });
            promises.push(promise);
          }
          oldHead.appendChild(newElt);
          ctx.callbacks.afterNodeAdded(newElt);
          added.push(newElt);
        }
      }
      for (const removedElement of removed) {
        if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
          oldHead.removeChild(removedElement);
          ctx.callbacks.afterNodeRemoved(removedElement);
        }
      }
      ctx.head.afterHeadMorphed(oldHead, {
        added,
        kept: preserved,
        removed
      });
      return promises;
    }
    const createMorphContext = /* @__PURE__ */ (function() {
      function createMorphContext2(oldNode, newContent, config2) {
        const { persistentIds, idMap } = createIdMaps(oldNode, newContent);
        const mergedConfig = mergeDefaults(config2);
        const morphStyle = mergedConfig.morphStyle || "outerHTML";
        if (!["innerHTML", "outerHTML"].includes(morphStyle)) {
          throw `Do not understand how to morph style ${morphStyle}`;
        }
        return {
          target: oldNode,
          newContent,
          config: mergedConfig,
          morphStyle,
          ignoreActive: mergedConfig.ignoreActive,
          ignoreActiveValue: mergedConfig.ignoreActiveValue,
          restoreFocus: mergedConfig.restoreFocus,
          idMap,
          persistentIds,
          pantry: createPantry(),
          callbacks: mergedConfig.callbacks,
          head: mergedConfig.head
        };
      }
      function mergeDefaults(config2) {
        let finalConfig = Object.assign({}, defaults);
        Object.assign(finalConfig, config2);
        finalConfig.callbacks = Object.assign(
          {},
          defaults.callbacks,
          config2.callbacks
        );
        finalConfig.head = Object.assign({}, defaults.head, config2.head);
        return finalConfig;
      }
      function createPantry() {
        const pantry = document.createElement("div");
        pantry.hidden = true;
        document.body.insertAdjacentElement("afterend", pantry);
        return pantry;
      }
      function findIdElements(root) {
        let elements = Array.from(root.querySelectorAll("[id]"));
        if (root.id) {
          elements.push(root);
        }
        return elements;
      }
      function populateIdMapWithTree(idMap, persistentIds, root, elements) {
        for (const elt of elements) {
          if (persistentIds.has(elt.id)) {
            let current = elt;
            while (current) {
              let idSet = idMap.get(current);
              if (idSet == null) {
                idSet = /* @__PURE__ */ new Set();
                idMap.set(current, idSet);
              }
              idSet.add(elt.id);
              if (current === root) break;
              current = current.parentElement;
            }
          }
        }
      }
      function createIdMaps(oldContent, newContent) {
        const oldIdElements = findIdElements(oldContent);
        const newIdElements = findIdElements(newContent);
        const persistentIds = createPersistentIds(oldIdElements, newIdElements);
        let idMap = /* @__PURE__ */ new Map();
        populateIdMapWithTree(idMap, persistentIds, oldContent, oldIdElements);
        const newRoot = newContent.__idiomorphRoot || newContent;
        populateIdMapWithTree(idMap, persistentIds, newRoot, newIdElements);
        return { persistentIds, idMap };
      }
      function createPersistentIds(oldIdElements, newIdElements) {
        let duplicateIds = /* @__PURE__ */ new Set();
        let oldIdTagNameMap = /* @__PURE__ */ new Map();
        for (const { id, tagName } of oldIdElements) {
          if (oldIdTagNameMap.has(id)) {
            duplicateIds.add(id);
          } else {
            oldIdTagNameMap.set(id, tagName);
          }
        }
        let persistentIds = /* @__PURE__ */ new Set();
        for (const { id, tagName } of newIdElements) {
          if (persistentIds.has(id)) {
            duplicateIds.add(id);
          } else if (oldIdTagNameMap.get(id) === tagName) {
            persistentIds.add(id);
          }
        }
        for (const id of duplicateIds) {
          persistentIds.delete(id);
        }
        return persistentIds;
      }
      return createMorphContext2;
    })();
    const { normalizeElement, normalizeParent } = /* @__PURE__ */ (function() {
      const generatedByIdiomorph = /* @__PURE__ */ new WeakSet();
      function normalizeElement2(content) {
        if (content instanceof Document) {
          return content.documentElement;
        } else {
          return content;
        }
      }
      function normalizeParent2(newContent) {
        if (newContent == null) {
          return document.createElement("div");
        } else if (typeof newContent === "string") {
          return normalizeParent2(parseContent(newContent));
        } else if (generatedByIdiomorph.has(
          /** @type {Element} */
          newContent
        )) {
          return (
            /** @type {Element} */
            newContent
          );
        } else if (newContent instanceof Node) {
          if (newContent.parentNode) {
            return createDuckTypedParent(newContent);
          } else {
            const dummyParent = document.createElement("div");
            dummyParent.append(newContent);
            return dummyParent;
          }
        } else {
          const dummyParent = document.createElement("div");
          for (const elt of [...newContent]) {
            dummyParent.append(elt);
          }
          return dummyParent;
        }
      }
      function createDuckTypedParent(newContent) {
        return (
          /** @type {Element} */
          /** @type {unknown} */
          {
            childNodes: [newContent],
            /** @ts-ignore - cover your eyes for a minute, tsc */
            querySelectorAll: (s) => {
              const elements = newContent.querySelectorAll(s);
              return newContent.matches(s) ? [newContent, ...elements] : elements;
            },
            /** @ts-ignore */
            insertBefore: (n, r) => newContent.parentNode.insertBefore(n, r),
            /** @ts-ignore */
            moveBefore: (n, r) => newContent.parentNode.moveBefore(n, r),
            // for later use with populateIdMapWithTree to halt upwards iteration
            get __idiomorphRoot() {
              return newContent;
            }
          }
        );
      }
      function parseContent(newContent) {
        let parser = new DOMParser();
        let contentWithSvgsRemoved = newContent.replace(
          /<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,
          ""
        );
        if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
          let content = parser.parseFromString(newContent, "text/html");
          if (contentWithSvgsRemoved.match(/<\/html>/)) {
            generatedByIdiomorph.add(content);
            return content;
          } else {
            let htmlElement = content.firstChild;
            if (htmlElement) {
              generatedByIdiomorph.add(htmlElement);
            }
            return htmlElement;
          }
        } else {
          let responseDoc = parser.parseFromString(
            "<body><template>" + newContent + "</template></body>",
            "text/html"
          );
          let content = (
            /** @type {HTMLTemplateElement} */
            responseDoc.body.querySelector("template").content
          );
          generatedByIdiomorph.add(content);
          return content;
        }
      }
      return { normalizeElement: normalizeElement2, normalizeParent: normalizeParent2 };
    })();
    return {
      morph,
      defaults
    };
  })();
  function morphElements(currentElement, newElement, { callbacks, ...options } = {}) {
    Idiomorph.morph(currentElement, newElement, {
      ...options,
      callbacks: new DefaultIdiomorphCallbacks(callbacks)
    });
  }
  function morphChildren(currentElement, newElement, options = {}) {
    morphElements(currentElement, newElement.childNodes, {
      ...options,
      morphStyle: "innerHTML"
    });
  }
  function shouldRefreshFrameWithMorphing(currentFrame, newFrame) {
    return currentFrame instanceof FrameElement && // newFrame cannot yet be an instance of FrameElement because custom
    // elements don't get initialized until they're attached to the DOM, so
    // test its Element#nodeName instead
    newFrame instanceof Element && newFrame.nodeName === "TURBO-FRAME" && currentFrame.shouldReloadWithMorph && currentFrame.id === newFrame.id && (!newFrame.getAttribute("src") || urlsAreEqual(currentFrame.src, newFrame.getAttribute("src"))) && !currentFrame.closest("[data-turbo-permanent]");
  }
  function closestFrameReloadableWithMorphing(node) {
    return node.parentElement.closest("turbo-frame[src][refresh=morph]");
  }
  var DefaultIdiomorphCallbacks = class {
    #beforeNodeMorphed;
    constructor({ beforeNodeMorphed } = {}) {
      this.#beforeNodeMorphed = beforeNodeMorphed || (() => true);
    }
    beforeNodeAdded = (node) => {
      return !(node.id && node.hasAttribute("data-turbo-permanent") && document.getElementById(node.id));
    };
    beforeNodeMorphed = (currentElement, newElement) => {
      if (currentElement instanceof Element) {
        if (!currentElement.hasAttribute("data-turbo-permanent") && this.#beforeNodeMorphed(currentElement, newElement)) {
          const event = dispatch("turbo:before-morph-element", {
            cancelable: true,
            target: currentElement,
            detail: { currentElement, newElement }
          });
          return !event.defaultPrevented;
        } else {
          return false;
        }
      }
    };
    beforeAttributeUpdated = (attributeName, target, mutationType) => {
      const event = dispatch("turbo:before-morph-attribute", {
        cancelable: true,
        target,
        detail: { attributeName, mutationType }
      });
      return !event.defaultPrevented;
    };
    beforeNodeRemoved = (node) => {
      return this.beforeNodeMorphed(node);
    };
    afterNodeMorphed = (currentElement, newElement) => {
      if (currentElement instanceof Element) {
        dispatch("turbo:morph-element", {
          target: currentElement,
          detail: { currentElement, newElement }
        });
      }
    };
  };
  var MorphingFrameRenderer = class extends FrameRenderer {
    static renderElement(currentElement, newElement) {
      dispatch("turbo:before-frame-morph", {
        target: currentElement,
        detail: { currentElement, newElement }
      });
      morphChildren(currentElement, newElement, {
        callbacks: {
          beforeNodeMorphed: (node, newNode) => {
            if (shouldRefreshFrameWithMorphing(node, newNode) && closestFrameReloadableWithMorphing(node) === currentElement) {
              node.reload();
              return false;
            }
            return true;
          }
        }
      });
    }
    async preservingPermanentElements(callback) {
      return await callback();
    }
  };
  var ProgressBar = class _ProgressBar {
    static animationDuration = 300;
    /*ms*/
    static get defaultCSS() {
      return unindent`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 2147483647;
        transition:
          width ${_ProgressBar.animationDuration}ms ease-out,
          opacity ${_ProgressBar.animationDuration / 2}ms ${_ProgressBar.animationDuration / 2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `;
    }
    hiding = false;
    value = 0;
    visible = false;
    constructor() {
      this.stylesheetElement = this.createStylesheetElement();
      this.progressElement = this.createProgressElement();
      this.installStylesheetElement();
      this.setValue(0);
    }
    show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
    hide() {
      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(() => {
          this.uninstallProgressElement();
          this.stopTrickling();
          this.visible = false;
          this.hiding = false;
        });
      }
    }
    setValue(value) {
      this.value = value;
      this.refresh();
    }
    // Private
    installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
    installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
    fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, _ProgressBar.animationDuration * 1.5);
    }
    uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
    startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, _ProgressBar.animationDuration);
      }
    }
    stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
    trickle = () => {
      this.setValue(this.value + Math.random() / 100);
    };
    refresh() {
      requestAnimationFrame(() => {
        this.progressElement.style.width = `${10 + this.value * 90}%`;
      });
    }
    createStylesheetElement() {
      const element = document.createElement("style");
      element.type = "text/css";
      element.textContent = _ProgressBar.defaultCSS;
      const cspNonce = getCspNonce();
      if (cspNonce) {
        element.nonce = cspNonce;
      }
      return element;
    }
    createProgressElement() {
      const element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
  };
  var HeadSnapshot = class extends Snapshot {
    detailsByOuterHTML = this.children.filter((element) => !elementIsNoscript(element)).map((element) => elementWithoutNonce(element)).reduce((result, element) => {
      const { outerHTML } = element;
      const details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return {
        ...result,
        [outerHTML]: {
          ...details,
          elements: [...details.elements, element]
        }
      };
    }, {});
    get trackedElementSignature() {
      return Object.keys(this.detailsByOuterHTML).filter((outerHTML) => this.detailsByOuterHTML[outerHTML].tracked).join("");
    }
    getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
    getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
    getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      return Object.keys(this.detailsByOuterHTML).filter((outerHTML) => !(outerHTML in snapshot.detailsByOuterHTML)).map((outerHTML) => this.detailsByOuterHTML[outerHTML]).filter(({ type }) => type == matchedType).map(({ elements: [element] }) => element);
    }
    get provisionalElements() {
      return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
        const { type, tracked, elements } = this.detailsByOuterHTML[outerHTML];
        if (type == null && !tracked) {
          return [...result, ...elements];
        } else if (elements.length > 1) {
          return [...result, ...elements.slice(1)];
        } else {
          return result;
        }
      }, []);
    }
    getMetaValue(name) {
      const element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
    findMetaElementByName(name) {
      return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
        const {
          elements: [element]
        } = this.detailsByOuterHTML[outerHTML];
        return elementIsMetaElementWithName(element, name) ? element : result;
      }, void 0 | void 0);
    }
  };
  function elementType(element) {
    if (elementIsScript(element)) {
      return "script";
    } else if (elementIsStylesheet(element)) {
      return "stylesheet";
    }
  }
  function elementIsTracked(element) {
    return element.getAttribute("data-turbo-track") == "reload";
  }
  function elementIsScript(element) {
    const tagName = element.localName;
    return tagName == "script";
  }
  function elementIsNoscript(element) {
    const tagName = element.localName;
    return tagName == "noscript";
  }
  function elementIsStylesheet(element) {
    const tagName = element.localName;
    return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
  }
  function elementIsMetaElementWithName(element, name) {
    const tagName = element.localName;
    return tagName == "meta" && element.getAttribute("name") == name;
  }
  function elementWithoutNonce(element) {
    if (element.hasAttribute("nonce")) {
      element.setAttribute("nonce", "");
    }
    return element;
  }
  var PageSnapshot = class _PageSnapshot extends Snapshot {
    static fromHTMLString(html = "") {
      return this.fromDocument(parseHTMLDocument(html));
    }
    static fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
    static fromDocument({ documentElement, body, head }) {
      return new this(documentElement, body, new HeadSnapshot(head));
    }
    constructor(documentElement, body, headSnapshot) {
      super(body);
      this.documentElement = documentElement;
      this.headSnapshot = headSnapshot;
    }
    clone() {
      const clonedElement = this.element.cloneNode(true);
      const selectElements = this.element.querySelectorAll("select");
      const clonedSelectElements = clonedElement.querySelectorAll("select");
      for (const [index, source] of selectElements.entries()) {
        const clone = clonedSelectElements[index];
        for (const option of clone.selectedOptions) option.selected = false;
        for (const option of source.selectedOptions) clone.options[option.index].selected = true;
      }
      for (const clonedPasswordInput of clonedElement.querySelectorAll('input[type="password"]')) {
        clonedPasswordInput.value = "";
      }
      return new _PageSnapshot(this.documentElement, clonedElement, this.headSnapshot);
    }
    get lang() {
      return this.documentElement.getAttribute("lang");
    }
    get headElement() {
      return this.headSnapshot.element;
    }
    get rootLocation() {
      const root = this.getSetting("root") ?? "/";
      return expandURL(root);
    }
    get cacheControlValue() {
      return this.getSetting("cache-control");
    }
    get isPreviewable() {
      return this.cacheControlValue != "no-preview";
    }
    get isCacheable() {
      return this.cacheControlValue != "no-cache";
    }
    get isVisitable() {
      return this.getSetting("visit-control") != "reload";
    }
    get prefersViewTransitions() {
      const viewTransitionEnabled = this.getSetting("view-transition") === "true" || this.headSnapshot.getMetaValue("view-transition") === "same-origin";
      return viewTransitionEnabled && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    get shouldMorphPage() {
      return this.getSetting("refresh-method") === "morph";
    }
    get shouldPreserveScrollPosition() {
      return this.getSetting("refresh-scroll") === "preserve";
    }
    // Private
    getSetting(name) {
      return this.headSnapshot.getMetaValue(`turbo-${name}`);
    }
  };
  var ViewTransitioner = class {
    #viewTransitionStarted = false;
    #lastOperation = Promise.resolve();
    renderChange(useViewTransition, render) {
      if (useViewTransition && this.viewTransitionsAvailable && !this.#viewTransitionStarted) {
        this.#viewTransitionStarted = true;
        this.#lastOperation = this.#lastOperation.then(async () => {
          await document.startViewTransition(render).finished;
        });
      } else {
        this.#lastOperation = this.#lastOperation.then(render);
      }
      return this.#lastOperation;
    }
    get viewTransitionsAvailable() {
      return document.startViewTransition;
    }
  };
  var defaultOptions = {
    action: "advance",
    historyChanged: false,
    visitCachedSnapshot: () => {
    },
    willRender: true,
    updateHistory: true,
    shouldCacheSnapshot: true,
    acceptsStreamResponse: false
  };
  var TimingMetric = {
    visitStart: "visitStart",
    requestStart: "requestStart",
    requestEnd: "requestEnd",
    visitEnd: "visitEnd"
  };
  var VisitState = {
    initialized: "initialized",
    started: "started",
    canceled: "canceled",
    failed: "failed",
    completed: "completed"
  };
  var SystemStatusCode = {
    networkFailure: 0,
    timeoutFailure: -1,
    contentTypeMismatch: -2
  };
  var Direction = {
    advance: "forward",
    restore: "back",
    replace: "none"
  };
  var Visit = class {
    identifier = uuid();
    // Required by turbo-ios
    timingMetrics = {};
    followedRedirect = false;
    historyChanged = false;
    scrolled = false;
    shouldCacheSnapshot = true;
    acceptsStreamResponse = false;
    snapshotCached = false;
    state = VisitState.initialized;
    viewTransitioner = new ViewTransitioner();
    constructor(delegate, location2, restorationIdentifier, options = {}) {
      this.delegate = delegate;
      this.location = location2;
      this.restorationIdentifier = restorationIdentifier || uuid();
      const {
        action,
        historyChanged,
        referrer,
        snapshot,
        snapshotHTML,
        response,
        visitCachedSnapshot,
        willRender,
        updateHistory,
        shouldCacheSnapshot,
        acceptsStreamResponse,
        direction
      } = {
        ...defaultOptions,
        ...options
      };
      this.action = action;
      this.historyChanged = historyChanged;
      this.referrer = referrer;
      this.snapshot = snapshot;
      this.snapshotHTML = snapshotHTML;
      this.response = response;
      this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
      this.isPageRefresh = this.view.isPageRefresh(this);
      this.visitCachedSnapshot = visitCachedSnapshot;
      this.willRender = willRender;
      this.updateHistory = updateHistory;
      this.scrolled = !willRender;
      this.shouldCacheSnapshot = shouldCacheSnapshot;
      this.acceptsStreamResponse = acceptsStreamResponse;
      this.direction = direction || Direction[action];
    }
    get adapter() {
      return this.delegate.adapter;
    }
    get view() {
      return this.delegate.view;
    }
    get history() {
      return this.delegate.history;
    }
    get restorationData() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
    get silent() {
      return this.isSamePage;
    }
    start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
    cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }
        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
    complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.adapter.visitCompleted(this);
        this.state = VisitState.completed;
        this.followRedirect();
        if (!this.followedRedirect) {
          this.delegate.visitCompleted(this);
        }
      }
    }
    fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
        this.delegate.visitCompleted(this);
      }
    }
    changeHistory() {
      if (!this.historyChanged && this.updateHistory) {
        const actionForHistory = this.location.href === this.referrer?.href ? "replace" : this.action;
        const method = getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
    issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
    simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
    startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
    recordResponse(response = this.response) {
      this.response = response;
      if (response) {
        const { statusCode } = response;
        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
    finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
    loadResponse() {
      if (this.response) {
        const { statusCode, responseHTML } = this.response;
        this.render(async () => {
          if (this.shouldCacheSnapshot) this.cacheSnapshot();
          if (this.view.renderPromise) await this.view.renderPromise;
          if (isSuccessful(statusCode) && responseHTML != null) {
            const snapshot = PageSnapshot.fromHTMLString(responseHTML);
            await this.renderPageSnapshot(snapshot, false);
            this.adapter.visitRendered(this);
            this.complete();
          } else {
            await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML), this);
            this.adapter.visitRendered(this);
            this.fail();
          }
        });
      }
    }
    getCachedSnapshot() {
      const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
    getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
    hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
    loadCachedSnapshot() {
      const snapshot = this.getCachedSnapshot();
      if (snapshot) {
        const isPreview = this.shouldIssueRequest();
        this.render(async () => {
          this.cacheSnapshot();
          if (this.isSamePage || this.isPageRefresh) {
            this.adapter.visitRendered(this);
          } else {
            if (this.view.renderPromise) await this.view.renderPromise;
            await this.renderPageSnapshot(snapshot, isPreview);
            this.adapter.visitRendered(this);
            if (!isPreview) {
              this.complete();
            }
          }
        });
      }
    }
    followRedirect() {
      if (this.redirectedToLocation && !this.followedRedirect && this.response?.redirected) {
        this.adapter.visitProposedToLocation(this.redirectedToLocation, {
          action: "replace",
          response: this.response,
          shouldCacheSnapshot: false,
          willRender: false
        });
        this.followedRedirect = true;
      }
    }
    goToSamePageAnchor() {
      if (this.isSamePage) {
        this.render(async () => {
          this.cacheSnapshot();
          this.performScroll();
          this.changeHistory();
          this.adapter.visitRendered(this);
        });
      }
    }
    // Fetch request delegate
    prepareRequest(request) {
      if (this.acceptsStreamResponse) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted() {
      this.startRequest();
    }
    requestPreventedHandlingResponse(_request, _response) {
    }
    async requestSucceededWithResponse(request, response) {
      const responseHTML = await response.responseHTML;
      const { redirected, statusCode } = response;
      if (responseHTML == void 0) {
        this.recordResponse({
          statusCode: SystemStatusCode.contentTypeMismatch,
          redirected
        });
      } else {
        this.redirectedToLocation = response.redirected ? response.location : void 0;
        this.recordResponse({ statusCode, responseHTML, redirected });
      }
    }
    async requestFailedWithResponse(request, response) {
      const responseHTML = await response.responseHTML;
      const { redirected, statusCode } = response;
      if (responseHTML == void 0) {
        this.recordResponse({
          statusCode: SystemStatusCode.contentTypeMismatch,
          redirected
        });
      } else {
        this.recordResponse({ statusCode, responseHTML, redirected });
      }
    }
    requestErrored(_request, _error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure,
        redirected: false
      });
    }
    requestFinished() {
      this.finishRequest();
    }
    // Scrolling
    performScroll() {
      if (!this.scrolled && !this.view.forceReloaded && !this.view.shouldPreserveScrollPosition(this)) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
        } else {
          this.scrollToAnchor() || this.view.scrollToTop();
        }
        if (this.isSamePage) {
          this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
        }
        this.scrolled = true;
      }
    }
    scrollToRestoredPosition() {
      const { scrollPosition } = this.restorationData;
      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
    scrollToAnchor() {
      const anchor = getAnchor(this.location);
      if (anchor != null) {
        this.view.scrollToAnchor(anchor);
        return true;
      }
    }
    // Instrumentation
    recordTimingMetric(metric) {
      this.timingMetrics[metric] = (/* @__PURE__ */ new Date()).getTime();
    }
    getTimingMetrics() {
      return { ...this.timingMetrics };
    }
    // Private
    hasPreloadedResponse() {
      return typeof this.response == "object";
    }
    shouldIssueRequest() {
      if (this.isSamePage) {
        return false;
      } else if (this.action == "restore") {
        return !this.hasCachedSnapshot();
      } else {
        return this.willRender;
      }
    }
    cacheSnapshot() {
      if (!this.snapshotCached) {
        this.view.cacheSnapshot(this.snapshot).then((snapshot) => snapshot && this.visitCachedSnapshot(snapshot));
        this.snapshotCached = true;
      }
    }
    async render(callback) {
      this.cancelRender();
      await new Promise((resolve) => {
        this.frame = document.visibilityState === "hidden" ? setTimeout(() => resolve(), 0) : requestAnimationFrame(() => resolve());
      });
      await callback();
      delete this.frame;
    }
    async renderPageSnapshot(snapshot, isPreview) {
      await this.viewTransitioner.renderChange(this.view.shouldTransitionTo(snapshot), async () => {
        await this.view.renderPage(snapshot, isPreview, this.willRender, this);
        this.performScroll();
      });
    }
    cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  };
  function isSuccessful(statusCode) {
    return statusCode >= 200 && statusCode < 300;
  }
  var BrowserAdapter = class {
    progressBar = new ProgressBar();
    constructor(session2) {
      this.session = session2;
    }
    visitProposedToLocation(location2, options) {
      if (locationIsVisitable(location2, this.navigator.rootLocation)) {
        this.navigator.startVisit(location2, options?.restorationIdentifier || uuid(), options);
      } else {
        window.location.href = location2.toString();
      }
    }
    visitStarted(visit2) {
      this.location = visit2.location;
      this.redirectedToLocation = null;
      visit2.loadCachedSnapshot();
      visit2.issueRequest();
      visit2.goToSamePageAnchor();
    }
    visitRequestStarted(visit2) {
      this.progressBar.setValue(0);
      if (visit2.hasCachedSnapshot() || visit2.action != "restore") {
        this.showVisitProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
    visitRequestCompleted(visit2) {
      visit2.loadResponse();
      if (visit2.response.redirected) {
        this.redirectedToLocation = visit2.redirectedToLocation;
      }
    }
    visitRequestFailedWithStatusCode(visit2, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload({
            reason: "request_failed",
            context: {
              statusCode
            }
          });
        default:
          return visit2.loadResponse();
      }
    }
    visitRequestFinished(_visit) {
    }
    visitCompleted(_visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
    pageInvalidated(reason) {
      this.reload(reason);
    }
    visitFailed(_visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
    visitRendered(_visit) {
    }
    // Link prefetching
    linkPrefetchingIsEnabledForLocation(location2) {
      return true;
    }
    // Form Submission Delegate
    formSubmissionStarted(_formSubmission) {
      this.progressBar.setValue(0);
      this.showFormProgressBarAfterDelay();
    }
    formSubmissionFinished(_formSubmission) {
      this.progressBar.setValue(1);
      this.hideFormProgressBar();
    }
    // Private
    showVisitProgressBarAfterDelay() {
      this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideVisitProgressBar() {
      this.progressBar.hide();
      if (this.visitProgressBarTimeout != null) {
        window.clearTimeout(this.visitProgressBarTimeout);
        delete this.visitProgressBarTimeout;
      }
    }
    showFormProgressBarAfterDelay() {
      if (this.formProgressBarTimeout == null) {
        this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
      }
    }
    hideFormProgressBar() {
      this.progressBar.hide();
      if (this.formProgressBarTimeout != null) {
        window.clearTimeout(this.formProgressBarTimeout);
        delete this.formProgressBarTimeout;
      }
    }
    showProgressBar = () => {
      this.progressBar.show();
    };
    reload(reason) {
      dispatch("turbo:reload", { detail: reason });
      window.location.href = (this.redirectedToLocation || this.location)?.toString() || window.location.href;
    }
    get navigator() {
      return this.session.navigator;
    }
  };
  var CacheObserver = class {
    selector = "[data-turbo-temporary]";
    deprecatedSelector = "[data-turbo-cache=false]";
    started = false;
    start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
    removeTemporaryElements = (_event) => {
      for (const element of this.temporaryElements) {
        element.remove();
      }
    };
    get temporaryElements() {
      return [...document.querySelectorAll(this.selector), ...this.temporaryElementsWithDeprecation];
    }
    get temporaryElementsWithDeprecation() {
      const elements = document.querySelectorAll(this.deprecatedSelector);
      if (elements.length) {
        console.warn(
          `The ${this.deprecatedSelector} selector is deprecated and will be removed in a future version. Use ${this.selector} instead.`
        );
      }
      return [...elements];
    }
  };
  var FrameRedirector = class {
    constructor(session2, element) {
      this.session = session2;
      this.element = element;
      this.linkInterceptor = new LinkInterceptor(this, element);
      this.formSubmitObserver = new FormSubmitObserver(this, element);
    }
    start() {
      this.linkInterceptor.start();
      this.formSubmitObserver.start();
    }
    stop() {
      this.linkInterceptor.stop();
      this.formSubmitObserver.stop();
    }
    // Link interceptor delegate
    shouldInterceptLinkClick(element, _location, _event) {
      return this.#shouldRedirect(element);
    }
    linkClickIntercepted(element, url, event) {
      const frame = this.#findFrameElement(element);
      if (frame) {
        frame.delegate.linkClickIntercepted(element, url, event);
      }
    }
    // Form submit observer delegate
    willSubmitForm(element, submitter2) {
      return element.closest("turbo-frame") == null && this.#shouldSubmit(element, submitter2) && this.#shouldRedirect(element, submitter2);
    }
    formSubmitted(element, submitter2) {
      const frame = this.#findFrameElement(element, submitter2);
      if (frame) {
        frame.delegate.formSubmitted(element, submitter2);
      }
    }
    #shouldSubmit(form, submitter2) {
      const action = getAction$1(form, submitter2);
      const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
      const rootLocation = expandURL(meta?.content ?? "/");
      return this.#shouldRedirect(form, submitter2) && locationIsVisitable(action, rootLocation);
    }
    #shouldRedirect(element, submitter2) {
      const isNavigatable = element instanceof HTMLFormElement ? this.session.submissionIsNavigatable(element, submitter2) : this.session.elementIsNavigatable(element);
      if (isNavigatable) {
        const frame = this.#findFrameElement(element, submitter2);
        return frame ? frame != element.closest("turbo-frame") : false;
      } else {
        return false;
      }
    }
    #findFrameElement(element, submitter2) {
      const id = submitter2?.getAttribute("data-turbo-frame") || element.getAttribute("data-turbo-frame");
      if (id && id != "_top") {
        const frame = this.element.querySelector(`#${id}:not([disabled])`);
        if (frame instanceof FrameElement) {
          return frame;
        }
      }
    }
  };
  var History = class {
    location;
    restorationIdentifier = uuid();
    restorationData = {};
    started = false;
    pageLoaded = false;
    currentIndex = 0;
    constructor(delegate) {
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.currentIndex = history.state?.turbo?.restorationIndex || 0;
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
    stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
    push(location2, restorationIdentifier) {
      this.update(history.pushState, location2, restorationIdentifier);
    }
    replace(location2, restorationIdentifier) {
      this.update(history.replaceState, location2, restorationIdentifier);
    }
    update(method, location2, restorationIdentifier = uuid()) {
      if (method === history.pushState) ++this.currentIndex;
      const state = { turbo: { restorationIdentifier, restorationIndex: this.currentIndex } };
      method.call(history, state, "", location2.href);
      this.location = location2;
      this.restorationIdentifier = restorationIdentifier;
    }
    // Restoration data
    getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
    updateRestorationData(additionalData) {
      const { restorationIdentifier } = this;
      const restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = {
        ...restorationData,
        ...additionalData
      };
    }
    // Scroll restoration
    assumeControlOfScrollRestoration() {
      if (!this.previousScrollRestoration) {
        this.previousScrollRestoration = history.scrollRestoration ?? "auto";
        history.scrollRestoration = "manual";
      }
    }
    relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
    // Event handlers
    onPopState = (event) => {
      if (this.shouldHandlePopState()) {
        const { turbo } = event.state || {};
        if (turbo) {
          this.location = new URL(window.location.href);
          const { restorationIdentifier, restorationIndex } = turbo;
          this.restorationIdentifier = restorationIdentifier;
          const direction = restorationIndex > this.currentIndex ? "forward" : "back";
          this.delegate.historyPoppedToLocationWithRestorationIdentifierAndDirection(this.location, restorationIdentifier, direction);
          this.currentIndex = restorationIndex;
        }
      }
    };
    onPageLoad = async (_event) => {
      await nextMicrotask();
      this.pageLoaded = true;
    };
    // Private
    shouldHandlePopState() {
      return this.pageIsLoaded();
    }
    pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  };
  var LinkPrefetchObserver = class {
    started = false;
    #prefetchedLink = null;
    constructor(delegate, eventTarget) {
      this.delegate = delegate;
      this.eventTarget = eventTarget;
    }
    start() {
      if (this.started) return;
      if (this.eventTarget.readyState === "loading") {
        this.eventTarget.addEventListener("DOMContentLoaded", this.#enable, { once: true });
      } else {
        this.#enable();
      }
    }
    stop() {
      if (!this.started) return;
      this.eventTarget.removeEventListener("mouseenter", this.#tryToPrefetchRequest, {
        capture: true,
        passive: true
      });
      this.eventTarget.removeEventListener("mouseleave", this.#cancelRequestIfObsolete, {
        capture: true,
        passive: true
      });
      this.eventTarget.removeEventListener("turbo:before-fetch-request", this.#tryToUsePrefetchedRequest, true);
      this.started = false;
    }
    #enable = () => {
      this.eventTarget.addEventListener("mouseenter", this.#tryToPrefetchRequest, {
        capture: true,
        passive: true
      });
      this.eventTarget.addEventListener("mouseleave", this.#cancelRequestIfObsolete, {
        capture: true,
        passive: true
      });
      this.eventTarget.addEventListener("turbo:before-fetch-request", this.#tryToUsePrefetchedRequest, true);
      this.started = true;
    };
    #tryToPrefetchRequest = (event) => {
      if (getMetaContent("turbo-prefetch") === "false") return;
      const target = event.target;
      const isLink = target.matches && target.matches("a[href]:not([target^=_]):not([download])");
      if (isLink && this.#isPrefetchable(target)) {
        const link = target;
        const location2 = getLocationForLink(link);
        if (this.delegate.canPrefetchRequestToLocation(link, location2)) {
          this.#prefetchedLink = link;
          const fetchRequest = new FetchRequest(
            this,
            FetchMethod.get,
            location2,
            new URLSearchParams(),
            target
          );
          fetchRequest.fetchOptions.priority = "low";
          prefetchCache.setLater(location2.toString(), fetchRequest, this.#cacheTtl);
        }
      }
    };
    #cancelRequestIfObsolete = (event) => {
      if (event.target === this.#prefetchedLink) this.#cancelPrefetchRequest();
    };
    #cancelPrefetchRequest = () => {
      prefetchCache.clear();
      this.#prefetchedLink = null;
    };
    #tryToUsePrefetchedRequest = (event) => {
      if (event.target.tagName !== "FORM" && event.detail.fetchOptions.method === "GET") {
        const cached = prefetchCache.get(event.detail.url.toString());
        if (cached) {
          event.detail.fetchRequest = cached;
        }
        prefetchCache.clear();
      }
    };
    prepareRequest(request) {
      const link = request.target;
      request.headers["X-Sec-Purpose"] = "prefetch";
      const turboFrame = link.closest("turbo-frame");
      const turboFrameTarget = link.getAttribute("data-turbo-frame") || turboFrame?.getAttribute("target") || turboFrame?.id;
      if (turboFrameTarget && turboFrameTarget !== "_top") {
        request.headers["Turbo-Frame"] = turboFrameTarget;
      }
    }
    // Fetch request interface
    requestSucceededWithResponse() {
    }
    requestStarted(fetchRequest) {
    }
    requestErrored(fetchRequest) {
    }
    requestFinished(fetchRequest) {
    }
    requestPreventedHandlingResponse(fetchRequest, fetchResponse) {
    }
    requestFailedWithResponse(fetchRequest, fetchResponse) {
    }
    get #cacheTtl() {
      return Number(getMetaContent("turbo-prefetch-cache-time")) || cacheTtl;
    }
    #isPrefetchable(link) {
      const href = link.getAttribute("href");
      if (!href) return false;
      if (unfetchableLink(link)) return false;
      if (linkToTheSamePage(link)) return false;
      if (linkOptsOut(link)) return false;
      if (nonSafeLink(link)) return false;
      if (eventPrevented(link)) return false;
      return true;
    }
  };
  var unfetchableLink = (link) => {
    return link.origin !== document.location.origin || !["http:", "https:"].includes(link.protocol) || link.hasAttribute("target");
  };
  var linkToTheSamePage = (link) => {
    return link.pathname + link.search === document.location.pathname + document.location.search || link.href.startsWith("#");
  };
  var linkOptsOut = (link) => {
    if (link.getAttribute("data-turbo-prefetch") === "false") return true;
    if (link.getAttribute("data-turbo") === "false") return true;
    const turboPrefetchParent = findClosestRecursively(link, "[data-turbo-prefetch]");
    if (turboPrefetchParent && turboPrefetchParent.getAttribute("data-turbo-prefetch") === "false") return true;
    return false;
  };
  var nonSafeLink = (link) => {
    const turboMethod = link.getAttribute("data-turbo-method");
    if (turboMethod && turboMethod.toLowerCase() !== "get") return true;
    if (isUJS(link)) return true;
    if (link.hasAttribute("data-turbo-confirm")) return true;
    if (link.hasAttribute("data-turbo-stream")) return true;
    return false;
  };
  var isUJS = (link) => {
    return link.hasAttribute("data-remote") || link.hasAttribute("data-behavior") || link.hasAttribute("data-confirm") || link.hasAttribute("data-method");
  };
  var eventPrevented = (link) => {
    const event = dispatch("turbo:before-prefetch", { target: link, cancelable: true });
    return event.defaultPrevented;
  };
  var Navigator = class {
    constructor(delegate) {
      this.delegate = delegate;
    }
    proposeVisit(location2, options = {}) {
      if (this.delegate.allowsVisitingLocationWithAction(location2, options.action)) {
        this.delegate.visitProposedToLocation(location2, options);
      }
    }
    startVisit(locatable, restorationIdentifier, options = {}) {
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, {
        referrer: this.location,
        ...options
      });
      this.currentVisit.start();
    }
    submitForm(form, submitter2) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter2, true);
      this.formSubmission.start();
    }
    stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }
      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
    get adapter() {
      return this.delegate.adapter;
    }
    get view() {
      return this.delegate.view;
    }
    get rootLocation() {
      return this.view.snapshot.rootLocation;
    }
    get history() {
      return this.delegate.history;
    }
    // Form submission delegate
    formSubmissionStarted(formSubmission) {
      if (typeof this.adapter.formSubmissionStarted === "function") {
        this.adapter.formSubmissionStarted(formSubmission);
      }
    }
    async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
      if (formSubmission == this.formSubmission) {
        const responseHTML = await fetchResponse.responseHTML;
        if (responseHTML) {
          const shouldCacheSnapshot = formSubmission.isSafe;
          if (!shouldCacheSnapshot) {
            this.view.clearSnapshotCache();
          }
          const { statusCode, redirected } = fetchResponse;
          const action = this.#getActionForFormSubmission(formSubmission, fetchResponse);
          const visitOptions = {
            action,
            shouldCacheSnapshot,
            response: { statusCode, responseHTML, redirected }
          };
          this.proposeVisit(fetchResponse.location, visitOptions);
        }
      }
    }
    async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      const responseHTML = await fetchResponse.responseHTML;
      if (responseHTML) {
        const snapshot = PageSnapshot.fromHTMLString(responseHTML);
        if (fetchResponse.serverError) {
          await this.view.renderError(snapshot, this.currentVisit);
        } else {
          await this.view.renderPage(snapshot, false, true, this.currentVisit);
        }
        if (!snapshot.shouldPreserveScrollPosition) {
          this.view.scrollToTop();
        }
        this.view.clearSnapshotCache();
      }
    }
    formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
    formSubmissionFinished(formSubmission) {
      if (typeof this.adapter.formSubmissionFinished === "function") {
        this.adapter.formSubmissionFinished(formSubmission);
      }
    }
    // Link prefetching
    linkPrefetchingIsEnabledForLocation(location2) {
      if (typeof this.adapter.linkPrefetchingIsEnabledForLocation === "function") {
        return this.adapter.linkPrefetchingIsEnabledForLocation(location2);
      }
      return true;
    }
    // Visit delegate
    visitStarted(visit2) {
      this.delegate.visitStarted(visit2);
    }
    visitCompleted(visit2) {
      this.delegate.visitCompleted(visit2);
      delete this.currentVisit;
    }
    locationWithActionIsSamePage(location2, action) {
      const anchor = getAnchor(location2);
      const currentAnchor = getAnchor(this.view.lastRenderedLocation);
      const isRestorationToTop = action === "restore" && typeof anchor === "undefined";
      return action !== "replace" && getRequestURL(location2) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
      this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
    // Visits
    get location() {
      return this.history.location;
    }
    get restorationIdentifier() {
      return this.history.restorationIdentifier;
    }
    #getActionForFormSubmission(formSubmission, fetchResponse) {
      const { submitter: submitter2, formElement } = formSubmission;
      return getVisitAction(submitter2, formElement) || this.#getDefaultAction(fetchResponse);
    }
    #getDefaultAction(fetchResponse) {
      const sameLocationRedirect = fetchResponse.redirected && fetchResponse.location.href === this.location?.href;
      return sameLocationRedirect ? "replace" : "advance";
    }
  };
  var PageStage = {
    initial: 0,
    loading: 1,
    interactive: 2,
    complete: 3
  };
  var PageObserver = class {
    stage = PageStage.initial;
    started = false;
    constructor(delegate) {
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }
        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
    interpretReadyState = () => {
      const { readyState } = this;
      if (readyState == "interactive") {
        this.pageIsInteractive();
      } else if (readyState == "complete") {
        this.pageIsComplete();
      }
    };
    pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
    pageIsComplete() {
      this.pageIsInteractive();
      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
    pageWillUnload = () => {
      this.delegate.pageWillUnload();
    };
    get readyState() {
      return document.readyState;
    }
  };
  var ScrollObserver = class {
    started = false;
    constructor(delegate) {
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
    onScroll = () => {
      this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset });
    };
    // Private
    updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  };
  var StreamMessageRenderer = class {
    render({ fragment }) {
      Bardo.preservingPermanentElements(this, getPermanentElementMapForFragment(fragment), () => {
        withAutofocusFromFragment(fragment, () => {
          withPreservedFocus(() => {
            document.documentElement.appendChild(fragment);
          });
        });
      });
    }
    // Bardo delegate
    enteringBardo(currentPermanentElement, newPermanentElement) {
      newPermanentElement.replaceWith(currentPermanentElement.cloneNode(true));
    }
    leavingBardo() {
    }
  };
  function getPermanentElementMapForFragment(fragment) {
    const permanentElementsInDocument = queryPermanentElementsAll(document.documentElement);
    const permanentElementMap = {};
    for (const permanentElementInDocument of permanentElementsInDocument) {
      const { id } = permanentElementInDocument;
      for (const streamElement of fragment.querySelectorAll("turbo-stream")) {
        const elementInStream = getPermanentElementById(streamElement.templateElement.content, id);
        if (elementInStream) {
          permanentElementMap[id] = [permanentElementInDocument, elementInStream];
        }
      }
    }
    return permanentElementMap;
  }
  async function withAutofocusFromFragment(fragment, callback) {
    const generatedID = `turbo-stream-autofocus-${uuid()}`;
    const turboStreams = fragment.querySelectorAll("turbo-stream");
    const elementWithAutofocus = firstAutofocusableElementInStreams(turboStreams);
    let willAutofocusId = null;
    if (elementWithAutofocus) {
      if (elementWithAutofocus.id) {
        willAutofocusId = elementWithAutofocus.id;
      } else {
        willAutofocusId = generatedID;
      }
      elementWithAutofocus.id = willAutofocusId;
    }
    callback();
    await nextRepaint();
    const hasNoActiveElement = document.activeElement == null || document.activeElement == document.body;
    if (hasNoActiveElement && willAutofocusId) {
      const elementToAutofocus = document.getElementById(willAutofocusId);
      if (elementIsFocusable(elementToAutofocus)) {
        elementToAutofocus.focus();
      }
      if (elementToAutofocus && elementToAutofocus.id == generatedID) {
        elementToAutofocus.removeAttribute("id");
      }
    }
  }
  async function withPreservedFocus(callback) {
    const [activeElementBeforeRender, activeElementAfterRender] = await around(callback, () => document.activeElement);
    const restoreFocusTo = activeElementBeforeRender && activeElementBeforeRender.id;
    if (restoreFocusTo) {
      const elementToFocus = document.getElementById(restoreFocusTo);
      if (elementIsFocusable(elementToFocus) && elementToFocus != activeElementAfterRender) {
        elementToFocus.focus();
      }
    }
  }
  function firstAutofocusableElementInStreams(nodeListOfStreamElements) {
    for (const streamElement of nodeListOfStreamElements) {
      const elementWithAutofocus = queryAutofocusableElement(streamElement.templateElement.content);
      if (elementWithAutofocus) return elementWithAutofocus;
    }
    return null;
  }
  var StreamObserver = class {
    sources = /* @__PURE__ */ new Set();
    #started = false;
    constructor(delegate) {
      this.delegate = delegate;
    }
    start() {
      if (!this.#started) {
        this.#started = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
    stop() {
      if (this.#started) {
        this.#started = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
    connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
    disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources.delete(source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
    streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
    inspectFetchResponse = (event) => {
      const response = fetchResponseFromEvent(event);
      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();
        this.receiveMessageResponse(response);
      }
    };
    receiveMessageEvent = (event) => {
      if (this.#started && typeof event.data == "string") {
        this.receiveMessageHTML(event.data);
      }
    };
    async receiveMessageResponse(response) {
      const html = await response.responseHTML;
      if (html) {
        this.receiveMessageHTML(html);
      }
    }
    receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(StreamMessage.wrap(html));
    }
  };
  function fetchResponseFromEvent(event) {
    const fetchResponse = event.detail?.fetchResponse;
    if (fetchResponse instanceof FetchResponse) {
      return fetchResponse;
    }
  }
  function fetchResponseIsStream(response) {
    const contentType = response.contentType ?? "";
    return contentType.startsWith(StreamMessage.contentType);
  }
  var ErrorRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      const { documentElement, body } = document;
      documentElement.replaceChild(newElement, body);
    }
    async render() {
      this.replaceHeadAndBody();
      this.activateScriptElements();
    }
    replaceHeadAndBody() {
      const { documentElement, head } = document;
      documentElement.replaceChild(this.newHead, head);
      this.renderElement(this.currentElement, this.newElement);
    }
    activateScriptElements() {
      for (const replaceableElement of this.scriptElements) {
        const parentNode = replaceableElement.parentNode;
        if (parentNode) {
          const element = activateScriptElement(replaceableElement);
          parentNode.replaceChild(element, replaceableElement);
        }
      }
    }
    get newHead() {
      return this.newSnapshot.headSnapshot.element;
    }
    get scriptElements() {
      return document.documentElement.querySelectorAll("script");
    }
  };
  var PageRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      if (document.body && newElement instanceof HTMLBodyElement) {
        document.body.replaceWith(newElement);
      } else {
        document.documentElement.appendChild(newElement);
      }
    }
    get shouldRender() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
    get reloadReason() {
      if (!this.newSnapshot.isVisitable) {
        return {
          reason: "turbo_visit_control_is_reload"
        };
      }
      if (!this.trackedElementsAreIdentical) {
        return {
          reason: "tracked_element_mismatch"
        };
      }
    }
    async prepareToRender() {
      this.#setLanguage();
      await this.mergeHead();
    }
    async render() {
      if (this.willRender) {
        await this.replaceBody();
      }
    }
    finishRendering() {
      super.finishRendering();
      if (!this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
    get currentHeadSnapshot() {
      return this.currentSnapshot.headSnapshot;
    }
    get newHeadSnapshot() {
      return this.newSnapshot.headSnapshot;
    }
    get newElement() {
      return this.newSnapshot.element;
    }
    #setLanguage() {
      const { documentElement } = this.currentSnapshot;
      const { lang } = this.newSnapshot;
      if (lang) {
        documentElement.setAttribute("lang", lang);
      } else {
        documentElement.removeAttribute("lang");
      }
    }
    async mergeHead() {
      const mergedHeadElements = this.mergeProvisionalElements();
      const newStylesheetElements = this.copyNewHeadStylesheetElements();
      this.copyNewHeadScriptElements();
      await mergedHeadElements;
      await newStylesheetElements;
      if (this.willRender) {
        this.removeUnusedDynamicStylesheetElements();
      }
    }
    async replaceBody() {
      await this.preservingPermanentElements(async () => {
        this.activateNewBody();
        await this.assignNewBody();
      });
    }
    get trackedElementsAreIdentical() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
    async copyNewHeadStylesheetElements() {
      const loadingElements = [];
      for (const element of this.newHeadStylesheetElements) {
        loadingElements.push(waitForLoad(element));
        document.head.appendChild(element);
      }
      await Promise.all(loadingElements);
    }
    copyNewHeadScriptElements() {
      for (const element of this.newHeadScriptElements) {
        document.head.appendChild(activateScriptElement(element));
      }
    }
    removeUnusedDynamicStylesheetElements() {
      for (const element of this.unusedDynamicStylesheetElements) {
        document.head.removeChild(element);
      }
    }
    async mergeProvisionalElements() {
      const newHeadElements = [...this.newHeadProvisionalElements];
      for (const element of this.currentHeadProvisionalElements) {
        if (!this.isCurrentElementInElementList(element, newHeadElements)) {
          document.head.removeChild(element);
        }
      }
      for (const element of newHeadElements) {
        document.head.appendChild(element);
      }
    }
    isCurrentElementInElementList(element, elementList) {
      for (const [index, newElement] of elementList.entries()) {
        if (element.tagName == "TITLE") {
          if (newElement.tagName != "TITLE") {
            continue;
          }
          if (element.innerHTML == newElement.innerHTML) {
            elementList.splice(index, 1);
            return true;
          }
        }
        if (newElement.isEqualNode(element)) {
          elementList.splice(index, 1);
          return true;
        }
      }
      return false;
    }
    removeCurrentHeadProvisionalElements() {
      for (const element of this.currentHeadProvisionalElements) {
        document.head.removeChild(element);
      }
    }
    copyNewHeadProvisionalElements() {
      for (const element of this.newHeadProvisionalElements) {
        document.head.appendChild(element);
      }
    }
    activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
    activateNewBodyScriptElements() {
      for (const inertScriptElement of this.newBodyScriptElements) {
        const activatedScriptElement = activateScriptElement(inertScriptElement);
        inertScriptElement.replaceWith(activatedScriptElement);
      }
    }
    async assignNewBody() {
      await this.renderElement(this.currentElement, this.newElement);
    }
    get unusedDynamicStylesheetElements() {
      return this.oldHeadStylesheetElements.filter((element) => {
        return element.getAttribute("data-turbo-track") === "dynamic";
      });
    }
    get oldHeadStylesheetElements() {
      return this.currentHeadSnapshot.getStylesheetElementsNotInSnapshot(this.newHeadSnapshot);
    }
    get newHeadStylesheetElements() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get newHeadScriptElements() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get currentHeadProvisionalElements() {
      return this.currentHeadSnapshot.provisionalElements;
    }
    get newHeadProvisionalElements() {
      return this.newHeadSnapshot.provisionalElements;
    }
    get newBodyScriptElements() {
      return this.newElement.querySelectorAll("script");
    }
  };
  var MorphingPageRenderer = class extends PageRenderer {
    static renderElement(currentElement, newElement) {
      morphElements(currentElement, newElement, {
        callbacks: {
          beforeNodeMorphed: (node, newNode) => {
            if (shouldRefreshFrameWithMorphing(node, newNode) && !closestFrameReloadableWithMorphing(node)) {
              node.reload();
              return false;
            }
            return true;
          }
        }
      });
      dispatch("turbo:morph", { detail: { currentElement, newElement } });
    }
    async preservingPermanentElements(callback) {
      return await callback();
    }
    get renderMethod() {
      return "morph";
    }
    get shouldAutofocus() {
      return false;
    }
  };
  var SnapshotCache = class {
    keys = [];
    snapshots = {};
    constructor(size) {
      this.size = size;
    }
    has(location2) {
      return toCacheKey(location2) in this.snapshots;
    }
    get(location2) {
      if (this.has(location2)) {
        const snapshot = this.read(location2);
        this.touch(location2);
        return snapshot;
      }
    }
    put(location2, snapshot) {
      this.write(location2, snapshot);
      this.touch(location2);
      return snapshot;
    }
    clear() {
      this.snapshots = {};
    }
    // Private
    read(location2) {
      return this.snapshots[toCacheKey(location2)];
    }
    write(location2, snapshot) {
      this.snapshots[toCacheKey(location2)] = snapshot;
    }
    touch(location2) {
      const key = toCacheKey(location2);
      const index = this.keys.indexOf(key);
      if (index > -1) this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
    trim() {
      for (const key of this.keys.splice(this.size)) {
        delete this.snapshots[key];
      }
    }
  };
  var PageView = class extends View {
    snapshotCache = new SnapshotCache(10);
    lastRenderedLocation = new URL(location.href);
    forceReloaded = false;
    shouldTransitionTo(newSnapshot) {
      return this.snapshot.prefersViewTransitions && newSnapshot.prefersViewTransitions;
    }
    renderPage(snapshot, isPreview = false, willRender = true, visit2) {
      const shouldMorphPage = this.isPageRefresh(visit2) && this.snapshot.shouldMorphPage;
      const rendererClass = shouldMorphPage ? MorphingPageRenderer : PageRenderer;
      const renderer = new rendererClass(this.snapshot, snapshot, isPreview, willRender);
      if (!renderer.shouldRender) {
        this.forceReloaded = true;
      } else {
        visit2?.changeHistory();
      }
      return this.render(renderer);
    }
    renderError(snapshot, visit2) {
      visit2?.changeHistory();
      const renderer = new ErrorRenderer(this.snapshot, snapshot, false);
      return this.render(renderer);
    }
    clearSnapshotCache() {
      this.snapshotCache.clear();
    }
    async cacheSnapshot(snapshot = this.snapshot) {
      if (snapshot.isCacheable) {
        this.delegate.viewWillCacheSnapshot();
        const { lastRenderedLocation: location2 } = this;
        await nextEventLoopTick();
        const cachedSnapshot = snapshot.clone();
        this.snapshotCache.put(location2, cachedSnapshot);
        return cachedSnapshot;
      }
    }
    getCachedSnapshotForLocation(location2) {
      return this.snapshotCache.get(location2);
    }
    isPageRefresh(visit2) {
      return !visit2 || this.lastRenderedLocation.pathname === visit2.location.pathname && visit2.action === "replace";
    }
    shouldPreserveScrollPosition(visit2) {
      return this.isPageRefresh(visit2) && this.snapshot.shouldPreserveScrollPosition;
    }
    get snapshot() {
      return PageSnapshot.fromElement(this.element);
    }
  };
  var Preloader = class {
    selector = "a[data-turbo-preload]";
    constructor(delegate, snapshotCache) {
      this.delegate = delegate;
      this.snapshotCache = snapshotCache;
    }
    start() {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", this.#preloadAll);
      } else {
        this.preloadOnLoadLinksForView(document.body);
      }
    }
    stop() {
      document.removeEventListener("DOMContentLoaded", this.#preloadAll);
    }
    preloadOnLoadLinksForView(element) {
      for (const link of element.querySelectorAll(this.selector)) {
        if (this.delegate.shouldPreloadLink(link)) {
          this.preloadURL(link);
        }
      }
    }
    async preloadURL(link) {
      const location2 = new URL(link.href);
      if (this.snapshotCache.has(location2)) {
        return;
      }
      const fetchRequest = new FetchRequest(this, FetchMethod.get, location2, new URLSearchParams(), link);
      await fetchRequest.perform();
    }
    // Fetch request delegate
    prepareRequest(fetchRequest) {
      fetchRequest.headers["X-Sec-Purpose"] = "prefetch";
    }
    async requestSucceededWithResponse(fetchRequest, fetchResponse) {
      try {
        const responseHTML = await fetchResponse.responseHTML;
        const snapshot = PageSnapshot.fromHTMLString(responseHTML);
        this.snapshotCache.put(fetchRequest.url, snapshot);
      } catch (_) {
      }
    }
    requestStarted(fetchRequest) {
    }
    requestErrored(fetchRequest) {
    }
    requestFinished(fetchRequest) {
    }
    requestPreventedHandlingResponse(fetchRequest, fetchResponse) {
    }
    requestFailedWithResponse(fetchRequest, fetchResponse) {
    }
    #preloadAll = () => {
      this.preloadOnLoadLinksForView(document.body);
    };
  };
  var Cache = class {
    constructor(session2) {
      this.session = session2;
    }
    clear() {
      this.session.clearCache();
    }
    resetCacheControl() {
      this.#setCacheControl("");
    }
    exemptPageFromCache() {
      this.#setCacheControl("no-cache");
    }
    exemptPageFromPreview() {
      this.#setCacheControl("no-preview");
    }
    #setCacheControl(value) {
      setMetaContent("turbo-cache-control", value);
    }
  };
  var Session = class {
    navigator = new Navigator(this);
    history = new History(this);
    view = new PageView(this, document.documentElement);
    adapter = new BrowserAdapter(this);
    pageObserver = new PageObserver(this);
    cacheObserver = new CacheObserver();
    linkPrefetchObserver = new LinkPrefetchObserver(this, document);
    linkClickObserver = new LinkClickObserver(this, window);
    formSubmitObserver = new FormSubmitObserver(this, document);
    scrollObserver = new ScrollObserver(this);
    streamObserver = new StreamObserver(this);
    formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement);
    frameRedirector = new FrameRedirector(this, document.documentElement);
    streamMessageRenderer = new StreamMessageRenderer();
    cache = new Cache(this);
    enabled = true;
    started = false;
    #pageRefreshDebouncePeriod = 150;
    constructor(recentRequests2) {
      this.recentRequests = recentRequests2;
      this.preloader = new Preloader(this, this.view.snapshotCache);
      this.debouncedRefresh = this.refresh;
      this.pageRefreshDebouncePeriod = this.pageRefreshDebouncePeriod;
    }
    start() {
      if (!this.started) {
        this.pageObserver.start();
        this.cacheObserver.start();
        this.linkPrefetchObserver.start();
        this.formLinkClickObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.preloader.start();
        this.started = true;
        this.enabled = true;
      }
    }
    disable() {
      this.enabled = false;
    }
    stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.cacheObserver.stop();
        this.linkPrefetchObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.preloader.stop();
        this.started = false;
      }
    }
    registerAdapter(adapter) {
      this.adapter = adapter;
    }
    visit(location2, options = {}) {
      const frameElement = options.frame ? document.getElementById(options.frame) : null;
      if (frameElement instanceof FrameElement) {
        const action = options.action || getVisitAction(frameElement);
        frameElement.delegate.proposeVisitIfNavigatedWithAction(frameElement, action);
        frameElement.src = location2.toString();
      } else {
        this.navigator.proposeVisit(expandURL(location2), options);
      }
    }
    refresh(url, requestId) {
      const isRecentRequest = requestId && this.recentRequests.has(requestId);
      const isCurrentUrl = url === document.baseURI;
      if (!isRecentRequest && !this.navigator.currentVisit && isCurrentUrl) {
        this.visit(url, { action: "replace", shouldCacheSnapshot: false });
      }
    }
    connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
    disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
    renderStreamMessage(message) {
      this.streamMessageRenderer.render(StreamMessage.wrap(message));
    }
    clearCache() {
      this.view.clearSnapshotCache();
    }
    setProgressBarDelay(delay) {
      console.warn(
        "Please replace `session.setProgressBarDelay(delay)` with `session.progressBarDelay = delay`. The function is deprecated and will be removed in a future version of Turbo.`"
      );
      this.progressBarDelay = delay;
    }
    set progressBarDelay(delay) {
      config.drive.progressBarDelay = delay;
    }
    get progressBarDelay() {
      return config.drive.progressBarDelay;
    }
    set drive(value) {
      config.drive.enabled = value;
    }
    get drive() {
      return config.drive.enabled;
    }
    set formMode(value) {
      config.forms.mode = value;
    }
    get formMode() {
      return config.forms.mode;
    }
    get location() {
      return this.history.location;
    }
    get restorationIdentifier() {
      return this.history.restorationIdentifier;
    }
    get pageRefreshDebouncePeriod() {
      return this.#pageRefreshDebouncePeriod;
    }
    set pageRefreshDebouncePeriod(value) {
      this.refresh = debounce(this.debouncedRefresh.bind(this), value);
      this.#pageRefreshDebouncePeriod = value;
    }
    // Preloader delegate
    shouldPreloadLink(element) {
      const isUnsafe = element.hasAttribute("data-turbo-method");
      const isStream = element.hasAttribute("data-turbo-stream");
      const frameTarget = element.getAttribute("data-turbo-frame");
      const frame = frameTarget == "_top" ? null : document.getElementById(frameTarget) || findClosestRecursively(element, "turbo-frame:not([disabled])");
      if (isUnsafe || isStream || frame instanceof FrameElement) {
        return false;
      } else {
        const location2 = new URL(element.href);
        return this.elementIsNavigatable(element) && locationIsVisitable(location2, this.snapshot.rootLocation);
      }
    }
    // History delegate
    historyPoppedToLocationWithRestorationIdentifierAndDirection(location2, restorationIdentifier, direction) {
      if (this.enabled) {
        this.navigator.startVisit(location2, restorationIdentifier, {
          action: "restore",
          historyChanged: true,
          direction
        });
      } else {
        this.adapter.pageInvalidated({
          reason: "turbo_disabled"
        });
      }
    }
    // Scroll observer delegate
    scrollPositionChanged(position) {
      this.history.updateRestorationData({ scrollPosition: position });
    }
    // Form click observer delegate
    willSubmitFormLinkToLocation(link, location2) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location2, this.snapshot.rootLocation);
    }
    submittedFormLinkToLocation() {
    }
    // Link hover observer delegate
    canPrefetchRequestToLocation(link, location2) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location2, this.snapshot.rootLocation) && this.navigator.linkPrefetchingIsEnabledForLocation(location2);
    }
    // Link click observer delegate
    willFollowLinkToLocation(link, location2, event) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location2, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location2, event);
    }
    followedLinkToLocation(link, location2) {
      const action = this.getActionForLink(link);
      const acceptsStreamResponse = link.hasAttribute("data-turbo-stream");
      this.visit(location2.href, { action, acceptsStreamResponse });
    }
    // Navigator delegate
    allowsVisitingLocationWithAction(location2, action) {
      return this.locationWithActionIsSamePage(location2, action) || this.applicationAllowsVisitingLocation(location2);
    }
    visitProposedToLocation(location2, options) {
      extendURLWithDeprecatedProperties(location2);
      this.adapter.visitProposedToLocation(location2, options);
    }
    // Visit delegate
    visitStarted(visit2) {
      if (!visit2.acceptsStreamResponse) {
        markAsBusy(document.documentElement);
        this.view.markVisitDirection(visit2.direction);
      }
      extendURLWithDeprecatedProperties(visit2.location);
      if (!visit2.silent) {
        this.notifyApplicationAfterVisitingLocation(visit2.location, visit2.action);
      }
    }
    visitCompleted(visit2) {
      this.view.unmarkVisitDirection();
      clearBusyState(document.documentElement);
      this.notifyApplicationAfterPageLoad(visit2.getTimingMetrics());
    }
    locationWithActionIsSamePage(location2, action) {
      return this.navigator.locationWithActionIsSamePage(location2, action);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
      this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
    // Form submit observer delegate
    willSubmitForm(form, submitter2) {
      const action = getAction$1(form, submitter2);
      return this.submissionIsNavigatable(form, submitter2) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
    formSubmitted(form, submitter2) {
      this.navigator.submitForm(form, submitter2);
    }
    // Page observer delegate
    pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
    pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
    pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }
    // Stream observer delegate
    receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }
    // Page view delegate
    viewWillCacheSnapshot() {
      if (!this.navigator.currentVisit?.silent) {
        this.notifyApplicationBeforeCachingSnapshot();
      }
    }
    allowsImmediateRender({ element }, options) {
      const event = this.notifyApplicationBeforeRender(element, options);
      const {
        defaultPrevented,
        detail: { render }
      } = event;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview, renderMethod) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender(renderMethod);
    }
    preloadOnLoadLinksForView(element) {
      this.preloader.preloadOnLoadLinksForView(element);
    }
    viewInvalidated(reason) {
      this.adapter.pageInvalidated(reason);
    }
    // Frame element
    frameLoaded(frame) {
      this.notifyApplicationAfterFrameLoad(frame);
    }
    frameRendered(fetchResponse, frame) {
      this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
    // Application events
    applicationAllowsFollowingLinkToLocation(link, location2, ev) {
      const event = this.notifyApplicationAfterClickingLinkToLocation(link, location2, ev);
      return !event.defaultPrevented;
    }
    applicationAllowsVisitingLocation(location2) {
      const event = this.notifyApplicationBeforeVisitingLocation(location2);
      return !event.defaultPrevented;
    }
    notifyApplicationAfterClickingLinkToLocation(link, location2, event) {
      return dispatch("turbo:click", {
        target: link,
        detail: { url: location2.href, originalEvent: event },
        cancelable: true
      });
    }
    notifyApplicationBeforeVisitingLocation(location2) {
      return dispatch("turbo:before-visit", {
        detail: { url: location2.href },
        cancelable: true
      });
    }
    notifyApplicationAfterVisitingLocation(location2, action) {
      return dispatch("turbo:visit", { detail: { url: location2.href, action } });
    }
    notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
    notifyApplicationBeforeRender(newBody, options) {
      return dispatch("turbo:before-render", {
        detail: { newBody, ...options },
        cancelable: true
      });
    }
    notifyApplicationAfterRender(renderMethod) {
      return dispatch("turbo:render", { detail: { renderMethod } });
    }
    notifyApplicationAfterPageLoad(timing = {}) {
      return dispatch("turbo:load", {
        detail: { url: this.location.href, timing }
      });
    }
    notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
      dispatchEvent(
        new HashChangeEvent("hashchange", {
          oldURL: oldURL.toString(),
          newURL: newURL.toString()
        })
      );
    }
    notifyApplicationAfterFrameLoad(frame) {
      return dispatch("turbo:frame-load", { target: frame });
    }
    notifyApplicationAfterFrameRender(fetchResponse, frame) {
      return dispatch("turbo:frame-render", {
        detail: { fetchResponse },
        target: frame,
        cancelable: true
      });
    }
    // Helpers
    submissionIsNavigatable(form, submitter2) {
      if (config.forms.mode == "off") {
        return false;
      } else {
        const submitterIsNavigatable = submitter2 ? this.elementIsNavigatable(submitter2) : true;
        if (config.forms.mode == "optin") {
          return submitterIsNavigatable && form.closest('[data-turbo="true"]') != null;
        } else {
          return submitterIsNavigatable && this.elementIsNavigatable(form);
        }
      }
    }
    elementIsNavigatable(element) {
      const container = findClosestRecursively(element, "[data-turbo]");
      const withinFrame = findClosestRecursively(element, "turbo-frame");
      if (config.drive.enabled || withinFrame) {
        if (container) {
          return container.getAttribute("data-turbo") != "false";
        } else {
          return true;
        }
      } else {
        if (container) {
          return container.getAttribute("data-turbo") == "true";
        } else {
          return false;
        }
      }
    }
    // Private
    getActionForLink(link) {
      return getVisitAction(link) || "advance";
    }
    get snapshot() {
      return this.view.snapshot;
    }
  };
  function extendURLWithDeprecatedProperties(url) {
    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
  }
  var deprecatedLocationPropertyDescriptors = {
    absoluteURL: {
      get() {
        return this.toString();
      }
    }
  };
  var session = new Session(recentRequests);
  var { cache, navigator: navigator$1 } = session;
  function start() {
    session.start();
  }
  function registerAdapter(adapter) {
    session.registerAdapter(adapter);
  }
  function visit(location2, options) {
    session.visit(location2, options);
  }
  function connectStreamSource(source) {
    session.connectStreamSource(source);
  }
  function disconnectStreamSource(source) {
    session.disconnectStreamSource(source);
  }
  function renderStreamMessage(message) {
    session.renderStreamMessage(message);
  }
  function clearCache() {
    console.warn(
      "Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`"
    );
    session.clearCache();
  }
  function setProgressBarDelay(delay) {
    console.warn(
      "Please replace `Turbo.setProgressBarDelay(delay)` with `Turbo.config.drive.progressBarDelay = delay`. The top-level function is deprecated and will be removed in a future version of Turbo.`"
    );
    config.drive.progressBarDelay = delay;
  }
  function setConfirmMethod(confirmMethod) {
    console.warn(
      "Please replace `Turbo.setConfirmMethod(confirmMethod)` with `Turbo.config.forms.confirm = confirmMethod`. The top-level function is deprecated and will be removed in a future version of Turbo.`"
    );
    config.forms.confirm = confirmMethod;
  }
  function setFormMode(mode) {
    console.warn(
      "Please replace `Turbo.setFormMode(mode)` with `Turbo.config.forms.mode = mode`. The top-level function is deprecated and will be removed in a future version of Turbo.`"
    );
    config.forms.mode = mode;
  }
  function morphBodyElements(currentBody, newBody) {
    MorphingPageRenderer.renderElement(currentBody, newBody);
  }
  function morphTurboFrameElements(currentFrame, newFrame) {
    MorphingFrameRenderer.renderElement(currentFrame, newFrame);
  }
  var Turbo = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    navigator: navigator$1,
    session,
    cache,
    PageRenderer,
    PageSnapshot,
    FrameRenderer,
    fetch: fetchWithTurboHeaders,
    config,
    start,
    registerAdapter,
    visit,
    connectStreamSource,
    disconnectStreamSource,
    renderStreamMessage,
    clearCache,
    setProgressBarDelay,
    setConfirmMethod,
    setFormMode,
    morphBodyElements,
    morphTurboFrameElements,
    morphChildren,
    morphElements
  });
  var TurboFrameMissingError = class extends Error {
  };
  var FrameController = class {
    fetchResponseLoaded = (_fetchResponse) => Promise.resolve();
    #currentFetchRequest = null;
    #resolveVisitPromise = () => {
    };
    #connected = false;
    #hasBeenLoaded = false;
    #ignoredAttributes = /* @__PURE__ */ new Set();
    #shouldMorphFrame = false;
    action = null;
    constructor(element) {
      this.element = element;
      this.view = new FrameView(this, this.element);
      this.appearanceObserver = new AppearanceObserver(this, this.element);
      this.formLinkClickObserver = new FormLinkClickObserver(this, this.element);
      this.linkInterceptor = new LinkInterceptor(this, this.element);
      this.restorationIdentifier = uuid();
      this.formSubmitObserver = new FormSubmitObserver(this, this.element);
    }
    // Frame delegate
    connect() {
      if (!this.#connected) {
        this.#connected = true;
        if (this.loadingStyle == FrameLoadingStyle.lazy) {
          this.appearanceObserver.start();
        } else {
          this.#loadSourceURL();
        }
        this.formLinkClickObserver.start();
        this.linkInterceptor.start();
        this.formSubmitObserver.start();
      }
    }
    disconnect() {
      if (this.#connected) {
        this.#connected = false;
        this.appearanceObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkInterceptor.stop();
        this.formSubmitObserver.stop();
      }
    }
    disabledChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        this.#loadSourceURL();
      }
    }
    sourceURLChanged() {
      if (this.#isIgnoringChangesTo("src")) return;
      if (this.element.isConnected) {
        this.complete = false;
      }
      if (this.loadingStyle == FrameLoadingStyle.eager || this.#hasBeenLoaded) {
        this.#loadSourceURL();
      }
    }
    sourceURLReloaded() {
      const { refresh, src } = this.element;
      this.#shouldMorphFrame = src && refresh === "morph";
      this.element.removeAttribute("complete");
      this.element.src = null;
      this.element.src = src;
      return this.element.loaded;
    }
    loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        this.#loadSourceURL();
      }
    }
    async #loadSourceURL() {
      if (this.enabled && this.isActive && !this.complete && this.sourceURL) {
        this.element.loaded = this.#visit(expandURL(this.sourceURL));
        this.appearanceObserver.stop();
        await this.element.loaded;
        this.#hasBeenLoaded = true;
      }
    }
    async loadResponse(fetchResponse) {
      if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) {
        this.sourceURL = fetchResponse.response.url;
      }
      try {
        const html = await fetchResponse.responseHTML;
        if (html) {
          const document2 = parseHTMLDocument(html);
          const pageSnapshot = PageSnapshot.fromDocument(document2);
          if (pageSnapshot.isVisitable) {
            await this.#loadFrameResponse(fetchResponse, document2);
          } else {
            await this.#handleUnvisitableFrameResponse(fetchResponse);
          }
        }
      } finally {
        this.#shouldMorphFrame = false;
        this.fetchResponseLoaded = () => Promise.resolve();
      }
    }
    // Appearance observer delegate
    elementAppearedInViewport(element) {
      this.proposeVisitIfNavigatedWithAction(element, getVisitAction(element));
      this.#loadSourceURL();
    }
    // Form link click observer delegate
    willSubmitFormLinkToLocation(link) {
      return this.#shouldInterceptNavigation(link);
    }
    submittedFormLinkToLocation(link, _location, form) {
      const frame = this.#findFrameElement(link);
      if (frame) form.setAttribute("data-turbo-frame", frame.id);
    }
    // Link interceptor delegate
    shouldInterceptLinkClick(element, _location, _event) {
      return this.#shouldInterceptNavigation(element);
    }
    linkClickIntercepted(element, location2) {
      this.#navigateFrame(element, location2);
    }
    // Form submit observer delegate
    willSubmitForm(element, submitter2) {
      return element.closest("turbo-frame") == this.element && this.#shouldInterceptNavigation(element, submitter2);
    }
    formSubmitted(element, submitter2) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }
      this.formSubmission = new FormSubmission(this, element, submitter2);
      const { fetchRequest } = this.formSubmission;
      this.prepareRequest(fetchRequest);
      this.formSubmission.start();
    }
    // Fetch request delegate
    prepareRequest(request) {
      request.headers["Turbo-Frame"] = this.id;
      if (this.currentNavigationElement?.hasAttribute("data-turbo-stream")) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted(_request) {
      markAsBusy(this.element);
    }
    requestPreventedHandlingResponse(_request, _response) {
      this.#resolveVisitPromise();
    }
    async requestSucceededWithResponse(request, response) {
      await this.loadResponse(response);
      this.#resolveVisitPromise();
    }
    async requestFailedWithResponse(request, response) {
      await this.loadResponse(response);
      this.#resolveVisitPromise();
    }
    requestErrored(request, error) {
      console.error(error);
      this.#resolveVisitPromise();
    }
    requestFinished(_request) {
      clearBusyState(this.element);
    }
    // Form submission delegate
    formSubmissionStarted({ formElement }) {
      markAsBusy(formElement, this.#findFrameElement(formElement));
    }
    formSubmissionSucceededWithResponse(formSubmission, response) {
      const frame = this.#findFrameElement(formSubmission.formElement, formSubmission.submitter);
      frame.delegate.proposeVisitIfNavigatedWithAction(frame, getVisitAction(formSubmission.submitter, formSubmission.formElement, frame));
      frame.delegate.loadResponse(response);
      if (!formSubmission.isSafe) {
        session.clearCache();
      }
    }
    formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
      session.clearCache();
    }
    formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
    formSubmissionFinished({ formElement }) {
      clearBusyState(formElement, this.#findFrameElement(formElement));
    }
    // View delegate
    allowsImmediateRender({ element: newFrame }, options) {
      const event = dispatch("turbo:before-frame-render", {
        target: this.element,
        detail: { newFrame, ...options },
        cancelable: true
      });
      const {
        defaultPrevented,
        detail: { render }
      } = event;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview, _renderMethod) {
    }
    preloadOnLoadLinksForView(element) {
      session.preloadOnLoadLinksForView(element);
    }
    viewInvalidated() {
    }
    // Frame renderer delegate
    willRenderFrame(currentElement, _newElement) {
      this.previousFrameElement = currentElement.cloneNode(true);
    }
    visitCachedSnapshot = ({ element }) => {
      const frame = element.querySelector("#" + this.element.id);
      if (frame && this.previousFrameElement) {
        frame.replaceChildren(...this.previousFrameElement.children);
      }
      delete this.previousFrameElement;
    };
    // Private
    async #loadFrameResponse(fetchResponse, document2) {
      const newFrameElement = await this.extractForeignFrameElement(document2.body);
      const rendererClass = this.#shouldMorphFrame ? MorphingFrameRenderer : FrameRenderer;
      if (newFrameElement) {
        const snapshot = new Snapshot(newFrameElement);
        const renderer = new rendererClass(this, this.view.snapshot, snapshot, false, false);
        if (this.view.renderPromise) await this.view.renderPromise;
        this.changeHistory();
        await this.view.render(renderer);
        this.complete = true;
        session.frameRendered(fetchResponse, this.element);
        session.frameLoaded(this.element);
        await this.fetchResponseLoaded(fetchResponse);
      } else if (this.#willHandleFrameMissingFromResponse(fetchResponse)) {
        this.#handleFrameMissingFromResponse(fetchResponse);
      }
    }
    async #visit(url) {
      const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
      this.#currentFetchRequest?.cancel();
      this.#currentFetchRequest = request;
      return new Promise((resolve) => {
        this.#resolveVisitPromise = () => {
          this.#resolveVisitPromise = () => {
          };
          this.#currentFetchRequest = null;
          resolve();
        };
        request.perform();
      });
    }
    #navigateFrame(element, url, submitter2) {
      const frame = this.#findFrameElement(element, submitter2);
      frame.delegate.proposeVisitIfNavigatedWithAction(frame, getVisitAction(submitter2, element, frame));
      this.#withCurrentNavigationElement(element, () => {
        frame.src = url;
      });
    }
    proposeVisitIfNavigatedWithAction(frame, action = null) {
      this.action = action;
      if (this.action) {
        const pageSnapshot = PageSnapshot.fromElement(frame).clone();
        const { visitCachedSnapshot } = frame.delegate;
        frame.delegate.fetchResponseLoaded = async (fetchResponse) => {
          if (frame.src) {
            const { statusCode, redirected } = fetchResponse;
            const responseHTML = await fetchResponse.responseHTML;
            const response = { statusCode, redirected, responseHTML };
            const options = {
              response,
              visitCachedSnapshot,
              willRender: false,
              updateHistory: false,
              restorationIdentifier: this.restorationIdentifier,
              snapshot: pageSnapshot
            };
            if (this.action) options.action = this.action;
            session.visit(frame.src, options);
          }
        };
      }
    }
    changeHistory() {
      if (this.action) {
        const method = getHistoryMethodForAction(this.action);
        session.history.update(method, expandURL(this.element.src || ""), this.restorationIdentifier);
      }
    }
    async #handleUnvisitableFrameResponse(fetchResponse) {
      console.warn(
        `The response (${fetchResponse.statusCode}) from <turbo-frame id="${this.element.id}"> is performing a full page visit due to turbo-visit-control.`
      );
      await this.#visitResponse(fetchResponse.response);
    }
    #willHandleFrameMissingFromResponse(fetchResponse) {
      this.element.setAttribute("complete", "");
      const response = fetchResponse.response;
      const visit2 = async (url, options) => {
        if (url instanceof Response) {
          this.#visitResponse(url);
        } else {
          session.visit(url, options);
        }
      };
      const event = dispatch("turbo:frame-missing", {
        target: this.element,
        detail: { response, visit: visit2 },
        cancelable: true
      });
      return !event.defaultPrevented;
    }
    #handleFrameMissingFromResponse(fetchResponse) {
      this.view.missing();
      this.#throwFrameMissingError(fetchResponse);
    }
    #throwFrameMissingError(fetchResponse) {
      const message = `The response (${fetchResponse.statusCode}) did not contain the expected <turbo-frame id="${this.element.id}"> and will be ignored. To perform a full page visit instead, set turbo-visit-control to reload.`;
      throw new TurboFrameMissingError(message);
    }
    async #visitResponse(response) {
      const wrapped = new FetchResponse(response);
      const responseHTML = await wrapped.responseHTML;
      const { location: location2, redirected, statusCode } = wrapped;
      return session.visit(location2, { response: { redirected, statusCode, responseHTML } });
    }
    #findFrameElement(element, submitter2) {
      const id = getAttribute("data-turbo-frame", submitter2, element) || this.element.getAttribute("target");
      return getFrameElementById(id) ?? this.element;
    }
    async extractForeignFrameElement(container) {
      let element;
      const id = CSS.escape(this.id);
      try {
        element = activateElement(container.querySelector(`turbo-frame#${id}`), this.sourceURL);
        if (element) {
          return element;
        }
        element = activateElement(container.querySelector(`turbo-frame[src][recurse~=${id}]`), this.sourceURL);
        if (element) {
          await element.loaded;
          return await this.extractForeignFrameElement(element);
        }
      } catch (error) {
        console.error(error);
        return new FrameElement();
      }
      return null;
    }
    #formActionIsVisitable(form, submitter2) {
      const action = getAction$1(form, submitter2);
      return locationIsVisitable(expandURL(action), this.rootLocation);
    }
    #shouldInterceptNavigation(element, submitter2) {
      const id = getAttribute("data-turbo-frame", submitter2, element) || this.element.getAttribute("target");
      if (element instanceof HTMLFormElement && !this.#formActionIsVisitable(element, submitter2)) {
        return false;
      }
      if (!this.enabled || id == "_top") {
        return false;
      }
      if (id) {
        const frameElement = getFrameElementById(id);
        if (frameElement) {
          return !frameElement.disabled;
        }
      }
      if (!session.elementIsNavigatable(element)) {
        return false;
      }
      if (submitter2 && !session.elementIsNavigatable(submitter2)) {
        return false;
      }
      return true;
    }
    // Computed properties
    get id() {
      return this.element.id;
    }
    get enabled() {
      return !this.element.disabled;
    }
    get sourceURL() {
      if (this.element.src) {
        return this.element.src;
      }
    }
    set sourceURL(sourceURL) {
      this.#ignoringChangesToAttribute("src", () => {
        this.element.src = sourceURL ?? null;
      });
    }
    get loadingStyle() {
      return this.element.loading;
    }
    get isLoading() {
      return this.formSubmission !== void 0 || this.#resolveVisitPromise() !== void 0;
    }
    get complete() {
      return this.element.hasAttribute("complete");
    }
    set complete(value) {
      if (value) {
        this.element.setAttribute("complete", "");
      } else {
        this.element.removeAttribute("complete");
      }
    }
    get isActive() {
      return this.element.isActive && this.#connected;
    }
    get rootLocation() {
      const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
      const root = meta?.content ?? "/";
      return expandURL(root);
    }
    #isIgnoringChangesTo(attributeName) {
      return this.#ignoredAttributes.has(attributeName);
    }
    #ignoringChangesToAttribute(attributeName, callback) {
      this.#ignoredAttributes.add(attributeName);
      callback();
      this.#ignoredAttributes.delete(attributeName);
    }
    #withCurrentNavigationElement(element, callback) {
      this.currentNavigationElement = element;
      callback();
      delete this.currentNavigationElement;
    }
  };
  function getFrameElementById(id) {
    if (id != null) {
      const element = document.getElementById(id);
      if (element instanceof FrameElement) {
        return element;
      }
    }
  }
  function activateElement(element, currentURL) {
    if (element) {
      const src = element.getAttribute("src");
      if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
        throw new Error(`Matching <turbo-frame id="${element.id}"> element has a source URL which references itself`);
      }
      if (element.ownerDocument !== document) {
        element = document.importNode(element, true);
      }
      if (element instanceof FrameElement) {
        element.connectedCallback();
        element.disconnectedCallback();
        return element;
      }
    }
  }
  var StreamActions = {
    after() {
      this.targetElements.forEach((e) => e.parentElement?.insertBefore(this.templateContent, e.nextSibling));
    },
    append() {
      this.removeDuplicateTargetChildren();
      this.targetElements.forEach((e) => e.append(this.templateContent));
    },
    before() {
      this.targetElements.forEach((e) => e.parentElement?.insertBefore(this.templateContent, e));
    },
    prepend() {
      this.removeDuplicateTargetChildren();
      this.targetElements.forEach((e) => e.prepend(this.templateContent));
    },
    remove() {
      this.targetElements.forEach((e) => e.remove());
    },
    replace() {
      const method = this.getAttribute("method");
      this.targetElements.forEach((targetElement) => {
        if (method === "morph") {
          morphElements(targetElement, this.templateContent);
        } else {
          targetElement.replaceWith(this.templateContent);
        }
      });
    },
    update() {
      const method = this.getAttribute("method");
      this.targetElements.forEach((targetElement) => {
        if (method === "morph") {
          morphChildren(targetElement, this.templateContent);
        } else {
          targetElement.innerHTML = "";
          targetElement.append(this.templateContent);
        }
      });
    },
    refresh() {
      session.refresh(this.baseURI, this.requestId);
    }
  };
  var StreamElement = class _StreamElement extends HTMLElement {
    static async renderElement(newElement) {
      await newElement.performAction();
    }
    async connectedCallback() {
      try {
        await this.render();
      } catch (error) {
        console.error(error);
      } finally {
        this.disconnect();
      }
    }
    async render() {
      return this.renderPromise ??= (async () => {
        const event = this.beforeRenderEvent;
        if (this.dispatchEvent(event)) {
          await nextRepaint();
          await event.detail.render(this);
        }
      })();
    }
    disconnect() {
      try {
        this.remove();
      } catch {
      }
    }
    /**
     * Removes duplicate children (by ID)
     */
    removeDuplicateTargetChildren() {
      this.duplicateChildren.forEach((c) => c.remove());
    }
    /**
     * Gets the list of duplicate children (i.e. those with the same ID)
     */
    get duplicateChildren() {
      const existingChildren = this.targetElements.flatMap((e) => [...e.children]).filter((c) => !!c.getAttribute("id"));
      const newChildrenIds = [...this.templateContent?.children || []].filter((c) => !!c.getAttribute("id")).map((c) => c.getAttribute("id"));
      return existingChildren.filter((c) => newChildrenIds.includes(c.getAttribute("id")));
    }
    /**
     * Gets the action function to be performed.
     */
    get performAction() {
      if (this.action) {
        const actionFunction = StreamActions[this.action];
        if (actionFunction) {
          return actionFunction;
        }
        this.#raise("unknown action");
      }
      this.#raise("action attribute is missing");
    }
    /**
     * Gets the target elements which the template will be rendered to.
     */
    get targetElements() {
      if (this.target) {
        return this.targetElementsById;
      } else if (this.targets) {
        return this.targetElementsByQuery;
      } else {
        this.#raise("target or targets attribute is missing");
      }
    }
    /**
     * Gets the contents of the main `<template>`.
     */
    get templateContent() {
      return this.templateElement.content.cloneNode(true);
    }
    /**
     * Gets the main `<template>` used for rendering
     */
    get templateElement() {
      if (this.firstElementChild === null) {
        const template = this.ownerDocument.createElement("template");
        this.appendChild(template);
        return template;
      } else if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }
      this.#raise("first child element must be a <template> element");
    }
    /**
     * Gets the current action.
     */
    get action() {
      return this.getAttribute("action");
    }
    /**
     * Gets the current target (an element ID) to which the result will
     * be rendered.
     */
    get target() {
      return this.getAttribute("target");
    }
    /**
     * Gets the current "targets" selector (a CSS selector)
     */
    get targets() {
      return this.getAttribute("targets");
    }
    /**
     * Reads the request-id attribute
     */
    get requestId() {
      return this.getAttribute("request-id");
    }
    #raise(message) {
      throw new Error(`${this.description}: ${message}`);
    }
    get description() {
      return (this.outerHTML.match(/<[^>]+>/) ?? [])[0] ?? "<turbo-stream>";
    }
    get beforeRenderEvent() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true,
        detail: { newStream: this, render: _StreamElement.renderElement }
      });
    }
    get targetElementsById() {
      const element = this.ownerDocument?.getElementById(this.target);
      if (element !== null) {
        return [element];
      } else {
        return [];
      }
    }
    get targetElementsByQuery() {
      const elements = this.ownerDocument?.querySelectorAll(this.targets);
      if (elements.length !== 0) {
        return Array.prototype.slice.call(elements);
      } else {
        return [];
      }
    }
  };
  var StreamSourceElement = class extends HTMLElement {
    streamSource = null;
    connectedCallback() {
      this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src);
      connectStreamSource(this.streamSource);
    }
    disconnectedCallback() {
      if (this.streamSource) {
        this.streamSource.close();
        disconnectStreamSource(this.streamSource);
      }
    }
    get src() {
      return this.getAttribute("src") || "";
    }
  };
  FrameElement.delegateConstructor = FrameController;
  if (customElements.get("turbo-frame") === void 0) {
    customElements.define("turbo-frame", FrameElement);
  }
  if (customElements.get("turbo-stream") === void 0) {
    customElements.define("turbo-stream", StreamElement);
  }
  if (customElements.get("turbo-stream-source") === void 0) {
    customElements.define("turbo-stream-source", StreamSourceElement);
  }
  (() => {
    let element = document.currentScript;
    if (!element) return;
    if (element.hasAttribute("data-turbo-suppress-warning")) return;
    element = element.parentElement;
    while (element) {
      if (element == document.body) {
        return console.warn(
          unindent`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `,
          element.outerHTML
        );
      }
      element = element.parentElement;
    }
  })();
  window.Turbo = { ...Turbo, StreamActions };
  start();

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js
  var consumer;
  async function getConsumer() {
    return consumer || setConsumer(createConsumer2().then(setConsumer));
  }
  function setConsumer(newConsumer) {
    return consumer = newConsumer;
  }
  async function createConsumer2() {
    const { createConsumer: createConsumer3 } = await Promise.resolve().then(() => (init_src(), src_exports));
    return createConsumer3();
  }
  async function subscribeTo(channel, mixin) {
    const { subscriptions } = await getConsumer();
    return subscriptions.create(channel, mixin);
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/snakeize.js
  function walk(obj) {
    if (!obj || typeof obj !== "object") return obj;
    if (obj instanceof Date || obj instanceof RegExp) return obj;
    if (Array.isArray(obj)) return obj.map(walk);
    return Object.keys(obj).reduce(function(acc, key) {
      var camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z]+)/g, function(m, x) {
        return "_" + x.toLowerCase();
      });
      acc[camel] = walk(obj[key]);
      return acc;
    }, {});
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js
  var TurboCableStreamSourceElement = class extends HTMLElement {
    static observedAttributes = ["channel", "signed-stream-name"];
    async connectedCallback() {
      connectStreamSource(this);
      this.subscription = await subscribeTo(this.channel, {
        received: this.dispatchMessageEvent.bind(this),
        connected: this.subscriptionConnected.bind(this),
        disconnected: this.subscriptionDisconnected.bind(this)
      });
    }
    disconnectedCallback() {
      disconnectStreamSource(this);
      if (this.subscription) this.subscription.unsubscribe();
      this.subscriptionDisconnected();
    }
    attributeChangedCallback() {
      if (this.subscription) {
        this.disconnectedCallback();
        this.connectedCallback();
      }
    }
    dispatchMessageEvent(data) {
      const event = new MessageEvent("message", { data });
      return this.dispatchEvent(event);
    }
    subscriptionConnected() {
      this.setAttribute("connected", "");
    }
    subscriptionDisconnected() {
      this.removeAttribute("connected");
    }
    get channel() {
      const channel = this.getAttribute("channel");
      const signed_stream_name = this.getAttribute("signed-stream-name");
      return { channel, signed_stream_name, ...walk({ ...this.dataset }) };
    }
  };
  if (customElements.get("turbo-cable-stream-source") === void 0) {
    customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js
  function encodeMethodIntoRequestBody(event) {
    if (event.target instanceof HTMLFormElement) {
      const { target: form, detail: { fetchOptions } } = event;
      form.addEventListener("turbo:submit-start", ({ detail: { formSubmission: { submitter: submitter2 } } }) => {
        const body = isBodyInit(fetchOptions.body) ? fetchOptions.body : new URLSearchParams();
        const method = determineFetchMethod(submitter2, body, form);
        if (!/get/i.test(method)) {
          if (/post/i.test(method)) {
            body.delete("_method");
          } else {
            body.set("_method", method);
          }
          fetchOptions.method = "post";
        }
      }, { once: true });
    }
  }
  function determineFetchMethod(submitter2, body, form) {
    const formMethod = determineFormMethod(submitter2);
    const overrideMethod = body.get("_method");
    const method = form.getAttribute("method") || "get";
    if (typeof formMethod == "string") {
      return formMethod;
    } else if (typeof overrideMethod == "string") {
      return overrideMethod;
    } else {
      return method;
    }
  }
  function determineFormMethod(submitter2) {
    if (submitter2 instanceof HTMLButtonElement || submitter2 instanceof HTMLInputElement) {
      if (submitter2.name === "_method") {
        return submitter2.value;
      } else if (submitter2.hasAttribute("formmethod")) {
        return submitter2.formMethod;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  function isBodyInit(body) {
    return body instanceof FormData || body instanceof URLSearchParams;
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js
  window.Turbo = turbo_es2017_esm_exports;
  addEventListener("turbo:before-fetch-request", encodeMethodIntoRequestBody);

  // app/javascript/application.js
  window.$ = window.jQuery = import_jquery.default;
  document.addEventListener("turbo:load", () => {
  });
})();
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
/*! Bundled license information:

@hotwired/turbo/dist/turbo.es2017-esm.js:
  (*!
  Turbo 8.0.17
  Copyright © 2025 37signals LLC
   *)
*/
