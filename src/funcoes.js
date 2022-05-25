function dobro(numero){
    return numero * 2;
}

function somar(numero1,numero2){
    return numero1 + numero2;
}

function media(n1,n2,n3){
    return (n1+n2+n3)/3;
}
function temperatura(temp){
    let a = false;
    
    if (temp > 38) {
        a = true;
    } 
    else if (temp < 37) {
        a = false;
    }
    return a;
}
function tabuada(n){
    let a = [n];

for (let i = 0; i <= 10; i++) {
    a[i] = [i] * n;
    
}
return a;
}

function corprimaria(cor){
     let a = cor === 'vermelho' || cor === 'azul' || cor === 'amarelo';
     return a;
}

function ingressoCinema(qtdinteira,qtdMeia,dia,pais){
    let total = 0;

    if(pais == 'brasileiro'){
        total = (qtdMeia + qtdinteira) * 5;
    
    }
    else{
        if(dia=='quarta'){
            total = (qtdMeia + qtdinteira) * (28.5/2);
        }
        else{
             total = (qtdinteira * 28.5)+(qtdMeia*28.5/2);
        }
    }
    return total;
}

function maiornumero(n){
    let maior= Number.MIN_VALUE;
    for(item in n) {
        if(item>maior){
            maior= item;
        }
    }
    return maior;
}

function Caracter(texto, Caracter){
    let quant=0;
    for(let letra of palavra){
        if(letra == Caracter)
            quant++;
    }
    return quant;
}
export { dobro,somar,media,temperatura,tabuada,corprimaria,ingressoCinema,maiornumero,Caracter }