const Post=require("../models/Post");



exports.createPost=async(req,res)=>{


try{


const post =
await Post.create({

...req.body,

user:req.user

});


res.json(post);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





exports.getPosts=async(req,res)=>{


try{


const posts =
await Post.find({
user:req.user
});


res.json(posts);


}
catch(error){

res.status(500).json({
message:error.message
});

}


};