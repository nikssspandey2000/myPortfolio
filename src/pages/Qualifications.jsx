import React from 'react'

function Edu() {
  return (
    <>
<div className="w-full px-4 text-black font-montserrat">
    <div className="tree-wrapper lg:w-full min-h-[50vh] lg:mx-auto ">
        <h2 className='text-4xl font-bold text-center subpixel-antialiased mb-8 min-w-max animate-toTop1'>🎓 Education </h2>
        
        <div
            className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:even:translate-x-[50%] even:translate-x-0 lg:w-max w-full z-[1]">    
            <div
                className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
                CA</div>
            <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
                <div className="course-title">Chartered Accountant</div>
                <div className="institution">Institute of Chartered Accountant of Nepal</div>
                <div className="location">Sabdobato, Lalitpur</div>
                <div className="starting-year">2018-Running</div>
                {/* <div className="graduation-year">Running</div> */}
                <div className="description">Throughout my CA journey, I have accumulated a comprehensive understanding of audit and accounting knowledge.</div>
                <div className="result"></div>
            </div>
        </div>
        <div
            className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:odd:translate-x-[150%] lg:odd:translate-x-[100%] even:translate-x-0 lg:w-max w-full z-[1]">
            <div
                className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
                BBS</div>
            <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
                <div className="course-title">Bachelors in Business Studies</div>
                <div className="institution">Divya Gyan College</div>
                <div className="location">Kamaladi, Kathmandu</div>
                <div className="starting-year">2018-2023</div>
                {/* <div className="graduation-year">2023</div> */}
                <div className="description">Throughout my bachelor's journey, I have accumulated a comprehensive understanding of account and finance related knowledge.</div>
                <div className="result"></div>
            </div>
        </div>
        <div
            className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:even:translate-x-[50%] even:translate-x-0 lg:w-max w-full z-[1]">
            <div
                className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
                HSEB</div>
            <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-ltr5">
                <div className="course-title">HSEB Science</div>
                <div className="institution">Universal College</div>
                <div className="location">Maitidevi, Kathmandu</div>
                <div className="starting-year">2016-2018</div>
                {/* <div className="graduation-year">2018</div> */}
                <div className="description">I had a strong passion for science and took it as my major in +2. Later, I started to get interested in finance.</div>
                <div className="result"></div>
            </div>
        </div>
        <div
            className="flex lg:flex-row flex-col lg:items-center lg:gap-2 group  relative top-0 xl:left-1/6 xl:right-1/6 xl:odd:translate-x-[150%] lg:odd:translate-x-[100%] even:translate-x-0 lg:w-max w-full z-[1]">
            <div
                className="pointer p-4 bg-gray-500/20 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full lg:group-even:order-2 group-even:order-none lg:group-odd:-translate-x-1/2 lg:translate-x-1/2 translate-x-0 mx-auto lg:mx-0">
                SLC</div>
            <div className="details lg:max-w-sm p-5 bg-gray-100 bg-gray-500/20 rounded-md my-3 shadow-inner shadow-[#ffffffbd] animate-rtl5">
                <div className="course-title">SLC</div>
                <div className="institution">Siddhasthali English Boarding Higher Secondary School</div>
                <div className="location">Madhi Bazar 2, Sindhuli</div>
                <div className="starting-year">2005-2015</div>
                {/* <div className="graduation-year">2015</div> */}
                <div className="description">School life was normal.</div>
                <div className="result"></div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Edu


// import React from 'react'
// import "../assets/Qualifications.css"

// const Qualifications = () => {
//     return (
//         <>
//           <h1>DEGREE</h1>
//           <div className="eduContainer">
//             <div className="leftDiv">
//               <div className="building">
//                 <h2>SLC</h2>
//                 <h1>Siddhasthali English Boarding H.S.School</h1>
    
//                 <p>
//                   Sindhuli Madhi, 2 <span className="completedYear">2072 B.S.</span>
//                 </p>
//               </div>
    
//               <div className="building">
//                 <h2>HSEB Science</h2>
//                 <h1>Milestone International College</h1>
//                 <p>
//                   Balkumari, Lalitpur{" "}
//                   <span className="completedYear">2075 B.S.</span>
//                 </p>
//               </div>
//             </div>
    
//             <div className="vl"></div>
    
//             <div className="rightDiv">
//               <div className="building">
//                 <h2>Bachelors in Computer Engineering</h2>
//                 <h1>Nepal College of Information Technology</h1>
//                 <p>
//                   Balkumari, Lalitpur{" "}
//                   <span className="completedYear">2080 B.S.</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </>
//       );
// }

// export default Qualifications

