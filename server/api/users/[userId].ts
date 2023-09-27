import UserModel from "~/server/models/User"

export default defineEventHandler((event: any) => {
  console.log('Id', event.context.params.userId)
  const userId = event.context.params.userId
    /* const id = parseInt(event.context.params.userId) as number
    if (!Number.isInteger(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID should be an integer',
      })
    } */
    const userDetail = UserModel.findOne({ _id: userId }) as any
    return userDetail
  })