"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora"
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
var Profissão;
(function (Profissão) {
    Profissão[Profissão["Professora"] = 0] = "Professora";
    Profissão[Profissão["Atriz"] = 1] = "Atriz";
    Profissão[Profissão["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissão[Profissão["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissão || (Profissão = {}));
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissão.Desenvolvedora
};
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissão.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissão.Desenvolvedora,
    materias: ['Matematica', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' - ', item);
    }
}
listar(monica.materias);
