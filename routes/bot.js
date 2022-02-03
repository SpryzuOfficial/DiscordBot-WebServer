const {Router} = require('express');
const { sendToBot } = require('../controllers/bot');

const router = Router();

router.post('/', sendToBot);

module.exports = router;