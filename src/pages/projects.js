import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/ecommerce-mern.png";
import Project2 from "../../public/images/projects/portfolio-v01.png";
import Project3 from "../../public/images/projects/portfolio-v02.png";
import Project4 from "../../public/images/projects/restaurant-ui.png";
import Head from "next/head";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{scale:1.05}}
        transition={{duration:0.2}}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link className="hover:underline-offset-4" href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />{" "}
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light lg:-right-3 lg:h-[103%] lg:w-full" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage 
        src={img} 
        alt={title} 
        className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link className="hover:underline-offset-4" href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Jay Prajapati | Projects Page</title>
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
              <FeaturedProject
                title="E-Commerce Store"
                summary="Developed a full-stack web application using the MERN (MongoDB, Express.js, React, Node.js) stack and  Implemented features such as user authentication, product management, and shopping cart functionality."
                link="https://jay-ecom-ui.vercel.app"
                github="https://www.github.com/mysteriousmaster01"
                type="Featured Project"
                img={Project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Portfolio V 01"
                link="https://jay-prajapati.vercel.app"
                github="https://github.com/mysteriousmaster01/portfolio"
                type="Portfolio Website"
                img={Project2}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Portfolio V 02"
                link="https://devaslife-portfolio.vercel.app"
                github="https://github.com/mysteriousmaster01/portfoliov02"
                type="Portfolio Website"
                img={Project3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Dipak Restaurant"
                summary="Designed and implemented a responsive user interface for a restaurant application using React JS, showcasing menu items, specials, and location information."
                link="https://restaurant-ui-ten.vercel.app"
                github="https://www.github.com/mysteriousmaster01"
                type="Restaurant Website"
                img={Project4}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
