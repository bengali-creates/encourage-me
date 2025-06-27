"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connetdb"
import User from "@/models/User"

export const createOrder = async (amount, to_username, paymentform) => {
    await connectDb()
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });


   let x= await instance.orders.create({
        amount: Number.parseInt(amount)*100, // amount in the smallest currency unit
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    await Payment.create({oid:x.id, amount: x.amount, toUserId:to_username , name:paymentform.name,message:paymentform.message})

    return x;
}
