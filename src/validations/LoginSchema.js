import * as yup from "yup";

export const loginSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .trim()
    .min(3, "Username/Email must be at least 3 characters")
    .required("Username/Email is required"),
  password: yup.string().trim().required("Password is required"),
});
