var translateWord = function(word) {
  var regexp = /[AEIOU]/gi;
  var firstLetter = word.slice(0, 1);
  var translatedWord = "";

  var firstTwoLetters = word.slice(0,2);
  var digraph = ["th", "ch", "ph", "sh", "qu"];
  var isDigraph = digraph.indexOf(firstTwoLetters) !== -1;

  if (firstLetter.match(regexp)) {
    translatedWord = word + "ay";
  } else if (isDigraph) {
    debugger;
    translatedWord = word.slice(2) + firstTwoLetters + "ay";
  } else {
    debugger;
    translatedWord = word.slice(1) + word.slice(0, 1) + "ay";
  }
  return translatedWord;
};

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
     var message = $("input#message").val();
     var translated = translateWord(message);

     // Populate data
     $(".original").text(message);
     $(".translated").text(translated);

     $("#result").show();
     event.preventDefault();
   });
 });
