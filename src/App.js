import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Content from "./elements/Site-content";
import CountFields from "./elements/countFields"
import Calc from "./elements/Calc";
const menuItems = [
    'Navbar', 'Home', 'Features', 'Pricing'
]

function App() {

    return (
        <div className="App">
            {/*<Header menu={menuItems}/>*/}
            {/*<Content/>*/}
            <CountFields/>
            {/*<Content2 password='PassWord'/>*/}
            {/*<Footer menu={menuItems}/>*/}
        </div>
    );
}

export default App;
