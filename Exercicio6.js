const jurosCompostos = (capitalInicial, taxadeJuros, tempoAplicacao) => {
    return capitalInicial +capitalInicial*(1+taxadeJuros/100)**tempoAplicacao
};

const jurosSimples = (capitalInicial, taxadeJuros, tempoAplicacao) => {
    return capitalInicial + capitalInicial * taxadeJuros/100 * tempoAplicacao
};

console.log(jurosCompostos(1000,10,5));
console.log(jurosSimples(1000,10,5));