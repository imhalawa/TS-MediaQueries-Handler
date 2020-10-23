"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaQueryHandler = void 0;
var BreakPoints;
(function (BreakPoints) {
    BreakPoints[BreakPoints["xsmall"] = 0] = "xsmall";
    BreakPoints[BreakPoints["small"] = 1] = "small";
    BreakPoints[BreakPoints["medium"] = 2] = "medium";
    BreakPoints[BreakPoints["large"] = 3] = "large";
    BreakPoints[BreakPoints["xlarge"] = 4] = "xlarge";
})(BreakPoints || (BreakPoints = {}));
var MediaQueryHelper = /** @class */ (function () {
    function MediaQueryHelper() {
    }
    MediaQueryHelper.getBreakPoint = function () {
        return window
            .getComputedStyle(document.body, ":before")
            .content.replace(/\"/g, "");
    };
    return MediaQueryHelper;
}());
var MediaQueryHandler = /** @class */ (function () {
    function MediaQueryHandler() {
        this.SetupEventListeners();
        this.breakPoint = MediaQueryHelper.getBreakPoint();
    }
    Object.defineProperty(MediaQueryHandler.prototype, "BreakPoint", {
        // properities
        set: function (value) {
            this.breakPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    MediaQueryHandler.prototype.SetupEventListeners = function () {
        var _this = this;
        window.addEventListener("resize", this.OnWindowResize.bind(this));
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                _this.OnWindowResize();
            }
        };
    };
    MediaQueryHandler.prototype.OnWindowResize = function () {
        this.breakPoint = MediaQueryHelper.getBreakPoint();
        this.OnBreakPointChange(this.breakPoint);
    };
    MediaQueryHandler.prototype.OnBreakPointChange = function (breakpoint) {
        if (breakpoint === BreakPoints[BreakPoints.xsmall]) {
            this.OnXSmallScreens();
        }
        else if (breakpoint === BreakPoints[BreakPoints.small]) {
            this.OnSmallScreens();
        }
        else if (breakpoint === BreakPoints[BreakPoints.medium]) {
            this.OnMediumScreens();
        }
        else if (breakpoint === BreakPoints[BreakPoints.large]) {
            this.OnLargeScreens();
        }
        else if (breakpoint === BreakPoints[BreakPoints.xlarge]) {
            this.OnLargeScreens();
        }
    };
    return MediaQueryHandler;
}());
exports.MediaQueryHandler = MediaQueryHandler;
