import "../style.css";
import icon from "../../../assets/icon/icon.png";
import icon1 from "../../../assets/icon/icon1.png";
import icon2 from "../../../assets/icon/icon2.png";
import icon3 from "../../../assets/icon/icon3.png";
import Image from "next/image";
export function Service() {
  return (
    <>
      <div className="wrap_service" id='services'>
        <div className="wtext_service">
          <p className="bigtext_service">Our</p>
          <p className="bigtext_service">Service</p>
        </div>
        <div className="container_service">
          <div className="card_service">
            <Image src={icon} alt="icon" width={91} height={90} className="icon_service" />
            <p className="text_service">INTERIOR DESIGN</p>
            <p className="mtext_service">
              Interior design services offer a vast variety of solutions for our
              clients' homes and offices.
            </p>
          </div>
          <div className="card_service">
            <Image src={icon1} alt="icon" width={91} height={90} className="icon_service" />
            <p className="text_service">DECORATIVE SERVICES</p>
            <p className="mtext_service">
              Our professional decorators will be happy to help you change your
              house's inner look.
            </p>
          </div>
          <div className="card_service">
            <Image src={icon2} alt="icon" width={91} height={90} className="icon_service" />
            <p className="text_service">SPACE PLANNING</p>
            <p className="mtext_service">
              We create better interior experiences through our space planning
              services.
            </p>
          </div>
          <div className="card_service">
            <Image src={icon3} alt="icon" width={91} height={90} className="icon_service" />
            <p className="text_service">PROJECT MANAGEMENT</p>
            <p className="mtext_service">
              We provide proper project management as it's one of the main
              success factors in interior design.
            </p>
          </div>
        </div>
        <button className="button_service">Free consultation</button>
      </div>
    </>
  );
}

export default Service;
