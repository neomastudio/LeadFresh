import { FeaBox } from "./FeaBox";
import "./feature.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Features() {
  return (
    <>
      <div className="container-fluid feature">
        <div className="feature__background"></div>
        <div className="feature__content">
          <div className="row">
            <div className="col-12">
              <div className="contents-hd">
                <h2>
                  Everything for
                  <span className="selected-header"> finding clients</span>
                </h2>
                <p>
                  Most lead generation tools sell you outdated databases. By the
                  time you reach out, the opportunity is gone. LeadFresh
                  captures the exact moment a company enters the buying window.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="cart">
                <div className="cart__titling">
                  <img src="/LeadFresh/images/match.png" />
                  <h3>AI Matching</h3>
                </div>
                <div className="cart__paragraph">
                  <p>
                    Automatically match prospects to your ideal customer
                    profile.
                  </p>
                </div>
                <div className="cart__img">
                  <img src="/LeadFresh/images/pic-match.png" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="cart">
                <div className="cart__titling">
                  <img src="/LeadFresh/images/scorin.png" />
                  <h3>Intent Scoring</h3>
                </div>
                <div className="cart__paragraph">
                  <p>Identify high-intent companies most likely to convert.</p>
                </div>
                <div className="cart__img">
                  <img src="/LeadFresh/images/pic-scorin.png" />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="cart">
                <div className="cart__titling">
                  <img src="/LeadFresh/images/signal.png" />
                  <h3>Real-Time Signals</h3>
                </div>
                <div className="cart__paragraph">
                  <p>
                    Track hiring, funding, growth, and buying activity as it
                    happens.
                  </p>
                </div>
                <div className="cart__img">
                  <img
                    src="/LeadFresh/images/pic-signal.png"
                    className="image-features-one"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="cart">
                <div className="cart__titling">
                  <img src="/LeadFresh/images/maker-con.png" />
                  <h3>Decision-Maker Contacts</h3>
                </div>
                <div className="cart__paragraph">
                  <p>Find verified key contacts at target companies.</p>
                </div>
                <div className="cart__img">
                  <img
                    src="/LeadFresh/images/pic-maker.png"
                    className="image-features-two"
                  />
                </div>
              </div>
            </div>

          </div>
          <FeaBox/>
          <img src="/LeadFresh/images/line-shine.png" className="line-shine d-none d-md-block"/>
        </div>
      </div>
    </>
  );
}

export default Features;
