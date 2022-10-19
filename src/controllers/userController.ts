import { Request, Response } from "express";

//USER
export const user = ((req:Request, res:Response) =>{

    res.render('user',{
        name:'Fulano',
        lastName:'Fulaninho',
        showWelcome:false
    })

})

//IDADE
export const idade = ((req:Request, res:Response) => {

    res.render('pages/idade')
})

//IDADE-RESULTADO
export const idadeResultado = ((req:Request, res:Response) => {

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.query.anoNascimento){
        let anoNascimento:number = parseInt(req.query.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear()

        idade= anoAtual - anoNascimento

        mostrarIdade = true
    }

    res.render('pages/idade',{
        mostrarIdade,
        idade
    })
})

//LOGIN
export const login = ((req:Request, res:Response) =>{

    res.render('pages/login')
})

//LOGIN-USUARIO
export const loginUsuario = ((req:Request, res:Response) => {

    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    res.render('pages/login',{
        email,
        senha
    })
})

//CONTATO
export const contato = ((req:Request, res:Response) => {

    res.send("PAGINA DE CONTATO")
})

//NOTICIA   
export const noticia = ((req:Request, res:Response) => {

    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

//VIAGENS
export const viagens = ((req:Request, res:Response) => {

    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})

//NOME
export const nome = ((req:Request, res:Response) => {

    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.endereco as string
    let informacoes: boolean = true

    res.render('pages/nome',{
        nome,
        idade,
        telefone,
        endereco,
        informacoes
    })
})

 