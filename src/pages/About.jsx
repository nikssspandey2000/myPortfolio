import { Link } from "react-router-dom"
import Profilpic from "../assets/images/profilepic.jpg"

const links = [
  { name: 'Articles', href: '/articles' },
  { name: 'Work Experience', href: '/qualifications' },
  { name: 'Contact Me', href: 'mailto:nikssspandey2000@example.com' },
]
const stats = [
  { name: 'Articles', value: '2' },
  { name: 'Work Experience', value: '2 Years' },
  
  { name: 'Available For Hire', value: 'Yes' },
]

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* About background image */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1724715060079-8ce6c4af6e09?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter grayscale-[30%] contrast-125 mix-blend-overlay"  
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <section className="flex flex-col-reverse gap-4 lg:flex-row justify-around">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">More About Me</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-red-100 sm:text-xl/8">
          I am a results-driven CA Finalist with extensive experience in financial consulting, audit, and regulatory compliance, including the implementation of NFRS 9 (Expected Credit Loss) frameworks for leading financial institutions. My expertise spans developing predictive credit models (PD, LGD, EAD), preparing NFRS-compliant financial statements, and conducting revenue audits and financial investigations.

I thrive on managing complex data, streamlining financial reporting processes, and providing strategic insights that drive operational excellence. My role as a trusted consultant has enabled organizations to achieve compliance with regulatory frameworks while optimizing their financial performance.

Passionate about leveraging technology in finance, I am also skilled in tools like Excel, Python, and MySQL, ensuring efficient and precise handling of data and analysis. With a commitment to continuous learning and growth, I aim to deliver impactful solutions that add value to stakeholders.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} to={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>

        <div className="mx-auto px-6 lg:px-8 overflow-hidden w-[300px] md:w-[400px] hover:rotate-[-10deg] transition-all duration-300 ">
          {/* profile pic image */}
          
          <img src={Profilpic} alt="pandey" className="w-full object-cover scale-y-120 drop-shadow-2xl" style={{ borderRadius: '42% 58% 69% 31% / 45% 21% 79% 55% ' }} />
        </div>
      </section>
    </div>
  )
}