import React from 'react'

function Modal() {
  return (
    <div
          className="modal fade"
          id="modal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  What are you looking for
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                This is the modal that you are looking for
              </div>
            </div>
          </div>
        </div>
  )
}

export default Modal
