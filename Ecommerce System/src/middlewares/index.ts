import jwt from 'jsonwebtoken'
import {Request,Response,RequestHandler, NextFunction} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { info } from 'console'
import { PayLoad } from '../models/authModel'
import { func } from 'joi'
dotenv.config({path:path.resolve(__dirname,"../../.env")})



export interface ExtendedRequest1 extends Request{
    info?:PayLoad
}


export function verifyToken (req:ExtendedRequest1, res:Response, next:NextFunction){
    try{
        //reading the token and passing it through request headers
        const token = req.headers['token'] as string

        //a token?
        if(!token){
            return res.status(401).json({message: 'Forbidden!!'})
        }
        const decodeData = jwt.verify(token, process.env.SECRET as string) as PayLoad
        req.info=decodeData
    }
    catch(error){
        return res.status(500).json(error)
    }

    next()
}

