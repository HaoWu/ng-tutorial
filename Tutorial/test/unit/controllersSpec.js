'use strict';

/* jasmine specs for controllers go here */

describe('Phonecat controllers', function () {

    describe('PhoneListCtrl', function () {
        var scope,
            ctrl;

        beforeEach(function () {
            scope = {};
            ctrl = new PhoneListCtrl(scope);
        });

        it('should create "phones" model with 3 phones', function () {
            expect(scope.phones.length).toBe(3);
        });

        it('should initialize orderProp to newest', function () {
            expect(scope.orderProp).toBe("age");
        });
    })
});
