const express=require('express');
const Post=require('../models/post');
const User=require('../models/user');
const router=express.Router();

router.post('/',async (req,res)=>{
    try{
        const notes = await Post.getPost(req.body);
        console.log(posts);
        res.send(post);
    }catch(err){
        res.status(401).send({message: err.message});
    }
})

.put('/edit', async (req, res) => {
    try {
      let post = await Post.editPost(req.body);
      res.send({...post});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Post.deletePost(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .post('/create', async(req,res)=>{
    try {
      let Post = await Post.createPost(req.body);
      res.send({...Post})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

module.exports=router;