var Rectangle = (function () {
    function Rectangle(length, breadth) {
        this.breadth = breadth;
        this.length = length;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
//# sourceMappingURL=Rectangle.js.map