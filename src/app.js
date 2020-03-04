var path = require('path');
import admin from './../router/admin'
import role from './../router/role'
import right from './../router/right'
import banner from './../router/banner'
import article from './../router/article'
import tag from './../router/tag'
import user from './../router/user'
import comment from './../router/comment'
const express = require('express')
const app = express();
const mongoose  = require('mongoose')
import config from "./config"
import dbs from "./dbs"
import "babel-polyfill";
const passport = require("passport");       //引入passport插件



// 3.引入路由

// 连接数据库
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect(dbs.data_url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
},(err,res)=>{
    if (err){
        console.log("连接数据库失败");
    } else{
        console.log("连接数据库成功");
    }
})

// 1.配置公共资源访问；路径

app.use(express.static(config.publicPath))



// 4.挂载路由


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({limit:"2100000kb"}))


app.use(passport.initialize());     //passport初始化
require("./passport")(passport);

app.use('/api/admin',admin)
app.use('/api/role',role)
app.use('/api/right',right)
app.use('/api/banner',banner)
app.use('/api/article',article)
app.use('/api/tag',tag)
app.use('/api/user',user)
app.use('/api/comment',comment)
// app.use((req,res)=>{
//     res.render('404.html')
// })

// app.get('/',(req,res)=>{
//     console.log(config.publicPath);
//     console.log(path.join(config.publicPath, './dist', 'index.html'));
//     res.sendFile(path.join(config.publicPath, './dist/index.html'))
// })
app.use(express.static(path.join(config.publicPath, 'dist')))
app.set("views",path.join(config.publicPath, 'dist'))
console.log(path.join(config.publicPath, 'dist'));


app.get('/*', function  (req, res, next) {
    // console.log('list all user');
    res.sendFile(path.join(config.publicPath, './dist/index.html'))
})
app.listen(5000,'0.0.0.0',()=>{
    console.log("服务器已经启动");
})
