import React, { useState } from "react";
import "./styles.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-image">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" />
          ) : (
            <span>Profile Image</span>
          )}
        </div>
        <input type="file" onChange={handleImageChange} />
        <div className="bio">
          <p>
            I am Leela, currently pursuing my master's degree from Sacred Heart
            University in Computer Science department.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div className="box">
          <h3>Work Experience</h3>
          <p>Quality Engineering Associate - Accenture (2023 - 2024)</p>
        </div>
        <div className="box">
          <h3>Education</h3>
          <p>Bachelor of Computer Science - Aditya Institute (2023)</p>
        </div>
        <div className="box">
          <h3>Skills</h3>
          <ul>
            <li>HPALM</li>
            <li>JIRA</li>
            <li>Python</li>
            <li>MS Office</li>
          </ul>
        </div>
      </div>

      <div className="projects-section">
        <h3>Projects</h3>
        <ul>
          <li>
            A project on Hair care analysis during my graduation, utilizing the
            SPSS package.
          </li>
          <li>
            A project on Demonetization in India during my graduation, employing
            statistical tools such as correlation and regression.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
