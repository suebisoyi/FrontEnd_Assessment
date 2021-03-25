import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Icon, Button, Collapse} from '@material-ui/core';
import Header from './Header';
import ScrollAnimation from 'react-animate-on-scroll';
import { useHistory } from "react-router-dom";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmailIcon from '@material-ui/icons/Email';
import './Main.css'

const useStyles = makeStyles((theme) => ({
    PricingPageRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  }));

const Pricing = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.PricingPageRoot}>
            <section className='sectionPricing'>
                <div className='containerPRICING'>
                    <h1 className='sloganTextPRICING'>PRICING</h1>
                    <h3 className='decriptionTextPRICING'>Test out our app today! Choose from three subscription <br /> Based payment models.</h3>

                    <section className='pricesContainer'>
                        <div className='priceOne'>
                            <h1 className='priceOneTier'>BASIC</h1>
                            <div className='priceOneLineDivider'></div>
                            <h1 className='priceOneType'>MONTHLY</h1>
                            <h1 className='priceOneCost'>$9</h1>
                            <h3 className='priceOneDescription'>
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Very good <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Amazing <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Perfect job <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Love this <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>It’s so good <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Features
                            </h3>
                            <div className='CTAButtonOneContainer'>
                                <button className='CTAButtonOnePRICING' onClick={() => history.push('/Payments')}>
                                    <span className='CTAButtonTextOnePRICING'>SELECT</span>
                                </button>
                            </div> 
                        </div>
                        <div className='priceTwo'>
                            <h1 className='priceTwoTier'>ADVANCED</h1>
                            <div className='priceTwoLineDivider'></div>
                            <h1 className='priceTwoType'>YEARLY</h1>
                            <h1 className='priceTwoCost'>$99</h1>
                            <h3 className='priceTwoDescription'>
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Very very good <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Even Amazing <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Perfect job <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Love this more<br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>It’s so so good <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>More Features
                            </h3>
                            <div className='CTAButtonTwoContainer'>
                                <button className='CTAButtonTwoPRICING' onClick={() => history.push('/Payments')}>
                                    <span className='CTAButtonTextTwoPRICING'>SELECT</span>
                                </button>
                            </div> 
                        </div>
                        <div className='priceThree'>
                            <h1 className='priceThreeTier'>PRO</h1>
                            <div className='priceThreeLineDivider'></div>
                            <h1 className='priceThreeType'>YEARLY</h1>
                            <h1 className='priceThreeCost'>$120</h1>
                            <h3 className='priceThreeDescription'>
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Very very good <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Even more <br />
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Perfect job <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>Love this more <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>It’s so so good <br /> 
                                <MusicNoteIcon style={{width: '35px', height: '33px'}}></MusicNoteIcon>More Features
                            </h3>
                            <div className='CTAButtonThreeContainer'>
                                <button className='CTAButtonThreePRICING' onClick={() => history.push('/Payments')}>
                                    <span className='CTAButtonTextThreePRICING'>SELECT</span>
                                </button>
                            </div> 
                        </div>
                    </section>
                </div>
            </section>

            {/* Section 2: PERKS */}
            <section className='sectionPerksPricing'>
                <div className='containerPERKS'>
                <h1 className='sloganTextPERKS'>Perks</h1>

                <section className='perksContainer'>
                    <div className='perkOneSPM'>
                    <div className='perkOneLineDividerPricing'></div>
                    <h1 className='perkOneTitlePricing'>Subscription Payment Model</h1>
                    <h3 className='perkOneDescriptionPricing'>No commitment, <br />
                        cancel anytime. Never <br />
                        worry about forgetting <br />
                        a payment again!</h3>
                    </div>
                    <div className='perkTwoNFCP'>
                    <div className='perkTwoLineDividerPricing'></div>
                    <h1 className='perkTwoTitlePricing'>No Fee Cancellation Policy</h1>
                    <h3 className='perkTwoDescriptionPricing'>No commitment, <br />
                        cancel anytime. Never <br />
                        worry about forgetting <br />
                        a payment again!
                    </h3>
                    </div>
                    <div className='perkThreeSPM'>
                    <div className='perkThreeLineDividerPricing'></div>
                    <h1 className='perkThreeTitlePricing'>Subscription Payment Model</h1>
                    <h3 className='perkThreeDescriptionPricing'>No commitment, <br />
                        cancel anytime. Never <br />
                        worry about forgetting <br />
                        a payment again!
                    </h3>
                    </div>
                </section>
                </div>
            </section>

             {/* Section 3: Contact Us [Footer] */}
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

export default Pricing
