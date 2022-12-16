// string
let nome: string = 'João'
console.log(nome)
// nome = 28

// numbrs 
let idade: number = 27
// idade = 'Ana'
idade = 27.5

console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos excplicítos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 20]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1270, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul = 2,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornarMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornarMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 1))
console.log(multiplicar(2.33, 1))

// tipo função

const teste = function (a: number, b: number): boolean {
    return false
}

let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    nome: 'Jennifer',
    idade: 19
}

console.log(usuario)

// Exercício

// Alias: Um apelido que dará em determinado tipo que pode usar em determinadas funções como padrão
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let pontoNormal = 'Ponto normal'

let foraDoHorario = 'Fora do horario'

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return pontoNormal
        } else {
            return foraDoHorario
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))


let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return pontoNormal
        } else {
            return foraDoHorario
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))

// Union Types: permite combinar um ou mais tipos de types.
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

// Checagem de tipos de forma manual
let valor = 30

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

// Never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const Contato1: Contato = {
    nome: 'Fulano',
    tel1: '5665353',
    tel2: null
}

console.log(Contato1.nome)
console.log(Contato1.tel1)
console.log(Contato1.tel2)

let podeSerNulo: null = null
// podeSerNulo = 12
console.log(podeSerNulo)
// podeSerNulo = 'abc' 
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Concorrentista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let concorrentista: Concorrentista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '5654236']
}

concorrentista.contaBancaria.depositar(3000)
console.log(concorrentista)