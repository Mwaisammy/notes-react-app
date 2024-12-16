import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { Note } from "../models/noteModels.js"






const router = express.Router()

const app = express();

app.use(cors())


router.get("/", async(req ,res) => {
    try {
  
      
      const notes = await Note.find({}).sort({ createdAt: -1});
  
  
      return res.status(200).json( 
          {
              count: notes.length,
              data: notes
          }
      )
  
      
    } catch (error) {
  
      console.log(error.message);
      res.status(500).send({ message: "Could not fetch notes"})
      
    }
  })
  router.post("/" , async(req, res) => {
      try {
  
          const { title,  content } = req.body
  
          if( !title || !content){
  
              return res.status(400).send({
                  message: "Invalid fields: title , content"
              })
          }
  
  
          const newNote = {
              title, content
          }
  
          const note = await Note.create(newNote)
  
          return res.status(200).send(note)
  
  
          // return res.status(200).send({
          //     message: "Note was created successfully"
          // })
  
          
      } catch (error) {
  
          console.log(error);
          
      }
  })
  
  
  router.get('/:id', async(req,res) => {
  
      try {
          const { id } = req.params 
      const note = await Note.findById(id)
  
      if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({
              message: "Could not find the note"
          })
      }
  
  
      return res.status(200).json(note)
          
      } catch (error) {
  
          console.log(error.message);
          return res.status(500).json({
              message: "Could not fetch note"
          })
          
      }
  })
  
  
  router.put('/:id', async(req, res) => {
  
      try {
  
          
          const { title,  content } = req.body
  
          if( !title || !content){
  
              return res.status(400).send({
                  message: "Invalid fields: title , content"
              })
          }
  
  
          const { id } = req.params
  
          const result = await Note.findByIdAndUpdate(id, req.body)
  
          if(!result) {
              return res.status(404).json({
                  message: "Note was not found"
              })
          }
  
  
          return res.status(200).json({
              message:"Note was updated successfully"
          })
  
  
  
  
  
          
      } catch (error) {
          console.log(error.message);
          return res.status(500).json({
              message: "Could not update the note"
          })
          
      }
  
  
     
  })
  
  
  router.delete('/:id', async(req , res) => {
  
      try {
  
          const { id } = req.params

          console.log(id);
  
          const deleted = await Note.findByIdAndDelete(id)


  
          if(!deleted){
  
              return res.status(400).send({
                  message: "Note was not found"
              })
          }
  
  
          return res.status(200).json({
              message: "Note deleted successfully"
          })
          
      } catch (error) {
          console.log(error.message);
          return res.status(500).send({message: "Note could not be deleted"})
          
      }
  
  })


  export default router