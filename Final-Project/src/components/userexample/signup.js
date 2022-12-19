import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../firebase/fbfunctions";
import { Container } from "./userStyles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    try {
      await signup(email, password);
      navigate("/login/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Container>
          <div className="sub-main">
            <div className="box">
              <div>
                <h3>CREATE YOUR ACCOUNT</h3>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
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
                <br />
                <button className="button" onClick={()=> handleSignUp()}> Register</button>
                <br/><br/>
                {error && <p>{error}</p>}
              </div>
            </div>
          </Container>
      </form>
  </>
  );
};

export default SignUp;