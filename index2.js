// 之前上网用的http/https模块 现在用的是express模块
const express = require('express')
const app = express()
const PORT = 3000

const friends = [
    {
        id:0,
        name:"a"
    },
    {
        id:1,
        name:'b'
    },
    {
        id:2,
        name:"c"
    }
]

// 加上中间层了
// next指向的是下面一层的use 就是靠位置确定的use层数
// app.use(middleware1);next指下方
// app.use(middleware2);next指下方
// app.use(middleware3);next指下方
app.use((req,res,next)=>{

    const number = Date.now();
    // console.log(`${req.method},  ${req.url}`)
    // console.log(req)
    next()
    //
    const dalta = Date.now()-number
    //First, it will execute const number = Date.now(); to get the current timestamp.
    //Next, it will call next() function to pass control to the next middleware function or route handler in the stack.
    //Once the next middleware function or route handler completes its processing, the control will be returned to this middleware function.
    //At this point, the code following the next() function call, which calculates the delta variable and logs it to the console, will be executed.
    //So, the console.log(dalta) statement will be executed after the next middleware function or route handler completes its processing.
    console.log(dalta)
})
app.use(express.json())
// So, the next() function is implicitly called by express.json() after it has completed its processing.

// json的格式问题
// But if you were to add a trailing comma after the last item
// in either of these examples, it would result in a syntax error
// when trying to parse the JSON string.
// {
//     "nadfsf":"sfdsdfsf", 结尾不能加上,
// }

app.post('/friends',(req,res)=>{
    if(!req.body.name){
        // 这里要用return 自动结束错位
        return res.status(400).json({
            error:'missing name'

        })
        //     While it is possible to use the write() method instead of the json() method
        //     to send a plain text error message to the client, it is generally recommended
        //     to use json() instead

    }
    const newFriend = {
        name:req.body.name,//app.use(express.json())要这样才能拿到body
        id:friends.length
    }
    friends.push(newFriend)
    res.json(newFriend)
})

// 这个是最后层
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/friends',(req,res)=>{
    res.json(friends)
    // The res.json() method takes an object or an array and sends it to the client
    // as a JSON-formatted response. In this case, the friends array is being sent to
    // the client as a JSON response.
})
// :friendId 这种写法可以动态的让req 拿到friendId 用这个req.params.friendId
app.get('/friends/:friendId',(req,res)=>{
    const friendId = Number(req.params.friendId)
    // 当不是数字就是NaN和undefined 直接走else了
    console.log(friendId)
    const friend = friends[friendId]
    console.log(friend)
    if(friend){
        res.status(200).json(friend);
    }else {
        // res.sendStatus(404)
        res.status(404).json({
            error:"Friend doesn't exit"
        })
    }
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