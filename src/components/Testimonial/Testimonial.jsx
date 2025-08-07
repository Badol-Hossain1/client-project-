import logo from '../../../public/asset/pic.png'

const Testimonial = () => {
    return (
        <section className="bg-black py-20 px-6 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    WHAT OUR CLIENTS SAY
                </h2>

                <div className="border-b border-white border-opacity-20 pb-8 mb-8">
                    <p className="text-xl leading-8 text-white mb-8">
                        "Working with Shuvo was smooth, professional, and truly
                        impressive. From the first discussion to the final
                        handoff, he was highly responsive and understood our
                        vision perfectly. He delivered a clean, fast, and
                        conversion-focused landing page that not only looked
                        great but performed beyond expectations. His attention
                        to detail, design thinking, and clear communication made
                        the entire collaboration feel effortless. I’d absolutely
                        work with him again."
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-y-4">
                        {/* Profile */}
                        <div className="flex items-center gap-4">
                            <img
                                src={logo}
                                alt="Ife Osakuade"
                                className="w-14 h-14 rounded-full object-cover border-2 border-white"
                            />
                            <div>
                                <h4 className="font-semibold text-white text-lg">
                                    Ife Osakuade
                                </h4>
                                <p className="text-sm text-gray-400">
                                    ForesightFI, Founder
                                </p>
                            </div>
                        </div>

                        {/* Stars (optional, styled to be subtle) */}
                        <div className="flex gap-1 text-gray-500 text-xl">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
