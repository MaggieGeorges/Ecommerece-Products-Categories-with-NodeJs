import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
import { error, log } from 'console'
dotenv.config({path:path.resolve(__dirname,"../../.env")})
import ejs from 'ejs'

//Step1: creating a configuration object
let config = {
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
}

//Step2: creating a transporter
function createTransporter(config:any){
    return nodemailer.createTransport(config)
}

//Step3: sending email
async function sendEmail(messageOption:any) {
    let transporter = createTransporter(config)
    await transporter.verify()

    await transporter.sendMail(messageOption, (err, info)=>{
        if(err){
            console.log(err);
        }
        console.log(info)
    })
}

let messageOptions = {
    to:process.env.EMAIL,
    from:process.env.EMAIL,
    subject:"Testing",
    html:'<h1>Hello There</h1>'
}
//sendEmail(messageOptions)

ejs.renderFile("../../Templates", {name:"John Doe"}, (err, data) => {
    console.log(data);
})