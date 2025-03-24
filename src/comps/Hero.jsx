import React from "react";

function Hero() {
  return (
    <div className="p-md-2">
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h2>Sample page</h2>
        <p>
          This is a simple static webpage layout using semantic HTML and CSS.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal1"
        >
          Press here for modal
        </button>
      </section>
    </div>
  );
}

export default Hero;
