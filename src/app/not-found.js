import Image from "next/image";
import Link from "next/link";

const Error = () => {
	return (
		<div className="flex min-h-dvh w-full flex-col items-center justify-center gap-10 text-black">
			<Image
				src="/404-page.png"
				alt="error"
				width={300}
				height={300}
				priority
			/>
			<Link
				href="/"
				className="mt-4 rounded-lg border border-primary px-3 py-1 font-medium"
				title="Back to Home"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default Error;
