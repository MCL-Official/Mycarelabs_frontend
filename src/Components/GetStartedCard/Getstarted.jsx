import React from 'react';
import './style.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from 'antd'; // Correct import for Ant Design Button
 
const GetStartedCard = () => {
    return (
        <div className='container mt-5'>
            <div className='row' style={{ placeContent: "center" }}>
                <div className='col-md-10'>
                    <div className="row get__card p-4" style={{ display: 'flex',   backgroundColor: '#f0f4ff', borderRadius: '20px' }}>
                        <div className="left-column  col-md-8">
                            <h2 className='text-center text-5xl'>A certified BBB accredited business</h2>
                            <p className='text-center'>
                                My Care Labs offers quick, hassle-free, and accurate COVID-19 RT-PCR testing. With same day results or within 24 hours, we have testing on-site at our laboratory and at pop-ups throughout California. My Care Labs takes your health seriously. We are a CLIA-certified laboratory, part of the California Covid Task Force, partner with CDPH, and report directly to CDC.
                            </p>
                        </div>
                        <div className="right-column col-md-4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img
                                src="https://i.ibb.co/MZR5cSB/CALENDAR-2.png"
                                className="img-fluid"
                                style={{ maxWidth: '45%', height: 'auto', borderRadius: '20px', marginRight: '20px' }}      
                            />
                        </div>
                    </div>
                </div>
            </div>
 
            <style jsx>{`
                .get__card {
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }
 
                .explore-now-button {
                    font-size: 1.25rem;
                    padding: 1rem 2rem;
                }
 
                .white__circle {
                    background-color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            `}</style>
        </div>
    );
}
 
export default GetStartedCard;