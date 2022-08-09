const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
// app.use(taskRouter)

app.get('/', (req,res) => {
    var data ={
        "Message":"Hello this is web service project for web software architecture class ;)"
    }
    res.status(200).send(data)
})


app.listen(port,() => {
    console.log("The app is running at port: ",port)
})  


