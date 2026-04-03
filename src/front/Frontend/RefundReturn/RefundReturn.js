import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import InnerBanner from '../InnerBanner/InnerBanner';
import Content from './Content/Content';


const About=()=>{
    return (
        <div className="main-aboutpage">
        <Navbar/>
        <InnerBanner/>
        <Content/>
        <Footer/>
        </div>
    )
}

export default About;