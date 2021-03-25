import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import { CssBaseline, Icon, Button, Collapse} from '@material-ui/core';
import LandingPageCarousel from './LandingPageCarousel'
import StarIcon from '@material-ui/icons/Star';
import EmailIcon from '@material-ui/icons/Email';
import ScrollAnimation from 'react-animate-on-scroll';
import JQuery from 'jquery'
import { useHistory } from "react-router-dom";
import "animate.css/animate.min.css";
import './Main.css'

const useStyles = makeStyles((theme) => ({
    landingPageDataRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  }));
const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
    return (

        <div className={classes.landingPageDataRoot}>
        <CssBaseline /> 
        {/* Image Carousel that is in the background of the landing page */}
        <section>
          <LandingPageCarousel claseName='landingPageCarousel'/>
        </section>
  
        {/* Section 1: Hero */}
        <section className='landingHeroPage'>
          <Collapse in={checked} { ...(checked ? {timeout: 1000 } : {})}
          collapsedHeight={50} disableStrictModeCompat={false}>
            <div className='sloganAndCTASection'>
              <h1 className='sloganText'>INTERACTIVE CONCERT EXPERIENCE</h1>
              <h3 className='descriptiveText'>Experience your favourite artists like never <br /> before and from the 
                comfort of your own home.
              </h3>
              <button className='CTAButtonLandingPage' onClick={() => history.push('/Pricing')}>
                <span className='CTAButtonTextLandingPage'>TRY IT NOW</span>
              </button>
            </div>
          </Collapse>
        </section>
  
        {/* Section 2: RED */}
        <section className='sectionRED'>
          <div className='containerRED'>
            <ScrollAnimation animatePreScroll={false} animateIn='animate__bounceIn'>
              <h1 className='sloganTextRED'>SUPERIOR SOUND</h1>
            </ScrollAnimation>
            <ScrollAnimation animatePreScroll={false} animateIn='animate_fadeInLeft' animateOut='animate__hinge'>
              <h3 className='descriptiveTextRED'>Experience live versions of your <br /> 
                favourite songs.
              </h3>
            </ScrollAnimation>
              <div>
                <button className='CTAButton CTAButtonRED'>
                  <span className='CTAButtonText CTAButtonTextRED'>SEE DEMO</span>
                </button>
              </div>
  
              <ScrollAnimation animatePreScroll={false} animateIn='animate__bounceInDown' animateOut='animate__backOutDown'>
                <div className='medium17SpeakerRED'>
                  <img style={{width:'48%'}} src={process.env.PUBLIC_URL + '/images/medium17@2x.png'} />
                </div>
              </ScrollAnimation>
  
              <ScrollAnimation animatePreScroll={false} animateIn='animate__bounceInUp' animateOut='animate__backOutUp'>
                <div className='medium27SpeakerRED'>
                  <img style={{width:'48%'}} src={process.env.PUBLIC_URL + '/images/medium27@2x.png'} />
                </div>
              </ScrollAnimation>
          </div>
        </section>
  
        {/* Section 3: YELLOW */}
        <section className='sectionYELLOW'>
          <div className='containerYELLOW'>
           {/*<div className='hiddenBackgroundRevealedOnMouseOver'></div>*/}
            <h1 className='sloganTextYELLOW'>FRONT ROW SEATS</h1>
            <h3 className='descriptiveTextYELLOW'>Experience concerts up close <br /> 
              and personal.
            </h3>
            <div>
              <button className='CTAButton CTAButtonYELLOW'>
                <span className='CTAButtonText CTAButtonTextYELLOW'>SEE DEMO</span>
              </button>
            </div>        
          </div>
        </section>
  
        {/* Section 4: PERKS */}
        <section className='sectionPerks'>
          <div className='containerPERKS'>
            <h1 className='sloganTextPERKS'>Perks</h1>
  
            <section className='perksContainer'>
              <div className='perkOneSPM'>
                <div className='perkOneLineDivider'></div>
                <h1 className='perkOneTitle'>Subscription Payment Model</h1>
                <h3 className='perkOneDescription'>No commitment, <br />
                  cancel anytime. Never <br />
                  worry about forgetting <br />
                  a payment again!</h3>
              </div>
              <div className='perkTwoNFCP'>
                <div className='perkTwoLineDivider'></div>
                <h1 className='perkTwoTitle'>No Fee Cancellation Policy</h1>
                <h3 className='perkTwoDescription'>No commitment, <br />
                  cancel anytime. Never <br />
                  worry about forgetting <br />
                  a payment again!
                </h3>
              </div>
              <div className='perkThreeSPM'>
              <div className='perkThreeLineDivider'></div>
                <h1 className='perkThreeTitle'>Subscription Payment Model</h1>
                <h3 className='perkThreeDescription'>No commitment, <br />
                  cancel anytime. Never <br />
                  worry about forgetting <br />
                  a payment again!
                </h3>
              </div>
            </section>
          </div>
        </section>
  
        {/* Section 5: REVIEWS */}
        <section className='sectionReviews'>
          <div className="containerREVIEWS">
            <h1 className='sloganTextREVIEWS'>REVIEWS</h1>
  
            <section className='reviewsContainer'>
              <div className='reviewOne'>
                <div className='fiveStarsContainer'>
                  <StarIcon className='starIcon' style={{width: '35px', height: '33px'}}></StarIcon>
                  <StarIcon className='starIcon' style={{width: '35px', height: '33px'}}></StarIcon>
                  <StarIcon className='starIcon' style={{width: '35px', height: '33px'}}></StarIcon>
                  <StarIcon className='starIcon' style={{width: '35px', height: '33px'}}></StarIcon>
                  <StarIcon className='starIcon' style={{width: '35px', height: '33px'}}></StarIcon>
                </div>
                <h3 className='reviewerNameOne'>ARTIST</h3>
                <h3 className='reviewDescriptionOne'>“Love it, it’s the <br /> 
                  Best. I can’t live <br /> without it!”
                </h3>
              </div>
              <div className='reviewTwo'>
                <div className='fiveStarsContainer1'>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                </div>
                <h3 className='reviewerNameTwo'>PRODUCER</h3>
                <h3 className='reviewDescriptionTwo'>“Love it, it’s the <br /> 
                  Best. I can’t live <br /> without it!”
                </h3>
              </div>
              <div className='reviewThree'>
                <div className='fiveStarsContainer2'>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                    <StarIcon style={{width: '35px', height: '33px'}}></StarIcon>
                </div>
                <h3 className='reviewerNameThree'>MUSIC FAN</h3>
                <h3 className='reviewDescriptionThree'>“Love it, it’s the <br /> 
                  Best. I can’t live <br /> without it!”
                </h3>
              </div>
            </section>
  
            <div className='speakerImage1Container'>
              <img className='smallSpeaker1Image' src={process.env.PUBLIC_URL + '/images/SmallSpeaker1-03@2x.png'} />
            </div>
  
            <div className='speakerImage2Container'>
              <img className='smallSpeaker2Image' src={process.env.PUBLIC_URL + '/images/SmallSpeaker2-03@2x.png'} />
            </div>
          </div>
        </section>
  
        {/* Section 6: GET EXP|CON NOW! */}
        <section className='sectionGetAppNow'>
          <div className='containerGETAPPNOW'>
            <h1 className='sloganTextGetAppNow'>GET EXP|CON NOW</h1>
            <h3 className='decriptionTextGetAppNow'>Purchase and download the app</h3>
              <button className='CTAButton CTAButtonGETAPPNOW' onClick={() => history.push('/Pricing')}>
                <span className='CTAButtonText CTAButtonTextGETAPPNOW'>TRY IT NOW</span>
              </button> 
          </div>
        </section>
  
        {/* Section 7: Contact Us [Footer] */}
        <section className='sectionFooter'>
          <div className='containerFOOTER'>
            <EmailIcon className='emailIcon' style={{width: '35px', height: '33px', color: 'white'}}></EmailIcon>
            <h3 className='companyEmail'>support@experienceconcerts.com</h3>
            <h2 className='companyName'>EXP|CON</h2>
            <h3 className='companyTradeMark'>2019 © All Rights Reserved | Speer Technologies Incorporated | Sudikshya Bisoyi</h3>
          </div>
        </section>
      </div>
    )
}

export default Home
