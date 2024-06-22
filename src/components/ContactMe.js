import Link from "next/link";
import XIcon from "./icons/XIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";
import ContactForm from "./ContactForm";

const ContactMe = () => {
	return (
		<div id="contact" className="w-full py-10">
			<h1 className="w-full text-center text-2xl font-semibold lg:text-3xl">
				<span className="text-primary">{"{ "}</span>Get In Touch
				<span className="text-primary">{" }"}</span>
			</h1>
			<p className="mt-4 text-center text-sm font-medium">
				Open for collaboration and freelance opportunities. Let&#39;s create
				something amazing together.
			</p>
			<div className="mt-3 flex flex-col justify-center lg:mt-10 lg:flex-row">
				<ContactForm />
				<div className="mt-8 lg:w-1/2">
					<h1 className="text-center font-medium">Or contact me through:</h1>
					<div className="mt-3 flex items-center justify-center gap-4 lg:mt-10 lg:gap-10">
						<Link
							className="rounded-md bg-white p-3 shadow-md"
							href="mailto:deyavijit134@gmail.com"
							target="_blank"
							aria-label="email me"
						>
							<EmailIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md"
							href="https://twitter.com/Avijit07x"
							target="_blank"
							aria-label="follow me on twitter"
						>
							<XIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md"
							href="https://github.com/Avijit07x"
							target="_blank"
							aria-label="follow me on github"
						>
							<GithubIcon />
						</Link>
						<Link
							className="rounded-md bg-white p-3 shadow-md"
							href="https://www.linkedin.com/in/avijit07x/"
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
