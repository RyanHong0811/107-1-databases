const { con } = require('./lib/db');
const { router, app } = require('./lib/server');

router.get('/', function(req, res, next) {
  con.query('SELECT * FROM product', function(err, rows) {
    res.render('ejs', { title: 'Express', data: rows });
  });
});