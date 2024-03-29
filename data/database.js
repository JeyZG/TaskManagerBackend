import mongoose from "mongoose";

//dataBase
export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            dbName: process.env.MONGO_DB_NAME,
        })
        .then(() => {
            console.log("DataBase Connected");
        })
        .catch((err) => {
            console.log(err);
        });
}
