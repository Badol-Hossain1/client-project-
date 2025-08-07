
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../public/asset/Rectangle.png'

import Navbar from './components/navbar/Navbar'
import { achievements, projects, services } from "./data/data";

function App() {


  return (
    <div className="bg-black text-white font-sans">
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">SHUVO.A</h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-green-500">Home</a>
        <a href="#work" className="hover:text-green-500">Work</a>
        <a href="#services" className="hover:text-green-500">Services</a>
        <a href="#pricing" className="hover:text-green-500">Pricing</a>
      </nav>
      <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full font-semibold">BOOK A CALL</button>
    </header>

    <section className="flex md:w-10/12 mx-auto flex-col md:flex-row justify-between items-center px-6 py-12 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">RAIHAN AHAMED SHUVO</h2>
        <h3 className="text-2xl font-semibold text-green-500 mb-4">UI/UX DESIGNER</h3>
        <p className="text-gray-400 max-w-md mb-6">A CREATIVE DESIGNER WHO TRANSFORMS COMPLEX BUSINESS WITH HIGHLY CONVERTING, USER-CENTRIC & IMPACTFUL USER EXPERIENCES. A TRUE GAME-CHANGER & CUSTOMER OBSESSED.</p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-gray-800 border border-white hover:bg-white hover:text-black font-semibold">VIEW MY WORK</button>
          <button className="px-6 py-2 bg-green-500 text-black font-semibold hover:bg-green-600">HIRE NOW</button>
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
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold whitespace-nowrap">
          BOOK A CALL
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

    <div className="bg-black text-white px-6 py-14 font-sans">
      <h2 className="text-3xl font-bold mb-10">🎯 ACHIEVEMENTS</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((a, idx) => (
          <div key={idx} className="border border-green-500 p-4 rounded-xl">
            <img src={a.img} alt={a.title} className="rounded-md mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{a.title}</h3>
              <button className="text-green-500 text-sm font-semibold">✔ VIEW DETAILS</button>
            </div>
            <p className="text-sm text-gray-400 mb-1">Our Role: Design, Development</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-300">
              <span className="bg-gray-800 px-2 py-1 rounded">Figma</span>
              <span className="bg-gray-800 px-2 py-1 rounded">Webflow</span>
              <span className="bg-gray-800 px-2 py-1 rounded">Project Insight</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold">VIEW MORE WORKS</button>
      </div>

      <section className="mt-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">WHAT OUR CLIENTS SAY</h2>
            <div className="flex space-x-2">
              <button className="text-green-500 text-xl hover:scale-110 transition">◀</button>
              <button className="text-green-500 text-xl hover:scale-110 transition">▶</button>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-sm text-gray-200 relative">
            <p className="mb-6 leading-relaxed">
              Working with Shuvo was smooth, professional, and truly impressive. From the first discussion
              to the final handoff, he was highly responsive and understood our vision perfectly.
              He delivered a clean, fast, and conversion-focused landing page that not only looked great
              but performed beyond expectations. His attention to detail, design thinking, and clear
              communication made the entire collaboration feel effortless. I’d absolutely work with him again.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <img src="/client.jpg" alt="Client Avatar" className="w-12 h-12 rounded-full border border-green-500" />
              <div>
                <p className="font-semibold">Ife Osakuade</p>
                <p className="text-xs text-gray-400">Founder @ Paragraph</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default App
