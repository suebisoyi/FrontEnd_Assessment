import React, {useEffect, useState, handleScroll} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, IconButton } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import './Main.css'
import MenuProvider from 'react-flexible-sliding-menu';
import { useHistory } from "react-router-dom";
import Application from '../App';
import Pricing from './Pricing';
import Payments from './Payments';
//import './components/HoverOverToReveal'


const useStyles = makeStyles((theme) => ({}));

export default function Header() {
    const classes = useStyles();
    const [sidebar, setSideBar] = useState(false);
    const history = useHistory();
    const showSidebar = () => setSideBar(!sidebar)

    useEffect(() => {
      const handleScroll = () => {
        if((window.scrollY >= 0) && (window.scrollY <= 969)) {
          document.querySelector(".CTAButtonNAVBAR").className = "CTAButtonNAVBAR";
        }

        if ((window.scrollY >= 970) && (window.scrollY <= 1969)) {
          document.querySelector(".CTAButtonNAVBAR").className = "CTAButtonNAVBAR CTAButtonNAVBAR-RedSection";
        }

        if((window.scrollY >= 1970) && (window.scrollY <= 2898)) {
          document.querySelector(".CTAButtonNAVBAR").className = "CTAButtonNAVBAR CTAButtonNAVBAR-YellowSection";
        } 

        if((window.scrollY >= 2902) && (window.scrollY <= 3869)) {
          document.querySelector(".CTAButtonNAVBAR").className = "CTAButtonNAVBAR CTAButtonNAVBAR-PerksSection";
        } 

        if((window.scrollY >= 3870) && (window.scrollY <= 4969)) {
          document.querySelector(".CTAButtonNAVBAR").className = "CTAButtonNAVBAR CTAButtonNAVBAR-ReviewsSection";
        } 
      };
    
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    });



    return(

        <div className='root'>
            <AppBar className='appbar' position="fixed" color="transparent" elevation={0}>
              <Toolbar className='appbarWrapper'>
                  <IconButton className='iconButton'>
                    <MenuIcon className='sorticon'/>
                  </IconButton> 
                  <Typography className='appTitle' variant="h3" component="h3" onClick={() => history.push('/')}>
                      EXP|CON
                  </Typography>
                  {/*<nav>
                  <BrowserRouter>
                    <div className="App">
                      <Switch>
                        <Route exact path='/' component={Application} />
                        <Route exact path='/Pricing' component={Pricing}  />
                        <Route exact path='/Payments'component={Payments}  />
                      </Switch>
                    </div>
                  </BrowserRouter>
                  </nav>*/}
                  {/* Side Navigation Bar 
                  <nav>
                  
                </nav>*/}
                <div style={{marginLeft:'1300px'}}>
                  <Button className='CTAButtonNAVBAR' onClick={() => history.push('/Pricing')}>
                    <span className='CTAButtonTextNAVBAR'>TRY IT NOW</span>
                  </Button>
                </div> 
              </Toolbar>
            </AppBar>
        </div>
    )
}