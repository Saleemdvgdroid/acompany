import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Offerings from './Offerings';
import Product from './Product';
import Services from './Services';

function ProductServices() {
    return (
        <div style={{ paddingLeft: 50, paddingRight: 50, width: "100%",paddingTop:'6%' }}>
        <Carousel
          width = '100'
          autoPlay={false}
          transitionTime={2200}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <Offerings />
          </div>

        

          <div>
            <Product />
        </div>
          <div>
            <Services/>
          </div>
          
        </Carousel>
      </div>
    )
}

export default ProductServices
