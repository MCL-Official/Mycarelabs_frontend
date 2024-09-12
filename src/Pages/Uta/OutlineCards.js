import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

export const OutlineCards = () => {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.target;
    const cursorEl = cursorRef.current;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";

      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";

      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="overflow-hidden bg-gradient-to-r from-blue-200 via-white to-blue-200  px-8 py-24"
    >
         <div className="mb-8">
                    <span className="inline-block text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 3xl:text-8xl font-bold mr-2">
                    Who Should
                    </span>
                    <span className="inline-block text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 3xl:text-8xl font-bold">
                    Get Tested?
                    </span>
                </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row">
        <Card
          title="Women"
          href="#"
          bgUrl="https://i.ibb.co/0yKX4jb/7.png"
        />
        <Card
          title="Men"
          href="#"
          bgUrl="https://i.ibb.co/MS473K1/8.png"
        />
        <Card
          title="Elderly"
          href="#"
          bgUrl="https://i.ibb.co/mS5GYvf/9.png"
        />
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ bgUrl, title, href }) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
        height: '300px'
      }}
      className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-white bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
    >
      <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};

const Cursor = ({ cursorRef }) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="hover-cursor pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 border border-neutral-900"
    />
  );
};