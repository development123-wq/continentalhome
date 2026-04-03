import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import '../../../assets/css/common.css';
import Image from "next/image";


const InnerBanner = () => {
  const location = useLocation();
  const [pageTitle, setTitle] = useState('');
  const [bannerImage, setBannerImage] = useState('');

  const pageTitles = {
    '/': 'Home',
    '/about': 'About Us',
    '/privacy-policy': 'Privacy Policy',
    '/terms-and-conditions': 'Terms and Conditions',
    '/shop': 'All Products',
    '/blogs': 'Our Blogs',
    '/contact': 'Contact Us',
    '/faqs': 'Frequently Asked Questions',
    '/small-ceramics': 'Small Ceramics',
    '/home-decor': 'Home Decor',
    '/ceramic-lamps': 'Ceramic Lamps',
    '/ceramic': 'Ceramic',
    '/ceramic-vases': 'Ceramic Vases',
    '/driftwood-lamps': 'Drift Wood Lamps',
    '/floor-lamps': 'Floor Lamps',
    '/havana-lamp-collection': 'Havana Lamp Collection',
    '/lamp-collections': 'Lamp Collection',
    '/natural-vine': 'Natural Vine',
    '/decorative-objects': 'Decorative Objects',
    '/sculptural-pieces': 'Sculptural Pieces',
    '/new-ceramics': 'New Ceramics',
    '/new-arrivals': 'New Arrivals',
    '/rope-lamps': 'Rope Lamps',
    '/rope': 'Rope',
    '/salvaged-unique-lamps': 'Salvaged Unique Lamps',
    '/teak-lamps': 'Teak Lamps',
    '/teak': 'Teak',
    '/lighting': 'Lighting',
    '/product-details': 'Product Details',
    '/add-to-cart': 'Cart',
    '/table-lamps': 'Table Lamps',
    '/octopus-theme': 'Octopus Theme',
    '/green-ceramics': 'Green Ceramics',
    '/earth-tone-ceramics': 'Earth Tone Ceramics',
    '/cream-ceramics': 'Cream Ceramics',
    '/ceramic-vases': 'Ceramics Vases',
    '/ceramic-platters': 'Ceramic Platters',
    '/ceramic-plates': 'Ceramic Plates',
    '/ceramic-bowls': 'Ceramic Bowls',
    '/blue-ceramics': 'Blue Ceramics ',
     '/white-ceramic-lamps': 'White Ceramic Lamps',
    '/earth-tone-ceramic-lamps': 'Earth Tone Ceramic Lamps',
    '/cream-ceramic-lamps': 'Cream Ceramic Lamps',
    '/ceramic-pineapple-lamps': 'Ceramic Pineapple Lamps',
    '/ceramic-coral-lamps': 'Ceramic Coral Lamps',
    '/blue-ceramic-lamps': 'Blue Ceramic Lamps',
    '/new-wooden-lamps': 'New Wooden Lamps',
    '/new-rope-lamps': 'New Rope Lamps',
    '/new-ceramics': 'New Ceramics',
    '/driftwood-table-lamps': 'Driftwood Table Lamps',
    '/driftwood-floor-lamps': 'Driftwood Floor Lamps',
    '/driftwood': 'Driftwood',
    '/salvaged-unique-lamps': 'Salvaged Unique Lamps',
    '/unique-lamps': 'Unique Lamps',
    '/salvaged-lamps': 'Salvaged Lamps',
    '/checkout': 'Checkout',
    '/productdetails': 'Product Detail',
    '/users': 'Welcome Back Dear!',
    '/capiz-lamps':'Capiz Lamps',
    '/capiz':'Capiz',
    '/refund-policy':'Refund Policy',
    '/wishlist':'Wishlist'

  };

  const pageBackgrounds = {
    '/': 'home.jpg',
    '/about': 'about.jpg',
    '/users': 'about.jpg',
    '/blogs': 'about.jpg',
    '/faqs': 'about.jpg',
    '/wishlist': 'about.jpg',
    '/refund-policy': 'about.jpg',
    '/terms-and-conditions': 'about.jpg',
    '/privacy-policy': 'about.jpg',
    '/contact': 'about.jpg',
    '/shop': 'banner-bottom.jpg',
    '/small-ceramics': 'small-ceramics.jpg',
    '/home-decor': 'small-ceramics.jpg',
    '/ceramic-lamps': 'ceramic-lamp.jpg',
    '/ceramic': 'ceramic-lamp.jpg',
    '/white-ceramic-lamps': 'ceramic-lamp.jpg',
    '/earth-tone-ceramic-lamps': 'ceramic-lamp.jpg',
    '/cream-ceramic-lamps': 'ceramic-lamp.jpg',
    '/ceramic-pineapple-lamps': 'ceramic-lamp.jpg',
    '/ceramic-coral-lamps': 'ceramic-lamp.jpg',
    '/blue-ceramic-lamps': 'ceramic-lamp.jpg',
     

    '/ceramic-vases': 'ceramic-vases.jpg',
    '/octopus-theme': 'ceramic-vases.jpg',
    '/green-ceramics': 'ceramic-vases.jpg',
    '/earth-tone-ceramics': 'ceramic-vases.jpg',
    '/cream-ceramics': 'ceramic-vases.jpg',
    '/ceramic-vases': 'ceramic-vases.jpg',
    '/ceramic-platters': 'ceramic-vases.jpg',
    '/ceramic-plates': 'ceramic-vases.jpg',
    '/ceramic-bowls': 'ceramic-vases.jpg',
    '/blue-ceramics': 'ceramic-vases.jpg',

    '/driftwood-lamps': 'driftwood-lamps.jpg',
    '/driftwood-table-lamps': 'driftwood-lamps.jpg',
    '/table-lamps': 'driftwood-lamps.jpg',
    '/driftwood-floor-lamps': 'driftwood-lamps.jpg',
    '/driftwood': 'driftwood-lamps.jpg',
    '/floor-lamps': 'floor-lamps.jpg',
    '/havana-lamp-collection': 'havana.jpg',
    '/lamp-collections': 'havana.jpg',
    '/natural-vine': 'vine-lamps.jpg',
    '/new-ceramics': 'new-ceramics.jpg',
    '/decorative-objects': 'new-ceramics.jpg',
    '/sculptural-pieces': 'new-ceramics.jpg',
    '/new-arrivals': 'new-arrivals.jpg',
    '/new-wooden-lamps': 'new-arrivals.jpg',
    '/new-rope-lamps': 'new-arrivals.jpg',
    '/new-ceramics': 'new-arrivals.jpg',

    '/capiz-lamps':'Capiz-banner.jpg',
    '/capiz':'Capiz-banner.jpg',


    '/rope-lamps': 'rope-lamps.jpg',
    '/rope': 'rope-lamps.jpg',
    '/salvaged-unique-lamps': 'salvaged.jpg',
    '/unique-lamps': 'salvaged.jpg',
    '/salvaged-lamps': 'salvaged.jpg',
    
    '/teak-lamps': 'teak-lamps.jpg',
    '/teak': 'teak-lamps.jpg',
    '/lighting': 'teak-lamps.jpg',
    '/product-details': 'product-details.jpg',
    '/checkout': 'salvaged.jpg',
    '/add-to-cart': 'salvaged.jpg',
    '/productdetails': 'salvaged.jpg',
  };

  useEffect(() => {
    const path = location.pathname;
    setTitle(pageTitles[path] || 'Page');
    setBannerImage(pageBackgrounds[path] || 'default-banner.jpg');
    document.title = pageTitles[path] || 'Page'; 
  }, [location]);

  return (
    <div className="inner-container-banner">
      <div
        className="inner-banner"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 100%),
            url(/images/banners/${bannerImage})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '80px 40px',
        }}
      >
        <div className="inner-banner-text">
          <h1 style={{ margin: 0 }}>{pageTitle}</h1>
          <div className="inner-banner-bottom">
            <p>Home - {pageTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
