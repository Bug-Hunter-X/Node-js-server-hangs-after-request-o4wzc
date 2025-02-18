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

//Test with curl command: curl http://localhost:3000