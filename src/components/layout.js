/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Header from '../components/header'

//graphql
import 'antd/dist/antd.css';
import "./layout.css"
import './css/index.css'




const Layout =  ({ children }) => {


  return (
    <>
        <Header/>
        <main>{children}</main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
