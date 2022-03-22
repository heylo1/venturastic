import React from 'react';

import { Navbar, Footer} from './components';
import { Home, WouldDo } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/woulddo" element={<WouldDo />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    )
}

export default App