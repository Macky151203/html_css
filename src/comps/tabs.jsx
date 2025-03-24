import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function Tabs() {
  const [tab, selectedTab] = useState(1);
  const [active, setactive] = useState(1);
  return (
    <div>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-4 mb-4">
        <div
          className={`bg-dark-subtle p-2 rounded tab ${
            active == 1 ? "text-primary" : ""
          }`}
          onClick={() => {
            selectedTab(1);
            setactive(1);
          }}
        >
          Tab1
        </div>
        <div
          className={`bg-dark-subtle p-2 rounded tab ${
            active == 2 ? "text-primary" : ""
          }`}
          onClick={() => {
            selectedTab(2);
            setactive(2);
          }}
        >
          Tab2
        </div>
        <div
          className={`bg-dark-subtle p-2 rounded tab ${
            active == 3 ? "text-primary" : ""
          }`}
          onClick={() => {
            selectedTab(3);
            setactive(3);
          }}
        >
          Tab3
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="card text-center">
          {tab == 1 ? (
            <>This is Tab1 Content</>
          ) : tab == 2 ? (
            <>This is Tab2 Content</>
          ) : (
            <>This is Tab3 Content</>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
