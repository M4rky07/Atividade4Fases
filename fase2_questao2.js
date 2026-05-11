const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
})).reduce((acc, obj) => acc + obj.metade, 0);

console.log(processado); //60



//Resposta


const arr = [10, 15, 22, 34, 45, 60];

let soma = 0;

for (let i = 0; i < arr.length; i++) {
  const n = arr[i];

  if (n % 3 === 0) {  //Equivalente ao filter
    
    const obj = { //Equivalente ao map
      original: n,
      metade: n / 2
    };

    soma += obj.metade; // Equivalente ao reduce
  }
}

console.log(soma); // 60


// Filtra os números divisíveis por 3, cria objetos com o valor original e sua metade,
// e soma todas as metades.

