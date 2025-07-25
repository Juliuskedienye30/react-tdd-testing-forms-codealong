// src/App.js
import { useState } from "react";

function App() {
  const [addPepperoni, setAddPepperoni] = useState(false);

  return (
    <div>
      <h1>Hi, I'm Kedienye</h1>

      <img
        src="/my-photo.jpg"
        alt="Portrait of Kedienye"
        style={{ width: "200px", borderRadius: "8px" }}
      />

      <h2>About Me</h2>
      <p>
        I am a software developer passionate about building impactful, user-friendly web
        applications using modern technologies.
      </p>

      <p>
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>

      {/* ✅ Add this checkbox section to pass the new tests */}
      <label>
        <input
          type="checkbox"
          checked={addPepperoni}
          onChange={() => setAddPepperoni(!addPepperoni)}
        />
        Add pepperoni
      </label>
    </div>
  );
}

export default App;
