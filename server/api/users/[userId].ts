import UserModel from "~/server/models/User";

export default defineEventHandler((event: any) => {
  const userId = event.context.params.userId;
  const userDetail = UserModel.findOne({ _id: userId }) as any;
  return userDetail;
});
