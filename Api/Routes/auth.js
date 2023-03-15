const router = require("express").Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//register
router.post("/Register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.Secret_key
      ).toString(),
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//Login
router.post("/Login",async(req,res)=>{
    try {
        const user= await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json("Wrong Email")
        }
        const  bytes  = CryptoJS.AES.decrypt(user.password, process.env.Secret_key);
        const originalpassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalpassword !== req.body.password){
            return res.status(400).json("Wrong Password")   
        }
        const accessToken = jwt.sign({id: user._id, isAdmin:user.isAdmin},process.env.Secret_key,{expiresIn:"1D"})
        const {password, ...others}= user._doc;
        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports= router;