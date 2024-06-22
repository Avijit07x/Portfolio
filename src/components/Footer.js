import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full py-3 text-center">
			<h1 className="text-sm">
				Made with ❤️ by{" "}
				<Link href="https://github.com/Avijit07x" target="_blank">
					Avijit Dey
				</Link>
			</h1>
		</footer>
	);
};

export default Footer;
