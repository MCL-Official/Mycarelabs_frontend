import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const NeumorphismButton = ({ cardData }) => {
  const navigate = useNavigate();
  // console.log(cardData);

  // Utility function to format the category name
  const formatCategoryName = (categoryName) => {
    return categoryName
      .replace(/[&%@!#^*+\|"'<>?]/g, "-") // Replaces special characters with hyphens
      .replace(/\s+|\.|,|:/g, "-") // Replaces spaces, dots, commas, and colons with hyphens
      .replace(/-+/g, "-") // Removes consecutive hyphens
      .replace(/-+$/, "") // Removes trailing hyphens
      .toLowerCase();
  };
  // Format the category name
  const formattedCategory = formatCategoryName(cardData.category);

  const handleClick = () => {
    // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });

    //  this is for our own booking system that i have created

    console.log(cardData?.title, "dsdsvsvvdlvsdjvnskjvsdnkvn");

    if (cardData?.title == "Bay Area Mobile Testing") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    } else if (cardData?.title == "Fremont Laboratory") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    } else if (cardData?.title == "At-Home Test Kit") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    } else if (cardData?.title == "Riverside Mobile Testing") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    } else if (cardData?.title == "Riverside Gurdwara") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    } else {
      navigate(`/bookingcompletion/${formattedCategory}`, {
        state: { cardData },
      });
      // navigate(`/bookingcompletion`, { state: { cardData } });
    }
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)} // Handle hover start
      onMouseLeave={() => setIsHovered(false)} // Handle hover end
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-lg
        font-bold
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
          text-white
        bg-green-500
          hover:bg-green-300
    `}
      style={{
        background: isHovered
          ? "linear-gradient(90deg, rgba(102, 255, 102, 1), rgba(51, 204, 51, 1))" // Lighter green gradient on hover
          : "linear-gradient(90deg, rgba(0, 153, 0, 1), rgba(0, 102, 0, 1))", // Default green gradient

        boxShadow: isHovered
          ? "0px 4px 15px rgba(0, 0, 0, 0.2)" // Shadow on hover
          : "0px 4px 10px rgba(0, 0, 0, 0.1)", // Default shadow
      }}
    >
      {/* <div className="flex flex-row justify-center "> */}

      <FiSend />
      {cardData.category === "At-Home Test Kit" ? (
        <span>Order Now</span>
      ) : (
        <span>Book Now</span>
      )}
      {/* </div> */}
    </button>
  );
};

export default NeumorphismButton;
