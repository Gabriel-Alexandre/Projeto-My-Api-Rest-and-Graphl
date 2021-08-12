var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Listar Departamentos */
router.get("/", function (req, res, next) {
    knex.select().from("Departamentos")
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Departamentos por id */
router.get("/:id_departamento", function (req, res, next) {
    knex.select().from("Departamentos")
        .where({ id_departamento: req.params.id_departamento })
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Departamento por nome */
router.get("/departamento/:nome_departamento", function (req, res, next) {
    knex.select().from("Departamentos")
        .where({ nome_departamento: req.params.nome_departamento })
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Departamentos por sigla */
router.get("/sigla/:sigla_departamento", function (req, res, next) {
    knex.select().from("Departamentos")
        .where({ sigla_departamento: req.params.sigla_departamento })
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((e) => next(e));
});

/* POST: Inserir Departamento */
router.post("/", function (req, res, next) {
    knex.insert(req.body).from("Departamentos")
        .then((results) => {
          res.status(200).json({ resultados: results });
      }).catch((e) => next(e));
});

/* PUT: Atualizar Departamento*/
router.put("/:id_departamento", function (req, res, next) {
    knex("Departamentos")
        .where({ id_departamento: req.params.id_departamento })
        .update(req.body)
        .then((results) => {
            res.status(200).json({ Departamentos: results });
        })
        .catch((e) => next(e));
});

/* DELETE : Remove Departamento por id */
router.delete("/:id_departamento", function (req, res, next) {
    knex("Departamentos")
        .where({ id_departamento: req.params.id_departamento })
        .del()
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});

module.exports = router;
