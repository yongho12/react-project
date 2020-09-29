const router = require('express').Router();

const routes = ['users', 'cases'];
//const routes = ["cases"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;

