import React from 'react'

const projects = [
    {
        id: 1,
        title: 'Vatamen Website',
        image: '../../public/asset/image.png',
        roles: ['Design', 'Development', 'Project Insight'],
    },
    {
        id: 2,
        title: 'NIA Website',
        image: 'https://ibb.co.com/tMB0t4zm',
        roles: ['Design', 'Development', 'Project Insight'],
    },
    {
        id: 3,
        title: 'FIREFLY TV Website',
        image: '../../public/asset/hi.png',
        roles: ['Design', 'Development', 'Project Insight'],
    },
    {
        id: 4,
        title: 'LEOFFR Website',
        image: '../../public/asset/no.png',
        roles: ['Design', 'Development', 'Project Insight'],
    },
]

const AchievementCard = ({ image, title, roles, className = '' }) => (
    <div
        className={`absolute border-green-500 bg-[#101010] border  rounded-lg p-4 w-[430px] h-[430px] flex flex-col justify-between ${className}`}
    >
        <img
            src={image}
            alt={title}
            className="rounded mb-4 w-full h-[200px] object-cover"
        />
        <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">Our Role</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
                {roles.map((role, idx) => (
                    <span key={idx} className="bg-gray-800 px-2 py-1 rounded">
                        {role}
                    </span>
                ))}
            </div>
        </div>
        <button className="bg-green-500 text-sm px-4 py-2 rounded w-fit self-start">
            VIEW DETAILS
        </button>
    </div>
)

const Achievements = () => {
    return (
        <div className="min-h-screen border  border-green-500 bg-black text-white flex items-center justify-center">
            <section className="relative px-6 py-16 max-w-[1440px] w-full h-[1100px]">
                {/* ACHIEVEMENTS Text - Left */}
                <h2 className="absolute top-0 left-0 text-4xl font-bold z-10">
                    ACHIEVEMENTS
                </h2>

                {/* Cards (Reversed Layout) */}
                <AchievementCard
                    {...projects[0]}
                    className="top-0 left-[470px]"
                />
                <AchievementCard
                    {...projects[1]}
                    className="top-[60px] left-0"
                />
                <AchievementCard
                    {...projects[2]}
                    className="top-[500px] left-[470px]"
                />
                <AchievementCard
                    {...projects[3]}
                    className="top-[540px] bg-green-500 border  left-0"
                />
                <div className="absolute bottom-50 left-1/2 -translate-x-1/2 translate-y-24">
                    <button className=" text-black px-6 py-3 rounded-lg font-semibold text-sm">
                        VIEW MORE WORKS
                    </button>
                </div>

                {/* View More Button - Bottom Center */}
            </section>
        </div>
    )
}

export default Achievements
