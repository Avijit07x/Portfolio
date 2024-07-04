export const authConfig = {
	session: {
		strategy: "jwt",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.userID = user.userID;
				token.user_name = user.user_name;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.userID = token.userID;
				session.user.user_name = token.user_name;
			}
			return session;
		},
	},
};
