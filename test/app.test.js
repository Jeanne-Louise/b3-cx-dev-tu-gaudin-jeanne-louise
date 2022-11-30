const assert = require('assert')
const operations = require('../calculator')


describe('Calculator', () => {
    
    describe('Addition', () => {
        it('correctly calculates the sum of 1 and 3', () => {
            assert.equal(operations.add(1, 3), 4)
        })
    })
    
    describe('Subtraction', () => {
        it('correctly calculates the difference of 33 and 3', () => {
            assert.equal(operations.subtract(33, 3), 30)
        })
     })
    describe('Multiplication', () => {
        it('correctly calculates the product of 12 and 12', () => {
            assert.equal(operations.multiply(12, 12), 144)
          })
     })
  
    describe('Division', () => {
      it('correctly calculates the quotient of 10 and 2', () => {
        assert.equal(operations.divide(10, 2), 5)
      })
    })

    describe ('square of a number', () => {
        it('correctly calculates square of the number 5', () => {
            assert.equal(operations.pow(5,2), 25)
           })
    })
    
    describe('Square root', () => {
        it('correctly calculates square  root of 9', () => {
              assert.equal(operations.calcHypotenuse(9), 3)
        })
    })
        
    describe('power of a number', () => {
        it('correctly calculates power of the number 5', () => {
             assert.equal(operations.pow(7,3), 343)
            })
    })

})