let expect = require('chai').expect;
let lcm = require('../utils/find-lcm');

describe('find-lcm', () => {
    it('should return 12', () => {
        let input = [2,3,4];
        expect(input.reduce(lcm)).to.be.equal(12);
    })
})