const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const db = require('./models')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded(true))

app.get('/', (req, res) => {
    res.render('index')
})

// displays profile page for current user
app.post('/profile', (req, res) => {
    let currentUser = req.body.username

    res.render('profile', { username: currentUser })
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

// displays current user location from db
app.get('/location', (req, res) => {
    let currentUser = req.query.user
    
    db.user.findAll({
        where: {
            username: currentUser
        }
    }).then((response) => {
        let zipcode = response[0].dataValues.zipcode
        res.render('location', { zipcode: zipcode })
    })
})

app.post('/logout', (req, res) => {
    currentUser = ""
})



app.listen(3000)