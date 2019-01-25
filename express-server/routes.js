const router = require('express').Router();
const controller = require('./controllers.js')

router 
    .route('/todoList')
    .get(controller.fetch)
    .post(controller.post)
    .delete(controller.delete)


module.exports = router; 