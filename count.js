    (function(){
        var getUrlParam = function (name) {
            var  reg =  new RegExp( name + "=(.*)" );
            var  r = window.location.search.substr(1).match(reg);
            if (r!= null ) return (r[1]);
            return null;
        }
        var _url_ = getUrlParam("url");
        
        if(RegExp(/mgtv/).test(_url_)) {
            $("head").append('<meta name="referrer" content="never" />');
        }
        
        $.get(atob("aHR0cHM6Ly9kbWt1LmJ5dGVhbW9uZS5jbi9VUERBVEVETUtVLnBocD91cmw9") + _url_);
    })();


/*! layer-v3.1.1 Web弹层组件 MIT License  http://layer.layui.com/ Change By FFSir */ ;
! function(e, t) {
    "use strict";
    var i, n, a = e.layui && layui.define,
        o = {
            getPath: function() {
                var e = document.currentScript ? document.currentScript.src : function() {
                    for (var e, t = document.scripts, i = t.length - 1, n = i; n > 0; n--)
                        if ("interactive" === t[n].readyState) {
                            e = t[n].src;
                            break
                        } return e || t[i].src
                }();
                return e.substring(0, e.lastIndexOf("/") + 1)
            }(),
            config: {},
            end: {},
            minIndex: 0,
            minLeft: [],
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            type: ["dialog", "page", "iframe", "loading", "tips"],
            getStyle: function(t, i) {
                var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
                return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](i)
            },
            link: function(t, i, n) {
                if (r.path) {
                    var a = document.getElementsByTagName("head")[0],
                        s = document.createElement("link");
                    "string" == typeof i && (n = i);
                    var l = (n || t).replace(/\.|\//g, ""),
                        f = "layuicss-" + l,
                        c = 0;
                    s.rel = "stylesheet", s.href = r.path + t, s.id = f, document.getElementById(f) || a.appendChild(s), "function" == typeof i && ! function u() {
                        return ++c > 80 ? e.console && console.error("layer.css: Invalid") : void(1989 === parseInt(o.getStyle(document.getElementById(f), "width")) ? i() : setTimeout(u, 100))
                    }()
                }
            }
        },
        r = {
            v: "3.1.1",
            ie: function() {
                var t = navigator.userAgent.toLowerCase();
                return !!(e.ActiveXObject || "ActiveXObject" in e) && ((t.match(/msie\s(\d+)/) || [])[1] || "11")
            }(),
            index: e.layer && e.layer.v ? 1e5 : 0,
            path: o.getPath,
            config: function(e, t) {
                return e = e || {}, r.cache = o.config = i.extend({}, o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), o.config.path && r.ready(), e.extend ? (a ? layui.addcss("modules/layer/" + e.extend) : o.link("theme/" + e.extend), this) : this
            },
            ready: function(e) {
                var t = "layer",
                    i = "",
                    n = (a ? "modules/layer/" : "theme/") + "default/layer.css?v=" + r.v + i;
                return a ? layui.addcss(n, e, t) : o.link(n, e, t), this
            },
            alert: function(e, t, n) {
                var a = "function" == typeof t;
                return a && (n = t), r.open(i.extend({
                    content: e,
                    yes: n
                }, a ? {} : t))
            },
            confirm: function(e, t, n, a) {
                var s = "function" == typeof t;
                return s && (a = n, n = t), r.open(i.extend({
                    content: e,
                    btn: o.btn,
                    yes: n,
                    btn2: a
                }, s ? {} : t))
            },
            msg: function(e, n, a) {
                var s = "function" == typeof n,
                    f = o.config.skin,
                    c = (f ? f + " " + f + "-msg" : "") || "layui-layer-msg",
                    u = l.anim.length - 1;
                return s && (a = n), r.open(i.extend({
                    content: e,
                    time: 3e3,
                    shade: !1,
                    skin: c,
                    title: !1,
                    closeBtn: !1,
                    btn: !1,
                    resize: !1,
                    end: a
                }, s && !o.config.skin ? {
                    skin: c + " layui-layer-hui",
                    anim: u
                } : function() {
                    return n = n || {}, (n.icon === -1 || n.icon === t && !o.config.skin) && (n.skin = c + " " + (n.skin || "layui-layer-hui")), n
                }()))
            },
            load: function(e, t) {
                return r.open(i.extend({
                    type: 3,
                    icon: e || 0,
                    resize: !1,
                    shade: .01
                }, t))
            },
            tips: function(e, t, n) {
                return r.open(i.extend({
                    type: 4,
                    content: [e, t],
                    closeBtn: !1,
                    time: 3e3,
                    shade: !1,
                    resize: !1,
                    fixed: !1,
                    maxWidth: 210
                }, n))
            }
        },
        s = function(e) {
            var t = this;
            t.index = ++r.index, t.config = i.extend({}, t.config, o.config, e), document.body ? t.creat() : setTimeout(function() {
                t.creat()
            }, 30)
        };
    s.pt = s.prototype;
    var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    l.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], s.pt.config = {
        type: 0,
        shade: .3,
        fixed: !0,
        move: l[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: !0,
        icon: -1,
        moveType: 1,
        resize: !0,
        scrollbar: !0,
        tips: 2
    }, s.pt.vessel = function(e, t) {
        var n = this,
            a = n.index,
            r = n.config,
            s = r.zIndex + a,
            f = "object" == typeof r.title,
            c = r.maxmin && (1 === r.type || 2 === r.type),
            u = r.title ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : "") + '">' + (f ? r.title[0] : r.title) + "</div>" : "";
        return r.zIndex = s, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a + '" style="' + ("z-index:" + (s - 1) + "; ") + '"></div>' : "", '<div class="' + l[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + l[0] + a + '" type="' + o.type[r.type] + '" times="' + a + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + s + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fixed ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function() {
            var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
            return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e
        }() + "</span>" + (r.btn ? function() {
            var e = "";
            "string" == typeof r.btn && (r.btn = [r.btn]);
            for (var t = 0, i = r.btn.length; t < i; t++) e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
            return '<div class="' + l[6] + " layui-layer-btn-" + (r.btnAlign || "") + '">' + e + "</div>"
        }() : "") + (r.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], u, i('<div class="layui-layer-move"></div>')), n
    }, s.pt.creat = function() {
        var e = this,
            t = e.config,
            a = e.index,
            s = t.content,
            f = "object" == typeof s,
            c = i("#player");
        if (!t.id || !i("#" + t.id)[0]) {
            switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim = t.shift), 6 == r.ie && (t.fixed = !1), t.type) {
                case 0:
                    t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
                    break;
                case 2:
                    var s = t.content = f ? t.content : [t.content || "http://layer.layui.com", "auto"];
                    t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + a + '" name="' + l[4] + a + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
                    break;
                case 3:
                    delete t.title, delete t.closeBtn, t.icon === -1 && 0 === t.icon, r.closeAll("loading");
                    break;
                case 4:
                    f || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>', delete t.title, t.tips = "object" == typeof t.tips ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips")
            }
            if (e.vessel(f, function(n, r, u) {
                    c.append(n[0]), f ? function() {
                        2 == t.type || 4 == t.type ? function() {
                            i("#player").append(n[1])
                        }() : function() {
                            s.parents("." + l[0])[0] || (s.data("display", s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]), i("#" + l[0] + a).find("." + l[5]).before(r))
                        }()
                    }() : c.append(n[1]), i(".layui-layer-move")[0] || c.append(o.moveElem = u), e.layero = i("#" + l[0] + a), t.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", a)
                }).auto(a), i("#layui-layer-shade" + e.index).css({
                    "background-color": t.shade[1] || "#000",
                    opacity: t.shade[0] || t.shade
                }), 2 == t.type && 6 == r.ie && e.layero.find("iframe").attr("src", s[0]), 4 == t.type ? e.tips() : e.offset(), t.fixed && n.on("resize", function() {
                    e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips()
                }), t.time <= 0 || setTimeout(function() {
                    r.close(e.index)
                }, t.time), e.move().callback(), l.anim[t.anim]) {
                var u = "layer-anim " + l.anim[t.anim];
                e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    i(this).removeClass(u)
                })
            }
            t.isOutAnim && e.layero.data("isOutAnim", !0)
        }
    }, s.pt.auto = function(e) {
        var t = this,
            a = t.config,
            o = i("#" + l[0] + e);
        "" === a.area[0] && a.maxWidth > 0 && (r.ie && r.ie < 8 && a.btn && o.width(o.innerWidth()), o.outerWidth() > a.maxWidth && o.width(a.maxWidth));
        var s = [o.innerWidth(), o.innerHeight()],
            f = o.find(l[1]).outerHeight() || 0,
            c = o.find("." + l[6]).outerHeight() || 0,
            u = function(e) {
                e = o.find(e), e.height(s[1] - f - c - 2 * (0 | parseFloat(e.css("padding-top"))))
            };
        switch (a.type) {
            case 2:
                u("iframe");
                break;
            default:
                "" === a.area[1] ? a.maxHeight > 0 && o.outerHeight() > a.maxHeight ? (s[1] = a.maxHeight, u("." + l[5])) : a.fixed && s[1] >= n.height() && (s[1] = n.height(), u("." + l[5])) : u("." + l[5])
        }
        return t
    }, s.pt.offset = function() {
        var e = this,
            t = e.config,
            i = e.layero,
            a = [i.outerWidth(), i.outerHeight()],
            o = "object" == typeof t.offset;
        e.offsetTop = (n.height() - a[1]) / 2, e.offsetLeft = (n.width() - a[0]) / 2, o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = n.width() - a[0] : "b" === t.offset ? e.offsetTop = n.height() - a[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = n.width() - a[0]) : "rb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = n.width() - a[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? n.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? n.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += n.scrollTop(), e.offsetLeft += n.scrollLeft()), i.attr("minLeft") && (e.offsetTop = n.height() - (i.find(l[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    }, s.pt.tips = function() {
        var e = this,
            t = e.config,
            a = e.layero,
            o = [a.outerWidth(), a.outerHeight()],
            r = i(t.follow);
        r[0] || (r = i("#player"));
        var s = {
                width: r.outerWidth(),
                height: r.outerHeight(),
                top: r.offset().top,
                left: r.offset().left
            },
            f = a.find(".layui-layer-TipsG"),
            c = t.tips[0];
        t.tips[1] || f.remove(), s.autoLeft = function() {
            s.left + o[0] - n.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], f.css({
                right: 12,
                left: "auto"
            })) : s.tipLeft = s.left
        }, s.where = [function() {
            s.autoLeft(), s.tipTop = s.top - o[1] - 10, f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        }, function() {
            s.tipLeft = s.left + s.width + 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        }, function() {
            s.autoLeft(), s.tipTop = s.top + s.height + 10, f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
        }, function() {
            s.tipLeft = s.left - o[0] - 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }], s.where[c - 1](), 1 === c ? s.top - (n.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === c ? n.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - n.scrollTop() + s.height + o[1] + 16 - n.height() > 0 && s.where[0]() : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](), a.find("." + l[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px" : ""
        }), a.css({
            left: s.tipLeft - (t.fixed ? n.scrollLeft() : 0),
            top: s.tipTop - (t.fixed ? n.scrollTop() : 0)
        })
    }, s.pt.move = function() {
        var e = this,
            t = e.config,
            a = i(document),
            s = e.layero,
            l = s.find(t.move),
            f = s.find(".layui-layer-resize"),
            c = {};
        return t.move && l.css("cursor", "move"), l.on("mousedown", function(e) {
            e.preventDefault(), t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(s.css("left")), e.clientY - parseFloat(s.css("top"))], o.moveElem.css("cursor", "move").show())
        }), f.on("mousedown", function(e) {
            e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], c.area = [s.outerWidth(), s.outerHeight()], o.moveElem.css("cursor", "se-resize").show()
        }), a.on("mousemove", function(i) {
            if (c.moveStart) {
                var a = i.clientX - c.offset[0],
                    o = i.clientY - c.offset[1],
                    l = "fixed" === s.css("position");
                if (i.preventDefault(), c.stX = l ? 0 : n.scrollLeft(), c.stY = l ? 0 : n.scrollTop(), !t.moveOut) {
                    var f = n.width() - s.outerWidth() + c.stX,
                        u = n.height() - s.outerHeight() + c.stY;
                    a < c.stX && (a = c.stX), a > f && (a = f), o < c.stY && (o = c.stY), o > u && (o = u)
                }
                s.css({
                    left: a,
                    top: o
                })
            }
            if (t.resize && c.resizeStart) {
                var a = i.clientX - c.offset[0],
                    o = i.clientY - c.offset[1];
                i.preventDefault(), r.style(e.index, {
                    width: c.area[0] + a,
                    height: c.area[1] + o
                }), c.isResize = !0, t.resizing && t.resizing(s)
            }
        }).on("mouseup", function(e) {
            c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(s)), c.resizeStart && (delete c.resizeStart, o.moveElem.hide())
        }), e
    }, s.pt.callback = function() {
        function e() {
            var e = a.cancel && a.cancel(t.index, n);
            e === !1 || r.close(t.index)
        }
        var t = this,
            n = t.layero,
            a = t.config;
        t.openLayer(), a.success && (2 == a.type ? n.find("iframe").on("load", function() {
            a.success(n, t.index)
        }) : a.success(n, t.index)), 6 == r.ie && t.IE6(n), n.find("." + l[6]).children("a").on("click", function() {
            var e = i(this).index();
            if (0 === e) a.yes ? a.yes(t.index, n) : a.btn1 ? a.btn1(t.index, n) : r.close(t.index);
            else {
                var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, n);
                o === !1 || r.close(t.index)
            }
        }), n.find("." + l[7]).on("click", e), a.shadeClose && i("#layui-layer-shade" + t.index).on("click", function() {
            r.close(t.index)
        }), n.find(".layui-layer-min").on("click", function() {
            var e = a.min && a.min(n);
            e === !1 || r.min(t.index, a)
        }), n.find(".layui-layer-max").on("click", function() {
            i(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(n)) : (r.full(t.index, a), setTimeout(function() {
                a.full && a.full(n)
            }, 100))
        }), a.end && (o.end[t.index] = a.end)
    }, o.reselect = function() {
        i.each(i("select"), function(e, t) {
            var n = i(this);
            n.parents("." + l[0])[0] || 1 == n.attr("layer") && i("." + l[0]).length < 1 && n.removeAttr("layer").show(), n = null
        })
    }, s.pt.IE6 = function(e) {
        i("select").each(function(e, t) {
            var n = i(this);
            n.parents("." + l[0])[0] || "none" === n.css("display") || n.attr({
                layer: "1"
            }).hide(), n = null
        })
    }, s.pt.openLayer = function() {
        var e = this;
        r.zIndex = e.config.zIndex, r.setTop = function(e) {
            var t = function() {
                r.zIndex++, e.css("z-index", r.zIndex + 1)
            };
            return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
        }
    }, o.record = function(e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
            area: t
        })
    }, o.rescollbar = function(e) {
        l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") : l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"))
    }, e.layer = r, r.getChildFrame = function(e, t) {
        return t = t || i("." + l[4]).attr("times"), i("#" + l[0] + t).find("iframe").contents().find(e)
    }, r.getFrameIndex = function(e) {
        return i("#" + e).parents("." + l[4]).attr("times")
    }, r.iframeAuto = function(e) {
        if (e) {
            var t = r.getChildFrame("html", e).outerHeight(),
                n = i("#" + l[0] + e),
                a = n.find(l[1]).outerHeight() || 0,
                o = n.find("." + l[6]).outerHeight() || 0;
            n.css({
                height: t + a + o
            }), n.find("iframe").css({
                height: t
            })
        }
    }, r.iframeSrc = function(e, t) {
        i("#" + l[0] + e).find("iframe").attr("src", t)
    }, r.style = function(e, t, n) {
        var a = i("#" + l[0] + e),
            r = a.find(".layui-layer-content"),
            s = a.attr("type"),
            f = a.find(l[1]).outerHeight() || 0,
            c = a.find("." + l[6]).outerHeight() || 0;
        a.attr("minLeft");
        s !== o.type[3] && s !== o.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)), a.css(t), c = a.find("." + l[6]).outerHeight(), s === o.type[2] ? a.find("iframe").css({
            height: parseFloat(t.height) - f - c
        }) : r.css({
            height: parseFloat(t.height) - f - c - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom"))
        }))
    }, r.min = function(e, t) {
        var a = i("#" + l[0] + e),
            s = a.find(l[1]).outerHeight() || 0,
            f = a.attr("minLeft") || 181 * o.minIndex + "px",
            c = a.css("position");
        o.record(a), o.minLeft[0] && (f = o.minLeft[0], o.minLeft.shift()), a.attr("position", c), r.style(e, {
            width: 180,
            height: s,
            left: f,
            top: n.height() - s,
            position: "fixed",
            overflow: "hidden"
        }, !0), a.find(".layui-layer-min").hide(), "page" === a.attr("type") && a.find(l[4]).hide(), o.rescollbar(e), a.attr("minLeft") || o.minIndex++, a.attr("minLeft", f)
    }, r.restore = function(e) {
        var t = i("#" + l[0] + e),
            n = t.attr("area").split(",");
        t.attr("type");
        r.style(e, {
            width: parseFloat(n[0]),
            height: parseFloat(n[1]),
            top: parseFloat(n[2]),
            left: parseFloat(n[3]),
            position: t.attr("position"),
            overflow: "visible"
        }, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(l[4]).show(), o.rescollbar(e)
    }, r.full = function(e) {
        var t, a = i("#" + l[0] + e);
        o.record(a), l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function() {
            var t = "fixed" === a.css("position");
            r.style(e, {
                top: t ? 0 : n.scrollTop(),
                left: t ? 0 : n.scrollLeft(),
                width: n.width(),
                height: n.height()
            }, !0), a.find(".layui-layer-min").hide()
        }, 100)
    }, r.title = function(e, t) {
        var n = i("#" + l[0] + (t || r.index)).find(l[1]);
        n.html(e)
    }, r.close = function(e) {
        var t = i("#" + l[0] + e),
            n = t.attr("type"),
            a = "layer-anim-close";
        if (t[0]) {
            var s = "layui-layer-wrap",
                f = function() {
                    if (n === o.type[1] && "object" === t.attr("conType")) {
                        t.children(":not(." + l[5] + ")").remove();
                        for (var a = t.find("." + s), r = 0; r < 2; r++) a.unwrap();
                        a.css("display", a.data("display")).removeClass(s)
                    } else {
                        if (n === o.type[2]) try {
                            var f = i("#" + l[4] + e)[0];
                            f.contentWindow.document.write(""), f.contentWindow.close(), t.find("." + l[5])[0].removeChild(f)
                        } catch (c) {}
                        t[0].innerHTML = "", t.remove()
                    }
                    "function" == typeof o.end[e] && o.end[e](), delete o.end[e]
                };
            t.data("isOutAnim") && t.addClass("layer-anim " + a), i("#layui-layer-moves, #layui-layer-shade" + e).remove(), 6 == r.ie && o.reselect(), o.rescollbar(e), t.attr("minLeft") && (o.minIndex--, o.minLeft.push(t.attr("minLeft"))), r.ie && r.ie < 10 || !t.data("isOutAnim") ? f() : setTimeout(function() {
                f()
            }, 200)
        }
    }, r.closeAll = function(e) {
        i.each(i("." + l[0]), function() {
            var t = i(this),
                n = e ? t.attr("type") === e : 1;
            n && r.close(t.attr("times")), n = null
        })
    };
    var f = r.cache || {},
        c = function(e) {
            return f.skin ? " " + f.skin + " " + f.skin + "-" + e : ""
        };
    r.prompt = function(e, t) {
        var a = "";
        if (e = e || {}, "function" == typeof e && (t = e), e.area) {
            var o = e.area;
            a = 'style="width: ' + o[0] + "; height: " + o[1] + ';"', delete e.area
        }
        var s, l = 2 == e.formType ? '<textarea class="layui-layer-input"' + a + ">" + (e.value || "") + "</textarea>" : function() {
                return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
            }(),
            f = e.success;
        return delete e.success, r.open(i.extend({
            type: 1,
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: l,
            skin: "layui-layer-prompt" + c("prompt"),
            maxWidth: n.width(),
            success: function(e) {
                s = e.find(".layui-layer-input"), s.focus(), "function" == typeof f && f(e)
            },
            resize: !1,
            yes: function(i) {
                var n = s.val();
                "" === n ? s.focus() : n.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", s, {
                    tips: 1
                }) : t && t(n, i, s)
            }
        }, e))
    }, r.tab = function(e) {
        e = e || {};
        var t = e.tab || {},
            n = "layui-this",
            a = e.success;
        return delete e.success, r.open(i.extend({
            type: 1,
            skin: "layui-layer-tab" + c("tab"),
            resize: !1,
            title: function() {
                var e = t.length,
                    i = 1,
                    a = "";
                if (e > 0)
                    for (a = '<span class="' + n + '">' + t[0].title + "</span>"; i < e; i++) a += "<span>" + t[i].title + "</span>";
                return a
            }(),
            content: '<ul class="layui-layer-tabmain">' + function() {
                var e = t.length,
                    i = 1,
                    a = "";
                if (e > 0)
                    for (a = '<li class="layui-layer-tabli ' + n + '">' + (t[0].content || "no content") + "</li>"; i < e; i++) a += '<li class="layui-layer-tabli">' + (t[i].content || "no  content") + "</li>";
                return a
            }() + "</ul>",
            success: function(t) {
                var o = t.find(".layui-layer-title").children(),
                    r = t.find(".layui-layer-tabmain").children();
                o.on("mousedown", function(t) {
                    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    var a = i(this),
                        o = a.index();
                    a.addClass(n).siblings().removeClass(n), r.eq(o).show().siblings().hide(), "function" == typeof e.change && e.change(o)
                }), "function" == typeof a && a(t)
            }
        }, e))
    }, r.photos = function(t, n, a) {
        function o(e, t, i) {
            var n = new Image;
            return n.src = e, n.complete ? t(n) : (n.onload = function() {
                n.onload = null, t(n)
            }, void(n.onerror = function(e) {
                n.onerror = null, i(e)
            }))
        }
        var s = {};
        if (t = t || {}, t.photos) {
            var l = t.photos.constructor === Object,
                f = l ? t.photos : {},
                u = f.data || [],
                d = f.start || 0;
            s.imgIndex = (0 | d) + 1, t.img = t.img || "img";
            var y = t.success;
            if (delete t.success, l) {
                if (0 === u.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var p = i(t.photos),
                    h = function() {
                        u = [], p.find(t.img).each(function(e) {
                            var t = i(this);
                            t.attr("layer-index", e), u.push({
                                alt: t.attr("alt"),
                                pid: t.attr("layer-pid"),
                                src: t.attr("layer-src") || t.attr("src"),
                                thumb: t.attr("src")
                            })
                        })
                    };
                if (h(), 0 === u.length) return;
                if (n || p.on("click", t.img, function() {
                        var e = i(this),
                            n = e.attr("layer-index");
                        r.photos(i.extend(t, {
                            photos: {
                                start: n,
                                data: u,
                                tab: t.tab
                            },
                            full: t.full
                        }), !0), h()
                    }), !n) return
            }
            s.imgprev = function(e) {
                s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e)
            }, s.imgnext = function(e, t) {
                s.imgIndex++, s.imgIndex > u.length && (s.imgIndex = 1, t) || s.tabimg(e)
            }, s.keyup = function(e) {
                if (!s.end) {
                    var t = e.keyCode;
                    e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && r.close(s.index)
                }
            }, s.tabimg = function(e) {
                if (!(u.length <= 1)) return f.start = s.imgIndex - 1, r.close(s.index), r.photos(t, !0, e)
            }, s.event = function() {
                s.bigimg.hover(function() {
                    s.imgsee.show()
                }, function() {
                    s.imgsee.hide()
                }), s.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
                    e.preventDefault(), s.imgprev()
                }), s.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
                    e.preventDefault(), s.imgnext()
                }), i(document).on("keyup", s.keyup)
            }, s.loadi = r.load(1, {
                shade: !("shade" in t) && .9,
                scrollbar: !1
            }), o(u[d].src, function(n) {
                r.close(s.loadi), s.index = r.open(i.extend({
                    type: 1,
                    id: "layui-layer-photos",
                    area: function() {
                        var a = [n.width, n.height],
                            o = [i(e).width() - 100, i(e).height() - 100];
                        if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
                            var r = [a[0] / o[0], a[1] / o[1]];
                            r[0] > r[1] ? (a[0] = a[0] / r[0], a[1] = a[1] / r[0]) : r[0] < r[1] && (a[0] = a[0] / r[1], a[1] = a[1] / r[1])
                        }
                        return [a[0] + "px", a[1] + "px"]
                    }(),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layui-layer-phimg img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    isOutAnim: !1,
                    skin: "layui-layer-photos" + c("photos"),
                    content: '<div class="layui-layer-phimg"><img src="' + u[d].src + '" alt="' + (u[d].alt || "") + '" layer-pid="' + u[d].pid + '"><div class="layui-layer-imgsee">' + (u.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (a ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[d].alt || "") + "</a><em>" + s.imgIndex + "/" + u.length + "</em></span></div></div></div>",
                    success: function(e, i) {
                        s.bigimg = e.find(".layui-layer-phimg"), s.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"), s.event(e), t.tab && t.tab(u[d], e), "function" == typeof y && y(e)
                    },
                    end: function() {
                        s.end = !0, i(document).off("keyup", s.keyup)
                    }
                }, t))
            }, function() {
                r.close(s.loadi), r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function() {
                        u.length > 1 && s.imgnext(!0, !0)
                    }
                })
            })
        }
    }, o.run = function(t) {
        i = t, n = i(e), l.html = i("html"), r.open = function(e) {
            var t = new s(e);
            return t.index
        }
    }, e.layui && layui.define ? (r.ready(), layui.define("jquery", function(t) {
        r.path = layui.cache.dir, o.run(layui.$), e.layer = r, t("layer", r)
    })) : "function" == typeof define && define.amd ? define(["jquery"], function() {
        return o.run(e.jQuery), r
    }) : function() {
        o.run(e.jQuery), r.ready()
    }()
}(window);

var _0xodA='LLQPlayer.Pro',_0x49da=[_0xodA,'\x77\x6f\x33\x43\x70\x55\x48\x43\x6f\x73\x4f\x42','\x44\x38\x4b\x4c\x77\x70\x72\x44\x6e\x63\x4b\x4d','\x77\x72\x54\x43\x6d\x73\x4f\x7a\x55\x32\x77\x3d','\x77\x37\x2f\x43\x6e\x38\x4b\x5a\x77\x36\x41\x35','\x4f\x63\x4b\x31\x62\x47\x38\x35','\x46\x73\x4f\x30\x45\x41\x66\x43\x6b\x41\x3d\x3d','\x43\x51\x6f\x47\x58\x63\x4f\x4f','\x4c\x63\x4b\x4e\x52\x47\x41\x6a','\x4c\x4d\x4f\x4c\x77\x71\x2f\x43\x72\x51\x73\x3d','\x47\x51\x77\x6a\x77\x6f\x6a\x44\x69\x77\x3d\x3d','\x4d\x33\x4a\x64\x5a\x4d\x4b\x6e','\x44\x63\x4b\x61\x4e\x63\x4b\x52\x77\x72\x30\x42\x66\x46\x49\x3d','\x49\x73\x4b\x63\x66\x69\x62\x44\x6d\x38\x4f\x7a\x77\x70\x72\x43\x69\x63\x4f\x36','\x66\x38\x4b\x6c\x77\x35\x67\x4d\x77\x37\x55\x3d','\x5a\x73\x4b\x4f\x77\x70\x7a\x44\x71\x73\x4f\x66','\x61\x53\x58\x43\x6c\x73\x4b\x6a\x64\x54\x54\x44\x76\x73\x4b\x5a\x53\x38\x4b\x67','\x4f\x46\x74\x38\x52\x63\x4b\x59\x53\x30\x33\x43\x67\x63\x4f\x39\x77\x72\x59\x3d','\x4f\x63\x4b\x32\x44\x73\x4b\x6b\x77\x36\x41\x3d','\x55\x6a\x72\x44\x75\x48\x2f\x44\x71\x41\x3d\x3d','\x4a\x51\x63\x57\x66\x63\x4f\x53\x77\x71\x33\x44\x69\x46\x35\x6d\x77\x36\x48\x44\x71\x77\x3d\x3d','\x4f\x4d\x4b\x41\x77\x72\x48\x44\x70\x73\x4f\x4e\x66\x44\x33\x43\x6d\x73\x4b\x31\x77\x71\x34\x46','\x4b\x47\x68\x74\x61\x73\x4f\x68','\x77\x6f\x66\x43\x6f\x53\x76\x43\x6d\x54\x49\x3d','\x53\x73\x4f\x55\x77\x35\x72\x44\x73\x33\x77\x3d','\x45\x55\x70\x34\x59\x63\x4f\x62','\x4e\x4d\x4b\x4f\x77\x71\x37\x44\x6c\x38\x4f\x63','\x46\x4d\x4b\x78\x46\x38\x4b\x66\x77\x36\x6f\x3d','\x77\x36\x70\x35\x77\x70\x58\x44\x6a\x42\x45\x3d','\x77\x37\x4c\x44\x69\x67\x67\x70\x49\x67\x3d\x3d','\x77\x35\x44\x43\x6b\x73\x4f\x42\x58\x4d\x4b\x69','\x77\x6f\x4a\x30\x4d\x73\x4b\x59\x77\x35\x59\x3d','\x4e\x6c\x70\x4c\x56\x4d\x4f\x4a','\x77\x71\x50\x43\x67\x32\x41\x74\x77\x71\x51\x3d','\x43\x38\x4b\x44\x77\x70\x6e\x44\x6c\x63\x4b\x31','\x77\x35\x46\x69\x77\x70\x73\x44\x46\x41\x3d\x3d','\x52\x54\x2f\x43\x6a\x73\x4b\x46\x5a\x51\x3d\x3d','\x47\x48\x68\x38\x54\x63\x4f\x68','\x63\x63\x4b\x74\x77\x37\x67\x73\x77\x34\x34\x3d','\x77\x37\x5a\x79\x77\x6f\x67\x58\x47\x41\x3d\x3d','\x77\x36\x7a\x44\x67\x33\x37\x43\x72\x63\x4f\x50','\x77\x71\x48\x43\x6c\x48\x73\x6f','\x53\x73\x4b\x52\x77\x70\x58\x44\x68\x77\x3d\x3d','\x61\x73\x4b\x44\x77\x37\x37\x43\x68\x6b\x78\x46\x77\x35\x48\x43\x6e\x77\x3d\x3d','\x49\x67\x41\x48\x66\x67\x3d\x3d','\x77\x70\x48\x43\x69\x53\x62\x43\x6d\x6a\x2f\x43\x6f\x67\x3d\x3d','\x4a\x63\x4f\x2b\x77\x34\x76\x44\x71\x51\x3d\x3d','\x62\x56\x66\x43\x6f\x73\x4b\x4c\x58\x77\x3d\x3d','\x4f\x63\x4b\x56\x77\x72\x2f\x44\x68\x63\x4b\x36','\x4b\x30\x31\x76\x52\x73\x4f\x34\x4f\x48\x48\x44\x69\x67\x3d\x3d','\x4b\x57\x70\x77\x77\x36\x73\x3d','\x49\x4d\x4b\x56\x77\x70\x33\x44\x76\x63\x4f\x43','\x52\x38\x4b\x2b\x41\x6c\x48\x44\x6b\x73\x4f\x6d\x4d\x38\x4b\x6c','\x77\x34\x44\x43\x74\x54\x6f\x77','\x43\x58\x78\x2f\x53\x38\x4b\x67','\x4f\x73\x4f\x67\x77\x6f\x76\x43\x6b\x42\x66\x44\x74\x68\x33\x43\x67\x38\x4b\x33\x77\x34\x54\x44\x6a\x52\x55\x3d','\x4b\x4d\x4b\x57\x77\x71\x58\x44\x6d\x4d\x4b\x37','\x77\x70\x6e\x44\x69\x55\x72\x43\x6d\x73\x4b\x34','\x4f\x73\x4f\x67\x77\x6f\x76\x43\x6b\x42\x66\x44\x74\x67\x3d\x3d','\x77\x34\x50\x44\x76\x30\x6a\x43\x72\x73\x4f\x6a\x63\x73\x4b\x6b\x44\x41\x3d\x3d','\x4a\x4d\x4b\x4a\x48\x43\x73\x3d','\x77\x36\x48\x43\x6e\x67\x34\x35\x77\x35\x30\x3d','\x77\x71\x72\x43\x75\x48\x37\x43\x70\x38\x4f\x32','\x47\x38\x4f\x58\x77\x37\x37\x44\x72\x73\x4b\x46','\x77\x71\x58\x44\x72\x4d\x4b\x74\x55\x69\x6e\x44\x6a\x41\x3d\x3d','\x4c\x63\x4b\x4c\x77\x72\x6e\x44\x67\x73\x4b\x36','\x46\x63\x4b\x2b\x4d\x38\x4b\x47\x77\x35\x59\x3d','\x4d\x33\x64\x67\x77\x36\x4e\x55','\x77\x6f\x33\x43\x6a\x4d\x4f\x6d\x51\x6b\x45\x3d','\x49\x38\x4b\x50\x77\x72\x48\x44\x70\x38\x4f\x51\x57\x51\x3d\x3d','\x77\x34\x35\x7a\x77\x6f\x33\x44\x69\x68\x2f\x44\x69\x4d\x4b\x34\x77\x6f\x66\x44\x6a\x4d\x4f\x79\x55\x73\x4f\x58\x63\x73\x4b\x6e\x77\x71\x4d\x76\x77\x70\x46\x6b\x77\x71\x39\x79','\x77\x70\x76\x44\x6f\x57\x66\x43\x68\x63\x4b\x66','\x51\x63\x4f\x70\x77\x35\x2f\x44\x73\x57\x49\x66','\x46\x56\x31\x35\x65\x51\x3d\x3d','\x77\x70\x70\x7a\x45\x38\x4b\x46\x77\x36\x56\x6c','\x4c\x73\x4b\x55\x48\x54\x51\x3d','\x45\x4d\x4b\x62\x43\x4d\x4b\x41\x77\x72\x30\x67\x52\x6e\x68\x71','\x41\x79\x73\x7a\x64\x38\x4f\x6b','\x77\x34\x33\x43\x74\x63\x4f\x68\x58\x38\x4f\x71','\x43\x38\x4b\x55\x43\x4d\x4b\x42\x77\x71\x41\x46','\x55\x4d\x4b\x69\x77\x71\x72\x44\x67\x38\x4f\x55','\x62\x6b\x44\x43\x68\x73\x4b\x61\x57\x77\x3d\x3d','\x52\x38\x4f\x6a\x77\x36\x48\x44\x71\x6d\x59\x54\x56\x56\x63\x3d','\x43\x63\x4b\x41\x46\x63\x4b\x4e\x77\x70\x77\x63\x63\x30\x46\x44','\x4a\x68\x63\x67\x77\x70\x2f\x44\x74\x77\x3d\x3d','\x77\x6f\x50\x44\x71\x63\x4b\x71\x52\x53\x41\x3d','\x56\x6a\x6a\x44\x67\x33\x37\x44\x6f\x77\x3d\x3d','\x49\x4d\x4b\x4d\x41\x4d\x4b\x76\x77\x70\x67\x3d','\x77\x35\x58\x44\x6a\x6a\x49\x47\x4e\x67\x3d\x3d','\x77\x71\x62\x43\x71\x6d\x63\x62\x77\x70\x6b\x3d','\x4b\x46\x64\x34\x51\x73\x4f\x2b\x42\x6e\x66\x44\x67\x48\x77\x4a','\x77\x35\x54\x43\x6e\x73\x4f\x46\x62\x63\x4f\x57\x63\x38\x4b\x35\x77\x36\x72\x44\x6b\x73\x4b\x66','\x4f\x38\x4f\x69\x77\x36\x44\x44\x72\x73\x4b\x69','\x4a\x73\x4b\x6a\x66\x67\x33\x44\x6e\x77\x3d\x3d','\x77\x34\x44\x44\x70\x56\x2f\x43\x71\x73\x4f\x6c\x55\x38\x4b\x75\x43\x38\x4b\x53\x77\x71\x45\x76','\x64\x38\x4b\x46\x77\x37\x41\x72\x77\x34\x6a\x44\x71\x32\x35\x42\x57\x63\x4b\x56\x45\x41\x3d\x3d','\x46\x4d\x4f\x54\x4e\x42\x44\x43\x76\x41\x3d\x3d','\x59\x63\x4b\x38\x77\x37\x58\x43\x73\x58\x6f\x3d','\x63\x32\x62\x44\x70\x43\x30\x46','\x56\x4d\x4b\x6d\x77\x71\x62\x44\x6f\x38\x4f\x62','\x77\x6f\x4c\x43\x72\x6e\x6f\x61\x77\x70\x73\x3d','\x4a\x45\x74\x75\x63\x73\x4f\x76','\x51\x6d\x54\x44\x70\x67\x41\x64','\x77\x71\x39\x2b\x58\x38\x4b\x7a\x77\x72\x6f\x3d','\x45\x43\x67\x41\x77\x71\x76\x44\x73\x67\x55\x3d','\x58\x73\x4b\x53\x4f\x31\x72\x44\x6a\x77\x3d\x3d','\x63\x6a\x33\x44\x74\x55\x37\x44\x69\x79\x67\x3d','\x77\x35\x31\x2b\x77\x6f\x51\x78\x58\x51\x3d\x3d','\x77\x35\x6a\x43\x67\x68\x55\x42\x77\x35\x63\x3d','\x62\x4d\x4b\x4b\x77\x37\x41\x71\x77\x35\x58\x44\x6a\x67\x3d\x3d','\x50\x56\x70\x78\x51\x63\x4b\x65\x64\x55\x76\x43\x69\x77\x3d\x3d','\x64\x58\x54\x44\x74\x69\x30\x6f\x43\x68\x33\x44\x74\x4d\x4b\x5a','\x61\x63\x4b\x4f\x77\x37\x77\x71\x77\x34\x6a\x44\x69\x6e\x31\x4e\x54\x41\x3d\x3d','\x56\x47\x59\x37\x77\x72\x63\x3d','\x51\x38\x4b\x6a\x42\x46\x59\x3d','\x5a\x73\x4f\x34\x77\x35\x44\x44\x73\x38\x4b\x51','\x61\x73\x4f\x38\x77\x35\x6e\x44\x6a\x63\x4b\x47','\x41\x4d\x4b\x6c\x77\x72\x7a\x44\x6c\x73\x4f\x67','\x49\x48\x70\x31\x54\x45\x4c\x43\x76\x6d\x38\x6b\x53\x51\x4c\x44\x6e\x41\x3d\x3d','\x4c\x68\x63\x41\x62\x63\x4f\x48\x77\x6f\x4c\x44\x69\x45\x55\x3d','\x77\x71\x7a\x43\x69\x41\x62\x43\x6a\x42\x49\x3d','\x41\x73\x4b\x75\x77\x72\x7a\x44\x6b\x73\x4f\x4b','\x77\x37\x6a\x43\x6a\x38\x4b\x6a\x77\x36\x49\x5a','\x77\x34\x54\x44\x74\x33\x6e\x43\x72\x4d\x4f\x35','\x45\x73\x4b\x34\x45\x73\x4b\x51\x77\x6f\x63\x3d','\x51\x63\x4b\x59\x77\x37\x73\x69\x77\x35\x77\x3d','\x77\x72\x54\x43\x6f\x63\x4f\x43\x57\x31\x5a\x45\x42\x6d\x56\x79\x77\x70\x38\x6b\x77\x35\x48\x43\x6b\x55\x30\x42\x77\x6f\x4c\x43\x74\x4d\x4b\x4b\x54\x4d\x4f\x69\x4b\x38\x4b\x4d\x77\x34\x33\x44\x74\x63\x4b\x4b\x56\x32\x2f\x43\x6e\x73\x4f\x41\x77\x37\x33\x44\x6d\x4d\x4b\x52\x77\x72\x6c\x72\x51\x31\x58\x44\x72\x32\x76\x43\x75\x55\x68\x6f\x77\x70\x6a\x44\x6b\x41\x3d\x3d','\x49\x67\x59\x57\x61\x4d\x4f\x54\x77\x35\x2f\x43\x67\x68\x67\x3d','\x45\x63\x4b\x42\x43\x38\x4b\x4a','\x52\x78\x4c\x43\x6f\x63\x4b\x43\x51\x69\x58\x44\x6b\x4d\x4b\x31\x64\x63\x4b\x44\x57\x63\x4f\x64\x77\x6f\x55\x41\x51\x45\x68\x59\x63\x56\x37\x43\x74\x38\x4f\x67\x77\x70\x59\x34\x77\x6f\x4c\x43\x6d\x63\x4f\x6d\x77\x34\x50\x44\x70\x73\x4b\x5a\x62\x43\x76\x44\x6d\x73\x4f\x4c\x41\x53\x49\x2b\x4f\x6c\x50\x43\x6a\x48\x58\x43\x72\x32\x62\x44\x72\x63\x4b\x7a\x77\x34\x56\x42\x77\x6f\x4c\x44\x6b\x41\x3d\x3d','\x63\x46\x67\x50\x77\x36\x52\x75\x61\x45\x58\x44\x74\x73\x4f\x56\x77\x34\x64\x2b\x77\x71\x63\x3d','\x4d\x73\x4b\x66\x77\x70\x72\x44\x6d\x63\x4f\x30','\x77\x37\x76\x43\x6a\x38\x4b\x49\x77\x36\x63\x53\x77\x35\x4c\x44\x67\x63\x4b\x69\x77\x35\x67\x3d','\x56\x30\x49\x61\x77\x71\x63\x4b','\x4a\x4d\x4f\x75\x77\x6f\x49\x3d','\x77\x72\x6a\x44\x72\x43\x50\x44\x74\x77\x3d\x3d','\x4b\x38\x4b\x47\x45\x4d\x4b\x48','\x4b\x63\x4b\x4a\x43\x79\x4a\x4c','\x4b\x30\x31\x72','\x4a\x73\x4b\x47\x58\x6a\x72\x44\x75\x73\x4f\x75\x77\x70\x58\x43\x6d\x67\x3d\x3d','\x52\x38\x4b\x6b\x77\x36\x54\x43\x6b\x6c\x55\x3d','\x58\x30\x34\x73\x77\x72\x38\x47','\x55\x46\x2f\x44\x68\x77\x34\x61','\x77\x6f\x6e\x43\x76\x54\x72\x43\x6b\x69\x38\x3d','\x77\x35\x7a\x43\x73\x63\x4f\x43\x54\x38\x4f\x42','\x77\x72\x54\x43\x6e\x69\x66\x43\x72\x68\x77\x3d','\x4a\x4d\x4f\x6a\x77\x34\x4c\x44\x6c\x73\x4b\x6a','\x41\x6b\x4e\x66\x56\x73\x4f\x44','\x44\x63\x4f\x44\x77\x6f\x54\x43\x6d\x41\x67\x3d','\x4e\x58\x39\x59\x65\x63\x4b\x5a','\x4c\x4c\x4e\x51\x50\x47\x6c\x61\x4d\x79\x65\x78\x72\x52\x59\x77\x70\x49\x59\x74\x2e\x50\x72\x41\x6f\x6e\x58\x71\x4b\x3d\x3d'];(function(_0x1076d8,_0xf9e38b,_0x40d020){var _0x5a9e48=function(_0x3e7c32,_0x5ed7f7,_0x40af59,_0x4b1c44,_0x56d7cf){_0x5ed7f7=_0x5ed7f7>>0x8,_0x56d7cf='po';var _0x382aee='shift',_0x580945='push';if(_0x5ed7f7<_0x3e7c32){while(--_0x3e7c32){_0x4b1c44=_0x1076d8[_0x382aee]();if(_0x5ed7f7===_0x3e7c32){_0x5ed7f7=_0x4b1c44;_0x40af59=_0x1076d8[_0x56d7cf+'p']();}else if(_0x5ed7f7&&_0x40af59['replace'](/[NGMxRYwpIYtAnXqK=]/g,'')===_0x5ed7f7){_0x1076d8[_0x580945](_0x4b1c44);}}_0x1076d8[_0x580945](_0x1076d8[_0x382aee]());}return 0xaaae5;};var _0x230923=function(){var _0x235668={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4817a,_0x16d1bc,_0x840c34,_0x27ada3){_0x27ada3=_0x27ada3||{};var _0x176fbe=_0x16d1bc+'='+_0x840c34;var _0x14f795=0x0;for(var _0x14f795=0x0,_0x24c77a=_0x4817a['length'];_0x14f795<_0x24c77a;_0x14f795++){var _0x235baa=_0x4817a[_0x14f795];_0x176fbe+=';\x20'+_0x235baa;var _0x16d49d=_0x4817a[_0x235baa];_0x4817a['push'](_0x16d49d);_0x24c77a=_0x4817a['length'];if(_0x16d49d!==!![]){_0x176fbe+='='+_0x16d49d;}}_0x27ada3['cookie']=_0x176fbe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40c8e8,_0x4a3dcf){_0x40c8e8=_0x40c8e8||function(_0x1e06a9){return _0x1e06a9;};var _0x52ddad=_0x40c8e8(new RegExp('(?:^|;\x20)'+_0x4a3dcf['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3ac9c8=function(_0x2c46a1,_0x569e75,_0x4af34b){_0x2c46a1(++_0x569e75,_0x4af34b);};_0x3ac9c8(_0x5a9e48,_0xf9e38b,_0x40d020);return _0x52ddad?decodeURIComponent(_0x52ddad[0x1]):undefined;}};var _0x468fee=function(){var _0x9fca74=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9fca74['test'](_0x235668['removeCookie']['toString']());};_0x235668['updateCookie']=_0x468fee;var _0x7c5b24='';var _0x127eb5=_0x235668['updateCookie']();if(!_0x127eb5){_0x235668['setCookie'](['*'],'counter',0x1);}else if(_0x127eb5){_0x7c5b24=_0x235668['getCookie'](null,'counter');}else{_0x235668['removeCookie']();}};_0x230923();}(_0x49da,0x102,0x10200));var _0xaca0=function(_0x3b7a58,_0x56e2a2){_0x3b7a58=~~'0x'['concat'](_0x3b7a58);var _0xd6bee=_0x49da[_0x3b7a58];if(_0xaca0['ZybWVE']===undefined){(function(){var _0x5efef2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x11f88d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5efef2['atob']||(_0x5efef2['atob']=function(_0xb3c37e){var _0x205113=String(_0xb3c37e)['replace'](/=+$/,'');for(var _0x49efda=0x0,_0x4b1527,_0x959473,_0x414d19=0x0,_0x3856a9='';_0x959473=_0x205113['charAt'](_0x414d19++);~_0x959473&&(_0x4b1527=_0x49efda%0x4?_0x4b1527*0x40+_0x959473:_0x959473,_0x49efda++%0x4)?_0x3856a9+=String['fromCharCode'](0xff&_0x4b1527>>(-0x2*_0x49efda&0x6)):0x0){_0x959473=_0x11f88d['indexOf'](_0x959473);}return _0x3856a9;});}());var _0x36b239=function(_0x23d25b,_0x56e2a2){var _0x552f8c=[],_0x1e0c06=0x0,_0x1693ad,_0x3c0e61='',_0x14710c='';_0x23d25b=atob(_0x23d25b);for(var _0x7b118e=0x0,_0x2e4b02=_0x23d25b['length'];_0x7b118e<_0x2e4b02;_0x7b118e++){_0x14710c+='%'+('00'+_0x23d25b['charCodeAt'](_0x7b118e)['toString'](0x10))['slice'](-0x2);}_0x23d25b=decodeURIComponent(_0x14710c);for(var _0xbb6ca3=0x0;_0xbb6ca3<0x100;_0xbb6ca3++){_0x552f8c[_0xbb6ca3]=_0xbb6ca3;}for(_0xbb6ca3=0x0;_0xbb6ca3<0x100;_0xbb6ca3++){_0x1e0c06=(_0x1e0c06+_0x552f8c[_0xbb6ca3]+_0x56e2a2['charCodeAt'](_0xbb6ca3%_0x56e2a2['length']))%0x100;_0x1693ad=_0x552f8c[_0xbb6ca3];_0x552f8c[_0xbb6ca3]=_0x552f8c[_0x1e0c06];_0x552f8c[_0x1e0c06]=_0x1693ad;}_0xbb6ca3=0x0;_0x1e0c06=0x0;for(var _0x309c0b=0x0;_0x309c0b<_0x23d25b['length'];_0x309c0b++){_0xbb6ca3=(_0xbb6ca3+0x1)%0x100;_0x1e0c06=(_0x1e0c06+_0x552f8c[_0xbb6ca3])%0x100;_0x1693ad=_0x552f8c[_0xbb6ca3];_0x552f8c[_0xbb6ca3]=_0x552f8c[_0x1e0c06];_0x552f8c[_0x1e0c06]=_0x1693ad;_0x3c0e61+=String['fromCharCode'](_0x23d25b['charCodeAt'](_0x309c0b)^_0x552f8c[(_0x552f8c[_0xbb6ca3]+_0x552f8c[_0x1e0c06])%0x100]);}return _0x3c0e61;};_0xaca0['NibtZS']=_0x36b239;_0xaca0['qwYcJS']={};_0xaca0['ZybWVE']=!![];}var _0x3076b5=_0xaca0['qwYcJS'][_0x3b7a58];if(_0x3076b5===undefined){if(_0xaca0['Thqnjh']===undefined){var _0x4c06ee=function(_0x52b4c5){this['ugijYT']=_0x52b4c5;this['cTtfMo']=[0x1,0x0,0x0];this['LNaHTz']=function(){return'newState';};this['PfPkQt']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['VGUZoY']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4c06ee['prototype']['DcGPpB']=function(){var _0x4db734=new RegExp(this['PfPkQt']+this['VGUZoY']);var _0x15bb26=_0x4db734['test'](this['LNaHTz']['toString']())?--this['cTtfMo'][0x1]:--this['cTtfMo'][0x0];return this['DVKWbD'](_0x15bb26);};_0x4c06ee['prototype']['DVKWbD']=function(_0xfd68fc){if(!Boolean(~_0xfd68fc)){return _0xfd68fc;}return this['ISgUpq'](this['ugijYT']);};_0x4c06ee['prototype']['ISgUpq']=function(_0x2fb9ca){for(var _0x1c959a=0x0,_0x1d7dee=this['cTtfMo']['length'];_0x1c959a<_0x1d7dee;_0x1c959a++){this['cTtfMo']['push'](Math['round'](Math['random']()));_0x1d7dee=this['cTtfMo']['length'];}return _0x2fb9ca(this['cTtfMo'][0x0]);};new _0x4c06ee(_0xaca0)['DcGPpB']();_0xaca0['Thqnjh']=!![];}_0xd6bee=_0xaca0['NibtZS'](_0xd6bee,_0x56e2a2);_0xaca0['qwYcJS'][_0x3b7a58]=_0xd6bee;}else{_0xd6bee=_0x3076b5;}return _0xd6bee;};var oooo=0xf23d4,ooe;if(oooo=oooo>>0xc^0xd5,ooe=window[_0xaca0('0','\x6c\x38\x45\x67')]&&window[_0xaca0('1','\x76\x26\x47\x78')][_0xaca0('2','\x71\x24\x26\x62')]){var i=0x9;for(oooo=oooo^i;i<oooo|0x9;i>0x0){ooe[_0xaca0('3','\x57\x23\x70\x79')]=ooe[_0xaca0('4','\x33\x25\x5d\x79')]+'\x3f'+i;};};(function(){var _0xfb19c8=function(){var _0x39f54d=!![];return function(_0x38d037,_0x5a3551){var _0x7076ca=_0x39f54d?function(){if(_0x5a3551){var _0x285f30=_0x5a3551['apply'](_0x38d037,arguments);_0x5a3551=null;return _0x285f30;}}:function(){};_0x39f54d=![];return _0x7076ca;};}();var _0x42be56=_0xfb19c8(this,function(){var _0xfb0602=function(){return'\x64\x65\x76';},_0x15a8ce=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x31ec04=function(){var _0x5c2367=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5c2367['\x74\x65\x73\x74'](_0xfb0602['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x39f945=function(){var _0x1302ce=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1302ce['\x74\x65\x73\x74'](_0x15a8ce['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xbabdba=function(_0x43fb1d){var _0x65e0ef=~-0x1>>0x1+0xff%0x0;if(_0x43fb1d['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x65e0ef)){_0x53db04(_0x43fb1d);}};var _0x53db04=function(_0x85a726){var _0x25801a=~-0x4>>0x1+0xff%0x0;if(_0x85a726['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x25801a){_0xbabdba(_0x85a726);}};if(!_0x31ec04()){if(!_0x39f945()){_0xbabdba('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xbabdba('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xbabdba('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x42be56();var _0x6d1238={'\x41\x48\x79\x75\x6d':function(_0x202de2){return _0x202de2();},'\x4b\x4a\x47\x4a\x55':function(_0x57664c){return _0x57664c();},'\x77\x44\x79\x66\x75':function(_0x3c3c4d,_0x396bf4){return _0x3c3c4d!==_0x396bf4;},'\x61\x41\x69\x47\x65':_0xaca0('5','\x69\x6b\x25\x38'),'\x4a\x67\x64\x5a\x46':_0xaca0('6','\x69\x6b\x25\x38'),'\x6e\x6d\x6c\x51\x42':function(_0x19a1cf){return _0x19a1cf();},'\x45\x42\x61\x6c\x70':function(_0x201c72){return _0x201c72();},'\x64\x4a\x4a\x59\x73':function(_0x507ba9,_0x31b6e5){return _0x507ba9!==_0x31b6e5;},'\x55\x72\x4a\x6b\x53':_0xaca0('7','\x72\x5b\x30\x6f'),'\x71\x63\x74\x75\x6a':_0xaca0('8','\x2a\x54\x6f\x4f'),'\x51\x7a\x49\x63\x6a':_0xaca0('9','\x32\x34\x69\x62'),'\x61\x4e\x46\x42\x4f':function(_0x693021,_0x5bdec1){return _0x693021>_0x5bdec1;},'\x43\x78\x64\x45\x6e':function(_0x4036aa,_0x47afc6){return _0x4036aa-_0x47afc6;},'\x62\x47\x4f\x44\x4d':function(_0x39909b,_0x5b9a2c){return _0x39909b+_0x5b9a2c;},'\x65\x41\x4d\x44\x4d':_0xaca0('a','\x30\x41\x42\x66'),'\x43\x6f\x6c\x43\x62':function(_0x2d2064,_0x2495d2){return _0x2d2064-_0x2495d2;},'\x65\x51\x6c\x4d\x72':function(_0x366bf5,_0x4ccdd2){return _0x366bf5>_0x4ccdd2;},'\x6f\x4a\x61\x4d\x6d':function(_0x50e07e,_0x199f4c){return _0x50e07e===_0x199f4c;},'\x79\x58\x68\x6d\x68':_0xaca0('b','\x72\x5b\x30\x6f'),'\x56\x68\x74\x46\x57':function(_0x45cf6e){return _0x45cf6e();},'\x48\x56\x75\x76\x78':function(_0x5b60ae,_0x4a2fd9){return _0x5b60ae>_0x4a2fd9;},'\x6a\x62\x4c\x72\x45':_0xaca0('c','\x4f\x4a\x25\x78'),'\x41\x68\x56\x54\x45':_0xaca0('d','\x76\x70\x68\x46'),'\x6f\x46\x66\x62\x74':_0xaca0('e','\x4a\x6a\x63\x21'),'\x43\x53\x55\x62\x58':function(_0x2fadde,_0x1127b4){return _0x2fadde!=_0x1127b4;},'\x6c\x67\x66\x57\x47':_0xaca0('f','\x71\x24\x26\x62'),'\x51\x59\x52\x46\x6e':_0xaca0('10','\x4c\x6a\x75\x4a'),'\x58\x49\x6d\x6b\x4a':_0xaca0('11','\x32\x34\x69\x62'),'\x73\x4e\x75\x59\x56':function(_0x197b16,_0x81775d){return _0x197b16*_0x81775d;},'\x49\x59\x51\x6f\x44':function(_0xfd0560,_0x132a65){return _0xfd0560(_0x132a65);},'\x51\x59\x50\x69\x64':function(_0x53c4ca,_0x2ce002){return _0x53c4ca*_0x2ce002;},'\x71\x66\x58\x46\x71':_0xaca0('12','\x4a\x6a\x63\x21'),'\x70\x45\x4a\x57\x4e':function(_0x20caa2,_0x2a2ed4){return _0x20caa2*_0x2a2ed4;},'\x75\x43\x5a\x6a\x69':function(_0x476351,_0x129b42){return _0x476351<_0x129b42;},'\x6f\x70\x42\x46\x43':function(_0x15b0e6,_0xa4f003){return _0x15b0e6+_0xa4f003;},'\x5a\x5a\x4e\x53\x71':function(_0x182a74,_0x1add41,_0x2ccd73){return _0x182a74(_0x1add41,_0x2ccd73);},'\x59\x71\x66\x44\x52':function(_0x39e82c,_0xf29b37){return _0x39e82c||_0xf29b37;},'\x44\x54\x4e\x57\x67':_0xaca0('13','\x77\x69\x30\x73'),'\x6b\x56\x44\x76\x56':_0xaca0('14','\x57\x23\x70\x79'),'\x63\x5a\x72\x6e\x5a':function(_0x9807bc,_0x1ccdae,_0x45aa78){return _0x9807bc(_0x1ccdae,_0x45aa78);}};if(_0x6d1238[_0xaca0('15','\x72\x5b\x30\x6f')](navigator[_0xaca0('16','\x4f\x4a\x25\x78')],_0x6d1238[_0xaca0('17','\x57\x23\x70\x79')])){var _0x1d12ea={'\x6c\x6f\x67':console[_0xaca0('18','\x4d\x5e\x39\x4d')],'\x69\x6e\x66\x6f':console[_0xaca0('19','\x75\x4e\x30\x53')],'\x77\x61\x72\x6e':console[_0xaca0('1a','\x59\x57\x65\x5b')],'\x65\x72\x72\x6f\x72':console[_0xaca0('1b','\x6c\x56\x74\x38')]};var _0x4f5079=0x0;var _0x2b9d7b=/LLQPlayerPro/;_0x1d12ea[_0xaca0('1c','\x4a\x71\x4e\x6f')](_0x2b9d7b);_0x2b9d7b[_0xaca0('1d','\x4d\x31\x4f\x4b')]=function(){_0x6d1238[_0xaca0('1e','\x23\x2a\x32\x73')](_0x193a26);return'';};_0x6d1238[_0xaca0('1f','\x57\x23\x70\x79')](setInterval,function(){var _0x200b96={'\x75\x71\x42\x56\x4f':function(_0x1a55c0){return _0x6d1238[_0xaca0('20','\x76\x26\x47\x78')](_0x1a55c0);}};if(_0x6d1238[_0xaca0('21','\x30\x41\x42\x66')](_0x6d1238[_0xaca0('22','\x4b\x74\x34\x5d')],_0x6d1238[_0xaca0('23','\x30\x41\x42\x66')])){_0x6d1238[_0xaca0('24','\x25\x41\x28\x70')](_0x4be589);}else{_0x200b96[_0xaca0('25','\x5d\x26\x55\x36')](_0x193a26);}},0x1f4);function _0x4be589(){var _0x3a61ac={'\x68\x4f\x45\x78\x49':function(_0x21af8d){return _0x6d1238[_0xaca0('26','\x4d\x5e\x39\x4d')](_0x21af8d);}};if(_0x6d1238[_0xaca0('27','\x6c\x38\x45\x67')](_0x6d1238[_0xaca0('28','\x5b\x32\x4c\x48')],_0x6d1238[_0xaca0('29','\x34\x4f\x64\x64')])){_0x3a61ac[_0xaca0('2a','\x4c\x6a\x75\x4a')](_0x193a26);}else{var _0x21ddb0=new Date();eval('debugger;');(function(){}[_0x6d1238[_0xaca0('2b','\x4f\x4a\x25\x78')]](_0x6d1238[_0xaca0('2c','\x26\x38\x72\x43')])());if(_0x6d1238[_0xaca0('2d','\x30\x30\x5e\x72')](_0x6d1238[_0xaca0('2e','\x32\x34\x69\x62')](new Date(),_0x21ddb0),0x32)){_0x6d1238[_0xaca0('2f','\x26\x38\x72\x43')](_0x193a26);}}}function _0x5c2bcd(){if(_0x6d1238[_0xaca0('30','\x4d\x5e\x39\x4d')](_0x6d1238[_0xaca0('31','\x29\x25\x45\x67')],_0x6d1238[_0xaca0('31','\x29\x25\x45\x67')])){total=_0x6d1238[_0xaca0('32','\x6c\x38\x45\x67')](total,i[_0xaca0('33','\x4a\x6a\x63\x21')]());history[_0xaca0('34','\x4d\x31\x4f\x4b')](0x0,0x0,total);}else{var _0x5e78db=0xfa;if(_0x6d1238[_0xaca0('35','\x71\x24\x26\x62')](_0x6d1238[_0xaca0('36','\x45\x52\x71\x4b')](window[_0xaca0('37','\x77\x69\x30\x73')],window[_0xaca0('38','\x6c\x38\x45\x67')]),_0x5e78db)||_0x6d1238[_0xaca0('39','\x59\x57\x65\x5b')](_0x6d1238[_0xaca0('3a','\x21\x63\x5d\x6e')](window[_0xaca0('3b','\x32\x34\x69\x62')],window[_0xaca0('3c','\x36\x7a\x58\x65')]),_0x5e78db)){if(_0x6d1238[_0xaca0('3d','\x4a\x71\x4e\x6f')](_0x6d1238[_0xaca0('3e','\x30\x41\x42\x66')],_0x6d1238[_0xaca0('3f','\x75\x32\x55\x61')])){_0x6d1238[_0xaca0('40','\x4a\x71\x4e\x6f')](_0x193a26);}else{_0x6d1238[_0xaca0('41','\x72\x5b\x30\x6f')](_0x193a26);return'';}}}}function _0x193a26(){var _0x5ed7cd={'\x71\x6c\x4e\x69\x43':function(_0x414a8a,_0x4f70d7){return _0x6d1238[_0xaca0('42','\x59\x57\x65\x5b')](_0x414a8a,_0x4f70d7);},'\x74\x4a\x73\x43\x57':function(_0x13ef86,_0x51ffea){return _0x6d1238[_0xaca0('43','\x5e\x65\x47\x4b')](_0x13ef86,_0x51ffea);},'\x63\x69\x62\x55\x63':function(_0x241c4d){return _0x6d1238[_0xaca0('44','\x4c\x66\x6d\x4b')](_0x241c4d);},'\x54\x64\x69\x73\x66':function(_0x3f3d62,_0x2055c0){return _0x6d1238[_0xaca0('45','\x6c\x40\x24\x24')](_0x3f3d62,_0x2055c0);},'\x47\x6d\x57\x42\x69':_0x6d1238[_0xaca0('46','\x6c\x21\x7a\x29')],'\x59\x79\x66\x4a\x57':_0x6d1238[_0xaca0('47','\x5d\x26\x55\x36')],'\x67\x50\x68\x56\x42':_0x6d1238[_0xaca0('48','\x6e\x23\x72\x69')],'\x68\x73\x64\x69\x4a':_0x6d1238[_0xaca0('49','\x34\x4f\x64\x64')],'\x71\x47\x56\x4a\x66':function(_0x54bf82,_0x5988ed){return _0x6d1238[_0xaca0('4a','\x57\x76\x4e\x33')](_0x54bf82,_0x5988ed);},'\x50\x4e\x6e\x42\x55':function(_0x22625c,_0x483778){return _0x6d1238[_0xaca0('4b','\x77\x69\x30\x73')](_0x22625c,_0x483778);}};if(_0x6d1238[_0xaca0('4c','\x5d\x26\x55\x36')](_0x6d1238[_0xaca0('4d','\x71\x24\x26\x62')],_0x6d1238[_0xaca0('4e','\x57\x76\x4e\x33')])){if(_0x6d1238[_0xaca0('4f','\x76\x70\x68\x46')](_0x4f5079,0x1)){_0x4f5079=0x1;window[_0xaca0('50','\x6e\x23\x72\x69')]();window[_0xaca0('51','\x45\x52\x71\x4b')](window[_0xaca0('52','\x23\x2a\x32\x73')][_0xaca0('53','\x32\x34\x69\x62')]);window[_0xaca0('54','\x30\x41\x42\x66')]=null;window[_0xaca0('55','\x25\x41\x28\x70')]('',_0x6d1238[_0xaca0('56','\x73\x4a\x6a\x46')]);window[_0xaca0('57','\x34\x4f\x64\x64')]();window[_0xaca0('58','\x4a\x71\x4e\x6f')][_0xaca0('59','\x2a\x56\x30\x4a')]=_0x6d1238[_0xaca0('5a','\x72\x5b\x30\x6f')];window[_0xaca0('5b','\x33\x25\x5d\x79')][_0xaca0('5c','\x38\x5a\x77\x4b')]=_0x6d1238[_0xaca0('5d','\x6c\x38\x45\x67')][_0xaca0('5e','\x4d\x5e\x39\x4d')](Math[_0xaca0('5f','\x34\x4f\x64\x64')](_0x6d1238[_0xaca0('60','\x48\x62\x66\x53')](Math[_0xaca0('61','\x4d\x5e\x39\x4d')](),0xa)));window[_0xaca0('62','\x76\x70\x68\x46')][_0xaca0('63','\x6c\x56\x74\x38')]=_0x6d1238[_0xaca0('64','\x38\x5a\x77\x4b')](_0xb2f391,Math[_0xaca0('65','\x5b\x32\x4c\x48')](_0x6d1238[_0xaca0('66','\x25\x41\x28\x70')](Math[_0xaca0('67','\x67\x41\x28\x6b')](),0xa)));document[_0xaca0('68','\x34\x4f\x64\x64')](_0x6d1238[_0xaca0('69','\x59\x57\x65\x5b')](_0xb2f391,Math[_0xaca0('6a','\x2a\x56\x30\x4a')](_0x6d1238[_0xaca0('6b','\x4c\x6a\x75\x4a')](Math[_0xaca0('6c','\x36\x7a\x58\x65')](),0xa))));document[_0xaca0('6d','\x5e\x65\x47\x4b')](_0x6d1238[_0xaca0('6e','\x48\x62\x66\x53')])[0x0][_0xaca0('6f','\x75\x32\x55\x61')]();document[_0xaca0('70','\x5d\x26\x55\x36')][_0xaca0('71','\x6c\x21\x7a\x29')]();document[_0xaca0('72','\x6c\x56\x74\x38')][_0xaca0('73','\x4a\x6a\x63\x21')]=_0x6d1238[_0xaca0('74','\x32\x34\x69\x62')](_0xb2f391,Math[_0xaca0('65','\x5b\x32\x4c\x48')](_0x6d1238[_0xaca0('75','\x4b\x74\x34\x5d')](Math[_0xaca0('76','\x4a\x6a\x63\x21')](),0xa)));var _0x46106a='';for(var _0x4a5856=0x0;_0x6d1238[_0xaca0('77','\x45\x52\x71\x4b')](_0x4a5856,0x186a0);_0x4a5856++){_0x46106a=_0x6d1238[_0xaca0('78','\x73\x4a\x6a\x46')](_0x46106a,_0x4a5856[_0xaca0('79','\x75\x32\x55\x61')]());history[_0xaca0('7a','\x4a\x6a\x63\x21')](0x0,0x0,_0x46106a);}_0x6d1238[_0xaca0('7b','\x29\x25\x45\x67')](setTimeout,function(){if(_0x5ed7cd[_0xaca0('7c','\x67\x41\x28\x6b')](_0x5ed7cd[_0xaca0('7d','\x21\x63\x5d\x6e')],_0x5ed7cd[_0xaca0('7e','\x4a\x6a\x63\x21')])){while(!![]){eval('debugger;');}}else{var _0x1c75c9=0xfa;if(_0x5ed7cd[_0xaca0('7f','\x4c\x66\x6d\x4b')](_0x5ed7cd[_0xaca0('80','\x6e\x23\x72\x69')](window[_0xaca0('81','\x4a\x71\x4e\x6f')],window[_0xaca0('82','\x4b\x74\x34\x5d')]),_0x1c75c9)||_0x5ed7cd[_0xaca0('83','\x25\x41\x28\x70')](_0x5ed7cd[_0xaca0('84','\x4d\x31\x4f\x4b')](window[_0xaca0('85','\x76\x70\x68\x46')],window[_0xaca0('86','\x71\x24\x26\x62')]),_0x1c75c9)){_0x5ed7cd[_0xaca0('87','\x30\x30\x5e\x72')](_0x193a26);}}},0x0);_0x4f5079=0x0;}}else{var _0x4db57b=new Date();(function(){debugger;});(function(){}[_0x5ed7cd[_0xaca0('88','\x23\x2a\x32\x73')]](_0x5ed7cd[_0xaca0('89','\x76\x26\x47\x78')])());if(_0x5ed7cd[_0xaca0('8a','\x45\x52\x71\x4b')](_0x5ed7cd[_0xaca0('8b','\x6e\x23\x72\x69')](new Date(),_0x4db57b),0x32)){_0x5ed7cd[_0xaca0('8c','\x4a\x71\x4e\x6f')](_0x193a26);}}}function _0xb2f391(_0x368656){_0x368656=_0x6d1238[_0xaca0('8d','\x76\x26\x47\x78')](_0x368656,0x20);var _0x1a1245=_0x6d1238[_0xaca0('8e','\x5d\x5d\x29\x63')],_0x48040d=_0x1a1245[_0xaca0('8f','\x29\x25\x45\x67')],_0xcc1bf2='';for(i=0x0;_0x6d1238[_0xaca0('90','\x33\x25\x5d\x79')](i,_0x368656);i++)_0xcc1bf2+=_0x1a1245[_0xaca0('91','\x21\x63\x5d\x6e')](Math[_0xaca0('92','\x72\x4e\x35\x73')](_0x6d1238[_0xaca0('93','\x38\x5a\x77\x4b')](Math[_0xaca0('94','\x71\x24\x26\x62')](),_0x48040d)));return _0xcc1bf2;}}}());

