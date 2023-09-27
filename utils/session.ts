import jwt from "jsonwebtoken"
const createToken = async (user: any) => {
  const config = useRuntimeConfig() as any
  return await jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    config.tokenSecret,
    {
      expiresIn: 3600
    }
  )
}
const verifyToken = async (token: string) => {
  try {
  const config = useRuntimeConfig() as any
  return await jwt.verify(token, config.tokenSecret)
  } catch (err) {
    return "Token expired"
  }
}

const getUserToken = (payload: any) => {
  const token = verifyToken(payload)
  if (!token) {
    return null 
  }
  return token
}
export { createToken, getUserToken }