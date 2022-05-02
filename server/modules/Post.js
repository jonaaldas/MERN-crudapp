import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
    trim: true
  },
  description:{
    type:String,
    required: true,
    trim: true
  },
  img:{
    url: String, 
    public_id: String
  }
})

export default mongoose.model('Post', Schema)