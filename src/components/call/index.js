import "../style.css";

export function Call() {
  return (
    <>
      <div className="wrap_call">
        <div className="texts_call">
          <p className="bigtext_service">Do you have</p>
          <p className="bigtext_service">any question?</p>
        </div>
       <a href='tel:+18085550111' style={{textDecoration:'none'}}>
         <button className="btn_call">ORDER A CALL</button>
        </a>
      </div>
    </>
  );
}

export default Call;
