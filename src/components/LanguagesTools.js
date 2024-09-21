import Image from "next/image";

const LanguagesTools = ({ tools }) => {
	return (
		<div className="mt-32 w-full">
			<div className="space-y-4">
				<h1 className="w-full text-center text-xs font-bold uppercase lg:text-sm">
					<span className="text-primary">{"{ "}</span>
					My Knowledge Areas
					<span className="text-primary">{" }"}</span>
				</h1>
				<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
					<span className="text-primary">{"{ "}</span>
					Languages &#38; Tools
					<span className="text-primary">{" }"}</span>
				</h1>
				<p className="mt-4 text-center text-sm">
					I am skilled in various languages and tools and have a strong drive to
					learn new technologies and stay updated with the latest industry
					trends. <br />
					Currently, my focus is on deepening my expertise in backend
					development, exploring new frameworks and technologies to enhance my
					capabilities.
				</p>
			</div>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-16">
				{tools?.length !== 0 ? (
					tools?.map((tool) => {
						return (
							<div
								key={tool._id}
								className="grid h-20 w-20 cursor-pointer place-items-center rounded-md bg-white drop-shadow-md"
								title={tool.tools_name}
							>
								<Image
									className="h-10 w-10 object-contain"
									src={tool.image_url}
									alt={tool.tools_name}
									width={40}
									height={40}
								/>
							</div>
						);
					})
				) : (
					<div className="flex flex-wrap items-center justify-center gap-4">
						{Array(27)
							.fill(0)
							.map((_, index) => (
								<div
									key={index}
									className="grid h-20 w-20 place-items-center rounded-md bg-white shadow-md"
									title="Loading..."
								>
									<Image
										className="h-7 w-7 animate-pulse object-contain"
										src="/image.svg"
										alt="dummy"
										width={100}
										height={100}
									/>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default LanguagesTools;
