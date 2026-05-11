const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { ...obj1 };
obj2.b.x = 99;
console.log(obj1.b.x);

// b) 99
// Porque o spread faz uma cópia rasa e o objeto interno 'b' continua compartilhado

