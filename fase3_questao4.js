const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado);


// b) { a: 1, b: 3, c: 4 }
// Porque o spread copia os objetos e o valor de 'b' em extra sobrescreve o de base