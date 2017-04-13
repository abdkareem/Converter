var chai = require("chai");
var expect = chai.expect;
var converter = require("../app/converter");

describe("Testing color code converter", function() {
    describe("RGB to Hex conversion", function() {
        it("converts basic colors", function(){
            var silver = converter("C0C0C0");
            //var green = converter.hexToRgb("00ff00");
            //var blue = converter.hexToRgb("0000ff");
            expect(silver).to.deep.equal([ 192, 192, 192 ]);
        });
    });
    /*
    describe("Hex to RGB conversion", function(){
        it("convert basic colors", function(){

        });
    }); */
});
