export const firebaseErrorMessages = {
  "auth/invalid-email": "The provided email is invalid",
  "auth/user-not-found": "There is not user with that email",
};

const errorMessages = {
  ...firebaseErrorMessages,
};

export default errorMessages;
