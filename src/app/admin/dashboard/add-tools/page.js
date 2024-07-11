"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const Page = () => {
	const [toolUrl, setToolUrl] = useState(null);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const { tools_name, image_url } = Object.fromEntries(formData);

		try {
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/tools", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ tools_name, image_url }),
			});

			if (!res.ok) {
				const data = await res.json();
				console.log(data);
			}
			e.target.reset();
			setToolUrl(null);
		} catch (error) {
			console.log({ error: error.message });
		}
	};

	return (
		<div className="mx-auto mt-10 px-5 lg:w-3/4">
			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-8 rounded-lg bg-white p-6 shadow-lg"
			>
				<h1 className="w-full text-center text-2xl font-semibold">Add Tools</h1>
				<input
					className="rounded-lg p-2 outline-none ring-1 focus:ring"
					type="text"
					name="tools_name"
					placeholder="Name"
					required
				/>
				<div className="flex w-full items-center gap-2">
					<CldUploadWidget
						uploadPreset="sadxcxfew"
						signatureEndpoint={"/api/sign-cloudinary-params"}
						onUpload={(event) => {
							setToolUrl(event.info.secure_url);
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
						defaultValue={toolUrl}
						required
						className="w-full outline-none"
						placeholder="Upload an image"
						readOnly
					/>
				</div>
				<button
					className="rounded-lg bg-blue-500 px-3 py-1 text-white"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Page;
