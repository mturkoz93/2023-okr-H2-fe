import EntryModel from "~/server/models/Entry"

export default defineEventHandler((event: any) => {
    const entries = EntryModel.find() as any
    return entries
  })