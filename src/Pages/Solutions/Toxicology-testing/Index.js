import React from 'react'
import Faq from '../../Faq/Faq'
import HoverCards from '../../../Components/HoverCard/HoverCards'
import InsuranceAccepted from '../../../Components/InsuranceAccepted'
import GetStartedCard from '../../../Components/GetStartedCard/Getstarted'
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Helmet } from "react-helmet";


const Index = () => {
  const substances = [
    'Amphetamine', 'PCP/Phencyclidine', 'Oxycodone',
    'Benzodiazepine', 'THC/Cannabinoid', 'FEN',
    'Cocaine', 'Barbiturate', 'Tramadol',
    'Opiate', 'Ecstasy', 'Hydrocodone',
    'EDDP/Methadone', 'Ethanol', '6-AM',
    'Buprenorphine'
  ];
  return (
    <>
    <div>
  
     <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
    <div className="text-center py-8">
      <h2 className="text-2xl font-semibold md:mt-10 mt-12 text-blue-500">Why is toxicology drug testing needed?</h2>
      <h1 className="text-gray-700 mt-4">Toxicology drug testing is needed for many reasons, such as:</h1>
      <div className="flex flex-wrap   justify-center mt-8 md:space-x-8">
        <div className="md:text-left text-center max-w-xs mb-8">
          <div className="flex items-start mb-2">
            <CheckCircleIcon className="w-12 h-12 text-red-500 mx-2" />
            <p className="text-gray-700">To ensure safety and compliance in workplaces that require high levels of performance, responsibility, or security, such as transportation, construction, defense, healthcare, and education.</p>
          </div>
          <div className="flex items-start mb-2">
            <CheckCircleIcon className="w-10 h-10 text-red-500 mx-2" />
            <p className="text-gray-700">To monitor and support individuals who are in treatment for substance use disorders, or who are under legal supervision, such as probation or parole.</p>
          </div>
        </div>
        <div className="md:text-left text-center max-w-xs mb-8">
          <div className="flex items-start mb-2">
            <CheckCircleIcon className="w-10 h-10 text-red-500 mx-2" />
            <p className="text-gray-700">To provide evidence in legal cases involving drug-related offenses, such as driving under the influence, possession, or distribution.</p>
          </div>
          <div className="flex items-start mb-2">
          <CheckCircleIcon className="w-10 h-10 text-red-500 mx-2" />
            <p className="text-gray-700">To screen for potential health risks or complications associated with drug use, such as overdose, addiction, or organ damage.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3qJTqjZateV33xIOC6K1pQTI-QkxpLMOTQ&s" alt="Image 1" className="w-1/4 rounded-lg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-cnsPp958_xXMxqq74fqRLpKzg_141wgNg&s" alt="Image 2" className="w-1/4 rounded-lg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gewBUheNOG-yyEPVUchbc9TiEKum6pVDBg&s" alt="Image 3" className="w-1/4 rounded-lg" />
      </div>
    </div>
    <div className="text-center py-8 mt-5">
      <p className="text-blue-500 font-semibold">We Ensure Safe Testing</p>
      <h2 className="text-2xl font-bold mt-2">
        Same Day Results <span className="text-red-500">For Groups,</span> individuals, Travelers
      </h2>
      <div className="flex md:flex-row flex-col justify-center mt-8  md:space-x-78">
  <div className="text-center">
    <img
      src="https://img.freepik.com/free-vector/blue-round-clock_1048-961.jpg?t=st=1722615915~exp=1722619515~hmac=4f9b110c135d28861a979040858b6105ef8a6fbced2eb8da82752c082e05473e&w=1800"
      alt="Same Day Results"
      className="w-48 h-48 mx-auto mb-2 object-cover" 
    />
    <h3 className="font-bold">Same Day Results</h3>
    <p className="text-gray-600">
      Rapid same-day results: My Care Labs, your trusted healthcare partner.
    </p>
  </div>
  <div className="text-center">
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
  <div className="text-center">
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
  <div className="text-center">
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
        <InsuranceAccepted/>
      <Faq/>
      <div className="text-center py-8">
      <h2 className="text-xl font-semibold">What substances do we test for?</h2>
      <p className="text-gray-700 mt-4">
        At My Care Labs, we test for a wide range of substances, including:
      </p>
      <div className="flex justify-center mt-8 md:space-x-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {substances.map((substance, index) => (
            <div key={index} className="flex items-center">
              <CheckCircleIcon className="md:w-10 md:h-10 w-5 h-5 text-red-500 mr-2" />
              <p className="text-gray-700">{substance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <HoverCards/>
      <GetStartedCard/>
    </div>
    </>
  )
}

export default Index
