import { Router } from 'express';

const server = Router();
import { dobro,somar,media,temperatura,tabuada,corprimaria,ingressoCinema,maiornumero,Caracter } from './funcoes.js'

server.get('/dobro/:numero', (req, resp) => {
    
    try {
        let numero = Number(req.params.numero);
       const x = dobro(numero);
        
       resp.send({
        dobro : x
        });

    }

    catch(err) {
        resp.status(404).send ({
            erro: err.message
        })
    }

})

server.get ('/somar', (req, resp) => {

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    const x = somar(a,b);

    resp.send({
        soma : x
    })
    
} )

server.post ('/somar', (req, resp) => {
    
    try{ 
    let a = req.body.a;
    let b = req.body.b;
    const x = somar(a,b);

    resp.send ({
        soma : x
    })
    }

    catch(err) {
        resp.status(404).send ({
            erro: err.message
        })
    }

})


server.post ('/media', (req, resp) => {
   
    try {
    const { a, b, c } =req.body;
    const x = media(a,b,c);

    resp.send({
        media : x
    })
    }

    catch(err) {
        resp.status(404).send ({
            erro: err.message
        })
    }

})

server.get('/tabuada', (req,resp) => {
    const a = Number(req.query.a);
    const x =tabuada(a)

    resp.send({
        tabuada : x
    }) 
}) 

server.get('/temperatura', (req,resp) => {
    const  a  =Number(req.query.a) ;
    const x = temperatura(a)
    
    resp.send({
        temperatura : x 
    })    

})
server.get('/dia2/corprimaria/:cor',(req,resp) =>{
    const { cor } = req.params;
    const x = corprimaria(cor);
    
    resp.send({
        corprimaria: x
    })
})

server.post('/dia2/ingressocinema',(req,resp) =>{
    const { qtdInteira,qtdMeia,diaSemana, nacionalidade } = req.body;
 
    const total = ingressoCinema(qtdInteira,qtdMeia,diaSemana, nacionalidade);

    resp.send({
        total : total 
    })
})

server.get('/dia2/freqcaracter/:texto/:caracter',(req,resp) =>{
    const { texto,caracter } = req.params;
    const x = Caracter(texto,caracter);

    resp.send({
        freqcaracter : x
    })
})

server.post('/dia2/maiornumero',(req,resp) => {
    const  numero  = req.body;
    const maior = maiornumero(numero);

    resp.send({
        maior: maior
    })
})

export default server;