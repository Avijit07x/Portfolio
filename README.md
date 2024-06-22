# My Portfolio

This is my personal portfolio website built using Next.js, Framer Motion, Tailwind CSS, EmailJS, and MongoDB with Mongoose. This portfolio showcases my projects, skills, and provides a way for visitors to contact me.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshot](#screenshot)

## Features

- **Next.js**: Server-side rendering, static site generation, and dynamic routing.
- **Framer Motion**: Smooth animations and interactions.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **EmailJS**: Email integration for contact forms without a backend.
- **MongoDB & Mongoose**: Database and ODM for storing and managing data.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Avijit07x/portfolio.git

   cd portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_USER_ID=your_emailjs_user_id
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Hero Section**: Overview of your portfolio with a brief introduction.
- **Projects Section**: Detailed information about your projects with links to GitHub repositories and live demos.
- **Skills Section**: List of your technical skills and proficiencies.
- **Contact Section**: Contact form to send you messages directly via EmailJS.

## Deployment

The portfolio is deployed and can be accessed [here](https://avijit07x-portfolio.vercel.app/).

## Screenshot
