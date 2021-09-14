import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TagSelector from "../components/TagSelector";

const index = () => {
  return (
    <Layout>
      <Hero />
      <TagSelector />
    </Layout>
  );
};

export default index;
