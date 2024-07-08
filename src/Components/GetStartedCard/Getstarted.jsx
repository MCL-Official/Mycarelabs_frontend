import React from 'react';
import './style.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from 'antd'; // Correct import for Ant Design Button

const GetStartedCard = () => {
    return (
        <div className='container mt-5'>
            <div className='row' style={{ placeContent: "center" }}>
                <div className='col-md-10'>
                    <div className="row get__card p-4" style={{ placeContent: "center" }}>
                        <div className="left-column col-md-6">
                            <h2 className='text-left text-5xl'>A certified BBB accredited business</h2>
                            <p className='text-left'>My Care Labs offers quick, hassle-free, and accurate COVID-19 RT-PCR testing. With same day results or within 24 hours, we have testing on-site at our laboratory and at pop-ups throughout California. My Care Labs takes your health seriously. We are a CLIA-certified laboratory, part of the California Covid Task Force, partner with CDPH, and report directly to CDC</p>
                        </div>
                        <div className="right-column col-md-5">
                            <div className="our__sol__button">
                                {/* Use Ant Design Button for better styling and consistency */}
                                <Button type="primary" className="explore-now-button">Explore Now</Button>
                                <div className="white__circle"></div>
                            </div>
                        </div>

                        <style jsx>{`
    .our__sol__button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .explore-now-button {
        width: 800px; /* Increase width */
        font-size: 1.25rem; /* Adjust font size if needed */
        padding: 1rem 1rem; /* Adjust padding if needed */
    }

  
`}</style>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStartedCard;
