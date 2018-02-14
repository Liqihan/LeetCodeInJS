/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
            result++;
        }
    }
    return result;
};
var a = countSegments("Hello, my name is John");
console.log(a);
console.log(countSegments(""));
