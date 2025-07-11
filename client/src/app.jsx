import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './appStyle.css'
const VITE_PORT = `${import.meta.env.VITE_PORT}`;

export default function App() {

    const isProd = import.meta.env.MODE === 'production'
    const API_BASE_URL = isProd
        ? import.meta.env.VITE_PROD_API_BASE_URL
        : import.meta.env.VITE_DEV_API_BASE_URL+VITE_PORT

    useEffect(() => {
        const wakeup = async () => {
            try {
                await fetch(`${API_BASE_URL}/api/ping`);
                console.log('😃 API wakeup ping sent');
            } catch (err) {
                console.error('😴API Wakeup Falied!?', err)
            }
        };
        wakeup();

        const interval = setInterval(() => {
            if (document.visibilityState === 'visible') {
                wakeup();
            }
        }, 2 * 60 * 1000);

        return () => clearInterval(interval);

    }, [API_BASE_URL]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};