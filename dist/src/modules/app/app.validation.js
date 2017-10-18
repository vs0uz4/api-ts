"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./../../template/crud/validation");
class AppValidation extends validation_1.CrudValidation {
    constructor() {
        super();
    }
    put(dados) {
        this.errorClean();
        this.forIsEmpty(dados, ['nome']);
        return this.response();
    }
    post(dados) {
        this.errorClean();
        return this.response();
    }
}
exports.AppValidation = AppValidation;
