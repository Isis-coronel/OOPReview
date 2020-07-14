"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, is5g, color, cameraNumber, price) {
        this.name = name,
            this.model = model,
            this.trademark = trademark,
            this.sdSize = sdSize,
            this.is5g = is5g,
            this.color = color,
            this.cameraNumber = cameraNumber,
            this.price = price;
    }
    Mobile.prototype.getName = function (name) {
        return this.name;
    };
    Mobile.prototype.getmodel = function (model) {
        return this.model;
    };
    Mobile.prototype.gettrademark = function (trademark) {
        return this.trademark;
    };
    Mobile.prototype.getsdSize = function (sdSize) {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function (color) {
        return this.color;
    };
    Mobile.prototype.getPrice = function (price) {
        return this.name;
    };
    Mobile.prototype.getCameraNumber = function (cameraNumber) {
        return this.cameraNumber;
    };
    Mobile.prototype.setName = function (name) {
        this.name;
    };
    Mobile.prototype.setmodel = function (model) {
        this.model;
    };
    Mobile.prototype.settradeMark = function (trademark) {
        this.trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price;
    };
    Mobile.prototype.showAll = function () {
        return "The characteristics of the mobile name are:" + "/n" +
            "Name : " + this.name +
            "Model: " + this.model +
            "TradeMak: " + this.trademark +
            "SD Size: " + this.sdSize +
            "Color: " + this.color +
            "Is 5g?: " + this.is5g +
            "NumberOfCameras: " + this.cameraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
;
