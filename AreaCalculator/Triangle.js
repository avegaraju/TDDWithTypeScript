var Triangle = (function () {
    function Triangle(base, ajaxWrapper) {
        this.base = base;
        this.ajaxWrapper = ajaxWrapper;
    }
    Triangle.prototype.calculateArea = function () {
        var height = this.ajaxWrapper.performAjaxCall();
        return (1 / 2) * this.base * height;
    };
    return Triangle;
}());
var AjaxWrapper = (function () {
    function AjaxWrapper() {
    }
    AjaxWrapper.prototype.performAjaxCall = function () { throw new Error("Not implemented"); };
    return AjaxWrapper;
}());
//# sourceMappingURL=Triangle.js.map