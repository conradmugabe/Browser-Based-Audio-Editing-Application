import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { MockProxy, mock, mockClear } from "vitest-mock-extended";

import { ApiClientServiceProvider } from "@auth/ext-deps";
import { HttpAuthServiceProvider } from "@auth/providers/http-auth-service-provider/auth-service-provider";
import { authRoutes } from "@mocks/auth/constants";

describe("HttpAuthServiceProvider", () => {
  let apiClientServiceProvider: MockProxy<ApiClientServiceProvider>;

  beforeAll(() => {
    apiClientServiceProvider = mock<ApiClientServiceProvider>();
  });

  afterEach(() => {
    mockClear(apiClientServiceProvider);
  });

  describe("constructor", () => {
    const httpServiceProvider = new HttpAuthServiceProvider({
      apiClientServiceProvider,
      loginWithEmailAndPasswordEndpoint: authRoutes.loginWithEmailAndPassword,
      loginWithProviderEndpoint: authRoutes.loginWithProvider,
      logoutEndpoint: authRoutes.logout,
      resetPasswordViaEmailEndpoint: authRoutes.resetPasswordViaEmail,
      signUpWithEmailAndPasswordEndpoint: authRoutes.signUpWithEmailAndPassword,
      signUpWithProviderEndpoint: authRoutes.signUpWithProvider,
      updatePasswordEndpoint: authRoutes.updatePassword,
    });

    test("should initiate with an AxiosInstance", () => {
      expect(httpServiceProvider).toBeInstanceOf(HttpAuthServiceProvider);
    });
  });

  // describe("loginWithEmailAndPassword", () => {
  //   const httpServiceProvider = new HttpAuthServiceProvider({
  //     apiClientServiceProvider,
  //     loginWithEmailAndPasswordEndpoint: "/login",
  //     loginWithProviderEndpoint: "/login-with-provider",
  //     logoutEndpoint: "/logout",
  //     resetPasswordViaEmailEndpoint: "/reset-password-via-email",
  //     signUpWithEmailAndPasswordEndpoint: "/sign-up-with-email-and-password",
  //     signUpWithProviderEndpoint: "/sign-up-with-provider",
  //     updatePasswordEndpoint: "/update-password",
  //   });

  //   test("should call apiClientServiceProvider.post with the correct endpoint and data", async () => {
  //     const data = { email: " ", password: " " };
  //     await httpServiceProvider.loginWithEmailAndPassword(data);
  //     expect(apiClientServiceProvider.post).toHaveBeenCalledWith(
  //       "/login",
  //       data
  //     );
  //   });
  // });
});
