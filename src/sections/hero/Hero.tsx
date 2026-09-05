import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Hero.scss";
import Navbar from "../navbar/Navbar";

function Hero() {
  const logos: string[] = [
    "/images/livestor.png",
    "/images/Mojo.png",
    "/images/carv.png",
    "/images/Aircall.png",
    "/images/eec.png",
  ];
  return (
    <>
      <div className="container-fluid hero">
        <Navbar />
        <div className="hero__background"></div>
        <div className="hero__content">
          <div className="row">
            <div className="col-12 col-md-6 ps-0">
              <div className="contents">
                <div className="contents__head">
                  <i className="bi bi-stars"></i>
                  <p>ai-powered sales intelligence</p>
                </div>
                <h1>
                  Find{" "}
                  <span className="selected-header">high-intent client</span>
                  <br /> before your competitors do.
                </h1>
                <p className="contents__caption">
                  LeadFresh AI tracks hiring activity, company growth, and
                  buying signals in real time - then turns them into qualified
                  opportunities with decision-maker contacts and outreach
                  context.
                </p>
                <div className="contents__btn">
                  <a href="#">
                    <span>Start Free Trial</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  <a href="#">
                    <span>Watch Demo</span>
                    <i className="bi bi-play-circle"></i>
                  </a>
                </div>
                <div className="contents__teammate">
                  <img src="/images/Frame.png" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ps-0">
              <img src="/images/dashboard-pic.png" className="dashboard-pic" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tape">
                <div className="tape__track">

                    {logos.map((logo: string, index: number) => (
                      <img key={index} src={logo} alt="Company Logo" />
                    ))}


                    {logos.map((logo: string, index: number) => (
                      <img
                        key={`second${index}`}
                        src={logo}
                        alt="Company Logo"
                      />
                    ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/line-shine.png" className="d-block d-md-none mt-5" width={400}/>
    </>
  );
}

export default Hero;
