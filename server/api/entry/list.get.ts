import EntryModel from "~/server/models/Entry";

export default defineEventHandler((event: any) => {
  console.log("user-id", event.context.user._id);
  const entries = EntryModel.find({}).populate('user', '-password') as any;
  return entries;
});
