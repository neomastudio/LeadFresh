import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


interface WorkItem {
  id: number;
  title: string;
  description: string;
  icon: string; 
}

const workData: WorkItem[] = [
  { id: 1, title: "No Credit Card required", description: "3-day free trial", icon: "/LeadFresh/images/works-section-photo/bottom-logo-1.png" },
  { id: 2, title: "Cancel anything", description: "No long-term commitment", icon: "/LeadFresh/images/works-section-photo/bottom-logo-2.png" },
  { id: 3, title: "Your data is secure", description: "We respect your privacy", icon: "/LeadFresh/images/works-section-photo/bottom-logo-3.png" },
  { id: 4, title: "Human support", description: "we're here to help", icon: "/LeadFresh/images/works-section-photo/bottom-logo-4.png" },
];

const TapeWork = () => {
  return (
    <div className="tape-work-wrapper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 }, 
          768: { slidesPerView: 2, allowTouchMove: true, navigation: true },
          1200: { slidesPerView: 4, allowTouchMove: false, navigation: false },
        }}
      >
        {workData.map((item, index) => (
          <SwiperSlide key={item.id || index}> 
            <div className="content">
              <img src={item.icon} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TapeWork;
