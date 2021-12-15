const paraReal = (x)=>{
    console.log(`O valor em real eh: R$${x.toFixed(2).toString().replace(".",",")}`)
};

paraReal(0.1+0.2);