import "../style.css";
import logo from "../../../assets/icon/logo.png";
import Image from "next/image";
import tt from "../../../assets/icon/twitter.png";
import li from "../../../assets/icon/linkedin.png";
import fb from "../../../assets/icon/fb.png";

export function Footer() {
  return (
    <>
      <div className="wrap_f">
        <div className="container_f">
          <Image
            className="img_f"
            src={logo}
            alt="rasm"
            width={137}
            height={23}
          />
          <p className="text_f none">
            We are one of the leading interior design and remodeling studios
            available for all of your residential and commercial interior design
            needs.
          </p>
          <p className="text_f bottom">© 2023 id Studio. All Rights Reserved.</p>
        </div>
        <div className="container_f">
          <p className="btext_f none">Navigation</p>
          <a href="#about" className="mtext_f none">
            About
          </a>
          <a href="#services" className="mtext_f none">
            Services
          </a>
          <a href="#portfolio" className="mtext_f none">
            Portfolio
          </a>
          <a href="#pricing" className="mtext_f none">
            Pricing
          </a>
          <a href="#testemonials" className="mtext_f none">
            Testemonials
          </a>
          <div className="wicon_f">
            <a target="_blank" href="https://www.twitter.com">
              <Image
                src={tt}
                width={28}
                height={28}
                alt="twitter"
                className="icon_f"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com">
              <Image
                src={li}
                width={28}
                height={28}
                alt="linkedin"
                className="icon_f"
              />
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <Image
                src={fb}
                width={28}
                height={28}
                alt="facebook"
                className="icon_f"
              />
            </a>
          </div>
        </div>
        <div className="container_f">
          <p className="btext_f">Contacts</p>
          <div className="wtext_f">
            <p className="text_f">ADRESS</p>
            <p
              className="mtext_f"
              href="mapto:3517 W. Gray St. Utica, Pennsylvania 57867"
            >
              3517 W. Gray St. Utica, Pennsylvania 57867
            </p>
          </div>
          <div className="wtext_f">
            <p className="text_f">EMAIL</p>
            <a className="mtext_f" href="mailto:michelle.rivera@idstudio.com">
              michelle.rivera@idstudio.com
            </a>
          </div>
          <div className="wtext_f">
            <p className="text_f">PHONES</p>
            <a href="tel:+18085550111" className="mtext_f">
              (808) 555-0111 or (303) 555-0105
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
