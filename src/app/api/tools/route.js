import { Tools } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { deleteImage } from "../sign-cloudinary-params/route";

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
	try {
		const newTools = await Tools(data);
		await newTools.save();
		return NextResponse.json(
			{ message: "tools created" },
			{
				status: 200,
			},
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const DELETE = async (request) => {
	const { id, public_id } = await request.json();
	try {
		await Tools.findByIdAndDelete(id);
		await deleteImage(public_id);
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
