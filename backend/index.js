import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();

app.listen(4000, () => {
    console.log('listening to port 4000')
})

mongoose.connect(process.env.VITE_MONGO).then(() => {
    console.log('db is connected');
}).catch(e => console.log(e))