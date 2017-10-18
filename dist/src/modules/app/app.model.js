"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt-nodejs");
const model_1 = require("./../../template/simple/model");
class AppModel extends model_1.Model {
    constructor() {
        const fields = {
            key: { type: String, required: true },
            nome: { type: String, required: true }
        };
        const indexes = { nome: 1 };
        super({ name: 'App', fields, indexes });
    }
    //Update dados key
    hashKey(nome, cb) {
        bcrypt.hash(nome, null, null, (err, hash) => {
            if (err)
                return cb(err);
            return cb(null, hash);
        });
    }
    find(query, cb) {
        super.find({ nome: 1 }, query, { nome: 1 }, cb);
    }
    //Verifica se é unico
    uniqueValid(dados, cb) {
        const params = { nome: dados.nome };
        super.uniqueValid(dados, params, cb);
    }
    //Cria um novo app
    create(dados, cb) {
        this.hashKey(dados.nome, (err, hashKey) => {
            if (err)
                return cb(err);
            dados.key = hashKey;
            super.create(dados, cb);
        });
    }
    //Edita app
    update(_id, dados, cb) {
        if (dados.key) {
            dados.key = undefined;
            delete dados.key;
        }
        super.update(_id, dados, cb);
    }
    verificaApp(key, cb) {
        this.findOne({ key, ativo: true }, ['_id'], cb);
    }
}
exports.AppModel = AppModel;
