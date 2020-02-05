var _ = require('lodash');

const temp1 = ['a', 'b', 'c', 'd', 'e',]

const test = _.defaults({'a': 1}, {'a': 3, 'b': 2});

// console.log(test);

//chunk()
const chunkTemp1 = _.chunk(temp1, 1);
console.log(chunkTemp1);

//compact
