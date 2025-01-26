// Import the required modules using require
import dotenv from "dotenv"
import connectDB from "../db/index.js";
//import {app} from './app.js
dotenv.config({
    path: './.env'
})

// Connect to the database and start the server
connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
//   });
