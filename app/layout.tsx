import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'AnimeVerse - Your Anime Community',
  description: 'Stay updated with the latest anime news, get AI-generated recommendations, and engage with fellow anime lovers.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;