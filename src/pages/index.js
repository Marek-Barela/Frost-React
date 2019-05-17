import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import ClickAndShareSubsection from "../components/click-and-share";
import Projects from '../components/projects';
import UniqueThingsSubsection from '../components/unique-things';
import About from '../components/about';
import CounterSubsection from '../components/counter-subsection';
import Pricing from '../components/pricing';
import QuoteSubsection from '../components/quote-subsection';
import Contact from '../components/contact';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`frost`, `application`, `react`]} />
    <Hero />
    <Services />
    <ClickAndShareSubsection />
    <Projects />
    <UniqueThingsSubsection />
    <About />
    <CounterSubsection />
    <Pricing />
    <QuoteSubsection />
    <Contact />
  </Layout>
)

export default IndexPage
