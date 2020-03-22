import React, { useEffect,useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './components/Header';
import HomeCorosal from './components/HomeCorosal';
import About from './components/About';
import Offerings from './components/Offerings';
import Product from './components/Product';
import Services from './components/Services';
import SplashScreen from './components/SplashScreen';

function App() {
    const [showSplash,hideSplash] = useState(true);
   
    if(showSplash){
        return(
            <SplashScreen showHome = {()=>hideSplash(false)} />
        )
    }
    return (
            <div>
            <Header/>
            <Container id = {'home'} fluid style = {Style.container}>
                <Row >
                    <HomeCorosal/>
                </Row>               
            </Container>
            <Container fluid style = {Style.about}>
                <Row id = {'about'}>
                     <Col>
                    <About/>
                     </Col>
                  </Row>       
            </Container>
            <Container fluid style = {Style.about}>
                <Row id = {'services'} >
                     <Col>
                     <Offerings />
                     <Product/>
                    <Services />
                    </Col>
                  </Row>       
            </Container>
            </div>
    )
}

const Style = {
    container: {
        backgroundColor: 'rgb(248,249,249)',
        paddingLeft: '2%',
        paddingRight: '2%',
        height:'100%',
        display: 'flex',
        flex:1
    },
    about:{
        paddingTop: 100,
        paddingLeft: '4%',
        paddingRight: '4%',
        height:'100%',
        display: 'flex',
        flex:1
    },
    headerContainer:{
        backgroundColor:'black',
        height:70
    }
}
export default App
