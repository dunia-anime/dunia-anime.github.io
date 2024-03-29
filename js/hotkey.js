/* videojs-hotkeys v0.2.22 - https://github.com/ctd1500/videojs-hotkeys */ ! function (e, t) {
    "undefined" != typeof window && window.videojs ? t(window.videojs) : "function" == typeof define && define.amd ? define("videojs-hotkeys", ["video.js"], function (e) {
        return t(e.default || e)
    }) : "undefined" != typeof module && module.exports && (module.exports = t(require("video.js")))
}(0, function (e) {
    "use strict";
    "undefined" != typeof window && (window.videojs_hotkeys = {
        version: "0.2.22"
    });
    (e.registerPlugin || e.plugin)("hotkeys", function (t) {
        function r(e) {
            return "function" == typeof a ? a(e) : a
        }
        var n = this,
            o = n.el(),
            u = document,
            l = {
                volumeStep: .1,
                seekStep: 5,
                enableMute: !0,
                enableVolumeScroll: !0,
                enableFullscreen: !0,
                enableNumbers: !0,
                enableJogStyle: !1,
                alwaysCaptureHotkeys: !1,
                enableModifiersForNumbers: !0,
                enableInactiveFocus: !0,
                skipInitialFocus: !1,
                playPauseKey: function (e) {
                    return 32 === e.which || 179 === e.which
                },
                rewindKey: function (e) {
                    return 37 === e.which || 177 === e.which
                },
                forwardKey: function (e) {
                    return 39 === e.which || 176 === e.which
                },
                volumeUpKey: function (e) {
                    return 38 === e.which
                },
                volumeDownKey: function (e) {
                    return 40 === e.which
                },
                muteKey: function (e) {
                    return 77 === e.which
                },
                fullscreenKey: function (e) {
                    return 70 === e.which
                },
                customKeys: {}
            },
            i = e.mergeOptions || e.util.mergeOptions,
            c = (t = i(l, t || {})).volumeStep,
            a = t.seekStep,
            s = t.enableMute,
            m = t.enableVolumeScroll,
            y = t.enableFullscreen,
            f = t.enableNumbers,
            v = t.enableJogStyle,
            d = t.alwaysCaptureHotkeys,
            p = t.enableModifiersForNumbers,
            b = t.enableInactiveFocus,
            h = t.skipInitialFocus;
        o.hasAttribute("tabIndex") || o.setAttribute("tabIndex", "-1"), o.style.outline = "none", !d && n.autoplay() || h || n.one("play", function () {
            o.focus()
        }), b && n.on("userinactive", function () {
            var e = function () {
                    clearTimeout(t)
                },
                t = setTimeout(function () {
                    n.off("useractive", e);
                    var t = u.activeElement,
                        r = o.querySelector(".vjs-control-bar");
                    t && t.parentElement == r && o.focus()
                }, 10);
            n.one("useractive", e)
        }), n.on("play", function () {
            var e = o.querySelector(".iframeblocker");
            e && "" === e.style.display && (e.style.display = "block", e.style.bottom = "39px")
        });
        var w = function (e) {
                if (n.controls()) {
                    var t = u.activeElement;
                    if ((d || t == o || t == o.querySelector(".vjs-tech") || t == o.querySelector(".iframeblocker") || t == o.querySelector(".vjs-control-bar")) && m) {
                        e = window.event || e;
                        var r = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                        e.preventDefault(), 1 == r ? n.volume(n.volume() + c) : -1 == r && n.volume(n.volume() - c)
                    }
                }
            },
            k = function (e, r) {
                return t.playPauseKey(e, r) ? 1 : t.rewindKey(e, r) ? 2 : t.forwardKey(e, r) ? 3 : t.volumeUpKey(e, r) ? 4 : t.volumeDownKey(e, r) ? 5 : t.muteKey(e, r) ? 6 : t.fullscreenKey(e, r) ? 7 : void 0
            };
        return n.on("keydown", function (e) {
            var l, i, a = e.which,
                m = e.preventDefault,
                b = n.duration();
            if (n.controls()) {
                var h = u.activeElement;
                if (d || h == o || h == o.querySelector(".vjs-tech") || h == o.querySelector(".vjs-control-bar") || h == o.querySelector(".iframeblocker")) switch (k(e, n)) {
                    case 1:
                        m(), d && e.stopPropagation(), n.paused() ? n.play() : n.pause();
                        break;
                    case 2:
                        l = !n.paused(), m(), l && n.pause(), (i = n.currentTime() - r(e)) <= 0 && (i = 0), n.currentTime(i), l && n.play();
                        break;
                    case 3:
                        l = !n.paused(), m(), l && n.pause(), (i = n.currentTime() + r(e)) >= b && (i = l ? b - .001 : b), n.currentTime(i), l && n.play();
                        break;
                    case 5:
                        m(), v ? (i = n.currentTime() - 1, n.currentTime() <= 1 && (i = 0), n.currentTime(i)) : n.volume(n.volume() - c);
                        break;
                    case 4:
                        m(), v ? ((i = n.currentTime() + 1) >= b && (i = b), n.currentTime(i)) : n.volume(n.volume() + c);
                        break;
                    case 6:
                        s && n.muted(!n.muted());
                        break;
                    case 7:
                        y && (n.isFullscreen() ? n.exitFullscreen() : n.requestFullscreen());
                        break;
                    default:
                        if ((a > 47 && a < 59 || a > 95 && a < 106) && (p || !(e.metaKey || e.ctrlKey || e.altKey)) && f) {
                            var w = 48;
                            a > 95 && (w = 96);
                            var K = a - w;
                            m(), n.currentTime(n.duration() * K * .1)
                        }
                        for (var S in t.customKeys) {
                            var F = t.customKeys[S];
                            F && F.key && F.handler && F.key(e) && (m(), F.handler(n, t, e))
                        }
                }
            }
        }), n.on("dblclick", function (e) {
            if (n.controls()) {
                var t = e.relatedTarget || e.toElement || u.activeElement;
                t != o && t != o.querySelector(".vjs-tech") && t != o.querySelector(".iframeblocker") || y && (n.isFullscreen() ? n.exitFullscreen() : n.requestFullscreen())
            }
        }), n.on("mousewheel", w), n.on("DOMMouseScroll", w), this
    })
});
//# sourceMappingURL=videojs.hotkeys.min.js.map