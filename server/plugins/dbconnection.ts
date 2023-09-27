import mongoose from "mongoose";

export default async function dbConnection() {
  const config = useRuntimeConfig();
  try {
    const DB_OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any;
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(config.dbUrl, DB_OPTIONS);
    console.log("MongoDB connected");
  } catch (error) {
    return createError({
        statusCode: 500,
        statusMessage: 'Something went wrong.'
    })
  }
}
