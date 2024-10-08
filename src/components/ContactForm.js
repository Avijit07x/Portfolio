"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SyncLoader } from "react-spinners";

const ContactForm = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
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
					console.log("SUCCESS!");
					e.target.reset();
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
			className="mx-auto mt-8 flex w-full flex-col gap-2 lg:w-3/5"
		>
			<label
				htmlFor="user_name"
				className="w-fit cursor-pointer max-md:text-sm"
			>
				Name:
			</label>
			<input
				className="transition-color mb-2 h-10 rounded-xl border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
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
				className="transition-color mb-2 h-10 rounded-xl border border-primary px-2 text-sm outline-none placeholder:text-sm focus:border-2"
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
				className="transition-color mb-2 h-40 resize-none rounded-xl border border-primary px-2 py-2 text-sm outline-none placeholder:text-sm focus:border-2"
				placeholder="Message"
				id="message"
				name="message"
				required
			></textarea>
			<button
				className={` ${isSubmitting ? "bg-primary" : ""} mx-auto h-9 w-20 rounded-lg border-[1.5px] border-primary bg-white font-semibold transition-colors hover:bg-primary/90 hover:text-white`}
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<SyncLoader
						size={5}
						color="#ffffff"
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				) : (
					"Send"
				)}
			</button>
		</form>
	);
};

export default ContactForm;
