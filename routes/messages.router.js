const express = require('express')
const messagesController = require("../controllers/messages.control");
const messagesRouter = express.Router()
messagesRouter.get('/', messagesController.getMessages)
// app.get('/messagess',(req,res)=>{
//     res.send({
//         id:1,
//         name:"liulu"
//     })
// })
messagesRouter.post('/', messagesController.postMessages)
module.exports = messagesRouter