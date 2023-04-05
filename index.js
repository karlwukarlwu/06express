// 之前上网用的http/https模块 现在用的是express模块
const express = require('express')
const app = express()
const PORT = 3000

//这里配置网络路径
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/messages',(req,res)=>{
    res.send('<ul><li>Hello lili</li></ul>')
})
app.get('/messagess',(req,res)=>{
    res.send({
        id:1,
        name:"liulu"
    })
})
app.post('/messages',(req,res)=>{
    console.log('updating...')
})

// 这块是开始连接上网
app.listen(PORT,()=>{
    console.log(`on this ${PORT} port`)
})