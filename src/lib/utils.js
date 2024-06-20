import mongoose from "mongoose";

const connections = {};

export const connectToDb = async () => {
	try {
		if (connections.isConnected) {
			console.log("already connected");
			return;
		}
		const db = await mongoose.connect(process.env.MONGODB_URL);
		connections.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
	}
};
