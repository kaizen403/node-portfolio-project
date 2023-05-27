const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const session = require('express-session');
const path = require('path');
const Pusher = require('pusher')

// Middleware for session management
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'static')));

// Check if user is authenticated
function checkAuth(req, res, next) {
  if (!req.session.authenticated) {
    return res.redirect('/static/blog_login.html');
  }
  next();
}

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/static/blog.html');
  });
  
  // Route to Login Page
  app.get('/blog_login', (req, res) => {
    res.sendFile(__dirname + '/static/blog_login.html');
  });

app.post('/blog_login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if username and password are correct
  if (username === 'root' && password === 'root') {
    req.session.authenticated = true;
    res.redirect('blog.html');
  } else {
    res.send('Invalid credentials');
  }
});

const port = 3000;

app.listen(port, () => console.log(`This app is listening on port ${port}`));
