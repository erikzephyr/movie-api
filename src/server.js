/**
 * EXTERNAL
 */
const app = require('./config/express');
var express    = require('express');
const _ = require('lodash');

/**
 * LOCAL
 */
const { port, env } = require('./config/vars');
var Movie = require('./api/models/movie.model');


let users = [{id: "1", name: "Name 1"}, {id: "2", name: "Name 2"}]

/*
* ROUTES FOR OUR API
*/
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/movies/:name').post(function(req, res) {
  var movie = new Movie(_.random(0,100), req.params.name);
  res.json({
    message: 'Movie created!',
    movie: {
      id: movie.id,
      name: movie.name
    }
  });

});
app.use('/api', router);
app.listen(port, () => console.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;