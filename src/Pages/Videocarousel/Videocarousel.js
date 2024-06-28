import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const VideoCarousel = () => {
  const carouselRef = useRef(null);

  const videos = [
    {
      title: "Video Diaries: Meradi's Bipolar Disorder Story",
      thumbnail: "https://img.pikbest.com/png-images/qiantu/cartoon-four-young-people-taking-pictures-with-shoulders_2569873.png!w700wp",
      link: "#",
    },
    {
      title: "Pieces of Advice: Tamara Mabury",
      thumbnail: "https://img.pikbest.com/png-images/qiantu/cartoon-four-young-people-taking-pictures-with-shoulders_2569873.png!w700wp",
      link: "#",
    },
    {
      title: "Taking Care: An Alzheimer's Story",
      thumbnail: "https://img.pikbest.com/png-images/qiantu/cartoon-four-young-people-taking-pictures-with-shoulders_2569873.png!w700wp",
      link: "#",
    },
    {
      title: "Video Diaries: Kortney's Atopic Dermatitis Story",
      thumbnail: "https://img.pikbest.com/png-images/qiantu/cartoon-four-young-people-taking-pictures-with-shoulders_2569873.png!w700wp",
      link: "#",
    },
    {
      title: "Video Diaries: Kortney's Atopic Dermatitis Story",
      thumbnail: "https://img.pikbest.com/png-images/qiantu/cartoon-four-young-people-taking-pictures-with-shoulders_2569873.png!w700wp",
      link: "#",
    },
  ];

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">MORE TOP VIDEOS</h2>
        <Link to="#">
          <div className="text-teal-600 text-sm font-semibold">VIEW ALL</div>
        </Link>
      </div>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-lg p-2 focus:outline-none"
        >
          <i className="fas fa-chevron-left text-gray-600"></i>
        </button>
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {videos.map((video, index) => (
            <div key={index} className="flex-shrink-0 w-84">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover  rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-50 rounded-full p-2">
                    <i className="fas fa-play text-2xl text-white"></i>
                  </div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium">{video.title}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-lg p-2 focus:outline-none"
        >
          <i className="fas fa-chevron-right text-gray-600"></i>
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
