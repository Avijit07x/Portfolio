import { HandleSingOut } from "@/lib/actions";

const LoginBtn = () => {
	return (
		<div>
			<form action={HandleSingOut}>
				<button
					className="w-full rounded-lg bg-white px-2 py-1 text-sm text-black"
					type="submit"
				>
					Sign Out
				</button>
			</form>
		</div>
	);
};

export default LoginBtn;
