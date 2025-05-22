//01
let ape = {
    quartos: 2,
    tipo: 'ape',
    endereco: 'Avenida Principal, 456-centro',
    andar:7,

}
console.log(ape);
console.log('${ape.tipo com ${ape.quartos}quartos, localizado no ${ape.andar}º andar $ {ape.endereco');

//02
let prodEmb = {
    nome: 'laptop HP',
    categoria: 'eletrônicos',
    peso:1.5,
    preco:3500.00,

}
console.log(`O produto${prodEmb.nome}, da categoria ${prodEmb.categoria}, pesando ${prodEmb.peso}, Está a venda por R$${prodEmb.preco.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}.`)

//03
class imovel {
    constructor(quartos,tipo,endereco){
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }
}

let casa = new imovel();
//casa.quartos = 3;
//casa.tipo = 'sobrando';
//casa.endereco = 'rua kettly linda, nº0605';
//console.log(casa);
//console.log(`'tipo do imovel: ${casa.tipo} \nquartos: ${casa.quartos} \nendereco: ${casa.endereco}`)

console.log(casa.exibirinformacoes());

let apt = new imovel(2,'Apartamento', 'Rua Amélia nº 1010, bairro centro');
console.log(apt.exibirinformacoes());

//04
//04
class Veiculo {
    constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    exibirDetalhes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
    }
    const carro = new Veiculo("Toyota", "Corolla", 2022);
    const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);
    console.log("Carro:");
    console.log(carro.exibirDetalhes());
    
    console.log("\nMotocicleta:");
    console.log(motocicleta.exibirDetalhes());
    import entraadados from 'readline-sync';
    
    console.log()
    let nome =entraadados.question('Informe seu nome: ');
    console.log(`ola ${nome}, seja bem vindo`);


console.log();
let nome = EntradaDados.question("informe seu nome:");
console.log(`Olá ${nome}, seja bem-vinde!`);








