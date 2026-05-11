//onst lista = [4, 8, 12, 16];
//const r = lista.splice(1, 2);
//console.log(lista, r);


const lista = [4, 8, 12, 16];
const r = lista.slice(8, 16);
console.log(lista, r);

const copiaLista = [...lista];

console.log(copiaLista);



// Slice e Spread conseguem criar a copia que foi pedida.