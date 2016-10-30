QUnit.module("RectangleTests.ts tests");
test("Can create instace of rectangle class with specified length and breadth", function () {
    var rectangle = new Rectangle(10, 5);
    ok(rectangle != undefined, "Assert that rectangle class takes length and" +
        "breadth as arguments");
});
test("Can calculate area of rectangle", function () {
    var rectangle = new Rectangle(10, 5);
    var result = rectangle.calculateArea();
    ok(result === 50, "Assert that rectangle area is correctly calculated");
});
//# sourceMappingURL=RectangleTests.js.map