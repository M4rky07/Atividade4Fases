const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom);


// c) 100 200
// Porque 'opcoes' também foi copiado com spread, criando um novo objeto independente.

