// the jasmine introduction.js
describe('Simple testing suite', function() {

  it("contains a spec with an expectation", function() {
    expect(true).toBe(true);
  });

  // some more testing..
  it("contains a spec with some math calculation", function() {
    expect(2 + 3).toBe(5);
  });
});
