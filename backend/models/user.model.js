 import mongoose from "mongoose";

 const {
   Schema,
   model
 } = mongoose;

 const userSchema = new Schema({
   email: {
     type: String,
     required: true,
     unique: true,
     collation: { locale: 'en', strength: 2 }
   },
   password: {
     type: String,
     required: true,
   },
 }, {
   timestamps: true
 });

 export default model("User", userSchema); //User without 's' at the end. MangoDb will add 's' automatically.