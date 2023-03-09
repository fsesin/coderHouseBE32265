import passport from 'passport'
import { userModel } from '../persistencia/models/users.model.js'
import { Strategy as LocalStrategy } from 'passport-local'
import { hashPassword } from '../utils.js'

passport.use(
  'registro',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await userModel.findOne({email})
      if (user) {
        return done(null, false)
      }
      const hashNewPassword = await hashPassword(password)
      const newUser = { ...req.body, password: hashNewPassword }
      const newuserBD = await userModel.create(newUser)
      done(null, newuserBD)
    }
  )
)

passport.serializeUser((user, done) => {
    console.log(user);
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id)
  done(null, user)
})
