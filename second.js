const fs =  require('fs')
const express=require('express')
const app = express()

const path = require('path')
const { response } = require('express')
const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))
app.listen(5000)

//the best way of doing this 
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
