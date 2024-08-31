import { Project } from "@/lib/models";
import { NextResponse } from "next/server";
import { handleError } from "../tools/route";
import { connectToDb } from "@/lib/utils";

export const GET = async () => {
	try {
		await connectToDb();
		const projects = await Project.find({});
		return NextResponse.json(projects, {
			status: 200,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const POST = async (request) => {
	const data = await request.json();
	try {
		await connectToDb();
		const newProject = await Project(data);
		await newProject.save();
		console.log("project created");
		return NextResponse.json({ message: "Project created" });
	} catch (error) {
		return handleError(error);
	}
};
