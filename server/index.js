import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const connection_url = 'mongodb+srv://ashraf:8642eRtyUi@cluster0.jm8rz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(connection_url, {useNewUrlParser : true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => console.log(`server is running on PORT : ${PORT}`)))
.catch((error) => console.log(error.message));

//mongoose.set("useAndModify",false);