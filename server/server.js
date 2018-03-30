require('dotenv').config();
const express       = require('express')
    , session       = require('express-session')
    , bodyParser    = require('body-parser')
    , massive       = require('massive')
    //, passport      = require('passport')
    //, Auth0Strategy = require('passport-auth0')
    , cors          = require('cors')
    , auth          = require('./auth')

/* Set Port */
const PORT = process.env.PORT || 3011;
/* Create express app */
const app = express();
/* Middleware */
// static
app.use(express.static(`${__dirname}/../build`));
// cors
app.use(cors());
// body-parser
app.use(bodyParser.json());
// session config
app.use(session({                 // Step one
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// massive
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  console.log('Massive initialized')
});

auth(app);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
