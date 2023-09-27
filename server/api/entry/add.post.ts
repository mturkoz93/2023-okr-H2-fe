import EntryModel from "../../models/Entry";

export default defineEventHandler(async (event) => {
  console.log("add.post.ts...........")
  const body = await readBody(event);

  return await add(body.text);
});

async function add(text: string) {
  try {
    console.log("add", text)
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
