const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    `<h1>Welcome to the homepage!</h1><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/house_1f3e0.png">`
  );
});

app.get('/dog', (req, res) => {
  res.send(
    `<h1>What does the dog says?</h1><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/dog-face_1f436.png"><p>Arf! Arf! Arf! Arf!</p>`
  );
});

app.get('/cat', (req, res) => {
  res.send(
    `<h1>What does the cat says?</h1><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cat-face_1f431.png"><p>Meow! Meow! Meow! Meow!</p>`
  );
});

app.use((req, res) => {
  res.status(404).send(`Ooops... Sorry, that page does not exist.`);
});

app.listen(port, () => {
  console.log(`Listening to ${port}...`);
});
