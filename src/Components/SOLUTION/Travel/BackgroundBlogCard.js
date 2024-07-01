import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from '@material-tailwind/react';

export function BackgroundBlogCard() {
  const cards = [
    {
      title: "How we design and code open-source projects?",
      author: "Tania Andrew",
      imageUrl: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      description: "This is a description of the blog post. It provides insight into the content and purpose of the post."
    },
    // Add more card objects here
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="relative group h-[30rem] w-full max-w-[20rem] overflow-hidden">
          <Card
            shadow={false}
            className="relative h-full w-full transition-transform transform hover:scale-105"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-10 px-4 md:px-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 text-lg font-medium leading-[1.5]"
              >
                {card.title}
              </Typography>
              <Typography variant="h5" className="mb-2 text-gray-400 text-sm">
                {card.author}
              </Typography>
              <Avatar
                size="mb"
                variant="circular"
                alt={card.author}
                className="border-2 border-white"
                src={card.avatarUrl}
              />
            </CardBody>
          </Card>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <Typography variant="h5" className="mb-4 text-black">
              {card.description}
            </Typography>
            <Button color="blue">Read More</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
