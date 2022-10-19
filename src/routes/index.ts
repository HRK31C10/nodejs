import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/', homeController.home)

router.get('/user', userController.user)

router.get('/idade', userController.idade)
    
router.post('/idade-resultado', userController.idadeResultado)

router.get('/login', userController.login)

router.post('/login-usuario', userController.loginUsuario)

//ROTA ESTÁTICA
router.get('/contato', userController.contato)

//ROTA DINÂMICA
router.get('/noticia/:noticia', userController.noticia)

router.get('/viagens/:origem-:destino', userController.viagens)

router.get('/nome', userController.nome)

export default router