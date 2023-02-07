const router = require("express").Router();
const controller = require("../controllers/chatroomController");

const auth = require("../auth");

router.get("/", auth, controller.getAllChatrooms);
router.post("/", auth, controller.createChatroom);

module.exports = router;
