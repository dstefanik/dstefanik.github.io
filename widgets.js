!function t(e, i, n) {
    function r(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (o)
                    return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = i[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var i = e[s][1][t];
                return r(i ? i : t)
            }, c, c.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
        r(n[s]);
    return r
}({
    1: [function(t) {
        !function() {
            var e = Function && Function.prototype && Function.prototype.bind, i = /MSIE [678]/.test(window.navigator.userAgent);
            if (e&&!i) {
                var n = t("tfw/util/article"), r = t("util/domready"), o = t("util/logger"), s = t("performance/perf-timers"), a = t("tfw/widget/base"), l = t("tfw/widget/follow"), u = t("tfw/widget/tweetbutton"), c = t("tfw/widget/embed"), d = t("tfw/widget/timeline"), h = t("tfw/widget/video"), f = t("tfw/widget/intent"), m = t("tfw/factories"), p = t("util/events"), w = t("util/util"), g = t("tfw/hub/client"), v = t("intents/delegate"), b = t("globals/twttr"), y = t("globals/private");
                if (y.init("host", "platform.twitter.com"), s.start("widgets-js-load"), n.requestArticleUrl(), y.get("widgets.loaded"))
                    return b.call("widgets.load"), !1;
                if (y.get("widgets.init"))
                    return !1;
                y.set("widgets.init", !0), b.set("init", !0), b.init("_e", []), b.init("ready", function(t) {
                    y.get("widgets.loaded") ? t(b.base) : b.get("_e").push(t)
                });
                var _ = [];
                b.set("events", {
                    bind: function(t, e) {
                        return _.push([t, e])
                    }
                }), r(function() {
                    function t() {
                        y.set("eventsHub", g.init()), g.init(!0)
                    }
                    var e, i = {
                        "a.twitter-share-button": u,
                        "a.twitter-mention-button": u,
                        "a.twitter-hashtag-button": u,
                        "a.twitter-follow-button": l,
                        "blockquote.twitter-tweet": c,
                        "a.twitter-timeline": d,
                        "div.twitter-timeline": d,
                        "blockquote.twitter-video": h,
                        body: f
                    }, n = y.get("eventsHub") ? b.get("events"): {};
                    b.aug("widgets", m, {
                        load: function(t) {
                            o.time("load"), a.init(i), a.embed(t), y.set("widgets.loaded", !0)
                        }
                    }), b.aug("events", n, p.Emitter), e = b.get("events.bind"), b.set("events.bind", function(i, n) {
                        t(), this.bind = e, this.bind(i, n)
                    }), _.forEach(function(t) {
                        b.call("events.bind", t[0], t[1])
                    }), b.get("_e").forEach(function(t) {
                        w.async(function() {
                            t(b.base)
                        })
                    }), b.set("ready", function(t) {
                        w.async(function() {
                            t(b.base)
                        })
                    }), v.attachTo(document), b.call("widgets.load")
                })
            }
        }()
    }, {
        "globals/private": 10,
        "globals/twttr": 11,
        "intents/delegate": 12,
        "performance/perf-timers": 14,
        "tfw/factories": 25,
        "tfw/hub/client": 26,
        "tfw/util/article": 27,
        "tfw/widget/base": 33,
        "tfw/widget/embed": 34,
        "tfw/widget/follow": 35,
        "tfw/widget/intent": 36,
        "tfw/widget/timeline": 38,
        "tfw/widget/tweetbutton": 39,
        "tfw/widget/video": 40,
        "util/domready": 44,
        "util/events": 47,
        "util/logger": 50,
        "util/util": 60
    }
    ],
    2: [function(t, e) {
        function i(t, e) {
            var i;
            return e = e || window, (i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function() {
                e.setTimeout(function() {
                    t( + new Date)
                }, 1e3 / 60)
            })(t)
        }
        function n(t, e) {
            return Math.sin(Math.PI / 2 * e) * t
        }
        function r(t, e, n, r, o) {
            function s() {
                var l =+ new Date, u = l - a, c = Math.min(u / n, 1), d = r ? r(e, c) : e * c, h = 1 == c;
                t(d, h), h || i(s, o)
            }
            var a =+ new Date;
            i(s)
        }
        e.exports = {
            animate: r,
            requestAnimationFrame: i,
            easeOut: n
        }
    }, {}
    ],
    3: [function(t, e) {
        function i(t) {
            return new RegExp("\\b" + t + "\\b", "g")
        }
        function n(t, e) {
            return t.classList ? void t.classList.add(e) : void(i(e).test(t.className) || (t.className += " " + e))
        }
        function r(t, e) {
            return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(i(e), " "))
        }
        function o(t, e, i) {
            return void 0 === i && t.classList && t.classList.toggle ? t.classList.toggle(e, i) : (i ? n(t, e) : r(t, e), i)
        }
        function s(t, e, o) {
            return t.classList && a(t, e) ? (r(t, e), void n(t, o)) : void(t.className = t.className.replace(i(e), o))
        }
        function a(t, e) {
            return t.classList ? t.classList.contains(e) : i(e).test(t.className)
        }
        e.exports = {
            add: n,
            remove: r,
            replace: s,
            toggle: o,
            present: a
        }
    }, {}
    ],
    4: [function(t, e) {
        function i(t) {
            var e = t.getAttribute("data-twitter-event-id");
            return e ? e : (t.setAttribute("data-twitter-event-id", ++m), m)
        }
        function n(t, e, i) {
            var n = 0, r = t && t.length || 0;
            for (n = 0; r > n; n++)
                t[n].call(e, i)
        }
        function r(t, e, i) {
            for (var o = i || t.target || t.srcElement, s = o.className.split(" "), a = 0, l = s.length; l > a; a++)
                n(e["." + s[a]], o, t);
            n(e[o.tagName], o, t), t.cease || o !== this && r.call(this, t, e, o.parentElement || o.parentNode)
        }
        function o(t, e, i, n) {
            function o(n) {
                r.call(t, n, i[e])
            }
            s(t, o, e, n), t.addEventListener(e, o, !1)
        }
        function s(t, e, i, n) {
            t.id && (p[t.id] = p[t.id] || [], p[t.id].push({
                el: t,
                listener: e,
                type: i,
                rootId: n
            }))
        }
        function a(t) {
            var e = p[t];
            e && (e.forEach(function(t) {
                t.el.removeEventListener(t.type, t.listener, !1), delete f[t.rootId]
            }), delete p[t])
        }
        function l(t, e, n, r) {
            var s = i(t);
            f[s] = f[s] || {}, f[s][e] || (f[s][e] = {}, o(t, e, f[s], s)), f[s][e][n] = f[s][e][n] || [], f[s][e][n].push(r)
        }
        function u(t, e, n) {
            var o = i(e), s = f[o] && f[o];
            r.call(e, {
                target: n
            }, s[t])
        }
        function c(t) {
            return h(t), d(t), !1
        }
        function d(t) {
            t && t.preventDefault ? t.preventDefault() : t.returnValue=!1
        }
        function h(t) {
            t && (t.cease=!0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble=!0
        }
        var f = {}, m =- 1, p = {};
        e.exports = {
            stop: c,
            stopPropagation: h,
            preventDefault: d,
            delegate: l,
            simulate: u,
            removeDelegatesForWidget: a
        }
    }, {}
    ],
    5: [function(t, e) {
        function i(t) {
            var e = t.charAt(0);
            return "." === e ? function(e) {
                var i = e.className ? e.className.split(/\s+/): [];
                return r.contains(i, t.slice(1))
            } : "#" === e ? function(e) {
                return e.id === t.slice(1)
            } : function(e) {
                return e.tagName === t.toUpperCase()
            }
        }
        function n(t, e, o) {
            var s;
            if (e)
                return o = o || e && e.ownerDocument, s = r.isType("function", t) ? t : i(t), e === o ? s(e) ? e : void 0 : s(e) ? e : n(s, e.parentNode, o)
        }
        var r = t("util/util");
        e.exports = {
            closest: n
        }
    }, {
        "util/util": 60
    }
    ],
    6: [function(t, e) {
        function i(t) {
            return t && 1 === t.nodeType ? t.offsetWidth || i(t.parentNode) : 0
        }
        e.exports = {
            effectiveWidth: i
        }
    }, {}
    ],
    7: [function(t, e) {
        function i(t, e, i) {
            for (var n, r = [], o = 0; n = i[o]; o++)
                r.push(n[0]), r.push(n[1]);
            return t + e + r.join(":")
        }
        function n(t) {
            var e = t || "";
            return e.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = {};
        e.exports = function(t, e, o) {
            var s, a = document.createElement("span"), l = {}, u = "", c = 0, d = 0, h = [];
            if (o = o || [], e = e || "", u = i(t, e, o), r[u])
                return r[u];
            a.className = e + " twitter-measurement";
            try {
                for (; s = o[c]; c++)
                    a.style[s[0]] = s[1]
            } catch (f) {
                for (; s = o[d]; d++)
                    h.push(n(s[0]) + ":" + s[1]);
                a.setAttribute("style", h.join(";") + ";")
            }
            return a.innerHTML = t, document.body.appendChild(a), l.width = a.clientWidth || a.offsetWidth, l.height = a.clientHeight || a.offsetHeight, document.body.removeChild(a), a = null, r[u] = l
        }
    }, {}
    ],
    8: [function(t, e) {
        function i(t) {
            return o.isType("string", t) ? t.split(".") : o.isType("array", t) ? t : []
        }
        function n(t, e) {
            var n = i(e), r = n.slice(0, - 1);
            return r.reduce(function(t, e, i) {
                if (t[e] = t[e] || {}, !o.isObject(t[e]))
                    throw new Error(r.slice(0, i + 1).join(".") + " is already defined with a value.");
                return t[e]
            }, t)
        }
        function r(t, e) {
            e = e || window, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
                value: e[t]
            }), Object.defineProperty(this, "name", {
                value: t
            })
        }
        var o = t("util/util");
        o.aug(r.prototype, {
            get: function(t) {
                var e = i(t);
                return e.reduce(function(t, e) {
                    return o.isObject(t) ? t[e] : void 0
                }, this.base)
            },
            set: function(t, e, r) {
                var o = i(t), s = n(this.base, t), a = o.slice( - 1);
                return r && a in s ? s[a] : s[a] = e
            },
            init: function(t, e) {
                return this.set(t, e, !0)
            },
            "delete": function(t) {
                var e = i(t), n = this.get(e.slice(0, - 1));
                n && delete n[e.slice( - 1)]
            },
            aug: function(t) {
                var e = this.get(t), i = o.toRealArray(arguments).slice(1);
                if (e = "undefined" != typeof e ? e : {}, i.unshift(e), !i.every(o.isObject))
                    throw new Error("Cannot augment non-object.");
                return this.set(t, o.aug.apply(null, i))
            },
            call: function(t) {
                var e = this.get(t), i = o.toRealArray(arguments).slice(1);
                if (!o.isType("function", e))
                    throw new Error("Function " + t + "does not exist.");
                return e.apply(null, i)
            },
            fullPath: function(t) {
                var e = i(t);
                return e.unshift(this.name), e.join(".")
            }
        }), e.exports = r
    }, {
        "util/util": 60
    }
    ],
    9: [function(t, e) {
        function i(t) {
            var e, i, n, o = 0;
            for (r = {}, t = t || document, e = t.getElementsByTagName("meta"); i = e[o]; o++)
                /^twitter : /.test(i.name)&&(n=i.name.replace(/^twitter : /,""),r[n]=i.content)}function n(t){return r[t]}var r;i(),e.exports={init:i,val:n}},{}],10:[function(t,e){var i=t("globals/object");e.exports=new i("__twttr")},{"globals/object":8}],11:[function(t,e){var i=t("globals/object");e.exports=new i("twttr")},{"globals/object":8}],12:[function(t,e){function i(t){var e=~location.host.indexOf("poptip.com")?"https://poptip.com":location.href,i="original_referer="+e;return[t,i].join(-1==t.indexOf("?")?"?":"&")}function n(t){var e,n;t.altKey||t.metaKey||t.shiftKey||(e=s.closest(function(t){return"A"===t.tagName||"AREA"===t.tagName},t.target),e&&l.isIntentURL(e.href)&&(n=i(e.href),n=n.replace(/^http[: ] / , "https:"), n = n.replace(/^\/\//, "https://"), a.open(n, e), o.preventDefault(t)))
        }
        function r(t) {
            t.addEventListener("click", n, !1)
        }
        var o = t("dom/delegate"), s = t("dom/get"), a = t("tfw/widget/intent"), l = t("util/twitter");
        e.exports = {
            attachTo: r
        }
    }, {
        "dom/delegate": 4,
        "dom/get": 5,
        "tfw/widget/intent": 36,
        "util/twitter": 56
    }
    ],
    13: [function(t, e) {
        function i(t) {
            var e = [];
            return c.forIn(t, function(t, i) {
                e.push(t + "=" + i)
            }), e.join(",")
        }
        function n() {
            return d + u.generate()
        }
        function r(t, e) {
            function i(t) {
                return Math.round(t / 2)
            }
            return t > e ? {
                coordinate: 0,
                size: e
            } : {
                coordinate: i(e) - i(t),
                size: t
            }
        }
        function o(t, e, n) {
            var o, a;
            e = s.parse(e), n = n || {}, o = r(e.width, n.width || h), e.left = o.coordinate, e.width = o.size, a = r(e.height, n.height || f), e.top = a.coordinate, e.height = a.size, this.win = t, this.features = i(e)
        }
        var s, a = t("util/options_parser"), l = t("util/twitter"), u = t("util/uid"), c = t("util/util"), d = "intent_", h = window.screen.width, f = window.screen.height;
        s = (new a).defaults({
            width: 550,
            height: 520,
            personalbar: "0",
            toolbar: "0",
            location: "1",
            scrollbars: "1",
            resizable: "1"
        }), o.prototype.open = function(t) {
            return l.isTwitterURL(t) ? (this.name = n(), this.popup = this.win.open(t, this.name, this.features), this) : void 0
        }, o.open = function(t, e) {
            var i = new o(window, e);
            return i.open(t)
        }, e.exports = o
    }, {
        "util/options_parser": 51,
        "util/twitter": 56,
        "util/uid": 58,
        "util/util": 60
    }
    ],
    14: [function(t, e) {
        function i(t) {
            l[t] =+ new Date
        }
        function n(t) {
            return l[t]?+new Date - l[t] : null
        }
        function r(t, e, i, r, s) {
            var a = n(e);
            a && o(t, i, r, a, s)
        }
        function o(t, e, i, n, r) {
            var o, l = void 0 === r ? u : r;
            100 * Math.random() > l || (i = a.aug(i || {}, {
                duration_ms: n
            }), o = {
                page: e,
                component: "performance",
                action: t
            }, s.clientEvent(o, i, !0))
        }
        var s = t("scribe/pixel"), a = t("util/util"), l = {}, u = 1;
        e.exports = {
            start: i,
            end: n,
            track: o,
            endAndTrack: r
        }
    }, {
        "scribe/pixel": 23,
        "util/util": 60
    }
    ],
    15: [function(t, e) {
        e.exports = {
            PARSE_ERROR: {
                code: - 32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: - 32600,
                message: "Invalid Request"
            },
            INVALID_PARAMS: {
                code: - 32602,
                message: "Invalid params"
            },
            METHOD_NOT_FOUND: {
                code: - 32601,
                message: "Method not found"
            },
            INTERNAL_ERROR: {
                code: - 32603,
                message: "Internal error"
            }
        }
    }, {}
    ],
    16: [function(t, e) {
        function i(t) {
            this.registry = t || {}
        }
        function n(t) {
            return d.isType("string", t) ? JSON.parse(t) : t
        }
        function r(t) {
            var e, i, n;
            return d.isObject(t) ? (e = t.jsonrpc === f, i = d.isType("string", t.method), n=!("id"in t) || o(t.id), e && i && n) : !1
        }
        function o(t) {
            var e, i, n;
            return e = d.isType("string", t), i = d.isType("number", t), n = null === t, e || i || n
        }
        function s(t) {
            return d.isObject(t)&&!d.isType("function", t)
        }
        function a(t, e) {
            return {
                jsonrpc: f,
                id: t,
                result: e
            }
        }
        function l(t, e) {
            return {
                jsonrpc: f,
                id: o(t) ? t: null,
                error: e
            }
        }
        function u(t) {
            return h.every.apply(h, t).then(function(t) {
                return t = t.filter(function(t) {
                    return void 0 !== t
                }), t.length ? t : void 0
            })
        }
        var c = t("rpc/jsonrpc/errors"), d = t("util/util"), h = t("util/promise"), f = "2.0";
        i.prototype._invoke = function(t, e) {
            var i, n, r;
            i = this.registry[t.method], n = t.params || [], n = d.isType("array", n) ? n : [n];
            try {
                r = i.apply(e.source || null, n)
            } catch (o) {
                r = h.reject(o.message)
            }
            return h.isThenable(r) ? r : h.fulfill(r)
        }, i.prototype._processRequest = function(t, e) {
            function i(e) {
                return a(t.id, e)
            }
            function n() {
                return l(t.id, c.INTERNAL_ERROR)
            }
            var o;
            return r(t) ? (o = "params"in t&&!s(t.params) ? h.fulfill(l(t.id, c.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
                source: e
            }).then(i, n) : h.fulfill(l(t.id, c.METHOD_NOT_FOUND)), null != t.id ? o : h.fulfill()) : h.fulfill(l(t.id, c.INVALID_REQUEST))
        }, i.prototype.attachReceiver = function(t) {
            return t.attachTo(this), this
        }, i.prototype.bind = function(t, e) {
            return this.registry[t] = e, this
        }, i.prototype.receive = function(t, e) {
            var i, r, o, s = this;
            try {
                t = n(t)
            } catch (a) {
                return h.fulfill(l(null, c.PARSE_ERROR))
            }
            return e = e || null, i = d.isType("array", t), r = i ? t : [t], o = r.map(function(t) {
                return s._processRequest(t, e)
            }), i ? u(o) : o[0]
        }, e.exports = i
    }, {
        "rpc/jsonrpc/errors": 15,
        "util/promise": 53,
        "util/util": 60
    }
    ],
    17: [function(t, e) {
        function i(t, e) {
            t && t.postMessage && (e = c ? JSON.stringify(e) : e, t.postMessage(e, "*"))
        }
        function n(t) {
            var e = t.document;
            this.server = null, this.isTwitterFrame = l.isTwitterURL(e.location.href), t.addEventListener("message", this._onMessage.bind(this), !1)
        }
        function r(t) {
            this.pending = {}, this.target = t, this.isTwitterHost = l.isTwitterURL(document.location.href), window.addEventListener("message", this._onMessage.bind(this), !1)
        }
        function o(t) {
            return arguments.length > 0 && (c=!!t), c
        }
        var s = t("util/util"), a = t("util/env"), l = t("util/twitter"), u = t("util/promise"), c = a.ie9();
        s.aug(n.prototype, {
            _onMessage: function(t) {
                this.server && (!this.isTwitterFrame || l.isTwitterURL(t.origin)) && this.server.receive(t.data, t.source).then(function(e) {
                    e && i(t.source, e)
                })
            },
            attachTo: function(t) {
                this.server = t
            },
            detach: function() {
                this.server = null
            }
        }), s.aug(r.prototype, {
            _processResponse: function(t) {
                var e = this.pending[t.id];
                e && (e.fulfill(t), delete this.pending[t.id])
            },
            _onMessage: function(t) {
                var e = t.data;
                if (!this.isTwitterHost || l.isTwitterURL(t.origin)) {
                    if (s.isType("string", e))
                        try {
                            e = JSON.parse(e)
                        } catch (i) {
                        return 
                    }
                    e = s.isType("array", e) ? e : [e], e.forEach(this._processResponse.bind(this))
                }
            },
            send: function(t) {
                var e, n = this.pending;
                return e = t.id ? new u(function(e) {
                    n[t.id] = e
                }) : u.fulfill(), i(this.target, t), e
            }
        }), e.exports = {
            Receiver: n,
            Dispatcher: r,
            _stringifyPayload: o
        }
    }, {
        "util/env": 46,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ],
    18: [function(t, e) {
        function i(t, e, i, n) {
            var s, a = this;
            this.readyPromise = new o(function(t) {
                a.resolver = t
            }), this.attrs = t || {}, this.styles = e || {}, this.appender = i || function(t) {
                document.body.appendChild(t)
            }, this.layout = n || function(t) {
                return new o(function(e) {
                    return e.fulfill(t())
                })
            }, this.frame = s = r(this.attrs, this.styles), s.onreadystatechange = s.onload = this.getCallback(this.onLoad), this.layout(function() {
                a.appender(s)
            })
        }
        var n = t("util/env"), r = t("util/iframe"), o = t("util/promise"), s = t("globals/private"), a = 0;
        i.prototype.getCallback = function(t) {
            var e = this, i=!1;
            return function() {
                i || (i=!0, t.call(e))
            }
        }, i.prototype.registerCallback = function(t) {
            var e = "cb" + a++;
            return s.set(["sandbox", e], t), e
        }, i.prototype.onLoad = function() {
            try {
                this.document = this.frame.contentWindow.document
            } catch (t) {
                return void this.setDocDomain()
            }
            this.writeStandardsDoc(), this.resolver.fulfill(this)
        }, i.prototype.ready = function() {
            return this.readyPromise
        }, i.prototype.setDocDomain = function() {
            var t = this, e = r(this.attrs, this.styles), i = this.registerCallback(this.getCallback(this.onLoad));
            e.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", "catch (e) {", 'document.domain="' + document.domain + '";', "}", "window.parent." + s.fullPath(["sandbox", i]) + "();"].join(""), this.layout(function() {
                t.frame.parentNode.removeChild(t.frame), t.frame = null, t.appender ? t.appender(e) : document.body.appendChild(e), t.frame = e
            })
        }, i.prototype.writeStandardsDoc = function() {
            if (n.anyIE()&&!n.cspEnabled()) {
                var t = ["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try { window.parent.document; }", 'catch (e) {document.domain="' + document.domain + '";}', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join("");
                this.document.write(t), this.document.close()
            }
        }, e.exports = i
    }, {
        "globals/private": 10,
        "util/env": 46,
        "util/iframe": 48,
        "util/promise": 53
    }
    ],
    19: [function(t, e) {
        function i() {
            var t, e;
            m = {}, o || (t = document.body.offsetHeight, e = document.body.offsetWidth, (t != w || e != p) && (f.forEach(function(t) {
                t.dispatchFrameResize(p, w)
            }), w = t, p = e))
        }
        function n(t) {
            var e;
            return t.id ? t.id : (e = t.getAttribute("data-twttr-id")) ? e : (e = "twttr-sandbox-" + h++, t.setAttribute("data-twttr-id", e), e)
        }
        function r(t, e) {
            var i = this;
            a.apply(this, [t, e]), this._resizeHandlers = [], f = f.filter(function(t) {
                var e = t._frame.parentElement;
                return e || c.async(function() {
                    d.removeDelegatesForWidget(t._frame.id)
                }), e
            }), f.push(this), this._win.addEventListener("resize", function() {
                i.dispatchFrameResize()
            }, !1)
        }
        var o, s = t("sandbox/baseframe"), a = t("sandbox/minimal"), l = t("util/env"), u = t("util/promise"), c = t("util/util"), d = t("dom/delegate"), h = 0, f = [], m = {}, p = 0, w = 0;
        window.addEventListener("resize", i, !1), r.prototype = new a, c.aug(r.prototype, {
            dispatchFrameResize: function() {
                var t = this._frame.parentNode, e = n(t), i = m[e];
                o=!0, this._resizeHandlers.length && (i || (i = m[e] = {
                    w: this._frame.offsetWidth,
                    h: this._frame.offsetHeight
                }), (this._frameWidth != i.w || this._frameHeight != i.h) && (this._frameWidth = i.w, this._frameHeight = i.h, this._resizeHandlers.forEach(function(t) {
                    t(i.w, i.h)
                }), window.setTimeout(function() {
                    m = {}
                }, 50)))
            },
            appendStyleSheet: function(t) {
                var e = this, i = this._doc.createElement("link");
                return i.type = "text/css", i.rel = "stylesheet", i.href = t, this.layout(function() {
                    return e._head.appendChild(i)
                })
            },
            appendCss: function(t) {
                var e, i = this;
                return l.cspEnabled() ? u.reject("CSP enabled; cannot embed inline styles.") : (e = this._doc.createElement("style"), e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(this._doc.createTextNode(t)), this.layout(function() {
                    return i._head.appendChild(e)
                }))
            },
            style: function(t) {
                var e = this;
                return this.layout(function() {
                    c.forIn(t, function(t, i) {
                        e._frame.style[t] = i
                    })
                })
            },
            onresize: function(t) {
                this._resizeHandlers.push(t)
            },
            width: function(t) {
                return void 0 !== t && (this._frame.style.width = t + "px"), l.ios() ? Math.min(this._frame.parentNode.offsetWidth, this._frame.offsetWidth) : this._frame.offsetWidth
            },
            height: function(t) {
                return void 0 !== t && (this._frame.height = t), this._frame.offsetHeight
            }
        }), r.createSandbox = function(t, e, i, n) {
            var o = new s(t, e, i, n);
            return o.ready().then(function(t) {
                return new r(t.frame, t.layout)
            })
        }, e.exports = r
    }, {
        "dom/delegate": 4,
        "sandbox/baseframe": 18,
        "sandbox/minimal": 20,
        "util/env": 46,
        "util/promise": 53,
        "util/util": 60
    }
    ],
    20: [function(t, e) {
        function i(t, e) {
            t && (this._frame = t, this._win = t.contentWindow, this._doc = this._win.document, this._body = this._doc.body, this._head = this._body.parentNode.children[0], this.layout = e)
        }
        var n = t("sandbox/baseframe"), r = t("util/util");
        r.aug(i.prototype, {
            createElement: function(t) {
                return this._doc.createElement(t)
            },
            createDocumentFragment: function() {
                return this._doc.createDocumentFragment()
            },
            appendChild: function(t) {
                var e = this;
                return this.layout(function() {
                    return e._body.appendChild(t)
                })
            },
            setBaseTarget: function(t) {
                var e = this, i = this._doc.createElement("base");
                return i.target = t, this.layout(function() {
                    return e._head.appendChild(i)
                })
            },
            setTitle: function(t) {
                t && (this._frame.title = t)
            },
            element: function() {
                return this._frame
            },
            document: function() {
                return this._doc
            }
        }), i.createSandbox = function(t, e, r, o) {
            var s = new n(t, e, r, o);
            return s.ready().then(function(t) {
                return new i(t.frame, t.layout)
            })
        }, e.exports = i
    }, {
        "sandbox/baseframe": 18,
        "util/util": 60
    }
    ],
    21: [function(t, e) {
        function i() {
            return u.formatGenericEventData("syndicated_impression", {})
        }
        function n() {
            a("tweet")
        }
        function r() {
            a("timeline")
        }
        function o() {
            a("video")
        }
        function s() {
            a("partnertweet")
        }
        function a(t) {
            c.isHostPageSensitive() || d[t] || (d[t]=!0, l.scribe(u.formatClientEventNamespace({
                page: t,
                action: "impression"
            }), i(), u.AUDIENCE_ENDPOINT))
        }
        var l = t("scribe/pixel"), u = t("scribe/util"), c = t("util/tld"), d = {};
        e.exports = {
            scribePartnerTweetAudienceImpression: s,
            scribeTweetAudienceImpression: n,
            scribeTimelineAudienceImpression: r,
            scribeVideoAudienceImpression: o,
            resetTracking: function() {
                d = {}
            }
        }
    }, {
        "scribe/pixel": 23,
        "scribe/util": 24,
        "util/tld": 55
    }
    ],
    22: [function(t, e) {
        function i() {
            return E ? A : (p.createSandbox({
                id: "rufous-sandbox"
            }, {
                display: "none"
            }).then(function(t) {
                d = t, u = a(), c = l(), h.fulfill([u, c])
            }), E=!0, A)
        }
        function n(t, e) {
            var i, n, r;
            v.isObject(t) && v.isObject(e) && (r = g.flattenClientEventPayload(t, e), i = u.firstChild, i.value =+ ( + i.value || r.dnt || 0), n = d.createElement("input"), n.type = "hidden", n.name = "l", n.value = g.stringify(r), u.appendChild(n))
        }
        function r(t, e, i) {
            var r=!v.isObject(t), o = e?!v.isObject(e) : !1;
            r || o || A.then(function() {
                n(g.formatClientEventNamespace(t), g.formatClientEventData(e, i))
            })
        }
        function o() {
            return A.then(function() {
                if (u.children.length <= 2)
                    return w.reject();
                var t = w.every(d.appendChild(u), d.appendChild(c)).then(function(t) {
                    var e = t[0], i = t[1];
                    return i.addEventListener("load", function() {
                        s(e, i)(), b.get("events").trigger("logFlushed")
                    }), e.submit(), t
                });
                return u = a(), c = l(), t
            })
        }
        function s(t, e) {
            return function() {
                var i = t.parentNode;
                i && (i.removeChild(t), i.removeChild(e))
            }
        }
        function a() {
            var t = d.createElement("form"), e = d.createElement("input"), i = d.createElement("input");
            return x++, t.action = g.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = _ + x, t.id = T + x, e.type = "hidden", e.name = "dnt", e.value = m.enabled(), i.type = "hidden", i.name = "tfw_redirect", i.value = g.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(i), t
        }
        function l() {
            var t = _ + x;
            return f({
                id: t,
                name: t,
                width: 0,
                height: 0,
                border: 0
            }, {
                display: "none"
            }, d.document())
        }
        var u, c, d, h, f = t("util/iframe"), m = t("util/donottrack"), p = t("sandbox/minimal"), w = t("util/promise"), g = t("scribe/util"), v = t("util/util"), b = t("globals/twttr"), y = Math.floor(1e3 * Math.random()) + "_", _ = "rufous-frame-" + y + "-", T = "rufous-form-" + y + "-", x = 0, E=!1, A = new w(function(t) {
            h = t
        });
        e.exports = {
            clientEvent: r,
            flush: o,
            init: i
        }
    }, {
        "globals/twttr": 11,
        "sandbox/minimal": 20,
        "scribe/util": 24,
        "util/donottrack": 45,
        "util/iframe": 48,
        "util/promise": 53,
        "util/util": 60
    }
    ],
    23: [function(t, e) {
        function i(t, e, i) {
            return n(t, e, i, 2)
        }
        function n(t, e, i, n) {
            var r=!f.isObject(t), s = e?!f.isObject(e) : !1;
            r || s || o(h.formatClientEventNamespace(t), h.formatClientEventData(e, i, n), h.CLIENT_EVENT_ENDPOINT)
        }
        function r(t, e, i, r) {
            var o = h.extractTermsFromDOM(t.target || t.srcElement);
            o.action = r || "click", n(o, e, i)
        }
        function o(t, e, i) {
            var n, r;
            i && f.isObject(t) && f.isObject(e) && (n = h.flattenClientEventPayload(t, e), r = {
                l: h.stringify(n)
            }, n.dnt && (r.dnt = 1), u(d.url(i, r)))
        }
        function s(t, e, i, n) {
            var r, o=!f.isObject(t), s = e?!f.isObject(e) : !1;
            if (!o&&!s)
                return r = h.flattenClientEventPayload(h.formatClientEventNamespace(t), h.formatClientEventData(e, i, n)), a(r)
        }
        function a(t) {
            return p.push(t), p
        }
        function l() {
            var t, e, i = d.url(h.CLIENT_EVENT_ENDPOINT, {
                dnt: 0,
                l: ""
            }), n = encodeURIComponent(i).length;
            return p.length > 1 && s({
                page: "widgets_js",
                component: "scribe_pixel",
                action: "batch_log"
            }, {}), t = p, p = [], e = t.reduce(function(e, i, r) {
                var o, s, a = e.length, l = a && e[a - 1], u = r + 1 == t.length;
                return u && i.event_namespace && "batch_log" == i.event_namespace.action && (i.message = ["entries:" + r, "requests:" + a].join("/")), o = h.stringify(i), s = encodeURIComponent(o).length + 3, n + s > m ? e : ((!l || l.urlLength + s > m) && (l = {
                    urlLength: n,
                    items: []
                }, e.push(l)), l.urlLength += s, l.items.push(o), e)
            }, []), e.map(function(t) {
                var e = {
                    l: t.items
                };
                return c.enabled() && (e.dnt = 1), u(d.url(h.CLIENT_EVENT_ENDPOINT, e))
            })
        }
        function u(t) {
            var e = new Image;
            return e.src = t
        }
        var c = t("util/donottrack"), d = t("util/querystring"), h = t("scribe/util"), f = t("util/util"), m = 2083, p = [];
        e.exports = {
            _enqueueRawObject: a,
            scribe: o,
            clientEvent: n,
            clientEvent2: i,
            enqueueClientEvent: s,
            flushClientEvents: l,
            interaction: r
        }
    }, {
        "scribe/util": 24,
        "util/donottrack": 45,
        "util/querystring": 54,
        "util/util": 60
    }
    ],
    24: [function(t, e) {
        function i(t, e) {
            var n;
            return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? ((n = t.getAttribute("data-scribe")) && n.split(" ").forEach(function(t) {
                var i = t.trim().split(":"), n = i[0], r = i[1];
                n && r&&!e[n] && (e[n] = r)
            }), i(t.parentNode, e)) : e
        }
        function n(t) {
            return u.aug({
                client: "tfw"
            }, t || {})
        }
        function r(t, e, i) {
            var n = t && t.widget_origin || document.referrer;
            return t = o("tfw_client_event", t, n), t.client_version = d, t.format_version = void 0 !== i ? i : 1, e || (t.widget_origin = n), t
        }
        function o(t, e, i) {
            return e = e || {}, u.aug(e, {
                _category_: t,
                triggered_on: e.triggered_on||+new Date,
                dnt: l.enabled(i)
            })
        }
        function s(t, e) {
            return u.aug({}, e, {
                event_namespace: t
            })
        }
        function a(t) {
            var e, i = Array.prototype.toJSON;
            return delete Array.prototype.toJSON, e = JSON.stringify(t), i && (Array.prototype.toJSON = i), e
        }
        var l = t("util/donottrack"), u = t("util/util"), c = t("globals/private"), d = "72fd44810009fbb3c80ac2374f6b100e7e2b600a:1422562243700", h = c.get("endpoints.rufous") || "https://syndication.twitter.com/i/jot", f = c.get("endpoints.rufous") || "https://syndication.twitter.com/i/jot/syndication", m = c.get("endpoints.rufousRedirect") || "https://platform.twitter.com/jot.html";
        e.exports = {
            extractTermsFromDOM: i,
            flattenClientEventPayload: s,
            formatGenericEventData: o,
            formatClientEventData: r,
            formatClientEventNamespace: n,
            stringify: a,
            AUDIENCE_ENDPOINT: f,
            CLIENT_EVENT_ENDPOINT: h,
            RUFOUS_REDIRECT: m
        }
    }, {
        "globals/private": 10,
        "util/donottrack": 45,
        "util/util": 60
    }
    ],
    25: [function(t, e) {
        function i(t, e, i, n) {
            return t = t || [], i = i || {}, function() {
                var s, l, u, c, d = Array.prototype.slice.apply(arguments, [0, t.length]), h = Array.prototype.slice.apply(arguments, [t.length]);
                return h.forEach(function(t) {
                    return t ? 1 === t.nodeType ? void(u = t) : r.isType("function", t) ? void(s = t) : void(r.isType("object", t) && (l = t)) : void 0
                }), d.length != t.length || 0 === h.length ? (s && r.async(function() {
                    s(!1)
                }), o.reject("Not enough parameters")) : u ? (l = r.aug(l || {}, i), l.targetEl = u, t.forEach(function(t) {
                    l[t] = d.shift()
                }), c = new e(l), a.doLayout(), c.render(), n && n(), s && c.completed().then(s, function() {
                    s(!1)
                }), c.completed()) : (s && r.async(function() {
                    s(!1)
                }), o.reject("No target specified"))
            }
        }
        function n(t) {
            var e;
            t.linkColor = t.linkColor || t.previewParams.link_color, t.theme = t.theme || t.previewParams.theme, t.height = t.height || t.previewParams.height, e = new h(t), this.render = e.render.bind(e), this.completed = e.completed.bind(e)
        }
        var r = t("util/util"), o = t("util/promise"), s = t("util/twitter"), a = t("tfw/widget/base"), l = t("tfw/widget/tweetbutton"), u = t("tfw/widget/follow"), c = t("tfw/widget/embed"), d = t("tfw/widget/video"), h = t("tfw/widget/timeline"), f = i(["url"], l, {
            type: "share"
        }), m = i(["hashtag"], l, {
            type: "hashtag"
        }), p = i(["screenName"], l, {
            type: "mention"
        }), w = i(["screenName"], u), g = i(["tweetId"], c, {}, c.fetchAndRender), v = i(["tweetId"], d, {}, d.fetchAndRender), b = i(["widgetId"], h), y = i(["previewParams"], n), _ = {
            createShareButton: f,
            createMentionButton: p,
            createHashtagButton: m,
            createFollowButton: w,
            createTweet: g,
            createVideo: v,
            createTweetEmbed: g,
            createTimeline: b
        };
        s.isTwitterURL(window.location.href) && (_.createTimelinePreview = y), e.exports = _
    }, {
        "tfw/widget/base": 33,
        "tfw/widget/embed": 34,
        "tfw/widget/follow": 35,
        "tfw/widget/timeline": 38,
        "tfw/widget/tweetbutton": 39,
        "tfw/widget/video": 40,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ],
    26: [function(t, e) {
        function i(t, e) {
            var i = a.connect({
                src: t,
                iframe: {
                    name: e,
                    style: "position:absolute;top:-9999em;width:10px;height:10px"
                }
            });
            return l(i).expose({
                trigger: function(t, e, i) {
                    e = e || {};
                    var n = e.region;
                    delete e.region, d.get("events").trigger(t, {
                        target: u.find(i),
                        data: e,
                        region: n,
                        type: t
                    })
                },
                initXPHub: function() {
                    r(!0)
                }
            }), i
        }
        function n(t) {
            return t ? c.secureHubId : c.contextualHubId
        }
        function r(t) {
            var e = s.base(t) + "/widgets/hub.36f09636e82f0f0dc08890e8554ae128.html", r = n(t);
            if (!document.getElementById(r))
                return i(e, r)
        }
        function o(t, e) {
            var i = a.connect({
                window: {
                    width: 550,
                    height: 450
                },
                src: t
            });
            l(i).expose({
                trigger: function(t, i) {
                    d.get("events").trigger(t, {
                        target: e,
                        region: "intent",
                        type: t,
                        data: i
                    })
                }
            })
        }
        var s = t("tfw/util/assets"), a = t("xd/parent"), l = t("xd/jsonrpc"), u = t("tfw/widget/base"), c = t("util/widgetrpc"), d = t("globals/twttr");
        e.exports = {
            init: r,
            openIntent: o
        }
    }, {
        "globals/twttr": 11,
        "tfw/util/assets": 28,
        "tfw/widget/base": 33,
        "util/widgetrpc": 61,
        "xd/jsonrpc": 65,
        "xd/parent": 66
    }
    ],
    27: [function(t, e) {
        function i(t) {
            return t = t || window, t.top.postMessage ? t === t.top ? void t.addEventListener("message", function(t) {
                var e;
                if (!t.data || "{" == t.data[0]) {
                    try {
                        e = JSON.parse(t.data)
                    } catch (i) {}
                    e && "twttr:private:requestArticleUrl" == e.name && t.source.postMessage(JSON.stringify({
                        name : "twttr:private:provideArticleUrl", data : {
                            url: n.rootDocumentLocation(),
                            dnt: r.enabled()
                        }
                    }), "*")
                }
            }, !1): (t.addEventListener("message", function(t) {
                var e;
                if (!t.data || "{" == t.data[0]) {
                    try {
                        e = JSON.parse(t.data)
                    } catch (i) {}
                    if (e && "twttr:private:provideArticleUrl" == e.name) {
                        if (!e.data)
                            return;
                        n.rootDocumentLocation(e.data.url), e.data.dnt && r.setOn()
                    }
                }
            }, !1), void t.top.postMessage(JSON.stringify({
                name: "twttr:private:requestArticleUrl"
            }), "*")) : void 0
        }
        var n = t("util/document"), r = t("util/donottrack");
        e.exports = {
            requestArticleUrl: i
        }
    }, {
        "util/document" : 43, "util/donottrack" : 45
    }
    ], 28 : [function(t, e) {
        function i(t, e) {
            var i, o = s[t];
            return "embed/timeline.css" === t&&~location.href.indexOf("localhost.twitter.com") ? "/components/syndication-templates/lib/css/index.css" : (i = r.retina() ? "2x" : "default", e && (i += ".rtl"), n() + "/" + o[i])
        }
        function n(t) {
            var e = o.get("host");
            return a(t) + "://" + e
        }
        var r = t("util/env"), o = t("globals/private"), s = {
            "embed/timeline.css": {
                "default": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.default.css",
                "2x": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.2x.css",
                gif: "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.gif.css",
                "default.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.default.rtl.css",
                "2x.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.2x.rtl.css",
                "gif.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.gif.rtl.css"
            }
        }, a = function() {
            return /^http\:$/.test(window.location.protocol) ? function(t) {
                return t ? "https" : "http"
            } : function() {
                return "https"
            }
        }();
        e.exports = {
            builtUrl: i,
            base: n
        }
    }, {
        "globals/private": 10,
        "util/env": 46
    }
    ], 29 : [function(t, e) {
        function i(t) {
            return function(e) {
                e.error ? t.error && t.error(e) : e.headers && 200 != e.headers.status ? (t.error && t.error(e), o.warn(e.headers.message)) : t.success && t.success(e), t.complete && t.complete(e), n(t)
            }
        }
        function n(t) {
            var e = t.script;
            e && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), t.script = void 0, e = void 0), t.callbackName && l.delete(["callbacks", t.callbackName])
        }
        function r(t) {
            var e = {};
            return t.success && s.isType("function", t.success) && (e.success = t.success), t.error && s.isType("function", t.error) && (e.error = t.error), t.complete && s.isType("function", t.complete) && (e.complete = t.complete), e
        }
        var o = t("util/logger"), s = t("util/util"), a = t("util/querystring"), l = t("globals/private"), u = "cb", c = 0, d=!1, h = {}, f = s.aug({
            tweets: "https://syndication.twitter.com/tweets.json",
            timeline: "https://cdn.syndication.twimg.com/widgets/timelines/",
            timelinePoll: "https://syndication.twitter.com/widgets/timelines/paged/",
            timelinePreview: "https://syndication.twitter.com/widgets/timelines/preview/",
            videos: "https://syndication.twitter.com/widgets/video/"
        }, l.get("endpoints") || {});
        h.jsonp = function(t, e, n) {
            var r = n || u + c, o = l.fullPath(["callbacks", r]), s = document.createElement("script"), h = {
                callback: o,
                suppress_response_codes: !0
            };
            l.set(["callbacks", r], i(e)), (d ||!/^https?\:$/.test(window.location.protocol)) && (t = t.replace(/^\/\//, "https://")), s.src = a.url(t, h), s.async = "async", document.body.appendChild(s), e.script = s, e.callbackName = r, n || c++
        }, h.config = function(t) {
            (t.forceSSL===!0 || t.forceSSL===!1) && (d = t.forceSSL)
        }, h.tweets = function(t) {
            var e = r(t), i = {
                ids: t.ids.join(","),
                lang: t.lang
            }, n = a.url(f.tweets, i);
            this.jsonp(n, e)
        }, h.videos = function(t) {
            var e = r(t), i = {
                ids: t.ids.join(","),
                lang: t.lang
            }, n = a.url(f.videos, i);
            this.jsonp(n, e)
        }, h.timeline = function(t) {
            var e, i = r(t), n = 9e5, o = Math.floor( + new Date / n), l = {
                lang: t.lang,
                t: o,
                domain: window.location.host,
                dnt: t.dnt,
                override_type: t.overrideType,
                override_id: t.overrideId,
                override_name: t.overrideName,
                override_owner_id: t.overrideOwnerId,
                override_owner_name: t.overrideOwnerName,
                with_replies: t.withReplies
            };
            s.compact(l), e = a.url(f.timeline + t.id, l), this.jsonp(e, i, "tl_" + t.id + "_" + t.instanceId)
        }, h.timelinePoll = function(t) {
            var e, i = r(t), n = {
                lang: t.lang,
                since_id: t.sinceId,
                max_id: t.maxId,
                min_position: t.minPosition,
                max_position: t.maxPosition,
                domain: window.location.host,
                dnt: t.dnt,
                override_type: t.overrideType,
                override_id: t.overrideId,
                override_name: t.overrideName,
                override_owner_id: t.overrideOwnerId,
                override_owner_name: t.overrideOwnerName,
                with_replies: t.withReplies
            };
            s.compact(n), e = a.url(f.timelinePoll + t.id, n), this.jsonp(e, i, "tlPoll_" + t.id + "_" + t.instanceId + "_" + (t.sinceId || t.maxId || t.maxPosition || t.minPosition))
        }, h.timelinePreview = function(t) {
            var e = r(t), i = t.params, n = a.url(f.timelinePreview, i);
            this.jsonp(n, e)
        }, e.exports = h
    }, {
        "globals/private": 10,
        "util/logger": 50,
        "util/querystring": 54,
        "util/util": 60
    }
    ], 30 : [function(t, e) {
        function i() {
            var t = 36e5, e = r.combined(document.location)._;
            return void 0 !== n ? n : (n=!1, e && /^\d+$/.test(e) && (n =+ new Date - parseInt(e) < t), n)
        }
        var n, r = t("util/params");
        e.exports = {
            isDynamicWidget: i
        }
    }, {
        "util/params": 52
    }
    ], 31 : [function(t, e) {
        function i(t, e) {
            return 2 == t || 3 == t && 0 ===+ e
        }
        function n(t) {
            var e = t.split(" ");
            this.url = decodeURIComponent(e[0].trim()), this.width =+ e[1].replace(/w$/, "").trim()
        }
        function r(t, e, i) {
            var r, o, s, a;
            if (t = window.devicePixelRatio ? t * window.devicePixelRatio : t, o = e.split(",").map(function(t) {
                return new n(t)
            }), i)
                for (a = 0; a < o.length; a++)
                    o[a].url === i && (r = o[a]);
            return s = o.reduce(function(e, i) {
                return i.width < e.width && i.width >= t ? i : e
            }, o[0]), r && r.width > s.width ? r : s
        }
        function o(t, e) {
            var i, n = t.getAttribute("data-srcset"), o = t.src;
            n && (i = r(e, n, o), t.src = i.url)
        }
        function s(t, e) {
            e = void 0 !== e?!!e : d.retina(), e && c.toRealArray(t.getElementsByTagName("IMG")).forEach(function(t) {
                var e = t.getAttribute("data-src-2x");
                e && (t.src = e)
            })
        }
        function a(t, e, n, r) {
            var s = 0, a = t.querySelector(".multi-photo"), d = a&&+a.getAttribute("data-photo-count");
            if (t)
                return c.toRealArray(t.querySelectorAll(".autosized-media")).forEach(function(t) {
                    var i = l(t.getAttribute("data-width"), t.getAttribute("data-height"), e, n);
                    r(function() {
                        o(t, e), t.width = i.width, t.height = i.height, u(t, i)
                    }), s = i.height > s ? i.height : s
                }), c.toRealArray(t.querySelectorAll("img.cropped-media")).forEach(function(t) {
                    var a, u, c, h = e - 12, w = t.parentNode, g = t.getAttribute("data-crop-x") || 0, v = t.getAttribute("data-crop-y") || 0, b = i(d, t.getAttribute("data-image-index")), y = Math.floor(h / 2 - f), _ = Math.floor(y / (b ? m : p));
                    b || (_ -= f / 2), c = l(t.getAttribute("data-width"), t.getAttribute("data-height"), y, n, y, _), a = c.width - y - g, u = c.height - _ - v, 0 > a && Math.max(0, g += a), 0 > u && Math.max(0, v += u), r(function() {
                        o(t, y), t.width = c.width, t.height = c.height, w.style.width = y - 1 + "px", w.style.height = _ + "px", g && (t.style.marginLeft = "-" + Math.floor(c.width * g / 100) + "px"), v && (t.style.marginTop = "-" + Math.floor(c.height * v / 100) + "px")
                    }), s = c.height * (b ? 2 : 1) > s ? c.height : s
                }), s
        }
        function l(t, e, i, n, r, o) {
            return i = i || t, n = n || e, r = r || 0, o = o || 0, t > i && (e*=i / t, t = i), e > n && (t*=n / e, e = n), r > t && (e*=r / t, t = r), o > e && (t*=o / e, e = o), {
                width: Math.floor(t),
                height: Math.floor(e)
            }
        }
        function u(t, e) {
            function i() {
                var t = {
                    name: "tfw:resize",
                    dimensions: e
                };
                r.postMessage(t, "*")
            }
            var n, r, o, s, a;
            t && (r = t.contentWindow, n = t.ownerDocument && t.ownerDocument.defaultView, o = d.ios() || d.android(), s = h.isTwitterURL(t.src), a = r && d.canPostMessage(r), o && s && a && (i(), n && n.addEventListener("message", function(t) {
                "tfw:requestsize" === t.data && i()
            }, !1)))
        }
        var c = t("util/util"), d = t("util/env"), h = t("util/twitter"), f = 6, m = 8 / 9, p = 16 / 9;
        e.exports = {
            scaleDimensions: l,
            retinize: s,
            constrainMedia: a,
            __setSrcFromSet: o
        }
    }, {
        "util/env": 46,
        "util/twitter": 56,
        "util/util": 60
    }
    ], 32 : [function(t, e) {
        var i = t("util/querystring"), n = t("util/twitter");
        e.exports = function(t, e) {
            return function(r) {
                var o, s, a = "data-tw-params";
                if (r && n.isTwitterURL(r.href)&&!r.getAttribute(a)) {
                    if (r.setAttribute(a, !0), "function" == typeof e) {
                        o = e.call(this, r);
                        for (s in o)
                            o.hasOwnProperty(s) && (t[s] = o[s])
                        }
                    r.href = i.url(r.href, t)
                }
            }
        }
    }, {
        "util/querystring": 54,
        "util/twitter": 56
    }
    ], 33 : [function(t, e) {
        function i(t) {
            var e, i = this;
            t && (t.ownerDocument ? (this.srcEl = t, this.classAttr = t.className.split(" ")) : (this.srcOb = t, this.classAttr = []), e = this.params(), this.id = this.generateId(), this.setLanguage(), this.related = e.related || this.dataAttr("related"), this.partner = e.partner || this.dataAttr("partner") || m.val("partner"), this.styleAttr = [], this.targetEl = t.targetEl, h.asBoolean(e.dnt || this.dataAttr("dnt")) && p.setOn(), y[this.id] = this, this.completePromise = new c(function(t) {
                i.completeResolver = t
            }), this.completed().then(function(t) {
                t && t != document.body && v.get("events").trigger("rendered", {
                    target: t
                })
            }))
        }
        function n() {
            _.forEach(function(t) {
                t()
            }), i.doLayout()
        }
        function r(t) {
            return t ? t.lang ? t.lang : r(t.parentNode) : void 0
        }
        var o, s = t("tfw/util/assets"), a = t("performance/perf-timers"), l = t("util/iframe"), u = t("util/layout"), c = t("util/promise"), d = t("util/querystring"), h = t("util/typevalidator"), f = t("util/util"), m = t("globals/pagemetadata"), p = t("util/donottrack"), w = t("util/logger"), g = t("util/document"), v = t("globals/twttr"), b = 0, y = {}, _ = [], T = new u, x = "data-twttr-rendered", E = {
            ar: {
                "%{followers_count} followers": "عدد المتابعين %{followers_count}",
                "100K+": "+100 ألف",
                "10k unit": "10 آلاف وحدة",
                Follow: "تابِع",
                "Follow %{screen_name}": "تابِع %{screen_name}",
                K: "ألف",
                M: "م",
                Tweet: "غرِّد",
                "Tweet %{hashtag}": "غرِّد %{hashtag}",
                "Tweet to %{name}": "غرِّد لـ %{name}"
            },
            bn: {
                "Follow %{screen_name}": "%{screen_name}-কে অনুসরণ করুন"
            },
            cs: {
                "Follow %{screen_name}": "Sledovat uživatele %{screen_name}"
            },
            da: {
                "%{followers_count} followers": "%{followers_count} følgere",
                "10k unit": "10k enhed",
                Follow: "Følg",
                "Follow %{screen_name}": "Følg %{screen_name}",
                "Tweet to %{name}": "Tweet til %{name}"
            },
            de: {
                "%{followers_count} followers": "%{followers_count} Follower",
                "100K+": "100Tsd+",
                "10k unit": "10tsd-Einheit",
                Follow: "Folgen",
                "Follow %{screen_name}": "%{screen_name} folgen",
                K: "Tsd",
                Tweet: "Twittern",
                "Tweet to %{name}": "Tweet an %{name}"
            },
            es: {
                "%{followers_count} followers": "%{followers_count} seguidores",
                "10k unit": "unidad de 10 mil",
                Follow: "Seguir",
                "Follow %{screen_name}": "Seguir a %{screen_name}",
                Tweet: "Twittear",
                "Tweet %{hashtag}": "Twittear %{hashtag}",
                "Tweet to %{name}": "Twittear a %{name}"
            },
            fa: {
                "%{followers_count} followers": "%{followers_count} دنبال‌کننده",
                "100K+": ">۱۰۰هزار",
                "10k unit": "۱۰هزار واحد",
                Follow: "دنبال کردن",
                "Follow %{screen_name}": "دنبال کردن %{screen_name}",
                K: "هزار",
                M: "میلیون",
                Tweet: "توییت",
                "Tweet %{hashtag}": "توییت کردن %{hashtag}",
                "Tweet to %{name}": "به %{name} توییت کنید"
            },
            fi: {
                "%{followers_count} followers": "%{followers_count} seuraajaa",
                "100K+": "100 000+",
                "10k unit": "10 000 yksikköä",
                Follow: "Seuraa",
                "Follow %{screen_name}": "Seuraa käyttäjää %{screen_name}",
                K: "tuhatta",
                M: "milj.",
                Tweet: "Twiittaa",
                "Tweet %{hashtag}": "Twiittaa %{hashtag}",
                "Tweet to %{name}": "Twiittaa käyttäjälle %{name}"
            },
            fil: {
                "%{followers_count} followers": "%{followers_count} mga tagasunod",
                "10k unit": "10k yunit",
                Follow: "Sundan",
                "Follow %{screen_name}": "Sundan si %{screen_name}",
                Tweet: "I-tweet",
                "Tweet %{hashtag}": "I-tweet ang %{hashtag}",
                "Tweet to %{name}": "Mag-Tweet kay %{name}"
            },
            fr: {
                "%{followers_count} followers": "%{followers_count} abonnés",
                "10k unit": "unité de 10k",
                Follow: "Suivre",
                "Follow %{screen_name}": "Suivre %{screen_name}",
                Tweet: "Tweeter",
                "Tweet %{hashtag}": "Tweeter %{hashtag}",
                "Tweet to %{name}": "Tweeter à %{name}"
            },
            he: {
                "%{followers_count} followers": "%{followers_count} עוקבים",
                "100K+": "מאות אלפים",
                "10k unit": "עשרות אלפים",
                Follow: "מעקב",
                "Follow %{screen_name}": "לעקוב אחר %{screen_name}",
                K: "אלף",
                M: "מיליון",
                Tweet: "ציוץ",
                "Tweet %{hashtag}": "צייצו %{hashtag}",
                "Tweet to %{name}": "ציוץ אל %{name}"
            },
            hi: {
                "%{followers_count} followers": "%{followers_count} फ़ॉलोअर्स",
                "100K+": "1 लाख से अधिक",
                "10k unit": "10 हजार इकाईयां",
                Follow: "फ़ॉलो",
                "Follow %{screen_name}": "%{screen_name} को फ़ॉलो करें",
                K: "हजार",
                M: "मिलियन",
                Tweet: "ट्वीट",
                "Tweet %{hashtag}": "ट्वीट %{hashtag}",
                "Tweet to %{name}": "%{name} के प्रति ट्वीट करें"
            },
            hu: {
                "%{followers_count} followers": "%{followers_count} követő",
                "100K+": "100E+",
                "10k unit": "10E+",
                Follow: "Követés",
                "Follow %{screen_name}": "%{screen_name} követése",
                K: "E",
                "Tweet %{hashtag}": "%{hashtag} tweetelése",
                "Tweet to %{name}": "Tweet küldése neki: %{name}"
            },
            id: {
                "%{followers_count} followers": "%{followers_count} pengikut",
                "100K+": "100 ribu+",
                "10k unit": "10 ribu unit",
                Follow: "Ikuti",
                "Follow %{screen_name}": "Ikuti %{screen_name}",
                K: "&nbsp;ribu",
                M: "&nbsp;juta",
                "Tweet to %{name}": "Tweet ke %{name}"
            },
            it: {
                "%{followers_count} followers": "%{followers_count} follower",
                "10k unit": "10k unità",
                Follow: "Segui",
                "Follow %{screen_name}": "Segui %{screen_name}",
                "Tweet %{hashtag}": "Twitta %{hashtag}",
                "Tweet to %{name}": "Twitta a %{name}"
            },
            ja: {
                "%{followers_count} followers": "%{followers_count}人のフォロワー",
                "100K+": "100K以上",
                "10k unit": "万",
                Follow: "フォローする",
                "Follow %{screen_name}": "%{screen_name}さんをフォロー",
                Tweet: "ツイート",
                "Tweet %{hashtag}": "%{hashtag} をツイートする",
                "Tweet to %{name}": "%{name}さんへツイートする"
            },
            ko: {
                "%{followers_count} followers": "%{followers_count}명의 팔로워",
                "100K+": "100만 이상",
                "10k unit": "만 단위",
                Follow: "팔로우",
                "Follow %{screen_name}": "%{screen_name} 님 팔로우하기",
                K: "천",
                M: "백만",
                Tweet: "트윗",
                "Tweet %{hashtag}": "%{hashtag} 관련 트윗하기",
                "Tweet to %{name}": "%{name} 님에게 트윗하기"
            },
            msa: {
                "%{followers_count} followers": "%{followers_count} pengikut",
                "100K+": "100 ribu+",
                "10k unit": "10 ribu unit",
                Follow: "Ikut",
                "Follow %{screen_name}": "Ikut %{screen_name}",
                K: "ribu",
                M: "juta",
                "Tweet to %{name}": "Tweet kepada %{name}"
            },
            nl: {
                "%{followers_count} followers": "%{followers_count} volgers",
                "100K+": "100k+",
                "10k unit": "10k-eenheid",
                Follow: "Volgen",
                "Follow %{screen_name}": "%{screen_name} volgen",
                K: "k",
                M: " mln.",
                Tweet: "Tweeten",
                "Tweet %{hashtag}": "%{hashtag} tweeten",
                "Tweet to %{name}": "Tweeten naar %{name}"
            },
            no: {
                "%{followers_count} followers": "%{followers_count} følgere",
                "100K+": "100 K+",
                "10k unit": "10-K-enhet",
                Follow: "Følg",
                "Follow %{screen_name}": "Følg %{screen_name}",
                "Tweet to %{name}": "Send en tweet til %{name}"
            },
            pl: {
                "%{followers_count} followers": "%{followers_count} obserwujących",
                "100K+": "100 tys.+",
                "10k unit": "10 tys.",
                Follow: "Obserwuj",
                "Follow %{screen_name}": "Obserwuj %{screen_name}",
                K: "tys.",
                M: "mln",
                Tweet: "Tweetnij",
                "Tweet %{hashtag}": "Tweetnij %{hashtag}",
                "Tweet to %{name}": "Tweetnij do %{name}"
            },
            pt: {
                "%{followers_count} followers": "%{followers_count} seguidores",
                "100K+": "+100 mil",
                "10k unit": "10 mil unidades",
                Follow: "Seguir",
                "Follow %{screen_name}": "Seguir %{screen_name}",
                K: "Mil",
                Tweet: "Tweetar",
                "Tweet %{hashtag}": "Tweetar %{hashtag}",
                "Tweet to %{name}": "Tweetar para %{name}"
            },
            ro: {
                "Follow %{screen_name}": "Urmăreşte pe %{screen_name}"
            },
            ru: {
                "%{followers_count} followers": "Читатели: %{followers_count} ",
                "100K+": "100 тыс.+",
                "10k unit": "блок 10k",
                Follow: "Читать",
                "Follow %{screen_name}": "Читать %{screen_name}",
                K: "тыс.",
                M: "млн.",
                Tweet: "Твитнуть",
                "Tweet %{hashtag}": "Твитнуть %{hashtag}",
                "Tweet to %{name}": "Твитнуть %{name}"
            },
            sv: {
                "%{followers_count} followers": "%{followers_count} följare",
                "10k unit": "10k",
                Follow: "Följ",
                "Follow %{screen_name}": "Följ %{screen_name}",
                Tweet: "Tweeta",
                "Tweet %{hashtag}": "Tweeta %{hashtag}",
                "Tweet to %{name}": "Tweeta till %{name}"
            },
            th: {
                "%{followers_count} followers": "%{followers_count} ผู้ติดตาม",
                "100K+": "100พัน+",
                "10k unit": "หน่วย 10พัน",
                Follow: "ติดตาม",
                "Follow %{screen_name}": "ติดตาม %{screen_name}",
                M: "ล้าน",
                Tweet: "ทวีต",
                "Tweet %{hashtag}": "ทวีต %{hashtag}",
                "Tweet to %{name}": "ทวีตถึง %{name}"
            },
            tr: {
                "%{followers_count} followers": "%{followers_count} takipçi",
                "100K+": "+100 bin",
                "10k unit": "10 bin birim",
                Follow: "Takip et",
                "Follow %{screen_name}": "Takip et: %{screen_name}",
                K: "bin",
                M: "milyon",
                Tweet: "Tweetle",
                "Tweet %{hashtag}": "Tweetle: %{hashtag}",
                "Tweet to %{name}": "Tweetle: %{name}"
            },
            uk: {
                "Follow %{screen_name}": "Читати %{screen_name}"
            },
            ur: {
                "%{followers_count} followers": "%{followers_count} فالورز",
                "100K+": "ایک لاکھ سے زیادہ",
                "10k unit": "دس ہزار یونٹ",
                Follow: "فالو کریں",
                "Follow %{screen_name}": "%{screen_name} کو فالو کریں",
                K: "ہزار",
                M: "ملین",
                Tweet: "ٹویٹ کریں",
                "Tweet %{hashtag}": "%{hashtag} ٹویٹ کریں",
                "Tweet to %{name}": "%{name} کو ٹویٹ کریں"
            },
            vi: {
                "Follow %{screen_name}": "Theo dõi %{screen_name}"
            },
            "zh-cn": {
                "%{followers_count} followers": "%{followers_count} 关注者",
                "100K+": "10万+",
                "10k unit": "1万单元",
                Follow: "关注",
                "Follow %{screen_name}": "关注 %{screen_name}",
                K: "千",
                M: "百万",
                Tweet: "发推",
                "Tweet %{hashtag}": "以 %{hashtag} 发推",
                "Tweet to %{name}": "发推给 %{name}"
            },
            "zh-tw": {
                "%{followers_count} followers": "%{followers_count} 位跟隨者",
                "100K+": "超過十萬",
                "10k unit": "1萬 單位",
                Follow: "跟隨",
                "Follow %{screen_name}": "跟隨 %{screen_name}",
                K: "千",
                M: "百萬",
                Tweet: "推文",
                "Tweet %{hashtag}": "推文%{hashtag}",
                "Tweet to %{name}": "推文給%{name}"
            }
        };
        f.aug(i.prototype, {
            setLanguage: function(t) {
                var e;
                return t || (t = this.params().lang || this.dataAttr("lang") || r(this.srcEl)), (t = t && t.toLowerCase()) ? E[t] ? this.lang = t : (e = t.replace(/[\-_].*/, ""), E[e] ? this.lang = e : void(this.lang = "en")) : this.lang = "en"
            },
            _: function(t, e) {
                var i = this.lang;
                return e = e || {}, i && E.hasOwnProperty(i) || (i = this.lang = "en"), t = E[i] && E[i][t] || t, this.ringo(t, e, /%\{([\w_]+)\}/g)
            },
            ringo: function(t, e, i) {
                return i = i || /\{\{([\w_]+)\}\}/g, t.replace(i, function(t, i) {
                    return void 0 !== e[i] ? e[i] : t
                })
            },
            makeIframeSource: function() {
                if (this.iframeSource) {
                    var t = d.encode(this.widgetUrlParams());
                    return [s.base(), "/", this.ringo(this.iframeSource, {
                        lang: this.lang
                    }), "#", t].join("")
                }
            },
            add: function(t) {
                y[this.id] = t
            },
            create: function(t, e, i) {
                var n, r = this;
                return i[x]=!0, n = l(f.aug({
                    id: this.id,
                    src: t,
                    "class": this.classAttr.join(" ")
                }, i), e, this.targetEl && this.targetEl.ownerDocument), this.srcEl ? this.layout(function() {
                    return r.srcEl.parentNode.replaceChild(n, r.srcEl), r.completeResolver.fulfill(n), n
                }) : this.targetEl ? this.layout(function() {
                    return r.targetEl.appendChild(n), r.completeResolver.fulfill(n), n
                }) : c.reject("Did not append widget")
            },
            params: function() {
                var t, e;
                return this.srcOb ? e = this.srcOb : (t = this.srcEl && this.srcEl.href && this.srcEl.href.split("?")[1], e = t ? d.decode(t) : {}), this.params = function() {
                    return e
                }, e
            },
            widgetUrlParams: function() {
                return {}
            },
            dataAttr: function(t) {
                return this.srcEl && this.srcEl.getAttribute("data-" + t)
            },
            attr: function(t) {
                return this.srcEl && this.srcEl.getAttribute(t)
            },
            layout: function(t) {
                return T.enqueue(t)
            },
            styles: {
                base: [["font", "normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"], ["margin", "0"], ["padding", "0"], ["whiteSpace", "nowrap"]],
                button: [["fontWeight", "bold"], ["textShadow", "0 1px 0 rgba(255,255,255,.5)"]],
                large: [["fontSize", "13px"], ["lineHeight", "26px"]],
                vbubble: [["fontSize", "16px"]]
            },
            width: function() {
                throw new Error(name + " not implemented")
            },
            height: function() {
                return "m" == this.size ? 20 : 28
            },
            minWidth: function() {},
            maxWidth: function() {},
            minHeight: function() {},
            maxHeight: function() {},
            dimensions: function() {
                function t(t) {
                    switch (typeof t) {
                    case"string":
                        return t;
                    case"undefined":
                        return;
                    default:
                        return t + "px"
                    }
                }
                var e = {
                    width: this.width(),
                    height: this.height()
                };
                return this.minWidth() && (e["min-width"] = this.minWidth()), this.maxWidth() && (e["max-width"] = this.maxWidth()), this.minHeight() && (e["min-height"] = this.minHeight()), this.maxHeight() && (e["max-height"] = this.maxHeight()), f.forIn(e, function(i, n) {
                    e[i] = t(n)
                }), e
            },
            generateId: function() {
                return this.srcEl && this.srcEl.id || "twitter-widget-" + b++
            },
            completed: function() {
                return this.completePromise
            }
        }), i.afterLoad = function(t) {
            _.push(t)
        }, i.doLayout = function() {
            T.exec()
        }, i.doLayoutAsync = function() {
            T.delayedExec()
        }, i.init = function(t) {
            o = t
        }, i.reset = function() {
            y = {}
        }, i.find = function(t) {
            return t && y[t] ? y[t].element : null
        }, i.embed = function(t) {
            var e = [], r = [], s = [];
            h.isArray(t) || (t = [t || document]), w.time("sandboxes"), t.forEach(function(t) {
                f.forIn(o, function(i, n) {
                    var r = t.querySelectorAll(i);
                    f.toRealArray(r).forEach(function(t) {
                        var i;
                        t.getAttribute(x) || (t.setAttribute(x, "true"), i = new n(t), e.push(i), s.push(i.sandboxCreated))
                    })
                })
            }), c.every.apply(null, s).then(function() {
                w.timeEnd("sandboxes")
            }), i.doLayout(), e.forEach(function(t) {
                r.push(t.completed()), t.render()
            }), c.every.apply(null, r).then(function(t) {
                t = t.filter(function(t) {
                    return t
                }), t.length && (v.get("events").trigger("loaded", {
                    widgets: t
                }), w.timeEnd("load"))
            }).then(i.trackRender), i.doLayoutAsync(), n()
        }, i.trackRender = function() {
            a.endAndTrack("render", "widgets-js-load", "page", {
                widget_origin: g.rootDocumentLocation(),
                widget_frame: g.isFramed() && g.currentDocumentLocation()
            })
        }, window.setInterval(function() {
            i.doLayout()
        }, 500), e.exports = i
    }, {
        "globals/pagemetadata": 9,
        "globals/twttr": 11,
        "performance/perf-timers": 14,
        "tfw/util/assets": 28,
        "util/document": 43,
        "util/donottrack": 45,
        "util/iframe": 48,
        "util/layout": 49,
        "util/logger": 50,
        "util/promise": 53,
        "util/querystring": 54,
        "util/typevalidator": 57,
        "util/util": 60
    }
    ], 34 : [function(t, e) {
        function i(t, e) {
            var i = t.querySelector("blockquote.subject"), n = t.querySelector("blockquote.reply"), r = i && i.getAttribute("data-tweet-id"), o = n && n.getAttribute("data-tweet-id"), s = {}, a = {};
            r && (s[r] = {
                item_type: 0
            }, v.clientEvent({
                page: "tweet",
                section: "subject",
                component: "tweet",
                action: "results"
            }, m.aug({}, e, {
                item_ids: [r],
                item_details: s
            }), !0), g.scribeTweetAudienceImpression(), o && (a[o] = {
                item_type: 0
            }, v.clientEvent({
                page: "tweet",
                section: "conversation",
                component: "tweet",
                action: "results"
            }, m.aug({}, e, {
                item_ids: [o],
                item_details: a,
                associations: {
                    4: {
                        association_id: r,
                        association_type: 4
                    }
                }
            }), !0)))
        }
        function n(t, e) {
            var i = {};
            t && (i[t] = {
                item_type: 0
            }, v.clientEvent({
                page: "tweet",
                section: "subject",
                component: "rawembedcode",
                action: "no_results"
            }, {
                widget_origin: y.rootDocumentLocation(),
                widget_frame: y.isFramed() && y.currentDocumentLocation(),
                message: e,
                item_ids: [t],
                item_details: i
            }, !0), g.scribeTweetAudienceImpression())
        }
        function r(t, e, i, n) {
            x[t] = x[t] || [], x[t].push({
                s: i,
                f: n,
                lang: e
            })
        }
        function o(t) {
            if (t) {
                var e, i, n;
                a.apply(this, [t]), e = this.params(), i = this.srcEl && this.srcEl.getElementsByTagName("A"), n = i && i[i.length - 1], this.hideThread = "none" == (e.conversation || this.dataAttr("conversation"))||~this.classAttr.indexOf("tw-hide-thread"), this.hideCard = "hidden" == (e.cards || this.dataAttr("cards"))||~this.classAttr.indexOf("tw-hide-media"), "left" == (e.align || this.attr("align"))||~this.classAttr.indexOf("tw-align-left") ? this.align = "left" : "right" == (e.align || this.attr("align"))||~this.classAttr.indexOf("tw-align-right") ? this.align = "right" : ("center" == (e.align || this.attr("align"))||~this.classAttr.indexOf("tw-align-center")) && (this.align = "center", this.containerWidth > this.dimensions.MIN_WIDTH * (1 / .7) && this.width > .7 * this.containerWidth && (this.width = .7 * this.containerWidth)), this.narrow = e.narrow || this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.tweetId = e.tweetId || n && p.status(n.href)
            }
        }
        var s = t("tfw/widget/base"), a = t("tfw/widget/syndicatedbase"), l = t("util/datetime"), u = t("tfw/util/params"), c = t("dom/classname"), d = t("dom/get"), h = t("performance/perf-timers"), f = t("util/promise"), m = t("util/util"), p = t("util/twitter"), w = t("tfw/util/data"), g = t("scribe/audience"), v = t("scribe/frame"), b = t("tfw/util/media"), y = t("util/document"), _ = t("globals/twttr"), T = "tweetembed", x = {}, E = [];
        o.prototype = new a, m.aug(o.prototype, {
            renderedClassNames: "twitter-tweet twitter-tweet-rendered",
            dimensions: {
                DEFAULT_HEIGHT: "0",
                DEFAULT_WIDTH: "500",
                NARROW_WIDTH: "350",
                maxHeight: "375",
                FULL_BLEED_PHOTO_MAX_HEIGHT: "600",
                MIN_WIDTH: "220",
                MIN_HEIGHT: "0",
                WIDE_MEDIA_PADDING: 32,
                NARROW_MEDIA_PADDING: 32,
                BORDERS: 0
            },
            create: function(t) {
                var e, n, r = this, o = this.sandbox.createElement("div");
                return o.innerHTML = t, (e = o.children[0] ||!1) ? ("dark" == this.theme && this.classAttr.push("thm-dark"), this.linkColor && this.addSiteStyles(), c.present(e, "media-forward") && (this.fullBleedPhoto=!0, this.dimensions.maxHeight = this.dimensions.FULL_BLEED_PHOTO_MAX_HEIGHT), b.retinize(e), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Tweet"), this.sandbox.appendChild(e).then(function() {
                    r.renderResolver.fulfill(r.sandbox)
                }), this.sandbox.style({
                    cssText: "",
                    display: "block",
                    maxWidth: "99%",
                    minWidth: this.dimensions.MIN_WIDTH + "px",
                    padding: "0",
                    borderRadius: "5px",
                    margin: "10px 0",
                    border: "#ddd 1px solid",
                    borderTopColor: "#eee",
                    borderBottomColor: "#bbb",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                    position: "absolute",
                    visibility: "hidden"
                }), n = this.layout(function() {
                    r.predefinedWidth = r.width, r.width = r.sandbox.width(r.width), r.collapseRegions()
                }), n.then(function() {
                    r.constrainMedia(e, r.contentWidth(r.width)), r.setNarrow().then(function() {
                        r.layout(function() {
                            r.completeResolver.fulfill(r.sandbox.element())
                        })
                    })
                }), i(e, this.baseScribeData(), this.partner), e) : void 0
            },
            render: function() {
                var t = this, e = "", i = this.tweetId;
                return i ? (this.hideCard && (e += "c"), this.hideThread && (e += "t"), e && (i += "-" + e), this.rendered().then(function(e) {
                    var i = t.srcEl;
                    i && i.parentNode && t.layout(function() {
                        i && i.parentNode && i.parentNode.removeChild(i)
                    }), "center" == t.align ? e.style({
                        margin: "7px auto",
                        cssFloat: "none"
                    }) : t.align && (t.width == t.dimensions.DEFAULT_WIDTH && (t.predefinedWidth = t.width = t.dimensions.NARROW_WIDTH), e.style({
                        cssFloat: t.align
                    })), t.layout(function() {
                        t.height = t.sandbox.height(t.element.offsetHeight)
                    }).then(function() {
                        return s.doLayoutAsync(), t.layout(function() {
                            t.height = t.sandbox.height(t.element.offsetHeight)
                        })
                    }).then(function() {
                        e.onresize(t.handleResize.bind(t))
                    }), e.style({
                        position: "static",
                        visibility: "visible"
                    }), s.doLayoutAsync()
                }), r(i, this.lang, function(e) {
                    t.ready().then(function() {
                        t.element = t.create(e), t.readTimestampTranslations(), t.updateTimeStamps(), t.bindIntentHandlers(), s.doLayoutAsync()
                    })
                }, function() {
                    n(t.tweetId, t.partner), t.completeResolver.fulfill(t.srcEl)
                }), E.push(this.completed()), this.completed().then(this.scribePerformance.bind(this)), this.completed()) : (this.completeResolver.fulfill(this.srcEl), this.completed())
            },
            scribePerformance: function() {
                h.endAndTrack("render", "widgets-js-load", "tweet", this.baseScribeData())
            },
            addUrlParams: function(t) {
                var e = this, i = {
                    related: this.related,
                    partner: this.partner,
                    original_referer: y.rootDocumentLocation(),
                    tw_p: T
                };
                return this.addUrlParams = u(i, function(t) {
                    var i = d.closest(".tweet", t, e.element);
                    return {
                        tw_i: i.getAttribute("data-tweet-id")
                    }
                }), this.addUrlParams(t)
            },
            baseScribeData: function() {
                return {
                    widget_origin: y.rootDocumentLocation(),
                    widget_frame: y.isFramed() && y.currentDocumentLocation(),
                    message: this.partner
                }
            },
            handleResize: function(t) {
                var e = this;
                t != this.width && (this.width = t, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(t)), this.collapseRegions(), this.layout(function() {
                    e.height = e.sandbox.height(e.element.offsetHeight), _.get("events").trigger("resize", {
                        target: e.sandbox.element()
                    })
                }), s.doLayoutAsync())
            },
            readTimestampTranslations: function() {
                var t = this.element, e = "data-dt-", i = t.getAttribute(e + "months") || "";
                this.datetime = new l(m.compact({
                    phrases: {
                        AM: t.getAttribute(e + "am"),
                        PM: t.getAttribute(e + "pm")
                    },
                    months: i.split("|"),
                    formats: {
                        full: t.getAttribute(e + "full")
                    }
                }))
            },
            updateTimeStamps: function() {
                var t = this.element.querySelector(".long-permalink"), e = t.getAttribute("data-datetime"), i = e && this.datetime.localTimeStamp(e), n = t.getElementsByTagName("TIME")[0];
                i && (this.layout(function() {
                    return n && n.innerHTML ? void(n.innerHTML = i) : void(t.innerHTML = i)
                }, "Update Timestamp"), s.doLayoutAsync())
            }
        }), o.fetchAndRender = function() {
            var t, e, i = x, n = [];
            if (x = {}, i.keys)
                n = i.keys();
            else 
                for (t in i)
                    i.hasOwnProperty(t) && n.push(t);
            n.length && (v.init(), e = i[n[0]][0].lang, w.tweets({
                ids: n.sort(),
                lang: e,
                complete: function(t) {
                    m.forIn(t, function(t, e) {
                        var n = i[t];
                        n.forEach(function(t) {
                            t.s && t.s.call(this, e)
                        }), delete i[t]
                    }), s.doLayout(), m.forIn(i, function(t, e) {
                        e.forEach(function(e) {
                            e.f && e.f.call(this, t)
                        })
                    }), s.doLayout()
                }
            }), f.every.apply(null, E).then(function() {
                v.flush()
            }), E = [])
        }, s.afterLoad(o.fetchAndRender), e.exports = o
    }, {
        "dom/classname": 3,
        "dom/get": 5,
        "globals/twttr": 11,
        "performance/perf-timers": 14,
        "scribe/audience": 21,
        "scribe/frame": 22,
        "tfw/util/data": 29,
        "tfw/util/media": 31,
        "tfw/util/params": 32,
        "tfw/widget/base": 33,
        "tfw/widget/syndicatedbase": 37,
        "util/datetime": 42,
        "util/document": 43,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ], 35 : [function(t, e) {
        function i(t) {
            if (t) {
                var e, i, n, r;
                o.apply(this, [t]), e = this.params(), i = e.size || this.dataAttr("size"), n = e.showScreenName || this.dataAttr("show-screen-name"), r = e.count || this.dataAttr("count"), this.classAttr.push("twitter-follow-button"), this.showScreenName = "false" != n, this.showCount=!(e.showCount===!1 || "false" == this.dataAttr("show-count")), "none" == r && (this.showCount=!1), this.explicitWidth = e.width || this.dataAttr("width") || "", this.screenName = e.screen_name || e.screenName || s.screenName(this.attr("href")), this.preview = e.preview || this.dataAttr("preview") || "", this.align = e.align || this.dataAttr("align") || "", this.size = "large" == i ? "l" : "m"
            }
        }
        var n = t("util/donottrack"), r = t("util/util"), o = t("tfw/widget/base"), s = t("util/twitter"), a = t("util/promise"), l = t("dom/textsize");
        i.prototype = new o, r.aug(i.prototype, {
            iframeSource: "widgets/follow_button.b8521baa6750e75c2cbc4369801f822e.{{lang}}.html",
            widgetUrlParams: function() {
                return r.compact({
                    screen_name: this.screenName,
                    lang: this.lang,
                    show_count: this.showCount,
                    show_screen_name: this.showScreenName,
                    align: this.align,
                    id: this.id,
                    preview: this.preview,
                    size: this.size,
                    partner: this.partner,
                    dnt: n.enabled(),
                    _: + new Date
                })
            },
            width: function() {
                if (this.calculatedWidth)
                    return this.calculatedWidth;
                if (this.explicitWidth)
                    return this.explicitWidth;
                var t, e, i = {
                    cnt: 13,
                    btn: 24,
                    xlcnt: 22,
                    xlbtn: 38
                }, n = this.showScreenName ? "Follow %{screen_name}": "Follow", r = this._(n, {
                    screen_name: "@" + this.screenName
                }), o = this._(~["ja", "ko"].indexOf(this.lang) ? "10k unit" : "M"), s = this._("%{followers_count} followers", {
                    followers_count: "88888" + o
                }), a = 0, u = 0, c = this.styles.base;
                return "l" == this.size ? (c = c.concat(this.styles.large), t = i.xlbtn, e = i.xlcnt) : (t = i.btn, e = i.cnt), this.showCount && (u = l(s, "", c).width + e), a = l(r, "", c.concat(this.styles.button)).width + t, this.calculatedWidth = a + u
            },
            render: function() {
                if (!this.screenName)
                    return a.reject("Missing Screen Name");
                var t = this, e = this.makeIframeSource(), i = this.create(e, this.dimensions(), {
                    title: this._("Twitter Follow Button")
                }).then(function(e) {
                    return t.element = e
                });
                return i
            }
        }), e.exports = i
    }, {
        "dom/textsize": 7,
        "tfw/widget/base": 33,
        "util/donottrack": 45,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ], 36 : [function(t, e) {
        function i(t) {
            h.open(t)
        }
        function n(e, i) {
            var n = t("tfw/hub/client");
            n.openIntent(e, i)
        }
        function r(t, e) {
            if (d.isTwitterURL(t))
                if (m.get("eventsHub") && e) {
                    var r = new o(a.generateId(), e);
                    a.add(r), n(t, e), f.get("events").trigger("click", {
                        target: e,
                        region: "intent",
                        type: "click",
                        data: {}
                    })
                } else 
                    i(t)
        }
        function o(t, e) {
            this.id = t, this.element = this.srcEl = e
        }
        function s(t) {
            this.srcEl = [], this.element = t
        }
        var a, l = t("tfw/widget/base"), u = t("util/util"), c = t("util/promise"), d = t("util/twitter"), h = t("intents/intent"), f = t("globals/twttr"), m = t("globals/private");
        s.prototype = new l, u.aug(s.prototype, {
            render: function() {
                return a = this, c.fulfill(document.body)
            }
        }), s.open = r, e.exports = s
    }, {
        "globals/private": 10,
        "globals/twttr": 11,
        "intents/intent": 13,
        "tfw/hub/client": 26,
        "tfw/widget/base": 33,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ], 37 : [function(t, e) {
        function i() {
            o = n.VALID_COLOR.test(d.val("widgets:link-color")) && RegExp.$1, a = n.VALID_COLOR.test(d.val("widgets:border-color")) && RegExp.$1, s = d.val("widgets:theme")
        }
        function n(t) {
            if (t) {
                var e, i = this;
                this.readyPromise = new _(function(t) {
                    i.readyResolver = t
                }), this.renderedPromise = new _(function(t) {
                    i.renderResolver = t
                }), l.apply(this, [t]), e = this.params(), this.targetEl = this.srcEl && this.srcEl.parentNode || e.targetEl || document.body, this.predefinedWidth = n.VALID_UNIT.test(e.width || this.attr("width")) && RegExp.$1, this.layout(function() {
                    return i.containerWidth = v.effectiveWidth(i.targetEl)
                }).then(function(t) {
                    var r = i.predefinedWidth || t || i.dimensions.DEFAULT_WIDTH;
                    i.height = n.VALID_UNIT.test(e.height || i.attr("height")) && RegExp.$1, i.width = Math.max(i.dimensions.MIN_WIDTH, Math.min(r, i.dimensions.DEFAULT_WIDTH))
                }), this.linkColor = n.VALID_COLOR.test(e.linkColor || this.dataAttr("link-color")) ? RegExp.$1 : o, this.borderColor = n.VALID_COLOR.test(e.borderColor || this.dataAttr("border-color")) ? RegExp.$1 : a, this.theme = e.theme || this.attr("data-theme") || s, this.theme = /(dark|light)/.test(this.theme) ? this.theme : "", this.classAttr.push(y.touch() ? "is-touch" : "not-touch"), y.ie9() && this.classAttr.push("ie9"), this.sandboxCreated = b.createSandbox({
                    "class": this.renderedClassNames,
                    id: this.id,
                    allowfullscreen: ""
                }, {
                    width: "1px",
                    height: "0px",
                    border: "none",
                    position: "absolute",
                    visibility: "hidden"
                }, function(t) {
                    i.srcEl ? i.targetEl.insertBefore(t, i.srcEl) : i.targetEl.appendChild(t)
                }, this.layout).then(function(t) {
                    i.setupSandbox(t), new m(t.element().contentWindow)
                })
            }
        }
        function r(t, e) {
            return t + e
        }
        var o, s, a, l = t("tfw/widget/base"), u = t("tfw/widget/intent"), c = t("tfw/util/assets"), d = t("globals/pagemetadata"), h = t("tfw/util/media"), f = t("scribe/pixel"), m = t("video/video_post_message_interface"), p = t("dom/classname"), w = t("dom/get"), g = t("dom/delegate"), v = t("dom/size"), b = t("sandbox/frame"), y = t("util/env"), _ = t("util/promise"), T = t("util/twitter"), x = t("util/typevalidator"), E = t("util/util"), A = [".customisable", ".customisable:link", ".customisable:visited", ".customisable:hover", ".customisable:focus", ".customisable:active", ".customisable-highlight:hover", ".customisable-highlight:focus", "a:hover .customisable-highlight", "a:focus .customisable-highlight"], I = ["a:hover .ic-mask", "a:focus .ic-mask"], N = [".customisable-border"], D = [".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"], S = {
            TWEET: 0,
            RETWEET: 10
        };
        n.prototype = new l, E.aug(n.prototype, {
            setupSandbox: function(t) {
                var e = this;
                this.sandbox = t, _.some(t.appendCss("body{display:none}"), t.setBaseTarget("_blank"), t.appendStyleSheet(c.builtUrl("embed/timeline.css"))).then(function() {
                    e.readyResolver.fulfill(t)
                })
            },
            ready: function() {
                return this.readyPromise
            },
            rendered: function() {
                return this.renderedPromise
            },
            contentWidth: function(t) {
                var e = this.dimensions, i = this.borderless ? 0: e.BORDERS, n = this.fullBleedPhoto ? 0: this.chromeless && this.narrow ? e.NARROW_MEDIA_PADDING_CL: this.chromeless ? e.WIDE_MEDIA_PADDING_CL: this.narrow ? e.NARROW_MEDIA_PADDING: e.WIDE_MEDIA_PADDING;
                return (t || this.width) - (n + i)
            },
            addSiteStyles: function() {
                function t(t) {
                    return ("dark" == e.theme ? ".thm-dark " : "") + t
                }
                var e = this, i = [];
                return this.headingStyle && i.push(D.map(t).join(",") + "{" + this.headingStyle + "}"), this.linkColor && (i.push(A.map(t).join(",") + "{color:" + this.linkColor + "}"), i.push(I.map(t).join(",") + "{background-color:" + this.linkColor + "}")), this.borderColor && i.push(N.map(t).concat("dark" == this.theme ? [".thm-dark.customisable-border"] : []).join(",") + "{border-color:" + this.borderColor + "}"), i.length ? this.sandbox.appendCss(i.join("")) : void 0
            },
            setNarrow: function() {
                var t = this, e = this.narrow;
                return this.narrow = this.width < this.dimensions.NARROW_WIDTH, e != this.narrow ? this.layout(function() {
                    return p.toggle(t.element, "var-narrow", t.narrow)
                }) : _.fulfill(this.narrow)
            },
            bindIntentHandlers: function() {
                function t(t) {
                    var n = w.closest(".tweet", this, i), r = E.aug({}, e.baseScribeData(), {
                        item_ids: [],
                        item_details: e.extractTweetScribeDetails(n)
                    });
                    E.forIn(r.item_details, function(t) {
                        r.item_ids.push(t)
                    }), f.interaction(t, r, !0)
                }
                var e = this, i = this.element;
                g.delegate(i, "click", "A", t), g.delegate(i, "click", "BUTTON", t), g.delegate(i, "click", ".profile", function() {
                    e.addUrlParams(this)
                }), g.delegate(i, "click", ".follow-button", function(t) {
                    var i;
                    t.altKey || t.metaKey || t.shiftKey || y.ios() || y.android() || x.asBoolean(this.getAttribute("data-age-gate")) || (i = T.intentForFollowURL(this.href, !0), i && (u.open(i, e.sandbox.element()), g.preventDefault(t)))
                }), g.delegate(i, "click", ".web-intent", function(t) {
                    e.addUrlParams(this), t.altKey || t.metaKey || t.shiftKey || (u.open(this.href, e.sandbox.element()), g.preventDefault(t))
                })
            },
            baseScribeData: function() {
                return {}
            },
            extractTweetScribeDetails: function(t) {
                var e, i, n = {};
                return t ? (e = t.getAttribute("data-tweet-id"), i = t.getAttribute("data-rendered-tweet-id") || e, i == e ? n[i] = {
                    item_type: S.TWEET
                } : e && (n[i] = {
                    item_type: S.RETWEET,
                    target_type: S.TWEET,
                    target_id: e
                }), n) : n
            },
            constrainMedia: function(t, e) {
                return h.constrainMedia(t || this.element, e || this.contentWidth(), this.dimensions.maxHeight, this.layout)
            },
            collapseRegions: function() {
                var t = this;
                E.toRealArray(this.element.querySelectorAll(".collapsible-container")).forEach(function(e) {
                    var i, n, o = E.toRealArray(e.children), s = o.length && e.offsetWidth, a = o.length && o.map(function(t) {
                        return t.offsetWidth
                    }), l = o.length;
                    if (o.length)
                        for (; l > 0;) {
                            if (l--, i = a.reduce(r, 0), !s ||!i)
                                return;
                                if (s > i)
                                    return;
                                    n = o[l].getAttribute("data-collapsed-class"), n && (p.add(t.element, n), a[l] = o[l].offsetWidth)
                        }
                })
            }
        }), n.VALID_UNIT = /^([0-9]+)( ?px)?$/, n.VALID_COLOR = /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i, i(), e.exports = n
    }, {
        "dom/classname": 3,
        "dom/delegate": 4,
        "dom/get": 5,
        "dom/size": 6,
        "globals/pagemetadata": 9,
        "sandbox/frame": 19,
        "scribe/pixel": 23,
        "tfw/util/assets": 28,
        "tfw/util/media": 31,
        "tfw/widget/base": 33,
        "tfw/widget/intent": 36,
        "util/env": 46,
        "util/promise": 53,
        "util/twitter": 56,
        "util/typevalidator": 57,
        "util/util": 60,
        "video/video_post_message_interface": 62
    }
    ], 38 : [function(t, e) {
        function i(t) {
            if (t) {
                var e, i, n, o, s, a, l, u;
                r.apply(this, [t]), e = this.params(), i = (e.chrome || this.dataAttr("chrome") || "").split(" "), this.preview = e.previewParams, this.widgetId = e.widgetId || this.dataAttr("widget-id"), this.instanceId=++H, this.cursors = {
                    maxPosition: 0,
                    minPosition: 0
                }, this.override = (o = e.screenName || this.dataAttr("screen-name")) || (s = e.userId || this.dataAttr("user-id")) ? {
                    overrideType: "user",
                    overrideId: s,
                    overrideName: o,
                    withReplies: p.asBoolean(e.showReplies || this.dataAttr("show-replies")) ? "true": "false"
                } : (o = e.favoritesScreenName || this.dataAttr("favorites-screen-name")) || (s = e.favoritesUserId || this.dataAttr("favorites-user-id")) ? {
                    overrideType: "favorites",
                    overrideId: s,
                    overrideName: o
                } : ((o = e.listOwnerScreenName || this.dataAttr("list-owner-screen-name")) || (s = e.listOwnerId || this.dataAttr("list-owner-id"))) && ((a = e.listId || this.dataAttr("list-id")) || (l = e.listSlug || this.dataAttr("list-slug"))) ? {
                    overrideType: "list",
                    overrideOwnerId: s,
                    overrideOwnerName: o,
                    overrideId: a,
                    overrideName: l
                } : (u = e.customTimelineId || this.dataAttr("custom-timeline-id")) ? {
                    overrideType: "custom",
                    overrideId: u
                } : {}, this.tweetLimit = p.asInt(e.tweetLimit || this.dataAttr("tweet-limit")), this.staticTimeline = this.tweetLimit > 0, i.length && (n=~i.indexOf("none"), this.chromeless = n||~i.indexOf("transparent"), this.headerless = n||~i.indexOf("noheader"), this.footerless = n||~i.indexOf("nofooter"), this.borderless = n||~i.indexOf("noborders"), this.noscrollbar=~i.indexOf("noscrollbar")), this.headingStyle = f.sanitize(e.headingStyle || this.dataAttr("heading-style"), void 0, !0), this.classAttr.push("twitter-timeline-rendered"), this.ariaPolite = e.ariaPolite || this.dataAttr("aria-polite")
            }
        }
        var n = t("tfw/widget/base"), r = t("tfw/widget/syndicatedbase"), o = t("util/datetime"), s = t("anim/transition"), a = t("performance/perf-timers"), l = t("tfw/util/data"), u = t("tfw/util/media"), c = t("scribe/audience"), d = t("scribe/frame"), h = t("tfw/util/params"), f = t("util/css"), m = t("util/env"), p = t("util/typevalidator"), w = t("util/util"), g = t("dom/delegate"), v = t("dom/classname"), b = t("dom/get"), y = t("util/donottrack"), _ = t("util/document"), T = t("globals/twttr"), x = t("globals/private"), E = {
            CLIENT_SIDE_USER: 0,
            CLIENT_SIDE_APP: 2
        }, A = ".timeline", I = ".new-tweets-bar", N = ".timeline-header", D = ".timeline-footer", S = ".stream", k = ".h-feed", R = ".tweet", L = ".detail-expander", C = ".expand", O = ".permalink", P = ".no-more-pane", M = "expanded", F = "pending-scroll-in", j = "pending-new-tweet-display", W = "pending-new-tweet", H = 0;
        i.prototype = new r, w.aug(i.prototype, {
            renderedClassNames: "twitter-timeline twitter-timeline-rendered",
            dimensions: {
                DEFAULT_HEIGHT: "600",
                DEFAULT_WIDTH: "520",
                NARROW_WIDTH: "320",
                maxHeight: "375",
                MIN_WIDTH: "180",
                MIN_HEIGHT: "200",
                WIDE_MEDIA_PADDING: 81,
                NARROW_MEDIA_PADDING: 16,
                WIDE_MEDIA_PADDING_CL: 60,
                NARROW_MEDIA_PADDING_CL: 12,
                BORDERS: 2
            },
            create: function(t) {
                var e, i, n, r, o = this, s = this.sandbox.createElement("div"), a = [];
                return s.innerHTML = t.body, (e = s.children[0] ||!1) ? (this.reconfigure(t.config), this.discardStaticOverflow(e), this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Timeline"), u.retinize(e), this.constrainMedia(e), this.searchQuery = e.getAttribute("data-search-query"), this.profileId = e.getAttribute("data-profile-id"), this.timelineType = e.getAttribute("data-timeline-type"), r = this.getTweetDetails(s.querySelector(k)), w.forIn(r, function(t) {
                    a.push(t)
                }), n = this.baseScribeData(), n.item_ids = a, n.item_details = r, this.timelineType && d.clientEvent({
                    page: this.timelineType + "_timeline",
                    component: "timeline",
                    element: "initial",
                    action: a.length ? "results": "no_results"
                }, n, !0), d.clientEvent({
                    page: "timeline",
                    component: "timeline",
                    element: "initial",
                    action: a.length ? "results": "no_results"
                }, n, !0), c.scribeTimelineAudienceImpression(), d.flush(), "assertive" == this.ariaPolite && (i = e.querySelector(I), i.setAttribute("aria-polite", "assertive")), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.ready().then(function(t) {
                    t.appendChild(e).then(function() {
                        o.renderResolver.fulfill(o.sandbox)
                    }), t.style({
                        cssText: "",
                        border: "none",
                        maxWidth: "100%",
                        minWidth: o.dimensions.MIN_WIDTH + "px"
                    }), o.layout(function() {
                        o.srcEl && o.srcEl.parentNode && o.srcEl.parentNode.removeChild(o.srcEl), o.predefinedWidth = o.width, o.predefinedHeight = o.height, o.width = t.width(o.width), o.height = t.height(o.height)
                    }).then(function() {
                        o.setNarrow(), o.sandbox.onresize(o.handleResize.bind(o)), o.completeResolver.fulfill(o.sandbox.element())
                    })
                }), e) : void 0
            },
            render: function() {
                var t = this;
                return this.preview || this.widgetId ? (this.rendered().then(this.staticTimeline ? function(e) {
                    t.layout(function() {
                        e.height(t.height = t.element.offsetHeight)
                    }), n.doLayoutAsync()
                } : function() {
                    t.recalculateStreamHeight(), n.doLayoutAsync()
                }), this.preview ? this.getPreviewTimeline() : this.getTimeline(), this.completed().then(this.scribePerformance.bind(this)), this.completed()) : (this.completeResolver.reject(400), this.completed())
            },
            scribePerformance: function() {
                a.endAndTrack("render", "widgets-js-load", "timeline", this.baseScribeData())
            },
            getPreviewTimeline: function() {
                var t = this;
                l.timelinePreview({
                    success: function(e) {
                        t.ready().then(function() {
                            t.element = t.create(e), t.readTranslations(), t.bindInteractions(), t.updateCursors(e.headers, {
                                initial: !0
                            }), n.doLayoutAsync()
                        })
                    },
                    error: function(e) {
                        return e && e.headers ? void t.completeResolver.reject(e.headers.status) : void t.completeResolver.fulfill(t.srcEl)
                    },
                    params: this.preview
                })
            },
            getTimeline: function() {
                var t = this;
                d.init(), l.timeline(w.aug({
                    id: this.widgetId,
                    instanceId: this.instanceId,
                    dnt: y.enabled(),
                    lang: this.lang,
                    success: function(e) {
                        t.ready().then(function() {
                            t.element = t.create(e), t.readTranslations(), t.bindInteractions(), t.updateTimeStamps(), t.updateCursors(e.headers, {
                                initial: !0
                            }), e.headers.xPolling && /\d/.test(e.headers.xPolling) && (t.pollInterval = 1e3 * e.headers.xPolling), t.staticTimeline || t.schedulePolling(), n.doLayoutAsync()
                        })
                    },
                    error: function(e) {
                        return e && e.headers ? void t.completeResolver.reject(e.headers.status) : void t.completeResolver.fulfill(t.srcEl)
                    }
                }, this.override))
            },
            reconfigure: function(t) {
                this.lang = t.lang, this.theme || (this.theme = t.theme), "dark" == this.theme && this.classAttr.push("thm-dark"), this.chromeless && this.classAttr.push("var-chromeless"), this.borderless && this.classAttr.push("var-borderless"), this.headerless && this.classAttr.push("var-headerless"), this.footerless && this.classAttr.push("var-footerless"), this.staticTimeline && this.classAttr.push("var-static"), !this.linkColor && t.linkColor && r.VALID_COLOR.test(t.linkColor) && (this.linkColor = RegExp.$1), !this.height && r.VALID_UNIT.test(t.height) && (this.height = RegExp.$1), this.height = Math.max(this.dimensions.MIN_HEIGHT, this.height ? this.height : this.dimensions.DEFAULT_HEIGHT), this.preview && this.classAttr.push("var-preview"), this.narrow = this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.addSiteStyles()
            },
            getTweetDetails: function(t) {
                var e, i = this, n = {};
                return e = t && t.children || [], w.toRealArray(e).forEach(function(t) {
                    w.aug(n, i.extractTweetScribeDetails(t))
                }), n
            },
            baseScribeData: function() {
                return {
                    widget_id: this.widgetId,
                    widget_origin: _.rootDocumentLocation(),
                    widget_frame: _.isFramed() && _.currentDocumentLocation(),
                    message: this.partner,
                    query: this.searchQuery,
                    profile_id: this.profileId
                }
            },
            bindInteractions: function() {
                var t = this, e = this.element, i=!0;
                this.bindIntentHandlers(), g.delegate(e, "click", ".load-tweets", function(e) {
                    i && (i=!1, t.forceLoad(), g.stop(e))
                }), g.delegate(e, "click", ".display-sensitive-image", function(i) {
                    t.showNSFW(b.closest(R, this, e)), g.stop(i)
                }), g.delegate(e, "mouseover", A, function() {
                    t.mouseOver=!0
                }), g.delegate(e, "mouseout", A, function() {
                    t.mouseOver=!1
                }), g.delegate(e, "mouseover", I, function() {
                    t.mouseOverNotifier=!0
                }), g.delegate(e, "mouseout", I, function() {
                    t.mouseOverNotifier=!1, window.setTimeout(function() {
                        t.hideNewTweetNotifier()
                    }, 3e3)
                }), this.staticTimeline || (g.delegate(e, "click", C, function(i) {
                    i.altKey || i.metaKey || i.shiftKey || (t.toggleExpando(b.closest(R, this, e)), g.stop(i))
                }), g.delegate(e, "click", "A", function(t) {
                    g.stopPropagation(t)
                }), g.delegate(e, "click", ".with-expansion", function(e) {
                    t.toggleExpando(this), g.stop(e)
                }), g.delegate(e, "click", ".load-more", function() {
                    t.loadMore()
                }), g.delegate(e, "click", I, function() {
                    t.scrollToTop(), t.hideNewTweetNotifier(!0)
                }))
            },
            scrollToTop: function() {
                var t = this.element.querySelector(S);
                t.scrollTop = 0, t.focus()
            },
            update: function() {
                var t = this, e = this.element.querySelector(k), i = e && e.children[0], n = i && i.getAttribute("data-tweet-id");
                this.updateTimeStamps(), this.requestTweets(n, !0, function(e) {
                    e.childNodes.length > 0 && t.insertNewTweets(e)
                })
            },
            loadMore: function() {
                var t = this, e = w.toRealArray(this.element.querySelectorAll(R)).pop(), i = e && e.getAttribute("data-tweet-id");
                this.requestTweets(i, !1, function(e) {
                    var n = t.element.querySelector(P), r = e.childNodes[0];
                    return n.style.cssText = "", r && r.getAttribute("data-tweet-id") == i && e.removeChild(r), e.childNodes.length > 0 ? void t.appendTweets(e) : (v.add(t.element, "no-more"), void n.focus())
                })
            },
            forceLoad: function() {
                var t = this, e=!!this.element.querySelectorAll(k).length;
                this.requestTweets(1, !0, function(i) {
                    i.childNodes.length && (t[e ? "insertNewTweets": "appendTweets"](i), v.add(t.element, "has-tweets"))
                })
            },
            schedulePolling: function(t) {
                var e = this;
                null !== this.pollInterval && (t = x.get("timeline.pollInterval") || t || this.pollInterval || 1e4, t>-1 && window.setTimeout(function() {
                    e.isUpdating || e.update(), e.schedulePolling()
                }, t))
            },
            updateCursors: function(t, e) {
                (e || {}).initial ? (this.cursors.maxPosition = t.maxPosition, this.cursors.minPosition = t.minPosition) : (e || {}).newer ? this.cursors.maxPosition = t.maxPosition || this.cursors.maxPosition : this.cursors.minPosition = t.minPosition || this.cursors.minPosition
            },
            requestTweets: function(t, e, i) {
                var n = this, r = {
                    id: this.widgetId,
                    instanceId: this.instanceId,
                    screenName: this.widgetScreenName,
                    userId: this.widgetUserId,
                    withReplies: this.widgetShowReplies,
                    dnt: y.enabled(),
                    lang: this.lang
                };
                e && this.cursors.maxPosition ? r.minPosition = this.cursors.maxPosition : !e && this.cursors.minPosition ? r.maxPosition = this.cursors.minPosition : e ? r.sinceId = t : r.maxId = t, r.complete = function() {
                    n.isUpdating=!1
                }, r.error = function(t) {
                    if (t && t.headers) {
                        if ("404" == t.headers.status)
                            return void(n.pollInterval = null);
                        if ("503" == t.headers.status)
                            return void(n.pollInterval*=1.5)
                    }
                }, r.success = function(t) {
                    var r, o, s = n.sandbox.createDocumentFragment(), a = n.sandbox.createElement("ol"), l = [];
                    if (n.updateCursors(t.headers, {
                        newer: e
                    }), t && t.headers && t.headers.xPolling && /\d+/.test(t.headers.xPolling) && (n.pollInterval = 1e3 * t.headers.xPolling), t && void 0 !== t.body) {
                        if (a.innerHTML = t.body, a.children[0] && "LI" != a.children[0].tagName)
                            return;
                        for (o = n.getTweetDetails(a), w.forIn(o, function(t) {
                            l.push(t)
                        }), l.length && (r = n.baseScribeData(), r.item_ids = l, r.item_details = o, r.event_initiator = e ? E.CLIENT_SIDE_APP : E.CLIENT_SIDE_USER, n.timelineType && d.clientEvent({
                            page: n.timelineType + "_timeline",
                            component: "timeline",
                            element: "initial",
                            action: l.length ? "results": "no_results"
                        }, r, !0), d.clientEvent({
                            page: "timeline",
                            component: "timeline",
                            element: e ? "newer": "older",
                            action: "results"
                        }, r, !0), d.flush()), u.retinize(a), n.constrainMedia(a); a.children[0];)
                            s.appendChild(a.children[0]);
                        i(s)
                    }
                }, l.timelinePoll(w.aug(r, this.override))
            },
            insertNewTweets: function(t) {
                var e, i = this, n = this.element.querySelector(S), r = n.querySelector(k), o = r.offsetHeight;
                return r.insertBefore(t, r.firstChild), e = r.offsetHeight - o, T.get("events").trigger("timelineUpdated", {
                    target: this.sandbox.element(),
                    region: "newer"
                }), n.scrollTop > 40 || this.mouseIsOver() ? (n.scrollTop = n.scrollTop + e, this.updateTimeStamps(), void this.showNewTweetNotifier()) : (v.remove(this.element, F), r.style.cssText = "margin-top: -" + e + "px", window.setTimeout(function() {
                    n.scrollTop = 0, v.add(i.element, F), m.cssTransitions() ? r.style.cssText = "" : s.animate(function(t) {
                        r.style.cssText = e > t ? "margin-top: -" + (e - t) + "px" : ""
                    }, e, 500, s.easeOut)
                }, 500), this.updateTimeStamps(), void("custom" != this.timelineType && this.gcTweets(50)))
            },
            appendTweets: function(t) {
                var e = this.element.querySelector(k);
                e.appendChild(t), this.updateTimeStamps(), T.get("events").trigger("timelineUpdated", {
                    target: this.sandbox.element(),
                    region: "older"
                })
            },
            gcTweets: function(t) {
                var e, i = this.element.querySelector(k), n = i.children.length;
                for (t = t || 50; n > t && (e = i.children[n - 1]); n--)
                    i.removeChild(e)
            },
            showNewTweetNotifier: function() {
                var t = this, e = this.element.querySelector(I), i = e.children[0];
                e.style.cssText = "", e.removeChild(i), e.appendChild(i), v.add(this.element, j), window.setTimeout(function() {
                    v.add(t.element, W)
                }, 10), this.newNoticeDisplayTime =+ new Date, window.setTimeout(function() {
                    t.hideNewTweetNotifier()
                }, 5e3)
            },
            hideNewTweetNotifier: function(t) {
                var e = this;
                (t ||!this.mouseOverNotifier) && (v.remove(this.element, W), window.setTimeout(function() {
                    v.remove(e.element, j)
                }, 500))
            },
            discardStaticOverflow: function(t) {
                var e, i = t.querySelector(k);
                if (this.staticTimeline)
                    for (this.height = 0; e = i.children[this.tweetLimit];)
                        i.removeChild(e)
            },
            hideStreamScrollBar: function() {
                var t, e = this.element.querySelector(S), i = this.element.querySelector(k);
                e.style.width = "", t = this.element.offsetWidth - i.offsetWidth, t > 0 && (e.style.width = this.element.offsetWidth + t + "px")
            },
            readTranslations: function() {
                var t = this.element, e = "data-dt-";
                this.datetime = new o(w.compact({
                    phrases: {
                        now: t.getAttribute(e + "now"),
                        s: t.getAttribute(e + "s"),
                        m: t.getAttribute(e + "m"),
                        h: t.getAttribute(e + "h"),
                        second: t.getAttribute(e + "second"),
                        seconds: t.getAttribute(e + "seconds"),
                        minute: t.getAttribute(e + "minute"),
                        minutes: t.getAttribute(e + "minutes"),
                        hour: t.getAttribute(e + "hour"),
                        hours: t.getAttribute(e + "hours")
                    },
                    months: t.getAttribute(e + "months").split("|"),
                    formats: {
                        abbr: t.getAttribute(e + "abbr"),
                        shortdate: t.getAttribute(e + "short"),
                        longdate: t.getAttribute(e + "long")
                    }
                }))
            },
            updateTimeStamps: function() {
                for (var t, e, i, n, r = this.element.querySelectorAll(O), o = 0; t = r[o]; o++)
                    i = t.getAttribute("data-datetime"), n = i && this.datetime.timeAgo(i, this.i18n), e = t.getElementsByTagName("TIME")[0], n && (e && e.innerHTML ? e.innerHTML = n : t.innerHTML = n)
            },
            mouseIsOver: function() {
                return this.mouseOver
            },
            addUrlParams: function(t) {
                var e = this, i = {
                    tw_w: this.widgetId,
                    related: this.related,
                    partner: this.partner,
                    query: this.searchQuery,
                    profile_id: this.profileId,
                    original_referer: _.rootDocumentLocation(),
                    tw_p: "embeddedtimeline"
                };
                return this.addUrlParams = h(i, function(t) {
                    var i = b.closest(R, t, e.element);
                    return i && {
                        tw_i: i.getAttribute("data-tweet-id")
                    }
                }), this.addUrlParams(t)
            },
            showNSFW: function(t) {
                var e, i, n, r, o, s, a = t.querySelector(".nsfw"), l = 0;
                a && (i = u.scaleDimensions(a.getAttribute("data-width"), a.getAttribute("data-height"), this.contentWidth(), a.getAttribute("data-height")), e=!!(r = a.getAttribute("data-player")), e ? o = this.sandbox.createElement("iframe") : (o = this.sandbox.createElement("img"), r = a.getAttribute(m.retina() ? "data-image-2x" : "data-image"), o.alt = a.getAttribute("data-alt"), s = this.sandbox.createElement("a"), s.href = a.getAttribute("data-href"), s.appendChild(o)), o.title = a.getAttribute("data-title"), o.src = r, o.width = i.width, o.height = i.height, n = b.closest(L, a, t), l = i.height - a.offsetHeight, a.parentNode.replaceChild(e ? o : s, a), n.style.cssText = "height:" + (n.offsetHeight + l) + "px")
            },
            toggleExpando: function(t) {
                var e, i, r = t.querySelector(L), o = r && r.children[0], s = o && o.getAttribute("data-expanded-media"), a = 0, l = t.querySelector(C), c = l && l.getElementsByTagName("B")[0], d = c && (c.innerText || c.textContent);
                if (c) {
                    if (this.layout(function() {
                        c.innerHTML = l.getAttribute("data-toggled-text"), l.setAttribute("data-toggled-text", d)
                    }), v.present(t, M))
                        return this.layout(function() {
                            v.remove(t, M)
                        }), r ? (this.layout(function() {
                            r.style.cssText = "", o.innerHTML = ""
                        }), void n.doLayout()) : void n.doLayout();
                    s && (e = this.sandbox.createElement("DIV"), e.innerHTML = s, u.retinize(e), a = this.constrainMedia(e), this.layout(function() {
                        o.appendChild(e)
                    })), r && this.layout(function() {
                        i = Math.max(o.offsetHeight, a), r.style.cssText = "height:" + i + "px"
                    }), this.layout(function() {
                        v.add(t, M)
                    }), n.doLayout()
                }
            },
            recalculateStreamHeight: function(t) {
                var e = this, i = this.element.querySelector(N), n = this.element.querySelector(D), r = this.element.querySelector(S);
                this.layout(function() {
                    var o = i.offsetHeight + (n ? n.offsetHeight : 0), s = t || e.sandbox.height();
                    r.style.cssText = "height:" + (s - o - 2) + "px", e.noscrollbar && e.hideStreamScrollBar()
                })
            },
            handleResize: function(t, e) {
                var i = this, r = Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth || this.dimensions.DEFAULT_WIDTH, t)));
                (r != this.width || e != this.height) && (this.width = r, this.height = e, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(r)), this.staticTimeline ? this.layout(function() {
                    i.height = i.element.offsetHeight, i.sandbox.height(i.height), T.get("events").trigger("resize", {
                        target: i.sandbox.element()
                    })
                }) : (this.recalculateStreamHeight(e), T.get("events").trigger("resize", {
                    target: this.sandbox.element()
                })), n.doLayoutAsync())
            }
        }), e.exports = i
    }, {
        "anim/transition": 2,
        "dom/classname": 3,
        "dom/delegate": 4,
        "dom/get": 5,
        "globals/private": 10,
        "globals/twttr": 11,
        "performance/perf-timers": 14,
        "scribe/audience": 21,
        "scribe/frame": 22,
        "tfw/util/data": 29,
        "tfw/util/media": 31,
        "tfw/util/params": 32,
        "tfw/widget/base": 33,
        "tfw/widget/syndicatedbase": 37,
        "util/css": 41,
        "util/datetime": 42,
        "util/document": 43,
        "util/donottrack": 45,
        "util/env": 46,
        "util/typevalidator": 57,
        "util/util": 60
    }
    ], 39 : [function(t, e) {
        function i(t) {
            n.apply(this, [t]);
            var e = this.params(), i = e.count || this.dataAttr("count"), o = e.size || this.dataAttr("size"), l = s.getScreenNameFromPage(), u = "" + (e.shareWithRetweet || this.dataAttr("share-with-retweet") || r.val("share-with-retweet"));
            this.classAttr.push("twitter-tweet-button"), "hashtag" == e.type||~this.classAttr.indexOf("twitter-hashtag-button") ? (this.type = "hashtag", this.classAttr.push("twitter-hashtag-button")) : "mention" == e.type||~this.classAttr.indexOf("twitter-mention-button") ? (this.type = "mention", this.classAttr.push("twitter-mention-button")) : this.classAttr.push("twitter-share-button"), this.text = e.text || this.dataAttr("text"), this.text && /\+/.test(this.text)&&!/ /.test(this.text) && (this.text = this.text.replace(/\+/g, " ")), this.counturl = e.counturl || this.dataAttr("counturl"), this.searchlink = e.searchlink || this.dataAttr("searchlink"), this.button_hashtag = a.hashTag(e.button_hashtag || e.hashtag || this.dataAttr("button-hashtag"), !1), this.size = "large" == o ? "l" : "m", this.align = e.align || this.dataAttr("align") || "", this.via = e.via || this.dataAttr("via"), this.hashtags = e.hashtags || this.dataAttr("hashtags"), this.screen_name = a.screenName(e.screen_name || e.screenName || this.dataAttr("button-screen-name")), this.url = e.url || this.dataAttr("url"), this.type ? (this.count = "none", this.shareWithRetweet = "never", l && (this.related = this.related ? l + "," + this.related : l)) : (this.text = this.text || c, this.url = this.url || s.getCanonicalURL() || d, this.count=~h.indexOf(i) ? i : "horizontal", this.count = "vertical" == this.count && "l" == this.size ? "none" : this.count, this.via = this.via || l, u&&~f.indexOf(u) && (this.shareWithRetweet = u.replace("-", "_")))
        }
        var n = t("tfw/widget/base"), r = t("globals/pagemetadata"), o = t("util/util"), s = t("util/uri"), a = t("util/twitter"), l = t("dom/textsize"), u = t("util/donottrack"), c = document.title, d = location.href, h = ["vertical", "horizontal", "none"], f = ["never", "publisher-first", "publisher-only", "author-first", "author-only"];
        i.prototype = new n, o.aug(i.prototype, {
            iframeSource: "widgets/tweet_button.67ae45a68af44ab435dd5797206058d3.{{lang}}.html",
            widgetUrlParams: function() {
                return o.compact({
                    text: this.text,
                    url: this.url,
                    via: this.via,
                    related: this.related,
                    count: this.count,
                    lang: this.lang,
                    counturl: this.counturl,
                    searchlink: this.searchlink,
                    placeid: this.placeid,
                    original_referer: location.href,
                    id: this.id,
                    size: this.size,
                    type: this.type,
                    screen_name: this.screen_name,
                    share_with_retweet: this.shareWithRetweet,
                    button_hashtag: this.button_hashtag,
                    hashtags: this.hashtags,
                    align: this.align,
                    partner: this.partner,
                    dnt: u.enabled(),
                    _: + new Date
                })
            },
            height: function() {
                return "vertical" == this.count ? 62 : "m" == this.size ? 20 : 28
            },
            width: function() {
                var t = {
                    ver: 8,
                    cnt: 14,
                    btn: 24,
                    xlcnt: 18,
                    xlbtn: 38
                }, e = "vertical" == this.count, i = "hashtag" == this.type && this.button_hashtag ? "Tweet %{hashtag}": "mention" == this.type && this.screen_name ? "Tweet to %{name}": "Tweet", n = this._(i, {
                    name: "@" + this.screen_name,
                    hashtag: "#" + this.button_hashtag
                }), r = this._("K"), o = this._("100K+"), s = (e ? "8888" : "88888") + r, a = 0, u = 0, c = 0, d = 0, h = this.styles.base, f = h;
                return ~["ja", "ko"].indexOf(this.lang) ? s += this._("10k unit") : s = s.length > o.length ? s : o, e ? (f = h.concat(this.styles.vbubble), d = t.ver, c = t.btn) : "l" == this.size ? (h = f = h.concat(this.styles.large), c = t.xlbtn, d = t.xlcnt) : (c = t.btn, d = t.cnt), "none" != this.count && (u = l(s, "", f).width + d), a = l(n, "", h.concat(this.styles.button)).width + c, e ? a > u ? a : u : this.calculatedWidth = a + u
            },
            render: function() {
                var t, e = this, i = this.makeIframeSource();
                return this.count && this.classAttr.push("twitter-count-" + this.count), t = this.create(i, this.dimensions(), {
                    title: this._("Twitter Tweet Button")
                }).then(function(t) {
                    return e.element = t
                })
            }
        }), e.exports = i
    }, {
        "dom/textsize": 7,
        "globals/pagemetadata": 9,
        "tfw/widget/base": 33,
        "util/donottrack": 45,
        "util/twitter": 56,
        "util/uri": 59,
        "util/util": 60
    }
    ], 40 : [function(t, e) {
        function i(t, e, i, n) {
            g[t] = g[t] || [], g[t].push({
                s: i,
                f: n,
                lang: e
            })
        }
        function n(t, e) {
            var i = {};
            i[t] = {
                item_type: 0
            }, m.clientEvent({
                page: "video",
                component: "tweet",
                action: "results"
            }, c.aug({}, e, {
                item_ids: [t],
                item_details: i
            }), !0), f.scribeVideoAudienceImpression()
        }
        function r(t, e) {
            var i = {};
            i[t] = {
                item_type: 0
            }, m.clientEvent({
                page: "video",
                component: "rawembedcode",
                action: "no_results"
            }, {
                widget_origin: d.rootDocumentLocation(),
                widget_frame: d.isFramed() && d.currentDocumentLocation(),
                message: e,
                item_ids: [t],
                item_details: i
            }, !0), f.scribeVideoAudienceImpression()
        }
        function o(t) {
            if (t) {
                a.apply(this, [t]);
                var e = this.srcEl && this.srcEl.getElementsByTagName("A"), i = e && e[e.length - 1], n = this.params();
                this.hideStatus = "hidden" === (n.status || this.dataAttr("status")), this.tweetId = n.tweetId || i && w.status(i.href)
            }
        }
        var s = t("tfw/widget/base"), a = t("tfw/widget/syndicatedbase"), l = t("util/datetime"), u = t("util/promise"), c = t("util/util"), d = t("util/document"), h = t("tfw/util/data"), f = t("scribe/audience"), m = t("scribe/frame"), p = t("globals/twttr"), w = t("util/twitter"), g = {}, v = [];
        o.prototype = new a, c.aug(o.prototype, {
            renderedClassNames: "twitter-video twitter-video-rendered",
            videoPlayer: !0,
            dimensions: {
                DEFAULT_HEIGHT: "360",
                DEFAULT_WIDTH: "640",
                maxHeight: "500",
                MIN_WIDTH: "320",
                MIN_HEIGHT: "180",
                WIDE_MEDIA_PADDING: 0,
                NARROW_MEDIA_PADDING: 0,
                BORDERS: 0
            },
            create: function(t) {
                var e, i = this, r = this.sandbox.createElement("div");
                return r.innerHTML = t, (e = r.children[0]) ? (this.playerConfig = JSON.parse(e.getAttribute("data-player-config")), this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Video"), this.sandbox.style({
                    cssText: "",
                    display: "block",
                    width: "99%",
                    minWidth: this.dimensions.MIN_WIDTH + "px",
                    maxWidth: "99%",
                    padding: "0",
                    margin: "10px 0",
                    position: "absolute",
                    visibility: "hidden"
                }), this.sandbox.appendChild(e).then(function() {
                    i.renderResolver.fulfill(i.sandbox)
                }), this.layout(function() {
                    i.predefinedWidth = i.width, i.width = i.sandbox.width(i.width), i.constrainMedia(e, i.contentWidth(i.width)), i.completeResolver.fulfill(i.sandbox.element())
                }), n(this.tweetId, this.baseScribeData()), e) : void 0
            },
            render: function() {
                var t = this;
                return this.tweetId ? (this.rendered().then(function(e) {
                    var i = t.srcEl;
                    i && i.parentNode && t.layout(function() {
                        i && i.parentNode && i.parentNode.removeChild(i)
                    }), t.layout(function() {
                        t.height = t.sandbox.height(t.element.offsetHeight)
                    }).then(function() {
                        e.onresize(t.handleResize.bind(t))
                    }), e.style({
                        position: "static",
                        visibility: "visible"
                    }), s.doLayoutAsync()
                }), i(this.tweetId, this.lang, function(e) {
                    t.ready().then(function() {
                        t.element = t.create(e), t.readTimestampTranslations(), t.writePlayerConfig(), s.doLayoutAsync()
                    })
                }, function() {
                    r(t.tweetId, t.partner), t.completeResolver.fulfill(t.srcEl)
                }), v.push(this.completed()), this.completed()) : (this.completeResolver.fulfill(this.srcEl), this.completed())
            },
            handleResize: function(t) {
                var e = this;
                t != this.width && (this.width = t, this.constrainMedia(this.element, this.contentWidth(this.width)), this.layout(function() {
                    e.height = e.sandbox.height(e.element.offsetHeight), p.get("events").trigger("resize", {
                        target: e.sandbox.element()
                    })
                }), s.doLayoutAsync())
            },
            baseScribeData: function() {
                return {
                    widget_origin: d.rootDocumentLocation(),
                    widget_frame: d.isFramed() && d.currentDocumentLocation(),
                    message: this.partner
                }
            },
            readTimestampTranslations: function() {
                var t = this.element, e = "data-dt-", i = t.getAttribute(e + "months") || "";
                this.datetime = new l(c.compact({
                    phrases: {
                        AM: t.getAttribute(e + "am"),
                        PM: t.getAttribute(e + "pm")
                    },
                    months: i.split("|"),
                    formats: {
                        full: t.getAttribute(e + "full")
                    }
                }))
            },
            getTimestamp: function() {
                var t = this.element.getAttribute("data-datetime"), e = t && this.datetime.localTimeStamp(t);
                return {
                    local: e
                }
            },
            writePlayerConfig: function() {
                this.playerConfig.statusTimestamp = this.getTimestamp(), this.playerConfig.hideStatus = this.hideStatus, this.element.setAttribute("data-player-config", JSON.stringify(this.playerConfig))
            }
        }), o.fetchAndRender = function() {
            var t = g, e = [];
            g = {};
            for (var i in t)
                t.hasOwnProperty(i) && e.push(i);
            e.length && (h.videos({
                ids: e.sort(),
                lang: t[e[0]][0].lang,
                complete: function(e) {
                    c.forIn(e, function(e, i) {
                        var n = t[e];
                        n.forEach(function(t) {
                            t.s && t.s.call(this, i)
                        }), delete t[e]
                    }), s.doLayout(), c.forIn(t, function(t, e) {
                        e.forEach(function(e) {
                            e.f && e.f.call(this, t)
                        })
                    }), s.doLayout()
                }
            }), u.every.apply(null, v), v = [])
        }, s.afterLoad(o.fetchAndRender), e.exports = o
    }, {
        "globals/twttr": 11,
        "scribe/audience": 21,
        "scribe/frame": 22,
        "tfw/util/data": 29,
        "tfw/widget/base": 33,
        "tfw/widget/syndicatedbase": 37,
        "util/datetime": 42,
        "util/document": 43,
        "util/promise": 53,
        "util/twitter": 56,
        "util/util": 60
    }
    ], 41 : [function(t, e) {
        e.exports = {
            sanitize: function(t, e, i) {
                var n, r = /^[\w ,%\/"'\-_#]+$/, o = t && t.split(";").map(function(t) {
                    return t.split(":").slice(0, 2).map(function(t) {
                        return t.trim()
                    })
                }), s = 0, a = [], l = i ? "!important": "";
                for (e = e || /^(font|text\-|letter\-|color|line\-)[\w\-]*$/; o && (n = o[s]); s++)
                    n[0].match(e) && n[1].match(r) && a.push(n.join(":") + l);
                return a.join(";")
            }
        }
    }, {}
    ], 42 : [function(t, e) {
        function i(t) {
            return 10 > t ? "0" + t : t
        }
        function n(t) {
            function e(t, e) {
                return r && r[t] && (t = r[t]), t.replace(/%\{([\w_]+)\}/g, function(t, i) {
                    return void 0 !== e[i] ? e[i] : t
                })
            }
            var r = t && t.phrases, o = t && t.months || a, s = t && t.formats || l;
            this.timeAgo = function(t) {
                var i, r = n.parseDate(t), a =+ new Date, l = a - r;
                return r ? isNaN(l) || 2 * u > l ? e("now") : c > l ? (i = Math.floor(l / u), e(s.abbr, {
                    number: i,
                    symbol: e(f, {
                        abbr: e("s"),
                        expanded: e(i > 1 ? "seconds" : "second")
                    })
                })) : d > l ? (i = Math.floor(l / c), e(s.abbr, {
                    number: i,
                    symbol: e(f, {
                        abbr: e("m"),
                        expanded: e(i > 1 ? "minutes" : "minute")
                    })
                })) : h > l ? (i = Math.floor(l / d), e(s.abbr, {
                    number: i,
                    symbol: e(f, {
                        abbr: e("h"),
                        expanded: e(i > 1 ? "hours" : "hour")
                    })
                })) : 365 * h > l ? e(s.shortdate, {
                    day: r.getDate(),
                    month: e(o[r.getMonth()])
                }) : e(s.longdate, {
                    day: r.getDate(),
                    month: e(o[r.getMonth()]),
                    year: r.getFullYear().toString().slice(2)
                }) : ""
            }, this.localTimeStamp = function(t) {
                var r = n.parseDate(t), a = r && r.getHours();
                return r ? e(s.full, {
                    day: r.getDate(),
                    month: e(o[r.getMonth()]),
                    year: r.getFullYear(),
                    hours24: i(a),
                    hours12: 13 > a ? a ? a: "12": a - 12,
                    minutes: i(r.getMinutes()),
                    seconds: i(r.getSeconds()),
                    amPm: e(12 > a ? "AM" : "PM")
                }) : ""
            }
        }
        var r = /(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/, o = /[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i, s = /^\d+$/, a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], l = {
            abbr: "%{number}%{symbol}",
            shortdate: "%{day} %{month}",
            longdate: "%{day} %{month} %{year}",
            full: "%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"
        }, u = 1e3, c = 60 * u, d = 60 * c, h = 24 * d, f = '<abbr title="%{expanded}">%{abbr}</abbr>';
        n.parseDate = function(t) {
            var e, i, n = t || "", l = n.toString();
            return (e = function() {
                var t;
                return s.test(l) ? parseInt(l, 10) : (t = l.match(o)) ? Date.UTC(t[7], a.indexOf(t[1]), t[2], t[3], t[4], t[5]) : (t = l.match(r)) ? Date.UTC(t[1], t[2] - 1, t[3], t[4], t[5], t[6]) : void 0
            }()) ? (i = new Date(e), !isNaN(i.getTime()) && i) : !1
        }, e.exports = n
    }, {}
    ], 43 : [function(t, e) {
        function i(t) {
            return t && s.isType("string", t) && (a = t), a
        }
        function n() {
            return l
        }
        function r() {
            return a !== l
        }
        var o = t("util/uri"), s = t("util/util"), a = o.getCanonicalURL() || document.location.href, l = a;
        e.exports = {
            isFramed: r,
            rootDocumentLocation: i,
            currentDocumentLocation: n
        }
    }, {
        "util/uri": 59,
        "util/util": 60
    }
    ], 44 : [function(t, e) {
        function i() {
            s = 1;
            for (var t = 0, e = a.length; e > t; t++)
                a[t]()
        }
        var n, r, o, s = 0, a = [], l=!1, u = document.createElement("a");
        /^loade|c/.test(document.readyState) && (s = 1), document.addEventListener && document.addEventListener("DOMContentLoaded", r = function() {
            document.removeEventListener("DOMContentLoaded", r, l), i()
        }, l), u.doScroll && document.attachEvent("onreadystatechange", n = function() {
            /^c/.test(document.readyState) && (document.detachEvent("onreadystatechange", n), i())
        }), o = u.doScroll ? function(t) {
            window.self != window.top ? s ? t() : a.push(t) : !function() {
                try {
                    u.doScroll("left")
                } catch (e) {
                    return setTimeout(function() {
                        o(t)
                    }, 50)
                }
                t()
            }()
        } : function(t) {
            s ? t() : a.push(t)
        }, e.exports = o
    }, {}
    ], 45 : [function(t, e) {
        function i() {
            l=!0
        }
        function n(t, e) {
            return l?!0 : s.asBoolean(a.val("dnt"))?!0 : document.navigator && 1 == document.navigator.doNotTrack?!0 : !navigator || 1 != navigator.doNotTrack && 1 != navigator.msDoNotTrack ? o.isUrlSensitive(e || document.location.host)?!0 : r.isFramed() && o.isUrlSensitive(r.rootDocumentLocation())?!0 : (t = u.test(t || document.referrer) && RegExp.$1, t && o.isUrlSensitive(t)?!0 : !1) : !0
        }
        var r = t("util/document"), o = t("util/tld"), s = t("util/typevalidator"), a = t("globals/pagemetadata"), l=!1, u = /https?:\/\/([^\/]+).*/i;
        e.exports = {
            setOn: i,
            enabled: n
        }
    }, {
        "globals/pagemetadata": 9,
        "util/document": 43,
        "util/tld": 55,
        "util/typevalidator": 57
    }
    ], 46 : [function(t, e) {
        function i(t) {
            return t = t || window, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : t.matchMedia ? t.matchMedia("only screen and (min-resolution: 144dpi)").matches : !1
        }
        function n(t) {
            return t = t || g, /(Trident|MSIE \d)/.test(t)
        }
        function r(t) {
            return t = t || g, /MSIE 9/.test(t)
        }
        function o(t) {
            return t = t || g, /(iPad|iPhone|iPod)/.test(t)
        }
        function s(t) {
            return t = t || g, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
        }
        function a() {
            return v
        }
        function l(t, e) {
            return t = t || window, e = e || g, t.postMessage&&!(n(e) && t.opener)
        }
        function u(t) {
            t = t || navigator;
            try {
                return !!t.plugins["Shockwave Flash"]||!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                return !1
            }
        }
        function c(t, e, i) {
            return t = t || window, e = e || navigator, i = i || g, "ontouchstart"in t || /Opera Mini/.test(i) || e.msMaxTouchPoints > 0
        }
        function d() {
            var t = document.body.style;
            return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
        }
        var h = t("util/domready"), f = t("util/typevalidator"), m = t("util/logger"), p = t("globals/pagemetadata"), w = t("globals/private"), g = window.navigator.userAgent, v=!1, b=!1, y = "twitter-csp-test";
        w.set("verifyCSP", function(t) {
            var e = document.getElementById(y);
            b=!0, v=!!t, e && e.parentNode.removeChild(e)
        }), h(function() {
            var t;
            return f.asBoolean(p.val("widgets:csp")) ? v=!0 : (t = document.createElement("script"), t.id = y, t.text = w.fullPath("verifyCSP") + "(false);", document.body.appendChild(t), void window.setTimeout(function() {
                b || (m.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'), m.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))
            }, 5e3))
        }), e.exports = {
            retina: i,
            anyIE: n,
            ie9: r,
            ios: o,
            android: s,
            cspEnabled: a,
            flashEnabled: u,
            canPostMessage: l,
            touch: c,
            cssTransitions: d
        }
    }, {
        "globals/pagemetadata": 9,
        "globals/private": 10,
        "util/domready": 44,
        "util/logger": 50,
        "util/typevalidator": 57
    }
    ], 47 : [function(t, e) {
        var i = t("util/util"), n = {
            bind: function(t, e) {
                return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
            },
            unbind: function(t, e) {
                if (this._handlers[t])
                    if (e) {
                        var i = this._handlers[t].indexOf(e);
                        i >= 0 && this._handlers[t].splice(i, 1)
                    } else 
                        this._handlers[t] = []
            },
            trigger: function(t, e) {
                var n = this._handlers && this._handlers[t];
                e = e || {}, e.type = t, n && n.forEach(function(t) {
                    i.async(t.bind(this, e))
                })
            }
        };
        e.exports = {
            Emitter: n
        }
    }, {
        "util/util": 60
    }
    ], 48 : [function(t, e) {
        var i = t("util/util");
        e.exports = function(t, e, n) {
            var r;
            if (n = n || document, t = t || {}, e = e || {}, t.name) {
                try {
                    r = n.createElement('<iframe name="' + t.name + '"></iframe>')
                } catch (o) {
                    r = n.createElement("iframe"), r.name = t.name
                }
                delete t.name
            } else 
                r = n.createElement("iframe");
            return t.id && (r.id = t.id, delete t.id), r.allowtransparency = "true", r.scrolling = "no", r.setAttribute("frameBorder", 0), r.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
                r.setAttribute(t, e)
            }), i.forIn(e, function(t, e) {
                r.style[t] = e
            }), r
        }
    }, {
        "util/util": 60
    }
    ], 49 : [function(t, e) {
        function i() {}
        var n, r = t("util/promise"), o = [];
        i.prototype.enqueue = function(t, e) {
            return new r(function(i) {
                o.push({
                    action: t,
                    resolver: i,
                    note: e
                })
            })
        }, i.prototype.exec = function() {
            var t, e = o;
            if (e.length)
                for (o = []; e.length;)
                    t = e.shift(), t && t.action ? t.resolver.fulfill(t.action()) : t.resolver.reject()
        }, i.prototype.delayedExec = function() {
            n && window.clearTimeout(n), n = window.setTimeout(this.exec, 100)
        }, e.exports = i
    }, {
        "util/promise": 53
    }
    ], 50 : [function(t, e) {
        function i() {
            l("info", u.toRealArray(arguments))
        }
        function n() {
            l("warn", u.toRealArray(arguments))
        }
        function r() {
            l("error", u.toRealArray(arguments))
        }
        function o(t) {
            h && (d[t] = a())
        }
        function s(t) {
            var e;
            h && (d[t] ? (e = a(), i("_twitter", t, e - d[t])) : r("timeEnd() called before time() for id: ", t))
        }
        function a() {
            return window.performance&&+window.performance.now()||+new Date
        }
        function l(t, e) {
            if (window[c] && window[c][t])
                switch (e.length) {
                case 1:
                    window[c][t](e[0]);
                    break;
                case 2:
                    window[c][t](e[0], e[1]);
                    break;
                case 3:
                    window[c][t](e[0], e[1], e[2]);
                    break;
                case 4:
                    window[c][t](e[0], e[1], e[2], e[3]);
                    break;
                case 5:
                    window[c][t](e[0], e[1], e[2], e[3], e[4]);
                    break;
                default:
                    0 !== e.length && window[c].warn && window[c].warn("too many params passed to logger." + t)
                }
        }
        var u = t("util/util"), c = ["con", "sole"].join(""), d = {}, h=!!~location.href.indexOf("tw_debug=true");
        e.exports = {
            info: i,
            warn: n,
            error: r,
            time: o,
            timeEnd: s
        }
    }, {
        "util/util": 60
    }
    ], 51 : [function(t, e) {
        function i(t) {
            return function(e) {
                return t in e
            }
        }
        function n() {
            this.assertions = [], this._defaults = {}
        }
        var r = t("util/util");
        n.prototype.assert = function(t, e) {
            return this.assertions.push({
                fn: t,
                msg: e || "assertion failed"
            }), this
        }, n.prototype.defaults = function(t) {
            return this._defaults = t || this._defaults, this
        }, n.prototype.require = function(t) {
            var e = this;
            return t = Array.isArray(t) ? t : r.toRealArray(arguments), t.forEach(function(t) {
                e.assert(i(t), "required: " + t)
            }), this
        }, n.prototype.parse = function(t) {
            var e, i;
            if (e = r.aug({}, this._defaults, t || {}), i = this.assertions.reduce(function(t, i) {
                return i.fn(e) || t.push(i.msg), t
            }, []), i.length > 0)
                throw new Error(i.join("\n"));
            return e
        }, e.exports = n
    }, {
        "util/util": 60
    }
    ], 52 : [function(t, e) {
        var i, n, r, o = t("util/querystring");
        i = function(t) {
            var e = t.search.substr(1);
            return o.decode(e)
        }, n = function(t) {
            var e = t.href, i = e.indexOf("#"), n = 0 > i ? "": e.substring(i + 1);
            return o.decode(n)
        }, r = function(t) {
            var e, r = {}, o = i(t), s = n(t);
            for (e in o)
                o.hasOwnProperty(e) && (r[e] = o[e]);
            for (e in s)
                s.hasOwnProperty(e) && (r[e] = s[e]);
            return r
        }, e.exports = {
            combined: r,
            fromQuery: i,
            fromFragment: n
        }
    }, {
        "util/querystring": 54
    }
    ], 53 : [function(t, e) {
        var i = t("util/util"), n = function(t) {
            try {
                var e = t.then;
                if ("function" == typeof e)
                    return !0
            } catch (i) {}
            return !1
        }, r = function(t) {
            Error.call(this, t)
        };
        r.prototype = Object.create(Error.prototype);
        var o = function() {
            var t = [];
            return t.pump = function(e) {
                i.async(function() {
                    for (var i = t.length, n = 0; i > n;)
                        n++, t.shift()(e)
                })
            }, t
        }, s = function(t, e, r, o, s, a) {
            var l=!1, u = this, c = function(t) {
                i.async(function() {
                    a("fulfilled"), o(t), e.pump(t)
                })
            }, d = function(t) {
                i.async(function() {
                    a("rejected"), s(t), r.pump(t)
                })
            }, h = function(t) {
                return n(t) ? void t.then(h, d) : void c(t)
            }, f = function(t) {
                return function(e) {
                    l || (l=!0, t(e))
                }
            };
            this.resolve = f(h, "resolve"), this.fulfill = f(c, "fulfill"), this.reject = f(d, "reject"), this.cancel = function() {
                u.reject(new Error("Cancel"))
            }, this.timeout = function() {
                u.reject(new Error("Timeout"))
            }, a("pending")
        }, a = function(t) {
            var e, i, n = new o, r = new o, a = "pending";
            this._addAcceptCallback = function(t) {
                n.push(t), "fulfilled" == a && n.pump(e)
            }, this._addRejectCallback = function(t) {
                r.push(t), "rejected" == a && r.pump(i)
            };
            var l = new s(this, n, r, function(t) {
                e = t
            }, function(t) {
                i = t
            }, function(t) {
                a = t
            });
            try {
                t && t(l)
            } catch (u) {
                l.reject(u)
            }
        }, l = function(t) {
            return "function" == typeof t
        }, u = function(t, e, i) {
            return l(t) ? function() {
                try {
                    var i = t.apply(null, arguments);
                    e.resolve(i)
                } catch (n) {
                    e.reject(n)
                }
            } : e[i].bind(e)
        }, c = function(t, e, i) {
            return l(t) && i._addAcceptCallback(t), l(e) && i._addRejectCallback(e), i
        };
        i.aug(a.prototype, {
            then: function(t, e) {
                var i = this;
                return new a(function(n) {
                    c(u(t, n, "resolve"), u(e, n, "reject"), i)
                })
            },
            "catch": function(t) {
                var e = this;
                return new a(function(i) {
                    c(null, u(t, i, "reject"), e)
                })
            }
        }), a.isThenable = n;
        var d = function(t) {
            return i.toRealArray(t).map(a.resolve)
        };
        a.any = function() {
            var t = d(arguments);
            return new a(function(e) {
                if (t.length) {
                    var i=!1, n = function(t) {
                        i || (i=!0, e.resolve(t))
                    }, r = function(t) {
                        i || (i=!0, e.reject(t))
                    };
                    t.forEach(function(t) {
                        t.then(n, r)
                    })
                } else 
                    e.reject("No futures passed to Promize.any()")
            })
        }, a.every = function() {
            var t = d(arguments);
            return new a(function(e) {
                if (t.length) {
                    var i = new Array(t.length), n = 0, r = function(r, o) {
                        n++, i[r] = o, n == t.length && e.resolve(i)
                    };
                    t.forEach(function(t, i) {
                        t.then(r.bind(null, i), e.reject)
                    })
                } else 
                    e.reject("No futures passed to Promize.every()")
            })
        }, a.some = function() {
            var t = d(arguments);
            return new a(function(e) {
                if (t.length) {
                    var i = 0, n = function() {
                        i++, i == t.length && e.reject()
                    };
                    t.forEach(function(t) {
                        t.then(e.resolve, n)
                    })
                } else 
                    e.reject("No futures passed to Promize.some()")
            })
        }, a.fulfill = function(t) {
            return new a(function(e) {
                e.fulfill(t)
            })
        }, a.resolve = function(t) {
            return new a(function(e) {
                e.resolve(t)
            })
        }, a.reject = function(t) {
            return new a(function(e) {
                e.reject(t)
            })
        }, e.exports = a
    }, {
        "util/util": 60
    }
    ], 54 : [function(t, e) {
        function i(t) {
            return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
        }
        function n(t) {
            return decodeURIComponent(t)
        }
        function r(t) {
            var e = [];
            return u.forIn(t, function(t, n) {
                var r = i(t);
                u.isType("array", n) || (n = [n]), n.forEach(function(t) {
                    l.hasValue(t) && e.push(r + "=" + i(t))
                })
            }), e.sort().join("&")
        }
        function o(t) {
            var e, i = {};
            return t ? (e = t.split("&"), e.forEach(function(t) {
                var e = t.split("="), r = n(e[0]), o = n(e[1]);
                return 2 == e.length ? u.isType("array", i[r]) ? void i[r].push(o) : r in i ? (i[r] = [i[r]], void i[r].push(o)) : void(i[r] = o) : void 0
            }), i) : {}
        }
        function s(t, e) {
            var i = r(e);
            return i.length > 0 ? t.indexOf("?") >= 0 ? t + "&" + r(e) : t + "?" + r(e) : t
        }
        function a(t) {
            var e = t && t.split("?");
            return 2 == e.length ? o(e[1]) : {}
        }
        var l = t("util/typevalidator"), u = t("util/util");
        e.exports = {
            url: s,
            decodeURL: a,
            decode: o,
            encode: r,
            encodePart: i,
            decodePart: n
        }
    }, {
        "util/typevalidator": 57,
        "util/util": 60
    }
    ], 55 : [function(t, e) {
        function i(t) {
            return t in o ? o[t] : o[t] = r.test(t)
        }
        function n() {
            return i(document.location.host)
        }
        var r = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i, o = {};
        e.exports = {
            isUrlSensitive: i,
            isHostPageSensitive: n
        }
    }, {}
    ], 56 : [function(t, e) {
        function i(t) {
            return "string" == typeof t && m.test(t) && RegExp.$1.length <= 20
        }
        function n(t) {
            return i(t) ? RegExp.$1 : void 0
        }
        function r(t, e) {
            var i = f.decodeURL(t);
            return e = e ||!1, i.screen_name = n(t), i.screen_name ? f.url("https://twitter.com/intent/" + (e ? "follow" : "user"), i) : void 0
        }
        function o(t) {
            return r(t, !0)
        }
        function s(t) {
            return "string" == typeof t && v.test(t)
        }
        function a(t, e) {
            return e = void 0 === e?!0 : e, s(t) ? (e ? "#" : "") + RegExp.$1 : void 0
        }
        function l(t) {
            return "string" == typeof t && p.test(t)
        }
        function u(t) {
            return l(t) && RegExp.$1
        }
        function c(t) {
            return w.test(t)
        }
        function d(t) {
            return g.test(t)
        }
        function h(t) {
            return b.test(t)
        }
        var f = t("util/querystring"), m = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i, p = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i, w = /^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i, g = /^http(s?):\/\/pbs\.twimg\.com\//, v = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/, b = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/;
        e.exports = {
            isHashTag: s,
            hashTag: a,
            isScreenName: i,
            screenName: n,
            isStatus: l,
            status: u,
            intentForProfileURL: r,
            intentForFollowURL: o,
            isTwitterURL: c,
            isTwimgURL: d,
            isIntentURL: h,
            regexen: {
                profile: m
            }
        }
    }, {
        "util/querystring": 54
    }
    ], 57 : [function(t, e) {
        function i(t) {
            return void 0 !== t && null !== t && "" !== t
        }
        function n(t) {
            return o(t) && t%1 === 0
        }
        function r(t) {
            return o(t)&&!n(t)
        }
        function o(t) {
            return i(t)&&!isNaN(t)
        }
        function s(t) {
            return i(t) && "array" == d.toType(t)
        }
        function a(t) {
            if (!i(t))
                return !1;
            switch (t) {
            case"on":
            case"ON":
            case"true":
            case"TRUE":
                return !0;
            case"off":
            case"OFF":
            case"false":
            case"FALSE":
                return !1;
            default:
                return !!t
            }
        }
        function l(t) {
            return o(t) ? t : void 0
        }
        function u(t) {
            return r(t) ? t : void 0
        }
        function c(t) {
            return n(t) ? t : void 0
        }
        var d = t("util/util");
        e.exports = {
            hasValue: i,
            isInt: n,
            isFloat: r,
            isNumber: o,
            isArray: s,
            asInt: c,
            asFloat: u,
            asNumber: l,
            asBoolean: a
        }
    }, {
        "util/util": 60
    }
    ], 58 : [function(t, e) {
        function i() {
            return String( + new Date) + Math.floor(1e5 * Math.random()) + n++
        }
        var n = 0;
        e.exports = {
            generate: i
        }
    }, {}
    ], 59 : [function(t, e) {
        function i(t, e) {
            var i, n;
            return e = e || location, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (i = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (n = e.pathname.split("/"), n.pop(), n.push(t), t = "/" + n.join("/")), [e.protocol, "//", i, t].join(""))
        }
        function n() {
            for (var t, e = document.getElementsByTagName("link"), n = 0; t = e[n]; n++)
                if ("canonical" == t.rel)
                    return i(t.href)
        }
        function r() {
            for (var t, e, i, n = document.getElementsByTagName("a"), r = document.getElementsByTagName("link"), s = [n, r], a = 0, l = 0, u = /\bme\b/; t = s[a]; a++)
                for (l = 0; e = t[l]; l++)
                    if (u.test(e.rel) && (i = o.screenName(e.href)))
                        return i
        }
        var o = t("util/twitter");
        e.exports = {
            absolutize: i,
            getCanonicalURL: n,
            getScreenNameFromPage: r
        }
    }, {
        "util/twitter": 56
    }
    ], 60 : [function(t, e) {
        function i(t) {
            return c(arguments).slice(1).forEach(function(e) {
                r(e, function(e, i) {
                    t[e] = i
                })
            }), t
        }
        function n(t) {
            return r(t, function(e, i) {
                a(i) && (n(i), l(i) && delete t[e]), (void 0 === i || null === i || "" === i) && delete t[e]
            }), t
        }
        function r(t, e) {
            for (var i in t)(!t.hasOwnProperty || t.hasOwnProperty(i)
                ) && e(i, t[i]);
            return t
        }
        function o(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function s(t, e) {
            return t == o(e)
        }
        function a(t) {
            return t === Object(t)
        }
        function l(t) {
            if (!a(t))
                return !1;
            if (Object.keys)
                return !Object.keys(t).length;
            for (var e in t)
                if (t.hasOwnProperty(e))
                    return !1;
            return !0
        }
        function u(t, e) {
            window.setTimeout(function() {
                t.call(e || null)
            }, 0)
        }
        function c(t) {
            return Array.prototype.slice.call(t)
        }
        function d(t, e) {
            return t && t.indexOf ? t.indexOf(e)>-1 : !1
        }
        e.exports = {
            aug: i,
            async: u,
            compact: n,
            contains: d,
            forIn: r,
            isObject: a,
            isEmptyObject: l,
            toType: o,
            isType: s,
            toRealArray: c
        }
    }, {}
    ], 61 : [function(t, e) {
        function i() {
            if (r)
                return r;
            if (s.isDynamicWidget()) {
                var t, e = 0, i = parent.frames.length;
                try {
                    if (r = parent.frames[u])
                        return r
                } catch (n) {}
                if (a.anyIE())
                    for (; i > e; e++)
                        try {
                            if (t = parent.frames[e], t && "function" == typeof t.openIntent)
                                return r = t
                } catch (n) {}
            }
        }
        function n() {
            var t, e, r, a, l, u, f = {};
            if ("function" === (typeof arguments[0]).toLowerCase() ? f.success = arguments[0] : f = arguments[0], t = f.success || function() {}, e = f.timeout || function() {}, r = f.nohub || function() {}, a = f.complete || function() {}, l = void 0 !== f.attempt ? f.attempt : h, !s.isDynamicWidget() || o)return r(), a(), !1;
            u = i(), l--;
            try {
                if (u && u.trigger)
                    return t(u), void a()
            } catch (m) {}
            return 0 >= l ? (o=!0, e(), void a()) : + new Date - c > d * h ? (o=!0, void r()) : void window.setTimeout(function() {
                n({
                    success: t,
                    timeout: e,
                    nohub: r,
                    attempt: l,
                    complete: a
                })
            }, d)
        }
        var r, o, s = t("tfw/util/env"), a = t("util/env"), l = "twttrHubFrameSecure", u = "http:" == document.location.protocol ? "twttrHubFrame": l, c =+ new Date, d = 100, h = 20;
        e.exports = {
            withHub: n,
            contextualHubId: u,
            secureHubId: l
        }
    }, {
        "tfw/util/env": 30,
        "util/env": 46
    }
    ], 62 : [function(t, e) {
        function i(t, e) {
            return t && t.getAttribute ? t.getAttribute("data-" + e) : void 0
        }
        function n(t, e) {
            return {
                element: t.element || w,
                action: t.action || g,
                page: r(e) ? "video": void 0
            }
        }
        function r(t) {
            return u.closest(".embedded-video", t)
        }
        function o(t) {
            return JSON.parse(i(r(t), "player-config"))
        }
        function s(t, e) {
            var n, o, s, a = r(e);
            return a ? n = l.aug({
                item_type: m,
                card_type: p,
                id: i(a, "tweet-id"),
                card_name: i(a, "card-name"),
                publisher_id: i(a, "publisher-id"),
                content_id: i(a, "content-id")
            }, t.itemData || {}) : (o = u.closest(".cards-multimedia", e), s = u.closest(".tweet", e), n = l.aug({
                item_type: m,
                card_type: p,
                id: i(s, "tweet-id"),
                card_name: i(o, "card-name"),
                publisher_id: i(o, "publisher-id"),
                content_id: i(o, "video-content-id")
            }, t.itemData || {})), {
                items: [n]
            }
        }
        function a(t) {
            var e = this;
            this.global = t, this.server = (new c).attachReceiver(new h.Receiver(t)).bind("scribe", function(t) {
                e.scribe(t, this)
            }).bind("requestPlayerConfig", function() {
                return e.requestPlayerConfig(this)
            }).bind("intent", function(t) {
                return e.intent(t, this)
            })
        }
        var l = t("util/util"), u = t("dom/get"), c = t("rpc/jsonrpc/server"), d = t("scribe/pixel"), h = t("rpc/postmessage"), f = t("tfw/widget/intent"), m = 0, p = 6, w = "amplify_player", g = "undefined";
        a.prototype.findIframeByWindow = function(t) {
            for (var e = this.global.document.getElementsByTagName("iframe"), i = e.length, n = 0; i > n; n++)
                if (e[n].contentWindow == t)
                    return e[n]
        }, a.prototype.intent = function(t, e) {
            var i = this.findIframeByWindow(e), n = t && t.url;
            n && i && f.open(n, i)
        }, a.prototype.requestPlayerConfig = function(t) {
            var e = this.findIframeByWindow(t);
            if (e)
                return o(e)
        }, a.prototype.scribe = function(t, e) {
            var i, r, o, a;
            i = t && t.customScribe, r = this.findIframeByWindow(e), i && r && (o = n(i, r), a = s(i, r), d.clientEvent2(o, a, !0))
        }, e.exports = a
    }, {
        "dom/get": 5,
        "rpc/jsonrpc/server": 16,
        "rpc/postmessage": 17,
        "scribe/pixel": 23,
        "tfw/widget/intent": 36,
        "util/util": 60
    }
    ], 63 : [function(t, e) {
        function i() {}
        var n = t("util/util"), r = t("util/events");
        n.aug(i.prototype, r.Emitter, {
            transportMethod: "",
            init: function() {},
            send: function(t) {
                var e;
                this._ready ? this._performSend(t) : e = this.bind("ready", function() {
                    this.unbind("ready", e), this._performSend(t)
                })
            },
            ready: function() {
                this.trigger("ready", this), this._ready=!0
            },
            isReady: function() {
                return !!this._ready
            },
            receive: function(t) {
                this.trigger("message", t)
            }
        }), e.exports = {
            Connection: i
        }
    }, {
        "util/events": 47,
        "util/util": 60
    }
    ], 64 : [function(t, e) {
        function i(t, e) {
            var i = e || Math.floor(100 * Math.random()), n = ['<object id="xdflashshim' + i + '" name="xdflashshim' + i + '"', 'type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"', 'width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">', '<param name="movie" value="' + t + "&debug=" + window.__XDDEBUG__ + '">', '<param name="wmode" value="window">', '<param name="allowscriptaccess" value="always">', "</object>"].join(" ");
            return n
        }
        e.exports = {
            object: i
        }
    }, {}
    ], 65 : [function(t, e) {
        function i(t) {
            return (JSON.parse || JSON.decode)(t)
        }
        function n(t) {
            this.con = t
        }
        function r() {
            this.id = r.id++
        }
        var o = t("util/util"), s = t("util/events");
        o.aug(n.prototype, {
            expose: function(t) {
                this.con.bind("message", this._handleRequest(t))
            },
            call: function(t) {
                var e, n = this;
                return this._requests || (this._requests = {}, this.con.bind("message", function(t) {
                    var e;
                    try {
                        t = i(t)
                    } catch (r) {
                        return 
                    }
                    t.callback && "number" == typeof t.id && (e = n._requests[t.id]) && (t.error ? e.trigger("error", t) : e.trigger("success", t), delete n._requests[t.id])
                })), e = new r, this._requests[e.id] = e, e.send(this.con, t, Array.prototype.slice.call(arguments, 1))
            },
            _handleRequest: function(t) {
                var e = this;
                return function(n) {
                    var r, o;
                    try {
                        n = i(n)
                    } catch (s) {
                        return 
                    }
                    n.callback || "number" == typeof n.id && "function" == typeof t[n.method] && (o = e._responseCallbacks(n.id), r = t[n.method].apply(t, n.params.concat(o)), "undefined" != typeof r && o[0](r))
                }
            },
            _responseCallbacks: function(t) {
                var e = this.con;
                return [function(i) {
                    e.send(JSON.stringify({
                        id: t,
                        result: i,
                        callback: !0
                    }))
                }, function i(n) {
                    e.send(JSON.stringify({
                        id: t,
                        error: i,
                        callback: n
                    }))
                }
                ]
            }
        }), r.id = 0, o.aug(r.prototype, s.Emitter, {
            send: function(t, e, i) {
                return t.send(JSON.stringify({
                    id: this.id,
                    method: e,
                    params: i
                })), this
            },
            success: function(t) {
                return this.bind("success", t), this
            },
            error: function(t) {
                return this.bind("error", t), this
            }
        }), e.exports = function(t) {
            return new n(t)
        }
    }, {
        "util/events": 47,
        "util/util": 60
    }
    ], 66 : [function(t, e) {
        function i() {}
        function n(t) {
            this.transportMethod = "PostMessage", this.options = t, this._createChild()
        }
        function r(t) {
            this.transportMethod = "Flash", this.options = t, this.token = Math.random().toString(16).substring(2), this._setup()
        }
        function o(t) {
            this.transportMethod = "Fallback", this.options = t, this._createChild()
        }
        var s, a = t("xd/base"), l = t("util/util"), u = t("util/env"), c = t("intents/intent"), d = "__ready__", h = 0;
        i.prototype = new a.Connection, l.aug(i.prototype, {
            _createChild: function() {
                this.options.window ? this._createWindow() : this._createIframe()
            },
            _createIframe: function() {
                function t() {
                    o.child = e.contentWindow, o._ready || o.init()
                }
                var e, i, n, r, o = this, a = {
                    allowTransparency: !0,
                    frameBorder: "0",
                    scrolling: "no",
                    tabIndex: "0",
                    name: this._name()
                }, u = l.aug(l.aug({}, a), this.options.iframe);
                window.postMessage ? (s || (s = document.createElement("iframe")), e = s.cloneNode(!1)) : e = document.createElement('<iframe name="' + u.name + '">'), e.id = u.name, l.forIn(u, function(t, i) {
                    "style" != t && e.setAttribute(t, i)
                }), r = e.getAttribute("style"), r && "undefined" != typeof r.cssText ? r.cssText = u.style : e.style.cssText = u.style, e.addEventListener("load", t, !1), e.src = this._source(), (i = this.options.appendTo) ? i.appendChild(e) : (n = this.options.replace) ? (i = n.parentNode, i && i.replaceChild(e, n)) : document.body.insertBefore(e, document.body.firstChild)
            },
            _createWindow: function() {
                var t = c.open(this._source()).popup;
                t && t.focus(), this.child = t, this.init()
            },
            _source: function() {
                return this.options.src
            },
            _name: function() {
                var t = "_xd_" + h++;
                return window.parent && window.parent != window && window.name && (t = window.name + t), t
            }
        }), n.prototype = new i, l.aug(n.prototype, {
            init: function() {
                function t(t) {
                    t.source === e.child && (e._ready || t.data !== d ? e.receive(t.data) : e.ready())
                }
                var e = this;
                window.addEventListener("message", t, !1)
            },
            _performSend: function(t) {
                this.child.postMessage(t, this.options.src)
            }
        }), r.prototype = new i, l.aug(r.prototype, {
            _setup: function() {
                var e = this, i = t("xd/flash");
                window["__xdcb" + e.token] = {
                    receive: function(t) {
                        e._ready || t !== d ? e.receive(t) : e.ready()
                    },
                    loaded: function() {}
                };
                var n = document.createElement("div");
                n.innerHTML = i.object("https://platform.twitter.com/xd/ft.swf?&token=" + e.token + "&parent=true&callback=__xdcb" + e.token + "&xdomain=" + e._host(), e.token), document.body.insertBefore(n, document.body.firstChild), e.proxy = n.firstChild, e._createChild()
            },
            init: function() {},
            _performSend: function(t) {
                this.proxy.send(t)
            },
            _host: function() {
                return this.options.src.replace(/https?:\/\//, "").split(/(:|\/)/)[0]
            },
            _source: function() {
                return this.options.src + (this.options.src.match(/\?/) ? "&" : "?") + "xd_token=" + window.escape(this.token)
            }
        }), o.prototype = new i, l.aug(o.prototype, {
            init: function() {},
            _performSend: function() {}
        }), e.exports = {
            connect: function(t) {
                return !u.canPostMessage() || u.anyIE() && t.window ? u.anyIE() && u.flashEnabled() ? new r(t) : new o(t) : new n(t)
            }
        }
    }, {
        "intents/intent": 13,
        "util/env": 46,
        "util/util": 60,
        "xd/base": 63,
        "xd/flash": 64
    }
    ]
}, {}, [1]);

