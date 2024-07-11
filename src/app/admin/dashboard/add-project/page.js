"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const Page = () => {
	const [tags, setTags] = useState([]);
	const [tagValue, setTagValue] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const { title, description, github_url, live_url, image_url } =
			Object.fromEntries(formData);
		try {
			const res = await fetch(
				process.env.NEXT_PUBLIC_BASE_URL + "api/projects",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title,
						description,
						github_url,
						image_url,
						live_url,
						tags,
					}),
				},
			);
			e.target.reset();
			setImageUrl("");
			setTags([]);
			if (!res.ok) {
				const data = await res.json();
				console.log(data);
			}
			e.target.reset();
		} catch (error) {
			console.log({ error: error.message });
		}
	};

	const handleTagInputChange = (e) => {
		setTagValue(e.target.value);
	};

	const handleTagInputKeyPress = (e) => {
		if (e.key === "Enter" && tagValue.trim() !== "") {
			e.preventDefault();
			setTags((prevTags) => [...prevTags, tagValue.trim()]);
			setTagValue("");
		}
	};

	const handleTagRemove = (indexToRemove) => {
		setTags((prevTags) =>
			prevTags.filter((_, index) => index !== indexToRemove),
		);
	};

	return (
		<div className="mx-auto mt-10 bg-white p-10 px-5 shadow-lg lg:w-3/4">
			<form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
				<h1 className="mb-4 text-center text-2xl font-semibold">Add Project</h1>
				<label className="cursor-pointer" htmlFor="title">
					Project Title
				</label>
				<input
					className="rounded-lg p-2 outline-none ring-1 focus:ring"
					type="text"
					placeholder="title"
					name="title"
					id="title"
					required
				/>
				<label className="cursor-pointer" htmlFor="description">
					Project Description
				</label>
				<input
					className="rounded-lg p-2 outline-none ring-1 focus:ring"
					type="text"
					placeholder="description"
					name="description"
					id="description"
					required
				/>
				<label className="cursor-pointer" htmlFor="github_url">
					Github URL
				</label>
				<input
					className="rounded-lg p-2 outline-none ring-1 focus:ring"
					type="text"
					placeholder="github url"
					name="github_url"
					id="github_url"
					required
				/>
				<label className="cursor-pointer" htmlFor="live_url">
					Live URL
				</label>
				<input
					className="rounded-lg p-2 outline-none ring-1 focus:ring"
					type="text"
					placeholder="live url"
					name="live_url"
					id="live_url"
					required
				/>
				<label className="cursor-pointer" htmlFor="tagInput">
					Tags
				</label>
				<div className="flex flex-wrap items-center gap-2">
					{tags.map((tag, index) => (
						<div
							key={index}
							className="flex items-center gap-1 rounded bg-gray-200 px-2 py-1"
						>
							<span>{tag}</span>
							<button
								type="button"
								onClick={() => handleTagRemove(index)}
								className="ml-1 text-red-500 hover:text-red-700"
							>
								&times;
							</button>
						</div>
					))}
					<input
						className="w-full rounded-lg p-2 outline-none ring-1 focus:ring"
						type="text"
						placeholder="Add tag"
						name="tagInput"
						id="tagInput"
						value={tagValue}
						onChange={handleTagInputChange}
						onKeyDown={handleTagInputKeyPress}
					/>
				</div>
				<div className="my-3 flex w-full items-center gap-2">
					<CldUploadWidget
						uploadPreset="sadxcxfew"
						signatureEndpoint={"/api/sign-cloudinary-params"}
						onUpload={(event) => {
							setImageUrl(event.info.secure_url);
						}}
					>
						{({ open }) => {
							return (
								<button
									className="inline-block rounded-lg bg-gray-500/50 px-3 py-1 text-white"
									onClick={(e) => {
										e.preventDefault();
										open();
									}}
								>
									Upload
								</button>
							);
						}}
					</CldUploadWidget>
					<input
						type="text"
						name="image_url"
						defaultValue={imageUrl}
						required
						className="w-full outline-none"
						placeholder="Upload an image"
						readOnly
					/>
				</div>
				<button
					className="mt-2 rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-500/90"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Page;
