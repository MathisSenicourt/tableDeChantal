import React from 'react';
import Title from './title/title';
import './presentation.css';
import PresentationDetails from "./PresentationDetails/presentationDetails";

function Presentation() {
    return (
        <div className='presentation'>
            <Title/>
            <PresentationDetails/>
        </div>
    );
}

export default Presentation;
