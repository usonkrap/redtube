import passport from 'passport';
import routes from '../routes';
import User from '../models/User';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });

export const postJoin = async (req, res, next) => {
  // bodyparser
  // console.log(req.body);
  const {
    body: {
      name, email, password, password2,
    },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    // Register User
    console.log(name, email);
    try {
      const user = await User({
        //  IMPORTANT: Not User.create()
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' });
export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  // To do: Process logout
  res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'userDetail' });
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'editProfile' });
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'changePassword' });
