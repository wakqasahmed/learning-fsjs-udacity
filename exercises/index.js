const util1 = require('./utilities/util1');
const util2 = require('./utilities/util2');

const items1 = [1,2,3,4,5];
const items2 = [6,7,8,9,10];

console.log(util1.sum(items1));
console.log(util1.concat(items1, items2));

console.log(util2.lgNum(items1));
console.log(util2.cut3(items2));

