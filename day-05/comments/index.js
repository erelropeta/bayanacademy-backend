const port = 3000;
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuidv4(),
        username: 'user1',
        comment: 'How is your weekend?',
    },
    {
        id: uuidv4(),
        username: 'user2',
        comment: 'Looking good...',
    },
    {
        id: uuidv4(),
        username: 'user3',
        comment: 'OMG!!!',
    },
    {
        id: uuidv4(),
        username: 'user4',
        comment: 'Was it the weather?',
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new', { uuidv4 });
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuidv4(), username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find((comment) => comment.id == id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find((comment) => comment.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { comment: newComment } = req.body;
    const editComment = comments.find((comment) => comment.id === id);
    editComment.comment = newComment;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter((comment) => comment.id !== id);
    res.redirect('/comments');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
