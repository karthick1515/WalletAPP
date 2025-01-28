import { useState } from "react";
import "./forgotpassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [resetData, setResetData] = useState({
    email: '',
    walletid: '',
    newpassword: '',
    confirmpassword: ''
  });

  const navigate = useNavigate();
  const [passwordnotequal, setPasswordnotequal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setResetData({
      ...resetData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resetData);
    if (resetData.newpassword !== resetData.confirmpassword) {
      setPasswordnotequal(true);
      return;
    }

    axios.post('http://localhost:8082/api/walletaccount/resetpassword', resetData)
      .then((response) => {
        alert("Password Reset!");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <head>
        <title>Forgot Password</title>
      </head>
      <body className="reset-body">
        <div className="header text-center">
          <center><h1>Reset Password</h1></center>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="nav-link" href="/">Home</a>
          <span></span>
          <a className="nav-link" href="/login">Login</a>
          <span></span>
          <a className="nav-link" href="/signup">Signup</a>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="resetform-form">
            <h4>Enter the Details</h4>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" value={resetData.email} onChange={handleChange} required className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="walletAccountId">Wallet Account ID:</label>
              <input className="form-control" type="number" name="walletid" value={resetData.walletid} onChange={handleChange} required min="1" />
            </div>
            <div className="form-group">
              <label htmlFor="newpassword">New Password:</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newpassword"
                  value={resetData.newpassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                  maxLength={14}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}"
                  title="Password must be 8-14 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)."
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <i className="fa fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </button>
                </div>
              </div>
              
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Retype New Password:</label>
              <input type={showPassword ? "text" : "password"} id="confirmpassword" name="confirmpassword" value={resetData.confirmpassword} onChange={handleChange} required className="form-control" />
              {passwordnotequal && <span style={{ color: 'red' }}>Retyped password not matching</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Reset</button>
          </div>
        </form>
      </body>
    </div>
  )
}

export default ForgotPassword;
