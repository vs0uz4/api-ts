import { Model } from './../../template/simple/model'

export class ScriptModel extends Model {
  constructor() {
    const fields = {
      nome: {type: String, required: true},
      pronto: {type: Boolean, required: true, default: true},
      result: {
        type: {type: String, required: true},
        json: {type: Object, required: true} 
      }
    }
    const indexes = { nome: 1 }
    super({ name: 'Script', fields, indexes })
  }

  findNome (nome, cb) {
    this.findOne({ nome }, ['pronto', 'result'], cb)
  }

}