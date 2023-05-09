import "../style.css";

export function About() {
  return (
    <>
      <div className="container_about" id='about'>
        <div className="wrap_about">
          <p className="bigtext_about">About</p>
          <p className="bigtext_about">Studio</p>
        </div>
        <div className="wrap_about">
          <p className="text_about">
            Interiart is an award-winning architecture and interior design
            practice based in NYC. We work internationally on projects of
            residential & commercial interior design that require a creative
            approach. Our talented and experienced designers leverage their
            knowledge and expertise to create unique and comfortable interiors
            for you.
          </p>
          <p className='text_about'>
            Our team knows that interior design can be stressful for the client
            and we do our best to make it as easy as possible. We listen to your
            needs, ideas, and inputs. And most importantly, we make it exciting
            and enjoyable for our clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
