const MyWork = () => {
	return (
		<div className="w-full space-y-4 py-20">
			<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
				<span className="text-primary">{"{ "}</span>
				My Projects
				<span className="text-primary">{" }"}</span>
			</h1>
			<p className="mt-4 text-center text-sm">
				Each of these projects highlights a unique aspect of what I can do, from
				problem-solving to creative design. <br className="hidden lg:block" /> I
				am always eager to take on new challenges and expand my horizons.
			</p>

			{/* TODO: Add projects here */}
			<h1 className="w-full text-center text-2xl font-semibold">Soon...</h1>
		</div>
	);
};

export default MyWork;
