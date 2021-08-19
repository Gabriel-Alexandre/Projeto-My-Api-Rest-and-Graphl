const { Model } = require("objection");

class Departamentos extends Model {
    static get tableName() {
        return "Departamentos";
    }

    static get idColumn() {
        return "id_departamento";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "id_departamento", 
                "nome_departamento", 
                "sigla_departamento", 
                "nfuncionarios_departamento",
                "id_corporacao"],
            properties: {
              id_departamento: {type: "integer"},
              nome_departamento: { type: "string" },
              sigla_departamento: { type: "string" },
              nfuncionarios_departamento: { type: "integer" },
              id_corporacao: {type:"integer"}
            },
        }
    }

    static get relationMappings() {
        const Corporacao = require("./model_corporacao");

        return {
            corporacao: {
                relation: Model.BelongsToOneRelation,
                modelClass: Corporacao,
                join: {
                    from: "Departamentos.id_corporacao",
                    to: "Corporacao.id_corporacao",
                },
            },
        };
    }
}

module.exports = Departamentos;
