const baskara = (a,b,c) =>{
    let baskara = b**2 - 4*a*c;
    if(baskara>=0)
    {
        return [(-b-Math.sqrt(baskara))/(2*a),(-b+Math.sqrt(baskara))/(2*a)]
    }
    else
        return 'Delta eh negativo'
};

console.log(`Raizes da funcao :${baskara(2,5,3)}`);