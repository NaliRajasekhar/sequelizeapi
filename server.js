// const express = require('express')
// const cors = require('cors')


// const app = express()

// var corsOptions = {
//     origin:'https://localhost:8081'
// }

// // middleware
// app.use(cors(corsOptions))

// app.use(express.json())

// app.use(express.urlencoded({ extended: true }))

// //testing api
// app.get('/', (req,res) => {
//     res.json({message: 'hello from api'})
// })

// // routers
// //var router = require("express").Router();
// //const router = require('./routes/productRouter.js')

// require("./routes/productRouter.js")(app);
// //app.use('/api/products', router)

// //sync table and schema
// const db = require("./models");
// db.sequelize.sync({force:true})
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// //static Images Folder

// app.use('/Images', express.static('./Images'))


// //port

// const PORT = process.env.PORT || 8080

// //server

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`)
// })


const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  

app.use('/Images', express.static('./Images'))

//port
require("./routes/productRouter")(app);


const PORT = process.env.PORT || 8081

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})