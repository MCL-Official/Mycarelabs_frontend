import React from 'react'

import cancerScreeningImage from '../../Assets/doctor-group.png'
const Locations = () => {
  return (
    <div>
         <div className="text-center py-8 mt-5">
      <p className="text-blue-500 font-semibold">We Ensure Safe Testing</p>
      <h2 className="text-2xl font-bold mt-2">
        Same Day Results <span className="text-red-500">For Groups,</span> individuals, Travelers
      </h2>
      <div className="flex flex-col sm:flex-row justify-center mt-8 space-x-8">
  <div className="text-center mx-auto">
    <img
      src="https://img.freepik.com/free-vector/blue-round-clock_1048-961.jpg?t=st=1722615915~exp=1722619515~hmac=4f9b110c135d28861a979040858b6105ef8a6fbced2eb8da82752c082e05473e&w=1800"
      alt="Same Day Results"
      className="w-48 h-48 mx-auto mb-2 object-cover" 
    />
    <h3 className="font-bold">Same Day Results</h3>
    <p className="text-gray-600 ">
      Rapid same-day results: My Care Labs, your trusted healthcare partner.
    </p>
  </div>
  <div className="text-center mx-auto">
    <img
      src="https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg?t=st=1722615989~exp=1722619589~hmac=76ff5c12a009a8488f1f6b9b77cb0234014e5b8a8caf08a861dbd95f147e597d&w=1800"
      alt="No Cost for Insurance"
      className="w-48 h-48 mx-auto mb-2 object-cover" 
    />
    <h3 className="font-bold">No Cost for Insurance</h3>
    <p className="text-gray-600">
      Our services are offered at no cost for patients with insurance.
    </p>
  </div>
  <div className="text-center mx-auto">
    <img
      src="https://img.freepik.com/free-vector/no-date-calendar_78370-7221.jpg?t=st=1722617494~exp=1722621094~hmac=b2d9215caf635d8b1477c6ec8783ee672991fbe0340d7b5bd40e49c3e7d6d648&w=1800"
      alt="No Appointments Needed"
      className="w-48 h-48 mx-auto mb-2 object-cover" 
    />
    <h3 className="font-bold">No Appointments Needed, Walk-Ins Welcome!</h3>
    <p className="text-gray-600">
      Walk-in tests: Swift results at My Care Labs for your convenience.
    </p>
  </div>
  <div className="text-center mx-auto">
    <img
      src="https://img.freepik.com/free-vector/large-group-people-silhouette-crowded-together-heart-shape-isolated-white-background-vector_90220-2591.jpg?t=st=1722618057~exp=1722621657~hmac=d8276aab9f15b48afea7cbf041b0dae9ad550f03814b0ab8150512d8c0091872&w=1800"
      alt="Trusted by Millions of People"
      className="w-48 h-48 mx-auto mb-2 object-cover" 
    />
    <h3 className="font-bold">Trusted by Millions of People</h3>
    <p className="text-gray-600">
      We adhere to HIPAA standards and guarantee the confidentiality of all
      information.
    </p>
  </div>
</div>

    </div>
      <div className="flex flex-col md:flex-row items-center p-4 mb-8 mt-5">
      <div className="md:w-1/2">
        <img
          src={cancerScreeningImage}
          alt="Cancer Screening"
          className="w-full h-auto rounded-2xl "
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">
          My Care Labs 
        </h2>
        <ul className="list-none space-y-2 text-left">
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Address: 34800 11th St, Union City, CA 94587 – Union City BART, Parking Lot 2</span>
          </li>
          <li className="flex items-center text-left">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>
            Hours: Monday, Wednesday, and Friday 8:30am-4:00pm by drive-through, walk-in, or appointment.
            </span>
          </li>
          <li className="flex items-center text-left">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Save Money: No cost with any insurance. We accept all health insurance plans.</span>
          </li>
          <li className="flex items-center text-left">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Save Time: Same-day Covid/Flu PCR results available. Save Time: To speed up your testing appointment, pre-register here and you’ll breeze through our testing facility in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.</span>
          </li>
          <li className="flex items-center text-left">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Please make sure to bring your government issued ID card and health insurance card to your appointment.</span>
          </li>
          <li className="flex items-center text-left">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Call Or Text +1-800-790-4550</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Locations
