import { Profile, Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

// logic to save your user or check if user exists in your record to proceed.
const saveUser = (user: Profile) => {
  return new Promise((resolve, reject) => {
    
    
    resolve("Successful");
  });
};

passport.use(
  new GoogleStrategy(
    {
      clientID: '263223984909-975jtaqv6f1la9av17u6mb0lco9beorh.apps.googleusercontent.com' as string,
      clientSecret: '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' as string,
      callbackURL: "/api/oauth2/redirect/google", // callback url on our app to verify authentication.
    },
    async (_accessToken, _refreshToken, profile, cb: any) => {
      try {
        console.log(profile);
        
        /* localStorage.setItem('sdf','sdafs') */
        
        await saveUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        throw new Error(e);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.deserializeUser(function (
  user: any,
  cb: (arg0: null, arg1: any) => any
) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

export default passport;