import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, TwitterIcon, PinterestIcon } from "./Icons";

import {motion} from 'framer-motion';
import CustomLink from "./CustomLink";


const Navbar = () => {
  return (
    <header className="w-full pl-[3%] pr-[3%] px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://twitter.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
        <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com/mysteriousmaster01" target="_blank"
        className="w-6 mx-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <GithubIcon/>
        </motion.a>
        <motion.a href="https://linkedin.com/jay.prajapati.021" target="_blank"
        className="w-6 mx-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://instagram.com/jay.prajapati.021" target="_blank"
        className="w-6 ml-3"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
          <PinterestIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo title="JP" className='text-2xl'/>
      </div>
    </header>
  );
};

export default Navbar;
