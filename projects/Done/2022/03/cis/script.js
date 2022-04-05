/*! @vimeo/player v2.16.4 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */ ! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Vimeo = e.Vimeo || {}, e.Vimeo.Player = t()) }(this, function() { "use strict";

    function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var e = "undefined" != typeof global && "[object global]" === {}.toString.call(global);

    function i(e, t) { return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1)) }

    function l(e) { return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e) }

    function u(e) { var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = t.id,
            e = t.url,
            t = n || e; if (!t) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."); if (e = t, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(t); if (l(t)) return t.replace("http:", "https:"); if (n) throw new TypeError("“".concat(n, "” is not a valid video id.")); throw new TypeError("“".concat(t, "” is not a vimeo.com url.")) } var t = void 0 !== Array.prototype.indexOf,
        Player = "undefined" != typeof window && void 0 !== window.postMessage; if (!(e || t && Player)) throw new Error("Sorry, the Vimeo Player API is not available in this browser."); var n, o, a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function c() { if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'"); if (o(this, "_id", "_WeakMap_" + f() + "." + f()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported") }

    function s(e, t) { if (!d(e) || !n.call(e, "_id")) throw new TypeError(t + " method called on incompatible receiver " + typeof e) }

    function f() { return Math.random().toString().substring(2) }

    function d(e) { return Object(e) === e }(Player = "undefined" != typeof self ? self : "undefined" != typeof window ? window : a).WeakMap || (n = Object.prototype.hasOwnProperty, Player.WeakMap = ((o = function(e, t, n) { Object.defineProperty ? Object.defineProperty(e, t, { configurable: !0, writable: !0, value: n }) : e[t] = n })(c.prototype, "delete", function(e) { if (s(this, "delete"), !d(e)) return !1; var t = e[this._id]; return !(!t || t[0] !== e) && (delete e[this._id], !0) }), o(c.prototype, "get", function(e) { if (s(this, "get"), d(e)) { var t = e[this._id]; return t && t[0] === e ? t[1] : void 0 } }), o(c.prototype, "has", function(e) { if (s(this, "has"), !d(e)) return !1; var t = e[this._id]; return !(!t || t[0] !== e) }), o(c.prototype, "set", function(e, t) { if (s(this, "set"), !d(e)) throw new TypeError("Invalid value used as weak map key"); var n = e[this._id]; return n && n[0] === e ? n[1] = t : o(e, this._id, [e, t]), this }), o(c, "_polyfill", !0), c)); var h, m = (function(e) { var t, n, r;
            r = function() { var t, n, r, o, i, e = Object.prototype.toString,
                    a = "undefined" != typeof setImmediate ? function(e) { return setImmediate(e) } : setTimeout; try { Object.defineProperty({}, "x", {}), t = function(e, t, n, r) { return Object.defineProperty(e, t, { value: n, writable: !0, configurable: !1 !== r }) } } catch (e) { t = function(e, t, n) { return e[t] = n, e } }

                function u(e, t) { this.fn = e, this.self = t, this.next = void 0 }

                function l(e, t) { y.add(e, t), n = n || a(y.drain) }

                function c(e) { var t, n = typeof e; return "function" == typeof(t = null != e && ("object" == n || "function" == n) ? e.then : t) && t }

                function s() { for (var e = 0; e < this.chain.length; e++) ! function(e, t, n) { var r, o; try {!1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = c(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r) } catch (e) { n.reject(e) } }(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0 }

                function f(e) { var n, r = this; if (!r.triggered) { r.triggered = !0, r.def && (r = r.def); try {
                            (n = c(e)) ? l(function() { var t = new m(r); try { n.call(e, function() { f.apply(t, arguments) }, function() { d.apply(t, arguments) }) } catch (e) { d.call(t, e) } }): (r.msg = e, r.state = 1, 0 < r.chain.length && l(s, r)) } catch (e) { d.call(new m(r), e) } } }

                function d(e) { var t = this;
                    t.triggered || (t.triggered = !0, (t = t.def ? t.def : t).msg = e, t.state = 2, 0 < t.chain.length && l(s, t)) }

                function h(e, n, r, o) { for (var t = 0; t < n.length; t++) ! function(t) { e.resolve(n[t]).then(function(e) { r(t, e) }, o) }(t) }

                function m(e) { this.def = e, this.triggered = !1 }

                function v(e) { this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0 }

                function p(e) { if ("function" != typeof e) throw TypeError("Not a function"); if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1; var r = new v(this);
                    this.then = function(e, t) { var n = { success: "function" != typeof e || e, failure: "function" == typeof t && t }; return n.promise = new this.constructor(function(e, t) { if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            n.resolve = e, n.reject = t }), r.chain.push(n), 0 !== r.state && l(s, r), n.promise }, this.catch = function(e) { return this.then(void 0, e) }; try { e.call(void 0, function(e) { f.call(r, e) }, function(e) { d.call(r, e) }) } catch (e) { d.call(r, e) } } var y = { add: function(e, t) { i = new u(e, t), o ? o.next = i : r = i, o = i, i = void 0 }, drain: function() { var e = r; for (r = o = n = void 0; e;) e.fn.call(e.self), e = e.next } },
                    g = t({}, "constructor", p, !1); return t(p.prototype = g, "__NPO__", 0, !1), t(p, "resolve", function(n) { return n && "object" == typeof n && 1 === n.__NPO__ ? n : new this(function(e, t) { if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                        e(n) }) }), t(p, "reject", function(n) { return new this(function(e, t) { if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                        t(n) }) }), t(p, "all", function(t) { var a = this; return "[object Array]" != e.call(t) ? a.reject(TypeError("Not an array")) : 0 === t.length ? a.resolve([]) : new a(function(n, e) { if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function"); var r = t.length,
                            o = Array(r),
                            i = 0;
                        h(a, t, function(e, t) { o[e] = t, ++i === r && n(o) }, e) }) }), t(p, "race", function(t) { var r = this; return "[object Array]" != e.call(t) ? r.reject(TypeError("Not an array")) : new r(function(n, e) { if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function");
                        h(r, t, function(e, t) { n(t) }, e) }) }), p }, (n = a)[t = "Promise"] = n[t] || r(), e.exports && (e.exports = n[t]) }(h = { exports: {} }), h.exports),
        v = new WeakMap;

    function p(e, t, n) { var r = v.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), v.set(e.element, r) }

    function y(e, t) { return (v.get(e.element) || {})[t] || [] }

    function g(e, t, n) { var r = v.get(e.element) || {}; if (!r[t]) return !0; if (!n) return r[t] = [], v.set(e.element, r), !0;
        n = r[t].indexOf(n); return -1 !== n && r[t].splice(n, 1), v.set(e.element, r), r[t] && 0 === r[t].length } var w = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

    function b(r, e) { return w.reduce(function(e, t) { var n = r.getAttribute("data-vimeo-".concat(t)); return !n && "" !== n || (e[t] = "" === n ? 1 : n), e }, 1 < arguments.length && void 0 !== e ? e : {}) }

    function k(e, t) { var n = e.html; if (!t) throw new TypeError("An element must be provided"); if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        e = document.createElement("div"); return e.innerHTML = n, t.appendChild(e.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe") }

    function E(i, e, t) { var a = 1 < arguments.length && void 0 !== e ? e : {},
            u = 2 < arguments.length ? t : void 0; return new Promise(function(t, n) { if (!l(i)) throw new TypeError("“".concat(i, "” is not a vimeo.com url.")); var e, r = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i)); for (e in a) a.hasOwnProperty(e) && (r += "&".concat(e, "=").concat(encodeURIComponent(a[e]))); var o = new("XDomainRequest" in window ? XDomainRequest : XMLHttpRequest);
            o.open("GET", r, !0), o.onload = function() { if (404 !== o.status)
                    if (403 !== o.status) try { var e = JSON.parse(o.responseText); if (403 === e.domain_status_code) return k(e, u), void n(new Error("“".concat(i, "” is not embeddable.")));
                        t(e) } catch (e) { n(e) } else n(new Error("“".concat(i, "” is not embeddable.")));
                    else n(new Error("“".concat(i, "” was not found."))) }, o.onerror = function() { var e = o.status ? " (".concat(o.status, ")") : "";
                n(new Error("There was an error fetching the embed code from Vimeo".concat(e, "."))) }, o.send() }) }

    function T(e) {
        function n(e) { "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e)) }
        e = 0 < arguments.length && void 0 !== e ? e : document, e = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
        e.forEach(function(t) { try { if (null !== t.getAttribute("data-vimeo-defer")) return; var e = b(t);
                E(u(e), e, t).then(function(e) { return k(e, t) }).catch(n) } catch (e) { n(e) } }) }

    function P(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) { return console.warn(e), {} }
        return e }

    function _(e, t, n) { e.element.contentWindow && e.element.contentWindow.postMessage && (t = { method: t }, void 0 !== n && (t.value = n), 8 <= (n = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"))) && n < 10 && (t = JSON.stringify(t)), e.element.contentWindow.postMessage(t, e.origin)) }

    function M(n, r) { var t, e, o, i, a = [];
        (r = P(r)).event ? ("error" === r.event && y(n, r.data.method).forEach(function(e) { var t = new Error(r.data.message);
            t.name = r.data.name, e.reject(t), g(n, r.data.method, e) }), a = y(n, "event:".concat(r.event)), t = r.data) : r.method && (e = n, o = r.method, (i = !((i = y(e, o)).length < 1) && (i = i.shift(), g(e, o, i), i)) && (a.push(i), t = r.value)), a.forEach(function(e) { try { if ("function" == typeof e) return void e.call(n, t);
                e.resolve(t) } catch (e) {} }) } var N, F, x, C = new WeakMap,
        j = new WeakMap,
        A = {},
        Player = function() {
            function Player(i) { var e, a = this,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Player), window.jQuery && i instanceof jQuery && (1 < i.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), i = i[0]), "undefined" != typeof document && "string" == typeof i && (i = document.getElementById(i)), e = i, !Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id."); if ("IFRAME" === i.nodeName || (r = i.querySelector("iframe")) && (i = r), "IFRAME" === i.nodeName && !l(i.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed."); if (C.has(i)) return C.get(i);
                this._window = i.ownerDocument.defaultView, this.element = i, this.origin = "*"; var n, r = new m(function(r, o) { var e;
                    a._onMessage = function(e) { if (l(e.origin) && a.element.contentWindow === e.source) { "*" === a.origin && (a.origin = e.origin); var t = P(e.data); if (t && "error" === t.event && t.data && "ready" === t.data.method) { var n = new Error(t.data.message); return n.name = t.data.name, void o(n) }
                            e = t && "ready" === t.event, n = t && "ping" === t.method; if (e || n) return a.element.setAttribute("data-ready", "true"), void r();
                            M(a, t) } }, a._window.addEventListener("message", a._onMessage), "IFRAME" !== a.element.nodeName && E(u(e = b(i, t)), e, i).then(function(e) { var t, n, r = k(e, i); return a.element = r, a._originalElement = i, t = i, n = r, r = v.get(t), v.set(n, r), v.delete(t), C.set(a.element, a), e }).catch(o) }); return j.set(this, r), C.set(this.element, this), "IFRAME" === this.element.nodeName && _(this, "ping"), A.isEnabled && (n = function() { return A.exit() }, this.fullscreenchangeHandler = function() {
                    (A.isFullscreen ? p : g)(a, "event:exitFullscreen", n), a.ready().then(function() { _(a, "fullscreenchange", A.isFullscreen) }) }, A.on("fullscreenchange", this.fullscreenchangeHandler)), this } var e, t, n; return e = Player, (t = [{ key: "callMethod", value: function(n) { var r = this,
                        o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; return new m(function(e, t) { return r.ready().then(function() { p(r, n, { resolve: e, reject: t }), _(r, n, o) }).catch(t) }) } }, { key: "get", value: function(n) { var r = this; return new m(function(e, t) { return n = i(n, "get"), r.ready().then(function() { p(r, n, { resolve: e, reject: t }), _(r, n) }).catch(t) }) } }, { key: "set", value: function(n, r) { var o = this; return new m(function(e, t) { if (n = i(n, "set"), null == r) throw new TypeError("There must be a value to set."); return o.ready().then(function() { p(o, n, { resolve: e, reject: t }), _(o, n, r) }).catch(t) }) } }, { key: "on", value: function(e, t) { if (!e) throw new TypeError("You must pass an event name."); if (!t) throw new TypeError("You must pass a callback function."); if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                    0 === y(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch(function() {}), p(this, "event:".concat(e), t) } }, { key: "off", value: function(e, t) { if (!e) throw new TypeError("You must pass an event name."); if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                    g(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch(function(e) {}) } }, { key: "loadVideo", value: function(e) { return this.callMethod("loadVideo", e) } }, { key: "ready", value: function() { var e = j.get(this) || new m(function(e, t) { t(new Error("Unknown player. Probably unloaded.")) }); return m.resolve(e) } }, { key: "addCuePoint", value: function(e) { return this.callMethod("addCuePoint", { time: e, data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {} }) } }, { key: "removeCuePoint", value: function(e) { return this.callMethod("removeCuePoint", e) } }, { key: "enableTextTrack", value: function(e, t) { if (!e) throw new TypeError("You must pass a language."); return this.callMethod("enableTextTrack", { language: e, kind: t }) } }, { key: "disableTextTrack", value: function() { return this.callMethod("disableTextTrack") } }, { key: "pause", value: function() { return this.callMethod("pause") } }, { key: "play", value: function() { return this.callMethod("play") } }, { key: "requestFullscreen", value: function() { return A.isEnabled ? A.request(this.element) : this.callMethod("requestFullscreen") } }, { key: "exitFullscreen", value: function() { return A.isEnabled ? A.exit() : this.callMethod("exitFullscreen") } }, { key: "getFullscreen", value: function() { return A.isEnabled ? m.resolve(A.isFullscreen) : this.get("fullscreen") } }, { key: "requestPictureInPicture", value: function() { return this.callMethod("requestPictureInPicture") } }, { key: "exitPictureInPicture", value: function() { return this.callMethod("exitPictureInPicture") } }, { key: "getPictureInPicture", value: function() { return this.get("pictureInPicture") } }, { key: "unload", value: function() { return this.callMethod("unload") } }, { key: "destroy", value: function() { var n = this; return new m(function(e) { var t;
                        j.delete(n), C.delete(n.element), n._originalElement && (C.delete(n._originalElement), n._originalElement.removeAttribute("data-vimeo-initialized")), n.element && "IFRAME" === n.element.nodeName && n.element.parentNode && (n.element.parentNode.parentNode && n._originalElement && n._originalElement !== n.element.parentNode ? n.element.parentNode.parentNode.removeChild(n.element.parentNode) : n.element.parentNode.removeChild(n.element)), n.element && "DIV" === n.element.nodeName && n.element.parentNode && (n.element.removeAttribute("data-vimeo-initialized"), (t = n.element.querySelector("iframe")) && t.parentNode && (t.parentNode.parentNode && n._originalElement && n._originalElement !== t.parentNode ? t.parentNode.parentNode.removeChild(t.parentNode) : t.parentNode.removeChild(t))), n._window.removeEventListener("message", n._onMessage), A.isEnabled && A.off("fullscreenchange", n.fullscreenchangeHandler), e() }) } }, { key: "getAutopause", value: function() { return this.get("autopause") } }, { key: "setAutopause", value: function(e) { return this.set("autopause", e) } }, { key: "getBuffered", value: function() { return this.get("buffered") } }, { key: "getCameraProps", value: function() { return this.get("cameraProps") } }, { key: "setCameraProps", value: function(e) { return this.set("cameraProps", e) } }, { key: "getChapters", value: function() { return this.get("chapters") } }, { key: "getCurrentChapter", value: function() { return this.get("currentChapter") } }, { key: "getColor", value: function() { return this.get("color") } }, { key: "setColor", value: function(e) { return this.set("color", e) } }, { key: "getCuePoints", value: function() { return this.get("cuePoints") } }, { key: "getCurrentTime", value: function() { return this.get("currentTime") } }, { key: "setCurrentTime", value: function(e) { return this.set("currentTime", e) } }, { key: "getDuration", value: function() { return this.get("duration") } }, { key: "getEnded", value: function() { return this.get("ended") } }, { key: "getLoop", value: function() { return this.get("loop") } }, { key: "setLoop", value: function(e) { return this.set("loop", e) } }, { key: "setMuted", value: function(e) { return this.set("muted", e) } }, { key: "getMuted", value: function() { return this.get("muted") } }, { key: "getPaused", value: function() { return this.get("paused") } }, { key: "getPlaybackRate", value: function() { return this.get("playbackRate") } }, { key: "setPlaybackRate", value: function(e) { return this.set("playbackRate", e) } }, { key: "getPlayed", value: function() { return this.get("played") } }, { key: "getQualities", value: function() { return this.get("qualities") } }, { key: "getQuality", value: function() { return this.get("quality") } }, { key: "setQuality", value: function(e) { return this.set("quality", e) } }, { key: "getSeekable", value: function() { return this.get("seekable") } }, { key: "getSeeking", value: function() { return this.get("seeking") } }, { key: "getTextTracks", value: function() { return this.get("textTracks") } }, { key: "getVideoEmbedCode", value: function() { return this.get("videoEmbedCode") } }, { key: "getVideoId", value: function() { return this.get("videoId") } }, { key: "getVideoTitle", value: function() { return this.get("videoTitle") } }, { key: "getVideoWidth", value: function() { return this.get("videoWidth") } }, { key: "getVideoHeight", value: function() { return this.get("videoHeight") } }, { key: "getVideoUrl", value: function() { return this.get("videoUrl") } }, { key: "getVolume", value: function() { return this.get("volume") } }, { key: "setVolume", value: function(e) { return this.set("volume", e) } }]) && r(e.prototype, t), n && r(e, n), Player }(); return e || (N = function() { for (var e, t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = 0, r = t.length, o = {}; n < r; n++)
            if ((e = t[n]) && e[1] in document) { for (n = 0; n < e.length; n++) o[t[0][n]] = e[n]; return o }
        return !1 }(), F = { fullscreenchange: N.fullscreenchange, fullscreenerror: N.fullscreenerror }, x = { request: function(o) { return new Promise(function(e, t) {
                function n() { x.off("fullscreenchange", n), e() }
                x.on("fullscreenchange", n); var r = (o = o || document.documentElement)[N.requestFullscreen]();
                r instanceof Promise && r.then(n).catch(t) }) }, exit: function() { return new Promise(function(t, e) { var n, r;
                x.isFullscreen ? (n = function e() { x.off("fullscreenchange", e), t() }, x.on("fullscreenchange", n), (r = document[N.exitFullscreen]()) instanceof Promise && r.then(n).catch(e)) : t() }) }, on: function(e, t) { e = F[e];
            e && document.addEventListener(e, t) }, off: function(e, t) { e = F[e];
            e && document.removeEventListener(e, t) } }, Object.defineProperties(x, { isFullscreen: { get: function() { return Boolean(document[N.fullscreenElement]) } }, element: { enumerable: !0, get: function() { return document[N.fullscreenElement] } }, isEnabled: { enumerable: !0, get: function() { return Boolean(document[N.fullscreenEnabled]) } } }), A = x, T(), function(e) { var r = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener("message", function(e) { if (l(e.origin) && e.data && "spacechange" === e.data.event)
                for (var t = r.querySelectorAll("iframe"), n = 0; n < t.length; n++)
                    if (t[n].contentWindow === e.source) { t[n].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px"); break } })) }()), Player });