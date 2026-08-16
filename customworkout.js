import mongoose from "mongoose";

const SetSchema = new mongoose.Schema({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  weightUnit: { type: String, enum: ["kg", "lbs"], required: true },
  isCompleted: { type: Boolean, default: false },
}, { _id: false }); // don't need extra _id for sets

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  targetedMuscleGroups: [String],
  databaseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise", required: true },
  sets: [SetSchema],
}, { _id: false }); // no need for auto _id here either unless you want it

const CustomWorkoutSchema = new mongoose.Schema({
  duration: { type: Number, required: true },
  imageUrl: { type: String },
  name:{ type:String, required: true },
  workoutExercises: [ExerciseSchema],
  createdAt: { type: Date, default: Date.now }
});

const CustomWorkout = mongoose.model("CustomWorkout", CustomWorkoutSchema);

export default CustomWorkout
