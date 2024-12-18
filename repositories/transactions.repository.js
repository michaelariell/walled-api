const pool = require("../db/db");

const findTransactionById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM transactions where id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

// const createTransaction = async (transaction) => {
//   const { date_time, type, from_to, description, amount } = transaction;

//   try {
//     const result = await pool.query(
//       "INSERT INTO users (email, username, fullname, password, avatar_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
//       [email, username, fullname, password, avatar_url]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.log(error);
//     throw new Error("Database error occurred while creating the user.");
//   }
// };

module.exports = { createTransaction, findTransactionById };
