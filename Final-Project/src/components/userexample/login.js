import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase/fbfunctions";
import { Container } from "./userStyles";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      await login(email, password);
      navigate("/skin/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (

    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Container>
        <div className="sub-main">
          <div className="box">
            <div>
              <h3>LOG IN</h3>
            </div>
            <div>
              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="youremail@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <br/>
              <button className="button" onClick={() => handleLogin()}> ENTER</button>
            </div>
            <br /><br/> You do not have an account? <Link to="/Signup"> Sign up</Link>{" "}
            to access  premium products.
            {error && <p>{error}</p>}
          </div>
        </div> 
      </Container>
    </form>
        
  );
}