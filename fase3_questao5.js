function teste({ x = 10, y = 20 } = {}) {
 console.log(x + y);
}
teste({ x: 5 })

// b) 25
// Porque x recebe 5 e y usa o valor padrão 20