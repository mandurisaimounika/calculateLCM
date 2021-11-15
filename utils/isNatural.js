const is_Natural = (n) => {
	return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity ? true : false; //checks if the n is greater than 0.0 & returned largest integer
	                                                               // is equal to n & n is not Infinity;
}

module.exports =  is_Natural;