let expect = require('chai').expect;
let isNatural = require('../utils/isNatural');

describe('is-natural-number', () => {
    it('should return true', () => {
        expect(isNatural(2)).to.be.equal(true);
    });

    it('should return false', () => {
        expect(isNatural(2.4)).to.be.equal(false);
    });

    it('should return false', () => {
        expect(isNatural('r')).to.be.equal(false);
    });
});