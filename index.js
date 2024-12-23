// CAÇA BUGS - OBJETOS

//Acesse os objetos criados (pelo console do navegador) e teste seus métodos

class Carro {
    Modelo //string
    Valor //number
    Automatico //boolean

    constructor(modelo, valor, automatico) {
        modelo = Modelo
        valor = Valor
        automatico = Automatico
    }

    Ligar(chave) {
        if (chave) {
            console.log("O carro está ligado")
        } else {
            console.log("O carro precisa da chave para ligar")
        }

    }
}

class Vendedor {
    Nome //string
    CPF //string
    Carro //Carro

    Demonstrar() {
        Carro.Ligar()
    }
}

const carro = ("Gol", 15000, false)
const vendedor = ("João", "123456", carro)
