const validateLogin = (email, password) => {
  const errors = [];

  if (!(email && password)) {
    errors.push("لطفاً همه فیلدها را پر کنید");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("ایمیل معتبر وارد کنید");
  }

  if (password.length < 6) {
    errors.push("رمز عبور باید حداقل 6 کاراکتر باشد");
  }

  return errors;
};

export default validateLogin;
