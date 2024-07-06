import { Admin } from "@/lib/actions";

const Page = () => {
	return (
		<div className="mx-auto mt-10 px-5 lg:w-3/4">
			<div className="space-y-4 rounded-lg bg-white px-8 py-5 shadow-lg">
				<h1 className="text-center text-2xl font-semibold">Create Admin</h1>
				<form action={Admin} className="flex flex-col justify-center gap-4">
					<label className="cursor-pointer" htmlFor="username">
						Name
					</label>
					<input
						className="rounded-lg p-2 outline-none ring-1 focus:ring"
						type="text"
						name="username"
						id="username"
						placeholder="name"
						required
					/>
					<label className="cursor-pointer" htmlFor="userID">
						User ID
					</label>
					<input
						className="rounded-lg p-2 outline-none ring-1 focus:ring"
						type="text"
						name="userID"
						id="userID"
						placeholder="userID"
						required
					/>
					<label className="cursor-pointer" htmlFor="password">
						Password
					</label>
					<input
						className="rounded-lg p-2 outline-none ring-1 focus:ring"
						type="password"
						name="password"
						id="password"
						placeholder="password"
						required
					/>
					<button
						className="w-full rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-500/90"
						type="submit"
					>
						Create Admin
					</button>
				</form>
			</div>
		</div>
	);
};

export default Page;
