import React from 'react'

const CardSaver = () => {
    const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <>
          <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Enter your Card Details</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Please Fill your Card Details Below</p>

            <form>
              <div>
                <p>Card Holder Full Name</p>
                <input type="text" placeholder="Add Card Holder Full Name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit OR Debit Card Number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM / YYYY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input type="text" placeholder="***" />
                </div>
              </div>

              <div className="payment_div">
                <p>Pay Securely with</p>
                <img src="/Image/9.png" alt="" />
                <img src="/Image/10.png" alt="" />
                <img src="/Image/11.png" alt="" />
                <img src="/Image/12.png" alt="" />
                <img src="/Image/13.png" alt="" />
              </div>

              <div className="border-line" />
              <div className="submit_btn">
                <div style={{ marginTop: "0" }}>
                  <p>TOTAL PRICE</p>
                  <span>
                    <span className="total"> $499</span>
                    <span>1 SERVICE SELECTED</span>
                  </span>
                </div>

                <button onClick={() => navigate("/thanks")}>
                  PROCEED TO PAY
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src="/Image/90.png" alt="" />
              <div>
                <p className="title">ORDER - 123</p>

                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p>(469)823-0402</p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p>info@shahinahoja.com</p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p>@nurse.shahina</p>
                </div>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">GIFT CARD ( $100 )</p>
                <p className="head"> $100</p>
              </div>
              <div className="two-div">
                <p className="desc">QUANTITY - 1</p>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">TOTAL PRICE</p>
                <p className="head"> $100</p>
              </div>
              <div className="two-div">
                <p className="desc">1 PRODUCTS SELECTED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSaver