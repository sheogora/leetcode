const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const BASE     = 62;

// /**
//  * Encodes a URL to a shortened URL.
//  *
//  * @param {string} longUrl
//  * @return {string}
//  */
// var encode = function(longUrl) {
//     var toEncode = longUrl.replace(/(^\w+:|^)\/\//, '');
//     var encodedUrl = "";
//     var total = 0;

//     console.log(toEncode);
    
//     for (var i = 0; i < toEncode.length; i++) { 
//         total += toEncode.charCodeAt(i) 
//     }

//     console.log(total);
    
//     while (total > 0) {
//         console.log(total % BASE);
// 		var encodedUrl = ALPHABET.charAt(total % BASE) + encodedUrl;
// 		total = Math.floor(total / BASE);
// 	}

//     console.log(encodedUrl);
//     return "http://tinyurl.com/" + encodedUrl;
// };

// /**
//  * Decodes a shortened URL to its original URL.
//  *
//  * @param {string} shortUrl
//  * @return {string}
//  */
// var decode = function(shortUrl) {
    
// };

// /**
//  * Your functions will be called as such:
//  * decode(encode(url));
//  */
// var url = "https://leetcode.com/problems/design-tinyurl";

// console.log(encode(url))
// // decode(encode(url));


let urls = {};

var encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

var decode = function(shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};