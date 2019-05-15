import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import "./layout.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
