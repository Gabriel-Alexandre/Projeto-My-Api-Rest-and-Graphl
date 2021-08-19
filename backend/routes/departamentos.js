var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();
const Departamentos = require("../objectORM/queries/querie_departamentos");

/* GET: Listar Departamentos */
router.get("/", function (req, res, next) {
    Departamentos.getDepartamentos()
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Departamentos por id */
router.get("/:id_departamento", function (req, res, next) {
    Departamentos.getDepartamento(req.params.id_departamento)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Departamento por nome */
router.get("/nome/:nome_departamento", function (req, res, next) {
    Departamentos.getDepartamentoByNome(req.params.nome_departamento)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Departamentos por sigla */
router.get("/sigla/:sigla_departamento", function (req, res, next) {
    Departamentos.getDepartamentoBySigla(req.params.sigla_departamento)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* GET: Buscar Departamentos por corporacao */
router.get("/corp/:id_corporacao", function (req, res, next) {
    Departamentos.getDepartamentoByCorporacao(req.params.id_corporacao)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* POST: Inserir Departamento */
router.post("/", function (req, res, next) {
    data = req.body;
    Departamentos.postDepartamento(data)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* PUT: Atualizar Departamento*/
router.put("/:id_departamento", function (req, res, next) {
    data = req.body;
    Departamentos.putDepartamento(req.params.id_departamento, data)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

/* DELETE : Remove Departamento por id */
router.delete("/:id_departamento", function (req, res, next) {
    Departamentos.deleteDepartamento(req.params.id_departamento)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((error) => {
            res.status(417).json({ title: "error", status: error.errno, message: error });
        });
});

// Tive problema com o post:

// Post: Não sei.

module.exports = router;
