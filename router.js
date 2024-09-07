router.get("/forgot-pass",  (req, res)=>{
    res.render("reset")
 })
 const express = require ("express");
const router = express.Router();
const sendEmail = require("./utils/sendEmail");
const {generateToken, isValidToken} = require ("./utils/tokenHandeler");
const flash = require("connect-flash");
// middleware fucntion to associate connect-flash on response
router.use((req,res,next)=>{
res.locals.message = req.flash();
next()
})
// password reset post route
router.post("/passport-reset", async (req,res)=>{
    const {email} = req.body;
    try{
let user = await Users.findOne({email});
if(user){
    const resetToken =  await generateToken(user._id);
    const link= `${req.protocol}://${req.get('host')}/password-reset-link?token=${resetToken}&id=${user._id}`;
 
// html for email
const html = `<b> Hi ${user.name}, </b>
<p> You requested to reset your password. </p>
<p> Please, click the link below to reset your password. </p>
<a href = "${link}"> Reset Password </a>
`
console.log(link);
const payload = {
    email,
    subject:"Password reset request",
    html
}
sendEmail(payload);
req.flash("success", "Check your email for the password reset link")
    res.redirect("/login")
}else{
    req.flash("error","We could not find any user, please check your email address again")
res.redirect("/forgot-pass")
}
    }catch(er){
        console.log(er);
        req.flash("error","Something went wrong, please try again later!")
        res.redirect("/forgot-pass")
    }
})