var Corporacao = require("../models/model_corporacao");

/* GET: Listar Corporacoes */
exports.getCorporacoes = () => {
    return Corporacao.query()
};

/* GET: Buscar Corporacao */
exports.getCorporacao = (id_corporacao) => {
    return Corporacao.query()
        .where({ id_corporacao })
};

/* GET: Buscar Corporacao por nome */
exports.getCorporacaoByNome = (nome_corporacao) => {
    return Corporacao.query()
        .where({ nome_corporacao }) 
};

/* GET: Buscar Corporacao por sede */
exports.getCorporacaoBySede = (sede_corporacao) => {
    return Corporacao.query()
        .where({ sede_corporacao })
};

/* POST: Inserir */
exports.postCorporacao = (data) => {
  return Corporacao.query()
      .insertAndFetch(data)
};

/* PUT: Atualizar */
exports.putCorporacao = (id_corporacao, data) => {
  return Corporacao.query()
      .patchAndFetchById(id_corporacao, data)
};

/* DELETE: Remover */
exports.deleteCorporacao = (id_corporacao) => {
  return Corporacao.query()
    .deleteById(id_corporacao)
};
