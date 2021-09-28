import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../modules/error-boundary/ErrorBoundary'

const Home = dynamic(() => import('../modules/home/Home'));

const HomePage = () => <ErrorBoundary> <Home /> </ErrorBoundary>;

export default HomePage;
