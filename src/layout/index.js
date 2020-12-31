import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

// this is to ensure props validation for components
// React will throw an error in the console
// whenever there is no child element(s) in the Layout component
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
