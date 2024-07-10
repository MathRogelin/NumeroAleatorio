const prompt = require("prompt-sync")()
// Início
console.log("Adivinhe o Número...")
console.log("Você tem 3 Tentativas")
// gerar número
const numero = Math.floor(Math.random() * 100)
// número de tentativas
let tentativas = 3
// Dicas
if (numero >= 50 && numero < 100) {
    console.log("Dica: entre 50 e 100")

}else if (numero >= 0 && numero < 50) {
    console.log("Dica: entre 0 e 50")

}
// Palpites
let palpite
// Fazer
do {
    // Digite o seu palpite
    palpite = Number(prompt("Digite o seu palpite: "))

    // Se você acerta
    if( palpite === numero){
        console.log("Parabéns, acertou!")
        console.log("Por Matheus Rögelin")
        break

    }else if(palpite != numero){
        // Se você errar
        console.log("Ops!")
        tentativas = tentativas - 1

        if (tentativas > 0) {
            console.log(`Você tem mais ${tentativas} tentativa(s)`)
        }
        
        // Mostrar as tentativas
        if(tentativas == 0){
            console.log("Perdesse")
            console.log(`O número era ${numero}`)
            console.log("Por Matheus Rögelin")
            break
        }
    }


} while (palpite != numero);