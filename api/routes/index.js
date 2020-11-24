var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.send(' El backend está funcionando correctamente ');
})


module.exports = router;