const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const productRouter = require('./Routes/Product')
const userRouter = require('./Routes/User')

const app = express()

require('dotenv').config()



ConnectDB()


app.use(express.json())

app.use('/api/Authentication',userRouter)

app.use('/api/UsersList',userRouter)

app.use('/api/Products',productRouter)


app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))