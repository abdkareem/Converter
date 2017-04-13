var chai = require("chai");
var expect = chai.expect;
var converter = require("../app/converter");
var hexToRgb = converter.hexToRgb;

describe("Testing color code converter", function() {
    describe("Testing hex to rgb conversion", function() {
        it("test gold conversion", function(){
            var gold = hexToRgb("FFD700");
            expect(gold).to.deep.equal([ 255, 215, 0 ]);
        });
        it("test silver conversion", function(){
            var silver = hexToRgb("C0C0C0");
            expect(silver).to.deep.equal([192, 192, 192 ]);
        });
        it("test bronze conversion", function() {
            var bronze = hexToRgb("8B4513");
            expect(bronze).to.deep.equal([139, 69, 19])
        })
    });
    /*
    describe("Hex to RGB conversion", function(){
        it("convert basic colors", function(){

        });
    }); */
});
