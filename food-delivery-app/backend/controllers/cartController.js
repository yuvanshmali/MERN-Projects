import userModel from "../models/userModel.js";

// We're getting userId(req.body.userId) because we applied a middleware(auth.js, which gives us userId) to every router of cart

// add items to cart
const addToCart = async (req, res) => {
  try {
    // In auth.js we save the user's id as "req.body.userId", here we are checking that from frontend which user is trying to access.
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // now we have to update the cart data after updating the items
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove items to cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    if (cartData[req.body.itemId] === 0) {
      delete cartData[req.body.itemId];
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Remove From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {

    let userData = await userModel.findById(req.body.userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    let cartData = await userData.cartData;
    res.json({success:true, cartData});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
};

export { addToCart, removeFromCart, getCart };
