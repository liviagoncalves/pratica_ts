const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora"
}

pessoa.idade = 25;

const andre: {nome: string,
               idade: number,
               profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

enum Profissão {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissão
}

interface Estudante extends Pessoa{
    materias: string[]
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissão.Desenvolvedora
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissão.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissão.Desenvolvedora,
    materias: ['Matematica', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica', 'Programação']
}

function listar(lista: string[]) {
    for (const  item of lista) {
        console.log(' - ', item)
    }
}

listar(monica.materias);
