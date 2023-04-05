const path = require('path')


//想导出的时候用这种写法 别用箭头
function getMessages (req,res){
    // express直接传输图像
    res.sendFile(path.join(__dirname,"..",'public',"images",'s1.png'))
    // res.send('<ul><li>Hello lili</li></ul>')
}

function postMessages(req,res){
    console.log('updating...')
}

module.exports={
    getMessages,
    postMessages
}
