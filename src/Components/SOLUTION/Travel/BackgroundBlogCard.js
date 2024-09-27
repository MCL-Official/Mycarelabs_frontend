import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import { Helmet } from "react-helmet";


export function BackgroundBlogCard() {
  const cards = [
    {
      title: "Bay Area COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://i.ibb.co/c6q05G9/1.png",
      // avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "If you’re boarding a plane in the San Francisco Bay Area or Silicon Valley, find out the COVID-19 testing requirements for your destination countries and plan accordingly."
    },
    {
      title: "San Francisco International Airport (SFO) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://i.ibb.co/42WBYxJ/3.png",
      // avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "My Care Labs provides infectious disease testing solutions to individuals around the SF Bay Area. Specifically for people flying out of SFO. Make sure to check if your destinations require a negative test result and book your next appointment with us."
    },
    {
      title: "Oakland International Airport (OAK) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://i.ibb.co/nD6PDqz/2.png",
      // avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "Are you going to be traveling soon and want to make sure you're healthy before the big trip? Make sure to order our at-home test kit before your next flight."
    },
    {
      title: "San Jose International Airport (SJC) COVID-19 Travel PCR Testing",
      author: "Tania Andrew",
      imageUrl: "https://i.ibb.co/jhJsyMv/4.png",
      // avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1480&q=80",
      description: "Many of our San Jose neighbors trust us to give us quick and accurate results before their big trips."
    },
    // Add more card objects here
  ];

  return (
    <>
    <Helmet>
       <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
       <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
       <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
       <meta name="author" content="My Care Labs" />
     </Helmet>
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
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center transition-opacity duration-300 ease-in-out "
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80 transition-opacity duration-300 ease-in-out group-hover:opacity-10" />
            </CardHeader>
            <CardBody className="relative py-10 px-4 md:px-6">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 pt-32 text-lg font-medium leading-[1.5] transition-transform duration-300 ease-in-out group-hover:scale-110"
              >
                {card.title}
              </Typography>
              {/* <Avatar
                size="mb"
                variant="circular"
                alt={card.author}
                className="border-2 border-white"
                src={card.avatarUrl}
              /> */}
              <Typography variant="h5" className="mb-2 text-white text-sm pt-1">
                {card.description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}
