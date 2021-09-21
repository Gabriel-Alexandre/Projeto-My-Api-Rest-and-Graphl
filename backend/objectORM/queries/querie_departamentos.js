var Departamentos = require("../models/model_departamentos");

/* GET: Listar Departamentos */
exports.getDepartamentos = () => {
    return Departamentos.query()
};

/* GET: Buscar Departamento */
exports.getDepartamento = ({id_departamento}) => {
    return Departamentos.query()
        .findById( id_departamento )
};

/* GET: Buscar Departamentos por nome */
exports.getDepartamentoByNome = (nome_departamento) => {
    return Departamentos.query()
        .where( nome_departamento ) 
};

/* GET: Buscar Departamentos por sigla */
exports.getDepartamentoBySigla = (sigla_departamento) => {
    return Departamentos.query()
        .where( sigla_departamento )
};

/* GET: Buscar Departamentos por corporacao */
exports.getDepartamentoByCorporacao = ({id_corporacao}) => {
    return Departamentos.query()
        .findByIds( id_corporacao )
};

/* POST: Inserir */
exports.postDepartamento = (data) => {
  return Departamentos.query()
      .insertAndFetch(data)
};

/* PUT: Atualizar */
exports.putDepartamento = (id_departamento, data) => {
  return Departamentos.query()
      .patchAndFetchById(id_departamento, data)
};

/* DELETE: Remover */
exports.deleteDepartamento = (id_departamento) => {
  return Departamentos.query()
    .deleteById(id_departamento)
};
