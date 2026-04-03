import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import CategoryList from './CategoryList/CategoryList';
import ProductList from './ProductList/ProductList';
import ContentPart from './ContentPart/ContentPart';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';


const Home=()=>{
    return (
        <div>
        <Navbar/>
        <Banner/>
        <CategoryList />
            <ProductList />
            <ContentPart />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    )
}

export default Home;