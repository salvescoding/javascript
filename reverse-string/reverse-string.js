
var reverseString = function (word) {
  return word === '' ? '' : word.split('').reverse().join('');
};


module.exports = reverseString;
