var _ = require('lodash');

/* pratice using lodash function */

// defaults example
const test = _.defaults({'a': 1}, {'a': 3, 'b': 2});

// write an object with function within
const person = {
  name: 'Tim',
  age: 29,
  greet() {
    console.log('hi i am ' + this.name);
  }
}

// person.greet();

// map
const hobbies = ['Sports', 'Cooking'];
// modified array
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// original array
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// slice, ... to copy an array
const copiesArray = [...hobbies];

// console.log(copiesArray);
// pull elements out of person obj 
const copiesPerson = {...person};
// console.log(copiesPerson);

// obj destructoring 
const printName = ({ name }) => {
  // console.log(name);
}

printName(person);

const { name , age } = person;
// console.log(name, age);

// async code
const fetchDate = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!')
    }, 2000);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchDate()
  .then(text => {
    console.log(text);
    return fetchDate();
  })
  .then(text2 => {
    console.log(text2);
  });
}, 2000);
console.log('Hello');
console.log('Hi');





