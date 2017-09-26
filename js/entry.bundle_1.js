!
function(t) {
    function n(e) {
        if (i[e]) return i[e].exports;
        var r = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    var e = window.webpackJsonp;
    window.webpackJsonp = function(n, i, o) {
        for (var a, s, u = 0,
        c = []; u < n.length; u++) s = n[u],
        r[s] && c.push(r[s][0]),
        r[s] = 0;
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        for (e && e(n, i, o); c.length;) c.shift()()
    };
    var i = {},
    r = {
        1 : 0
    };
    return n.e = function(t) {
        function e() {
            o.onerror = o.onload = null,
            clearTimeout(a);
            var n = r[t];
            0 !== n && (n && n[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0)
        }
        if (0 === r[t]) return Promise.resolve();
        if (r[t]) return r[t][2];
        var i = document.getElementsByTagName("head")[0],
        o = document.createElement("script");
        o.type = "text/javascript",
        o.charset = "utf-8",
        o.async = !0,
        o.timeout = 12e4,
        n.nc && o.setAttribute("nonce", n.nc),
        o.src = n.p + "" + t + ".chunk.js";
        var a = setTimeout(e, 12e4);
        o.onerror = o.onload = e;
        var s = new Promise(function(n, e) {
            r[t] = [n, e]
        });
        return r[t][2] = s,
        i.appendChild(o),
        s
    },
    n.m = t,
    n.c = i,
    n.i = function(t) {
        return t
    },
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    },
    n.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return n.d(e, "a", e),
        e
    },
    n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    n.p = "./build/",
    n.oe = function(t) {
        throw console.error(t),
        t
    },
    n(n.s = 23)
} ([function(t, n) {
    t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA0NDQ0ODQ4QEA4UFhMWFB4bGRkbHi0gIiAiIC1EKjIqKjIqRDxJOzc7STxsVUtLVWx9aWNpfZeHh5e+tb75+f8BDQ0NDQ4NDhAQDhQWExYUHhsZGRseLSAiICIgLUQqMioqMipEPEk7NztJPGxVS0tVbH1pY2l9l4eHl761vvn5///CABEIAEYARgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/9oACAEBAAAAAOkiBSEqiCaQogKQWAFCAFIH/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAAB//8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAxAAAAAAAAB//8QAHhAAAgIBBQEAAAAAAAAAAAAAEBEAASAhMDFBgXH/2gAIAQEAAT8AnworG5SLxWxwKPmCPeXeCDlUp6ea1FhDQqXtUHP/xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAECAQE/AE//xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAEDAQE/AE//2Q=="
},
function(module, exports, __webpack_require__) { !
    function(t, n) {
        window[t] = window[t] || {},
        window[t].module = n()
    } ("gb",
    function() {
        function _initApp() {
            app.$view = $("[gb-app]").eq(0),
            app.name = app.$view.attr("gb-app"),
            app.module = moduleMap[app.name].ins,
            null != app.name && (moduleMap[app.name].ins.service("_$ctor",
            function() {
                this.name = "_$ctor"
            }), moduleMap[app.name].deps.push("gbRouter"), moduleMap[app.name].deps.push("gbTool"), moduleMap[app.name].deps.push("gbScope"), _root = _regModule("_root", [app.name, "gbRouter", "gbDom", "gbScope"],
            function(_$ctor, $router, _$dom, _$scopeMgr) {
                var t = $router.getConfig();
                window.__gbTplData__ = {};
                for (var n in t) {
                    var e = t[n].tpl,
                    i = __webpack_require__(14)("./" + e + ".html");
                    i = i.replace(">", ' gb-controller="' + e + '">'),
                    window.__gbTplData__[e] = i
                }
                var r, o;
                _$dom.tplAddedSignal.add(function(t, n, e) {
                    if (_$scopeMgr.createScope(t, n, e), o = _$scopeMgr._getScope(t), setTimeout(function() {
                        null != r ? (r.onRemove({
                            data: $router._gotoData
                        }), o._ctor()) : o._ctor()
                    },
                    10), null == moduleMap[app.name].cMap[t]) throw 'Do not have controller named "' + t + '"';
                    if (moduleMap[app.name].cMap[t].scopeName = "$scope_" + t, moduleMap[app.name].ins.cMap[t].scopeName = "$scope_" + t, e) {
                        var i = moduleMap[app.name].cMap[t].deps;
                        for (var a in i) i[a] == "$scope_" + t && (moduleMap[app.name].cMap[t].deps[a] = "_$scopeLoading", moduleMap[app.name].ins.cMap[t].deps[a] = "_$scopeLoading", moduleMap[app.name].cMap[t].scopeName = "_$scopeLoading", moduleMap[app.name].ins.cMap[t].scopeName = "_$scopeLoading");
                        _root.controller("_loadingHandler",
                        function(_$scopeLoading) {
                            _$scopeLoading.closeSignal.add(function() {
                                _$dom.addTpl($router.getTplConfig($router.getHash()))
                            })
                        },
                        !0)
                    } else ctrl2CtrlMap[$router.getHash()] = t;
                    app.module._createC(t)
                }),
                $router.changeSignal.add(function(t, n) {
                    "" == t || t == -1 ? $router.haveLoading && $router.getDefaultLibs().length > 0 ? _$dom.addLoading($router.getLoadingConfig(), $router.getTplConfig($router.getHash())) : _$dom.addTpl($router.getTplConfig($router.getHash())) : (r = _$scopeMgr._getScope(ctrl2CtrlMap[t]), _$dom.addTpl($router.getTplConfig($router.getHash())))
                }),
                $router._start()
            }), _runModule("_root"))
        }
        function _regModule(t, n, e) {
            var i = new ModuleClass(t);
            return moduleMap[t] = {
                name: t,
                deps: n,
                fn: e,
                ins: i,
                hasRun: !1,
                cMap: {},
                sMap: {}
            },
            i
        }
        function _runModule(t) {
            var n = moduleMap[t],
            e = n.ins;
            e._run(n.fn)
        }
        function ModuleClass(mName) {
            var sf = this;
            sf.cMap = {},
            sf.sMap = {},
            sf.runMap = [],
            sf.name = mName,
            sf.controller = function(t, n, e) {
                return sf.cMap[t] = {
                    name: t,
                    fn: n,
                    deps: _getDepends(n, t),
                    ins: null,
                    type: "C"
                },
                moduleMap[sf.name].cMap[t] = sf.cMap[t],
                e && sf._createC(t),
                sf
            },
            sf.service = function(t, n) {
                return sf.sMap[t] = {
                    name: t,
                    fn: n,
                    deps: _getDepends(n, t),
                    ins: null,
                    type: "S"
                },
                moduleMap[sf.name].sMap[t] = sf.sMap[t],
                sf
            },
            sf.factory = function(t, n) {
                return sf.sMap[t] = {
                    name: t,
                    fn: n,
                    deps: _getDepends(n, t),
                    ins: null,
                    type: "F"
                },
                moduleMap[sf.name].sMap[t] = sf.sMap[t],
                sf
            },
            sf.run = function(t) {
                return sf.runMap.push(t),
                sf
            },
            sf.getService = function(t) {
                0 == moduleMap[sf.name].hasRun && _runModule(sf.name);
                var n = sf._createS(t);
                return n
            },
            sf._run = function(t) {
                if (!moduleMap[sf.name].hasRun) {
                    null != t && sf.runMap.unshift(t);
                    for (var n in sf.runMap) sf.controller("_run_" + sf.name + "_" + n, sf.runMap[n]);
                    for (var e in sf.runMap) sf._createC("_run_" + sf.name + "_" + e);
                    moduleMap[sf.name].hasRun = !0
                }
            },
            sf._createC = function(t) {
                var n = sf.cMap[t];
                null != n && (n.ins = this._newServiceIns(n))
            },
            sf._createS = function(t) {
                var n = sf.sMap[t];
                if (null == n) {
                    var e = moduleMap[sf.name].deps;
                    for (var i in e) {
                        var r = e[i];
                        if (null == moduleMap[r]) return null;
                        for (var o in moduleMap[r].sMap) if (t == o) {
                            var a = moduleMap[r].ins.getService(t);
                            return a
                        }
                    }
                    return null
                }
                return "S" == n.type ? null == n.ins ? (n.ins = this._newServiceIns(n), null != n.ins._ctor && n.ins._ctor(), n.ins) : n.ins: "F" == n.type ? 1 == n.hasRun ? n.
                return: (n.
                return = n.fn(), n.hasRun = !0, n.
                return) : void 0
            },
            sf._newServiceIns = function(cfg) {
                var name = cfg.name,
                deps = cfg.deps,
                fn = cfg.fn,
                fnStr = "";
                for (var i in deps) fnStr += deps[i] == name ? "null,": "this._createS('" + deps[i] + "'),";
                fnStr = fnStr.substring(0, fnStr.length - 1);
                var ins = eval("new fn(" + fnStr + ")");
                return ins
            }
        }
        function _getDepends(t, n) {
            var e = t.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, "").split(",");
            1 == e.length && "" == e[0] && (e = []);
            for (var i in e)"$scope" == e[i] && (e[i] = "$scope_" + n);
            return e
        }
        var app = {
            $view: -1,
            name: -1
        },
        moduleMap = {},
        ctrl2CtrlMap = {},
        _root;
        return window.m = moduleMap,
        $(_initApp),
        _regModule
    }),
    __webpack_require__(13),
    __webpack_require__(10),
    __webpack_require__(11),
    __webpack_require__(9),
    __webpack_require__(12)
},
function(t, n) { !
    function() {
        function t() {
            f.clearRect(0, 0, 1e3, 1e3),
            m = !1
        }
        function n() {
            l = document.getElementById("canvas"),
            f = l.getContext("2d"),
            window.ccc = f,
            e(),
            p = new s(g / 2, d / 2, v, C, b, w),
            l.addEventListener(h ? "mousedown": "touchstart", i, !1),
            clearInterval(x),
            a()
        }
        function e(t) {
            g = l.width = 720,
            d = l.height = 281
        }
        function i(t) {
            console.log(t),
            l.addEventListener(h ? "mousemove": "touchmove", o, !1),
            document.addEventListener(h ? "mouseup": "touchend", r, !1);
            var n = .25 * $(window).height();
            I.x = h ? t.clientX: t.touches[0].clientX / (_fs / 100),
            I.y = h ? t.clientY - n: (t.touches[0].clientY - n) / (_fs / 100),
            p.startStroke(),
            a()
        }
        function r(t) {
            l.removeEventListener(h ? "mousemove": "touchmove", o, !1),
            document.removeEventListener(h ? "mouseup": "touchend", r, !1),
            p.endStroke(),
            a()
        }
        function o(t) {
            var n = .25 * $(window).height();
            I.x = h ? t.clientX: t.touches[0].clientX / (_fs / 100),
            I.y = h ? t.clientY - n: (t.touches[0].clientY - n) / (_fs / 100),
            a()
        }
        function a() {
            p.render(f, I.x, I.y)
        }
        function s(t, n, e, i, r, o) {
            this.x = t,
            this.y = n,
            this.size = e,
            this.inkAmount = i,
            this.splashRange = r,
            this.splashInkSize = o,
            this.color = "#000000",
            this.resetTip()
        }
        function u(t, n, e, i) {
            this.x = t || 0,
            this.y = n || 0,
            this.lineWidth = e,
            this.inkAmount = i,
            this._currentLineWidth = this.lineWidth,
            this._latest = {
                x: this.x,
                y: this.y
            }
        }
        function c(t, n, e, i, r) {
            t.strokeStyle = i,
            t.lineWidth = r,
            t.beginPath(),
            t.moveTo(n.x, n.y),
            t.lineTo(e.x, e.y),
            t.closePath(),
            t.shadowBlur = 4,
            t.shadowColor = i,
            t.stroke(),
            m = !0
        }
        function A(t, n) {
            return "number" != typeof t ? Math.random() : ("number" != typeof n && (n = 0), Math.random() * (t - n) + n)
        }
        var l, f, g, d, p, h = !1,
        m = !1,
        v = 10,
        C = 10,
        b = 75,
        w = 10,
        I = {
            x: 0,
            y: 0
        },
        x = -1;
        s.prototype = {
            isStroke: !1,
            strokeId: null,
            _latest: null,
            _strokeRenderCount: 0,
            _hairs: null,
            _latestStrokeLength: 0,
            startStroke: function() {
                var t = this;
                this.resetTip(),
                this.strokeId = (new Date).getTime(),
                this.isStroke = !0,
                f.globalAlpha = 0,
                setTimeout(function() {
                    f.globalAlpha = 1,
                    t.color = "#333333"
                },
                1)
            },
            endStroke: function() {
                this.isStroke = !1,
                this._strokeRenderCount = 0,
                this.strokeId = null,
                f.globalAlpha = 0
            },
            resetTip: function() {
                for (var t, n, e, i, r, o, a, s, c, l = this._hairs = [], f = this.inkAmount, g = 2 * this.size, d = this.size / 2, p = A(2 * Math.PI), h = 0; h < g / 3; h++) t = A(d),
                n = t / 2,
                e = A(2 * Math.PI),
                i = t * Math.sin(e),
                r = n * Math.cos(e),
                o = Math.cos(p),
                a = Math.sin(p),
                s = this.x,
                c = this.y,
                l[h] = new u(s, c, 13, f)
            },
            render: function(t, n, e) {
                this._strokeRenderCount++,
                this._latest ? (this._latest.x = this.x, this._latest.y = this.y) : this._latest = {
                    x: n,
                    y: e
                },
                this.x = n,
                this.y = e;
                var i, r, o = this.x - this._latest.x,
                a = this.y - this._latest.y,
                s = this._latestStrokeLength = Math.sqrt(o * o + a * a),
                u = this._hairs;
                for (i = 0, r = u.length; i < r; i++) u[i].update(o, a, s);
                if (this.isStroke) {
                    var c = this.color.toString();
                    for (i = 0, r = u.length; i < r; i++) u[i].draw(t, c)
                }
            }
        },
        u.prototype = {
            update: function(t, n, e) {
                this._latest.x = this.x,
                this._latest.y = this.y,
                this.x += t,
                this.y += n;
                var i = Math.min(this.inkAmount / e, 1);
                this._currentLineWidth = this.lineWidth * i
            },
            draw: function(t, n) {
                t.save(),
                t.lineJoin = "round",
                t.lineCap = "round",
                c(t, this._latest, this, n, this._currentLineWidth),
                t.restore()
            }
        },
        window.PaintApp = {
            init: function() {
                n()
            },
            clean: function() {
                t()
            },
            getDataUrl: function() {
                return l.toDataURL("image/png")
            },
            aa: function() {
                return m
            }
        }
    } ()
},
function(t, n) { !
    function(t) {
        String.prototype.trim === t && (String.prototype.trim = function() {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }),
        Array.prototype.reduce === t && (Array.prototype.reduce = function(n) {
            if (void 0 === this || null === this) throw new TypeError;
            var e, i = Object(this),
            r = i.length >>> 0,
            o = 0;
            if ("function" != typeof n) throw new TypeError;
            if (0 == r && 1 == arguments.length) throw new TypeError;
            if (arguments.length >= 2) e = arguments[1];
            else for (;;) {
                if (o in i) {
                    e = i[o++];
                    break
                }
                if (++o >= r) throw new TypeError
            }
            for (; o < r;) o in i && (e = n.call(t, e, i[o], o, i)),
            o++;
            return e
        })
    } ();
    var e = function() {
        function t(t) {
            return "[object Function]" == W.call(t)
        }
        function n(t) {
            return t instanceof Object
        }
        function e(n) {
            var e, i;
            if ("[object Object]" !== W.call(n)) return ! 1;
            if (i = t(n.constructor) && n.constructor.prototype, !i || !hasOwnProperty.call(i, "isPrototypeOf")) return ! 1;
            for (e in n);
            return e === p || hasOwnProperty.call(n, e)
        }
        function i(t) {
            return t instanceof Array
        }
        function r(t) {
            return "number" == typeof t.length
        }
        function o(t) {
            return t.filter(function(t) {
                return t !== p && null !== t
            })
        }
        function a(t) {
            return t.length > 0 ? [].concat.apply([], t) : t
        }
        function s(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function u(t) {
            return t in N ? N[t] : N[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }
        function c(t, n) {
            return "number" != typeof n || M[s(t)] ? n: n + "px"
        }
        function A(t) {
            var n, e;
            return y[t] || (n = x.createElement(t), x.body.appendChild(n), e = E(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), y[t] = e),
            y[t]
        }
        function l(t, n) {
            return n === p ? m(t) : m(t).filter(n)
        }
        function f(n, e, i, r) {
            return t(e) ? e.call(n, i, r) : e
        }
        function g(t, n, e) {
            var i = t % 2 ? n: n.parentNode;
            i ? i.insertBefore(e, t ? 1 == t ? i.firstChild: 2 == t ? n: null: n.nextSibling) : m(e).remove()
        }
        function d(t, n) {
            n(t);
            for (var e in t.childNodes) d(t.childNodes[e], n)
        }
        var p, h, m, v, C, b, w = [],
        I = w.slice,
        x = window.document,
        y = {},
        N = {},
        E = x.defaultView.getComputedStyle,
        M = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        P = /^\s*<(\w+|!)[^>]*>/,
        D = [1, 3, 8, 9, 11],
        B = ["after", "prepend", "before", "append"],
        R = x.createElement("table"),
        j = x.createElement("tr"),
        k = {
            tr: x.createElement("tbody"),
            tbody: R,
            thead: R,
            tfoot: R,
            td: j,
            th: j,
            "*": x.createElement("div")
        },
        T = /complete|loaded|interactive/,
        L = /^\.([\w-]+)$/,
        O = /^#([\w-]+)$/,
        S = /^[\w-]+$/,
        W = {}.toString,
        Z = {},
        V = x.createElement("div");
        return Z.matches = function(t, n) {
            if (!t || 1 !== t.nodeType) return ! 1;
            var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (e) return e.call(t, n);
            var i, r = t.parentNode,
            o = !r;
            return o && (r = V).appendChild(t),
            i = ~Z.qsa(r, n).indexOf(t),
            o && V.removeChild(t),
            i
        },
        C = function(t) {
            return t.replace(/-+(.)?/g,
            function(t, n) {
                return n ? n.toUpperCase() : ""
            })
        },
        b = function(t) {
            return t.filter(function(n, e) {
                return t.indexOf(n) == e
            })
        },
        Z.fragment = function(t, n) {
            n === p && (n = P.test(t) && RegExp.$1),
            n in k || (n = "*");
            var e = k[n];
            return e.innerHTML = "" + t,
            m.each(I.call(e.childNodes),
            function() {
                e.removeChild(this)
            })
        },
        Z.Z = function(t, n) {
            return t = t || [],
            t.__proto__ = arguments.callee.prototype,
            t.selector = n || "",
            t
        },
        Z.isZ = function(t) {
            return t instanceof Z.Z
        },
        Z.init = function(n, r) {
            if (!n) return Z.Z();
            if (t(n)) return m(x).ready(n);
            if (Z.isZ(n)) return n;
            var a;
            if (i(n)) a = o(n);
            else if (e(n)) a = [m.extend({},
            n)],
            n = null;
            else if (D.indexOf(n.nodeType) >= 0 || n === window) a = [n],
            n = null;
            else if (P.test(n)) a = Z.fragment(n.trim(), RegExp.$1),
            n = null;
            else {
                if (r !== p) return m(r).find(n);
                a = Z.qsa(x, n)
            }
            return Z.Z(a, n)
        },
        m = function(t, n) {
            return Z.init(t, n)
        },
        m.extend = function(t) {
            return I.call(arguments, 1).forEach(function(n) {
                for (h in n) n[h] !== p && (t[h] = n[h])
            }),
            t
        },
        Z.qsa = function(t, n) {
            var e;
            return t === x && O.test(n) ? (e = t.getElementById(RegExp.$1)) ? [e] : w: 1 !== t.nodeType && 9 !== t.nodeType ? w: I.call(L.test(n) ? t.getElementsByClassName(RegExp.$1) : S.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n))
        },
        m.isFunction = t,
        m.isObject = n,
        m.isArray = i,
        m.isPlainObject = e,
        m.inArray = function(t, n, e) {
            return w.indexOf.call(n, t, e)
        },
        m.trim = function(t) {
            return t.trim()
        },
        m.uuid = 0,
        m.map = function(t, n) {
            var e, i, o, s = [];
            if (r(t)) for (i = 0; i < t.length; i++) e = n(t[i], i),
            null != e && s.push(e);
            else for (o in t) e = n(t[o], o),
            null != e && s.push(e);
            return a(s)
        },
        m.each = function(t, n) {
            var e, i;
            if (r(t)) {
                for (e = 0; e < t.length; e++) if (n.call(t[e], e, t[e]) === !1) return t
            } else for (i in t) if (n.call(t[i], i, t[i]) === !1) return t;
            return t
        },
        m.fn = {
            forEach: w.forEach,
            reduce: w.reduce,
            push: w.push,
            indexOf: w.indexOf,
            concat: w.concat,
            map: function(t) {
                return m.map(this,
                function(n, e) {
                    return t.call(n, e, n)
                })
            },
            slice: function() {
                return m(I.apply(this, arguments))
            },
            ready: function(t) {
                return T.test(x.readyState) ? t(m) : x.addEventListener("DOMContentLoaded",
                function() {
                    t(m)
                },
                !1),
                this
            },
            get: function(t) {
                return t === p ? I.call(this) : this[t]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(t) {
                return this.forEach(function(n, e) {
                    t.call(n, e, n)
                }),
                this
            },
            filter: function(t) {
                return m([].filter.call(this,
                function(n) {
                    return Z.matches(n, t)
                }))
            },
            add: function(t, n) {
                return m(b(this.concat(m(t, n))))
            },
            is: function(t) {
                return this.length > 0 && Z.matches(this[0], t)
            },
            not: function(n) {
                var e = [];
                if (t(n) && n.call !== p) this.each(function(t) {
                    n.call(this, t) || e.push(this)
                });
                else {
                    var i = "string" == typeof n ? this.filter(n) : r(n) && t(n.item) ? I.call(n) : m(n);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && e.push(t)
                    })
                }
                return m(e)
            },
            eq: function(t) {
                return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function() {
                var t = this[0];
                return t && !n(t) ? t: m(t)
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !n(t) ? t: m(t)
            },
            find: function(t) {
                var n;
                return n = 1 == this.length ? Z.qsa(this[0], t) : this.map(function() {
                    return Z.qsa(this, t)
                }),
                m(n)
            },
            closest: function(t, n) {
                for (var e = this[0]; e && !Z.matches(e, t);) e = e !== n && e !== x && e.parentNode;
                return m(e)
            },
            parents: function(t) {
                for (var n = [], e = this; e.length > 0;) e = m.map(e,
                function(t) {
                    if ((t = t.parentNode) && t !== x && n.indexOf(t) < 0) return n.push(t),
                    t
                });
                return l(n, t)
            },
            parent: function(t) {
                return l(b(this.pluck("parentNode")), t)
            },
            children: function(t) {
                return l(this.map(function() {
                    return I.call(this.children)
                }), t)
            },
            siblings: function(t) {
                return l(this.map(function(t, n) {
                    return I.call(n.parentNode.children).filter(function(t) {
                        return t !== n
                    })
                }), t)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(t) {
                return this.map(function() {
                    return this[t]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = null),
                    "none" == E(this, "").getPropertyValue("display") && (this.style.display = A(this.nodeName))
                })
            },
            replaceWith: function(t) {
                return this.before(t).remove()
            },
            wrap: function(t) {
                return this.each(function() {
                    m(this).wrapAll(m(t)[0].cloneNode(!1))
                })
            },
            wrapAll: function(t) {
                return this[0] && (m(this[0]).before(t = m(t)), t.append(this)),
                this
            },
            unwrap: function() {
                return this.parent().each(function() {
                    m(this).replaceWith(m(this).children())
                }),
                this
            },
            clone: function() {
                return m(this.map(function() {
                    return this.cloneNode(!0)
                }))
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return (t === p ? "none" == this.css("display") : t) ? this.show() : this.hide()
            },
            prev: function() {
                return m(this.pluck("previousElementSibling"))
            },
            next: function() {
                return m(this.pluck("nextElementSibling"))
            },
            html: function(t) {
                return t === p ? this.length > 0 ? this[0].innerHTML: null: this.each(function(n) {
                    var e = this.innerHTML;
                    m(this).empty().append(f(this, t, n, e))
                })
            },
            text: function(t) {
                return t === p ? this.length > 0 ? this[0].textContent: null: this.each(function() {
                    this.textContent = t
                })
            },
            attr: function(t, e) {
                var i;
                return "string" == typeof t && e === p ? 0 == this.length || 1 !== this[0].nodeType ? p: "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i: this.each(function(i) {
                    if (1 === this.nodeType) if (n(t)) for (h in t) this.setAttribute(h, t[h]);
                    else this.setAttribute(t, f(this, e, i, this.getAttribute(t)))
                })
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && this.removeAttribute(t)
                })
            },
            prop: function(t, n) {
                return n === p ? this[0] ? this[0][t] : p: this.each(function(e) {
                    this[t] = f(this, n, e, this[t])
                })
            },
            data: function(t, n) {
                var e = this.attr("data-" + s(t), n);
                return null !== e ? e: p
            },
            val: function(t) {
                return t === p ? this.length > 0 ? this[0].value: p: this.each(function(n) {
                    this.value = f(this, t, n, this.value)
                })
            },
            offset: function() {
                if (0 == this.length) return null;
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: t.width,
                    height: t.height
                }
            },
            css: function(t, n) {
                if (n === p && "string" == typeof t) return 0 == this.length ? p: this[0].style[C(t)] || E(this[0], "").getPropertyValue(t);
                var e = "";
                for (h in t)"string" == typeof t[h] && "" == t[h] ? this.each(function() {
                    this.style.removeProperty(s(h))
                }) : e += s(h) + ":" + c(h, t[h]) + ";";
                return "string" == typeof t && ("" == n ? this.each(function() {
                    this.style.removeProperty(s(t))
                }) : e = s(t) + ":" + c(t, n)),
                this.each(function() {
                    this.style.cssText += ";" + e
                })
            },
            index: function(t) {
                return t ? this.indexOf(m(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(t) {
                return ! (this.length < 1) && u(t).test(this[0].className)
            },
            addClass: function(t) {
                return this.each(function(n) {
                    v = [];
                    var e = this.className,
                    i = f(this, t, n, e);
                    i.split(/\s+/g).forEach(function(t) {
                        m(this).hasClass(t) || v.push(t)
                    },
                    this),
                    v.length && (this.className += (e ? " ": "") + v.join(" "))
                })
            },
            removeClass: function(t) {
                return this.each(function(n) {
                    return t === p ? this.className = "": (v = this.className, f(this, t, n, v).split(/\s+/g).forEach(function(t) {
                        v = v.replace(u(t), " ")
                    }), this.className = v.trim(), void 0)
                })
            },
            toggleClass: function(t, n) {
                return this.each(function(e) {
                    var i = f(this, t, e, this.className); (n === p ? !m(this).hasClass(i) : n) ? m(this).addClass(i) : m(this).removeClass(i)
                })
            }
        },
        ["width", "height"].forEach(function(t) {
            m.fn[t] = function(n) {
                var e, i = t.replace(/./,
                function(t) {
                    return t[0].toUpperCase()
                });
                return n === p ? this[0] == window ? window["inner" + i] : this[0] == x ? x.documentElement["offset" + i] : (e = this.offset()) && e[t] : this.each(function(e) {
                    var i = m(this);
                    i.css(t, f(this, n, e, i[t]()))
                })
            }
        }),
        B.forEach(function(t, e) {
            m.fn[t] = function() {
                var t = m.map(arguments,
                function(t) {
                    return n(t) ? t: Z.fragment(t)
                });
                if (t.length < 1) return this;
                var i = this.length,
                r = i > 1,
                o = e < 2;
                return this.each(function(n, a) {
                    for (var s = 0; s < t.length; s++) {
                        var u = t[o ? t.length - s - 1 : s];
                        d(u,
                        function(t) {
                            null != t.nodeName && "SCRIPT" === t.nodeName.toUpperCase() && (!t.type || "text/javascript" === t.type) && window.eval.call(window, t.innerHTML)
                        }),
                        r && n < i - 1 && (u = u.cloneNode(!0)),
                        g(e, a, u)
                    }
                })
            },
            m.fn[e % 2 ? t + "To": "insert" + (e ? "Before": "After")] = function(n) {
                return m(n)[t](this),
                this
            }
        }),
        Z.Z.prototype = m.fn,
        Z.camelize = C,
        Z.uniq = b,
        m.zepto = Z,
        m
    } ();
    window.Zepto = e,
    "$" in window || (window.$ = e),
    function(t) {
        function n(t) {
            return t._zid || (t._zid = l++)
        }
        function e(t, e, o, a) {
            if (e = i(e), e.ns) var s = r(e.ns);
            return (A[n(t)] || []).filter(function(t) {
                return t && (!e.e || t.e == e.e) && (!e.ns || s.test(t.ns)) && (!o || n(t.fn) === n(o)) && (!a || t.sel == a)
            })
        }
        function i(t) {
            var n = ("" + t).split(".");
            return {
                e: n[0],
                ns: n.slice(1).sort().join(" ")
            }
        }
        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }
        function o(n, e, i) {
            t.isObject(n) ? t.each(n, i) : n.split(/\s/).forEach(function(t) {
                i(t, e)
            })
        }
        function a(e, r, a, s, u, c) {
            c = !!c;
            var l = n(e),
            f = A[l] || (A[l] = []);
            o(r, a,
            function(n, r) {
                var o = u && u(r, n),
                a = o || r,
                A = function(t) {
                    var n = a.apply(e, [t].concat(t.data));
                    return n === !1 && t.preventDefault(),
                    n
                },
                l = t.extend(i(n), {
                    fn: r,
                    proxy: A,
                    sel: s,
                    del: o,
                    i: f.length
                });
                f.push(l),
                e.addEventListener(l.e, A, c)
            })
        }
        function s(t, i, r, a) {
            var s = n(t);
            o(i || "", r,
            function(n, i) {
                e(t, n, i, a).forEach(function(n) {
                    delete A[s][n.i],
                    t.removeEventListener(n.e, n.proxy, !1)
                })
            })
        }
        function u(n) {
            var e = t.extend({
                originalEvent: n
            },
            n);
            return t.each(p,
            function(t, i) {
                e[t] = function() {
                    return this[i] = g,
                    n[t].apply(n, arguments)
                },
                e[i] = d
            }),
            e
        }
        function c(t) {
            if (! ("defaultPrevented" in t)) {
                t.defaultPrevented = !1;
                var n = t.preventDefault;
                t.preventDefault = function() {
                    this.defaultPrevented = !0,
                    n.call(this)
                }
            }
        }
        var A = (t.zepto.qsa, {}),
        l = 1,
        f = {};
        f.click = f.mousedown = f.mouseup = f.mousemove = "MouseEvents",
        t.event = {
            add: a,
            remove: s
        },
        t.proxy = function(e, i) {
            if (t.isFunction(e)) {
                var r = function() {
                    return e.apply(i, arguments)
                };
                return r._zid = n(e),
                r
            }
            if ("string" == typeof i) return t.proxy(e[i], e);
            throw new TypeError("expected function")
        },
        t.fn.bind = function(t, n) {
            return this.each(function() {
                a(this, t, n)
            })
        },
        t.fn.unbind = function(t, n) {
            return this.each(function() {
                s(this, t, n)
            })
        },
        t.fn.one = function(t, n) {
            return this.each(function(e, i) {
                a(this, t, n, null,
                function(t, n) {
                    return function() {
                        var e = t.apply(i, arguments);
                        return s(i, n, t),
                        e
                    }
                })
            })
        };
        var g = function() {
            return ! 0
        },
        d = function() {
            return ! 1
        },
        p = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        t.fn.delegate = function(n, e, i) {
            var r = !1;
            return "blur" != e && "focus" != e || (t.iswebkit ? e = "blur" == e ? "focusout": "focus" == e ? "focusin": e: r = !0),
            this.each(function(o, s) {
                a(s, e, i, n,
                function(e) {
                    return function(i) {
                        var r, o = t(i.target).closest(n, s).get(0);
                        if (o) return r = t.extend(u(i), {
                            currentTarget: o,
                            liveFired: s
                        }),
                        e.apply(o, [r].concat([].slice.call(arguments, 1)))
                    }
                },
                r)
            })
        },
        t.fn.undelegate = function(t, n, e) {
            return this.each(function() {
                s(this, n, e, t)
            })
        },
        t.fn.live = function(n, e) {
            return t(document.body).delegate(this.selector, n, e),
            this
        },
        t.fn.die = function(n, e) {
            return t(document.body).undelegate(this.selector, n, e),
            this
        },
        t.fn.on = function(n, e, i) {
            return void 0 == e || t.isFunction(e) ? this.bind(n, e) : this.delegate(e, n, i)
        },
        t.fn.off = function(n, e, i) {
            return void 0 == e || t.isFunction(e) ? this.unbind(n, e) : this.undelegate(e, n, i)
        },
        t.fn.trigger = function(n, e) {
            return "string" == typeof n && (n = t.Event(n)),
            c(n),
            n.data = e,
            this.each(function() {
                "dispatchEvent" in this && this.dispatchEvent(n)
            })
        },
        t.fn.triggerHandler = function(n, i) {
            var r, o;
            return this.each(function(a, s) {
                r = u("string" == typeof n ? t.Event(n) : n),
                r.data = i,
                r.target = s,
                t.each(e(s, n.type || n),
                function(t, n) {
                    if (o = n.proxy(r), r.isImmediatePropagationStopped()) return ! 1
                })
            }),
            o
        },
        "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(n) {
            t.fn[n] = function(t) {
                return this.bind(n, t)
            }
        }),
        ["focus", "blur"].forEach(function(n) {
            t.fn[n] = function(t) {
                if (t) this.bind(n, t);
                else if (this.length) try {
                    this.get(0)[n]()
                } catch(t) {}
                return this
            }
        }),
        t.Event = function(t, n) {
            var e = document.createEvent(f[t] || "Events"),
            i = !0;
            if (n) for (var r in n)"bubbles" == r ? i = !!n[r] : e[r] = n[r];
            return e.initEvent(t, i, !0, null, null, null, null, null, null, null, null, null, null, null, null),
            e
        }
    } (e),
    function(t) {
        function n(t) {
            var n = this.os = {},
            e = this.browser = {},
            i = t.match(/WebKit\/([\d.]+)/),
            r = t.match(/(Android)\s+([\d.]+)/),
            o = t.match(/(iPad).*OS\s([\d_]+)/),
            a = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
            s = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            u = s && t.match(/TouchPad/),
            c = t.match(/Kindle\/([\d.]+)/),
            A = t.match(/Silk\/([\d._]+)/),
            l = t.match(/(BlackBerry).*Version\/([\d.]+)/); (e.webkit = !!i) && (e.version = i[1]),
            r && (n.android = !0, n.version = r[2]),
            a && (n.ios = n.iphone = !0, n.version = a[2].replace(/_/g, ".")),
            o && (n.ios = n.ipad = !0, n.version = o[2].replace(/_/g, ".")),
            s && (n.webos = !0, n.version = s[2]),
            u && (n.touchpad = !0),
            l && (n.blackberry = !0, n.version = l[2]),
            c && (n.kindle = !0, n.version = c[1]),
            A && (e.silk = !0, e.version = A[1]),
            !A && n.android && t.match(/Kindle Fire/) && (e.silk = !0)
        }
        n.call(t, navigator.userAgent),
        t.__detect = n
    } (e),
    function(t, n) {
        function e(t) {
            return t.toLowerCase()
        }
        function i(t) {
            return r ? r + t: e(t)
        }
        var r, o = "",
        a = {
            Webkit: "webkit",
            Moz: "",
            O: "o",
            ms: "MS"
        },
        s = window.document,
        u = s.createElement("div"),
        c = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        A = {};
        t.each(a,
        function(t, i) {
            if (u.style[t + "TransitionProperty"] !== n) return o = "-" + e(t) + "-",
            r = i,
            !1
        }),
        A[o + "transition-property"] = A[o + "transition-duration"] = A[o + "transition-timing-function"] = A[o + "animation-name"] = A[o + "animation-duration"] = "",
        t.fx = {
            off: r === n && u.style.transitionProperty === n,
            cssPrefix: o,
            transitionEnd: i("TransitionEnd"),
            animationEnd: i("AnimationEnd")
        },
        t.fn.animate = function(n, e, i, r) {
            return t.isObject(e) && (i = e.easing, r = e.complete, e = e.duration),
            e && (e /= 1e3),
            this.anim(n, e, i, r)
        },
        t.fn.anim = function(e, i, r, a) {
            var s, u, l, f = {},
            g = this,
            d = t.fx.transitionEnd;
            if (i === n && (i = .4), t.fx.off && (i = 0), "string" == typeof e) f[o + "animation-name"] = e,
            f[o + "animation-duration"] = i + "s",
            d = t.fx.animationEnd;
            else {
                for (u in e) c.test(u) ? (s || (s = []), s.push(u + "(" + e[u] + ")")) : f[u] = e[u];
                s && (f[o + "transform"] = s.join(" ")),
                !t.fx.off && "object" == typeof e && (f[o + "transition-property"] = Object.keys(e).join(", "), f[o + "transition-duration"] = i + "s", f[o + "transition-timing-function"] = r || "linear")
            }
            return l = function(n) {
                if ("undefined" != typeof n) {
                    if (n.target !== n.currentTarget) return;
                    t(n.target).unbind(d, arguments.callee)
                }
                t(this).css(A),
                a && a.call(this)
            },
            i > 0 && this.bind(d, l),
            setTimeout(function() {
                g.css(f),
                i <= 0 && setTimeout(function() {
                    g.each(function() {
                        l.call(this)
                    })
                },
                0)
            },
            0),
            this
        },
        u = null
    } (e),
    function(t) {
        function n(n, e, i) {
            var r = t.Event(e);
            return t(n).trigger(r, i),
            !r.defaultPrevented
        }
        function e(t, e, i, r) {
            if (t.global) return n(e || v, i, r)
        }
        function i(n) {
            n.global && 0 === t.active++&&e(n, null, "ajaxStart")
        }
        function r(n) {
            n.global && !--t.active && e(n, null, "ajaxStop")
        }
        function o(t, n) {
            var i = n.context;
            return n.beforeSend.call(i, t, n) !== !1 && e(n, i, "ajaxBeforeSend", [t, n]) !== !1 && void e(n, i, "ajaxSend", [t, n])
        }
        function a(t, n, i) {
            var r = i.context,
            o = "success";
            i.success.call(r, t, o, n),
            e(i, r, "ajaxSuccess", [n, i, t]),
            u(o, n, i)
        }
        function s(t, n, i, r) {
            var o = r.context;
            r.error.call(o, i, n, t),
            e(r, o, "ajaxError", [i, r, t]),
            u(n, i, r)
        }
        function u(t, n, i) {
            var o = i.context;
            i.complete.call(o, n, t),
            e(i, o, "ajaxComplete", [n, i]),
            r(i)
        }
        function c() {}
        function A(t) {
            return t && (t == x ? "html": t == I ? "json": b.test(t) ? "script": w.test(t) && "xml") || "text"
        }
        function l(t, n) {
            return (t + "&" + n).replace(/[&?]{1,2}/, "?")
        }
        function f(n) {
            m(n.data) && (n.data = t.param(n.data)),
            n.data && (!n.type || "GET" == n.type.toUpperCase()) && (n.url = l(n.url, n.data))
        }
        function g(n, e, i, r) {
            var o = t.isArray(e);
            t.each(e,
            function(e, a) {
                r && (e = i ? r: r + "[" + (o ? "": e) + "]"),
                !r && o ? n.add(a.name, a.value) : (i ? t.isArray(a) : m(a)) ? g(n, a, i, e) : n.add(e, a)
            })
        }
        var d, p, h = 0,
        m = t.isObject,
        v = window.document,
        C = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        b = /^(?:text|application)\/javascript/i,
        w = /^(?:text|application)\/xml/i,
        I = "application/json",
        x = "text/html",
        y = /^\s*$/;
        t.active = 0,
        t.ajaxJSONP = function(n) {
            var e, i = "jsonp" + ++h,
            r = v.createElement("script"),
            o = function() {
                t(r).remove(),
                i in window && (window[i] = c),
                u("abort", s, n)
            },
            s = {
                abort: o
            };
            return n.error && (r.onerror = function() {
                s.abort(),
                n.error()
            }),
            window[i] = function(o) {
                clearTimeout(e),
                t(r).remove(),
                delete window[i],
                a(o, s, n)
            },
            f(n),
            r.src = n.url.replace(/=\?/, "=" + i),
            t("head").append(r),
            n.timeout > 0 && (e = setTimeout(function() {
                s.abort(),
                u("timeout", s, n)
            },
            n.timeout)),
            s
        },
        t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript",
                json: I,
                xml: "application/xml, text/xml",
                html: x,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0
        },
        t.ajax = function(n) {
            var e = t.extend({},
            n || {});
            for (d in t.ajaxSettings) void 0 === e[d] && (e[d] = t.ajaxSettings[d]);
            i(e),
            e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host);
            var r = e.dataType,
            u = /=\?/.test(e.url);
            if ("jsonp" == r || u) return u || (e.url = l(e.url, "callback=?")),
            t.ajaxJSONP(e);
            e.url || (e.url = window.location.toString()),
            f(e);
            var g, h = e.accepts[r],
            m = {},
            v = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1: window.location.protocol,
            C = t.ajaxSettings.xhr();
            e.crossDomain || (m["X-Requested-With"] = "XMLHttpRequest"),
            h && (m.Accept = h, h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(h)),
            (e.contentType || e.data && "GET" != e.type.toUpperCase()) && (m["Content-Type"] = e.contentType || "application/x-www-form-urlencoded"),
            e.headers = t.extend(m, e.headers || {}),
            C.onreadystatechange = function() {
                if (4 == C.readyState) {
                    clearTimeout(g);
                    var t, n = !1;
                    if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == v) {
                        r = r || A(C.getResponseHeader("content-type")),
                        t = C.responseText;
                        try {
                            "script" == r ? (0, eval)(t) : "xml" == r ? t = C.responseXML: "json" == r && (t = y.test(t) ? null: JSON.parse(t))
                        } catch(t) {
                            n = t
                        }
                        n ? s(n, "parsererror", C, e) : a(t, C, e)
                    } else s(null, "error", C, e)
                }
            };
            var b = !("async" in e) || e.async;
            C.open(e.type, e.url, b);
            for (p in e.headers) C.setRequestHeader(p, e.headers[p]);
            return o(C, e) === !1 ? (C.abort(), !1) : (e.timeout > 0 && (g = setTimeout(function() {
                C.onreadystatechange = c,
                C.abort(),
                s(null, "timeout", C, e)
            },
            e.timeout)), C.send(e.data ? e.data: null), C)
        },
        t.get = function(n, e) {
            return t.ajax({
                url: n,
                success: e
            })
        },
        t.post = function(n, e, i, r) {
            return t.isFunction(e) && (r = r || i, i = e, e = null),
            t.ajax({
                type: "POST",
                url: n,
                data: e,
                success: i,
                dataType: r
            })
        },
        t.getJSON = function(n, e) {
            return t.ajax({
                url: n,
                success: e,
                dataType: "json"
            })
        },
        t.fn.load = function(n, e) {
            if (!this.length) return this;
            var i, r = this,
            o = n.split(/\s/);
            return o.length > 1 && (n = o[0], i = o[1]),
            t.get(n,
            function(n) {
                r.html(i ? t(v.createElement("div")).html(n.replace(C, "")).find(i).html() : n),
                e && e.call(r)
            }),
            this
        };
        var N = encodeURIComponent;
        t.param = function(t, n) {
            var e = [];
            return e.add = function(t, n) {
                this.push(N(t) + "=" + N(n))
            },
            g(e, t, n),
            e.join("&").replace("%20", "+")
        }
    } (e),
    function(t) {
        t.fn.serializeArray = function() {
            var n, e = [];
            return t(Array.prototype.slice.call(this.get(0).elements)).each(function() {
                n = t(this);
                var i = n.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                    name: n.attr("name"),
                    value: n.val()
                })
            }),
            e
        },
        t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(n) {
                t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
            }),
            t.join("&")
        },
        t.fn.submit = function(n) {
            if (n) this.bind("submit", n);
            else if (this.length) {
                var e = t.Event("submit");
                this.eq(0).trigger(e),
                e.defaultPrevented || this.get(0).submit()
            }
            return this
        }
    } (e),
    function(t) {
        function n(t) {
            return "tagName" in t ? t: t.parentNode
        }
        function e(t, n, e, i) {
            var r = Math.abs(t - n),
            o = Math.abs(e - i);
            return r >= o ? t - n > 0 ? "Left": "Right": e - i > 0 ? "Up": "Down"
        }
        function i() {
            a = null,
            s.last && (s.el.trigger("longTap"), s = {})
        }
        function r() {
            a && clearTimeout(a),
            a = null
        }
        var o, a, s = {},
        u = 750;
        t(document).ready(function() {
            var c, A;
            t(document.body).bind("touchstart",
            function(e) {
                c = Date.now(),
                A = c - (s.last || c),
                s.el = t(n(e.touches[0].target)),
                o && clearTimeout(o),
                s.x1 = e.touches[0].pageX,
                s.y1 = e.touches[0].pageY,
                A > 0 && A <= 250 && (s.isDoubleTap = !0),
                s.last = c,
                a = setTimeout(i, u)
            }).bind("touchmove",
            function(t) {
                r(),
                s.x2 = t.touches[0].pageX,
                s.y2 = t.touches[0].pageY
            }).bind("touchend",
            function(t) {
                r(),
                s.isDoubleTap ? (s.el.trigger("doubleTap"), s = {}) : s.x2 && Math.abs(s.x1 - s.x2) > 30 || s.y2 && Math.abs(s.y1 - s.y2) > 30 ? (s.el.trigger("swipe") && s.el.trigger("swipe" + e(s.x1, s.x2, s.y1, s.y2)), s = {}) : "last" in s && (s.el.trigger("tap"), o = setTimeout(function() {
                    o = null,
                    s.el.trigger("singleTap"),
                    s = {}
                },
                250))
            }).bind("touchcancel",
            function() {
                o && clearTimeout(o),
                a && clearTimeout(a),
                a = o = null,
                s = {}
            })
        }),
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(n) {
            t.fn[n] = function(t) {
                return this.bind(n, t)
            }
        })
    } (e);
},
function(t, n, e) {
    var i = e(15);
    "string" == typeof i && (i = [[t.i, i, ""]]);
    e(7)(i, {});
    i.locals && (t.exports = i.locals)
},
function(t, n) {
    window.app.controller("ending",
    function($scope, $router) {
        var t, n, e, i, r;
        return e = $scope.$view.find("canvas")[0],
        i = e.getContext("2d"),
        n = window.ipImg,
        r = -1,
        $(".active-area").on("touchstart",
        function() {
            return  setTimeout(function() {
                return window.location.href = "https://eopa.baidu.com/novel?fr=pan_open"	// 设置网址的地方，百度小节
            },
            200)
        }),
        t = function() {
            var t;
            return i.drawImage(n, 0, 0),
            i.transform(.18, .115, -.16, .14, 573, 790),
            i.globalAlpha = .9,
            i.drawImage(r, 0, 0),
			console.log(i),
            t = $scope.$view.find(".ctn-0 img"),
			t[0].setAttribute('crossOrigin', 'anonymous'),
            t[0].onload = function() {
                return setTimeout(function() {
                    return t.css({
                        left: $(window).width() / 2 - t.width() / 2
                    }),
                    $scope.$view.css("opacity", 1)
                },
                100)
            },
            t[0].src = e.toDataURL()
        },
        $scope.onAdd = function(e) {	// 添加我写的字
            var i;
            return $scope.add(),
            $scope.$view.css("opacity", 0),
            i = e.data,
            n = window.ipImg,
            r = new Image,
            r.onload = function() {
                return t()
            },
            r.src = i	//这就是我写的字
        },
        $scope.onRemove = function(t) {
            return $scope.remove()
        }
    })
},
function(t, n, e) {
    window.app.controller("signature",
    function($scope, $router) {
        var t, n, i;
        return e.e(0).then(function() {
            return e(24)
        }.bind(null, e)).
        catch(e.oe),
        $(".active-area").on("touchstart",
        function() {
            return  setTimeout(function() {
                return window.location.href = "https://eopa.baidu.com/novel?fr=pan_open"	// 设置网址的地方，百度小节
            },
            200)
        }),
        t = function() {
            return window.PaintApp.clean()
        },
        n = function() {
            return  console.log("next"),
            $router.goto("/ending", window.PaintApp.getDataUrl())
        },
        $scope.$view.find(".clean-btn").on("touchstart", t).hide(),
        $scope.$view.find(".next-btn").on("touchstart", n),
        i = -1,
        $scope.onAdd = function(t) {
            return $scope.add(),
            window.PaintApp.init(),
            i = setInterval(function() {
                return PaintApp.aa() === !0 ? $scope.$view.find(".clean-btn").show() : $scope.$view.find(".clean-btn").hide()
            },
            300)
        },
        $scope.onRemove = function(t) {
            return $scope.$view.css("opacity", 0),
            clearInterval(i),
            setInterval(function() {
                return $scope.remove()
            },
            500)
        }
    })
},
function(t, n) {
    function e(t, n) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e],
            r = f[i.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
                for (; o < i.parts.length; o++) r.parts.push(u(i.parts[o], n))
            } else {
                for (var a = [], o = 0; o < i.parts.length; o++) a.push(u(i.parts[o], n));
                f[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function i(t) {
        for (var n = [], e = {},
        i = 0; i < t.length; i++) {
            var r = t[i],
            o = r[0],
            a = r[1],
            s = r[2],
            u = r[3],
            c = {
                css: a,
                media: s,
                sourceMap: u
            };
            e[o] ? e[o].parts.push(c) : n.push(e[o] = {
                id: o,
                parts: [c]
            })
        }
        return n
    }
    function r(t, n) {
        var e = p(),
        i = v[v.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? e.insertBefore(n, i.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild),
        v.push(n);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            e.appendChild(n)
        }
    }
    function o(t) {
        t.parentNode.removeChild(t);
        var n = v.indexOf(t);
        n >= 0 && v.splice(n, 1)
    }
    function a(t) {
        var n = document.createElement("style");
        return n.type = "text/css",
        r(t, n),
        n
    }
    function s(t) {
        var n = document.createElement("link");
        return n.rel = "stylesheet",
        r(t, n),
        n
    }
    function u(t, n) {
        var e, i, r;
        if (n.singleton) {
            var u = m++;
            e = h || (h = a(n)),
            i = c.bind(null, e, u, !1),
            r = c.bind(null, e, u, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = s(n), i = l.bind(null, e), r = function() {
            o(e),
            e.href && URL.revokeObjectURL(e.href)
        }) : (e = a(n), i = A.bind(null, e), r = function() {
            o(e)
        });
        return i(t),
        function(n) {
            if (n) {
                if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                i(t = n)
            } else r()
        }
    }
    function c(t, n, e, i) {
        var r = e ? "": i.css;
        if (t.styleSheet) t.styleSheet.cssText = C(n, r);
        else {
            var o = document.createTextNode(r),
            a = t.childNodes;
            a[n] && t.removeChild(a[n]),
            a.length ? t.insertBefore(o, a[n]) : t.appendChild(o)
        }
    }
    function A(t, n) {
        var e = n.css,
        i = n.media;
        if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = e;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e))
        }
    }
    function l(t, n) {
        var e = n.css,
        i = n.sourceMap;
        i && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var r = new Blob([e], {
            type: "text/css"
        }),
        o = t.href;
        t.href = URL.createObjectURL(r),
        o && URL.revokeObjectURL(o)
    }
    var f = {},
    g = function(t) {
        var n;
        return function() {
            return "undefined" == typeof n && (n = t.apply(this, arguments)),
            n
        }
    },
    d = g(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }),
    p = g(function() {
        return document.head || document.getElementsByTagName("head")[0]
    }),
    h = null,
    m = 0,
    v = [];
    t.exports = function(t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        n = n || {},
        "undefined" == typeof n.singleton && (n.singleton = d()),
        "undefined" == typeof n.insertAt && (n.insertAt = "bottom");
        var r = i(t);
        return e(r, n),
        function(t) {
            for (var o = [], a = 0; a < r.length; a++) {
                var s = r[a],
                u = f[s.id];
                u.refs--,
                o.push(u)
            }
            if (t) {
                var c = i(t);
                e(c, n)
            }
            for (var a = 0; a < o.length; a++) {
                var u = o[a];
                if (0 === u.refs) {
                    for (var A = 0; A < u.parts.length; A++) u.parts[A]();
                    delete f[u.id]
                }
            }
        }
    };
    var C = function() {
        var t = [];
        return function(n, e) {
            return t[n] = e,
            t.filter(Boolean).join("\n")
        }
    } ()
},
function(t, n) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], n = 0; n < this.length; n++) {
                var e = this[n];
                e[2] ? t.push("@media " + e[2] + "{" + e[1] + "}") : t.push(e[1])
            }
            return t.join("")
        },
        t.i = function(n, e) {
            "string" == typeof n && (n = [[null, n, ""]]);
            for (var i = {},
            r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0)
            }
            for (r = 0; r < n.length; r++) {
                var a = n[r];
                "number" == typeof a[0] && i[a[0]] || (e && !a[2] ? a[2] = e: e && (a[2] = "(" + a[2] + ") and (" + e + ")"), t.push(a))
            }
        },
        t
    }
},
function(t, n) { !
    function() {
        gb.module("gbDom", ["gbTool"],
        function() {}).service("_$dom",
        function($Signal, $htmlLoader) {
            function t() {
                document.addEventListener("DOMNodeInserted",
                function(t) {
                    return
                },
                !1),
                document.addEventListener("DOMNodeRemoved",
                function(t) {},
                !1),
                document.addEventListener("DOMAttrModified",
                function() {},
                !1)
            }
            var n = $("[gb-app]"),
            e = this;
            e.tplAddedSignal = new $Signal,
            e.addLoading = function(t, n) {
                n = null == n ? [] : n,
                e.addTpl(t, !0)
            },
            e.addTpl = function(t, i) {
                var r = t.tpl;
                $htmlLoader.load(r,
                function(t) {
                    var r = $(t),
                    o = r.attr("gb-controller");
                    n.append(r),
                    r.hide(),
                    e.tplAddedSignal.dispatch(o, r, i)
                })
            },
            t()
        })
    } ()
},
function(t, n) { (function() {
        var t, n, e, i, r, o, a, s, u;
        s = -1,
        t = -1,
        i = {},
        n = "",
        r = 1,
        a = !1,
        e = function(t) {
            return t.indexOf("#") !== -1 ? t.substring(t.indexOf("#") + 1) : ""
        },
        u = {
            _virtual: !1,
            init: function() {
                window.addEventListener("hashchange",
                function(t) {
                    if (u._virtual === !1) return u._onHashChange(e(t.oldURL), e(t.newURL))
                })
            },
            _onHashChange: function(e, r) {
                s = e,
                t = void 0 === i[r] ? n: r,
                u._virtual === !1 && history.replaceState({
                    page: t
                },
                "title", "#" + t),
                s !== t && o.onHashChange({
                    hash: t,
                    data: i[t]
                })
            },
            when: function(t, n) {
                return i[t] = n,
                o
            },
            otherwise: function(t) {
                return n = t,
                o
            },
            start: function() {
                return a === !0 ? o: (a = !0, u.init(), t = u._virtual === !1 ? e(window.location.href) : n, u._onHashChange( - 1, t), o)
            },
            goto: function(n) {
                a !== !1 && (s = t, t = n, this._virtual === !1 ? window.location.hash = n.split("?")[0] : u._onHashChange(s, t))
            },
            useVirtualRouter: function(t) {
                return u._virtual = t,
                o
            },
            onHashChange: function() {
                return console.log("Hash changed. pre:" + s + ", curr:" + t),
                o
            }
        },
        o = {
            when: u.when,
            otherwise: u.otherwise,
            start: u.start,
            goto: u.goto,
            useVirtualRouter: u.useVirtualRouter,
            onHashChange: u.onHashChange,
            getConfig: function(t) {
                return void 0 === t ? i: null !== i[t] ? i[t] : i[n]
            },
            preHash: function() {
                return s
            },
            currHash: function() {
                return t
            }
        },
        window.gbRouter = o
    }).call(this)
},
function(t, n) { !
    function() {
        gb.module("gbRouter", ["gbTool"],
        function() {}).service("$router",
        function($Signal) {
            function t() {
                gbRouter.onHashChange = n,
                gbRouter.start()
            }
            function n() {
                i.changeSignal.dispatch(gbRouter.preHash(), gbRouter.currHash())
            }
            var e, i = this,
            r = {},
            o = !1;
            this.changeSignal = new $Signal,
            this._gotoData,
            i.getTplConfig = function(t) {
                return gbRouter.getConfig(t)
            },
            i.isStart = !1,
            i.haveLoading = !1,
            i._start = function() {
                i.isStart || (i.isStart = !0, t())
            },
            i.getDefaultLibs = function() {
                var t = gbRouter.currHash(),
                n = gbRouter.getConfig(t).libs ? gbRouter.getConfig(t).libs: ["_forWebpack.css"];
                return n
            },
            i.goto = function(t, n) {
                i._gotoData = n,
                o ? gbRouter.goto(t) : window.location.hash = "#" + t
            },
            i.when = function(t, n) {
                return gbRouter.when(t, n),
                i
            },
            i.otherwise = function(t) {
                return e = t,
                gbRouter.otherwise(t),
                i
            },
            i.loading = function(t) {
                return i.haveLoading = !0,
                t.id = "default-loading",
                r = {
                    config: t,
                    isOpen: 0
                },
                i
            },
            i.getHash = function() {
                return gbRouter.currHash()
            },
            i.useVirtualRouter = function(t) {
                return gbRouter.useVirtualRouter(t),
                o = t,
                i
            },
            i.getLoadingConfig = function() {
                return r.config
            },
            i.getConfig = function() {
                return gbRouter.getConfig()["default-loading"] = r.config,
                gbRouter.getConfig()
            }
        })
    } ()
},
function(t, n) { !
    function() {
        var t = gb.module("gbScope", ["gbTool", "gbRouter"],
        function() {}).service("_$scopeMgr",
        function($libsLoader, $router, $Signal) {
            var n = this,
            e = {};
            n._loadingCtrlName = "",
            n._getScope = function(n) {
                var i = e[n];
                return t._createS(i)
            },
            n.createScope = function(i, r, o) {
                var a = o ? "_$scopeLoading": "$scope_" + i;
                e[i] = a,
                t.service(a,
                function($router) {
                    var t = this;
                    t.$view = r.hide(),
                    o && (n._loadingCtrlName = i, t.RESOURCE_NUM = 1, t._resourceLoadedNum = 0, t.resourceLoaded = function() {
                        t._resourceLoadedNum++;
                        var n = t._resourceLoadedNum / t.RESOURCE_NUM;
                        t.onLibsProgress(n),
                        1 == n && t.onLibsComplete()
                    },
                    t.onLibsProgress = function(t) {},
                    t.onLibsComplete = function() {},
                    t.loadLibs = function() {
                        $libsLoader.load($router.getDefaultLibs(), t.onLibsProgress,
                        function() {
                            t.onLibsComplete()
                        })
                    },
                    t.closeLoading = function() {
                        t.closeSignal.dispatch(),
                        t.onRemove()
                    },
                    t.closeSignal = new $Signal),
                    t.onAdd = function() {},
                    t.onRemove = function() {},
                    t.add = function() {
                        t.$view.show()
                    },
                    t.remove = function() {
                        t.$view.remove()
                    },
                    t._ctor = function() {
                        t.onAdd({
                            currHash: $router.getHash(),
                            data: $router._gotoData
                        })
                    }
                })
            }
        })
    } ()
},
function(t, n) { !
    function() {
        var t = gb.module("gbTool", []);
        t.service("$libsLoader",
        function() {
            function t(t, i, r) {
                function o() {
                    var i = t[s];
                    1 != n[i] ? i.indexOf(".css") == -1 && (e.onload = function() {
                        s++,
                        n[i] = 1,
                        s == t.length || o()
                    },
                    e.src = i) : (s++, s < a && o())
                }
                var a = t.length,
                s = 0,
                u = 0;
                if (0 == a) return i && i(1),
                void(r && r());
                var c = setInterval(function() {
                    u += .3 * (Math.abs(s / a * 100) - u),
                    u = Math.floor(u),
                    i && i(u),
                    u >= 92 && (u = 100, i && i(u), r && r(u), clearInterval(c))
                },
                20);
                a > 0 && o()
            }
            var n = {},
            e = new Image;
            this.load = function(n, e, i) {
                var r = "string" == typeof n ? [n] : n;
                t(r, e, i)
            }
        }),
        t.factory("$Signal",
        function() {
            function t() {
                var t = [];
                this.add = function(n, e) {
                    t.push({
                        fn: n,
                        scope: e,
                        addOnce: !1,
                        isDestroyed: !1
                    })
                },
                this.addOnce = function(n, e) {
                    t.push({
                        fn: n,
                        scope: e,
                        addOnce: !0,
                        isDestroyed: !1
                    })
                },
                this.dispatch = function() {
                    for (var n in t) {
                        var e = t[n].fn,
                        i = t[n].scope,
                        r = t[n].addOnce,
                        o = t[n].isDestroyed;
                        o || e.apply(i, arguments),
                        r && (t[n].isDestroyed = !0)
                    }
                }
            }
            return t
        }),
        t.service("$htmlLoader",
        function() {
            function t(t) {
                return t
            }
            var n = this,
            e = {};
            n.load = function(n, i) {
                if (null != window.__gbTplData__) for (var r in window.__gbTplData__) if (t(r) == t(n)) {
                    e[t(n)] = window.__gbTplData__[r],
                    i && i(window.__gbTplData__[r]);
                    break
                }
            },
            n.getHtml = function(n) {
                return e[t(n)]
            }
        })
    } ()
},
function(t, n, e) {
    function i(t) {
        return e(r(t))
    }
    function r(t) {
        var n = o[t];
        if (! (n + 1)) throw new Error("Cannot find module '" + t + "'.");
        return n
    }
    var o = {
        "./ending.html": 16,
        "./loading.html": 17,
        "./signature.html": 18
    };
    i.keys = function() {
        return Object.keys(o)
    },
    i.resolve = r,
    t.exports = i,
    i.id = 14
},
function(t, n, e) {
    n = t.exports = e(8)(),
    n.push([t.i, "body {\n  padding: 0;\n  margin: 0;\n  color: blue;\n  font-size: 0.24rem;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(" + e(0) + "); }\n\n.signature {\n  transition: .3s all ease-out; }\n  .signature .img0 {\n    position: absolute;\n    left: 0;\n    top: 58%;\n    margin-top: -0.9rem;\n    width: 7.2rem;\n    height: 1.8rem;\n    background-size: 7.2rem 1.8rem;\n    background-repeat: no-repeat;\n    background-image: url(" + e(19) + "); }\n  .signature .img1 {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: -1.325rem;\n    width: 7.2rem;\n    height: 2.65rem;\n    background-size: 7.2rem 2.65rem;\n    background-repeat: no-repeat;\n    background-image: url(" + e(20) + ");\n    transform: scale(0.8); }\n    .signature .img1 .active-area {\n      width: 4.1rem;\n      height: 1.16rem;\n      left: 1.5rem;\n      top: 1.51rem; }\n  .signature .signature-bg {\n    background-color: white; }\n  .signature .signature-bg:after {\n    content: ' ';\n    position: absolute;\n    left: 7%;\n    bottom: -0.02rem;\n    width: 86%;\n    height: 0.02rem;\n    background-color: #C4C4C4; }\n  .signature .clean-btn {\n    width: 2.33rem;\n    height: 0.74rem;\n    background-size: 2.33rem 0.74rem;\n    background-repeat: no-repeat;\n    background-image: url(" + e(22) + ");\n    left: 50%;\n    top: 2.545rem;\n    transform: translate3d(-50%, 0, 0) scale(0.5); }\n  .signature .next-btn {\n    width: 4.18rem;\n    height: 1.12rem;\n    background-size: 4.18rem 1.12rem;\n    background-repeat: no-repeat;\n    background-image: url(" + e(21) + ");\n    left: 50%;\n    margin-left: -2.09rem;\n    top: 72%; }\n  .signature .ctn0 {\n    height: 25%; }\n  .signature .ctn1 {\n    top: 25%;\n    height: 45%; }\n  .signature .ctn2 {\n    bottom: 0;\n    height: 30%; }\n\n.ctn {\n  position: absolute;\n  width: 100%;\n  left: 0; }\n\n.page {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(" + e(0) + "); }\n\ncanvas, .signature-bg {\n  width: 7.2rem;\n  height: 2.475rem; }\n\n.pa {\n  position: absolute; }\n\n.active-area {\n  opacity: 0;\n  background-color: #ff0000;\n  position: absolute; }\n", ""])
},
function(t, n) {
    t.exports = '<div class="ending page">\n    <div class="ctn-0 ctn">\n        <canvas width="1080" height="1920" style="display: none;height: auto !important;"></canvas>\n        <img src="" class="pa">\n        <div class="txt pa"></div>\n    </div>\n    <div class="ctn-1 ctn">\n        <div class="img1 pa">\n            <!--<a-->\n                    <!--onclick="_track(\'p_ending\', \'click\', \'ad_btn\');"-->\n                    <!--href="https://eopa.baidu.com/novel?fr=H5"-->\n            <!--&gt;-->\n                <div class="active-area"></div>\n            <!--</a>-->\n        </div>\n    </div>\n</div>'
},
function(t, n) {
    t.exports = "<div></div>"
},
function(t, n) {
    t.exports = '<div class="signature page">\n    <div class="ctn0 ctn">\n        <div class="img0"></div>\n    </div>\n    <div class="ctn1 ctn">\n        <div class="signature-bg pa"></div>\n        <canvas id="canvas" class="pa" width="640" height="220"></canvas>\n        <div class="clean-btn pa"></div>\n        <div class="next-btn pa"></div>\n    </div>\n    <div class="ctn2 ctn" style="display: none;">\n        <div class="img1">\n            <!--<a-->\n                    <!--onclick="_track(\'p_signature\', \'click\', \'ad_btn\');"-->\n                    <!--href="https://eopa.baidu.com/novel?fr=H5"-->\n            <!--&gt;-->\n                <div class="active-area"></div>\n            <!--</a>-->\n        </div>\n    </div>\n</div>'
},
function(t, n) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAC0CAMAAACKc+vLAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGxsbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgHx8fICAgHx8fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWFhICAgYWFhYmJiYWFhf39/g4ODg4ODg4ODgoKCenp6YmJifHx8g4ODeHh4g4ODAAAAICAgP/i1mwAAAP90Uk5Tjp1WL23Cp9PboyTAe2qgslx0sSiAm5SJLaU/5cmqmWG0NHplJTWVWHnfuLOkR0a2KqGpJkpQdetsZJpxb4W9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"
},
function(t, n) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtkAAAEJCAMAAAB2RcseAAABIFBMVEVHcEzd3d1UVFTMzMw6OjoxMTE4ODj+/v4iIiIpKSkXFxdAQEAmJiYuLi5jY2P////8/Pw/Pz8bGxtoaGj///9kZGSQkJAmJib///85OTlMTEyZmZlHR0eysrJSUlL////6+vrw8PAxMTEeHh6bm5v9/f1bW1vMzMx1dXX+/v5ERES0tLRMTEz7+/vPz896enr19fXz8/PDw8PX19dcXFz///+hoaFoaGj+/v6FhYV+fn6tra2QkJD+/v6Dg4NpaWnEVHHJUnGcW2z5R3XxWoHshJ72RnTtbY7pwcv////norTvRHDw5+nj29759/fUd4/jQWvfWHu/kZ3TPGO/sLO1cIPBOVyULkiikpaxM1OQdXzRysx5U1xVHStvIjZfNUD4q+5cAAAAQHRSTlMADScDZZN8Bum9/0LWqnwQGMf+WiDARfsq7Nt9r2GaR1Q5+vy6P9p66mz7l/SHoKGpv9PB91zf8ZadzN3me+6qsIc6XQAALctJREFUeAHsmotiojoTgAlBg6MWjKzgWquCVKHqesFLq/a8/1v9JQFEBKGe/9z5znWzBunsxzDJRPgng0QsfBNRQsJ/HOxTILiVajK8fGLJ/xEsVr4QE6OkKtd49ItCJBkqf0u1iVT7oo6FQoj1el3ED4ay1mg0mrlBwE8AclPC8VtsfFElwv+PEqUGXySdVFsAQGti8YRd8yc8EeHvh9qAL2pKMTlloNAQhUcgbeoHoU3yYiUD+xy+Dje01PiNCL+PEo0F9YcqxMEdnQe/qKnkCXy+qcSf8gbGRhe++Knlvbf8rI6YnHKnXslAuhMR1GNm93KSNnoGH7l/uZT2k92icZG/2RB/X2xKjJ/MbO06+C/g0x0goRho2AWfVuEJdanC3t0VSfyDzR5xs417dW+Y1bmcZr8GGViqkIlSyGzMHh6gY/titnFttli1AFqKUPJ/N1trgM94RDJXiwmeXsGHPksJ0upbjKoNC0Lk1PIci83at4i+CCcIzcYJhAj1B8/qkdmTLmRAR/j3mU1EHtupo2FUaaKE2Sw4Mvj8v0u70uworbiOmp3kElALbsgqUPgfXQy5jrPe2cV5UYKJzcY1Mrs1q5HkUlho3GwjMvst02zrymxU5+vNfLOTP9dsbqB6A6BCEmaLUXDkjlDyfzIbi3WG2GKyvvbrF0ScLM6LYXaSqQdJkIAm1eZ59Hv8UKNl3DUU0mmpmWZPppTPoroVoPOBro2FCNQESqGmfMNs/MSuoy9sRbqsIyOzxQr3mptNhJL/i9mkDTSA5yd6AaBNkpMKYfZJ8qX9C26QxaTa2rfN1qJlXD5cpGyzneXKZQauVwEbl1fHxs0D3jWKm4073NzxUFFeop88NLvdtCDE8haj/5PZpdnKE9zhSfk/ma0GZuuuNzOBQ5/R38nsvmFvd7xqGNqDgT2wh/wn3m/Vm9h1RzjTbIzqVYmkFtnKcMZfHUp4IT3m9X59GKpYKPm/mK2+wx3e1eQk14sAADrz0viwU822vONqeViujm6geSf5qcmrl4YFkP5lbyo3u6/TBMC4GX29YzbCqrMHnxrCX4g18HHnBi5qNhKlatNfKFvtaA6qhUU2EYi90MGnSpKZQt9vDltD+T+IXZr9s1klBc3GYh2zSXR3CDmxfLY8pLDVcIrZ7vrgDEbGaOAsZwBpTR5knw8p7Ch3Y3VIcLaVYN5incBlMzbJ4YmWbTYRiLEwIWhX4SDVmgsbCQXMxqK/pcm9jSXx6Pngl1G2H8FDja/M1j838+Fzo/L4hnYJrtdFHlSWWbjZlptg5loXs5FUA1nlk95tg9PTmRkDIwWVCAnUnrlfbkfsN4g6WPAs/Kwk7k3RjFv6MpdlPDSSBCkOq/b2mjMz2zsnhocGume2gAZHfmeNtsQltXZDVbhrtj+BtmoyhRi0FzxzkgyMj55UrVSatUaX8i9QYma7p+V8aPjluFWTSrcfA7eBymFqoTLiZrurZYKVG5mNqqzkDsxW4+1rmL0U69cpg/l8ENWQ6taNyuRcUAsY060qZIGREgcpNt/PHinXICLcNRur2124kg7EdjScbTYW288ZKw3+CHXk9A1SCi+jwGzqHZfngYZIXw+e9kcoUV4gzrPGzO5uRwm23chj9TdWe9qR2fd2nmkHp6qnGgaKtQhfC5tNqoErCwNn9cnrN7TZ7Xc79RvwPbMFrDknKybo0dGIkGq2WJeqtQYFoHfMxlzfNPQei4E+XR8cWyPRMvg3TXiEEvU1IeJ7/OUac+9itjLRASjtvfKRaIc2naz9L4wTehQ0u60HtcgAZR/MojfwSbdAhdwzWyDGeQ8RUy72jdlUbzQsSIPqZtxsYwxZtFgMvMNwpPJvfmfzeYC/Swk/h2OaEPIzMFvINpsM9kzDi9mY63YLXzrlM+Lz3/PNFhvA2Gf2RklHhm/QUu9VI3WpqVOIsOSmVEfxE+zSk5nVCrLc2XS3Xu3i+56qY0IcSk3T5WsYYDF4tRUc3/K3eqXZD4EN04+7G0XW6ibN5sTMFnjikWfhCBHl205fmCb7qPApQWuiCjkoTX7V7sIgWRfrm1AU7nKG2aLUTEvEVqNZ9buxhO99pON6p+N6eZg72+EHDyi/XWJPgVJLd11v/3k6HtfrzWa5mkbRo2HLhxd9PNk/QAnuWwAwY5LueYct32xl6LJFEB/h+2EM77gLOX5yKfZR0ZDflHvN/SypAOejrwgZoP+P2VS/qpnNxEUlojYgBcq3CdeHszO0DU1F/LpdOyx6Jrv1ZrVaflk/Pztf4g8H9mDhAug75rc+isxmEZ/xZP9dSnCPHQ7Z+//+OBY0m9g/YjvcXGyGvnBCgvNEHm9r3AUHvQvrLe+zRIIAS/d3enGq2aMZWAxfT123YuhW7Nf0rtlxqLvbbD71+MgT26VLSO197tZH9li8jTQVEX7dq4ULGm17v349BVQlxvsMvM2B72zXgrEqD8qPx9rrJSJ75U1fWRDnLlifp3yzBe2NXszmYnMaHZWhteVYPyIHsRZu4ylCNolynrYJkWqpx2ON84rhAXWnx80qYuN9MV2FuOAz1jKqES8ql6frpTPczpc7z4wy/VYxuIkc3fv8+ia/+nhLdNcTZmPUoVGtdvmvvhja4+uKjvL4Glj4PiWk02J/ur7Z9MdwMV0fxvlmY2VoRmYHlYQ54806xHfmLD64GSi5t1BvAGOWm97b8lXroyODVRFvzVYMdszjzeLrhlbPtu0BG6Fsd21gs79+Ax8vfJy0967ruu9G0Eak5tr0c753Wi/n25GKFG3gHDbHqUnZ62VE+P4o1XV288s5rz60XtLsV/b70WYTuXkjBAtFZdJNqW0mqvAAJejJjyZd/OQvvoEztN8L5GxivwLovOnIbdM3Gy57TcSC2Ay3nPMP9BDJgmLpHYsyxM3WWKqXU3p02Ed5hhC5Ion+yK9gSYZ9+BOpL0Y46h0tl4tJRxTF3kw3dW8xNfen9WIx6XdETqfTnyyWm9Pe3W8VQZ14bO/DYwEbairCyXMjiWPXWae1+INK7LEFCfSxTYQHKFFffB+tMzdbU1RFDcxGCSKzGcab97n2IMJcO07wMm3UJTkc3H5H7Jz0TsKqR2ffa/VfAif8Z4lz55xgoykKamh2rLU0HSqX3pH9InNMXddN2TS7ppxEr03Oh4NjYAGNzoe5M3SS3fUcs5UsswV1e3Tp1eDsK4LCI5RozJauc3PWj94AcbMV+3w+s9fs3uQOa5rzCfE+NLibfLFxOxDbW+ak92idah1P7AYnLQjQq0i4RXWO07goTyTcRuMLO/m2kam2LlIBDf8nAW1rhqEhfqhFU5HxTbN5ztZP0TbSJw3MJp3JYnf6jNhtDluNCI9QYrBi5HV7MVspdtZP0TTeKD4eLe4wMc5TiOFtcksRjFGg6/QwUHChahxO8w8m2NvCg5DblSSRai+T+XJ9CuWmfUWN778Z4xkF+jFAiXZiDlxaHC4HBQHnmc1fdj8SOdtcOAHnRWA2qcpfjOchZ2c4Kg+xPooxPnmmNR4+cD5bfGbpdnze7Xm+JaOFCxGzxf/YOx/GNH2tAROjjUZdUsYGtl0FKa1Y6ZyIuiru+3+r18BRQxStd13rvW+e398Vh0wfj4eT5ARcPQa6B7Ej70SO3ayDV8u0+y0XrBstehTw93qliCS8fn+bjuLV0BdB00XWjXQvx5P5eDIJLeN8s5khc8JsDGbDE+3GgSyes7nlZNBvxLM2cHQFmdbZaHg3nccvbnB2zN4u0P3tJWHmMG7WWqa0qrFT3mpBXR4/OyU2qdqbiJ06DpjNvTCe0Q2tQtgmeZZjmvXrTO4efXBwIS8g3EuiF4/sS2oPyuidZTaQzbk1/1jFmO3f1TZcw1nly4OeUZS2kXE+mjxXDALLU2O22dvD3JkNa6uhWsV5Nsu+tZ+T+q1atVnBp8Yeey+nxL4ytxHbIRaYjQjvRuMBBcxaRfkygHpx/W4t9+KJG9+LeQFmjnVI0smvUQlj83yz0ReYEVNaGzEPmo2rDfpXHbc0mBDsqDF7EO8x2JiNMXgN7whq1hrwA4UsONVbjbLojW99miUK7PgQZZsCQmxja7aBkVMI27sVWfzWphKtn12HkHxNADgGefIBSR9d7zDB85vN9m+rjXatVq1W2/X8fpeX10YUs8FreFQd/lCa91kH2Qm7CqE0P7tFgWzxiE9l/Mmi31P9LmljCeHrxsNHU+wWlSK2IZktSnVSti19d7PuqFAZaVjEQD/BsRMvQ/260T78V+tt2YhcuQE6LjIAdNrsishDAP/LX+Qjmr2Y3QkQKf4V7Mx2HmkZYt58GsXLAS3y86BODMx2Tha8Bf5UiF00Ow/bk71sG/MgFJWRIVj0ahkGzyrYPRedeBlKMc23m/38jUqYrx5W/tD+joLZj06lJkWOAUxD1/x9zD49BulkD7FX+yNm2fI9y+mmo3Ghltx5KjHbzt/MI1XstjQYlIktmy0g3J0vbQrcMRiCRMgJkvV1rMR12M/WZtDxJkBY4V/URp4fqMTgyWo2caE2Ev/asMne4UTXvvT7piP4Q2v+PmafNpuLfHMSx6aQ2d6Ol/WoPby+/yrSX8tLRMSc9MButSsDgLoPqzVP1rF+3MAghlEL1WwDMy/d3Ejat9wgtdaOzlCY7Xdaa6ig11Jpo/c327998uUKaPBFrNWt4F09+6kbdLswm0U22yx6HfCPE1vHbOQOB4t5kqWts1Wmy2QZxyCXL24YEbOCJJ2LORbDgW2XuIstN03TMGBHZmMDUDNXzAaIlYz60HYJFW8D6Gl8XnwZ/F4pZ1T93OGglzGcLeZd6z47c5VI3UwAdiubLd+vfLTXOmZjJ41CLy8r92N/sFrE8zSR6+D1VrtaEQVFN4zm8filLFckLBuQKFupux3t9pcRLKJSzAYwC7IbyVloYbjSt+N7uFj1i8tYnFH189JRnDGKQo/BNX9hG7PN1pY6VcyG9lBh8B0yGM0HxWwDOQ4nVr50PXwZRWHX49YfpSDiN64qBHHHC9yA4/JEumKUYj3bVDAYp1DxLjEbbiQnkUeMvzb7Mewexn0+w2zuQLbhOZwY1g3oC2bL3yamGrPNwSqeJx7nDVqvNZHxMeiYDevO8fdedqfkeF4WdfntY8+kBaD5M0EIl+bRrXq9Xeo2c6d5JgIpdpnZkNlEaSB+5t1QU8U3KeDbZhHaC3BR0rtaCddnjUFiQggiZDc/h/ouOlX1g3YjrsNw3pvE/LBRSB2z5bE122VQW0BB9EvMXPblDhrsTa1DWqgsoFthn/YW0HKn1GyAWVb2I+dlrBLvat7D5TgeF3hxJLMB89Bfa84xW8arQ3fik2YPYtFuBOHtSuVry/ggdMyWZnzeBFhayeKG89F4OuttJHJPTHPidTm2H4A4L8s4dOA0qtklHUyI5yYKv3t0i935+ZRIuB5719rIj57pmx1lxfmPzOZHb1c8mcwmM8H6v8V6drjpFZf3iDK/fajZOmbD9kyvDiTLOEt2Odi9nPTEQQ+f3qwFWn6UgLyky4lx2mwZIioO8Nca9rVBi/jtr4ghgBH8nmaTIFrXqEXCD0iTR14dqZ4931CsZ99sv0FQPhvg53uarWN272tT4WtPNhumHPnPPO9uUxc9OFBmFXdEvS9ezDqldWplBoX5WP5AxBA2TptdDoIZGJvW1EDrqlI6BmmWctDsx3xXB7ytrgfdwGHq/oMwZWVXz/acHO/ZLJnrl/cOfdceUTpmmweQzYYBvaHLNn1woJLdrOQTCLsh3M8dgXQ79K2tof4zsytNaWOM4a+435MDt1x2kKt+4zKmB/Psb1Rwh8p34q3cmzSzmRlKbzX4tWK23CPKFr9J85/inDU/G0I25BsQkQAzm9mHRWJysqs59p5t6MbwD8zGosWTVFvrz5MkiqdD6VrVwA2ZbpqU8HLIbOsnfAs0aodpb2ZCDrOyPpPMBoFls3tKJx3I2D8GvecBLF+0nyyI30VM6A92Cp6MZ5MJTHR6N7Nho8li47LhOAqYaKwwGk9susWuNfFeg3xPStNZpVJBAL87lI1wGEc/zYOD5ZiNK1c1sdVgK7uQHwiCfwsmFrZbVPD4gZ10dMzGqCV1NiPejUn3MOsl07KVGvR8DrWP9zIbV2qNrdXAYDpPxLNgwr1kXuj25De+YsVsRz5Zq15vCRqNRss8VMtE3T59E5OQG3LM3q6OgNBsHXzlX9+1k46O2fZkDxvM3nU0sJ+dTU+mxWoysOkeDXZ6SQ8Uud7NbNamRfzhdBR6HG+rk240kqfZ+rzcbLLfZLbjqkNE6YS+gSEsTdvGbC6b/BgQfmhr1XfupKNj9mA0VxgNdmbzP4VeHcjphul8NF6shrZigWW8L6fNVtOpwWo8L84sIsjqpqPFUGpZWWo2CmTb5KnW8mOivk9PYK8i6KfCtmbfStuIPTtGSScdZLwnup7tOgpuRzI7WRZ6dWCymf30a7wO3r70VfrxZrPkkcod+SLYDUcCIysI5+OJD1KVm40DtcTdFzmFqnYaL2eTI6wWoxSmdO1iNvrRoUBv6rLstmNiFztgQi+i90SPQWLDkP6ROsPDPgDqpgMEccvrJmk2DDkw837YnxCziffsZ1rMpkLrwAKjimQJ93jmFyozziMsAd7hvFKplG1PFodud4kocs6PkIoBc0MapKRDj5DgdZKNQvancWLhbDLuPF7sGMeR+3eddDTW03SNy/NZSGsgjkk4z9lDGNjz0n8tBC8AQ/AexdPZ0Ibh9XfG+j1Yc1NaDWNJf9hfxKN56HqS1iqYiZvJ2fDFwcWXofBx5E/jHNESfDzKb0T3wIhbzhEsRqRPnhikTB1sWEk0F0QhjLNi5nSTcIvb/dvtIDXMS8Iwf9OI44bh/mIAzALxWjtk8xvCpKxWRxh3vMxu6If9rkBryVFaWg3DTjjPGqOWTPwG4GYyCpDyMniSu5g4MAkFVPvrpQDSICXi4P32QjFBjHH4izGivf5bMGKcM7IRkytOQFiCh2Qgfvw9Rtzxuh4z/gGEO57nOeXnRpYky8naDMN7L4MMQQJxgDP011rLo5SneC+tNfgfNDL5V1eK8b/6U2uhNDrq/L9Co9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRYNysVq90F2jN/xok69zn643fNP9jsC/KljKV5jkBHDcbgioxNJrzwZUzgEZ11SNIzaH4z0JXJdQ2TdqSjp+A3VNBi1/Gy9RcU0GG5r8EUqufQRNDs5py6rzEbNRWGsGTak2mqraQ5N+ooONcgNa1Rt03TbPeap/61sH4qrbmChmfioZf0zPIdpS1rk/s+1JZg1Wz8XdbaQTPfVrEbleV3Q2gN/Vne932KQDbqZ5uC27qu4vP7zVyBj/5yd9i/2jX11SJavZmG4s/DBTwfKpiNpr40swmzbqyudQVOfbwW1O+u9D875j9nIlwxxWz0a0tt71UzQZAm0sxG/bHVjmmNtuYzYzPROO8mn6Obdu+jC3wN+Ta3XJh3MMAoBm9gUSv/9SDjlOK2d1HKhi4DJRRzAbMK3JRZu81UYZCpjb7wuHJ6FfOavVLJu6vWf4CplRwk3V94u58JPi1hI2jR4J4lBOWmI2daOabPvQkLY3ZoM3FmM2uac5gOZ0uh5utdZg2+9IhltftBuu/fpu0c9sN4C/YD9yHn7h5AvKQSYa54wl+5NvPPiTi/+/qXwJP4Pw4YDZsTjQej+ddbuQgMLu/EEz7g22uzS7IbOgzbK5GURimo2mutv0da7MvHiwg+Zduu0JwznY/cLwGtqIZhFxqJcLuNh3PMarZlNbzd5uUmS3aEYtN6rBRjNkPabgmjUawayOUFS7DbAZ7E6+iwOLcCtL+pkh0wmxfm30ZoDuoRl8ReWcgsJI3qOA1kPtQw5YeLx4B8a/ZcbMNXNgqDGK2+dPhAicI41xt845djNn8Lr8GyKGIAztm/+HlZvt0TU9vMHMZ8N8mzYG6G5OsXJsrjvZSy9gBW3osXWagHz2oVB83G1Bi9k+QhHB3KneUvwizrTwNu+ki8NYdUMG3UrPhxdBmXwg8GQ/luptsNuaZxOYrvL3y9mLD0MIG6j7kAf87PsNspJhtYB728pbo37FqNq7II/cqcBhGMcvATTjHkVM0KweLojfe9qI7ecy2TppNDM0FgK1kvrSlUTZhJWSLJJe4J3eWxrtcJNsgfQK7Ih4xGzezXbOqZD9mAwS2GKj/IEWzK7V6fltWrx0QE1Xb4rDAb1QrSjU6e9Imxk14kNmq7vsPz5CfASkbmcqbGhMYSS3fgJRosy8LzIJ0E7ZNu0r4z813Kub1/ZD9tb7JRaBVvA33fqVmY9YoFsyIZHbRo55sttnxqnW6RQxuKu62qITyACja3fGaT7c0lI8HRrWy4XPnZ3FKANw227fa7P8GyFW7grPdJFY+1Gv5zmzDu8kLI5ZkU+7aLLUqlWazWq19s2FeXonZUspqyTH7tNm0c29SCb+oNmpTlTbay5PvrqmEMuEQV1qUljwFf7a3iRZ8VUFhX5t94cDbZV+hPGxnb4v/YIHZ4v1xUrGjy0NAdjOEwLVOo1Wv+5J45j0pNdsBs52yPBs8VM32fSoBkgEYNeg+DaTkyWbxFFAyB4gqNjV3aiN3In0Y8Ka6/eBgbfbFgyv1zXcwcZLRTJT3Esb/bN8fJHYrWia7dHg74Gya1FS1Q6fNLo3ZXi5OJ5DN3j4VkGXzgCS2KT2ijYpmK+eA7ALYiW33TPXTg50XGw5eoe0nepYw44TZ9U83WwOpIzXbFQPzbrS0Z6mDc606WRmXMMd1HbK70XukZZh37KTZpXk21Fvoo4cVswfT8XjR9zfaGQC53zg5W4zXj5j4kriK2eZkIR5BN+mWWsmns0Ucj5c95dPD3Cmc1GzV4X+GkYNPmd35dLM1/LYn3XwhL5yL7Y02ZuPNGAuR9jh6Ng847Zv5uPN/GLPl73qpng1D22mShPOxLXkrT/kexPMwyR4xgNyBq2bbC/GQcL6EVPp7cTo1tafz0HWTKB7AcQzHrXBq0wIzsW1TKcTrSN87n4iGdUd9qWpALM9CkPKC2SosGVIgL6TNVtPFGKy6/0/zbHS18TRhktkwtM0Yd8IVJPOsGG6Ho8ThjDHuJSAmyC+ZvQg9Lh4RTfJzbIsd13A89ThCzEoWuen3yNiqHU/oDn8aBcw4Zfbnr5fQZBnIYiCFbXlDW+/w6OGDPRhOZqvlIte5H4VhEj5kmfnt05kx+9vX5ppqbZu8P3ikYPYg8kgh572xChNM7Zcug6+W7TDmNS+a3Q8tknv3IK1/gGKHdBzzcKKkK8Ry5eyr9+odHw/SZl8OyAlHfRO8grsvpyNpqMLdl9FoPo/SMM0fFnDGrHBAe8vYPTfPNgV0Rz/hRsHs7ebjqDuUV0bCdBX6mhfVQcz8IXWnYLb97JCN+zaF6xOgP/DhgOMGBvU7XrHEWVLv1mZfftge9wp3X/n7880pm/oaeI5jcR7AByAfrlnGaWCdmWeriNvXjdlg5a4CXhgRZGClvKMqCV6pwPyO5ScdbOUn3Y4c9/n1pj6NAX5bnKdKrkwKlJTUtdkXHrbjWa5NPpUn89P8Zp3Y7NGTQjsLkq6F0Hl5tko/8pCypsbd1fDkOVKYy9YCmMPd7U9UeNIAG4AnXwZ28njca+3oUHkdI7qiwGQx88vV1mZfcNieiyKAvQjIdhIr/W0ZpahmwyRV8jcxezAFsWWzg5KVkQ5E34JD7MmHPFp+0kd4UuUypGswqQyYDXm4oLeYR/N4YtJiRNdmXz4YeWE8pMuEY2F2LuUTPzxp7qoKfMmLt1+qGyrovDxbwhws49BBpWvX1Z/kCpnFjAm7cF/K5Sf9Vmb2D5MeBq6atyBgx6FnOcl86p9YLgZmm59rtgY1axL3f/q9b/c1wRVYU1OoEhHHaDkNfm7MHkwy+tN4lAacGGeZDc8EyBUXq2C2ddhsdHvEbOkmdTh3OTEw81JQG+rdJWZDVenT0JBmg1Jz+9caU/1qNuW/8jsz9oWW03HOzbOno7kgCl2PQ8D+C7PRu5oNN5j+pq6InbAPNXVklODdwPk/Dw36fkPPANJP/vuY2d65Mft34AgsjsDgM82+KcbsHzD+8zazIXeZrBT6+ZxdSOUfk21pBWrqUr1bxfl8szXox2eYXT4/+0yzh/IJAQxLx3/zN5iNcZB7+jqPFBIHi7lfPSqQpvYhF57VOmK27/83mq3NZk83A2A4yOy0B1u+nRGz/9Js51GpU0hFbv+JvSVm4wDifmApcFjTqa6gwbuqYQlWOPr1axRaxuehId7z6gDLCczXWK5UXgNkIC8dbfg1oGsmv0bAPLHOyLP/0uzfB1JeKHJ3uuSk2QJP/XRIgNnKJTqnzEZO0O0GDjI+FV3EDtMoVf6OXoYwavKiHkkTCxuYOd6GJIt5j663wWIfE7PV9S7K1L1XD7/JbOe3MmtVMTsP6ddSAPZstUKugjOMT0SDMePWHt41Bfy774e+pPdLXPL49ofl2WSz3uUaqetjYET+tNn8qad26oPVc7DkWF2oAPMLzWNjWBVYIa+5LCoNusOE91hFNVvS4sNiNnYelCW7uAkDKzMXvc1s1J2pC4Nxs7FV2XlVhtNRDaZzP/HyVaU+pX4NGZqLgoAcW+q1ilHOAbOD18lsMnvi/zzPNngCWlK7Vq2gSrVdh6HwFwefNhtmxvqbtZHrU6BK86rhi4uCKeJP9u4oRpWrFs2RFvIrkKopdyLWXAhkO/1/1du6fYVOmg07uVSvahUriebzNED/NmaDloPCmh7AfwDvTpttIPdVPoVvFpp8o658dPcMvRfr1CYSF7G9jkb6Is7pjUdx36dAq0qOm/3lqt1o1W265p5xMe7C8L/Ns0G8lx7dZxla+K1mYyud0H3AbGyFM1oAxC4J2TC4IzA9Q3MxXrc3Lg/GiedGMLVN6vYng0SMvrfpFlPpePePY7aAu/GQKtjT1CHGW802iBfNSsbWS46KV6c8IHtDsF9PiboQcLXhU2AYu5wwJ5kvBhTw25Wt0iLpaDRa0GlE4dGSNwf7h3k2LJEZrXwqM4lDEPuU2QAKoqVd9Hqyi8nIU4/a/Tjh5dbCbS3UHTWfP+evTjeY/XlXvHWYeeFouZduoxo9xrWFK9Vms7Lma71g9sNA8LCRDAeP2TAmjBbuw5+HgzWvTtlPoGlbvBqAe/5gNp67FpE8+zkQSDU6Cy5jdw4xfXc53OhrD/riHPjgUbM3XMWReHVK4UnfFK/hpw9CatYitltS9B0sooBheJuCdC/dtu5oGabZW2vH69T062t8KvdIZ240Go0il2+tC0dr0tIFs6gbZaOavPQnAuS46Wi8WCzF+vlRlHhM0g52Hom6zACwfBkAsbq7U8TrczgMlx2dp66DsFEOcdLxYjoWnS0+Fa11u+VTCXs1Ch0kv63ReGhSoF0RQW/faLGUvb9cjH8J7TybAoXVXiTbBMThZOuk5a2RLFKAsU5OjvwEzuMmYZqGoRvIZ5OfFH6qXgaAd6dIup4F5yg5Cl4fUdsNQ/eTR9c16J7K+P04DTguvK1OMl/2pK5h7MmWKmG9zOh4NBIr2d1u4HDi3RSs/xZsJFIHnbH4uxQ4jo/9BCCIcW5xhoihgrGhDnWrP5FPwRmIe/poKRgxDo/7NDQwyyOnt4oj10J7odNL45lJN71ZSXdtrt8bQJAWRidu4DmZWcI7WIcLDKD0q9F8JKz7sC0ITEeRezA3IBb02jGzhqzO82odpSFIe44FShu40HMamLwEyNBoPhoYiugNl/E87JbmkMwJRXVtEnIsPg3hRuk8SCvw25tJzmw1nneZodF8PNh7Gc4W2S0/J0cexoNoscx32MKMZ0qXwYJ0DqRQZtBoPhwUpFF44pYfqmsJFOhOgJnlAPwzvNZowENYXHvygRwZ/8cuvdQACMUAAFsQwAVB4+vfEhZedlqWVkPX6DwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsSW9bUJHnRWf3EdRmP51httlmY7bZZmO22ZhtNmabbTZmm43ZZpuN2WZjttmYbbbZmG222WabbTZmm43ZZmO22WZjttlmY7bZmG02ZpuN2UNmv9/P3hksqIo7e/ix7rYbtTBUEqPBhADi+7/FNSTSAYkHZ07Pf1OfPYsWOszi83eKSoh7+ODs/b+4kgfIbDL7vwDKI6vwg7OP+I/FPnIhRAl/OKt88HIOjG/vyextkNmwryRj7ARbvfYnZ9TGSghxzGcynpinUrt3oGCSyRe18cikZEcks8nsTeCBefh5k9qKvztZMRa8z4Bfkj24vDUbdBxl9VNRazKbzN6Euo62bQxDXTPPevECZhzqmhVXRbPzduZHUYJ5jt9k9jYos23DPNvqEW3H0JYn+Cdm4z83GysWqJDMJrM3AKCtYB5x3pLwrg3Rqf7bzIazZAF5AjKbzN4CuvZPaQjlxLkQwa/yyR7KIxf8AL+Z2XhkT8SZzCazN6Ftx0bOkGt5yCfM/+fNnmD8fIgp/nuZPdUi2+8IyGwyG0w/utQZyAh5ZO/4usSmxdJJKA8LLnI89XRYsH9vNhyYR7Yi848LmU1mw/7wytWHtmijcC/K6Zq9QRbXdbMBOdvIAd+ZjaVknubWhisegMxeQGbjMWuoZEtiPOqOvSNr9vdms2sVPnWCP16CebgQgo+zPlCGcbrB2Zp5XqZxyGwyWwv2Cd1DOdBXGQlezelsphrBr83Xuug4GbPkhDs486B675QZxJraZDaZDaZj24lTfsreRu6jVuJ+mzG4rNn8M7PVlS25qmdis96qHbqerxUkZDZlthGfm43KOM+FeVrrHlyrLxfQOme2aboFsdDolhQqa/ZT7NZq8B+yXq71KMlsyuyL+CNdJ55cdfizHUCcLOmsBgDfLhEHAJ+cObNB2+E2J2jZ3BYMLphddCPjSaJ7ULtTFLkZNIQx2/jObOUVmU11tr0Hbvf+nqFp/OERqxa9P9kbjFOCsaWxanZU28xxRTDbmTlaQQj58EkYT+pH5S/sKba/bFSbBfgByGwPmR1tcyNfNb+4Nbx+vL46j1GTPHAKiln1Y/kVR+Wj2f96DhKUNg/seFLhjPk6LsWepTY7lnsym8yOAOCD0le8QqMH5j94CdYofwiW61etBm95KEzcMrP/6hwkHjgbkW0QO4Da9pwFeIVkNpn9uiT0BPkZR6HX1tq1Dn9OKQx8ZjZ+ZLaSLFAX32XKuXimtrgoMjuBzNaX/Iq972DNdaZfTOnaKpgKkzoW4eqXMltfWIBLJh+w+DMytbjJ7BQyO9SycmUNVCxGeJE6A2cRTDL7ByWP95Kw+83M1rZmWbpGMtlajWR2ApmNLvdsDMRCpXbJIdiHN+VRcA/zXKwqd79aZ5uhY02XMfvWd40v+hPIbDIbdJF5+hG+2UihYfEM4gJh9Zlzv2RK/VJm79C0/S1ntrVDEJvMJrMTlO3Wn8ZVVVDeJnoCFpwtKZyqQlN5NbOhrFaoQ0+lWgMWZp+rIxeF7V5mLfl4OaP0SylCZpPZYBrmEct8DQU1awwsipcFjVXn0AdUa2ZDOPgJB5yZLZnnZEaz61tC/bwczUGS2a9oG9WBtb0PZKF3KabxLQnedXVIXSYGjRULiq2a/f2x2VcV149XMnnTBbOdmbBdvqIhs8ns6R5SrTWza4eL4qW/32+e5tluwxjZvV6rs/FLfG42lIeKR60XZiceazKbzP78HjI2s1uziHLtrPO5WT0X3qn4GWgc6lWzP8/sWN78wWz4FuMBMpvMXkdZwTwXfG1mC6uWEf8AAKPYjdWxbOFWw5rZYNp6QcdGeJ3BKS1YCu+a3pkXs7/4mwYMmU1mg4sWq9dmduNwt8JT7HrQeBbTbPuq2doOwy193aLZ/W1xIL4Gg8HiSN3fb4PVL2bHzmFBZpPZGXTxsjcULO8fM2IbxGPsKutMPxuUnmGmuDfh91Ol5yCYOmR1fITGGa2i7V1i9jX8LyKZTWavg7ZbLB6B5P4x/2xw58U+xAA2+ObJg5STjH+sYTxQjduqwkSczJRd09/DKBr9m8vMhnNYQOvI7AxkNph2cQ8J33Jaw7cE9iKKfXcIpXw2tTfNridP6RqMg63M7Ss7ViBDMgpEs011PFYjgr3dG4XMJrNBFXx+D6mqWGKsqHngk9gqehoCeIvZ8Mz73ql0tv4E87O0c0Yrl44SzXaczWhMWQKZTWa/bWkLNQ/W9jUPoWKBenAKUEwBvG0V609PRUG4csdW1hoCIkIcZZHZtmMp3H5zJqoSyGwyewXTzqJzauQtzYRSzMQ+Tk3tbWv98DD1VOKVTM+z+9GDWcvsC0tp3TW77QiZTWYry9N5yFzLDw4yeRxxEptdNGx68uBZlYufZ76U63P70a9mducK9oNorb4yzxXJbDI7X47wMyQtv+XaUFAsINtJ7ECFmzL7Z48n/BnTttMYWzLbFJ1HSinq9m7jjL50ZDaZnW9pd1cDmSUjwbRLNNOLvY9iJ1oq2zZNU+TMRjHt8QQ/b+qhZiMH2JDZtTHDLTJYp0CNfy3IbDI7t0pbNv0tfR6dF3qhGqhRwu5uNU69P5lsZY3GDoN1+H5P99bOBobMFn2ZzNZKG48zRiuEnY7CA5m9gMyOet0GaxQmkf3a8kMzdLIZnIKk91enaivtdVs1G4/pHk8J0xZ94gx/rrN1ODTN6uhwjqbeCJm9vn326XQ6BCrG1nZt34OXcOgHowAr+RR7GFK1PTBzMjIVL7Ud47X0xOtVF7EYIp/ZQq9+hV6hyOwAma04e49kc2K94TRCeWRPsZ12Q/fiJXxFJ9MvUQ0IIT1+fLm+SXfO7DqcsofXR+mFI7MDZDZoyT4hpiUAAlRy1tR290nt/eFQ7mPbOzE7tlE2cILkK93hlJqtL2yEH1PiIhSHZDaZHTCfmh0XaMBBsMhYcT/Sf1K7quJ28TH1pxpB12wbcS4SzjwMk5itCslytAbI7ABltmEfIgwk5XLs/QXn3D3YfrmyyCJJtZXsLZPGx3O6I0S6k49yNcuQrG8hsymza/EZFwPTuo/Y+4viQpxIrIcik6TomtRiLkTXdfWDpm3avv8/v81xnZTaGNc9pW110LZjq4jeIJkdIbO1vX+G1WNJEHvPTbp7DSjbS191F3y+XcN0gu45k91D5IfHd8/NM4zYwDP3VWzxTdrG6wC6oeHsBdnc3XQhMpvMRu0+wmj86T13Y+8vvR+1bTsY5ToZEXU/aEy/Hri/3aLG43DGaI/SyoMYcl+0ViWNEMbrn5l4UGa49W1TpzTtPVT7ZDaZ/QQBP/mBaZkHb4dYiaRqW4NgfCIH5qeAdtYZPWqMYT9umG2AA6Bsw+pniaOLfmSuLWpnh/nDk4N1Gml9Npn9rwFtmxjYM0D5+UtlrHX+5ZxWsDwOXuB3I7eTx2jsyOsweoH6K16T2WQ2GJ+SuaOIqMbX574BGmcQnr8oz7q2kEDfTk1m/y3wt1ISUOHufwOZTWbHhSH/3y4d0wAAAgEQIwjAEsG/KTz8dEOroX1mm43ZZmO22WZjttlmY7bZmG02ZpttNmabjdlmm43ZZmO22ZhtttmYbTZmm202ZpuN2WZjttlmY7bZZmO22ZhtNmabTX+22ZhtNmabbTZmm232o8zsoXNp2yvuA8IKaEeQRuYIAAAAAElFTkSuQmCC";
},
function(t, n) {
    t.exports = "data:image/jpeg;base64,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"
},
function(t, n) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAABKCAMAAABpYYORAAAAG1BMVEVHcEyAgICAgICBgYGAgICBgYGBgYGAgICHh4dlFYiMAAAACXRSTlMAJZr/R3LixBEpK68VAAAEfElEQVR42t2b7XbcIAxEkUCC93/iNqcbT+l4A2rAG+/8asGLuOgDaty0W6I5a3pjgfNDJa1QyQ/JoP8FoPYw7WmF6udo7bxfYW2VxD6VP2TPH8wP2UqX2kJjxUien4rTkJe5zZvWJ/Hp7LK4Lc3fkaclTjUzpcc5E3IZmtpGmtv/O7UdWdCp8oOOrnAWQ/YdTo41niCvtAeHVLg0nsWQfI+0TCyixkgtNsPSfHKOHspLg+S/4kPJ4ih864BDZ71RieSQDkJ0D6nHBrV43LHkWlK13yrh7LoDKWJoUNZuTlrShDS/OSmPeO72gv4ByAKRmVaZQjzXR1uEtHTHTmWeiv7HwtR2GWn5AHE5mZG2IKl4xulH6kEEWf3sPxbG5SJShWkOQguRAjRLKn5+DCn1yK+CvNxPisKqp4YipK3+Pb7xwaL+Yx9/vYTUqI2yCaSToNo5uPJC/EuuW0n5PE4tdSpPAYKfESr6kZlApbq0bpfhvR4/E8woQCoAabSjgLtHVaDKflLMsTJ5IHrtwKDE0Ed9YlQD6gWkMCcUzUQ6HkaoRQ8LEKHaflLkizYyHdpllHZH/TOQZpKXHlXPgVafKAW2BREXJk0VoGgpUr+sigXWdpF6npMRaURdijqoQVfwx1uTaoaq4O9Ub+9NCofCiUrJ+pNIR5KxQ5GYliFtsRI7rr1+NSkcyv4r1HxvUjkcSsc98S55d5HGFSbl1yzGh2RI26WkeMgWkPZxUEevmu2upMVHHPxM21R746R8DtYE8VuFcR5q7qRyM1IDZ1TVbkRqnr8ltVuQNssLpNZ+OGlRvuebAVNq8vW112dmMkUK2/R+cCBLomTyR5O2muk0MEXKx6n0MlKMyqSQOO8YY3GKe3sZaZsjTWXAKVbxI5ZVmHkN6TFqG9VepVMsr4Mz4fGT9gFrq3aZOOnhqzQibX5MtNArJX3mhYp6/+ozknXeYFKWKPdb/jLmvfwc0jpNamfua6MvXfaTas7WiJTjTqdJFVAnSHLO4ttJBeUSpPJ3mtUoaSFzfCfL91/b/32qhyWQWoZH0MykIafKeSNaN5O2/JABqXeiYClmSeXLd5HtzKWyinR8Q4apVMyT6guRBpyqhE93IztuoPj7T/jUu7s/xVIQacipBir+0HYfKbsUpH3yYH5EGnNqg625L5rz9yTPXNpVJOAJniDSmFN5n1GwbyRll4I0IVXpFEek805Vuk9Ew2ZSgUt7UkGqOtYiQAqKwm0KH2M1tpFy9IAUzkYh1hgpMPQkpOl/D+0k5WQCKSYKWYz0nMPRRN987au9HD0gxVCeH2oRUgbhREWNkO2khlXvSdFriumGSHn7RJObUNnfRcqLzqTJsxfEd5AUj9U+XaoJ1YiLfIroaV98QJiCpIiKwIa7L09Fu7kYkVpGU5xU4NBRjeDeVTJc7WX7rXMs7KptjjSvkCwmPVTYFK2spXcglae3Inq0tPuT8vQAUOjpu5N63+WNsjS9Can2oEJxXa4m3SV9eiVtBESk6/RaKTa8NybFB7vXk/4C+klpK3++XGUAAAAASUVORK5CYII="
},
function(t, n, e) {
    e(3),
    e(2),
    e(1),
    e(4),
    window.app = gb.module("app", [],
    function(m0, $router, $libsLoader) {
        $router.loading({
            tpl: "loading"
        }).when("/signature", {
            tpl: "signature",
            asIndex: !0
        }).when("/ending", {
            tpl: "ending",
            asIndex: !1
        }).otherwise("/signature").useVirtualRouter(!0)
    }),
    window.app.controller("loading",
    function($scope, m0, $libsLoader) {
        console.log("#run loading", m0),
        $scope.RESOURCE_NUM = 1;
        var t = Math.random(),
        n = new Image;
        n.onload = function() {
            $scope.resourceLoaded()
        },
        t <= .5 ? n.src = "./asset/image/iphone0.jpeg": t <= 1 && (n.src = "./asset/image/iphone1.jpeg"),
        window.ipImg = n,
        $scope.onLibsProgress = function(t) {},
        $scope.onLibsComplete = function() {
            $scope.closeLoading()
        },
        $scope.onAdd = function() {
            $scope.add()
        },
        $scope.onRemove = function() {
            $scope.remove()
        }
    }),
    e(6),
    e(5)
}]);