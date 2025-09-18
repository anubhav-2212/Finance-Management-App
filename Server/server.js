import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT=process.env.PORT||3000
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:"*",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  exposedHeaders: ["Content-Length", "X-Custom-Header"],

}))


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})