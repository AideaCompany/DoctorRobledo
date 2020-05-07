import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'


import { StaticQuery, graphql } from "gatsby"


const Biblioteca = () =>{
    return(
        <>
        <SEO title="Biblioteca" />
        <Layout>
        <StaticQuery
            query={graphql`
                query {
                    allStrapiBlogs {
                        edges {
                        node {
                            contenido
                            fecha
                            id
                            strapiId
                            titulo
                        }
                        }
                    }
                }
            `}
            render={data => {
                
                return(
                
                <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>Strapi blog</h1>
                    {data.allStrapiBlogs.edges.map((blog , i)=>{
                        return(
                             <div className='blog'>{blog.node.contenido}</div> 
                        )
                    })}
                     
                </div>
                </div>
            )}}
            /> 
        </Layout>
        </>
    )
}

export default Biblioteca