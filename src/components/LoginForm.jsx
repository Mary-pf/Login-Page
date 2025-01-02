import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Css/Form.css";
import validateLogin from "../utils/Validation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin(email, password);
    if (errors.length > 0) {
      setError(errors.join("", ""));
      return;
    }

    setError("");
  };

  return (
    <div className="container">
      <h2>ورود</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>ایمیل </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>رمز عبور </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="password-toggle password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">ورود</button>
        <p className="text-link">
          <span>هنوز حساب کاربری ندارید؟</span>
          <span className="space">
            <Link to="/signUp" className="link-class">
              ثبت نام کنید
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
