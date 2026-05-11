const config = { tema: "escuro", fonte: "Arial", tamanho: 14 };
const { tema: modo, ...opcoes } = config;
console.log(modo, opcoes.fonte);



// a) "escuro" "Arial"
// Porque 'tema' é renomeado para 'modo' e o restante fica em 'opcoes'

