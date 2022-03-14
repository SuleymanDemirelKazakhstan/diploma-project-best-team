import React from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import Blog from "../Components/Blog";
const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <Blog />
            <Mobile />
            <Footer />
        </>
    );
}

export default Home;