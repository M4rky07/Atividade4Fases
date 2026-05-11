const obj = {
 id: 1,
 dados: {
 nome: "Ana",
 preferencias: {
 tema: "escuro",
 fonte: "Sans"
}
    }
};
const { dados: { preferencias: { tema }, ...resto } } = obj;
console.log(tema, resto);


// a) "escuro" { nome: "Ana" }
// Porque 'tema' é extraído de preferencias e o restante de 'dados' fica em 'resto'