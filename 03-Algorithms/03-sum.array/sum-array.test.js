var expect = chai.expect;

descibe("sumArray", function() {
    it("returns teh total of all the numbers in `arr`", function() {
        var arr = [4, 8, 15, 16, 23, 42];

        var result = sumArray(arr);

        expect(result).to.eql(108);
    });
}) ;
