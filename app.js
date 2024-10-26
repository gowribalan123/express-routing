const  express = require('express')
const path=require('path')
const bookRouter=require('./routes/bookRoutes')
const app= express()

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/books',bookRouter)
app.get('/home',(req,res)=>{
 //   console.log(___dirname)
    res.sendFile(path.join(__dirname,"/index.html"))
})

app.listen(3000,()=>{
    console.log("Server started..")
})