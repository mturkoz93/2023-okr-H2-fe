import EntryModel from "../../models/Entry";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return await add(body.text);
});

async function add(text: string) {
  try {
    const newEntry = new EntryModel({
      text: text,
      date: new Date(),
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
