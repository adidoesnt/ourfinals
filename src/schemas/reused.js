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


/** @type {yup.StringSchema} */
export const yearSchema = yup
  .number()
  .min(1)
  .max(5)
  .label("Year");

const faculties = ['computing', 'engineering', 'science'];

/** @type {yup.StringSchema} */
export const facultySchema = yup
  .string() //.min(8)
  .test("is-nus-faculty", "This must be either computing, engineering or science", 
    (value, context) => {
      const faculty = value.toLowerCase();
      return faculties.includes(faculty);
  })
  .label("Faculty");

/** @type {yup.StringSchema} */
export const nusnetIdSchema = yup
  .string()
  .test("is-valid-nusnet-id", `This begins with 'E' and has 8 characters`, 
    (value, context) => {
      const prefix = value[0];
      return prefix.toLowerCase() == 'e' && value.length == 8;
  })
  .label("NUSNET ID");