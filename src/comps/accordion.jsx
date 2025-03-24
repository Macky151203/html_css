import React from "react";

function Accordion() {
  return (
    <div>
      <h3 className="mt-4 text-center">Accordion Example</h3>
      <div className="d-flex justify-content-center ">
        <div className="accordion col-12 col-md-6" id="accordion1">
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Data1
              </button>
            </div>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              data-bs-parent="accordion1"
            >
              <div className="accordion-body">
                This is the first body for accordion example
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Data2
              </button>
            </div>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="accordion1"
            >
              <div className="accordion-body">
                This is the Second body for accordion example
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
