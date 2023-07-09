/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactMe = () => {
  const form = useRef();

  const [mailSent, setMailSent] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fsb1e4m",
        "template_rw701jb",
        form.current,
        "YiNxd1lUt0mx1R4BN"
      )
      .then(
        (result) => {
          setLoading(false);
          e.target.reset();
          setMailSent(null)
        },
        (error) => {
          setLoading(false);
          setMailSent(error.text);
        }
        );
        
  };

  return (
    <motion.div
      className="animationContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <div
        id="contact"
        className="flex flex-col-reverse gap-6 md:flex-row w-full my-44"
      >
        <div className="grid flex-grow card place-items-center mx-2">
          <div
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#ff5c0445] mx-auto bg-[#684d4111] "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-duration="2500"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="card-body">
                <div className="border-b border-[#ff7b07] my-2">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="input bg-transparent text-xl text-white placeholder:text-[#a3a3a3]"
                  />
                </div>
                <div className="border-b border-[#ff7b07] my-2">
                  <input
                    required
                    type="text"
                    placeholder="Your Email"
                    name="user_email"
                    className="input bg-transparent text-xl text-white placeholder:text-[#a3a3a3]"
                  />
                </div>
                <div className="border-b border-[#ff7b07] my-2">
                  <input
                    required
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="input bg-transparent text-xl text-white placeholder:text-[#a3a3a3]"
                  />
                </div>
                <div className="border-b border-[#ff7b07] my-2">
                  <textarea
                    className="text-xl px-6 text-white bg-transparent placeholder:text-xl placeholder:text-red focus:outline-none"
                    placeholder="Your Message"
                    name="message"
                    id=""
                    cols="25"
                    rows="4"
                  ></textarea>
                </div>

                <div className="flex justify-end mt-6">
                  {loading && (
                    <button className="bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-2xl shadow-[#ff720698]">
                      <span className="loading loading-dots loading-md"></span>
                    </button>
                  )}
                  {!loading && (
                    <button className="hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-2xl shadow-[#ff720698]">
                      {mailSent ? mailSent : "Send Mail"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="divider divider-horizontal border-s-4 rounded-full border-[#ff5303a4]"></div>

        <div className="grid flex-grow card place-items-start items-center bg-[url('https://i.ibb.co/wsyX18Z/image-removebg-preview.png')] bg-cover bg-no-repeat mx-2"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-delay="600"
        data-aos-duration="2500">
          <h1 className="text-xl my-12">
            Let's Talk
            <br />
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7dd2f6] to-[#f0b3f1]">
              CONTACT ME
            </span>
          </h1>
          <div className="flex justify-start">
            <div className="space-y-4">
              <div className="flex gap-2 text-2xl items-end">
                <div>
                  <FaPhoneAlt className="text-indigo-200" />
                </div>
                <div>
                  <h3 className="text-2xl text-indigo-200">
                    +880 1710 77 54 56
                  </h3>
                </div>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <div>
                  <FaEnvelope className="text-indigo-200" />
                </div>
                <div>
                  <h3 className="text-2xl text-indigo-200">
                    hridoyfahad30@gmail.com
                  </h3>
                </div>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <div>
                  <FaMapMarkerAlt className="text-indigo-200" />
                </div>
                <div>
                  <h3 className="text-2xl text-indigo-200">
                    Sunamganj, Bangladesh
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
