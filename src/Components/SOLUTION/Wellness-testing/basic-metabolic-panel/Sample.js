import React from 'react'

const Sample = () => {
  return (
    <div>
      <header>
  {/* Hero Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
      {/* Hero Content */}
      <div className="flex max-w-2xl flex-col items-start">
        {/* Hero Title */}
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Basic Metabolic
        Panel (BMP).</h1>
        <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">Blood tests play a crucial role in assessing various aspects of our health. Among these tests, the Basic Metabolic Panel (BMP) holds significance in providing essential insights into our body’s metabolic functions. Let’s discuss as to what a BMP entails, its components, and why it’s a valuable tool in healthcare</p>
        {/* Hero Form */}
        <div className="mb-5 w-full pb-8 md:mb-6 lg:mb-4">
          <form name="email-form" method="get" className="flex max-w-[90%] flex-col items-start sm:flex-row">
            <input type="email" className="mb-5 mr-6 h-9 w-full bg-[#f2f2f7] px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]" maxLength="256" name="email" placeholder="Enter your email" required="" />
            <input type="submit" value="Subscribe" className="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-3 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] sm:w-36" />
          </form>
        </div>
        {/* Hero Info */}
        <div className="grid w-full grid-flow-row grid-cols-3 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">10K+</h3>
            <p className="text-sm text-[#636262]">Tests</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">200K+</h3>
            <p className="text-sm text-[#636262]">Emails</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">500+</h3>
            <p className="text-sm text-[#636262]">Patients</p>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <img src="https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?t=st=1722632868~exp=1722636468~hmac=31f668f96bcfff7b70539d2d91a8ebd44b4a3c2f3dd3412ec1930987b400704c&w=2000" alt="" className="inline-block h-full w-full max-w-[640px]" />
    </div>
  </div>
</header>

    </div>
  )
}

export default Sample
