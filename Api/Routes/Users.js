const router = require("express").Router();
const User = require("../models/User")
const CryptoJs = require("crypto-js");
const verify = require("../Tokenverify");

//update
router.put("/:id",verify,async(req,res)=>{
    if(req.user.id === req.user.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_key).toString()
        }
try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    },{new:true})
    res.status(200).json(updatedUser)
} catch (err) {
    res.status(400).json(err)
}
    }else{
        res.status(403).json("You can update only your account")
    }
})
//delete
router.delete("/:id",verify,async(req,res)=>{
    if(req.user.id === req.user.id || req.user.isAdmin){
try {
await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted")
} catch (err) {
    res.status(400).json(err)
}
    }else{
        res.status(403).json("You can delete only your account")
    }
})

//get
router.get("/find/:id",async(req,res)=>{

try {
const user =await User.findById(req.params.id)
const {password,...others} = user._doc
    res.status(200).json(others)
} catch {
    
}
   
})
//get all
router.get("/",verify,async(req,res)=>{
    const query = req.query.new
    if( req.user.isAdmin){
try {
const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
    res.status(200).json(users)
} catch {
    
}
    }else{
        res.status(403).json("You are not allowed to see all users")
    }
})
//get user stats
router.get("/stats", async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
  
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch  {
      
    }
  });

module.exports = router;