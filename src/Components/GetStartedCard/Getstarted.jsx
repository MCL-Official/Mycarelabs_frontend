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
                            <h2>Get Started Today!</h2>
                            <p>Start the client onboarding process with confidence, using our automated Know Your Customer (KYC) verification solution.</p>
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
