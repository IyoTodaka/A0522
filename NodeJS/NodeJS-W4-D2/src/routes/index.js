const router = require("express").Router();
const indexController = require('../controller')

router.get("/", indexController.getTodos);
router.get("/create", indexController.getCreateTodo);
router.post("/create", indexController.postTodo);

module.exports = router;
