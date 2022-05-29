
import nextConnect from "next-connect";
import passport from '../../Lib/passport-google-auth'
export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );