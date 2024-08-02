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
        'https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000',
      location: '/travel-testing/',
    },
    {
      id: 2,
      title: 'Testing for Groups',
      description:
        'We provide on-site and self-service PCR COVID/RSV/Flu testing for businesses, schools, care homes, and other organizations throughout California.',
      imgSrc:
        'https://img.freepik.com/free-photo/asian-women-working-together-chemical-project_23-2148776749.jpg?t=st=1719954975~exp=1719958575~hmac=d8a9d57b35d7a297eda1d6a52f050ae919c396bef1efa084e42be06257542068&w=2000',
      location: '/testing-for-groups/',
    },
    {
      id: 3,
      title: 'Testing for Schools',
      description:
        'We provide on-site and self-service PCR Covid/RSV/Flu testing for schools throughout California.',
      imgSrc:
        'https://img.freepik.com/free-photo/coronavirus-test-assortment-lab_23-2149107257.jpg?t=st=1719954931~exp=1719958531~hmac=9d043decf6673000fa1c4ca424bac760d5782668f55c05b2caa7d4e406db2622&w=2000',
      location: '/testing-for-schools/',
    },
    {
      id: 4,
      title: 'Testing for Nursing Homes',
      description:
        'We provide on-site and self-service PCR Covid/RSV/Flu testing for nursing homes throughout California.',
      imgSrc:
        'https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?t=st=1719954878~exp=1719958478~hmac=ac2da6b69d4364b72d893f73be159b5d70705531a4c4d786a19868165d1f93b0&w=2000',
      location: '/testing-for-nursing-homes/',
    },
    {
      id: 5,
      title: 'At-Home COVID-19 PCR Test Kit',
      description:
        'Autodesk has shifted from a traditional boxed software company to a subscription-based model to keep up with modern software practices and business models.',
      imgSrc:
        'https://img.freepik.com/free-vector/organic-flat-doctors-nurses-illustration_23-2148901759.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=sph',
      location: '/at-home-covid-test-kit/',
    },
    // Add more card data here as needed
  ];

  // Duplicate the cards to create a seamless loop
  const duplicatedCards = [...cards];

  return (
    <div className="overflow-hidden relative">
      <div className="flex w-[200%] animate-moveRight hover-stop sm:flex-row flex-col">
        {duplicatedCards.map((card, index) => (
          <a key={index} href={card.location} className="no-underline">
            <Card className="w-full max-w-[20rem] sm:max-w-[48rem] mx-4 mb-4 sm:mb-0 h-full flex-col sm:flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={card.imgSrc}
                  alt="card-image"
                  className="h-48 sm:h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="flex flex-col justify-between h-full">
                <div>
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-2 uppercase"
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
                  <Typography color="gray" className="font-normal">
                    {card.description}
                  </Typography>
                </div>
                <Button variant="text" className="flex items-center gap-2 mt-4">
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
              </CardBody>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
