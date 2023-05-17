import React from 'react'

export default function Accordion({inpFunc}) {

  return (
    <div><div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Enter input here
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            >
              Input Text
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              onChange={inpFunc}
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
