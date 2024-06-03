// import React, { useEffect, useRef, useState } from 'react';
// import './CaseStudyScroller.css';
// import img2 from '../../Assets/img4.jpg';
// import img5 from '../../Assets/img5.png';

// const caseStudies = [
//   {
//     title: 'Adidas',
//     description: 'Scores the perfect digital landing in UAE',
//     results: { downloads: '2M+', users: '500K' },
//     image: img2
//   },
//   {
//     title: 'IKEA',
//     description: 'Expands as a digital consumer experience leader',
//     results: { stores: '7+', roi: '#1' },
//     image: img5
//   }
// ];

// const CaseStudyScroller = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const textSectionRef = useRef(null);

//   const handleScroll = () => {
//     const scrollTop = textSectionRef.current.scrollTop;
//     const itemHeight = textSectionRef.current.scrollHeight / caseStudies.length;
//     const index = Math.floor(scrollTop / itemHeight);
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     const textSection = textSectionRef.current;
//     textSection.addEventListener('scroll', handleScroll);
//     return () => {
//       textSection.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="case-study-scroller">
//       <div className="text-section" ref={textSectionRef}>
//         {caseStudies.map((study, index) => (
//           <div key={index} className="text-item">
//             <h2>{study.title}</h2>
//             <p>{study.description}</p>
//             <div className="results">
//               <div>{study.results.downloads ? `App downloads: ${study.results.downloads}` : `Stores: ${study.results.stores}`}</div>
//               <div>{study.results.users ? `New users acquired: ${study.results.users}` : `ROI: ${study.results.roi}`}</div>
//             </div>
//             <button className="view-case-study">View Case Study</button>
//           </div>
//         ))}
//       </div>
//       <div className="image-section">
//         {caseStudies.map((study, index) => (
//           <div key={index} className={`image-item ${index === activeIndex ? 'active' : ''}`}>
//             <img src={study.image} alt={study.title} />
//             <div className="overlay">
//               <button className="view-case-study">View Case Study</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CaseStudyScroller;
