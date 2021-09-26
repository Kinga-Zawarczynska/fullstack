import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../modules/home/Home'));

const HomePage = () => <Home />;

export default HomePage;
