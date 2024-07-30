"use client";
import { HandleSingIn } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [unauthorized, setUnauthorized] = useState(false);
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const formData = new FormData(e.currentTarget);
			const res = await HandleSingIn(formData);
			if (!!res.error) {
				setError("Something went wrong");
				setUnauthorized(true);
				setIsLoading(false);
			} else {
				router.push("/admin/dashboard");
				setIsLoading(false);
			}
		} catch {
			setIsLoading(false);
			setUnauthorized(true);
			setError("Admin not found");
		}
	};
	const handleUnauthorized = () => {
		setUnauthorized(false);
		router.push("/");
	};
	return (
		<>
			{unauthorized ? (
				<video
					onPlay={(e) => {
						e.target.requestFullscreen();
					}}
					autoPlay
					onEnded={() => handleUnauthorized()}
					src="/unauthorized.mp4"
				></video>
			) : (
				<div className="flex h-dvh w-full flex-col items-center justify-center p-10">
					<div className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-white p-5 text-center shadow-lg lg:w-1/4">
						<h1 className="text-2xl font-semibold">Admin Login</h1>
						{error && (
							<div className="rounded-lg bg-red-400 p-3 text-sm font-semibold text-white">
								{error}
							</div>
						)}
						<form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
							<input
								className="rounded-lg p-2 outline-none ring-1 focus:ring"
								type="text"
								name="userID"
								placeholder="User ID"
								autoComplete="username"
								required
							/>
							<input
								className="rounded-lg p-2 outline-none ring-1 focus:ring"
								type="password"
								name="password"
								placeholder="Password"
								autoComplete="current-password"
								required
							/>
							<button
								className="grid h-10 place-items-center rounded-lg bg-blue-500 text-white"
								type="submit"
								disabled={isLoading}
							>
								{isLoading ? (
									<ClipLoader
										size={22}
										color="#ffffff"
										aria-label="Loading Spinner"
										data-testid="loader"
									/>
								) : (
									"Login"
								)}
							</button>
						</form>
						<div className="rounded-lg bg-red-400 p-3 text-sm font-semibold text-white">
							<p>
								This is a secured page. <br />
								Leave this page if you are not the administrator.
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default LoginForm;
