import Tag from "../model/tag";

const express = require("express");
const router = express.Router();
// router.post('/deleteArticle',async (req,res)=>{
//     let {_id}  = req.body
//     // console.log(_id, children);
//     let {deletedCount} = await Article.deleteOne({_id})
//     if (deletedCount===1){
//         return res.json({
//             msg:'删除文章成功',
//             code:0
//         })
//     } else{
//         return res.json({
//             msg:'删除文章失败',
//             code:-1
//         })
//     }
//
//
// })
// router.post('/editOneArticle',async(req,res)=>{
//     const {_id} = req.body;
//     const {title,content,summary,username,tag} = req.body;
//     console.log(title,content,summary,username,tag);
//     console.log(_id);
//     let {nModified} = await Article.updateOne({_id},{title,content,summary,username,tag})
//     if (nModified===1){
//         res.json({
//             msg:'修改成功',
//             code:0,
//         })
//     }else{
//         res.json({
//             msg:'修改失败',
//             code:-1
//         })
//     }
//
// })
router.get('/getAllTags',async (req,res)=>{

    let tags = await Tag.find({})
    if (tags.length>0){
        res.json({
            code:0,
            msg:'获取标签列表成功',
            tags,
        })
    } else {
        res.json({
            code:-1,
            msg:'获取标签列表失败',
        })
    }
})
// router.get('/getOneArticle',async (req,res)=>{
//     let {_id} = req.query
//     console.log(_id);
//
//     let article = await Article.findOne({_id})
//
//     if (article){
//         res.json({
//             code:0,
//             msg:'获取文章成功',
//             article:article,
//         })
//     } else {
//         res.json({
//             code:-1,
//             msg:'获取文章失败',
//         })
//     }
// })


module.exports = router;
