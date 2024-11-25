require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply(num1, num2)).to.eq(62);
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      const result = random(100)
      expect(result).to.be.a('number');
      expect(result).to.be.greaterThan(0);
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      // Define the numbers you want to use in the test
      let num3 = 13; // Example number
      let num4 = 9;  // Use 9 so that 13 % 9 = 4
  
      // Call the mod function with these numbers
      let result = mod(num3, num4);
  
      // Check that the variables are numbers
      expect(num3).to.be.a('number');
      expect(num4).to.be.a('number');
  
      // Verify that the mod function returns the expected result
      expect(result).to.eq(4);
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max(10, 20)).to.equal(20);
    });
  });
});
