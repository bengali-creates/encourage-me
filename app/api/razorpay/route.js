import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDb    from "@/db/connetdb";
import Payment from "@/models/Payment";

export const POST = async (req) =>{
    try{
        await connectDb();
        let body= await req.formData();
        body= Object.fromEntries(body.entries());
        let p=await Payment.findOne({oid: body.razorpay_order_id});
        if(!p){
            return NextResponse.json({ error: "Payment Id not found" }, { status: 404 });
        }
        let ordValidation = validatePaymentVerification(
            {"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id},
            body.razorpay_signature,
            process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET
        );
        if(ordValidation){
             let updatePayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { status: "completed", updatedAt: new Date() },
                { new: true })
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.toUserId}?paymentStatus=success`, { status: 302 });
        }
        else{
            let updatePayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { status: "failed", updatedAt: new Date() },
                { new: true })
            return NextResponse.error("Payment verification failed", { status: 400 });
        }

    }
    catch(err){
        console.error("Error in Razorpay route:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}