jQuery(document).ready(function() {

  var ogSentence = prompt("Please type in any sentence");

  var newSentence = function() {
    return (ogSentence.charAt(0) + ogSentence.charAt(ogSentence.length-1)).toUpperCase();
  };

  var revSentence = function() {
    return newSentence().split("").reverse().join("");
  }

  var result = function() {
    return ogSentence + revSentence();
  }

  var newResult = function() {
    return (result().charAt(result().length / 2)) + result();
  }

  var finalCipherResult = newResult().split("").reverse().join("");

  jQuery(".tiger").click(function() {
    alert(ogSentence);
  });

  jQuery(".lion").click(function() {
    alert(finalCipherResult);
  });

});
