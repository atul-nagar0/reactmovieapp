import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();


async function connect() {
    try {
        
        await mongoose.connect(`mongodb+srv://${process.env.mongousername}:${process.env.mongopassword}@cluster0.rbmk9.mongodb.net/sample_mflix`)
        console.log("Connected to the database");
    }

    catch (err) {

        throw new Error(err.message);
    }
}

export default connect;

