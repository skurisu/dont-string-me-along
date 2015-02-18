(function () {
  var num = "9899100101103104105";

  function missingNumPush (str){
  var missingNums = [];
    for (var i = 0; i < 10; i++){
      if (str.indexOf(i) === -1){
        missingNums.push(i);
      }
    }
  return missingNums;
  }
  missingNumPush(num);
})();

(function () {
  // console.log("test");
  var name = "Jay Won";
  var space = sample.indexOf(" ");

  function swapWords (sample,whitespace){
    var secondWord = sample.slice(0,whitespace);
    var firstWord = sample.slice(whitespace, sample.length);
    var swapped = (firstWord + ", " + secondWord);
    return swapped;
    //return(firstWord + ", " + secondWord);
  }

  swapWords(name,space);
})();

(function () {

  function circVar (str1,str2) {
    // concat str2 with str2
    // check for str1 within concat str2 (check length of str1)
  }
})();

(function () {

  var myPalindrome = "racecar";

  function palindrome (str1) {

    var reverseString = str1.split("").reverse().join("");

    if(str1 === reverseString) {
      console.log("true");
    }
    else {
      console.log("false!");
    }
  }

  palindrome(myPalindrome);
})();
