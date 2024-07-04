import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
	name: String,
});

const adminDataSchema = new mongoose.Schema({
	user_name: {
		type: String,
		required: true,
	},
	userID: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const toolsSchema = new mongoose.Schema({
	tools_name: String,
	image_url: String,
});

export const UserData =
	mongoose.models?.userData || mongoose.model("userData", userDataSchema);

export const AdminData =
	mongoose.models?.adminDetail ||
	mongoose.model("adminDetail", adminDataSchema);

export const Tools =
	mongoose.models?.tools || mongoose.model("tools", toolsSchema);
