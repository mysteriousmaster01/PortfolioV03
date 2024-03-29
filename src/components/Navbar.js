import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useRouter } from "next/router";

const CustomMobileLink = ({ href, title, className = "",toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2 z-10 lg:px-16 md:px-12 sm:px-8`} onClick={handleClick}>
      {title}

      <span
        className={`
            h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const btnRef = useRef();
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener("click",(e) => {
      if(e.target !== menuRef.current && e.target !== btnRef.current){
        setIsOpen(false);
      }
    })
  }, []);

  
  
  return (
    <header className="w-full pl-[3%] pr-[3%] px-32 py-8 font-medium flex items-center justify-between dark:text-light">

        <button ref={btnRef} className="flex-col justify-center items-center hidden lg:flex p-4" onClick={handleClick}>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      
      <div className="w-full flex justify-between items-center lg:hidden">
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/mysteriousmaster01"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com/jay.prajapati.021"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com/jay.prajapati.021"
          target="_blank"
          className="w-6 ml-3 bg-light rounded-full"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>

        <button
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-black text-light" : "bg-light text-dark"}`}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </div>
      
      {
        isOpen ? (
        <motion.div ref={menuRef}
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
        <CustomMobileLink href="/contact" title="Contact" className="" toggle={handleClick} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/mysteriousmaster01"
          target="_blank"
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com/jay.prajapati.021"
          target="_blank"
          className="w-6 mx-3 sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com/jay.prajapati.021"
          target="_blank"
          className="w-6 ml-3 bg-light rounded-full sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>

        <button
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-black text-light" : "bg-light text-dark"}`}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </motion.div> ) : null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%] z-10">
        <Logo title="JP" className="text-2xl" />
      </div>
    </header>
  );
};

export default Navbar;
