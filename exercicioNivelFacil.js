//01. Crie uma função que receba uma string como
//parâmetro e retorne a mesma string com todas as letras
//em caixa alta. declaração de função
import rl from 'readline-sync';
let frase = rl.question('informe o texto para ser convertido: ');
console.log(Maiusculas(frase));

function Maiusculas(texto){
    texto = texto.toUpperCase();
    return texto.toUpperCase();
    
}
