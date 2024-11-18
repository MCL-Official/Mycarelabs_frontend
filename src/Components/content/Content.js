import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Content() {
  return (<>

    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-3xl text-center grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <span style={{ color: '#FF7244' }}>Infectious</span> <span style={{ color: '#7597E6' }}>Disease Testing</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-40 md:-mt-28 lg:-mt-10 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://i.ibb.co/DLr7JNV/CALENDAR.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg -mt-6">
              {/* <p className="text-xl leading-8 text-gray-700">
                As you are aware, the current COVID-19 vaccines reduce the transmission of Delta and other variants and protect against serious illness and death. As you are aware,
                the current COVID-19 vaccines reduce the transmission.
              </p> */}
              <p className="text-xl leading-8 text-gray-700">
                My Care Labs Was Founded During The Covid-19 Pandemic. We Provide Fast, Simple, Accurate Infectious Disease Testing Through Combination
                Covid-19 RT-PCR Tests With Same-Day Or Within 24 Hours Test Result Reporting, Dependent On California Test Site Location. 
              </p>
              <Link
                                to="/covid-test-locations"
                                className="block py-2 px-6  mt-5 text-center text-white text-xl font-bold no-underline duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                                style={{ backgroundColor: '#7597E6' }}
                            >
                                Our Testing Locations
                            </Link>
              {/* <p className="text-lg leading-8 text-gray-700 mt-8">
                We Have Provided And Supported Customized Covid Testing At Schools, Nursing Homes, Businesses, And Other Large Organizations Since 2021.
                All Our CLIA-Certified Diagnostic Laboratory Services Are NO COST TO YOU With Any Insurance Plan And Low Cost For Uninsured Patients.
                We Only Bill Insurance Companies – Not You The Patient – Unless You Are Paying Cash In Special Circumstances.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* to be done after some time  */}

    {/* <div className="flex justify-center space-x-8 mt-4 mb-5">
  <div className="border border-gray-300 p-4 rounded-lg shadow-lg flex items-center gap-x-4 max-w-lg">
    <CloudArrowUpIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
    <span className="text-lg leading-8 text-gray-700">
      <strong className="font-semibold text-gray-900">Testing Made Easy.</strong> Book A Discovery Call Today So We Can Determine The Best Fit For Your Organization’s Needs.
    </span>
  </div>
  <div className="border border-gray-300 p-4 rounded-lg shadow-lg flex items-center gap-x-4 max-w-lg">
    <LockClosedIcon className="h-10 w-6 text-indigo-600" aria-hidden="true" />
    <span className="text-lg leading-8 text-gray-700">
      <strong className="font-semibold text-gray-900">For Business Travelers And Leisure Vacationers.</strong> We Offer Pre-Flight And Pre-Cruise Travel Testing. Our Normal Rate Is $225 For Travel Testing With Covid Redipass PDF/QR Code Reporting.
    </span>
  </div>
  <div className="border border-gray-300 p-4 rounded-lg shadow-lg flex items-center gap-x-4 max-w-lg">
    <ServerIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
    <span className="text-lg leading-8 text-gray-700">
      <strong className="font-semibold text-gray-900">We Provide Individual/Small Group Testing.</strong> Our Silicon Valley Laboratory, Pop-Up Test Site Locations Throughout Northern And Southern California, And Mobile-Testing-On-Demand In Select Metro Areas.
    </span>
  </div>
</div> */}


  </>
  )
}

