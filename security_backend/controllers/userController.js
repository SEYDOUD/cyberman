const User = require("../models/User")

exports.register = async(req,res)=>{
    
    const {username , password , telephone } = req.body
    console.log(req.body)

    const user = User.create({
        username:username,
        tel: telephone,
        password:password
    });

    console.log(user)

    res.status(200).send("user created")
}