const expect = chai.expect;
// const getValue = require('./crudactions.js');

describe('getValue', function () {
    it('should return the cost * quanity of items', function () {
        expect(getValue(2, 2)).to.equal(4);
    });
    it('should return -1 if first value is not a number', function () {
        expect(getValue("String", 1)).to.equal(-1);
    });
    it('should return -1 if second value is not a number', function () {
        expect(getValue(-2, "some")).to.equal(-1);
    });

    it('should return number for string number', function () {
        expect(getValue("6", "2")).to.equal(12);
    });

    it('should return -1 if arrays of value is enter', function () {
        expect(getValue([1, 2, 3], [1, 2, 3])).to.equal(-1);
    });
    it('should return the sum of two whole numbers', function () {
        expect(getValue([1, 2, 3], [1, 2, 3])).to.equal(-1);
    });

});