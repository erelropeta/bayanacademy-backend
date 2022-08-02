const express = require('express');
const app = express();
const redditData = require('./data.json');
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render('home', { title });
});

app.get('/about', (req, res) => {
    const title = 'About';
    res.render('about', { title });
});

app.get('/contact', (req, res) => {
    const title = 'Contact';
    res.render('contact', { title });
});

app.get('/rand', (req, res) => {
    const title = 'Random';
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', { title, randomNum });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    const title = `r/${data.name}`;
    res.render('subreddit', { title, ...data });
});

app.get('/cats', (req, res) => {
    const title = 'Cats';
    const cats = ['Muning', 'Chi-chi', 'Garfield', 'Puti', 'Pampu'];
    res.render('cats', { title, cats });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
