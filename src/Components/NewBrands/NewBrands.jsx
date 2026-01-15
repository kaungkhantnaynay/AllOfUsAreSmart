import React from 'react';
import './NewBrands.css';
import new_brand1 from '../../assets/Adidas_new.jpg';
import new_brand2 from '../../assets/NewBalance-530.jpg';
import new_brand3 from '../../assets/Nike_new.jpeg';
import new_brand4 from '../../assets/Puma_new.jpg';
import new_brand5 from '../../assets/Converse_new.jpg';
import new_brand6 from '../../assets/Skechers_new.jpeg';
import Title from '../Title/Title';
import { Slide } from "react-awesome-reveal";

function NewBrands() {
  return (
    <Slide duration={2000}>
      <div>
        <Title subTitle='Our Brands' title='Brands We Offer' />
        <div className='new_brands'>
            <div className='brand' data-label="ADIDAS">
                        <img src={new_brand1} alt="Adidas" />
                    </div>
                    <div className='brand' data-label="NEW BALANCE">
                        <img src={new_brand2} alt="New Balance" />
                        
                    </div>
                    <div className='brand' data-label="NIKE">
                        <img src={new_brand3} alt="Nike" />
                        
                    </div>
                    <div className='brand' data-label="PUMA">
                        <img src={new_brand4} alt="Puma" />
                        
                    </div>
                    <div className='brand' data-label="CONVERSE">
                        <img src={new_brand5} alt="Converse" />
                        
                    </div>
                    <div className='brand' data-label="SKECHERS">
                        <img src={new_brand6} alt="Skechers" />
                        
                    </div>
        </div>
      </div>
    </Slide>
  )
}

export default NewBrands;
