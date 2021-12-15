const sistemaEscola = (nota) => {
    let proximoMultiplo = Math.floor(nota/5)*5 +5;
    let notaArredondada;
    if(nota>=38)
    {
        if((proximoMultiplo-nota)<3)
        {
            nota=proximoMultiplo
        }
    }
    console.log(`Sua nota eh de ${nota}, portanto voce foi ${nota<40? "Reprovado":"Aprovado"}`);
};
sistemaEscola(46);