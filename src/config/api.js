export const SignUpConfig =
    process.env.REACT_APP_SIGNUP_API ||
    "http://localhost:4000/api/auth/register";

export const LoginConfig =
    process.env.REACT_APP_LOGIN_API || "http://localhost:4000/api/auth/login";
