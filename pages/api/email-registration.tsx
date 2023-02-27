import type { NextApiRequest, NextApiResponse } from "next";
import emailUser from "@/models/conta";
import connect from "@/utils/db";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    const {method}=req;
    if(method==='POST'){
        const {email}=req.body;
        if (!email || !email.includes("@")) {
            res.status(422).json({ msg: "invalid email address" });
            return;
          }
          console.log('connecting to database')
          await connect();
          console.log('email database conneceted successfully');
          const existUser=await emailUser.findOne({email:email});
          if(existUser){
            res.status(400).json({msg:'the email have already been registered'})
          }
          try{
            const user=await emailUser.create({email:email});
          }catch(err){
            res.status(400).json({msg:'not able to register email'})
          }
    }return    
  }