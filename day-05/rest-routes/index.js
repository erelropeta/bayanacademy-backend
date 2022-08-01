const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'user1',
        comment: 'How is your weekend?',
    },
    {
        username: 'user2',
        comment: 'Looking good...',
    },
    {
        username: 'user3',
        comment: 'OMG!!!',
    },
    {
        username: 'user4',
        comment: 'Was it the weather?',
    },
];

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
});

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
