import img from "../../../assets/img/img.png";
import Image from "next/image";
import "../style.css";
export function Head() {
  return (
    <>
      <div className="content_head">
        <div className="textswrap_head">
          <p className="bigtext_head">We create your space better</p>
          <p className="text_head">
            Our team creates comfortable spaces for our clients. We've been
            designing your everyday life and work through great ideas since
            1999.
          </p>
          <button className='button_head'>GET STARTED</button>
        </div>
        <Image src={img} alt="img" width={705} height={705} className='img_head'/>
      </div>
    </>
  );
}

export default Head;
