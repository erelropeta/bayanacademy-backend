const port = 3000;
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

const users = [];

let currentUser = [];

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/sign-up', (req, res) => {
    res.render('sign-up.ejs');
});

app.post('/sign-up', (req, res) => {
    const { username, password } = req.body;
    let errorMessage = '';

    const userExist = users.find((user) => user.username === username);

    if (currentUser.length != 0) {
        res.redirect('/');
        return;
    }

    if (username == '') {
        errorMessage = 'Please enter a username.';
        res.render('sign-up', { errorMessage });
        return;
    }

    if (userExist) {
        errorMessage = 'Username already exist.';
        res.render('sign-up', { errorMessage });
        return;
    }

    if (!userExist && password === '') {
        errorMessage = 'Please enter a password.';
        res.render('sign-up', { errorMessage });
        return;
    }

    users.push({ id: uuidv4(), username, password });

    console.log(users);

    res.redirect('/log-in');
});

app.get('/log-in', (req, res) => {
    const { username, password } = req.body;

    const userExist = res.render('log-in.ejs');
});

app.post('/log-in', (req, res) => {
    const { username, password } = req.body;
    let errorMessage = '';

    const userExist = users.find((user) => user.username === username);

    if (currentUser.length != 0) {
        res.redirect('/');
        return;
    }

    if (username == '') {
        errorMessage = 'Please enter a username.';
        res.render('log-in', { errorMessage });
        return;
    }

    if (!userExist) {
        errorMessage = 'User does not exist.';
        res.render('log-in', { errorMessage });
        return;
    }

    if (userExist && userExist.password !== password) {
        errorMessage = 'Username and password do not match.';
        res.render('log-in', { errorMessage });
        return;
    }

    if (!userExist && password === '') {
        errorMessage = 'Please enter a password.';
        res.render('log-in', { errorMessage });
        return;
    }

    currentUser.push({ userExist });

    console.log(currentUser);

    res.redirect('/');
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});
