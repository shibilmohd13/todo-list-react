import "./Todo.css";
import { useState, useEffect } from "react";

function Layout({ children }) {
  const [mode, setMode] = useState("#f2f2f2");

  useEffect(() => {
    document.body.style.backgroundColor = mode;
  }, [mode]);

  function toggleMode() {
    setMode(mode == "#f2f2f2" ? "#000000" : "#f2f2f2");
  }

  return (
    <div className="app-container">
      <div className="todo-head">
        <h1>TODO LIST</h1>
        <label className="ui-switch">
          <input type="checkbox" onClick={toggleMode} />
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>
      </div>
      {children}
    </div>
  );
}

export default Layout;
