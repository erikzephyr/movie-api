const { port, env } = require('./config/vars');
const app = require('./config/express');

let users = [{id: "1", name: "Name 1"}, {id: "2", name: "Name 2"}]

app.listen(port, () => console.info(`server started on port ${port} (${env})`));

app.get('/users/all', (req, res) => {
  res.send(users);
});
/**
* Exports express
* @public
*/
module.exports = app;