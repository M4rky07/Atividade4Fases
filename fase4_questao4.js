const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
 return y;
};
console.log(func(arr));

// a) [2, 3, 1]
// Porque x recebe 1, resto recebe [2, 3] e y usa o valor padrão [...resto, x]