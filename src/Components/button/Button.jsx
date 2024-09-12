import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const NeumorphismButton = ({ cardData }) => {
  const navigate = useNavigate();
  // console.log(cardData);
  
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

  // console.log(cardData,'sdvksdvjsnvjdsknvjdsnvjvnsdj');
  const handleClick = () => {
    console.log(cardData,'sdvksdvjsnvjdsknvjdsnvjvnsdj');
    if(cardData?.title=="PCR COVID-19, RSV, and Influenza A/B Test Kit"){
       navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
    }else{

      // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
      navigate(`/covid-test-locations/${formattedCategory}`, { state: { cardData } });
      // navigate(`/bookingcompletion`, { state: { cardData } });
      console.log("Navigating with card data:", cardData);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        font-bold
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
          text-white
        bg-green-500
    `}
    >
      <FiSend />
      {cardData.category==="At-home Test Kit"?<span>Order Now</span>:<span>Book Now</span>}
      
    </button>
  );
};

export default NeumorphismButton;
