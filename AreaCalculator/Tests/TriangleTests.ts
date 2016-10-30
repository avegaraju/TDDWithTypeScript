/// <reference path="../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../Scripts/typemoq.d.ts"/>
/// <reference path="../Triangle.ts"/>
/// <chutzpah_reference path="../Scripts/typemoq.js"/>
/// <chutzpah_reference path="../Scripts/underscore.js"/>
/// <chutzpah_reference path="../Scripts/typings/qunit/qunit.js"/>

let mock: TypeMoq.Mock<IAjaxWrapper> = TypeMoq.Mock.ofType<IAjaxWrapper>(AjaxWrapper);

let baseValue = 2;

QUnit.module("Triangle test with external dependency");

test("Can create instance of Traingle class with an external dependency",
    () => {
        var triangle = new Triangle(baseValue, mock.object);

        ok(triangle != undefined, "Assert that the triangle instance is not undefined");
    });

test("Can calculate area of a triangle",
    () => {
        var expected = 10;
        mock.setup(x => x.performAjaxCall()).returns((n: number) => expected);
        var triangle = new Triangle(baseValue, mock.object);

        var result = triangle.calculateArea();

        ok(result === 10, "Assert that area is calculated correctly.");
    });