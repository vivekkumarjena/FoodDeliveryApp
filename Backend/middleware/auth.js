import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // accept token in both "token" and "authorization: Bearer <token>" formats
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;   // ✅ attach userId to request
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid or expired token" });
    }
};

export default authMiddleware;
