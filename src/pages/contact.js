import AnimatedText from "@/components/AnimatedText";
import { ProfileImg } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TransitionEffect from "@/components/TransitionEffect";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <Head>
        <title>{`Jay Prajapati | Contact Page`}</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
                <section
                  id="contact"
                  className="w-1/3 bg-light dark:bg-dark lg:w-full 2xl:w-1/2"
                >
                  <h1 className="text-dark text-center text-4xl font-bold mb-10 dark:text-light">
                    Let's Connect
                  </h1>
                  <div className="flex flex-wrap justify-center">
                    <form
                      ref={form}
                      method="POST"
                      onSubmit={sendEmail}
                      className="w-full max-lg"
                    >
                      <div className="mb-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="w-full px-4 py-2 rounded bg-light text-dark border border-dark dark:bg-dark dark:border-light dark:text-light"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full px-4 py-2 rounded bg-light text-dark border border-dark dark:bg-dark dark:border-light dark:text-light"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <textarea
                          name="message"
                          placeholder="Message"
                          className="w-full px-4 py-2 rounded bg-light text-dark border border-dark dark:bg-dark dark:border-light dark:text-light"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                      <button className="w-full px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                        Send
                      </button>
                      <br />
                      <div className="w-full flex items-center justify-center pt-5">
                        {success && (
                          <span className="text-green-600 font-semibold">
                            {`Your Message Has Been Sent Successfully!`}
                          </span>
                        )}
                        {error && (
                          <span className="text-red-600 font-semibold">
                            {`Something Went Wrong!`}
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </section>
                <div className="flex items-end justify-end lg:items-center lg:justify-center">
                  <ProfileImg className={"md:w-[40vh] sm:w-[30vh] xs:w-[20vh] lg:w-[50vh] xl:w-[50vh] w-[50vh]"}/>
                </div>
              </article>
            </div>
          </div>
        </Layout>
      </main>

    </>
  );
};

export default ContactForm;
