import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const EmptyPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>We are working on it</h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>Please bear with us while we make improvements.</p>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default EmptyPage;
