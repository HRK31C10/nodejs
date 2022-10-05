import express from 'express'
import { Server } from 'http'


const server = express()

server.listen(3000)

server.get('/',(req,res) =>{
    res.send("Ao da roça!")
})

server.get('/login',(req,res) =>{
    res.send("Página de login")
})

server.get('/noticia/:politica',(req,res) =>{
    let politica: string = req.params.politica
    res.send("Noticias: "+politica)
})

server.get('/esportes/:futebol', (req,res) =>{
    let futebol: string = req.params.futebol
    res.send("Esportes: "+futebol)
})

server.get('/viagens/:origem-:destino',(req,res) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})










/*import filmes from './filmes'
import Filmes from './filmes'

console.log(filmes)

/*import Matematica from './matematica'
let n1: number = 10
let n2: number = 20
console.log("SOMA: "+Matematica.somar(n1,n2))
console.log("SUBTRAIR: "+Matematica.subtrair(n1,n2))
console.log("MULTIPLICAR: "+Matematica.multiplicar(n1,n2))

/*import validator from "validator"
let niver = '2004-07-01'
console.log(validator.isDate(niver))

/*console.log(validator.isIP(ip))

console.log(validator.isEmail("herickczr07@gmail.com"))

console.log ("Olá mundo!")*/



