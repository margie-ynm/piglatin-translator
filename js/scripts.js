var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];


var translator = function(squirrel) {

};

var vowelCheck = function(check) {
  var checkArray = check.split(""); // Make "check" into array
  var checkLength = checkArray.length; // Find array length of "checkArray"
  var result = "";
  var match = false;


  // for (var i = 0; i < checkLength; i += 1) {
    match = false;
    vowels.forEach(function(vowel) {
      if (checkArray[0] === vowel) {
        match = true;
      }
    });
    if(!match) {
      checkArray.unshift(checkArray.shift());
    }
  // };

  checkArray.push("ay");
  checkArray = checkArray.join("");
  return checkArray;
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
