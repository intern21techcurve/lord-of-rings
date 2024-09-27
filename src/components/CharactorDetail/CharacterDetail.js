import React from 'react'
import "./CharacterDetail.css"

const CharacterDetail = () => {
  return (
    <div className="detail-popup" id="details">
      <header className="header-container ">
        <h3>
          Characters{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </h3>
      </header>
      <div className="detail-container">
        <p>Name</p>
        <p>WikiURL</p>
        <p>Race</p>
        <p>Gender</p>
        <p>Height</p>
        <p>Hair</p>
        <p>Realm</p>
        <p>Birth</p>
        <p>Spouse</p>
        <p>Death</p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => {document.getElementById("details").style.display = "none";}}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CharacterDetail
