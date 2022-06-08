//Estrutura condicional simples
//Igual duplo
const a = 10;
if (a == 10) {
    console.log('a é 10');
}

const b = '10';
if (b == 10){
    console.log('b é 10');
}

//Triplo igual - veriica o tipo
console.clear();
const c = 10;
if(c === 10) console.log('c é 10');

const d = '10';
if(d === 10){
    console.log('d é 10');
}
console.log('Estou fora do if que compara string');


//Estrutura condicional composta
console.clear();
const e = '10';
if (e === 10) console.log('e é um numeral 10');
else{
    console.log(`Resultado da consição: ${e === 10}`);
    console.log('e não é o numeral 10');
}


//Multiplas condições
console.clear();
const f = 4;
const g = 11;

if(f > 5 || g > 10){
    console.log(`Condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior que 10');
}else console.log('f não é maior do que 5 e g não é maior do 10');

if(f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do 10');
else{
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior do 10');
}


//Desvios encadeados
console.clear();
const num = 'ola';

if(num % 2 == 0 && !isNaN(num)) console.log('Número par!');
else if(num % 2 != 0 && !isNaN(num)) console.log ('Número Ímpar');
else console.log('Não é um número!');

//Operador ternário - exemplo 1
console.clear();
let resultado = 3 > 4 ? "Sim" : "Não";
console.log(resultado);

//Operador ternário - exemplo 2
console.clear();
let result = Math.PI < 4 ? console.log('sim') : console.log('Não');


//Switch
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';
console.clear();
switch (cor) {
    case 'vermelha':
        console.log('A cor é vermelha');
        break;
        case 'azul':
        console.log('A cor é azul');
        break;
        default:
            console.log('A cor não é vermelha ou azul');
            break;
}

//while
let contador = 1;

while (contador <=10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

//while com decremento
console.clear();
let cont = 10;

while(cont >= 0){
    console.log(`Valor = ${cont}`);
    cont--;
}

//do-while
console.clear();
let i = 0,
text = '';
do{
    text += `O número é ${i}\n`;
    i++;
}while (i < 10);
console.log(text);

//Laço