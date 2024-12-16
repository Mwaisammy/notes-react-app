
import express from "express"
import { MONGOURI } from "./config/config.js"
import { mongoose } from "mongoose"
import cors from 'cors'

import noteRoutes from "./routes/noteRoutes.js"


const PORT = 5555 || PORT

const app = express()

//middleware to parse JSON 
app.use(express.json())
app.use(cors()) //should be before the noteRoutes

app.use('/api/notes', noteRoutes)






mongoose.connect(MONGOURI)
.then(() =>{
    console.log("App connected to DB");

    try {
        app.listen(PORT, () => {

            console.log(`App listening on port: ${PORT}`);
        
        })
        
    } catch (error) {
        console.log(error);
        
    }
})

