import { Project } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connectToDb();
		const projects = await Project.find({});
		return NextResponse.json(projects, {
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
		connectToDb();
		const newProject = await Project(data);
		await newProject.save();
		console.log("project created");
		return NextResponse.json({ message: "Project created" });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
