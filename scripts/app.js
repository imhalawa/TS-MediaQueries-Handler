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
