import "../styles/Todo.css";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';



function Layout({ children }) {

  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');

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
        {username?<h1>{`${username.toUpperCase()}'S `}TODO LIST</h1>:<h1>TODO LIST</h1>}
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
