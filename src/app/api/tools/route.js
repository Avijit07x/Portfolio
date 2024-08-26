import { Tools } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { deleteImage } from "../sign-cloudinary-params/route";

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
		const data = await request.json();
		await connectToDb();
		const newTools = new Tools(data);
		await newTools.save();
		return NextResponse.json({ message: "Tool created" }, { status: 201 });
	} catch (error) {
		return handleError(error);
	}
};

export const DELETE = async (request) => {
	try {
		const { id, public_id } = await request.json();
		await connectToDb();
		await Tools.findByIdAndDelete(id);
		await deleteImage(public_id);
		return NextResponse.json({ message: "Tool deleted" }, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
};

const handleError = (error) => {
	return NextResponse.json({ error: error.message }, { status: 500 });
};
