const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_3jg27jhq:6o6ar6nvffe9lj7hj3baoedh21@ds135444.mlab.com:35444/heroku_3jg27jhq', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);

const bodyParser = require( 'body-parser' );
app.use ( bodyParser.urlencoded ({ extended : false }));
app.use ( bodyParser.json ());
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)
