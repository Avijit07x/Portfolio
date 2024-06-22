"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import ReactLoading from "react-loading";

const ContactForm = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const loadingToast = toast.loading("Sending email...");
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
				},
			)
			.then(
				() => {
					toast.dismiss(loadingToast);
					console.log("SUCCESS!");
					e.target.reset();
					toast.success("Email sent successfully");
					setIsSubmitting(false);
				},
				(error) => {
					console.log("FAILED...", error.text);
					setIsSubmitting(false);
				},
			);
	};
	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="mx-auto mt-8 flex w-full flex-col gap-2 lg:w-1/2"
		>
			<label
				htmlFor="user_name"
				className="w-fit cursor-pointer max-md:text-sm"
			>
				Name:
			</label>
			<input
				className="transition-color mb-2 h-8 rounded-md border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
				type="text"
				id="user_name"
				name="user_name"
				placeholder="Name"
				required
			/>
			<label
				htmlFor="user_email"
				className="w-fit cursor-pointer max-md:text-sm"
			>
				Email:
			</label>
			<input
				className="transition-color mb-2 h-8 rounded-md border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
				type="email"
				name="user_email"
				id="user_email"
				placeholder="Email"
				required
			/>
			<label htmlFor="message" className="w-fit cursor-pointer max-md:text-sm">
				Message:
			</label>
			<textarea
				className="transition-color mb-2 h-32 resize-none rounded-md border border-primary px-2 py-2 text-sm outline-none placeholder:text-sm focus:border-2"
				placeholder="Message"
				id="message"
				name="message"
				required
			></textarea>
			<button
				className="mx-auto w-fit rounded-md bg-primary px-5 py-1 text-white"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<ReactLoading type="spin" color="white" height={25} width={25} />
				) : (
					"Send"
				)}
			</button>
		</form>
	);
};

export default ContactForm;
