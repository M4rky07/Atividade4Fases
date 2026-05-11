const matriz = [ [1, 2], [3, 4], [5, 6] ];
const [, [, y], ...resto] = matriz;
console.log(y, resto);


// b) 4 [[5, 6]]
// Porque o destructuring ignora o primeiro array, 
// pega o 4 do segundo e o restante vai para 'resto'

