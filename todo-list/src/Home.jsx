import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "./Todo.css";
import { useRef, useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const varname = useRef("");
  const navigate = useNavigate();

  function Login() {
    if (/^[a-z0-9]+$/.test(varname.current.value)) {
      setName(varname.current.value);
    } else {
      setError("name should only be consist of lowercase letters and numbers");
    }
  }

  return (
    <Layout>
      <div className="user-container">
        <div className="user-input-wrapper">
          <input
            type="text"
            placeholder="Enter Username"
            className="user-input"
            ref={varname}
            onChange={() => setError("")}
          />
        </div>
        <div className="error">{error}</div> {/* Eroor class */}
        <div className="buttons-wrapper">
          <button onClick={Login}>Enter App</button>
          <button onClick={() => navigate("/todo")} className="buttons">
            Guest Enter
          </button>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
