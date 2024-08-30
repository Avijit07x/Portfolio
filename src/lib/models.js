import mongoose from "mongoose";

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
	tools_name: { type: String, required: true },
	image_url: { type: String, required: true },
	public_id: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	image_url: { type: String, required: true },
	github_url: { type: String, required: true },
	live_url: { type: String, required: true },
	tags: { type: [String], required: true },
});

export const AdminData =
	mongoose.models?.adminDetail ||
	mongoose.model("adminDetail", adminDataSchema);

export const Tools =
	mongoose.models?.tools || mongoose.model("tools", toolsSchema);

export const Project =
	mongoose.models?.project || mongoose.model("project", projectSchema);
