import Comment from "../model/comment";

const express = require("express");
const router = express.Router();

router.get('/getCount',async (req,res)=>{
    let comment  = await Comment.find({})

    let count = 0;
    count += comment.length
    comment.forEach(item=>{
        count += item.discuss.subDiscuss.length
    })

    return res.json({
        msg:'获取用户数成功',
        code:0,
        count,
    })
})


module.exports = router;
