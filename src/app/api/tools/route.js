import { auth } from "@/lib/auth";
import { Tools } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import redis from "@/utils/redis";
import { NextResponse } from "next/server";
import { deleteImage } from "../sign-cloudinary-params/route";

export const GET = async () => {
	try {
		const cachedTools = await redis.get("tools");
		if (cachedTools) {
			return NextResponse.json(JSON.parse(cachedTools), { status: 200 });
		} else {
			await connectToDb();
			const tools = await Tools.find({});
			await redis.set("tools", JSON.stringify(tools));
			return NextResponse.json(tools, { status: 200 });
		}
	} catch (error) {
		return handleError(error);
	}
};

export const POST = async (request) => {
	try {
		const session = await auth();
		if (!session) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		await connectToDb();
		const data = await request.json();
		const newTools = new Tools(data);
		await newTools.save();
		await redis.del("tools");
		return NextResponse.json({ message: "Tool created" }, { status: 201 });
	} catch (error) {
		return handleError(error);
	}
};

export const DELETE = async (request) => {
	try {
		const session = await auth();
		if (!session) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		await connectToDb();
		const { id, public_id } = await request.json();
		await Tools.findByIdAndDelete(id);
		await deleteImage(public_id);
		await redis.del("tools");
		return NextResponse.json({ message: "Tool deleted" }, { status: 200 });
	} catch (error) {
		return handleError(error);
	}
};

export const handleError = (error) => {
	return NextResponse.json({ error: error.message }, { status: 500 });
};
