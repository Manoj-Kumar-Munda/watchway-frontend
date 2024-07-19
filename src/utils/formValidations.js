import * as yup from "yup";

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

export const registerValidation = yup.object().shape({
  fullName: yup.string().trim().required("Fullname is required"),
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .matches(
      /^[a-zA-Z0-9_.-]+$/,
      "Username can only contain letters, numbers and (., _, -)"
    ),
  email: yup
    .string()
    .required("Email is required")
    .test("isValidEmail", "Invalid email", (value) => {
      return emailRegex.test(value);
    }),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  avatar: yup
    .mixed() // Handle photo validation based on your requirements
    .required("Please upload a photo")
    .test(
      "isPhotoUploaded",
      "Please upload a photo",
      (value) => value && value.length > 0
    ),
  coverImage: yup.mixed().optional(),
});
