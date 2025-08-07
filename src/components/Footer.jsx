import logo from '../../public/asset/text.png'
import logo1 from '../../public/asset/shovo.png'
const Footer = () => {
    const checkmarkIcon = (
      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    );
  
    const pricingFeatures = [
      "Free HomeScreen - Try It, Love It, or Leave It.",
      "Expert Project Management",
      "Smooth collaboration via",
      "1week after launch support",
      "Updates every 48 hours",
      "Simple pricing",
      "Weekly meeting",
      "20 mints free consolation",
    ];
  
    const PricingCard = ({ title, price, description, features }) => (
      <div className="flex-1 max-w-lg mx-auto md:mx-4 p-8 bg-gray-900 border border-green-400 rounded-lg shadow-xl shadow-green-500/30 transition-transform transform hover:scale-105 my-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm tracking-widest text-gray-300 uppercase">{title}</h3>
          <h2 className="text-5xl font-extrabold text-white mt-2">{price}</h2>
          <p className="text-lg text-green-400 mt-2 font-bold">{description}</p>
        </div>
        <ul className="mt-8 space-y-4 text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 mr-3">{checkmarkIcon}</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-black bg-green-400 hover:bg-green-300 transition-colors duration-200 shadow-lg shadow-green-400/50">
            GET STARTED
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  
    return (
      <div className="min-h-screen bg-black text-white font-sans p-4 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-4 uppercase">
            WE'RE CONFIDENT YOU'LL LOVE
            <br />
            WORKING WITH US!
          </h1>
          <div className="relative inline-block mt-4">
            <button className="px-6 py-2 text-sm text-green-400 border border-green-400 rounded-full font-medium transition-colors duration-200">
              Accepting New Projects
            </button>
            <div className="absolute inset-0 rounded-full blur-sm opacity-50 bg-green-400 -z-10"></div>
          </div>
        </div>
  
        {/* Pricing Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8 mb-16">
          <PricingCard
            title="Starter Plan"
            price="$100/s"
            description="MOBILE APP DESIGN"
            features={pricingFeatures}
          />
          <PricingCard
            title="Starter Plan"
            price="$200/s"
            description="WEBSITE DESIGN"
            features={pricingFeatures}
          />
        </div>
  
        {/* Footer Section */}
        <footer className="bg-black text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
              {/* SHUVO.A section */}
              <div className="w-full md:w-full">
               <img src={logo} alt="" />
               <br />
                <p className="text-sm leading-relaxed">
                  A CREATIVE DESIGNER WHO TRANSFORMED E-COMMERCE
                  BUSINESSES WITH HIGH-CONVERTING LANDING PAGES AND
                  OUTSTANDING USER EXPERIENCES. A TRUE GAME-CHANGER.
                  HIGHLY RECOMMENDED.
                </p>
      
            <button className="mt-6 flex items-center px-6 py-3 border border-green-400 text-sm font-medium rounded-full text-green-400 hover:bg-green-900 transition-colors duration-200">
            <a download  href='https://drive.google.com/uc?export=download&id=1P2S43AoXsBLGtwI-oeybv_JT-HlQVIA0

'>
                 DOWNLOAD MY CV
                 </a>
               
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
          
              </div>
  
              {/* Links section */}
              <div className="flex-1  flex flex-col sm:flex-row sm:justify-between space-y-8 sm:space-y-0 sm:space-x-4 mt-8 md:mt-0">
                {/* Column 1: Page */}
                <div className="">
                  <h3 className="text-lg font-bold text-white mb-4">Page</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Work</a></li>
                  </ul>
                </div>
                {/* Column 2: Link */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Link</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Upwork</a></li>
                    <li><a href="#" className="hover:text-white">Fivver</a></li>
                    <li><a href="#" className="hover:text-white">Freelancer</a></li>
                  </ul>
                </div>
                {/* Column 3: Link */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Link</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Behance</a></li>
                    <li><a href="#" className="hover:text-white">Dribbble</a></li>
                    <li><a href="#" className="hover:text-white">Landing</a></li>
                  </ul>
                </div>
                {/* Column 4: Contact */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Info.shuvoahamed@gmail.com</a></li>
                    <li><a href="#" className="hover:text-white">01950667367</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
           <img src={logo1} alt="" />
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  