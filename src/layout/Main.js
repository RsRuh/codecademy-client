import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';
import Header from '../share/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;