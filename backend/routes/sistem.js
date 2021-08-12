var express = require('express');
var router = express.Router();

var departamentosRouter = require('./departamentos');
var corporacaoRouter = require('./corporacao');

router.use('/departamentos', departamentosRouter);
router.use('/corporacao', corporacaoRouter);

router.get("/", (req, res) => {
    return res.json({ message: "Bem Vindo ao Servidor do Sisenex." });
});


module.exports = router;