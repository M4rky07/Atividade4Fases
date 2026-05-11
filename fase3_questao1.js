
const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;

console.log(nome, resto); // "Ana" { idade: 28, cidade: "SP" }

//a) "Ana" { idade: 28, cidade: "SP" }
//Porque o destructuring separa nome e o operador ...resto guarda as demais propriedades do objeto.