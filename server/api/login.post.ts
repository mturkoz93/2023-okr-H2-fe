import { verifyPassword } from "~/utils/password";
import UserModel from "../models/User";
import { createToken } from "~/utils/session";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return await login(body.email, body.password);
});

async function login(email: string, password: string) {
  try {
    const user = (await UserModel.findOne({
      email: email,
      // password: password,
    })) as any;

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await verifyPassword(user.password, password)
    if (!checkPassword) {
      throw new Error("Password is incorrect")
    }
    
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profile: "profile.png",
    };
    const token = await createToken(payload)

    return {
      ...payload,
      token: token,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
}
