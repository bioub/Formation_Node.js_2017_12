const { Router } = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../controllers/contact');

const router = Router();

router.get('/', ctrl.list);
router.post('/',
  bodyParser.json(),
  ctrl.create,
);
router.get('/:id', ctrl.show);
router.delete('/:id', ctrl.delete);

module.exports = router;
