import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import ClickAndShare from "../components/click-and-share";
import Projects from '../components/projects';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`frost`, `application`, `react`]} />
    <Hero />
    <Services />
    <ClickAndShare />
    <Projects />
  </Layout>
)

export default IndexPage
