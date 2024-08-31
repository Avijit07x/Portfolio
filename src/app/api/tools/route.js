import { Tools } from "@/lib/models";
import { NextResponse } from "next/server";
import { deleteImage } from "../sign-cloudinary-params/route";
import { connectToDb } from "@/lib/utils";

export const GET = async () => {
	try {
		await connectToDb();
		const tools = await Tools.find({});
		return NextResponse.json(tools, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
};

export const POST = async (request) => {
	try {
		await connectToDb();
		const data = await request.json();
		const newTools = new Tools(data);
		await newTools.save();
		return NextResponse.json({ message: "Tool created" }, { status: 201 });
	} catch (error) {
		return handleError(error);
	}
};

export const DELETE = async (request) => {
	try {
		await connectToDb();
		const { id, public_id } = await request.json();
		await Tools.findByIdAndDelete(id);
		await deleteImage(public_id);
		return NextResponse.json({ message: "Tool deleted" }, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
};

export const handleError = (error) => {
	return NextResponse.json({ error: error.message }, { status: 500 });
};
