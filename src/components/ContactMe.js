import Link from "next/link";
import XIcon from "./icons/XIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";

const ContactMe = () => {
	return (
		<div id="contact" className="w-full py-10">
			<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
				<span className="text-primary">{"{ "}</span>Get In Touch
				<span className="text-primary">{" }"}</span>
			</h1>
			<p className="mt-4 text-center text-sm font-medium">
				Open for collaboration and freelance opportunities. LetI&#39;ms create
				something amazing together.
			</p>
			<div className="mt-3 flex flex-col justify-center lg:mt-10 lg:flex-row">
				<form
					action=""
					className="mx-auto mt-8 flex w-full flex-col gap-4 lg:w-1/2"
				>
					<input
						className="transition-color h-8 rounded-md border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
						type="text"
						placeholder="Name"
						required
					/>

					<input
						className="transition-color h-8 rounded-md border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
						type="email"
						placeholder="Email"
						required
					/>
					<textarea
						className="transition-color h-32 resize-none rounded-md border border-primary px-2 py-2 text-sm outline-none placeholder:text-sm focus:border-2"
						placeholder="Message"
						required
					></textarea>
					<button className="mx-auto w-fit rounded-md bg-primary px-5 py-1 text-white">
						Submit
					</button>
				</form>
				<div className="mt-8 lg:w-1/2">
					<h1 className="text-center font-medium">Or contact me through:</h1>
					<div className="mt-3 flex items-center justify-center gap-4 lg:mt-10 lg:gap-10">
						<Link
							className="rounded-md bg-white p-3 shadow-md lg:p-4"
							href="mailto:deyavijit134@gmail.com"
							target="_blank"
							aria-label="email me"
						>
							<EmailIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md lg:p-4"
							href="https://twitter.com/Avijit07x"
							target="_blank"
							aria-label="follow me on twitter"
						>
							<XIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md lg:p-4"
							href="https://github.com/Avijit07x"
							target="_blank"
							aria-label="follow me on github"
						>
							<GithubIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md lg:p-4"
							href="/"
							target="_blank"
							aria-label="follow me on linkedin"
						>
							<LinkedinIcon />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
