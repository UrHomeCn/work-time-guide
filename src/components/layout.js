/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-start flex-1 max-w-6xl px-4 py-8 md:py-12">
        {children}
      </main>
      <footer className="mb-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          className="text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"
          href="https://www.gatsbyjs.com"
        >
          Gatsby
        </a>
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
