import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 md:px-12 px-4 py-20 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
          I&apos;m currently exploring new opportunities where I can bring my skills
          and creativity to impactful projects. If you are looking for a
          dedicated web developer with experience in building responsive,
          dynamic websites and applications, I would love to connect! Whether it is a
          new role, collaboration, or freelance work, feel free to reach out
          through the form below or via social media. Let us create something
          remarkable together!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com" className="bg-white text-3xl rounded-full border-2">
          <FaGithub /></Link>
          <Link href="linkedin.com" className="bg-white text-3xl border rounded ml-2">
          <FaLinkedin /></Link>
        </div>
      </div>
      <div>
        <form
          action="https://formspree.io/f/mqaadvww"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="123@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium "
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <p className="text-green-500 mt-2 hidden" id="form-status">
            Email sent successfully!
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;