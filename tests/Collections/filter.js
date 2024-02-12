const words1 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words1.filter((word, idx) => word.startsWith('e') && word.length> 3 );

console.log("result1"+ " "+result1);

//Exp output:  result1    exuberant

//===========

const words2 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result2 = words2.filter((word) => word.length > 6);

console.log("result2"+  " " +result2);

//Expected output: Array ["exuberant", "destruction", "present"]