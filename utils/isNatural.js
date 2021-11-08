const is_Natural = (n) => {
	if (typeof n !== 'number') // which means for example typeof n == 'string'
	    return 'Not a number'; 
			
	return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity; //checks if the n is greater than 0.0 & returned largest integer
	                                                               // is equal to n & n is not Infinity;
}

module.exports =  is_Natural;