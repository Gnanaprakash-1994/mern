const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')

//to handle json format:
app.use(express.json())
app.use(cors())

//Middleware:
app.use((req,res,next)=>{
    console.log('path ' + req.path + ' method ' + req.method)
    next()
})


// app.get('/',(req,res) => {
//     res.send('Hello World')
// })

// MONGO DB Connection 
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('DB Connected successfully and Listening at PORT '+ process.env.PORT);  
        })
    }).catch(err => console.log(err) )

// base router creation snd configuring

app.use('/api/tasks',taskRoutes)


