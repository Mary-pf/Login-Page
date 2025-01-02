import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Css/Form.css";
import validateLogin from "../utils/Validation";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateLogin(email, password, confirmPassword);
    if (errors.length > 0) {
      setError(errors.join("", ""));
      return;
    }

    if (password !== confirmPassword) {
      setError("رمزعبور با تایید رمزعبور تطابق ندارد");
      return;
    }
    setError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <h2>ثبت نام</h2>
      <form className="form" onSubmit={handleSubmit}>
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
          <label>رمز عبور</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="password-toggle top"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>تایید رمز عبور </label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="password-toggle bottom"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">ثبت نام</button>
        <p className="text-link">
          <span> حساب دارید؟</span>
          <span className="space">
            <Link to="/" className="link-class">
              کلیک کنید
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
