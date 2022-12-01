const Calculator = require('../calculator').Calculator;
const expect = require('chai').expect;




describe('Calculator', function() {

    describe('Addition', function() {
        it('correctly calculates the sum of 1 and 1', function(done) {
            let operations = new Calculator(1,1);
            expect(operations.getAddition()).to.equal(2);
            done();
        })
    });

    describe('Substraction', function() {
        it('correctly substracts 33 and 3', function(done) {
            let operations = new Calculator(33,3);
            expect(operations.getSubstraction()).to.equal(30);
            done();
        })
    });

    describe('Multiplication', function() {
        it('correctly multiplies 7 and 5', function(done) {
            let operations = new Calculator(7,5);
            expect(operations.getMultiplication()).to.equal(35);
            done();
        })
    });

    describe('Division', function() {
        it('correctly divides 10 and 5', function(done) {
            let operations = new Calculator(10,5);
            expect(operations.getDivision()).to.equal(2);
            done();
        })
    });

    
    describe('Square of a number', function() {
        it('correctly calculates square of the number 5', function(done) {
            let operations = new Calculator(5,2);
            expect(operations.getPow()).to.equal(25);
            done();
        })
    });

    describe('Square root', function() {
        it('correctly calculates square  root of 9', function(done) {
            let operations = new Calculator(9);
            expect(operations.getCalcHypotenuse()).to.equal(3);
            done();
        })
    });

    describe('power of a number', function() {
        it('correctly calculates power of the number 5', function(done) {
            let operations = new Calculator(7,3);
            expect(operations.getPow()).to.equal(343);
            done();
        })
    });


    
})
