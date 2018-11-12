const { port, env } = require('./config/vars');
var express    = require('express');        // call express
const app = require('./config/express');

let users = [{id: "1", name: "Name 1"}, {id: "2", name: "Name 2"}]

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



app.use('/api', router);


app.listen(port, () => console.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;