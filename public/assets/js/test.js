const expect = chai.expect;

describe('getPriceQuantity', function () {
    it('should return the cost * quanity of items', function () {
        expect(getPriceQuantity(2, 2)).to.equal(4);
    });
    it('should return the cost * quanity of items', function () {
        expect(getPriceQuantity(2, 8)).to.equal(16);
    });
    it('should return the cost * quanity of items', function () {
        expect(getPriceQuantity(2, 2)).to.equal(4);
    });
    it('should return -1 if first value is not a number', function () {
        expect(getPriceQuantity("String", 1)).to.equal(-1);
    });
    it('should return -1 if second value is not a number', function () {
        expect(getPriceQuantity(-2, "some")).to.equal(-1);
    });

    it('should return number for string number', function () {
        expect(getPriceQuantity("6", "2")).to.equal(12);
    });

    it('should return -1 if arrays of value is enter', function () {
        expect(getPriceQuantity([1, 2, 3], [1, 2, 3])).to.equal(-1);
    });
    it('should return the sum of two whole numbers', function () {
        expect(getPriceQuantity([1, 2, 3], [1, 2, 3])).to.equal(-1);
    });

});

describe('loginValues', function () {

    it('should return false if email is not a string', function () {
        expect(loginValues(3, "Flagg")).to.equal(false);
    });

    it('should return false if email or password is number', function () {
        expect(loginValues(3, 3)).to.equal(false);
    });
    it('should return false if email or password is undefined', function () {
        expect(loginValues("", "")).to.equal(false);
    });

});

// describe('testwhat', function () {

//     it('should return false expect email string', function () {
//         expect(loginValues(3, "Flagg")).to.equal(false);
//     });
//     it('should return false expect password string', function () {
//         expect(loginValues(3, 3)).to.equal(false);
//     });
//     it('should return true string is not undefined', function () {
//         expect(loginValues("", "")).to.equal(true);
//     });

// });