const Calculate = {
  factorial: function(factorialNumber)
  {
    if(typeof factorialNumber !== 'number' || factorialNumber < 0)
    {
        throw new RangeError;
    }
    let sum = 1;
    while(factorialNumber !== 0)
    {
        sum = factorialNumber*sum;
        factorialNumber--;
    }
    return sum;
  }
}

module.exports = Calculate;