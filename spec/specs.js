describe("translateWord", function() {
  it("appends consonant and 'ay' to a word for word starting with consonant", function() {
    expect(translateWord("puppy")).to.equal("uppypay");
  });

  it("appends digraph and 'ay' to words starting with digraphs", function() {
    expect(translateWord("three")).to.equal("reethay");
  })

  it("appends 'ay' to a word for word starting with vowels", function() {
    expect(translateWord("eat")).to.equal("eatay");
  });
});
