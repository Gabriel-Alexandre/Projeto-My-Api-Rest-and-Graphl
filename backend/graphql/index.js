const { gql } = require("apollo-server");

const { departamentosTypeDef, departamentosResolver } = require("./departamentos.js");
const { corporacaoTypeDef, corporacaoResolver } = require("./corporacao.js");


const Query = gql`
  #caso eu precise criar novas queries não relacionadas a nenhum tipo
  type Query {
    _dummy:String   #é necessário pelo menos um
  }
  type Mutation {
    _dummy:String   #é necessário pelo menos um
  }
`;

const resolvers = [departamentosResolver, corporacaoResolver]
const typeDefs = [Query, departamentosTypeDef, corporacaoTypeDef]

module.exports = { typeDefs, resolvers };
