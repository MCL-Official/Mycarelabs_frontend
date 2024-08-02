import React from 'react'

const Sample = () => {
  return (
    <div>
      <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
      {/* Image Div */}
      <div className="relative left-4 h-full max-h-[560px] w-[85%] md:left-0 md:w-[95%] lg:w-full">
        <img src="https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?t=st=1722632868~exp=1722636468~hmac=31f668f96bcfff7b70539d2d91a8ebd44b4a3c2f3dd3412ec1930987b400704c&w=2000" alt="" className="mx-auto block h-full w-full max-w-[800px] rotate-[3.5deg] rounded-2xl object-cover" />
        <div className="absolute bottom-0 left-[-16px] right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
      </div>
      {/* Heading Div */}
      <div className="max-w-[720px] max-[991px]:[grid-area:1/1/2/2] lg:max-w-[842px]">
        {/* Heading Text */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-5xl">Liver  <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center bg-no-repeat px-4 text-white">Function </span> <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">Panel</span>  Tests</h2>
          <p className="max-w-[480px] text-[#636262]">The liver, an essential organ in the human body, performs a multitude of crucial functions, from filtering blood to metabolizing nutrients and detoxifying harmful substances. </p>
        </div>
        {/* Divider */}
        <div className="mb-12 mt-12 h-0 w-40 border"></div>
        {/* Features */}
        <div className="flex flex-col items-start">
          {/* Item */}
          <div className="mb-2 flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block h-4 w-4" />
            <p className="text-[#636262]">Monitoring liver health is paramount</p>
          </div>
          {/* Item */}
          <div className="mb-2 flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block h-4 w-4" />
            <p className="text-[#636262]">One of the primary methods to assess its functionality.</p>
          </div>
          {/* Item */}
          <div className="mb-2 flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block h-4 w-4" />
            <p className="text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          {/* Item */}
          <div className="flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block h-4 w-4" />
            <p className="text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Sample
