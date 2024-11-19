import { auth } from "@/lib/auth";
import { Project } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import redis from "@/utils/redis";
import { NextResponse } from "next/server";
import { handleError } from "../tools/route";

export const GET = async () => {
	try {
		const cachedProjects = await redis.get("projects");
		if (cachedProjects) {
			return NextResponse.json(JSON.parse(cachedProjects), {
				status: 200,
			});
		} else {
			await connectToDb();
			const projects = await Project.find({});
			await redis.set("projects", JSON.stringify(projects));
			return NextResponse.json(projects, {
				status: 200,
			});
		}
	} catch (error) {
		return handleError(error);
	}
};

export const POST = async (request) => {
	const data = await request.json();
	try {
		const session = await auth();
		if (!session) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		await connectToDb();
		const newProject = await Project(data);
		await newProject.save();
		await redis.del("projects");
		console.log("project created");
		return NextResponse.json({ message: "Project created" });
	} catch (error) {
		return handleError(error);
	}
};
