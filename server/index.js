require ("dotenv").config()
const express = require("express")
const {mongoose} = require("mongoose")
const cors = require("cors")
const app = express()
const PORT = 8000

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected"))
.catch((error) => console.log("Database not connected", error))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/", require('./routes/authRoutes'))

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))