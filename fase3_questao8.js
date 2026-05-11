const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {
 return a + b + resto.length;
}
console.log(soma(...valores));

// b) 32
// Porque a=10, b=20 e 'resto' recebe [30, 40], que possui 2 elementos

