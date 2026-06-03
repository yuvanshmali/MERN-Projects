import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import razorpay from "../config/razorpay.js";


// placing user order from fronted
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5173";

    try {

        // Creating the new order to our database
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();

        // Total amount calculate
        let totalAmount = 0;

        req.body.items.map((item) => {
            totalAmount += item.price * item.quantity;
        });

        // Delivery charges add
        totalAmount += 80;

        // After that we have to provide a payment link to user (this is necessary for payment)
        // Razorpay order options
        const options = {
            amount: totalAmount * 100, // paise
            currency: "INR",
            receipt: newOrder._id.toString(),
        };

        // Create Razorpay Order
        const order = await razorpay.orders.create(options);



        res.json({ success: true, order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }

    // Now we have to link this api to our fronted(go to frontend's PlaceOrder) 
}

// **Now to verify the order, we have to use "web hook" but rn as a demo project we are using temporary payment verification system**
const verifyOrder = async (req, res) => {

    try {
        const { orderId, razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        // Simple demo verification

        if (razorpay_payment_id && razorpay_order_id && razorpay_signature) {

            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            
            // Now after user place the order we have to clear the user's cart
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

            res.json({ success: true, message: "Paid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment Failed" });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// User's orders for the frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });//req.body.userId got from auth middleware
        res.json({ success: true, data: orders });
        // Above code will help user to get the all order's data
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Api for updating order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        // Here req.body.orderId and req.body.status will be sent by us while calling this api
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus }  