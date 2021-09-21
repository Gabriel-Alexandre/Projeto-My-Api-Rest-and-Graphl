const { gql } = require("apollo-server");

const Departamentos = require('../objectORM/queries/querie_departamentos');
const Corporacao = require("../objectORM/queries/querie_corporacao");

const corporacaoTypeDef = gql`
 extend type Query {
    corporacao(id_corporacao: Int!): Corporacao
    corporacoes: [Corporacao!]
    corporacaoByNome(nome_corporacao: String!): [Corporacao!]
    corporacaoBySede(sede_corporacao: String!): [Corporacao!]
  }

  type Corporacao {
    id_corporacao: Int!
    nome_corporacao: String!
    sede_corporacao: String!
    nfuncionarios_corporacao: Int!
    ativos_corporacao: String!
    departamentos: [Departamento!]
  }
`;

const corporacaoResolver = {
    Query: {
        corporacao: (obj,  input , context, info) => {
            return Corporacao.getCorporacao(input);
        },
        corporacoes: (obj, input , context, info) => {
            return Corporacao.getCorporacoes();
        },
        corporacaoByNome: (obj,  input , context, info) => {
            return Corporacao.getCorporacaoByNome(input);
        },
        corporacaoBySede: (obj,  input , context, info) => {
            return Corporacao.getCorporacaoBySede(input);
        }
      },
    Corporacao: {
        departamentos: (id_corporacao) => {
          return Departamentos.getDepartamentoByCorporacao(id_corporacao);
        }
    }
};

module.exports = {
    corporacaoTypeDef,
    corporacaoResolver
};

