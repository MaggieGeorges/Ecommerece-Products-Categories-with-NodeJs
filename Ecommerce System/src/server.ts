import express,{ json } from 'express'
import productRouter from './routes/productRoutes'
import categoryRouter from './routes/categoriesRoutes';
import authRouter from './routes/authRoutes'


const app = express()

//middlewares
app.use(json())
app.use("/category", categoryRouter)
app.use("/product", productRouter)
app.use("/auth", authRouter)
//start

app.listen(3000, ()=>{ console.log("Server Running..")})