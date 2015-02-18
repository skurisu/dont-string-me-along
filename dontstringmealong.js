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

  var part = "kurisusar";
  var whole = "sarah kurisu";

  function circVar (str1,str2) {
    var double = str2.concat(str2);

    if(double.indexOf(str2) === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  circVar(part,whole);
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
