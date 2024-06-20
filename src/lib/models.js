import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
	name: String,
});

export const UserData =
	mongoose.models.user_data || mongoose.model("user_data", userDataSchema);
