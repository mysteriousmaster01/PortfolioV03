import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-5 flex items-center justify-between lg:flex-col lg:py-6 xl:py-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <CustomLink href="/contact" title="Jay Prajapati" />
      </Layout>
    </footer>
  );
};

export default Footer;
