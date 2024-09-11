import './App.css'
import analyticsImg from './assets/analytics-3.jpg'
import dashboardImg from './assets/analytics-2.jpg'
import unlockImg from './assets/unlock-growth.jpg'
import profileImg from './assets/profile-image.jpeg'
import pageGraphics from './assets/pie.png';
import { InView, useInView  } from "react-intersection-observer";
import { useState } from 'react';


function App() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: true,
  });

  const [inViewState, setInViewState] = useState(false)


  return (
    <>
    <div>
      {/* Introduction section */}
      <div class='mt-[15%] p-8 md:max-w-xl lg:max-w-[70%] lg:mt-[7%]'>
        <h2 class='text-[#9DBDF8] mt-16 text-6xl'>Hi There, </h2>
        <h5 class='text-3xl font-bold mt-16 animate-fadeUp'>I am Gbadamosi Farouk</h5>
        <p class='text-2xl font-normal leading-relaxed mt-8 animate-fadeUp'>
          A full-stack data solutions developer,  with over 6 years of relevant experience building real-time monitoring platforms, smart root-cause alerting solutions, and self-service business analytics products. 
          I love leveraging the most compelling visuals for faster decision making and for breaking down concepts to business users of all types.
        </p>
      </div>
      {/* Introduction section 2 */}
      <div class='mt-24 bg-[#9DBDF8]'>
        <div class ='flex flex-col gap-y-16 p-8 lg:flex-row lg:items-center lg:gap-x-64 lg:mt-32 overflow-hidden'>
          <div class='w-full self-start lg:w-2/4'>
            <InView as="div" onChange={(inView, entry) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
              <h5 class= 
              {
              inViewState?
              'text-2xl md:text-3xl font-bold animate-fadeLeft':
              'text-2xl md:text-3xl font-bold opacity-0'
              }>
                Over the past 2 years…
              </h5>
            </InView>
            <InView as="div" onChange={(inView, entry) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
              <div class=
              {
                inViewState?
                'flex items-center gap-x-4 text-xl md:text-2xl font-normal leading-relaxed mt-8 animate-fadeUp':
                'flex items-center gap-x-4 text-xl md:text-2xl font-normal leading-relaxed mt-8 opacity-0'
                }>
                <svg class="w-12 h-12 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                </svg>
                <p>
                  I have led a high performing team of data engineers, data analysts and back-end developers.
                </p>
              </div>
            </InView>
            <InView as="div" onChange={(inView, entry) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
              <div class=
              {
                inViewState?
                'flex items-center gap-x-4 text-xl md:text-2xl font-normal leading-relaxed mt-4 animate-fadeUp':
                'flex items-center gap-x-4 text-xl md:text-2xl font-normal leading-relaxed mt-4 opacity-0'
                }>
                <svg class="w-16 h-16 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                </svg>
                <p>
                  I have saved my organizations over <b>$200K</b> anually through cost reduction, and reduction in revenue leakages from app unreliability.
                </p>
              </div>
            </InView>
          </div>
          <div class='animate-once w-[90%] max-w-[500px] self-end sm:w-[70%] lg:w-1/3'
            >
            <InView as="div" onChange={(inView, entry) => setInViewState(inView)} triggerOnce={true} threshold={0.2}>
              <img class=
              {
                inViewState?
                "w-auto h-auto self-end animate-fadeRight":
                "w-auto h-auto self-end opacity-0"
              }
              src={pageGraphics} alt="graphics"/>
            </InView>  
          </div>
        </div>
      </div>
      {/* Projects section */}
      <div class="bg-[white] px-6 pt-12 pb-8 overflow-x-scroll md:px-12">
        <h3 class="text-gray-600 text-xl mb-8 font-medium">Selected Work</h3>
        <div class="flex gap-8 " ref={ref}>
            <div class=
            {
              inView?
              "animate-blurChild1 min-w-[80%] h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full":
              "min-w-[80%] opacity-0 h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full"

            }
             style={{backgroundImage: "url('" + unlockImg + "')"}}>
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                    <h2 class="text-xl text-white font-semibold">Unlock Growth with metric trees</h2>
                    <p class="mt-8 text-gray-300">Most companies are drowning in metrics and dashboards, this project solves that problem by compressing metrics with the highest signals</p>
                    <a href="https://github.com/pharouhk/metrics-tree-saas" class="flex items-center mt-12 px-3 py-2 w-36 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" target="_blank" rel="noopener noreferrer">
                        <span>Go to App</span>
                        <svg class="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
              </div>
            </div>
            <div class=
            {
              inView?
              "animate-blurChild2 min-w-[80%] h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full":
              "min-w-[80%] opacity-0 h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full"
            }
             style={{backgroundImage: "url('" + dashboardImg + "')"}}>
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                    <h2 class="text-xl text-white font-semibold">Highly Interactive Store Dashboard in 100% python</h2>
                    <p class="mt-8 text-gray-300">This is a project built that shows how to use python to build highly interactive dashboards without React</p>
                    <a href="https://github.com/pharouhk/sample-store-app" class="flex items-center mt-12 px-3 py-2 w-36 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" target="_blank" rel="noopener noreferrer">
                        <span>Go to App</span>
                        <svg class="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
              </div>
            </div>
            <div class=
            {
              inView?
              "animate-blurChild3 min-w-[80%] h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full":
              "min-w-[80%] opacity-0 h-96 max-w-[390px] rounded-md overflow-hidden bg-cover bg-center sm:min-w-[50%] lg:min-w-[25%] lg:max-w-full"
            }
             style={{backgroundImage: "url('" + analyticsImg + "')"}}>
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                    <h2 class="text-xl text-white font-semibold">Product Analytics</h2>
                    <p class="mt-8 text-gray-300">This is a sample product analytics dashboard for tracking key product metrics for growth</p>
                    <a href="https://github.com/pharouhk/product-analytics-saas/tree/main" class="flex items-center mt-12 px-3 py-2 w-36 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" target="_blank" rel="noopener noreferrer">
                        <span>Go to App</span>
                        <svg class="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* profile image section */}
      {/* <div class='flex flex-col pt-16 px-6 gap-y-4 text-center items-center md:flex-row md:gap-x-8 md:px-12'>
          <div class="flex-shrink-0">
            <img class="w-48 h-48 rounded-full" src="https://media.licdn.com/dms/image/v2/D4D03AQHL_fJO1w9wjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665906376557?e=1730937600&v=beta&t=FVPu0l8lfuGFQlSRQH-5-dK9TpV6W21dXLxZz8P06Xs" alt="Farouk's profile image"/>
          </div>
          <div class='flex flex-col'>
            <h5 class='text-lg text-gray-800 font-bold leading-normal'>Gbadamosi Farouk</h5>
            <p class='text-base text-gray-600 font-normal'>Full stack data solutions developer</p>
            <p>Location: Lagos Nigeria</p>
          </div>
      </div> */}
      <div class="mt-8 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6">
          <div class="flex items-center gap-x-6 sm:space-x-0 xl:space-x-0 2xl:space-x-4">
              <img class="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src={profileImg} alt="Gbadamosi Farouk"/>
              <div>
                  <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Contact</h3>
                  <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                      fgbadamosi@ymail.com 
                  </div>
                  <div class="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/farouk-gbadamosi/" target="_blank" rel="noopener noreferrer">
                      <button type="button" class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          LinkedIn
                      </button>
                    </a>
                      {/* <button type="button" class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          Substack
                      </button> */}
                  </div>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
