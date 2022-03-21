import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MS from './MilitarySymbol';
import SD from './SituationDiagram';
import Transparency from './Transparency';

export default function ContainRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='Home' element={<Home /> }/>
                    <Route path='Military-Symbol' element={<MS />} />
                    <Route path='situation-diagram' element={<SD />} />
                    <Route path='transparency' element={<Transparency />} />
                    <Route path='*' element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}