
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    title: "Smart Filtering",
    desc: "Narrow prospects using advanced targeting filters.",
    color: "var(--cyan-blue)",
  },
  {
    title: "Buying Signals",
    desc: "Detect companies showing active purchase intent.",
    color: "var(--lime)",
  },
  {
    title: "Export & Outreach",
    desc: "Export leads and start outreach faster with context.",
    color: "var(--mint)",
  },
  {
    title: "Company Growth",
    desc: "Monitor hiring expansion.and growth signals.",
    color: "var(--teal)",
  },
  {
    title: "Lead Search",
    desc: "Narrow prospects using advanced targeting filters.",
    color: "var(--blue)",
  },
  {
    title: "Outreach Context",
    desc: "Get valuable insights to personalize every massage.",
    color: "var(--indigo)",
  },
];

export const FeaBox = () => {
  return (
    <div className="feaBox">

      {/* DESKTOP */}
      <div className="feaBox__desktop">
        <div className="feaBox__child">
          {features.slice(0, 3).map((item, idx) => (
            <div className="box" key={idx} style={{ borderColor: item.color }}>
              <div className="box-child">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="feaBox__child">
          {features.slice(3, 6).map((item, idx) => (
            <div className="box" key={idx} style={{ borderColor: item.color }}>
              <div className="box-child">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/* TABLET + MOBILE */}
      <div className="feaBox__mobile">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {features.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="box"
                style={{ borderColor: item.color }}
              >
                <div className="box-child">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
};

