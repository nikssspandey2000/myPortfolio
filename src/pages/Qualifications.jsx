// import React from 'react'

// function Edu() {
//   return (
//     <>
// <div className="w-full px-4 text-black font-montserrat">
//     <div className="tree-wrapper lg:w-full min-h-[50vh] lg:mx-auto ">
//         <h2 className='text-4xl font-bold text-center subpixel-antialiased mb-8 min-w-max animate-toTop1'>🎓 Education </h2>

//         <div
//             className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:even:translate-x-[50%] even:translate-x-0 lg:w-max w-full z-[1]">
//             <div
//                 className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
//                 CA</div>
//             <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
//                 <div className="course-title">Chartered Accountant</div>
//                 <div className="institution">Institute of Chartered Accountant of Nepal</div>
//                 <div className="location">Sabdobato, Lalitpur</div>
//                 <div className="starting-year">2018-Running</div>
//                 {/* <div className="graduation-year">Running</div> */}
//                 <div className="description">Throughout my CA journey, I have accumulated a comprehensive understanding of audit and accounting knowledge.</div>
//                 <div className="result"></div>
//             </div>
//         </div>
//         <div
//             className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:odd:translate-x-[150%] lg:odd:translate-x-[100%] even:translate-x-0 lg:w-max w-full z-[1]">
//             <div
//                 className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
//                 BBS</div>
//             <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
//                 <div className="course-title">Bachelors in Business Studies</div>
//                 <div className="institution">Divya Gyan College</div>
//                 <div className="location">Kamaladi, Kathmandu</div>
//                 <div className="starting-year">2018-2023</div>
//                 {/* <div className="graduation-year">2023</div> */}
//                 <div className="description">Throughout my bachelor's journey, I have accumulated a comprehensive understanding of account and finance related knowledge.</div>
//                 <div className="result"></div>
//             </div>
//         </div>
//         <div
//             className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:even:translate-x-[50%] even:translate-x-0 lg:w-max w-full z-[1]">
//             <div
//                 className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
//                 HSEB</div>
//             <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-ltr5">
//                 <div className="course-title">HSEB Science</div>
//                 <div className="institution">Universal College</div>
//                 <div className="location">Maitidevi, Kathmandu</div>
//                 <div className="starting-year">2016-2018</div>
//                 {/* <div className="graduation-year">2018</div> */}
//                 <div className="description">I had a strong passion for science and took it as my major in +2. Later, I started to get interested in finance.</div>
//                 <div className="result"></div>
//             </div>
//         </div>
//         <div
//             className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:odd:translate-x-[150%] lg:odd:translate-x-[100%] even:translate-x-0 lg:w-max w-full z-[1]">
//             <div
//                 className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
//                 SLC</div>
//             <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
//                 <div className="course-title">SLC</div>
//                 <div className="institution">Siddhasthali English Boarding Higher Secondary School</div>
//                 <div className="location">Madhi Bazar 2, Sindhuli</div>
//                 <div className="starting-year">2005-2015</div>
//                 {/* <div className="graduation-year">2015</div> */}
//                 <div className="description">School life was normal.</div>
//                 <div className="result"></div>
//             </div>
//         </div>
//     </div>
// </div>
//     </>
//   )
// }

// export default Edu

import React from "react";
import { CiApple } from "react-icons/ci";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';

import { FaSchool, FaBriefcase  } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const Qualifications = () => {
  return (
    <section className="py-8">
        <VerticalTimeline lineColor="rgba(245, 151, 79, 0.52)">
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Articleship</h3>
    <h4 className="vertical-timeline-element-subtitle">Bidur Associates</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018-2023"
    iconStyle={{ background: 'orange', color: '#fff' }}
    icon={<FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">BBS</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2018"
    iconStyle={{ background: 'orange', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">HSEB</h3>
    <h4 className="vertical-timeline-element-subtitle">Universal College</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2005 - 2015"
    iconStyle={{ background: 'orange', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">School</h3>
    <h4 className="vertical-timeline-element-subtitle">Siddhasthali English Boarding Higher Secondary School</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>

  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<CiApple />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
   */}
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<CiApple />}
  />
    </VerticalTimeline>
    </section>
  );
};

export default Qualifications;
