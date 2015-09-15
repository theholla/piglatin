// Translates a message into PigLatin
var translateMessage = function(message) {
  var wordArray = message.toLowerCase().split(/\s+/g);
  var pigLatinArray = [];
  for (var i = 0; i < wordArray.length; i++) {

    pigLatinArray.push(translateWord(wordArray[i]));
  }
  var pigLatinMessage = pigLatinArray.join(" ");
  return pigLatinMessage;
};

// Helper method for translate: translate a word into Pig Latin
var translateWord = function(word) {
  var word = word;
  var translatedWord = "";
  var ending = "ay";

  if (endsWithPunctuation(word)) {
    // Create an array of all substrings of nonwords
    var nonwords = word.substring(0).match(/\W+/g);
    var endingPunctuation = nonwords[nonwords.length - 1];
    ending += endingPunctuation;
    word = word.replace(endingPunctuation, "");
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

// Helper method for translateWord: moves final punctuation to the end of the translated word
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
    var translated = translateMessage(message);

    // Populate data
    $(".original").text(message);
    $(".translated").text(translated);

    $("#result").show();
    event.preventDefault();
  });
});
