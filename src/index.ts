import { Router } from 'express'
import { Script } from './app/script/script'
import { AppCtrl } from './app/app/app.controller'
import { IndexCtrl } from './app/index.controller'
import { SessaoCtrl } from './app/sessao/sessao.controller'
import { UsuarioCtrl } from './app/usuario/usuario.controller'
import { TarefaCtrl } from './app/tarefa/tarefa.controller'

//Roda os Scripts
new Script()

//Rotas principais da API
const routes = [
  { src: '/', ctrl: new IndexCtrl().route },
  { src: '/usuario', ctrl: new UsuarioCtrl().route },
  { src: '/app', ctrl: new AppCtrl().route },
  { src: '/sessao', ctrl: new SessaoCtrl().route },
  { src: '/tarefa', ctrl: new TarefaCtrl().route }
]

//Constroe rotas
const rt = Router()
routes.forEach(el => {
  rt.use(el.src, el.ctrl)
})
export default rt