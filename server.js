const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()

//gets data from contact form through sendEmail 
const sendEmail = require('./sendEmail')

//const importData = require('./data.json')

let PORT = process.env.port || 4000

//middleware - we are able to get income data from form to /sendemail route due to urlencoded
app.use(express.urlencoded({extended: false}))

//app.set('components', path.join(__dirname, 'components'))

//sets view engine to 'components' to js
//app.set('view engine', 'ejs')
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Hi, I'm Taley!  Welcome to the Techy Taley Rest API Portfolio.  Go to http://localhost:4000/api to see data.")
}) 

// app.get("/api", (req, res) => { 
//     res.send(importData)
// })


//app.post sends data to /api/sendmail and also gets data from  api/sendmail route 
//saves results from req.body, 
//use destructuring to get data from req.body, save in output variable, sendEmail(to, from, subject)
app.post("/api/sendemail", (req, res) => { 
    console.log('Body', req.body)
    res.json({
        msg: 'We received your data!!!'
    })

})


app.listen(PORT, () => console.log(`Server up and running on http://localhost:{PORT}`) )
//app.listen(4000, () => console.log('Listening on http://localhost:4000') )