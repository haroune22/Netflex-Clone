const router = require("express").Router();
const List = require("../models/List")
const verify = require('../Tokenverify')

//create
router.post("/",verify,async(req,res)=>{
    if (req.user.isAdmin) {
        const list = new List(req.body)
        try {
        const savedlist = await list.save()
        res.status(200).json(savedlist) 
        } catch (err) {
            res.status(400).json(err)
        }
    } else {
        res.status(400).json("You are not allowed!")
    }
})

//delete
router.delete("/:id",verify,async(req,res)=>{
    if (req.user.isAdmin) {
       try {
        await List.findByIdAndDelete(req.params.id)
        res.status(200).json('List deleted...')
       } catch (err) {
        res.status(400).json(err)
       }
    } else {
        res.status(400).json("You are not allowed!")
    }
})
//get
router.get('/',verify,async(req,res,next)=>{
    const typequery = req.query.type;
    const genrequery = req.query.genre;
    var list = [];
    try {
        if(typequery){
            if(genrequery){
                list= await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typequery,genre:genrequery}}
                ])
            }else{
                list = await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typequery}}
                ])
            }
        }else{
            list = await List.aggregate([{$sample:{size:10}}])
        }
     res.status(200).json(list)
    } catch {
        
        
    }
})

module.exports = router;