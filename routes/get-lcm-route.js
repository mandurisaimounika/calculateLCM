const express = require('express');
const is_Natural = require('../utils/isNatural');
const lcm = require('../utils/find-lcm');

const router = express.Router();

router.get('/lcm', (request, response, next) => {
    try{
        let {
          values     //values will be strings separated by ,
        } = request.query;

        values = JSON.parse(values); // the typeof values will be string so we need to parse the array

       let notValid = values.length > 0 ? values.filter(value => !is_Natural(value)) : []; //filter and return the array of non-natural number

       if (notValid.length > 0) {  // if any non-natural number exists in array
        response
         .status(422)
         .send('Only natural numbers may be used to calculate a LCM.');
       } else if(values.length < 2) { // if only one or no values are passed in the query
        response
         .status(422)
         .send('At least two natural numbers must be provided to compute the LCM.');
       } else { // if not the above two cases
        let LCM = values.reduce(lcm);
        response
         .status(200)
         .send(`The LCM of ${values} is ${LCM}`)
       } 

   } catch(e) {
       next(e);
   }
});

module.exports = router;