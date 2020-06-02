import React  from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'


import { graphql , Link } from "gatsby"

//FullPage
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage'

//antd
import {List , Card} from 'antd'
const {Meta} = Card


const Biblioteca = ({data}) =>{
    const dataQuery = data.allStrapiBlogs.edges

        const URL = 'http://45.55.55.128:1337'

        const dataList = []
        const dataMain = []
    
        for (let k = 0; k < dataQuery.length; k++) {
            if (k === 0) {
                dataMain.push({
                    title: dataQuery[k].node.titulo,
                    description: dataQuery[k].node.resumen,
                    createAt: dataQuery[k].node.created_at,
                    id: dataQuery[k].node.id,
                    img : `${URL}${dataQuery[k].node.imagen[0].url}`
                }) 
            }else{
                if (dataQuery[k].node.activo) {
                    dataList.push({
                        title: dataQuery[k].node.titulo,
                        description: dataQuery[k].node.resumen,
                        createAt: dataQuery[k].node.created_at,
                        id: dataQuery[k].node.id,
                        img : `${URL}${dataQuery[k].node.imagen[0].url}`
    
                    }) 
                }  
            }
           
        }


    


    
    return(
        
        <>
        <SEO title="Biblioteca" />
        <Layout>
            
            <div className='mainContainerBiblioteca'>
            <Fullpage>
                <FullPageSections>
                    <FullpageSection>
                    <div className='firstBiblioteca'>
                        <h1>Biblioteca</h1>
                        <p>Encuentra diversas noticias y articulos de interés</p>
                        <div className='animationBiblioteca'>
                            <img src="../temp/biblioteca.svg" alt="biblioteca articulos doctor robledo kaiser "/>
                        </div>
                    </div>
                    </FullpageSection>
                    <FullpageSection>
                    <div className='secondBiblioteca'>
                        <div className='mainBlog'>
                                {dataMain.map(data=>(
                                    <Card bordered={false} style={{width: '100%'}} cover={<img className='imgCard' style={{objectFit: "cover"}} alt={data.title} src={data.img}></img>}>
                                        <Link className='metaMain' to={`/${data.id}`}>
                                            <Meta title={<h1 style={{fontWeight: "bold"}}>{data.title}</h1>} description={data.description} />
                                        </Link>
                                    </Card>
                                ))}
                                
                        </div>
                        <div className='listBlog'>
                            <List   itemLayout="vertical"
                                    size="small"
                                    pagination={{pageSize: 3 , size: "small", position: "top"}}
                                    dataSource={dataList}
                                    renderItem={item=> (
                                        <List.Item width={'100%'} key={item.id}>
                                            <List.Item.Meta
                                                title={item.title}/>
                                                <Link to={`/${item.id}`} className='contentList'>
                                                    <p>{item.description}</p>
                                                    <img src={item.img} alt={item.title}/>
                                                </Link>
                                        </List.Item>
                                    )}
                                    />
                        </div>
                    </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
                
                
                
            </div>
        </Layout>
        </>
    )
}

export default Biblioteca

export const pageQuery = graphql`
query {
    allStrapiBlogs {
        edges {
            node {
                activo
                contenido
                id
                created_at
                strapiId
                titulo
                resumen
                imagen {
                    url
                }
            }
        }
    }
}`