import * as yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginValidation = yup.object().shape({
  userId: yup
    .string()
    .required("Username or email is required")
    .test("isUsernameOrEmail", "Invalid email", (value) => {
      return emailRegex.test(value) || value.length >= 3;
    }),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters long"),
});
