var mock = TypeMoq.Mock.ofType(AjaxWrapper);
var baseValue = 2;
QUnit.module("Triangle test with external dependency");
test("Can create instance of Traingle class with an external dependency", function () {
    var triangle = new Triangle(baseValue, mock.object);
    ok(triangle != undefined, "Assert that the triangle instance is not undefined");
});
test("Can calculate area of a triangle", function () {
    var expected = 10;
    mock.setup(function (x) { return x.performAjaxCall(); }).returns(function (n) { return expected; });
    var triangle = new Triangle(baseValue, mock.object);
    var result = triangle.calculateArea();
    ok(result === 10, "Assert that area is calculated correctly.");
});
//# sourceMappingURL=TriangleTests.js.map