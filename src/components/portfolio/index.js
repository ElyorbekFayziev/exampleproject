import "../style.css";
import Image from 'next/image'
import img1 from '../../../assets/img/img1.png'
import img2 from '../../../assets/img/img2.png'
import img3 from '../../../assets/img/img3.png'
import img4 from '../../../assets/img/img4.png'
import img5 from '../../../assets/img/img5.png'
import img6 from '../../../assets/img/img6.png'
import img7 from '../../../assets/img/img7.png'
import img8 from '../../../assets/img/img8.png'

export function Portfolio() {
  return (
    <>
      <div className="container_p" id='portfolio'>
        <div className="wtext_service">
          <p className="bigtext_service">Our</p>
          <p className="bigtext_service">Portfolio</p>
        </div>
        <div className='wtext_p'>
            <p className="text_p">ALL</p>
            <p className="text_p">COMERCIAL</p>
            <p className="text_p">RESIDENTIAL</p>
            <p className="text_p">OFFICE</p>
            <p className="text_p">OTHER</p>
        </div>
        <div className='wimg_p'>
            <div className='cimg_p'>
                <Image src={img1} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img2} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img3} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img4} className="img_p" alt='rasm' width={270} height={320}/>
            </div>
            <div className='cimg_p'>
                <Image src={img5} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img6} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img7} className="img_p" alt='rasm' width={270} height={320}/>
                <Image src={img8} className="img_p" alt='rasm' width={270} height={320}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
