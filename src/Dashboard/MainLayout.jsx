import React from 'react';
import LeftBare from './LeftBare';
import { Outlet } from 'react-router-dom';
import MobileHeader from './MobileHeader';

const MainLayout = () => {
    return (
        <div className='flex flex-col lg:flex-row  h-screen w-full bg-slate-400'>
             <div className=' lg:hidden'>
                <MobileHeader />
             </div>
            <LeftBare/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;