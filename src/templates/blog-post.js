import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostsTemplate = ({data}) => { 
    const URL = 'http://45.55.55.128:1337'
    return(
        <>
        <SEO title={data.strapiBlogs.titulo} />
        <Layout>
            <div className='mainContainerTemplate'>
                <h1 className='titleTemplate'>{data.strapiBlogs.titulo}</h1>
                <img className='mainImgTemplate' src={`${URL}${data.strapiBlogs.imagen[0].url}`} alt={data.strapiBlogs.titulo}/>
                <p className='contentTemplate'>{data.strapiBlogs.contenido} <br/> {data.strapiBlogs.contenido} </p>
            </div>
        </Layout>
        </>
    )}

export default BlogPostsTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
        titulo
        created_at
        contenido
        activo
        imagen {
        url
        }

    }
  }`