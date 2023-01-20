var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
    const year = new Date().getFullYear()
    console.log(year)
    res.json({ year: year.toString() })
})

module.exports = router;


// test 5git