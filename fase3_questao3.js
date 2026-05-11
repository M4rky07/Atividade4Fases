const pessoa = { nome: "Lucas", endereco: { cidade: "RJ", cep: "12345" } };
const { endereco: { cidade } } = pessoa;
console.log(cidade);

// a) "RJ"
// Porque o destructuring acessa diretamente a propriedade 'cidade' dentro de 'endereco'

