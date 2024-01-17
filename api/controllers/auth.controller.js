const User = require('../models/user.model.js')
const bcrypt = require('bcrypt');


const signUp =  async(req, res, next) => {
    const { username, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hash });
    try {
      await newUser.save();
      res.status(201).json("User created successfully");
    } catch (err) {
      next(err);
    }
  
}




module.exports ={
    signUp,
}