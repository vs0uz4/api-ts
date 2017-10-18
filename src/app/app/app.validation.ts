import { CrudValidation, CrudValidationInterface } from './../../template/crud/validation'

export class AppValidation extends CrudValidation implements CrudValidationInterface {
  constructor() {
    super()
  }

  put(dados) {
    this.errorClean()
    this.forIsEmpty(dados, ['nome'])

    return this.response()
  }

  post(dados) {
    this.errorClean()

    return this.response()
  }

}