import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';
import './main-page.css';

export const MainPage: React.FC = () => {
    return (
        <>
            <div className='wrapper'>
                <Navbar />
                <Container/>
                {/* <Button data-test-id='sider-switch'></Button> */}
                {/* <Button data-test-id='sider-switch-mobile'></Button> */}
            </div>
        </>
    );
};
