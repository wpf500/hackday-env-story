var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/quiz', function(req, res, next) {
    res.send([{
        id: 0,
        choices: [{
            id: 1,
            text: 'First Choice'
        },{
            id: 2,
            text: 'Second Choice'
        }],
        headline: 'My First step',
        copy: '/my/template/path', // Resolve to template
        related: {} // ?
    },{
        id: 1,
        choices: [],
        headline: 'My second step',
        copy: '/my/template/path', // Resolve to template
        related: {} // ?
    },{
        id: 2,
        choices: [],
        headline: 'My third step',
        copy: '/my/template/path', // Resolve to template
        related: {} // ?
    }]);
});

module.exports = router;
