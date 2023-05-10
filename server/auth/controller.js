const user=require('./user')
const bcrypt=require('bcrypt')

const signUp= async(req, res)=>{
    if(
        req.body.email.length <=0 &&
        req.body.full_name.length <=0 &&
        req.body.password.length <=0 &&
        req.body.re_password.length <=0
    ){
        res.redirect('/register?error=1')
    } else if ( req.body.password.length!==req.body.re_password.length){
        res.redirect('/register?error=2')
    }
    const findUser =await  user.findOne({email: req.body.email}).count()
    if (findUser){
        res.redirect('/register?error=3')
    }
    bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                new user({
                email:req.body.email,
                full_name: req.body.full_name,
                password:hash
            }).save()
            res.redirect('/login')
            })
        })
    
}

const signIn= (req, res)=>{
    res.redirect('/profile')
}

module.exports={signUp, signIn}