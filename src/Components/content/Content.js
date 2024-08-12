import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Content() {
  return (
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
              <p className="text-base font-semibold leading-7 text-indigo-600">We Ensure Safe Testing</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Infectious Disease Testing</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              As you are aware, the current COVID-19 vaccines reduce the transmission of Delta and other variants and protect against serious illness and death. As you are aware, 
              the current COVID-19 vaccines reduce the transmission.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-12 md:-mt-5 lg:mt-28 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            src="https://media.istockphoto.com/id/1336071300/photo/coronavirus-covid-19-new-variant-mutation.jpg?s=612x612&w=0&k=20&c=Ce5p292PNk9lFh6QaHWHxqiKQ1kNWfgscll7s5u6QZI="
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              My Care Labs Was Founded During The Covid-19 Pandemic. We Provide Fast, Simple, Accurate Infectious Disease Testing Through Combination 
              Covid-19 RT-PCR Tests With Same-Day Or Within 24 Hours Test Result Reporting, Dependent On California Test Site Location. Coming Soon: 
              Flu And RSV Testing..
              </p>
              <ul role="list" className="mt-8 space-y-8 text-center text-gray-600">
                <li className="flex gap-x-2">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Testing Made Easy.</strong> Book A Discovery Call Today So We Can Determine The Best Fit For Your Organization’s Needs.
                  </span>
                </li>
                <li className="flex gap-x-2">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">For Business Travelers And Leisure Vacationers.</strong> We Offer Pre-Flight And Pre-Cruise Travel Testing. Our Normal Rate Is $225 For Travel Testing With Covid Redipass PDF/QR Code Reporting.
                  </span>
                </li>
                <li className="flex gap-x-2">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">We Provide Individual/Small Group Testing.</strong> Our Silicon Valley Laboratory, Pop-Up Test Site Locations Throughout Northern And Southern California, And Mobile-Testing-On-Demand In Select Metro Areas.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              We Have Provided And Supported Customized Covid Testing At Schools, Nursing Homes, Businesses, And Other Large Organizations Since 2021.
               All Our CLIA-Certified Diagnostic Laboratory Services Are NO COST TO YOU With Any Insurance Plan And Low Cost For Uninsured Patients. 
              We Only Bill Insurance Companies – Not You The Patient – Unless You Are Paying Cash In Special Circumstances.
              </p>
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
