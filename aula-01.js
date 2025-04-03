let valor = 13.141416;
let text = 'meu primeiro projeto em JavaScript';
let ativo = true;

console.log(valor.toFixed(2)); //Arredonda o valor para duas casas decimais
console.log("tipo:" + typeof valor); // Retorna o tipo da variável
console.log(text.toLocaleUpperCase()); //Converte o texto para maiúsculas
console.log("tipo:" + typeof text); //Retorna o tipo da variável
console.log(ativo.toString()); //converte para texto
console.log("tipo:" + typeof ativo); //Retorna o tipo da variável

let estados = ["São Paulo", "Minas Gerais", "Rondônia","Acre"];
let marcasCarros = [];
marcasCarros.push("Toyota");
console.log(estados[2]);
console.log("Tamanho:"+ estados.length);//Concatenação
console.log(marcasCarros[0]);
console.log("total letras:"+ marcasCarros[0].length);
console.log('Estados: ${estados[1]');//interpolção

let usuario;//variável não definida
console.log(usuario);
//console.log(usúario.length);//TypeError: Cannot read properties of undefined (reading 'length')

let idade = 0;
console.log(idade +1);// naN - Not a number

let nula = null;
//console.log(nulla.lenght);
console.log(nula+1);

const aula = "JavaScript"; // Definindo uma constante
console.log(aula)
