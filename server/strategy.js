require('dotenv').config();
const Auth0Strategy = require('passport-auth0')

module.exports = function strategy(app){
  return new Auth0Strategy({ // Set strategy
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    db.users.get_user_by_auth_id([profile._json.user_id])

      .then(user=>{
        if(user[0]){
          return done(null, user[0].user_id);
        }else{
          const { name, email, user_id: auth_id } = profile._json;
          db.users.create_user([name, email, auth_id]).then(user=>{
            return done(null, user[0].user_id)
          });
        }
      })

      .catch(err=> console.log(`There was a problem:

        ${err}`
      ));
  });
}
