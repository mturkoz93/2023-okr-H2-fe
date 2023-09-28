import EntryModel from "../../models/Entry";

export default defineEventHandler(async (event) => {
  const userId = event.context.user._id;
  const body = await readBody(event);

  return await add(body.text, userId);
});

async function add(text: string, userId: string) {
  try {
    const newEntry = new EntryModel({
      user: userId,
      text: text,
    });
    await newEntry.save();
    return newEntry;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
}
