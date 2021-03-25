import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import './Main.css'

  const useStyles = makeStyles((theme) => ({}));

export default function LandingPageCarousel() {
  const classes = useStyles();
  return (
      <div className='carouselWrapper'>
        <Carousel className='carousel' infiniteLoop autoPlay
         interval='10000' showThumbs={false} showIndicators={true}
         showArrows={false} showStatus={false} transitionTime='700'>
          <div>
            <img className='image3'  src={process.env.PUBLIC_URL + '/images/Image 3@2x.png'} />
          </div>

          <div>
            <img className='image2'  src={process.env.PUBLIC_URL + '/images/Image 2@2x.png'}  />
          </div>
          
          <div>
            <img className='image1'  src={process.env.PUBLIC_URL + '/images/Image 1@2x.png'}  />
          </div>
        </Carousel>
      </div>
  );
}