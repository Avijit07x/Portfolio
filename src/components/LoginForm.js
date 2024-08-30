"use client";
import { HandleSingIn } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import EyeOpen from "./icons/EyeOpen";
import EyeClose from "./icons/EyeClose";

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		try {
			const formData = new FormData(e.currentTarget);
			const res = await HandleSingIn(formData);
			if (!!res.ok) {
				setError("Something went wrong");
				setIsLoading(false);
			} else {
				router.push("/admin/dashboard");
				setIsLoading(false);
			}
		} catch {
			setIsLoading(false);
			setError("Admin not found");
		}
	};

	const HandleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	return (
		<>
			<div className="flex h-dvh w-full select-none flex-col items-center justify-center p-10">
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
						<div className="relative w-full">
							<input
								className="w-full rounded-lg p-2 outline-none ring-1 focus:ring"
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="Password"
								autoComplete="current-password"
								required
							/>
							<div
								className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
								onClick={HandleShowPassword}
							>
								{showPassword ? <EyeOpen /> : <EyeClose />}
							</div>
						</div>
						<button
							className="flex h-10 items-center justify-center rounded-lg bg-blue-500 text-white"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<PropagateLoader
									className="mb-2"
									size={8}
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
		</>
	);
};

export default LoginForm;
