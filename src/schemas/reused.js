import * as yup from "yup";

/** @type {yup.StringSchema} */
export const emailSchema = yup
  .string()
  .required()
  .email("This must be a valid email")
  .label("Email");

/** @type {yup.StringSchema} */
export const passwordSchema = yup.string().required().min(8).label("Password");

/** @type {yup.StringSchema} */
export const nameSchema = yup
  .string()
  .min(5, "Name should be more than 5 characters")
  .max(70, "Name should be less than 70 characters")
  // @ts-ignore
  .label("Name");
