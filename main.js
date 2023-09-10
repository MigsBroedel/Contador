// definir variaveis do html no js
const botaoMais = document.querySelector(".plus")
const botaoMenos = document.querySelector(".minus")
const botaoReset = document.querySelector(".reset")

const display = document.querySelector(".display")

// definir o contador
let index = 0

// funçao= se clicar no botao some 1 ao index e print o index no display
botaoMais.addEventListener("click", function() {
  index = index + 1;
  display.textContent = index;
})

botaoMenos.addEventListener("click", function() {
  index = index - 1;
  display.textContent = index;
})

botaoReset.addEventListener("click", function() {
  index = 0;
  display.textContent = index;
})


