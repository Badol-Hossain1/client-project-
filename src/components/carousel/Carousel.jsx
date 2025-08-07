import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo from '../../../public/asset/from.png'

const images = [
    '../../../public/asset/one.png',
    '../../../public/asset/two.png',
    '../../../public/asset/three.png',
    '../../../public/asset/four.png',
    '../../../public/asset/six.png',
]

const ImageCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div className="px-4">
            <Slider {...settings}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="px-2 group relative overflow-hidden rounded-md"
                    >
                        {/* Image */}
                        <img
                            src={img}
                            alt={`Slide ${i}`}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        {/* Blurred Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-80 transition duration-300 z-10"></div>

                        {/* Button with logo on hover */}
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         opacity-0 group-hover:opacity-100 transition duration-300 z-20"
                        >
                            <img src={logo} alt="logo" className="w-10 h-10" />
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageCarousel
