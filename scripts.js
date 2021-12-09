//1.for 

//apresentando uma frase
for (let i = 0; i < 5; i++) {
    console.log('Uma frase ou um objeto a ser repetido', i);
}

//apresentando numeros impares
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//apresentando numeros Pares
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 1) {
        console.log(i);
    }
}

//2.while loop 
//apresentando numeros impares
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

//do.. while 
//apresentando uma frase
let i = 0;

do {
    console.log('Digitando...', i);
    i++;
} while (i < 10)


//3. for-in 
const pessoa = {
    nome: 'Gabriel',
    idade: 20
};
for (let chave in pessoa) {
    console.log(chave, pessoa['nome'])
}


const cores = ['Vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//for-of
for (let cor of cores) {
    console.log(cor);
}