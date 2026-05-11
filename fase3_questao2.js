const numeros = [1, 2, 3, 4, 5]; 
const [a, , b, ...c] = numeros; 
console.log(a, b, c);

// a) 1 3 [4, 5]
// Porque o destructuring pega 1 em 'a', pula o 2, pega 3 em 'b' e o restante vai para 'c'
