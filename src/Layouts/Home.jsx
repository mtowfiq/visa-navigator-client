import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='max-w-11/12 mx-auto'>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;