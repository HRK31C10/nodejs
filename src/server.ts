import express,{Request, Response} from 'express'
import mainRoutes from './routes/index'
import path from 'path'
//importando o mustache para usar o HTML
import mustache from 'mustache-express'

//USANDO EXPRESS
const server = express()
//configurando o mustache
server.set('view engine','mustache')
//criando uma rota para a pasta public
server.use(express.static(path.join(__dirname,'../public')))
//criando a rota para a pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

//HABILITANDO O POST
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)
//criando a página não encontrada
server.use( (req:Request, res:Response) =>{
    res.status(404).send("Página não encontrada")
})
server.listen(4000)







