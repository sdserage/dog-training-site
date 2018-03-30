require('dotenv').config();
const passport =  require('passport')
    , url =       process.env.REACT_APP_URL || process.env.URL
    , strategy =  require('./strategy');

module.exports = function auth(app){
  passport.use(strategy(app));

  passport.serializeUser((id, done)=>{
    done(null, id); // EDIT THIS?
  });

  passport.deserializeUser((id, done)=>{
    app.get('db').users.get_user_by_user_id([id])
      .then(user=>{
        return done(null, user[0]);
      });
  });

  app.use(passport.initialize());  // Step two

  app.use(passport.session());      // Step three

  app.get('/auth', passport.authenticate('auth0'));

  app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: url + process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.URL + process.env.FAILURE_REDIRECT
  }));

  app.get('/auth/me', (req, res) => {
      if (!req.user) {
          return res.status(200).send(false)
      }
      return res.status(200).send(req.user);
  });

  app.get('/auth/logout', (req, res) => {
      req.logOut();
      res.redirect(302, url + process.env.LOGOUT_REDIRECT)
  });
}
