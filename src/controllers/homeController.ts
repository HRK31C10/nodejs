import { Request, Response } from "express";

export const home = ((req:Request, res:Response) => {

    let user:string = 'Viviane'

    res.render('pages/home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})