import UserModel from "../models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const user = await signup(body.name, body.email, body.password)

    return user
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
});


async function signup(name:string, email:string,  password:string) {
  try {
    console.log('login', name, password)
    // Check if this user already exisits
    let user = await UserModel.findOne({ email: email });
    if (user) {
      // return setResponseStatus(event, 400, 'That user already exisits!')
      throw new Error('That user already exisits!')
    } else {
        // Insert the new user if they do not exist yet
        user = new UserModel({
            name: name,
            email: email,
            password: password
        });
        await user.save();
        return user;
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}