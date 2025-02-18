const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello!');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//This solution is wrong, and it does not solve the problem described.  The problem is that the server does not handle requests correctly, because it is synchronous and does not use promises or callbacks.  The solution should use asynchronous operations to handle requests in a way that does not block the event loop.