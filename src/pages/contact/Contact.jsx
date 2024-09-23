import React, { useRef, useState } from "react";
import { Header } from "../../components";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
   const formRef = useRef();
   const [loading, setLoading] = useState(true);

   const sendEmail = (e) => {
      e.preventDefault();
      // setLoading(true);
      // emailjs
      //    .sendForm(
      //       "service_rn5uwdh",
      //       "template_z55djla",
      //       formRef.current,
      //       "onCf_FZuuuG_27Kb_"
      //    )
      //    .then(
      //       (result) => {
      //          console.log(result.text);
      //          toast.success("Feedback Recorded. We will Contact you shortly");
      //       },
      //       (error) => {
      //          console.log(error.text);
      //          toast.error("Something went Wrong , Please try again later");
      //       }
      //    );
      // setLoading(false);
      // e.target.reset(); // clear input fields
   };

   return (
      <>
         <Header text="Contact Us" />
         <main className="w-full mx-auto px-2 lg:w-9/12 md:px-6 mt-4 lg:mt-6 flex flex-col md:flex-row justify-between gap-10">
  {/* Contact Information Card */}
  <section className="w-full md:w-[30rem] bg-white text-gray-700 rounded-md p-6 shadow-lg">
    <div className="mb-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-gold mb-2">
        Contact Information
      </h1>
      <p className="md:text-lg text-gray-600">
        Fill the form or contact us via other channels
      </p>
    </div>
    <div className="text-gray-700">
      <div className="flex items-center gap-2 my-2 md:text-xl">
        <AiOutlineMail className="text-gold" />
        <a href="mailto:Support@eshop.com?subject=Feedback&body=message" className="hover:underline">
          help@madeinctg.com
        </a>
      </div>
      <div className="flex items-center gap-2 my-2 md:text-xl">
        <CiPhone className="text-gold" />
        <a href="tel:+91-123-12345" className="hover:underline">
          91-123-12345
        </a>
      </div>
    </div>
  </section>

  {/* Contact Form */}
  <section className="w-full md:w-2/3 rounded-md bg-white shadow-lg border-2 border-gray-200 p-6">
    <h1 className="text-2xl md:text-3xl font-semibold text-gold mb-4">Contact Us</h1>
    <form className="form-control" onSubmit={sendEmail} ref={formRef}>
      <div className="py-2">
        <label className="label-text text-lg font-semibold mb-2 block">
          Name:
        </label>
        <input
          className="input input-bordered w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gold"
          type="text"
          placeholder="Full Name"
          required
          name="username"
        />
      </div>
      <div className="py-2">
        <label className="label-text text-lg font-semibold mb-2 block">
          Email:
        </label>
        <input
          className="input input-bordered w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gold"
          type="email"
          placeholder="Active Email"
          required
          name="email"
        />
      </div>
      <div className="py-2">
        <label className="label-text text-lg font-semibold mb-2 block">
          Subject:
        </label>
        <input
          className="input input-bordered w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gold"
          type="text"
          placeholder="Subject"
          required
          name="subject"
        />
      </div>
      <div className="py-2">
        <label className="label-text text-lg font-semibold mb-2 block">
          Message:
        </label>
        <textarea
          className="textarea textarea-bordered w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gold"
          rows={5}
          placeholder="Type your message here..."
          required
          name="message"
        ></textarea>
      </div>
      <button className="btn bg-gold text-white px-4 py-2 rounded-md hover:bg-gold-dark w-full mt-4" type="submit">
        Send Message
      </button>
    </form>
  </section>
</main>

      </>
   );
};

export default Contact;
