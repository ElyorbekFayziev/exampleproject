import "../style.css";

export function Pricing() {
  return (
    <>
      <div className="container_pr" id='pricing'>
        <div className="wtext_service">
          <p className="bigtext_service">Our</p>
          <p className="bigtext_service">Pricing</p>
        </div>
        <div className="wcard_pr">
          <div className="card_pr">
            <p className="btext_card">Basic</p>
            <p className="price_card">$25</p>
            <p className="time_card">per month</p>
            <div className="line_card"></div>
            <p className="info_card">
              Interior Design Project Discussion Space Planning Online
              Consultation
            </p>
            <button className="btn_card">BUY NOW</button>
          </div>
          <div className="card_pr">
            <p className="btext_card">Standart</p>
            <p className="price_card">$50</p>
            <p className="time_card">per month</p>
            <div className="line_card"></div>
            <p className="info_card">
              Color Analysis Space Planning Home Remodeling 3D Interior Model
            </p>
            <button className="btn_card">BUY NOW</button>
          </div>
          <div className="card_pr">
            <p className="btext_card">Premium</p>
            <p className="price_card">$80</p>
            <p className="time_card">per month</p>
            <div className="line_card"></div>
            <p className="info_card">
              Concept Development Decoration Services Interior Architecture
              Flooring Installation
            </p>
            <button className="btn_card">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
