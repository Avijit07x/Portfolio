import { Tools } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		await connectToDb();
		const tools = await Tools.find({});
		return NextResponse.json(tools, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const POST = async (request) => {
	const data = await request.json();
	console.log(data);
	try {
		const newTools = await Tools(data);
		await newTools.save();
		console.log("tools created");
		return NextResponse.json(
			{ message: "OK" },
			{
				status: 200,
			},
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const DELETE = async (request) => {
	const { id } = await request.json();
	try {
		console.log(id);
		await Tools.findByIdAndDelete(id);
		console.log("tools deleted");
		return NextResponse.json(
			{ message: "tools deleted" },
			{
				status: 200,
			},
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
