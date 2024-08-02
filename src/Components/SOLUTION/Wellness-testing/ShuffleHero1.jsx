import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Sample from "./basic-metabolic-panel/Sample";
import { useNavigate } from "react-router-dom";

const ShuffleHero1 = () => {
  const navigate = useNavigate()
  const Sample= ()=>{
    navigate("/covid-test-locations")
  }
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
       
        <h3 className="text-4xl md:text-6xl font-semibold text-black">
         Wellness Testing Solutions
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        My Care Labs provides routine blood work for both our regular patients and clients. Call or book now to gain a better understanding of your health.        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" onClick={Sample}>
          Book Now 
        </button>
        <p className="text-xs md:text-sm font-medium mt-4 text-left">
  <span className="text-orange-500">ATTENTION: </span>
  <span className="text-black">
    wellness testing patients: If you are registering for any of the following panels (Renal Function, CMP, BMP, or Lipid), please make sure you are fasting for a minimum of 8 hours before your appointment. Water is permitted during the fasting period. Additionally, please consult with your doctor if you should avoid taking any medication for our wellness test.   </span>
</p>

      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://aci.edu/wp-content/uploads/2018/02/Depositphotos_11194384_original-e1518199867636.jpg?w=186",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/skillful-nurse-is-doing-blood-test-woman-clinic-gilr-sitting-near-table_1157-48562.jpg?t=st=1722633320~exp=1722636920~hmac=3962718496859f442df985b5dde99b8487bc9ba57ee86fca0b6c746850594ebf&w=2000",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/coronavirus-test-assortment-lab_23-2149107257.jpg?t=st=1719954931~exp=1719958531~hmac=9d043decf6673000fa1c4ca424bac760d5782668f55c05b2caa7d4e406db2622&w=2000",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-photo/high-angle-health-professional-drawing-blood_23-2149404714.jpg?t=st=1719954904~exp=1719958504~hmac=8db9b38de189cdd1c74b6d96b3af91a3e60ca14b1d4fcef8c75417168b476f6b&w=2000",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-photo/medical-technologist-doing-blood-draw-services-patient-lab-assistant-with-sterile-rubber-gloves-taking-blood-sample-from-patient_657921-350.jpg?t=st=1722633264~exp=1722636864~hmac=ecf3acd29c9347fb3c93ee80e140899a4d48e72af4cb6bff985d840f8369e1e6&w=2000",
  },
  {
    id: 6,
    src: "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800",
  },
  {
    id: 7,
    src: "https://img.freepik.com/free-vector/organic-flat-doctors-nurses-illustration_23-2148901759.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=sph",
  },
  {
    id: 8,
    src: "https://img.freepik.com/free-vector/hand-drawn-hospital-reception-scene_23-2148837407.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 9,
    src: "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 10,
    src: "https://img.freepik.com/free-photo/group-doctors-cooperating-while-examining-xray-patient-hopital_637285-11164.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 11,
    src: "https://img.freepik.com/free-photo/medical-expert-talking-with-medical-staff-healthcare-meeting-hospital-conference-room-explaining-radiographys-clinic-therapist-talking-with-colleagues-about-disease-medicine-professional_482257-3965.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 12,
    src: "https://img.freepik.com/free-photo/beautiful-female-nurse-attractive-doctor-meeting-first-time-medical-board-attractive-woman-medical-specialist-working-together-hospital_662251-147.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 13,
    src: "https://img.freepik.com/free-photo/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people_1150-6561.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 14,
    src: "https://img.freepik.com/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 15,
    src: "https://img.freepik.com/free-photo/dentist-showing-teeth-x-ray-reviewing-it-with-nusre-doctor-assistant-working-modern-crowded-stomatological-clinic-patients-sitting-chairs-reception-filling-dental-forms-waiting_482257-3673.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
  {
    id: 16,
    src: "https://img.freepik.com/free-photo/young-man-checking-appointment-respecting-social-distancing-hospital-waiting-room-nurse-looking-computer-wearing-face-mask-against-covid-19_482257-2003.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero1;