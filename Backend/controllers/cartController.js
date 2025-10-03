import userModel from "../models/userModel.js";

// ✅ Add item to cart
const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData }, { new: true });

        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (cartData[req.body.itemId]) {
            cartData[req.body.itemId] -= 1;
            if (cartData[req.body.itemId] <= 0) {
                delete cartData[req.body.itemId];
            }
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData }, { new: true });

        res.json({ success: true, message: "Removed from cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Get user cart
const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, cartData: userData.cartData || {} });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, removeFromCart, getCart };
