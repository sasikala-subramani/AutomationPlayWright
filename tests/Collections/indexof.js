/*  indexOf(searchElement)

    indexOf(searchElement, fromIndex)


  */

    const beasts = ['ant', 'bison', 'camel','bison' ,'duck','pig' ,'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2===>indexOf(searchElement, fromIndex)
console.log(beasts.indexOf('bison', 3));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));   //if not mattching output is -1
// Expected output: -1


/*
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
*/