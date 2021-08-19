var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();
const Corporacao = require("../objectORM/queries/querie_corporacao");

/* GET: Listar Corporações */
router.get("/", function (req, res, next) {
    Corporacao.getCorporacoes()
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Corporação por id */
router.get("/:id_corporacao", function (req, res, next) {
    Corporacao.getCorporacao(req.params.id_corporacao)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Corporação por nome */
router.get("/nome/:nome_corporacao", function (req, res, next) {
    Corporacao.getCorporacaoByNome(req.params.nome_corporacao)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Corporação por sede */
router.get("/sede/:sede_corporacao", function (req, res, next) {
    Corporacao.getCorporacaoBySede(req.params.sede_corporacao)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* POST: Inserir Corporação */
router.post("/", function (req, res, next) {
    data = req.body;
    Corporacao.postCorporacao(data)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* PUT: Atualizar Corporação*/
router.put("/:id_corporacao", function (req, res, next) {
    data = req.body;
    Corporacao.putCorporacao(req.params.id_corporacao, data)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* DELETE : Remove Corporação por id */
router.delete("/:id_corporacao", function (req, res, next) {
    Corporacao.deleteCorporacao(req.params.id_corporacao)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

// Tive problema com o delete e com o post:

// Delete: Acredito que tem haver como a referência do id_corporacao a tabela departamentos.
// Post: Não sei.

module.exports = router;