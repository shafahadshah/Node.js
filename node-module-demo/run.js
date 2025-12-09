// run.js
const moduleA = require('./script');
const moduleB = require('./script');

console.log("Are moduleA and moduleB same?", moduleA === moduleB);

// Call increment from moduleA
moduleA.increment();
moduleA.increment();

// Access counter from moduleB
console.log("Counter from moduleB:", moduleB.counterValue());

// Delete from cache and reload
delete require.cache[require.resolve('./script')];
const moduleC = require('./script');

console.log("Reloaded moduleC...");
moduleC.increment();
console.log("Counter from moduleC:", moduleC.counterValue());
