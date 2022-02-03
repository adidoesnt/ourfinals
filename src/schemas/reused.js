import * as yup from "yup";

/* function isNusEmail(errorMessage) {
  return this.test("isNusEmail", errorMessage, function (email) {
    const { path, createError } = this;

    const suffix = email.split("@")[1];
    if (suffix === "u.nus.edu" || suffix === "nus.edu.sg") {
      return true;
    } else {
      return createError({
        path,
        message: errorMessage ?? "The email must be a valid NUS email",
      });
    }
  });
}
yup.addMethod(yup.email, "isNusEmail", isNusEmail); */

/** @type {yup.StringSchema} */
export const emailSchema = yup
  .string()

  // @ts-ignore
  .test("is-nus-email", "This must be a valid NUS email", (value, context) => {
    const suffix = value.split("@")[1];
    return suffix === "u.nus.edu" || suffix === "nus.edu.sg";
  })
  .email("This must be a valid email")
  .label("Email");

/** @type {yup.StringSchema} */
export const passwordSchema = yup
  .string() //.min(8)
  .label("Password");

/** @type {yup.StringSchema} */
export const nameSchema = yup
  .string()
  .min(5, "Name should be more than 5 characters")
  .max(70, "Name should be less than 70 characters")
  // @ts-ignore
  .label("Name");
