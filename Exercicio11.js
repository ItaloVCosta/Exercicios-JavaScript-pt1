const bissexto = (ano) =>{
    if ((ano%4)==0 && (ano%100!=0))
    {
        return true
    }
    else if  ((ano%400)==0)
        return true
    else if (ano<0)
        return false
    else
        return false
} 
console.log(`O ano é bissexto ? ${bissexto(2400)}`)