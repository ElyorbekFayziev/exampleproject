import logo from "../../../assets/icon/logo.png";
import Image from "next/image";
// import useState from "react";
import "../style.css";
import CloseIcon from "../../../assets/icon/Hamburger.png";

export function Navbar() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="containernav">
        <div className="wrapnav">
          <Image src={logo} alt="rasm" width={130} height={23} />
          <a className="textnav" href="#services">
            Service
          </a>
          <a className="textnav" href="#portfolio">
            Portfolio
          </a>
          <a className="textnav" href="#pricing">
            Pricing
          </a>
          <div className="wrap2nav">
            <a className="textnav" href='tel:13035550105'>(303) 555-0105</a>
            <select className="selectnav">
              <option value="EN" key="">
                EN
              </option>
            </select>
          </div>
          {/* <div className={sidebar ? "side-menu active" : "side-menu"}>
            <CloseIcon className="closeIcon" onClick={showSidebar} />
            <ul className="sideBarNav">
              {SideBar.map((item, index) => {
                return (
                  <li key={index} className="hamburgerLinks">
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
