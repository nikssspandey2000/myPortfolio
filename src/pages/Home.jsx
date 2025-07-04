import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-rose-100 md:min-h-screen">
      


      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
            
        </div>

        {/* <img
        alt=""
        src="https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}

        <div className="mx-auto max-w-2xl py-14 sm:py-5 lg:py-12">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Want to connect with me.{' '}
              <Link to="mailto:nikssspandey2000@example.com" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Contact me <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              I am Nikesh Pandey pursuing CA. 
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              I'm currently working at B.Lama and Associate as a CA associate. I've passed my cap II CA exam and I'm preparing for my upcoming exam.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8">
              <Link
                to="/articles"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                My Articles
              </Link>
              <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
                More About Me<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default Home