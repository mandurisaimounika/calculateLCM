let supertest = require('supertest');
let expect = require('chai').expect;
let app = require('../index');
let request = supertest(app);

describe('get-lcm-route-spec', () => {
  it('get /lcm?values=2,3,4 with status 200', function( done ){
    request
        .get(`/lcm?values=2,3,4`)
        .expect(200)
        .end(function(err,res){
            // console.log(err,res.body)
            if(err) return done(err);
            expect(res.text).to.be.equal('The LCM of 2,3,4 is 12');
            done();
        });
  });

  it('get /lcm?values=undefined with status 422', function( done ){
    request
        .get(`/lcm?values=undefined`)
        .expect(422)
        .end(function(err,res){
            // console.log(err,res.body)
            if(err) return done(err);
            expect(res.text).to.be.equal('Only natural numbers may be used to calculate a LCM.');
            done();
        });
  });

  it('get /lcm?values=2 with status 422', function( done ){
    request
        .get(`/lcm?values=[2]`)
        .expect(422)
        .end(function(err,res){
            if(err) return done(err);
            expect(res.text).to.be.equal('At least two natural numbers must be provided to compute the LCM.');
            done();
        });
  });

  it('get /lcm?values=2,3,4,5.67 with status 422', function( done ){
    request
        .get(`/lcm?values=[2,3,4,5.67]`)
        .expect(422)
        .end(function(err,res){
            if(err) return done(err);
            expect(res.text).to.be.equal('Only natural numbers may be used to calculate a LCM.');
            done();
        });
  });

})