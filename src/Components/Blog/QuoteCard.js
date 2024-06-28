import React from 'react';

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg my-10 text-center shadow-md">
      <div className="flex justify-center mb-3">
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 9v-2h-4v2h4zm-2-4v-2h-2v2h2zm2 8v-2h-4v2h4zm-2-4v-2h-2v2h2zm8 4v-2h-4v2h4zm-2-4v-2h-2v2h2zm2 8v-2h-4v2h4zm-2-4v-2h-2v2h2zm2 4h2v-2h-2v2zm-12-4v-2h-2v2h2zm-2-4h2v-2h-2v2zm0 8h2v-2h-2v2z"/>
        </svg>
      </div>
      <p className="text-xl italic mb-3">"{quote}"</p>
      <p className="text-sm text-gray-600">- {author}</p>
    </div>
  );
};

export default QuoteCard;
