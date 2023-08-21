const assert = require('assert');

const Calculate = require('../index.js');

describe('Calculate', () =>
{
    describe('.factorial', () =>
    {
        it('test if output of 5! is equal to 120', () =>
        {
            // Setup
            const expectedResult = 120;
            //Exercise
            const actualResult = Calculate.factorial(5);
            //Verify
            assert.equal(actualResult, expectedResult);
            
        });
        it('test if output of 3! is equal to 6', () =>
        {
            // Setup
            const expectedResult = 6;
            //Exercise
            const actualResult = Calculate.factorial(3);
            //Verify
            assert.equal(actualResult, expectedResult);
            
        });
        it('throws an error if a value other than positive integer number is supplied', () =>
            {
               //Setup
               const input  = "string";
               const expectedOutput = RangeError;

               //Verify
               assert.throws(()=>
                   {
                        Calculate.factorial(input);
                   },
                   expectedOutput
                   );
        });
        it('return 1 for factorial of 0', () =>
            {
               //Setup
               const input  = 0;
               const expectedResult = 1;

               //Exercise
               const actualResult = Calculate.factorial(input);

               //Verify
               assert.equal(actualResult, expectedResult);

        });
    });
});

/*
    describe('.timeAtDawn', () =>
    {
        it('returns its argument as a string', () =>
        {
            //Setup
            const expectedReturn = 'string';
            const testedValue = 20;

            //Exercise
            const testedMethod = Rooster.timeAtDawn(testedValue);
            const testedMethodType = typeof testedMethod;

            //Verify
            assert.strictEqual(expectedReturn, testedMethodType);
        });
        it('throws an error if passed a number greater than 23', () =>
            {
                //Setup
                const input  = 24;
                const expected = RangeError;

                //Verify
                assert.throws(()=>
                    {
                        Rooster.timeAtDawn(input);
                    },
                    expected
                    );
            });
            it('throws an error if passed a number less than 0', () =>
            {
               //Setup
               const input  = -1;
               const expected = RangeError;

               //Verify
               assert.throws(()=>
                   {
                       Rooster.timeAtDawn(input);
                   },
                   expected
                   );
            });
    });
*/
