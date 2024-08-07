import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const NeumorphismButton = ({ cardData }) => {
  const navigate = useNavigate();
// Utility function to format the category name
const formatCategoryName = (categoryName) => {
  return categoryName
    .replace(/[&%@!#^*+\|"'<>?]/g, '-') // Replaces special characters with hyphens
    .replace(/\s+|\.|,|:/g, '-') // Replaces spaces, dots, commas, and colons with hyphens
    .replace(/-+/g, '-') // Removes consecutive hyphens
    .replace(/-+$/, '') // Removes trailing hyphens
    .toLowerCase();
};
  // Format the category name
  const formattedCategory = formatCategoryName(cardData.category);

  const handleClick = () => {
    // navigate(`/covid-test-locations/${formattedCategory}`, { state: { cardData } });
    navigate(`/bookingcompletion`, { state: { cardData } });
    console.log("Navigating with card data:", cardData);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-green-500
    `}
    >
      <FiSend />
      <span>Book Now</span>
    </button>
  );
};

export default NeumorphismButton;
