(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MediaQueriesHandler_1 = require("./Helpers/MediaQueriesHandler");
var app = /** @class */ (function (_super) {
    __extends(app, _super);
    function app() {
        var _this = _super.call(this) || this;
        _this.heading = document.querySelector("#screenSize");
        return _this;
    }
    app.prototype.OnXSmallScreens = function () {
        console.log("Xsmall  Screens");
        this.heading.textContent = "Xsmall  Screens";
    };
    app.prototype.OnSmallScreens = function () {
        console.log("Small  Screens");
        this.heading.textContent = "Small  Screens";
    };
    app.prototype.OnMediumScreens = function () {
        console.log("Medium  Screens");
        this.heading.textContent = "Medium  Screens";
    };
    app.prototype.OnLargeScreens = function () {
        console.log("Large  Screens");
        this.heading.textContent = "Large  Screens";
    };
    app.prototype.OnXLargeScreens = function () {
        console.log("XLarage  Screens");
        this.heading.textContent = "XLarage Screens";
    };
    return app;
}(MediaQueriesHandler_1.MediaQueryHandler));
new app();

},{"./Helpers/MediaQueriesHandler":1}]},{},[2]);
