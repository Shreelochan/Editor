const express=require('express');
const router=express.Router();
const Articles=require('./article');

router.get('/Articles',(req,res,next)=>{
    Articles.find(function(err,Article){
        res.json(Article)
    })
})

router.post('/addArticle',(req,res,next)=>{
    let newArticle=new Articles({
        
        body:req.body.body
    });
    newArticle.save((err,Article)=>{
      if(err) {
          res.json({msg:'failed to add article'});
      }
      else{
      res.json({msg:'Articles added successfully'});
      }

    });

});

router.delete('/Articles/:id',(req,res,next)=>{
    Articles.remove({_id:req.params.id},(err,result)=>{
        if(err){
             res.json(err)
        }
        else{
        res.json(result)
        }
    })
})
module.exports=router;