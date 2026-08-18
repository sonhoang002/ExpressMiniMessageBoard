#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, added)
VALUES
  ('Amando', 'Hi there', NOW()),
  ('Charles', 'Hello World', NOW());
`;

async function main() {
  const connectionString = process.argv[2];

  if (!connectionString) {
    throw new Error(
      "Please provide a database URL: node database/populateddb.js <database-url>",
    );
  }

  const client = new Client({ connectionString });

  try {
    console.log("Connecting to database...");
    await client.connect();

    console.log("Creating and populating messages table...");
    await client.query(SQL);

    console.log("Database populated successfully.");
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
