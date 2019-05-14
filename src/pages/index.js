import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`frost`, `application`, `react`]} />
    <Hero />
  </Layout>
)

export default IndexPage
