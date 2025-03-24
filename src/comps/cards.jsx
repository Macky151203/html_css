import React from "react";

function Cards() {
  return (
    <section id="card" className="mt-md-8 mt-sm-4">
      <h2 className="text-center">Cards</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1741732496906-760236388cd6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card 1"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Card 1</h3>
                <p className="card-text">This is card 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1741732496906-760236388cd6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card 2"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Card 2</h3>
                <p className="card-text">This is card 2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1741732496906-760236388cd6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card 3"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Card 3</h3>
                <p className="card-text">This is card 3</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1741732496906-760236388cd6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card 4"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Card 4</h3>
                <p className="card-text">This is card 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
