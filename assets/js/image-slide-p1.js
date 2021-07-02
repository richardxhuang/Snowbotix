(() => {
    "use strict";
    var e = {
            90: (e, t, i) => {
                i.d(t, {
                    Z: () => n
                });
                var s = i(645),
                    o = i.n(s)()((function(e) {
                        return e[1]
                    }));
                o.push([e.id, ':host{--divider-width: 1px;--divider-color: #fff;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;position:relative;display:inline-block;overflow:hidden;isolation:isolate;direction:ltr}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;bottom:0;z-index:-1;line-height:normal;font-size:100%;--exposure: 50%;--transition-time: 0ms;transform:translateX(calc(var(--exposure) * -1));transition:transform var(--transition-time)}.first .first-overlay-container{position:relative;z-index:-1;transform:translateX(var(--exposure));transition:transform var(--transition-time)}.first .first-overlay{overflow:hidden}.second{position:relative;z-index:-2}.handle-container{transform:translateX(50%);position:absolute;right:0;height:100%;display:flex;align-items:flex-end;justify-content:center;flex-direction:column;z-index:1}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color)}.handle{pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translateX(-0.5px)}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(0px 0px 5px black)}.default-handle path{stroke:var(--default-handle-color)}', ""]);
                const n = o
            },
            645: e => {
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var i = e(t);
                            return t[2] ? "@media ".concat(t[2], " {").concat(i, "}") : i
                        })).join("")
                    }, t.i = function(e, i, s) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var o = {};
                        if (s)
                            for (var n = 0; n < this.length; n++) {
                                var r = this[n][0];
                                null != r && (o[r] = !0)
                            }
                        for (var a = 0; a < e.length; a++) {
                            var d = [].concat(e[a]);
                            s && o[d[0]] || (i && (d[2] ? d[2] = "".concat(i, " and ").concat(d[2]) : d[2] = i), t.push(d))
                        }
                    }, t
                }
            }
        },
        t = {};

    function i(s) {
        var o = t[s];
        if (void 0 !== o) return o.exports;
        var n = t[s] = {
            id: s,
            exports: {}
        };
        return e[s](n, n.exports, i), n.exports
    }
    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = i(90);
        const t = "rendered",
            s = document.createElement("template");
        s.innerHTML = `<style>${e.Z}</style><div class="first" id="first"> <div class="handle-container"> <div class="divider"></div> <div class="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" width="16" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke" stroke="#fff"/> </svg> </slot> </div> </div> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> </div> <div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> `;
        const o = {
                ArrowLeft: -1,
                ArrowRight: 1
            },
            n = e => ({
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            });
        class r extends HTMLElement {
            constructor() {
                super(), this.exposure = 50, this.isMouseDown = !1, this.isFocused = !1, this.onWindowMouseMove = e => {
                    this.isMouseDown && this.slideToPageX(e.pageX)
                }, this.bodyUserSelectStyle = "", this.onMouseDown = e => {
                    window.addEventListener("mousemove", this.onWindowMouseMove), window.addEventListener("mouseup", this.onWindowMouseUp), this.isMouseDown = !0, this.enableTransition(), this.slideToPageX(e.pageX), this.focus(), this.bodyUserSelectStyle = window.document.body.style.userSelect, window.document.body.style.userSelect = "none"
                }, this.onWindowMouseUp = () => {
                    this.isMouseDown = !1, window.document.body.style.userSelect = this.bodyUserSelectStyle, window.removeEventListener("mousemove", this.onWindowMouseMove), window.removeEventListener("mouseup", this.onWindowMouseUp)
                }, this.isTouchComparing = !1, this.hasTouchMoved = !1, this.onTouchStart = e => {
                    this.touchStartPoint = n(e), this.isFocused && (this.enableTransition(), this.slideToPageX(e.touches[0].pageX))
                }, this.onTouchMove = e => {
                    if (this.isTouchComparing) return this.slideToPageX(e.touches[0].pageX), e.preventDefault(), !1;
                    if (!this.hasTouchMoved) {
                        const t = n(e);
                        if (Math.abs(t.y - this.touchStartPoint.y) < Math.abs(t.x - this.touchStartPoint.x)) return this.isTouchComparing = !0, this.focus(), this.slideToPageX(e.touches[0].pageX), e.preventDefault(), !1;
                        this.hasTouchMoved = !0
                    }
                }, this.onTouchEnd = () => {
                    this.isTouchComparing = !1, this.hasTouchMoved = !1
                }, this.onBlur = () => {
                    this.stopSlideAnimation(), this.isFocused = !1
                }, this.onFocus = () => {
                    this.isFocused = !0
                }, this.onKeyDown = e => {
                    if (this.isAnimating) return;
                    this.isAnimating = !0;
                    const t = e.key;
                    void 0 !== o[t] && this.startSlideAnimation(o[t])
                }, this.onKeyUp = e => {
                    this.isAnimating && void 0 !== o[e.key] && this.stopSlideAnimation()
                }, this.resetWidth = () => {
                    this.imageWidth = this.offsetWidth
                };
                const e = this.attachShadow({
                    mode: "open"
                });
                e.appendChild(s.content.cloneNode(!0)), this.firstElement = e.getElementById("first"), this.firstImageContainerElement = e.getElementById("firstImageContainer"), this.secondElement = e.getElementById("second")
            }
            connectedCallback() {
                this.hasAttribute("tabindex") || (this.tabIndex = 0), this.addEventListener("dragstart", (e => (e.preventDefault(), !1))), new ResizeObserver(this.resetWidth).observe(this), this.slide(0), this.addEventListener("keydown", this.onKeyDown), this.addEventListener("keyup", this.onKeyUp), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur), this.addEventListener("touchstart", this.onTouchStart), this.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }), this.addEventListener("touchend", this.onTouchEnd), this.addEventListener("mousedown", this.onMouseDown), this.resetWidth(), this.classList.contains(t) || this.classList.add(t), this.querySelectorAll('[slot="before"], [slot="after"]').length > 0 && console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".')
            }
            disconnectedCallback() {
                this.transitionTimer && window.clearTimeout(this.transitionTimer)
            }
            reset() {
                this.exposure = 50, this.slide(0)
            }
            slide(e = 0) {
                var t;
                this.exposure = (100, (t = this.exposure + e) < 0 ? 0 : t > 100 ? 100 : t), this.firstElement.style.setProperty("--exposure", 100 - this.exposure + "%")
            }
            slideToPageX(e) {
                const t = e - this.getBoundingClientRect().left - window.scrollX;
                this.exposure = t / this.imageWidth * 100, this.slide(0)
            }
            enableTransition() {
                this.firstElement.style.setProperty("--transition-time", "100ms"), this.transitionTimer = window.setTimeout((() => {
                    this.firstElement.style.setProperty("--transition-time", "0ms"), this.transitionTimer = null
                }), 100)
            }
            startSlideAnimation(e) {
                let t = null;
                const i = s => {
                    null === t && (t = s);
                    const o = (s - t) / 16.666666666666668 * e;
                    this.slide(o), this.isAnimating && (window.requestAnimationFrame(i), t = s)
                };
                window.requestAnimationFrame(i)
            }
            stopSlideAnimation() {
                this.isAnimating = !1
            }
        }
        window.customElements.define("img-comparison-slider", r)
    })()
})();
//# sourceMappingURL=index.js.map
