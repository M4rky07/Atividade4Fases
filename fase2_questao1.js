const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);

console.log(resultado); // 37

// Filtra os números ímpares, multiplica cada um por 3 e soma tudo começando em 10

