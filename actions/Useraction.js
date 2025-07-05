"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connetdb"
import User from "@/models/User"

export const createOrder = async (amount, to_username, paymentform) => {
    await connectDb()
    console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
    console.log("KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);
    let user= await User.findOne({ username: to_username })
    const instance = new Razorpay({
        key_id: user.razorpayid || process.env.RAZORPAY_KEY_ID,
        key_secret:user.razorpaysecret || process.env.RAZORPAY_KEY_SECRET,
    });

    let options = {
        amount: Number.parseInt(amount) * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    };
   let x= await instance.orders.create(options)  
    await Payment.create({oid:x.id, amount: amount, toUserId:to_username ,fromUserId:paymentform.name,message:paymentform.message})

    return x;
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ toUserId: username, status:"completed" }).sort({ amount: -1 }).limit(10).lean().select("fromUserId toUserId amount message status ")
    return p.map(p => ({
        ...p,
        _id: p._id?.toString(),
        
    }));
}

export const updateProfile = async (e, username) => {
   
    await connectDb()
    let data=Object.fromEntries(e)
    // if()
    let u = await User.findOneAndUpdate({ username: username },data)  
}