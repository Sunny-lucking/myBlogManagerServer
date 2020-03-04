import User from "../model/users";

const express = require("express");
const router = express.Router();

router.get('/getCount',async (req,res)=>{
    let count  = await User.find({}).estimatedDocumentCount()

    return res.json({
        msg:'获取用户数成功',
        code:0,
        count
    })
})


module.exports = router;
