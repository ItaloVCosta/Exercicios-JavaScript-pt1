const fatorial = (num) => {
    let resposta=num;

    for(i=num-1; i>0; i--)
        resposta= i*resposta;
        return resposta
};

console.log(`O fatorial de ${7}= ${fatorial(7)}`)