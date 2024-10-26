const express=require('express')
const router =express.Router()
const books =require('../books')
//products

router.get('/',(req,res)=>{
  try{
    res.status(200).json(books)
  }catch(error){
    res.status(404).json({error:error.message})
  }
})

//get books by id
router.get('/:id',(req,res)=>{
//  res.send("Get all the books")

try{

  const bookID=parseInt(req.params.id)
  const book =books.find(b=>
      b.id===bookID
  )
  if(!book)
      res.status(404).json
  ({error:"Book not found"})
         res.status(200).json(book)
}catch(error){
  res.status(404).json({error:error.message})
}
})


module.exports=router