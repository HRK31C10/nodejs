import {Router, Request, Response} from "express"
const router = Router()


router.get('/',(req: Request,res: Response) =>{
    res.render('home')
})

router.get('/login',(req: Request,res: Response) =>{
    res.render('login')
})

router.get('/noticia/:politica',(req: Request,res: Response) =>{
    let politica: string = req.params.politica
    res.send("Noticias: "+politica)
})

router.get('/esportes/:futebol', (req: Request,res: Response) =>{
    let futebol: string = req.params.futebol
    res.send("Esportes: "+futebol)
})

router.get('/viagens/:origem-:destino',(req: Request,res: Response) =>{
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

export default router