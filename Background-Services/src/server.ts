import express from "express";
import cron from 'node-cron'
import { run } from "./EmailService"

const app = express()

cron.schedule('*/10 * * * * *', async()=>{
    await run()
})

app.listen(4000,()=>{
    console.log("Server is Running...")
})