const chai = require('chai')
const assert = chai.assert

const { getRandomNumber } = require("../server");

describe('Basic Unit Test', () => {
    it('should generate a random whole number between 0 and 100', () => {
        const random = getRandomNumber()

        assert.isNotNull(random)
        assert.isNumber(random)
        assert.isAtLeast(random, 0)
        assert.isAtMost(random, 100)
    })
})


// describe //a test for file1
//  -- it //a unit test for function 1
//  -- it //a unit test for function 2

// describe //a test for file2
//  -- test // a unit for funct1
//  -- test // a unit for funct2


