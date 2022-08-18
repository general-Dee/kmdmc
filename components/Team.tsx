import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Team from '../components/Team'

function Team() {
  return (
// {/* <section classNameName="text-gray-600 body-font">
//   <div classNameName="container px-5 py-24 mx-auto">
//     <div classNameName="flex flex-col text-center w-full mb-20">
//       <h1 classNameName="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR MANAGEMENT TEAM</h1>
//       {/* <p classNameName="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
//     </div>
//     <div classNameName="flex flex-wrap -m-4">
//       <div classNameName="p-4 lg:w-1/2">
//         <div classNameName="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//           <Image src="/img/md2.jpg" width={200} height={200} alt="team" classNameName="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"/>
//           <div classNameName="flex-grow sm:pl-8">
//             <h2 classNameName="title-font font-medium text-lg text-gray-900">Tamar Nandul</h2>
//             <h3 classNameName="text-gray-500 mb-3">MD / CEO</h3>
//             <p classNameName="mb-4">Managing Director and Chief Executive Officer</p>
//             <span classNameName="inline-flex">
//               {/* <div classNameName="text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={""}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                   </svg>
//                 </Link> 
//               </div> */}
//               <div classNameName="ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={"https://twitter.com/tnandul"}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                   </svg>
//                 </Link>
//               </div>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div classNameName="p-4 lg:w-1/2">
//         <div classNameName="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//           <Image src="/img/cs.jpg" width={200} height={200} alt="team" classNameName="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"/>
//           <div classNameName="flex-grow sm:pl-8">
//             <h2 classNameName="title-font font-medium text-lg text-gray-900">Muhammed Sani Suleiman</h2>
//             <h3 classNameName="text-gray-500 mb-3">CS</h3>
//             <p classNameName="mb-4">Company Secretary and Legal Adviser</p>
//             <span classNameName="inline-flex">
//               {/* <div classNameName="text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={""}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                   </svg>
//                 </Link> 
//               </div> */}
//               <div classNameName="ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={"https://twitter.com/sanisuleimanu"}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                   </svg>
//                 </Link>
//               </div>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div classNameName="p-4 lg:w-1/2">
//         <div classNameName="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//         <Image src="/img/gm.jpg" width={200} height={200} alt="team" classNameName="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"/>
//           <div classNameName="flex-grow sm:pl-8">
//             <h2 classNameName="title-font font-medium text-lg text-gray-900">Yemi Bakare</h2>
//             <h3 classNameName="text-gray-500 mb-3">GM</h3>
//             <p classNameName="mb-4">General Manager</p>
//             <span classNameName="inline-flex">
//               {/* <div classNameName="text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={""}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                   </svg>
//                 </Link>
//               </div> */}
//               <div classNameName="ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
//                 <Link href={"https://twitter.com/YemieBakare"}>
//                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                   </svg>
//                 </Link>
//               </div>
//               {/* <a classNameName="ml-2 text-gray-500">
//                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>
//               </a> */}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section> */}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">MANAGEMENT TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 mx-auto lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image src="/img/md2.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Tamar Nandul</h2>
            <h3 className="text-gray-500 mb-3">MD / CEO</h3>
            <p className="mb-4">Managing Director and Chief Executive Officer</p>
            <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
              <Link href={"https://twitter.com/tnandul"}>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 mx-auto lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image src="/img/cs.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Muhammed Sani Suleiman</h2>
            <h3 className="text-gray-500 mb-3">CS</h3>
            <p className="mb-4">Company Secretary and Legal Adviser</p>
            <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
              <Link href={"https://twitter.com/sanisuleimanu"}>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 mx-auto lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <Image src="/img/gm.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Yemi Bakare</h2>
            <h3 className="text-gray-500 mb-3">GM</h3>
            <p className="mb-4">General Manager</p>
            <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
              <Link href={"https://twitter.com/YemieBakare"}>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    
      {/* <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div> */}
      {/* <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div> */}
      
    </div>
  </div>
</section>
  )
}

export default Team