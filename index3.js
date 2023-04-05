const friendsRouter = require('./routes/friends.router')
const messageRouter = require('./routes/messages.router')

const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine','hbs')
app.set("views",path.join(__dirname,"views"))


// app.use((req, res, next) => {
//
//     const number = Date.now();
//     console.log(`${req.method}, ${req.baseUrl}, ${req.url}`)
//     // console.log(req)
//     next()
//     const dalta = Date.now() - number
//     // console.log(dalta)
// })

// 这个是创建了一个文件夹 这样我们就可以访问静态网页了
// https://www.jianshu.com/p/1b38aaea3758
// app.use('/site',express.static('public'))
app.use('/site',express.static(path.join(__dirname,"public")))//优化相对路径
// http://localhost:3000/site/index.html 还可以自定义前面的/site

app.use(express.json())
app.get("/",(req,res)=>{
    // 这个view要在上面设置好 set(views,...)
    res.render('index',{
        // index 的路径要变成 site/images/s1.png 这个是之前的express.static静态设置好的
        title:"Friends",
        caption:"FiFiFri"
    })
})

app.get("/msg",(req,res)=>{
    // 这个view要在上面设置好 set(views,...)
    // 这个layout 也可以手动设置
    res.render('messages',{
        // index 的路径要变成 site/images/s1.png 这个是之前的express.static静态设置好的
        title:"Friends",
        friend:"FiFiFri"
    })
})

// app.get('/', (req, res) => {
//     res.send("hello")
// })

// 封装功能 mvc模式 model放数据 controller放功能 view是主界面

// 进一步封装网址 把网址直接放到routes文件夹里面去
//逻辑是先走index3 走到了use以后走 不同的网址跳到不同的routers
app.use('/friends',friendsRouter)
app.use('/messages',messageRouter)



app.listen(PORT, () => {
    console.log(`on this ${PORT} port`)
})