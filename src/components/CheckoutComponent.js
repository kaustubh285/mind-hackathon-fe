import React, { useEffect, useState } from "react";
import "../assets/checkout.css";
function CheckoutComponent() {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    let camps = JSON.parse(localStorage.getItem("camps"));
    let price = JSON.parse(localStorage.getItem("price"));
    let frequency = JSON.parse(localStorage.getItem("frequency"));

    console.log(camps, price, frequency);
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-50'>
          <div className='container'>
            <form action='/action_page.php'>
              <div className='row'>
                <div className='col-75'>
                  <h2>Payment</h2>
                  <br></br>
                  <h5 htmlFor='fname'>Accepted Payment Methods</h5>
                </div>
                <div className='col-25'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIB2End9ZwQlOWr3xQNx-ngAeS2RGYaoqSvDzBzWmJ6IlA5ZL3MEt9AK1rS01k51C49k&usqp=CAU'
                    height={30}
                  />
                  <img
                    src='https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg'
                    height={30}
                  />
                </div>
              </div>
              <br></br>
              <div className='row'>
                <div className='col-50'>
                  <label htmlFor='fname'>Accepted Cards</label>

                  <div className='icon-container'>
                    <i className='fa fa-cc-visa' style={{ color: "navy" }}></i>
                    <i className='fa fa-cc-amex' style={{ color: "blue" }}></i>
                    <i
                      className='fa fa-cc-mastercard'
                      style={{ color: "red" }}></i>
                    <i
                      className='fa fa-cc-discover'
                      style={{ color: "orange" }}></i>
                  </div>
                  <label htmlFor='cname'>Name on Card</label>
                  <input
                    type='text'
                    id='cname'
                    name='cardname'
                    placeholder='John More Doe'
                  />
                  <label htmlFor='ccnum'>Credit card number</label>
                  <input
                    type='text'
                    id='ccnum'
                    name='cardnumber'
                    placeholder='1111-2222-3333-4444'
                  />
                  <label htmlFor='expmonth'>Exp Month</label>
                  <input
                    type='text'
                    id='expmonth'
                    name='expmonth'
                    placeholder='September'
                  />
                  <div className='row'>
                    <div className='col-50'>
                      <label htmlFor='expyear'>Exp Year</label>
                      <input
                        type='text'
                        id='expyear'
                        name='expyear'
                        placeholder='2018'
                      />
                    </div>
                    <div className='col-50'>
                      <label htmlFor='cvv'>CVV</label>
                      <input
                        type='text'
                        id='cvv'
                        name='cvv'
                        placeholder='352'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type='checkbox' name='sameadr' /> Shipping address same
                as billing
              </label>
              <input
                type='submit'
                value='Continue to checkout'
                className='btn'
              />
            </form>
          </div>
        </div>
        <div className='col-25'>
          <div className='container'>
            <h4>
              Cart{" "}
              <div className='price' style={{ color: "black" }}>
                <i className='fa fa-shopping-cart'></i> <b>4</b>
              </div>
            </h4>
            <div>
              <a href='#'>Mental Health Campaign</a>{" "}
              <div className='price'>£15</div>
            </div>

            <hr />
            <div>
              Total{" "}
              <div className='price' style={{ color: "black" }}>
                <b>£15</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutComponent;
