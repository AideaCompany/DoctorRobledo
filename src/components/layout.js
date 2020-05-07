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

import {graphql} from 'gatsby'
import 'antd/dist/antd.css';
import "./layout.css"
import './css/index.css'



const Layout =  ({ children }) => {


  useEffect(() => {
    console.log("hi")
  }, [])


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
