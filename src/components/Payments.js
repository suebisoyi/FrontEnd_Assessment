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
import Form from 'react-bootstrap/Form'
import Feedback from 'react-bootstrap/Feedback'
import FormCheck from 'react-bootstrap/FormCheck'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from 'react-bootstrap/Col'
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import './Main.css'

const Payments = () => {
    const [radioValue, setRadioValue] = useState("foo");
    const radios = [
      { name: "Basic", value: "Basic" },
      { name: "Advanced", value: "Advaced" },
      { name: "Pro", value: "Pro" }
    ];
    return (
        <div>
            <section className='sectionUnderNavBackground'></section>
            <section className='paymentForm'>
                <h1 className='sloganTextPAYMENT'>PAYMENT</h1>
                <Form>
                    <h3 className='selectYourPlanTitle'>1. Select your plan</h3>
                    <ButtonGroup toggle className='selectYourPlanRadioGroup'>
                        {radios.map((radio, index) => (
                        <ToggleButton
                            key={index}
                            type="radio"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={e => setRadioValue(e.currentTarget.value)}>
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div className='twoStepGrid'>
                        <div class='billingInformationStep'>
                            <h3 className='billingInformationTitle'>2. Billing Information</h3>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFullName">
                                    <Form.Label className='fullNameLabel'>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label className='billingAddressLabel'>Billing Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label className='cityLabel'>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label className='postalCodeLabel'>Postal Code</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label className='countryLabel'>Country</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </div>

                        <div className='creditCardInformation'>
                            <h3 className='billingInformationTitle'>3. Credit Card Information</h3>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCardHolderFullName">
                                    <Form.Label className='cardHolderNameLabel'>Card Holder's Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridCarNumber">
                                <Form.Label className='cardNumberLabel'>Card Number</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridExpiryMonth">
                                    <Form.Label className='expiryMonthLabel'>Expiry Month</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formExpiryYear">
                                    <Form.Label className='expiryYearLabel'>Expiry Year</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCvv">
                                    <Form.Label className='cvvLabel'>CVV</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                        </div>

                    </div>

                    <h3 className='termsAndConditionsTitle'>By continuing, I acknowledge that I’ve read and agree to
                    the <span style={{color:'#2F1FE9'}}> Terms of Service </span> & <span style={{color:'#2F1FE9'}}>Privacy Policy</span>.</h3>
                    <button className='downloadButton' variant="primary" type="submit">
                        <span className='buttonName'>Download</span>
                    </button>
                </Form>
            </section>

            {/* Section 2: Contact Us [Footer] */}
            <section className='sectionFooter spacing'>
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

export default Payments
