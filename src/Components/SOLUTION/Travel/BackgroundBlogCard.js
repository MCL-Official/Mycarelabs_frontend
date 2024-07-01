import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';

export function BackgroundBlogCard() {
  const cards = [
    {
      title: "Bay Area COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "If you’re boarding a plane in the San Francisco Bay Area or Silicon Valley, find out the COVID-19 testing requirements for your destination countries and plan accordingly."
    },
    {
      title: "San Francisco International Airport (SFO) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "My Care Labs operates free* COVID-19 PCR test sites around the SF Bay Area for travelers flying out of SFO. Make sure to check if your destinations require a negative COVID PCR test with this handy map."
    },
    {
      title: "Oakland International Airport (OAK) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "Traveling internationally from the Oakland metro? During the Delta and Omicron COVID waves, it was challenging at times to obtain Travel clearance COVID PCR tests in Oakland."
    },
    {
      title: "San Jose International Airport (SJC) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "My Care Labs operates free* COVID-19 PCR test sites around the SF Bay Area for travelers flying out of SFO. Make sure to check if your destinations require a negative COVID PCR test with this handy map."
    },
    // Add more card objects here
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="relative group h-[30rem] w-full max-w-[20rem] overflow-hidden rounded-xl">
          <Card
            shadow={false}
            className="relative h-full w-full transition-transform transform group-hover:-translate-y-4"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center transition-opacity duration-300 ease-in-out group-hover:opacity-20"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80 transition-opacity duration-300 ease-in-out group-hover:opacity-50" />
            </CardHeader>
            <CardBody className="relative py-10 px-4 md:px-6">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 text-lg font-medium leading-[1.5] transition-transform duration-300 ease-in-out group-hover:scale-110"
              >
                {card.title}
              </Typography>
              <Avatar
                size="mb"
                variant="circular"
                alt={card.author}
                className="border-2 border-white"
                src={card.avatarUrl}
              />
              <Typography variant="h5" className="mb-2 text-white text-sm">
                {card.description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
