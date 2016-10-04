jQuery(document).ready(function() {

  var ogSentence = prompt("Please type in any sentence");

  var capitalizeFirstLastLetters = function() {
    return (ogSentence.charAt(0) + ogSentence.charAt(ogSentence.length-1)).toUpperCase(); //Returns first and last letters of original sentence - capitalized
  };

  var reverseSentence = function() {
    return capitalizeFirstLastLetters().split("").reverse().join(""); //Reverses capitalizedFirstLetters string
  }

  var concatOgReverse = function() {
    return ogSentence + reverseSentence(); // concatenates original sentence with new reversed sentence
  }

  var newResult = function() {
    return (concatOgReverse().charAt(concatOgReverse().length / 2)) + concatOgReverse(); // Returns length of concatOgReverse / 2 and concatenates with concatOgReverse
  }

  var finalCipherResult = newResult().split("").reverse().join(""); //Reverses newResult into final cipher

  jQuery(".tiger").click(function() {
    alert(ogSentence);
  });

  jQuery(".lion").click(function() {
    alert(finalCipherResult);
  });

});
