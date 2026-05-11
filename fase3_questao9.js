const usuario = {
 nome: "Carlos",
 habilidades: ["JS", "Python", "SQL"]
};
const { habilidades: [h1, , h3] } = usuario;
console.log(h1, h3);

// a) "JS" "SQL"
// Porque o destructuring pega o primeiro e o terceiro elemento do array 'habilidades'


