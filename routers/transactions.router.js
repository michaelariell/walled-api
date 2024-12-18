const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactions.controller");
const authenticateToken = require("../middlewares/auth.middlewares");

router.post("/auth/register", transactionController.createTransaction);
router.post("/auth/login", transactionController.login);
router.get("/profile", authenticateToken, transactionController.getTransactionById);

module.exports = router;