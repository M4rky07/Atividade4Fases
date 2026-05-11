const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ];


const resultado = pessoas.reduce((acc, pessoa) => {
  const cidade = pessoa.cidade;

  if (!acc[cidade]) {
    acc[cidade] = [];
  }

  acc[cidade].push(pessoa);

  return acc;
}, {});

console.log(resultado)
//{
// SP: [
//  { nome: 'Ana', cidade: 'SP' },
//   { nome: 'Bruna', cidade: 'SP' }
// ],
// RJ: [
//   { nome: 'Lucas', cidade: 'RJ' }
// ],
// MG: [
//   { nome: 'Caio', cidade: 'MG' }
// ]
//}

//Usando reduce da para agrupa as pessoas por cidade em um objeto