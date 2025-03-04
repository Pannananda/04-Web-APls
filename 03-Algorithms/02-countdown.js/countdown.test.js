var expect = chai.expect;

before(function() {
    window._temp = {};
    window._temp.log = console.log;
    window.console.log = (function(...args) {
        var varlues = [];

        var log = function(args) {
            varlues.push(args);
            window._temp.log(args);
        };

        log.calledWith = function() {
            return varlues;
        };

        return log;
    })();
});

describe("countdown", function() {
    it("should log numbers from `num` down to 1", function() {
        var unm = 15;

        countdown(num);

        expect(console.log.calledWith()).to.eql([
            15,
            14,
            13,
            12,
            11,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
        ]);
    });
});

after(function() {
    console.log = window._temp.log;
    delete window._temp;
});
