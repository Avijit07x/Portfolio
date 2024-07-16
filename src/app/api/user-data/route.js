import { UserData } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		await connectToDb();
		const user = await UserData.find({});
		return NextResponse.json(user, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
};
