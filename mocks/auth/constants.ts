export const authRoutes = {
  loginWithEmailAndPassword: "/login",
  loginWithProvider: "/login-with-provider",
  logout: "/logout",
  resetPasswordViaEmail: "/reset-password-via-email",
  signUpWithEmailAndPassword: "/sign-up-with-email-and-password",
  signUpWithProvider: "/sign-up-with-provider",
  updatePassword: "/update-password",
};

export const authFailRoutes = {
  loginWithEmailAndPassword: "fail-login",
  loginWithProvider: "fail-login-with-provider",
  logout: "fail-logout",
  resetPasswordViaEmail: "fail-reset-password-via-email",
  signUpWithEmailAndPassword: "fail-sign-up-with-email-and-password",
  signUpWithProvider: "fail-sign-up-with-provider",
  updatePassword: "fail-update-password",
};
