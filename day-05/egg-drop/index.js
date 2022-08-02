const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/order', (req, res) => {
    res.send('Get /order');
});

app.post('/order', (req, res) => {
    const { type, qty } = req.body;
    if (qty == 1) {
        res.send(`Here is your ${qty} ${type} egg drop. Thank you!`);
    } else if (qty > 1) {
        res.send(`Here are your ${qty} ${type} egg drop. Thank you!`);
    } else {
        res.send(`You didn't order an egg drop.`);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
