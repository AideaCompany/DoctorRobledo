import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {  Link } from "gatsby"

//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/estetoscopio.json'

const Servicios = () =>{

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        segments: true,
        animationData: animationSlider,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
    };

    return(
    <>
        <SEO title="Servicios" />
        <Layout>
            <div className='mainContainerService'>
                <div className="firstServices">
                    <h1>Estos son mis servicios</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                        elit. Officiis necessitatibus architecto quas laudantium
                        fuga aliquam. Quae dolorem explicabo ducimus quis enim
                        harum doloribus doloremque nostrum, accusantium accusamus,
                        que molestias voluptas.</p>
                        <div className='animationService'>
                            <Lottie
                                options={defaultOptions}
                                width='90vw'
                                height='90vh'
                                />
                        </div>
                </div>
               
                <div className='secondService'>
                    <div className='serviceItem'>
                        <div className='imgService'>
                            <img src="../temp/service.jpg" alt="servicios doctor robledo kaiser "/>
                            <h1>SERVICIO 1</h1>
                        </div>
                        <p className='textService'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Autem nobis repellat inventore sequi provident? Quo fuga, earum
                             eveniet obcaecati quae placeat. Quis voluptatibus corrupti modi a, 
                             eaque quia temporibus qui!
                        </p>
                        <Link className='buttonService' to='/'>
                            Servicio 1
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    </>
    )
}

export default Servicios