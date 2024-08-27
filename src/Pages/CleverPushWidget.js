import React, { useEffect } from 'react';

const CleverPushWidget = () => {
  useEffect(() => {
    // Check if script is already loaded to avoid duplicate loading
    if (document.querySelector('script[src="https://static.clpsh.com/sdk/cleverpush-story.js"]')) return;

    // Create and append script
    const script = document.createElement('script');
    script.src = "https://static.clpsh.com/sdk/cleverpush-story.js";
    script.async = true;
    script.onload = () => {
      console.log("CleverPush script loaded successfully");
    };
    script.onerror = () => {
      console.error("Error loading CleverPush script");
    };
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="cleverpush-story-widget" 
         data-story-id="Fd552dTRLSRrfhkp2" 
         data-channel-id="GDYD9hYJZgLRBAF5f" 
         data-landscape="false" 
         data-story-preview="false" 
         data-story-block-swipe-up="false">
    </div>
  );
};

export default CleverPushWidget;
