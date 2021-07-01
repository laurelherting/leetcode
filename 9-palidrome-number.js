// Previously, I did a string-based reversal in my coderbyte-challenge repo, so thought I'd mix things
// up a bit and try the number-based reversal. This was def harder.
// basically, here just pick out digits one by one, reverse the #, but don't convert it to a string.

var isPalindrome = function(x) {
  // check if # is less than 0
  // I'm more used to converting to strings and then create an array, so this was tricky to
  // process it as a reversal. Dunno, may be I was overthinking it? ended up looking at how to do this
  // part on stackoverflow & MDN

  const isNegative = x < 0 ? true : false;

  // if it is, return false
  if (isNegative) {
    return false;
  }

  // initial var temp w/ x
  const temp = x;
  // initial reverse var w/ 0
  let reversed = 0;

  // loop till < or = 0
  while (x > 0) {
    // then, y'all gotta multiply that reversed var w/ 10 & then add that last digit
    // remove last digit of x
    // At first, I kept missing that removal, so it failed
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return reversed == temp;
};

// reversed # = temp(initial) then return true
// or else return false
const test = isPalindrome(375);
console.log(test);

// code result on Leetcode.com = accepted, runtime: 112ms, my input 121,
// stdout: false, Output: true, Expected: true
