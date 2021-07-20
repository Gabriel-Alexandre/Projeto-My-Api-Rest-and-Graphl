var express = require('express');
var router = express.Router();
var data = require("../corporacao.json")


router.get("/", function(req, res) {
    res.status(200).json(data)
    .catch((err) => {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err
        });
    });
    // console.log(data)
});

//Buscar por id
router.get("/:id", function(req, res) {
    //TODO:
   
});


//Buscar por id do Author
router.get("/autor/:idAutor", function(req, res) {
    //TODO:
   
});


module.exports = router;