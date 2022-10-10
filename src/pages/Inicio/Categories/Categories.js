import React from 'react';
import './Categories.css';
import portada from './portada.jpg';
import portada1 from './ropa4-byn.jpg';
import portada2 from './ropa3.jpg';
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <>

    <div className='container'>
                    <div className='grid_portada'>
                        <img className='img_portada' src={portada1} alt=''/>
                        <img className='img_portada'  src={portada2} alt=''/>
                        <img className='img_portada'  src={portada} alt=''/>
                    </div>
    </div>
    <div className='container'>
        <div className='grid_categorias'>
            <Link className='grid_categorias_hijo  grid_categorias_hijo-1' to={'/category/Abrigos'}>
                
                    <h3 className='texto_img'>Abrigos</h3>
                
            </Link>


            <Link to={'/category/Pantalones'} className='grid_categorias_hijo grid_categorias_hijo-2'>
                <h3 className='texto_img' >Pantalones</h3>
            </Link>

            <Link to={'/category/Remeras'} className='grid_categorias_hijo grid_categorias_hijo-3'>
                <h3 className='texto_img'>Remeras</h3>
            </Link>
        </div>
        <div className='grid_sales'>
            <div className='grid_categorias_hijo grid_categorias_hijo-4'>
                <h3 className='texto_img'>Sale</h3>
                <button className='button_img'>Ver Mas</button>
            </div>
            <div className='grid_categorias_hijo grid_categorias_hijo-5'>
                <h3 className='texto_img'>New</h3>
                <button className='button_img'>Ver Mas</button>
            </div>


        </div>
    </div>

</>

  )
}

export default Categories