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
    let a = [];

for (let i = 0; i < n; i++) {
    const [i] = a[i];
    
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
    let maior= 0;
    for(item in n) {
        if(item>maior){
            maior= item;
        }
    }
    return maior;
}
export { dobro,somar,media,temperatura,tabuada,corprimaria,ingressoCinema,maiornumero }