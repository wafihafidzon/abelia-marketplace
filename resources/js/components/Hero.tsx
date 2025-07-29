const Hero = () => (
  <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#F5F5F5] px-4 md:px-32">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 py-16">
      <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Abelia is the Indonesian's Plant Marketplace.</h1>
        <p className="text-lg text-gray-500 max-w-2xl">From the moment Mike D'Andrea discovered this plant in May of 2021, he knew this large form.Monstera Sport would be special. 5 generations later, the Monstera deliciosa variegata named 'Masterpiece' has only gotten better with age. It's undeniably a wonderful variegated Monstera that doesn't quite f...</p>
        <button className="bg-green-900 text-white rounded-full px-8 py-3 font-bold w-max mt-2">Shop Now</button>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-300 rounded-3xl flex items-center justify-center">[Hero Image]</div>
      </div>
    </div>
  </section>
);

export default Hero; 