import React from 'react'

const Content = () => {
  return (
    <div>
     <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="grid grid-cols-1 items-center justify-center gap-12 sm:gap-20 lg:grid-cols-2">
      {/* Image Div */}
      <div className="relative h-full max-h-[560px] w-[85%] overflow-visible max-[991px]:left-4 md:w-[95%] lg:w-full">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
      <div className="absolute bottom-0 left-[-16px] right-0 top-4 -z-[1] h-full w-full rounded-2xl bg-black"></div>
      </div>
      {/* Content Div */}
      <div className="max-w-[720px]">
        <h2 className="mb-6 text-3xl font-semibold md:mb-10 md:text-5xl"><span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center px-4 text-white">What is</span>&nbsp;C-Reactive Protein (CRP)?</h2>
        {/* Features */}
        <div >
        <h6 class="text-3xlfont-bold mb-4">CRP is an acute-phase protein produced by the liver in response to inflammation, infection, or tissue damage. Its levels rise rapidly in the bloodstream in response to these conditions and fall once the inflammation subsides.</h6>
        
    </div>
        <div className="grid max-w-[400px] grid-cols-2 gap-4">
          {/* Feature Item */}
          <div className="flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block" />
            <p className="text-[#636262]">300+ UI Blocks</p>
          </div>
          {/* Feature Item */}
          <div className="flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block" />
            <p className="text-[#636262]">Full Responsive</p>
          </div>
          {/* Feature Item */}
          <div className="flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block" />
            <p className="text-[#636262]">New UI Blocks</p>
          </div>
          {/* Feature Item */}
          <div className="flex items-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg" alt="" className="mr-2 inline-block" />
            <p className="text-[#636262]">Just Copy &amp; Paste</p>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-10 mt-10 w-full max-w-md border-b border-b-[#d9d9d9]"></div>
        <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get started</a>
      </div>
    </div>
  </div>
</section>
 
    </div>
  )
}

export default Content
