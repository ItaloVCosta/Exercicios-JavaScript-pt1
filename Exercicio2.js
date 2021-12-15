const tipoTriangulo= (x,y,z) => {
    if(x==y && y==z)
    {
        console.log("O triangulo eh equilatero");
    }   
    else if(x==y || x==z || y==z)
    {
        console.log("O triangulo eh isoceles");
    } 
    else
    {
        console.log("O triangulo eh escaleno");
    }
};

tipoTriangulo(1,1,1);
tipoTriangulo(1,2,2);
tipoTriangulo(3,1,2);