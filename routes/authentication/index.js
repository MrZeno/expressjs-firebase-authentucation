const express = require('express')
const router = express.Router()
const firebase = require('../../firebase')


router.use('/home', (req, res, next) => {
    firebase.auth().onAuthStateChanged((currentUser) => {
        if(currentUser != null){
            console.log('OK')
            res.render('./index')
        }
        res.render('./authentication/index')
    })
})

router.get('/', (req, res) => {
    res.render('./authentication/index')
})

router.get('/home', (req, res) => {
    res.render('./index')
})

router.post('/login', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then( () => {
            res.redirect('/home')
        })
        .catch( e => {
            console.log(e.message)
        })
})


module.exports = router