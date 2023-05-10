const express=require('express')
const router=express.Router();
const passport=require('passport')
const {signUp, signIn}=require('./controller')

router.post('/api/signup', signUp)
router.post('/api/signin',passport.authenticate('local',{failureRedirect: '/login?error=1'}), signIn)

module.exports=router