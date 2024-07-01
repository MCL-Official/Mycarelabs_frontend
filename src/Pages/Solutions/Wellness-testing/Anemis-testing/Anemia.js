import React from 'react';

const Anemia = ({ stepNumber, title, points, image, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center p-4 mb-8`}>
      <div className="md:w-1/2">
        <img
          src={image}
          alt="Anemia Testing"
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-orange-500">{stepNumber}. </span>{title}
        </h2>
        {points.map((point, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{point.heading}</h3>
            <p>{point.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anemia;
