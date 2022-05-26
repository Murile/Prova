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
     cor = cor.toLowerCase();
     return cor === 'vermelho' || cor === 'azul' || cor === 'amarelo';
}

function ingressoCinema(qtdinteira,qtdMeia,diaSemana,nacionalidade){
if(nacionalidade.toLowerCase()==='brasileiro')
    return (qtdinteira+qtdMeia)*5;
else if(diaSemana.toLowerCase()==='quarta')
    return (qtdinteira+qtdMeia)*14.25;
else
    return (qtdinteira*28.5)+(qtdMeia*14.25);    
}

function maiornumero(numeros){
    let maior= Number.MIN_VALUE;
    for(let item of numeros) {
        if(item > maior)
            maior = item;
    }
    return maior;
}

function Caracter(texto, Caracter){
    let quant=0;
    for(let letra of texto){
        if(letra == Caracter)
            quant++;
    }
    return quant;
}
export { dobro,somar,media,temperatura,tabuada,corprimaria,ingressoCinema,maiornumero,Caracter }