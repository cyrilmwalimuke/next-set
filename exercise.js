import mongoose from 'mongoose'


const ExerciseSchema = new mongoose.Schema({
  
    name:{
        type:String
        
    },
    description:{
        type:String
       

    },
    
    imageUrl:{
        type:String
    },
    difficulty:{
        type:String
    },
    targetedMuscleGroups: [String],


    

},{timestamps:true})



const Exercise = mongoose.model("Exercise", ExerciseSchema);

export default Exercise




