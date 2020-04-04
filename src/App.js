import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Content from "./elements/Site-content";
import HW3 from "./elements/hw3"
const menuItems = [
    'Navbar', 'Home', 'Features', 'Pricing'
]

function App() {
    return (
        <div className="App">
            <Header menu={menuItems}/>
            <Content/>
            <HW3/>
            {/*<Content2 password='PassWord'/>*/}
            <Footer menu={menuItems}/>
        </div>
    );
}

export default App;
