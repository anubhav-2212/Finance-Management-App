import mongoose from "mongoose"

const db=async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected")
    } catch (error) {
        console.log(error,"Database not connected")
    }
}

export default db