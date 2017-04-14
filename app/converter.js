exports.hexToRgb = function (hex) {
    var red = parseInt((hex.substring(0,2)), 16)
    var blue = parseInt((hex.substring(2,4)), 16)
    var green = parseInt((hex.substring(4,6)), 16)
    return [red, blue, green];
};

exports.rgbToHex = function(r,g,b) {
    var r = r.toString(16);
    var g = g.toString(16);
    var b = b.toString(16);
    // console.log(r);
    // console.log(g);
    // console.log(b);
    return r + g + b;
};