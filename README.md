# calculateLCM
node modules used:
1. Express
2. Mocha
3. Chai
4. Supertest

The server uses the port:```8080```

Installation:
 ```npm install```
 
Start Server:
 ```npm start```
 
To run test cases: 
 ```npm test```
 
Route to calculate the LCM:
```http://localhost:8080/lcm?values=[2,3,4]```

Status codes:
1. ```200``` if the array of values are natural numbers ```Ex: [2,3,4]```.
2. ```422``` if the array of values are less than two natural numbers ```Ex: [2]```.
3. ```422``` if the array of values are not natural numbers ```Ex: [2,3,4.5,5.6]```.

Methods Used: 
1. ```is_Natural``` in the location ```utils/isNatural.js``` to check if the array of values are natural numbers.
2. ```lcm``` in the location ```utils/find-lcm.js``` to calculate the LCM of the natural numbers

Router location:
 ```routes/get-lcm-route.js```
 
Test cases location:
1. ```test/get-lcm-route-spec.js```
2. ```test/isNatural-spec.js```
3. ```test/find-lcm-spec.js```
