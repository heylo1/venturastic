import React from 'react';

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar, Header, Introduction, CardContainer } from './components';

import './App.css';
import Introdction from './components/introduction/Introduction';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Introduction />
            <CardContainer />
            {/* <Footer /> */}
        </div>
    )
}

export default App