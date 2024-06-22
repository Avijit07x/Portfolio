import { UserData } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		connectToDb();
		const user = await UserData.find();
		return NextResponse.json(user, {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
			},
		});
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
};
