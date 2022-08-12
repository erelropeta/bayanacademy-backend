const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Client } = require('@googlemaps/google-maps-services-js');
const Listing = require('./models/listing');
const User = require('./models/user');
const CurrentUser = require('./models/currentUser');
const path = require('path');

let formatCurrency = new Intl.NumberFormat('ph-PH', {
    style: 'currency',
    currency: 'PHP',
});

mongoose
    .connect('mongodb://localhost:27017/airbnb')
    .then(() => {
        console.log('Connected!');
    })
    .catch((err) => {
        console.log('Error :/');
        console.log(err);
    });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const listings = await Listing.find();

    res.render('index.ejs', { currentUser, listings, formatCurrency });
});

app.get('/listings/:id', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const client = new Client({});

    const location = await client
        .geocode({
            params: {
                key: 'AIzaSyC3POnI-WthT6e1QlI7mU0LcMyeIzMYoxo',
                address: listing.name,
            },
        })
        .then((res) => {
            const location = res.data.results[0].geometry.location;
            return location;
        })
        .catch((err) => {
            console.log(err);
        });

    res.render('listing', { currentUser, id, listing, location });
});

app.post('/listings/:id', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const { id } = req.params;
    const { review } = req.body;
    const listing = await Listing.findById(id);

    listing.reviews.push({
        username: currentUser[0].username,
        review: review,
    });

    listing.save();

    res.redirect(req.get('referer') + '#reviews');
});

app.get('/sign-up', async (req, res) => {
    const currentUser = await CurrentUser.find({});

    if (currentUser.length > 0) {
        res.redirect('/');
        return;
    }

    res.render('sign-up.ejs', { currentUser });
});

app.post('/sign-up', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const { username, password } = req.body;
    let errorMessage = '';

    const userExist = await User.find({ username: username });

    if (username == '') {
        errorMessage = 'Please enter a username.';
        res.render('sign-up', { currentUser, errorMessage });
        return;
    }

    if (userExist.length > 0) {
        errorMessage = 'Username already exist.';
        res.render('sign-up', { currentUser, errorMessage });
        return;
    }

    if (userExist.length == 0 && password === '') {
        errorMessage = 'Please enter a password.';
        res.render('sign-up', { currentUser, errorMessage });
        return;
    }

    const newUser = new User({
        username: username,
        password: password,
        img: 'https://secure.gravatar.com/avatar/c6a86ca58399fc225413e4bb69c7d96b.jpg?d=mp&s=1200',
    });

    await newUser.save();

    res.redirect('/log-in');
});

app.get('/log-in', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const referrer = req.get('referrer');

    if (currentUser.length > 0) {
        res.redirect('/');
        return;
    }

    res.render('log-in', { currentUser, referrer });
});

app.post('/log-in', async (req, res) => {
    const currentUser = await CurrentUser.find({});
    const { username, password } = req.body;
    const { referrer } = req.query;
    const userExist = await User.find({ username: username });

    let errorMessage = '';

    if (currentUser.length > 0) {
        res.redirect('/');
        return;
    }

    if (username == '') {
        errorMessage = 'Please enter a username.';
        res.render('log-in', { currentUser, errorMessage });
        return;
    }

    if (userExist.length == 0) {
        errorMessage = 'User does not exist.';
        res.render('log-in', { currentUser, errorMessage });
        return;
    }

    if (userExist.length > 0 && password === '') {
        errorMessage = 'Please enter a password.';
        res.render('log-in', { currentUser, errorMessage });
        return;
    }

    if (userExist.length > 0 && userExist[0].password !== password) {
        errorMessage = 'Username and password do not match.';
        res.render('log-in', { currentUser, errorMessage });
        return;
    }

    const newCurrentUser = new CurrentUser({
        id: userExist[0].id,
        username: userExist[0].username,
        img: userExist[0].img,
    });

    await newCurrentUser.save();

    if (referrer) {
        res.redirect(referrer);
        return;
    }

    res.redirect('/');
});

app.get('/logout', async (req, res) => {
    await CurrentUser.deleteMany({});

    res.redirect(req.get('referer'));
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});
