import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-SLG4PB1FWW'; // Replace with your actual Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
