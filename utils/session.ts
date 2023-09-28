import jwt from "jsonwebtoken";
const createToken = async (user: any) => {
  const config = useRuntimeConfig() as any;
  return await jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    config.tokenSecret,
    {
      expiresIn: 3600,
    }
  );
};
const verifyToken = async (token: string) => {
  try {
    const config = useRuntimeConfig() as any;
    return await jwt.verify(token, config.tokenSecret);
  } catch (err) {
    return "Token expired";
  }
};

const getUserToken = async (_token: any) => {
  const token = await verifyToken(_token);
  if (!token) {
    return null;
  }
  if (token === "Token expired") {
    return null;
  }
  return token;
};
export { createToken, getUserToken };
