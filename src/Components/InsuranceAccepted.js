import React from 'react'
import svg1 from "../Assets/image.jpg";
import Marquee from "react-fast-marquee";

const InsuranceAccepted = () => {
  return (
    <div className='container '>
      <div className="row mt-1" style={{ placeContent: "center" }}>
          <div className="col-md-10">
            <div style={{ height: "50px", display: "flex" }}>
              <span
                style={{
                  fontSize: "18px",
                  position: "relative",
                  top: "10px",
                  left: "20px",
                  width: "130px",
                }}
              >
                Trusted by{" "}
              </span>

              <Marquee
                style={{}}
                speed={50}
                gradient={false}
                pauseOnHover={true}
              >
                <div className="d-flex align-item-center">
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                  <div style={{ position: "relative", paddingLeft: "80px" }}>
                    {" "}
                    <img src={svg1} />{" "}
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InsuranceAccepted
