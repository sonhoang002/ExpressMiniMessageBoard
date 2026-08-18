const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return rows;
}

async function getTableCount() {
  const { rows } = await pool.query("SELECT COUNT(*) FROM messages");
  return rows[0].count;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function pushMessage(username, message, date) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
    [username, message, date],
  );
}

module.exports = { getMessages, pushMessage, getMessage, getTableCount };
