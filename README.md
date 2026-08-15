# Mini Messageboard

A small message board built with Express and EJS. Visitors can view messages, open an individual message, and submit new messages through a form.

## Features

- View all messages on the home page
- See the author, message, and date posted
- Open a page with an individual message's details
- Add a new message through a form
- Responsive monochrome interface

## Built with

- Node.js
- Express
- EJS
- CSS

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

3. Start the application:

   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

For development with automatic server restarts, run:

```bash
npm run dev
```

## Routes

| Method | Route  | Description                         |
| ------ | ------ | ----------------------------------- |
| GET    | `/`    | Display all messages                |
| GET    | `/new` | Display the new-message form        |
| POST   | `/new` | Create a message and return home    |
| GET    | `/:id` | Display an individual message       |

## Project structure

```text
ExpressMiniMessageBoard/
├── public/
│   └── styles.css
├── routes/
│   ├── indexRoute.js
│   ├── itemRoute.js
│   └── newMessageRoute.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   └── messageDetail.ejs
├── app.js
└── package.json
```

## Data storage

Messages are currently stored in an in-memory array. New messages remain available while the server is running, but they are cleared whenever the server restarts. A database can be added later for permanent storage.

## License

This project is licensed under the ISC License.
