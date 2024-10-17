import { CgProfile } from "react-icons/cg";
export function Testimonials2() {
    const testimonials = [
        {
            avatar: "https://i.ibb.co/NV3sJ4S/1.png",
            name: "Jen S.",
            quote: "I just got tested here last week and My Care Labs took care of me. It was easy and quick. I called ahead and they told me I could just walk-in that day."
        },
        {
            avatar: "https://i.ibb.co/xmmTd5v/2.png",
            name: "Simon andrew",
            quote: "Amazing place!!! Mateo and Nathaly were so supportive when my mother and I went there today to get our PCR tests before travel. It is so nerve-wrecking to travel nowadays and they had the results THE SAME DAY!!! That is so amazing ."
        },
        {
            avatar: "https://i.ibb.co/tDHSWFS/3.png",
            name: "Paul A,",
            quote: "My family and I both needed a PCR test for COVID clearance for travel. It’s actually difficult to find a anyone that could perform it without hefty charges. "
        },
    ];

    return (
        <section className="relative py-14 ">
        <h1 className="text-center text-4xl ">WHAT OUR CLIENTS SAY</h1>
        <p className="text-center  text-gray-500 text-lg font-light mb-10">
          Trusted by our clients for exceptional<br></br> service and results!
        </p>
        
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 justify-center items-center pt-10">
          {/* Left Card */}
          <div className="flex flex-col items-center text-center p-4 border rounded-md bg-slate-100 w-80 relative">
            <div className="rounded-full border-4 border-blue-500 p-1">
              <img
                src={testimonials[0].avatar}
                alt="Alfredo Torres"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mt-4">{testimonials[0].name}</h3>
            <p className="text-gray-500 text-sm">
            {testimonials[0].quote}
              {/* Reallygreatsite is worth much more than I paid. I would also like to say thank you to all your staff. If you aren't sure, always go for reallygreatsite. */}
            </p>
          </div>
      
          {/* Center Card (Larger, with image at top) */}
          <div className="flex flex-col items-center text-center p-8 border rounded-md bg-slate-200 w-96 shadow-lg relative">
            <div className="absolute -top-12 rounded-full border-4 border-orange-500 p-1">
              <img
                src={testimonials[1].avatar}
                alt="Cia Rodriguez"
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mt-24">{testimonials[1].name}</h3>
            <p className="text-gray-600 text-md">
            {testimonials[1].quote}
              {/* Reallygreatsite has really helped our business. It’s the perfect solution for our business. Reallygreatsite is the most valuable business resource we have EVER purchased. It fits our needs perfectly. */}
            </p>
          </div>
      
          {/* Right Card */}
          <div className="flex flex-col items-center text-center p-4 border rounded-md bg-slate-100 w-80 relative">
            <div className="rounded-full border-4 border-blue-500 p-1">
              <img
                src={testimonials[2].avatar}
                alt="Jonathan Patterson"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mt-4">{testimonials[2].name}</h3>
            <p className="text-gray-500 text-sm">
            {testimonials[2].quote}
              {/* Thanks reallygreatsite! I love your system. We were treated like royalty. I can't say enough about reallygreatsite. */}
            </p>
          </div>
        </div>
      </section>
      
      
    );
}
