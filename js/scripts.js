// Helper method for translate: translate a word into Pig Latin
var translateWord = function(word) {
  var word = word.toLowerCase();
  var translatedWord = "";
  var ending = "ay";

  if (endsWithPunctuation(word)) {
    ending += word.slice(-1);
    word = word.substring(0, word.length - 1);
  }

  if (startsWithVowel(word)) {
    translatedWord = word + ending;
  } else if (startsWithDigraph(word)) {
    translatedWord = word.slice(2) + word.slice(0, 2) + ending;
  } else {
    translatedWord = word.slice(1) + word.slice(0, 1) + ending;
  }

  return translatedWord;
};

//Helper method for translateWord: moves final punctuation to the end of the translated word
var endsWithPunctuation = function(word) {
  var lastLetter = word.slice(-1);
  if (word.match(/\W+/g)) {
    return true;
  } else {
    return false;
  }
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
