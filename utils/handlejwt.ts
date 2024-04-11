import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const tokenSign = async (user: any) => {
  const secret = (process.env.JWT_SECRET as string) || "default-secret";
  const sign = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    secret,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

export const verifyToken = async (tokenJwt: any) => {
  const secret = (process.env.JWT_SECRET as string) || "default-secret";
  try {
    return jwt.verify(tokenJwt, secret);
  } catch (error) {
    return null;
  }
};
