function test(x,y, res) {
    results.total++;
    var result = x * y;
    if (result !== res) {
      results.bad++;
      console.log("Expected " + res +
        ", but was " + result);
    }
  }
  var results = {
    total: 0,
    bad: 0
  };

test(5, 3, 15);
test(4, 2, 8);


console.log("Of " + results.total + " tests, " +
results.bad + " failed, " +
(results.total - results.bad) + " passed.");