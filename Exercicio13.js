const diaUtil = (dia) =>
{
    if(dia>0 && dia<32)
    {
        switch (dia)
        {
            case 1:
            case 7:
            case 8:
            case 14:
            case 15:
            case 21:
            case 22:
            case 28:
            case 29:
                return "fim de semana"
                break;
            default:
                return "util"
                break;
        }
    }
    else
    {
        return "Invalido"
    }
    
};

console.log(`O dia inserido eh ${diaUtil('a')}`);