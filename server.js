require('babel-register');
const express = require('express');
const result = require('./render').default;
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>First rect app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app">
          ${result}
        </div>
      </body>
    </html>
  `);
});

app.listen(
  3005,
  () => console.log('Server 3005')
);