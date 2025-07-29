import JoinImage from '/public/image/join-image.png';
import Logo from '/public//image/logo-white.png';

const Newsletter = () => (
  <section className="w-full flex items-center justify-center px-2 md:px-12 min-h-[60vh] md:min-h-[500px]">
    <div className="relative flex flex-col md:flex-row w-full max-w-screen-2xl rounded-xl overflow-hidden shadow-lg border border-blue-400 bg-black">
      {/* Mobile: Background Image with Overlay */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0">
        <img src={JoinImage} alt="Join Marketplace Plant" fill style={{ objectFit: 'cover' }} className="w-full h-full object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Left: Content */}
      <div className="flex-1 flex flex-col justify-center gap-0 md:gap-8 p-8 md:p-14 min-w-[320px] z-10 md:z-auto relative">
        <div className="mb-2 md:mb-4">
          <img src={Logo} alt="Abelia Logo" width={120} height={40} className="mb-4 md:mb-6" />
        </div>
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-1 md:mb-2">Join Our<br />Marketplace Today</h2>
        <p className="text-[#B9B9B9] text-base md:text-lg mb-3 md:mb-6 max-w-md">Keep up to date with the latest trends in the world of variegated & rare plants.</p>
        <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 w-full">
          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="bg-transparent border-0 border-b-2 border-[#B9B9B9] text-white placeholder-[#B9B9B9] focus:outline-none focus:border-green-700 w-full md:w-2/3 py-2 mb-2"
            />
          </div>
          <button type="submit" className="bg-white text-green-900 font-bold rounded-full px-7 py-2 transition hover:bg-green-100 shadow-md">SHOP NOW</button>
        </form>
      </div>
      {/* Right: Image (Desktop only) */}
      <div className="hidden md:block flex-1 min-h-[320px] relative">
        <img
          src={JoinImage}
          alt="Join Marketplace Plant"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

export default Newsletter;
