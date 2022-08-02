const express = require('express');
const app = express();
const port = 3000;

app.get('/order', (req, res) => {
    res.send('Get /order');
});

app.post('/order', (req, res) => {
    res.send('Post /order');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
