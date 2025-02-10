import React from "react";
import logo1 from "../../Assets/Logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThankyouFormSubmit = () => {
  return (
    <div>
      <div class="flex items-center justify-center h-screen mt-[4rem]">
        <div class="p-6 rounded shadow-lg ring ring-indigo-600/50">
          <div class="flex flex-col items-center space-y-4">
            <img src={logo1} className="h-24" alt="My care labs" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h1 className="text-4xl font-bold">
              Thank You for Reaching Out to My Care Labs!
            </h1>
            <p>We’ve received your request and will get back to you shortly.</p>
            <a
              href="/industries/overview"
              class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span class="text-sm font-medium">Home</span>
            </a>
              {
                <a
                  href="tel:+91-800-790-4550"
                  className={`flex items-center gap-1 rounded-lg border-2 px-3 py-2 font-semibold transition-colors no-underline bg-orange-600 text-white`}
                >
                  <FontAwesomeIcon icon="fa-solid fa-phone" size="lg" />
                  <span>Call us: 800-790-4550</span>
                </a>
              }
              {
                <a
                  href="mailto: support@mycarelabs.com"
                  className={`flex items-center gap-1 rounded-lg border-2 px-3 py-2 font-semibold transition-colors no-underline bg-orange-600 text-white`}
                >
                  <FontAwesomeIcon icon="fa-solid fa-envelope" size="lg" />
                  <span>Email: support@mycarelabs.com</span>
                </a>
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouFormSubmit;
