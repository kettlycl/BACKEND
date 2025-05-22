import rl from 'readline-sync';

//atividade 01
//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente
let dia = rl.questionInt ('informe um valor entre 1 e 7:');

switch (dia) {
    case 1:
        console.log('domingo');
        break;
    case 2:
        console.log('segunda');
        break;
    case 3:
        console.log('terça');
        break;
    case 4:
        console.log('quarta');
        break;
    case 5:
        console.log('quinta');
        break;
    case 6:
        console.log('sexta');
        break;
    case 7:
        console.log('sábado');
        break;
    default:
        console.log('valor inválido');
        break;
}


//atividade03
let x = rl.questionFloat("Informe o primeiro valor:");
let y = rl.questionFloat("Informe o segundo valor:");
let op = rl.questionInt("Escolha uma opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão");
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 1:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 1:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 1:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("Opção inválida! ")
        break;
}


//atv02


let mes = rl.questionInt("informe um valor entre 1 e 12: ");

switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Inválido");
        break;
}

//atv04
let salario = rl.questionFloat("Informe o salário: ");
let cat = rl.question("Informe a categoria de bonificação: ").toUpperCase();
let bonus = 0

switch (cat) {
    case "A":
        bonus = salario * 0.05;
        console.log(`Novo salário ${(salario+bonus).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}.`);
        break;
    case "B":
        bonus = salario * 0.10;
        console.log(`Novo salário ${(salario+bonus).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}.`);
        break;
    case "C":
        bonus = salario * 0.15;
        console.log(`Novo salário ${(salario+bonus).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}.`);
        break;
    case "D":
        bonus = salario * 0.20;
        console.log(`Novo salário ${(salario+bonus).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}.`);
        break;
    default:
        console.log("inválido")
        break;
}

