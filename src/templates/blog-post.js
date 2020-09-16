import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import marked from 'marked'

const BlogPostsTemplate = ({data}) => { 
    const URL = 'https://gestion.drgabrielrobledo.com'

    const getMarkdownText = ()=>{
        var rawMarkup = marked(data.strapiBlogs.contenido, {sanitize : true})
        return rawMarkup
    }

    

    return(
        <>
        <SEO title={data.strapiBlogs.titulo} />
        <Layout>
            <div className='mainContainerTemplate'>
                <h1 className='titleTemplate'>{data.strapiBlogs.titulo}</h1>
                <div className='containerTextBlog'>
                    <img className='mainImgTemplate' src={`${URL}${data.strapiBlogs.image[0].url}`} alt={data.strapiBlogs.titulo}/>
                    <div className='contentTemplate' dangerouslySetInnerHTML={{__html:getMarkdownText()}}/>
                    <div className="creditos">
                        <p>Escrito por: Dr Gabriel Robledo Kaiser</p>
                        <p>Fecha : {data.strapiBlogs.createdAt.split('T')[0]}</p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )}

export default BlogPostsTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiBlogs(id: {eq: $id}) {
        titulo
        createdAt
        contenido
        activo
        image {
            url
        }
    }
  }`