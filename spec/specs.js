describe("translateMessage", function() {
  it("translates the entire message into PigLatin", function() {
    expect(translateMessage("Happy birthday!")).to.equal("appyhay irthdaybay!");
  });
});


describe("translateWord", function() {
  it("appends consonant and 'ay' to a word for word starting with consonant", function() {
    expect(translateWord("puppy")).to.equal("uppypay");
  });

  it("treats y as a consonant", function() {
    expect(translateWord("yellow")).to.equal("ellowyay");
  });

  it("handles nonword characters", function() {
    expect(translateWord("don't!")).to.equal("on'tday!");
  });
});

describe("endsWithPunctuation", function() {
  it("returns false for 'hello'", function() {
    expect(endsWithPunctuation("hello")).to.equal(false);
  });

  it("returns true for 'hello!'", function() {
    expect(endsWithPunctuation("hello!")).to.equal(true);
  });
});

describe("startsWithDigraph", function() {
  it("appends digraph and 'ay' to words starting with digraphs", function() {
    expect(translateWord("three")).to.equal("reethay");
  });
});

describe("startsWithVowel", function() {
  it("appends 'ay' to a word for word starting with vowels", function() {
    expect(translateWord("eat")).to.equal("eatay");
  });
});
