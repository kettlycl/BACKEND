//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
import rl, { questionInt } from "readline-sync"
//const { questionInt } = require("readline-sync");

//imprima a tabuada desse número usando um loop while.
//let num = questionInt(("Digite um número para ver a tabuada:"));
//let i = 1;
//while (i <= 10) {
  //console.log(`${num} x ${i} = ${num * i}`);
  //i++;}

//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
//alunos.
//O Programa deverá:
//Ler o número de alunos da turma;
//Ler as notas dos 4 bimestres de cada aluno;
//Calcular e imprimir a média do aluno;
//Calcular e imprimir a média da turma.
//let numAlunos = rl.questionInt("Informe o número de alunos: ");
//let somaMedias = 0;
//let contadorAluno = 1;

//while (contadorAluno <= numAlunos) {
    //console.log(`Aluno ${contadorAluno}:`);

  //let somaNotas = 0
  //let contadorBimestre = 1;

  //while (contadorBimestre <= 4) {
    //let nota = rl.questionInt(`Informe a nota do ${contadorBimestre}º bimestre parao Aluno ${contadorAluno}: `)
//somaNotas = somaNotas + nota;
//contadorBimestre++;
//}
//let mediaAluno = somaNotas/4;
//somaMedias = somaMedias + mediaAluno;

//console.log(`Média do Aluno ${contadorAluno}: ${mediaAluno.toFixed(2)}`);
//contadorAluno++;
//}

//let mediaGeralTurma = somaMedias / numAlunos;
//console.log(`Média geral da truma: ${mediaGeralTurma.toFixed(2)}`);

//03. a) Escreva um programa que simule um jogo de adivinhação
//onde o usuário deve adivinhar um número aleatório entre 1 e 100.
//O programa deve fornecer dicas sobre se o número digitado é
//maior ou menor que o número aleatório. O jogo deve continuar até
//que o usuário adivinhe corretamente
const numAleatorio = Math.floor(Math.random()*100)+1;

let tentativa

do{
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ")
    if (tentativa === numAleatorio){
        console.log("Parabens você adivinhou o número.");
    }else if(tentativa < numAleatorio){
        console.log("Tente um número maior.");
    }else{
        console.log("Tente um número menor.");
    }
}while (tentativa !== numAleatorio);

//04. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
//valor de imposto de renda a ser pago.
//Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
//Salário <= R$ 2.100,00 = isento
//Salário <= R$ 2.800,00 = 7,5%
//Salário <= R$ 3.750,00 = 15%
//Salário <= R$ 4.660,00 = 22.5%
//Salário > R$ 4.660,00 = 27.5%
for (let i = 1; i <=10; i++){
  let nome= rl.question(`Informe o nome da ${1}ª pessoa: `);
  let salario = rl.questionFloat(`Informe o salário de ${nome}: `);
  
  let ir = 0;
  if (salario <= 2100){
    ir = 0;
  } else if (salario <= 2800){
    ir = salario * 0.075;
  } else if (salario <= 3750){
    ir = salario * 0.15;
  } else if (salario <= 4600){
    ir = salario * 0.225;
  } else {
    ir = salario * 0.275;
  console.log(`\n--- Importo de Renda devido---`);
  console.log(`Nome: ${nome} \n Imposto de Renda: R$ ${ir.toFixed(2)}\n`);
  }
}

//05








