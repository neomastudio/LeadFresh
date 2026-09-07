import TapeWork from "./TapeWork";
import "./Working.scss";

function Working() {
  return (
    <>
      <div className="container-fluid Working">
        <div className="Working__background"></div>
        <div className="Working__content">
          <div className="row p-0">
            <div className="col-12">
              <div className="contents-hd">
                <p className="para-head">how it works</p>
                <h2>
                  From signal to
                  <span className="selected-header"> signed client</span>
                </h2>
                <p>
                  A process that turns you from cold outreach to warm inbound
                  leads.
                </p>
              </div>
            </div>
            <div className="cart-sec">
              <div className="row  align-items-stretch g-4 g-lg-2">
                <div className="col-12 col-md-6 col-lg-3">
                  <div
                    className="cart"
                    style={{
                      borderColor: "#56ddb97a",
                      background:
                        "linear-gradient(to bottom, #041423, #00070f)",
                    }}
                  >
                    <span className="cart__head">
                      <img src="/LeadFresh/images/works-section-photo/cart-logo-1.png" />
                      <h3>Detect Signals</h3>
                    </span>
                    <p>
                      We scan millions of sources in real time to detect hiring,
                      growth and intent signals.
                    </p>
                    <span className="box-green">
                      <i className="bi bi-circle-fill"></i>
                      <p>Live & always on</p>
                    </span>
                    <img
                      src="/LeadFresh/images/works-section-photo/cart-pic-1.png"
                      className="cartImg"
                    />
                    <span className="box-statist d-none d-md-flex">
                      <span>
                        <h4>10M+</h4>
                        <p>Sources scanned daily</p>
                      </span>
                      <span>
                        <h4>50M</h4>
                        <p>Signal Typed tracked</p>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div
                    className="cart"
                    style={{
                      borderColor: "#56ddb97a",
                      background:
                        "linear-gradient(to bottom, #041e2d, #000000)",
                    }}
                  >
                    <span className="cart__head">
                      <img src="/LeadFresh/images/works-section-photo/cart-logo-2.png" className="d-none d-md-block"/>
                      <img src="/LeadFresh/images/works-section-photo/icon-2.png" className="d-block d-md-none"/>
                      <h3>AI Scores & Ranks</h3>
                    </span>
                    <p>
                      Our AI identifies the best-fit companies and scores them
                      by conversion potential.
                    </p>
                    <img
                      src="/LeadFresh/images/works-section-photo/cart-pic-2.png"
                      className="cartImg d-none d-md-block"
                    />
                    <img
                      src="/LeadFresh/images/works-section-photo/photo-2.png"
                      className="cartImg d-block d-md-none"
                    />
                    <span className="box-shield d-none d-md-flex">
                      <span>
                        <i className="bi bi-shield-check"></i>
                        <p>AI model accuracy</p>
                      </span>
                      <span>
                        <p
                          className="number"
                          style={{ color: "var(--sky-blue)" }}
                        >
                          98.6%
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div
                    className="cart"
                    style={{
                      borderColor: "#56ddb97a",
                      background:
                        "linear-gradient(to bottom, #021023, #000102)",
                    }}
                  >
                    <span className="cart__head">
                      <img src="/LeadFresh/images/works-section-photo/cart-logo-3.png" className="d-none d-md-block" />
                      <img src="/LeadFresh/images/works-section-photo/icon-3.png" className="d-block d-md-none" />
                      <h3>Verify & Enrich</h3>
                    </span>
                    <p>
                      We find and verify decision-makers emails so you reach the
                      right people.
                    </p>
                    <img
                      src="/LeadFresh/images/works-section-photo/cart-pic-3.png"
                      className="cartImg d-none d-md-block"
                    />
                    <img
                      src="/LeadFresh/images/works-section-photo/photo-3.png"
                      className="cartImg d-block d-md-none"
                    />
                    <span className="box-shield d-none d-md-flex">
                      <span>
                        <i className="bi bi-shield-check"></i>
                        <p>Verification Accuracy</p>
                      </span>
                      <span>
                        <p className="number" style={{ color: "var(--blue)" }}>
                          99.7%
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div
                    className="cart"
                    style={{
                      borderColor: "#987cee7e",
                      background:
                        "linear-gradient(to bottom, #0a0e27, #050b19)",
                    }}
                  >
                    <span className="cart__head">
                      <img src="/LeadFresh/images/works-section-photo/cart-logo-4.png" className="d-none d-md-block" />
                      <img src="/LeadFresh/images/works-section-photo//icon-4.png" className="d-block d-md-none" />
                      <h3>Engage & Growth</h3>
                    </span>
                    <p>Leads are delivered in your plan, ready for outreach.</p>
                    <img
                      src="/LeadFresh/images/works-section-photo/cart-pic-4.png"
                      className="cartImg d-none d-md-block"
                    />
                    <img
                      src="/LeadFresh/images/works-section-photo/photo-4.png"
                      className="cartImg d-block d-md-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <TapeWork/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
