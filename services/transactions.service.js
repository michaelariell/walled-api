const bcrypt = require("bcrypt");
const transactionRepository = require("../repositories/transactions.repository");
const { generateAccessToken } = require("../utils/auth.util");

const createTransaction = async (transactionData) => {
  let transaction = await transactionRepository.findTransactionByEmail(transactionData.email);

  if (transaction.rows.length > 0) {
    throw new Error("transaction already exist");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(transactionData.password, salt);
  const newTransaction = { ...transactionData, password: hashedPassword };

  transaction = await transactionRepository.createTransaction(newTransaction);
  return transaction;
};

// const login = async (userData) => {
//   let user = await userRepository.findUserByEmail(userData.email);

//   if (user.rows.length === 0) {
//     throw new Error(404);
//   }

//   const isPasswordMatched = await bcrypt.compare(
//     userData.password,
//     user.rows[0].password
//   );

//   if (!isPasswordMatched) {
//     throw new Error(401);
//   }

//   const token = generateAccessToken({ email: userData.email, id: user.rows[0].id });

//   return token;
// };

const getTransactionById = async (id) => {
  let transaction = await transactionRepositoryRepository.findTransactionById(id);
  if (!transaction) {
    throw new Error("transaction not found");
  }
  return transaction;
};

module.exports = { createTransaction, getTransactionById };