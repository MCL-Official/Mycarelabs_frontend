import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

export function HorizontalCard() {
  const cards = [
    {
      id: 1,
      title: 'Travel PCR Testing',
      description:
        'My Care Labs offers quick, hassle-free, and accurate Travel Testing for COVID-19, RSV, and Influenza A/B',
      imgSrc:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 2,
      title: 'Testing for Groups',
      description:
        'We provide on-site and self-service PCR COVID/RSV/Flu testing for businesses, schools, care homes, and other organizations throughout California.',
      imgSrc:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 3,
      title: 'Testing for Schools',
      description:
        'We provide on-site and self-service PCR Covid/RSV/Flu testing for schools throughout California.',
      imgSrc:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 5,
      title: 'Testing for Nursing Homes',
      description:
        'We provide on-site and self-service PCR Covid/RSV/Flu testing for nursing homes throughout California.',
      imgSrc:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 5,
      title: 'At-Home COVID-19 PCR Test Kit',
      description:
        'Autodesk has shifted from a traditional boxed software company to a subscription-based model to keep up with modern software practices and business models.',
      imgSrc:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    // Add more card data here as needed
  ];

  // Duplicate the cards to create a seamless loop
  const duplicatedCards = [...cards];

  return (
    <div className="overflow-hidden relative">
      <div className="flex w-[200%] animate-moveRight">
        {duplicatedCards.map((card, index) => (
          <Card
            key={index}
            className="w-full max-w-[48rem] flex-row mx-4"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={card.imgSrc}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h6"
                color="gray"
                className="mb-4 uppercase"
              >
                startups
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
              >
                {card.title}
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal"
              >
                {card.description}
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
