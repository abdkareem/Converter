var chai = require("chai");
var expect = chai.expect;
var converter = require("../app/converter");

describe("Testing color code converter", function() {
    describe("RGB to Hex conversion", function() {
        it("converts basic colors", function(){
            var red = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue = converter.hexToRgb("0000ff");
            expect(red).to.equal([255,0,0]);
        });
    });
    describe("Hex to RGB conversion", function(){
        it("convert basic colors", function(){

        });
    });
});
