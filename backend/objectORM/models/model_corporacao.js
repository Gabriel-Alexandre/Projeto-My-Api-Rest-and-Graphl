const { Model } = require("objection");

class Corporacao extends Model {
    static get tableName() {
        return "Corporacao";
    }

    static get idColumn() {
        return "id_corporacao";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "id_corporacao",
                "nome_corporacao",
                "sede_corporacao",
                "nfuncionarios_corporacao",
                "ativos_corporacao"],
            properties: {
                id_corporacao: { type: "integer" },
                nome_corporacao: { type: "string" },
                sede_corporacao: { type: "string" },
                nfuncionarios_corporacao: { type: "integer" },
                ativos_corporacao: { type: "string" },
            },
        };
    }

    static get relationMappings() {
        const Departamentos = require("./model_departamentos");

        return {
            departamentos: {
                relation: Model.HasManyRelation,
                modelClass: Departamentos,
                join: {
                    from: "Corporacao.id_corporacao",
                    to: "Departamentos.id_corporacao",
                },
            },
        };
    }
}

module.exports = Corporacao;
