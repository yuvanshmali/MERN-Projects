import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connections
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));// explained below
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


// app.get("/", (req, res)=>{
//     res.send("API Working");
// })

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
})



// app.use("/images", express.static("uploads")) is used to make uploaded image files publicly accessible via a URL path.
// express.static("uploads")? Tells Express: “The uploads folder contains static files (images, files, etc.)”
// Static = files that don’t change server logic
// Examples: .jpg, .png, .css, .js