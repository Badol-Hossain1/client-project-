// ServicesAccordion.jsx

import { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import logo from '../../../public/asset/img.jpeg'

const services = [
    {
        number: '01',
        title: 'UI/UX Design',
        content:
            'We create stunning and responsive web designs that captivate your audience and keep them engaged.',
    },
    {
        number: '02',
        title: 'Landing page',
        content:
            'Our developers build scalable and maintainable web applications using modern technologies.',
    },
    {
        number: '03',
        title: 'Web Design',
        content:
            'Optimize your site to rank higher on search engines and increase your online visibility.',
    },
    {
        number: '04',
        title: 'Mobile app Design',
        content:
            'We design intuitive and elegant mobile interfaces that ensure a seamless user experience.',
    },
    {
        number: '05',
        title: 'Animation Design',
        content:
            'We create engaging animations that enhance user interaction and bring your ideas to life.',
    },
]

export default function ServicesAccordion() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-black min-h-screen flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-6xl">
                <h2 className="text-white text-3xl font-bold mb-10">
                    Our Services
                </h2>

                <div className="flex flex-col   md:w-7xl  md:flex-row-reverse gap-8 justify-between">
                    <div className="w-full">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#111] rounded-xl mb-6 p-4 shadow-lg"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex w-full items-center justify-between border-b border-gray-700 py-4 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-white font-bold">
                                            {service.number}
                                        </span>
                                        <span className="text-white font-semibold">
                                            {service.title}
                                        </span>
                                    </div>
                                    <ChevronUpIcon
                                        className={`${
                                            openIndex === index
                                                ? 'rotate-180'
                                                : ''
                                        } h-5 w-5 text-white transition-transform`}
                                    />
                                </button>

                                {openIndex === index && (
                                    <div className="pt-4 text-gray-300">
                                        {service.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <img className="md:h-134 rounded-xl" src={logo} alt="" />
                </div>
            </div>
        </section>
    )
}
