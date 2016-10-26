var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

var alpha = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "W", "w", "X", "x", "y", "Y", "z", "Z"];

var translator = function(squirrel) {

};

var vowelCheck = function(check) {
  debugger;
  var checkArray = check.split(""); // Make "check" into array
  var checkLength = checkArray.length; // Find array length of "checkArray"
  var result = "";

  for (var i = 0; i < checkLength; i += 1) {
    debugger;
      alpha.forEach(function(letter) {
        debugger;
      if(checkArray[i] === letter) {
        for (var i = 0; i < checkLength; i += 1) {
        vowels.forEach(function(vowel) {
        if (checkArray[i] === vowel) {
          var ay = "ay";
          checkArray.push(ay);
        };

      });
            checkArray = checkArray.join("");
            return checkArray;
        };
      };
    });
  };


};


$(document).ready(function() {

  $("form#entry").submit(function(event) {
    event.preventDefault();
    debugger;


    var sentenceInput =  $("#sentence").val();

    var pigLatin = vowelCheck(sentenceInput);

    $(".output").text(pigLatin);

  });

});
