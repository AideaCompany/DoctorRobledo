/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from '../components/header'

//graphql

import {graphql} from 'gatsby'

import "./layout.css"
import './css/index.css'


const Layout =  ({ children }) => {

  //  graphql(`
  // query {
  //   allWordpressPost(sort: { fields: [date] }) {
  //     edges {
  //       node {
  //         title
  //         excerpt
  //       }
  //     }
  //   }
  // }`).then(result=> console.log(result))


  const style = {
    backgroundColor : "#fff"
  }

  return (
    <>
        <Header/>
        <main style={style}>{children}</main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
