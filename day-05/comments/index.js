const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: 1,
        username: 'user1',
        comment: 'How is your weekend?',
    },
    {
        id: 2,
        username: 'user2',
        comment: 'Looking good...',
    },
    {
        id: 3,
        username: 'user3',
        comment: 'OMG!!!',
    },
    {
        id: 4,
        username: 'user4',
        comment: 'Was it the weather?',
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { id, username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find((comment) => comment.id == id);
    res.render('comments/show', { comment });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
