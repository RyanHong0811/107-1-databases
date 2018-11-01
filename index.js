const { con } = require('./lib/db');
const { router, app } = require('./lib/server');

router.get('/', function(req, res, next) {
  con.query('SELECT * FROM product', function(err, rows) {
    res.render('index', { title: 'Express', data: rows });
  });
});

router.route('/edit')
  .get(function(req, res) {
    con.query('SELECT * FROM product where id =' + req.query.id, function(err, rows) {
      res.render('edit', { title: 'Express', data: rows[0] });
    });
  })
  .post(function(req, res) {
    let data = [];
    data.push(req.body.name);
    data.push(req.body.price);
    data.push(req.body.id);
    con.query('UPDATE product SET name = ?, price = ? WHERE id = ?', data, function(err, results) {
      res.redirect('/')
    });
  })

router.route('/add')
  .get(function(req, res) {
    res.render('add', { title: 'Express' });
  })
  .post(function(req, res) {
    let data =[];
    data.push(req.body.name);
    data.push(req.body.price);
    con.query('INSERT INTO product (name, price) VALUES (?,?)', data, function(err, results) {
      res.redirect('/')
    });
  })

router.get('/delete', function(req, res) {
  let data = req.query.id;
  con.query('DELETE FROM product where id = ?', data, function(err, results) {
    res.redirect('/')
  });
})