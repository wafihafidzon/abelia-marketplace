import DeliveryIcon from "/public/image/delivery.png";
import GuaranteeIcon from "/public/image/guarantee.png";
import SupportIcon from "/public/image/support.png";

const WhyUs = () => (
  <section className="w-full py-8 md:py-16 text-[#09654E]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 justify-between px-2">
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
          <img src={DeliveryIcon} alt="Delivery Icon" />
        </div>
        <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">FREE AND FAST DELIVERY</h3>
        <p className="text-sm md:text-base">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
          <img src={SupportIcon} alt="Support Icon" />
        </div>
        <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">24/7 CUSTOMER SERVICE</h3>
        <p className="text-sm md:text-base">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
          <img src={GuaranteeIcon} alt="Guarantee Icon" />
        </div>
        <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">MONEY BACK GUARANTEE</h3>
        <p className="text-sm md:text-base">We return money within 30 days</p>
      </div>
    </div>
  </section>
);

export default WhyUs;
