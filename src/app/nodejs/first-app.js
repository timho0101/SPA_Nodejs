var _ = require('lodash');

const test = _.defaults({'a': 1}, {'a': 3, 'b': 2});

console.log(test);