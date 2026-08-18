# Mini Messageboard

A small message board built with Express and EJS. Visitors can view messages, open an individual message, and submit new messages through a form.

## Features

- View all messages on the home page
- See the author, message, and date posted
- Open a page with an individual message's details
- Add a new message through a form
- Display a custom 404 page for unknown routes and invalid message IDs
- Responsive monochrome interface

## Built with

- Node.js
- Express
- EJS
- CSS
- PostgreSQL
- node-postgres (`pg`)
- express-validator

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sonhoang002/ExpressMiniMessageBoard.git
   cd ExpressMiniMessageBoard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a local PostgreSQL database.

4. Copy `.env.example` to `.env` and replace `DATABASE_URL` with your local
   PostgreSQL connection URL. Never commit `.env`.

5. Create and seed the database table:

   ```bash
   node database/populateddb.js "postgresql://username:password@localhost:5432/mini_messageboard"
   ```

6. Start the application:

   ```bash
   npm start
   ```

7. Visit [http://localhost:5000](http://localhost:5000) in your browser.

For development with automatic server restarts, run:

```bash
npm run dev
```

## Routes

| Method | Route           | Description                              |
| ------ | --------------- | ---------------------------------------- |
| GET    | `/`             | Display all messages                     |
| GET    | `/new`          | Display the new-message form             |
| POST   | `/new`          | Create a message and return home         |
| GET    | `/messages/:id` | Display the message at the requested ID  |

An invalid message ID or any unrecognized route returns a custom `404` page.

## Project structure

```text
ExpressMiniMessageBoard/
├── controller/
│   └── indexController.js
├── database/
│   ├── pool.js
│   ├── populateddb.js
│   └── queries.js
├── public/
│   └── styles.css
├── routes/
│   ├── indexRoute.js
│   ├── itemRoute.js
│   └── newMessageRoute.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   ├── messageDetail.ejs
│   └── 404.ejs
├── app.js
└── package.json
```

## Data storage

Messages are persisted in PostgreSQL. The application reads its connection URL
from the `DATABASE_URL` environment variable.

For production on Render, set `DATABASE_URL` on the Render web service to the
database's internal URL. Populate the production database once from your local
machine using the database's external URL:

```bash
node database/populateddb.js "postgresql://production-connection-url"
```

Connection URLs contain credentials. Never commit them or include them in
screenshots.

## License

This project is licensed under the ISC License.
