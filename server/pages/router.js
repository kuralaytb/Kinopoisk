const express=require('express')
const router=express.Router();
const genres=require('../genres/genres')
const countries=require('../country/country')

router.get('/', async(req,res)=>{
    const allGenres= await genres.find()
    res.render('index', {genres: allGenres, user : req.user ? req.user : {}})
})
router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/profile',(req, res)=>{
    res.render('profile', {user: req.user ? req.user : {}})
})

router.get('/admin',(req, res)=>{
    res.render('adminProfile', {user: req.user ? req.user :{ }})
})

router.get('/new',async(req, res)=>{
    const allGenres= await genres.find()
    const allCountries= await countries.find()
    res.render('newFilm', {genres: allGenres, countries: allCountries, user : req.user ? req.user :{}})
})

router.get('/edit',async(req, res)=>{
    const allGenres= await genres.find()
    const allCountries= await countries.find()
    res.render('editFilm', {genres: allGenres, countries: allCountries, user: req.user ? req.user :{}})
})

module.exports = router