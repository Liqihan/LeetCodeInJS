/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var reg = new RegExp(/\W|_/ig);
    var string = s.replace(reg, '').toLowerCase();
    return string === string.split('').reverse().join('');
};
var a = isPalindrome("A man, a plan, a canal: Panama");
console.log(a);