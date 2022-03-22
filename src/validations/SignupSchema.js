import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username cannot exceed 30 characters"),

  email: yup
    .string()
    .trim()
    .min(5, "Email must be at least 5 characters")
    .max(60, "Email must not exceed 60 characters"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must not exceed 128 characters."),
});
