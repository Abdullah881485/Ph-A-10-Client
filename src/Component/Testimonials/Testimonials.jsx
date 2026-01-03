import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "University Student",
      image: "https://i.pravatar.cc/150?img=12",
      text: "FinEase helped me understand my spending habits and control unnecessary expenses.",
    },
    {
      name: "Nusrat Jahan",
      role: "Freelancer",
      image: "https://i.pravatar.cc/150?img=32",
      text: "The interface is clean, smooth, and very easy to use. Perfect for daily finance tracking.",
    },
    {
      name: "Tanvir Hasan",
      role: "Small Business Owner",
      image: "https://i.pravatar.cc/150?img=56",
      text: "FinEase gives me clarity and confidence in managing both personal and business expenses.",
    },
    {
      name: "Arafat Hossain",
      role: "MERN Stack Learner",
      image: "https://i.pravatar.cc/150?img=18",
      text: "FinEase makes tracking daily expenses simple and helps me stay disciplined with money.",
    },
    {
      name: "Sadia Rahman",
      role: "Banking Professional",
      image: "https://i.pravatar.cc/150?img=47",
      text: "A clean and well-structured finance app that focuses on clarity and usability.",
    },
    {
      name: "Imran Kabir",
      role: "Startup Founder",
      image: "https://i.pravatar.cc/150?img=64",
      text: "The categorized expense insights help me make better financial decisions every month.",
    },
    {
      name: "Farzana Akter",
      role: "Content Creator",
      image: "https://i.pravatar.cc/150?img=29",
      text: "I love how simple yet powerful FinEase is. It doesn’t feel overwhelming at all.",
    },
    {
      name: "Mahmudul Hasan",
      role: "Remote Worker",
      image: "https://i.pravatar.cc/150?img=51",
      text: "FinEase keeps my income and expenses organized without any unnecessary complexity.",
    },
    {
      name: "Nayeem Uddin",
      role: "Commerce Student",
      image: "https://i.pravatar.cc/150?img=22",
      text: "Perfect for students who want to understand money management from an early stage.",
    },
  ];

  return (
    <section className="w-[95%] md:w-8/10 mx-auto py-6">
      <h2 className="text-2xl font-bold text-[#7c3aed] mb-10 text-center">
        What Users Say About FinEase
      </h2>
      <Swiper
        // slidesPerView={4}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-base-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full ">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-[#7c3aed]"
                />
                <div>
                  <h4 className="text-base-content font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-base-500">{item.role}</p>
                </div>
              </div>

              <p className="text-base-400 text-sm leading-relaxed">
                “{item.text}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
