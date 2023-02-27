import type { NextApiRequest, NextApiResponse } from "next";
import HotelUser from "../../models/user";
import connect from "../../utils/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { entry } = req.body;
  console.log(entry);
  //const {firstName,lastName,email,orgTel,organizatioName,Address,City,Postalcode,Country}=entry;
  if (method === "POST") {
    if (!entry.email || !entry.email.includes("@")) {
      res.status(422).json({ msg: "invalid email address" });
      return;
    }
    console.log("connectiong to the database");
    await connect();
    console.log("connected successfully");
    // const newUser = new HotelUser({
    //   firstName,
    //   lastName,
    //   email,orgTel,organizatioName,Address,City,Postalcode,Country
    // });
    // const user = await newUser.save();
    //await db.disconnect();
    try {
      const user = await HotelUser.create(entry);
      //alert('email has been received successfully');
      res.redirect("/");
    } catch (err) {
      res.status(400).json({ msg: "not able to create a new user" });
    }
  }
}
