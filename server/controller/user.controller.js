const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
require('dotenv').config();

module.exports = {
    register: (req, res) => {
        User.create(req.body)
          .then(user => {
              const userToken = jwt.sign({
                  id: user._id
              }, process.env.FIRST_SECRET_KEY);
                 
              res
                  .cookie("usertoken", userToken, {
                      httpOnly: true
                  })
                  .json({ msg: "success!", user: user });
          })
          .catch(err => res.json(err));
      },

    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
     
        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }
     
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
     
        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }
     
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.FIRST_SECRET_KEY);
     
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!", id: user._id });
    },
    
    GetAllUsers : (req,res)=>{
        User.find({})
        .then ((allUser)=>{console.log(allUser)
        res.json(allUser)})
        .catch((err)=>{res.status(400).json({err})});
    },
    
    GetOneUser : (req,res)=>{
        User.findOne ({_id:req.params.id})
        .then ((User)=>{
            res.json(User)
        })
        .catch ((err)=>{res.status(400).json({err})})
    },
    updateUser: (req,res)=>{
        User.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true,
        })
        .then (updatedUser => res.json (updatedUser))
        .catch((err)=>{res.status(400).json({err})});
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
}
