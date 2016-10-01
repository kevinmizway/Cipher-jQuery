jQuery(document).ready(function() {

  var ogSentence = prompt("Please type in any sentence");

  var capitalizeFirstLastLetters = function() {
    return (ogSentence.charAt(0) + ogSentence.charAt(ogSentence.length-1)).toUpperCase();
  };

  var reverseSentence = function() {
    return capitalizeFirstLastLetters().split("").reverse().join("");
  }

  var concatOgReverse = function() {
    return ogSentence + reverseSentence();
  }

  var newResult = function() {
    return (concatOgReverse().charAt(concatOgReverse().length / 2)) + concatOgReverse();
  }

  var finalCipherResult = newResult().split("").reverse().join("");

  jQuery(".tiger").click(function() {
    alert(ogSentence);
  });

  jQuery(".lion").click(function() {
    alert(finalCipherResult);
  });

});
