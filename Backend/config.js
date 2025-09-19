import dotenv from "dotenv";
dotenv.config();

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
export const JWT_SECRET = process.env.JWT_SECRET;
