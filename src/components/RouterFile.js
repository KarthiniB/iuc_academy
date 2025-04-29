import {BrowseRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import HeroSection from './HeroSection';


const RouterFile = () => {
  return (
    <div>
        <BrowseRouter>
            <Routes>
                <Route path='/' element={<HeroSection />} />
                <Route path=''/>
            </Routes>
        </BrowseRouter>
    </div>
  );
};

export default RouterFile;