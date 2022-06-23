import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./page/home";
import {CurrencyPage} from "./page/currency";
import {Header} from "./components/header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="currency" element={<CurrencyPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
