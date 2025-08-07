
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../public/asset/Rectangle.png'
import text from '../public/asset/text.png'
import jj from '../public/asset/jj.png'

import Navbar from './components/navbar/Navbar'
import { projectData, projects, services } from "./data/data";
import Footer from "./components/Footer";

function App() {

 


  return (

    <div className="bg-black">

    <div className="  max-w-7xl mx-auto text-white font-sans">
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <img className="cursor-pointe md:w-40 w-25" src={text} alt="" />
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-green-500">Home</a>
        <a href="#work" className="hover:text-green-500">Work</a>
        <a href="#services" className="hover:text-green-500">Services</a>
        <a href="#pricing" className="hover:text-green-500">Pricing</a>
      </nav>
      <button className="bg-black  flex gap-4 cursor-pointer text-sm md:text-md items-center text-white border font-bold px-4 py-2 rounded-full ">BOOK A CALL
        <img className="w-6" src={jj} alt="" />
         </button>
    </header>

    <section className="flex md:w-10/12 mx-auto flex-col md:flex-row justify-between items-center px-6 py-12 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">RAIHAN AHAMED SHUVO</h2>
        <h3 className="text-2xl font-semibold text-green-500 mb-4">UI/UX DESIGNER</h3>
        <p className="text-gray-400 max-w-md mb-6">A CREATIVE DESIGNER WHO TRANSFORMS COMPLEX BUSINESS WITH HIGHLY CONVERTING, USER-CENTRIC & IMPACTFUL USER EXPERIENCES. A TRUE GAME-CHANGER & CUSTOMER OBSESSED.</p>
        <div className="flex space-x-4">
          <button className="md:px-6 px-3 py-2 bg-gray-800 border border-white hover:bg-white hover:text-black font-semibold rounded-full">VIEW MY WORK</button>
          <button className="md:px-6 px-3 py-2 bg-green-500 text-black font-semibold hover:bg-green-600 rounded-full">HIRE NOW</button>
        </div>
      </div>
      <img src={logo} alt="Shuvo" className="w-64 h-64 object-cover rounded-xl border border-green-500" />
    </section>

    <section className="text-center px-6 py-10">
      <h3 className="text-2xl font-bold mb-6">57 PROJECTS COMPLETED AND COUNTING</h3>
      <div className="max-w-4xl mx-auto">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} className="rounded-md overflow-hidden">
          {projects.map((p, i) => (
            <div key={i}>
              <img src={p.img} alt={p.alt} className="object-cover h-64 w-full" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>

    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left - Title */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 md:mb-0">
          DESIGN THAT SOLVES,<br className="hidden md:block" />
          EXPERIENCES THAT CONVERT
        </h2>

        {/* Right - CTA */}
        <button className="bg-black cursor-pointer flex gap-4 items-center text-white border font-bold px-4 py-2 rounded-full ">BOOK A CALL
        <img className="w-6" src={jj} alt="" />
         </button>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* 01 - Unique Section */}
        <div className="relative border-l-2 border-green-500 pl-6">
          <span className="text-green-500 text-xl font-bold absolute -left-6 top-0">01</span>
          <h3 className="text-white text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Every design is intentionally constructed to convert – plain perfect, user-focused, and
            strategically aligned with your goals to boost user engagement, retention, and
            high-performing digital experiences.
          </p>
        </div>

        {/* Loop Through Remaining Services */}
        {services.map((service) => (
          <div
            key={service.number}
            className="flex items-center justify-between border-b border-gray-700 py-4"
          >
            <div className="flex items-center gap-4">
              <span className="text-white font-bold">{service.number}</span>
              <p className="text-white font-semibold">{service.title}</p>
            </div>
            <span className="text-white text-2xl">→</span>
          </div>
        ))}
      </div>
    </section>

    <div className="bg-black text-white px-6 py-16 max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold mb-12">ACHIEVEMENTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-[#101010] border border-[#1F1F1F] p-4 rounded-lg flex flex-col justify-between"
          >
            <img src={project.image} alt={project.title} className="mb-4 rounded" />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">Our Role</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.roles.map((role, index) => (
                    <span key={index} className="bg-gray-800 px-2 py-1 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-6 bg-green-500 text-sm px-4 py-2 rounded w-fit self-end">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold text-sm">
          VIEW MORE WORKS
        </button>
      </div>
    </div>
  </div>
    <Footer />
    </div>
  )
}

export default App
