var express = require("express");
var knex = require("../knexinstance");
var router = express.Router();

/* GET: Listar Corporações */
router.get("/", function (req, res, next) {
    knex.select().from("Corporacao")
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Corporação por id */
router.get("/:id_corporacao", function (req, res, next) {
    knex.select().from("Corporacao")
        .where({ id_corporacao: req.params.id_corporacao })
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Corporação por nome */
router.get("/corporacao/:nome_corporacao", function (req, res, next) {
    knex.select().from("Corporacao")
        .where({ nome_corporacao: req.params.nome_corporacao })
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((e) => next(e));
});

/* GET: Buscar Corporação por sede */
router.get("/sede/:sede_corporacao", function (req, res, next) {
    knex.select().from("Corporacao")
        .where({ sede_corporacao: req.params.sede_corporacao })
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((e) => next(e));
});

/* POST: Inserir Corporação */
router.post("/", function (req, res, next) {
    knex.insert(req.body).from("Corporacao")
        .then((results) => {
          res.status(200).json({ resultados: results });
      }).catch((e) => next(e));
});

/* PUT: Atualizar Corporação*/
router.put("/:id_corporacao", function (req, res, next) {
    knex("Corporacao")
        .where({ id_corporacao: req.params.id_corporacao })
        .update(req.body)
        .then((results) => {
            res.status(200).json({ Corporacao: results });
        })
        .catch((e) => next(e));
});

/* DELETE : Remove Corporação por id */
router.delete("/:id_corporacao", function (req, res, next) {
    knex("Corporacao")
        .where({ id_corporacao: req.params.id_corporacao })
        .del()
        .then((results) => {
            res.status(200).json({ resultados: results });
        })
        .catch((e) => next(e));
});

module.exports = router;