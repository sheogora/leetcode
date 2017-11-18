"use strict"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Given two strings representing two complex numbers.
// You need to return a string representing their multiplication. 
// Note i2 = -1 according to the definition.

 // (a+bi)(c+di) = ac + adi + bci + bdi2
 /* (3 + 2i)(1 + 7i) = 3×1 + 3×7i + 2i×1+ 2i×7i	 
 	 				 = 3 + 21i + 2i + 14i2	 
 	 			     = 3 + 21i + 2i − 14	(because i2 = −1)
 	 				 = −11 + 23i
 */
var complexNumberMultiply = (a, b) => {
    var x = a.split("+");
    var y = b.split("+");
    var a_real = parseInt(x[0]);
    var b_img = parseInt(x[1]);
    var c_real = parseInt(y[0]);
    var d_img = parseInt(y[1]);

    var real = a_real * c_real - b_img * d_img;
    var imaginary = a_real * d_img + b_img * c_real;

    return real + "+" + imaginary + "i";
};

console.log(complexNumberMultiply("3+2i","1+7i"));