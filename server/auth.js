require('dotenv').config();
const passport = require('passport')
    , url = process.env.REACT_APP_URL || process.env.URL
    , strategy = require('./strategy');

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

// return done(null, profile)
//   //console.log(profile);
//   //return done(null, profile); // will need to be edited
//   const db = app.get('db'); // Sets the db to a variable
//   //console.log('Profile object:\n\n',profile); // Uncomment to test profile object
//   db.find_user_by_authid([profile._json.user_id])
//     .then(user=>{
//       if(user[0]){
//         return done(null, user[0].userid);
//       }else{
//         const user = profile._json; // Sets the profile json object to a variable
//         db.create_user([
//           user.name,
//           user.email,
//           user.user_id
//         ]).then(user=>{
//           return done(null, user[0].userid);
//         });
//       }
//     })
//   .catch(err=> console.log('There was a problem:\n\n', err));
// }
















//
//
// require('dotenv').config();
// const passport = require('passport')
//     , Auth0Strategy = require('passport-auth0')
//     , url = process.env.REACT_APP_URL || process.env.URL
//     , strategy = new Auth0Strategy({ // Set strategy
//         domain: process.env.AUTH_DOMAIN,
//         clientID: process.env.AUTH_CLIENT_ID,
//         clientSecret: process.env.AUTH_CLIENT_SECRET,
//         callbackURL: process.env.CALLBACK_URL
//       },
//       function(accessToken, refreshToken, extraParams, profile, done){
//         const db = app.get('db');
//         db.users.get_user_by_auth_id([profile._json.user_id])
//
//           .then(user=>{
//             if(user[0]){
//               return done(null, user[0].user_id);
//             }else{
//               const { name, email, auth_id: user_id } = profile._json;
//               db.users.create_user([name, email, auth_id]).then(user=>{
//                 return done(null, user[0].user_id)
//               });
//             }
//           })
//
//           .catch(err=> console.log(`There was a problem:
//
//             ${err}`
//           ));
//       });
//
// module.exports = function auth(app){
//   passport.use(strategy);
//
//   passport.serializeUser((id, done)=>{
//     done(null, id); // EDIT THIS?
//   });
//
//   passport.deserializeUser((id, done)=>{
//     app.get('db').users.get_user_by_user_id([id])
//       .then(user=>{
//         return done(null, user[0]);
//       });
//   });
//
//   app.use(passport.initialize());  // Step two
//
//   app.use(passport.session());      // Step three
//
//   app.get('/auth', passport.authenticate('auth0'));
//
//   app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: url + process.env.SUCCESS_REDIRECT,
//     failureRedirect: process.env.URL + process.env.FAILURE_REDIRECT
//   }));
//
//   app.get('/auth/me', (req, res) => {
//       if (!req.user) {
//           return res.status(200).send(false)
//       }
//       return res.status(200).send(req.user);
//   });
//
//   app.get('/auth/logout', (req, res) => {
//       req.logOut();
//       res.redirect(302, url + process.env.LOGOUT_REDIRECT)
//   });
// }
