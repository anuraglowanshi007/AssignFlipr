import express from  "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  jab json data aaye or limit isliye ki server crash nhi ho
app.use(express.json({limit:"16kb"}))
// url k liye
app.use(express.urlencoded({extended:false}))
 // favicon image ko store karne k liye public folder ka name
app.use(express.static("public/temp"))
// secure cookies ko user k browser ma rakh sakte ho or vo sirf server he read kar sakta ha
app.use(cookieParser())
import userRouter from "./routes/user.router.js"
import ClientRouter from "./routes/client.router.js";
import projectRouter from "./routes/project.router.js"
import newsletterRouter from "./routes/newsletter.router.js"
import contactRouter from "./routes/contact.router.js"
app.use("/api/v1/user",userRouter)
app.use("/api/v1/clients",ClientRouter)
app.use("/api/v1/projects",projectRouter)
app.use("/api/v1/newsletter",newsletterRouter)
app.use("/api/v1/contacts", contactRouter)


 export {app}
