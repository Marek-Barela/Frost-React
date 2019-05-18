import React from "react";
import Layout from "../components/layout";
import NotFound from '../components/not-found';
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
