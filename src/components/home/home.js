import React from 'react';
import './home.css';
import Header from '../header/header.js';
import Footer from  '../footer/footer.js';
import Content from '../content/content.js';

const Home = () => {
    return (
        <div className='home'>
            <div> <Header/> </div>
            <div> <Content/></div>
            <div> <Footer/> </div>
        </div>
    )
}
export default Home;
