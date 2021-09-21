const { gql } = require("apollo-server");

const Departamentos = require('../objectORM/queries/querie_departamentos');
const Corporacao = require("../objectORM/queries/querie_corporacao");


const departamentosTypeDef = gql`
 extend type Query {
    departamento(id_departamento: Int!): Departamento
    departamentos: [Departamento!]
    departamentoByNome(nome_departamento: String!): [Departamento!]
    departamentoBySigla(sigla_departamento: String!): [Departamento!]
  }

  type Departamento {
    id_departamento: Int!
    nome_departamento: String!
    sigla_departamento: String!
    nfuncionarios_departamento: Int!
    corporacao: Corporacao!
  }
`;

const departamentosResolver = {
    Query: {
        departamento: (obj,  input , context, info) => {
            return Departamentos.getDepartamento(input);
        },
        departamentos: (obj, input , context, info) => {
            return Departamentos.getDepartamentos();
        },
        departamentoByNome: (obj,  input , context, info) => {
            return Departamentos.getDepartamentoByNome(input);
        },
        departamentoBySigla: (obj,  input , context, info) => {
            return Departamentos.getDepartamentoBySigla(input);
        }
      },
    Departamento: {
        corporacao: (id_corporacao) => {
          return Corporacao.getCorporacao(id_corporacao);
        }
    }
};

module.exports = {
    departamentosTypeDef,
    departamentosResolver
};

