import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { AdminData } from "./models";
import { authConfig } from "./auth.config";

const login = async ({ user_id, password }) => {
	try {
		await connectToDb();
		const admin = await AdminData.findOne({ userID: user_id });
		if (!admin) {
			throw new Error("Admin not found");
		}
		const match = await bcrypt.compare(password, admin.password);
		if (!match) {
			throw new Error("Incorrect password");
		}
		return admin;
	} catch (error) {
		console.log({ error: error.message });
		return null;
	}
};

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				if (credentials === null) return null;
				const admin = await login(credentials);
				if (!admin) {
					throw new Error("Admin not found");
				}
				return admin;
			},
		}),
	],
	...authConfig.callbacks,
});
