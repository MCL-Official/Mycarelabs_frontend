import { motion } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { a } from "react-spring";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [blogData, setBlogData] = useState([]);
  console.log(blogData, "sdkjvsjnvdsnjv");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const blogsPerPage = 9;

  const getBlogData = useCallback(
    async (page) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://backend.mycaretrading.com/admin/blog/working?page=${page}&limit=${blogsPerPage}`
        );
        setBlogData(response.data.blogs);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    },
    [blogsPerPage]
  );

  // Fetch initial data on component mount and whenever currentPage changes
  useEffect(() => {
    if (searchTerm === "") {
      getBlogData(currentPage);
    }
  }, [currentPage, searchTerm, getBlogData]);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">The Blogs</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {blogData.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ banner_image, category, name, meta_description }) => {
  return (
    <a href="/blog" className="no-underline">
      <div
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <img
          src={banner_image}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a fake blog post titled ${name}`}
        />
        <span className="rounded-md border-[1px] border-neutral-600 bg-neutral-100 px-2 py-1 text-sm uppercase text-neutral-800">
          {category}
        </span>
        <p className="mt-1.5 text-lg font-medium text-black">{name}</p>
        <p className="text-sm text-neutral-800">{meta_description}</p>
      </div>
    </a>
  );
};

export default BlogPostCarousel;

const posts = [
  {
    id: 1,
    imgUrl: "/imgs/blog/1.png",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/imgs/blog/2.png",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/imgs/blog/3.png",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/imgs/blog/4.png",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/imgs/blog/5.png",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/imgs/blog/6.png",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/imgs/blog/7.png",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
