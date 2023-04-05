const express =require ('express');
const friendsController = require("../controllers/friends.control");
const friendsRouter = express.Router();
// console.log(friendsRouter)

//当我们分割了router以后 我们甚至可以给不同的链接自定义中间层
friendsRouter.use((req,res,next)=>{
    console.log(req.ip)
    // 一定要挂next 不然请求就是hanging
    next()
})
friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)

friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter