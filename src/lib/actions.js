"use server";

import { signIn, signOut } from "./auth";
import { AdminData } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const HandleSingIn = async (formData) => {
	const { userID, password } = Object.fromEntries(formData);
	const user_id = userID.trim();
	try {
		const response = await signIn("credentials", {
			redirect: false,
			user_id,
			password,
		});
		return response;
	} catch (error) {
		console.error({ "Sign-in error": error.message });
		return null;
	}
};

export const HandleSingOut = async () => {
	await signOut();
};

// For create admin
export const Admin = async (formData) => {
	const { username, userID, password } = Object.fromEntries(formData);
	try {
		await connectToDb();
		const salt = await bcrypt.genSalt(15);
		// const hashedUserId = await bcrypt.hash(userID, salt);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newAdminData = await AdminData({
			user_name: username,
			userID: userID,
			password: hashedPassword,
		});
		newAdminData.save();
		console.log("admin created");
		return {
			success: true,
		};
	} catch (error) {
		console.log({ error: error.message });
		return {
			success: false,
		};
	}
};
