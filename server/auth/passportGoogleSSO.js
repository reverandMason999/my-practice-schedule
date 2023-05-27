const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy


const {User} = require('../database/models')

passport.use(new GoogleStrategy({
 clientID: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 callbackURL: process.env.REDIRECT_URI,
 passReqToCallback: true,
 scope: ['profile', 'email']
}, async (req, accessToken, refreshToken, profile, cb) => {

 const defaultUser = {
     username: `${profile.name.displayName}`,
     email: `${profile.emails[0].value}`,
     googleId: profile.id
 }

 const [user, created] = await User.findOrCreate({ where: {googleId: profile.id, email: profile.emails[0].value }, defaults: defaultUser }).catch((err) => {
  console.log("error signing up", err);
  cb(err, null);  
 });
 
 if(user) return cb(null, user)
}));

passport.serializeUser((user, cb) => {
 console.log('serializing user:', user);
 cb(null, user.id)
})

passport.deserializeUser(async (id, cb) => {
 const user = await User.findOne({ where: { id } }).catch((err) => {
     console.log('Error deserializing', err);
     cb(err, null)
 })

 console.log('Deserialized user', user)
 if(user) cb(null, user);
})