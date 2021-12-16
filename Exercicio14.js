const mercado = (fruta) =>
{
        switch (fruta)
        {
            case 'maca':
                return 'Nao vendemos esta fruta aqui'
                break;
            case 'kiwi':
                return 'Estamos com escassez de kiwis'
                break;
            case 'melancia':
                return 'Aqui esta, sao 3 reais o quilo'
                break;
            default:
                return "erro"
                break;
        }
    };

console.log(mercado('melancia'));