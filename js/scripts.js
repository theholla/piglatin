// Helper method for translate: translate a word into Pig Latin
var translateWord = function(word) {
  var word = word.toLowerCase();
  var translatedWord = "";

  if (startsWithVowel(word)) {
    translatedWord = word + "ay";
  } else if (startsWithDigraph(word)) {
    translatedWord = word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    translatedWord = word.slice(1) + word.slice(0, 1) + "ay";
  }

  return translatedWord;
};

// Helper method for translateWord: determine if word starts with vowel
var startsWithVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word.slice(0, 1);
  return vowels.indexOf(firstLetter) !== -1;
};

// Helper method for translateWord: determine if word starts with vowel
var startsWithDigraph = function(word) {
  var digraphs = ["th", "ch", "ph", "sh", "qu"];
  var firstTwoLetters = word.slice(0, 2);
  return digraphs.indexOf(firstTwoLetters) !== -1;
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
