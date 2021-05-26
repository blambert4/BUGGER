const router = require('express').Router();
const path = require('path');
const controller = require('../controllers/controller');
// API routes
router
	.route('/find')
	.get(controller.getAll)

router
	.route('/insert')
	.post(controller.insert)

router
	.route('/edit/:id')
	.put(controller.edit)
	

router
	.route('/delete/:id')
	.delete(controller.delete)

// If no API routes are hit, send the React app
module.exports = router;
