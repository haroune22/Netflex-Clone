const router = require("express").Router();
const Movie = require("../models/Movie")

const verify = require("../Tokenverify");

//Create
router.post("/",verify,async(req,res)=>{
    if( req.user.isAdmin){
        const newMovie = new Movie(req.body)
        try {
            const savedMovie = await newMovie.save()
            res.status(200).json(savedMovie)
        } catch (err) {
            res.status(403).json(err)
        }
    }else{
        res.status(403).json("you are not allowed!")
    }
})

//Update
router.put("/:id",verify,async(req,res)=>{
    if( req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedMovie)
        } catch (err) {
            res.status(403).json(err)
        }
    }else{
        res.status(403).json("you are not allowed to update")
    }
})

//delete
router.delete("/:id",verify,async(req,res)=>{
    if( req.user.isAdmin){
        try {
     await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("Movie Deleted...")
        } catch (err) {
            res.status(403).json(err)
        }
    }else{
        res.status(403).json("you are not allowed to update")
    }
})
//get 
router.get("/find/:id",verify,async(req,res)=>{
        try {
    const movie= await Movie.findById(req.params.id)
            res.status(200).json(movie)
        } catch {}
    }
)

//get random 
router.get("/random",verify,async(req,res)=>{
    const type = req.query.type
    let movie;
    try {
        if(type==="series"){
movie = await Movie.aggregate([
    {$match:{isSeries:true}},
    {$sample: {size:1}},
])
        }else if(type==="movie"){
            movie = await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample: {size:1}},
            ])}
        else{
            movie = await Movie.aggregate([
                {$match:{isSeries:Boolean}},
                {$sample: {size:1}},
            ])}
        res.status(200).json(movie)
    } catch{}
}
)

//get all 
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch {
      
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });

module.exports = router;