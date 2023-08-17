import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { MockProxy, mock, mockClear } from "vitest-mock-extended";

import {
  AuthServiceProvider,
  SignUpResponse,
} from "@auth/entities/auth-entities";
import { AuthService } from "@auth/services/auth";
import { Logging } from "@auth/ext-deps";

const getTokenAndUserMock = (): Promise<SignUpResponse> => {
  return new Promise((resolve) => {
    resolve({ user: { id: "", email: "" }, token: "" });
  });
};

describe("AuthService", () => {
  let authServiceProvider: MockProxy<AuthServiceProvider>;
  let logging: MockProxy<Logging>;

  beforeAll(() => {
    authServiceProvider = mock<AuthServiceProvider>();
    logging = mock<Logging>();
  });

  afterEach(() => {
    mockClear(authServiceProvider);
    mockClear(logging);
  });

  test("should initialize auth service with only the authServiceProvider", () => {
    const authService = new AuthService({ authServiceProvider });
    expect(authService).toBeInstanceOf(AuthService);
  });

  test("should initialize auth service with the authServiceProvider and logging", () => {
    const authService = new AuthService({
      authServiceProvider,
      logger: logging,
    });
    expect(authService).toBeInstanceOf(AuthService);
  });

  test("should not call the logger if the logger is not provided during sign up with email and password", async () => {
    const authService = new AuthService({ authServiceProvider });
    const data = { email: "", password: "" };
    authServiceProvider.signUpWithEmailAndPassword.mockImplementation(
      getTokenAndUserMock
    );

    await authService.signUpWithEmailAndPassword(data);

    expect(logging.info).not.toHaveBeenCalled();
    expect(authServiceProvider.signUpWithEmailAndPassword).toHaveBeenCalled();
    expect(authServiceProvider.signUpWithEmailAndPassword).toBeCalledWith(data);
  });

  test("should call the logger if the logger is provided during sign up with email and password", async () => {
    const authService = new AuthService({
      authServiceProvider,
      logger: logging,
    });
    const data = { email: "", password: "" };
    authServiceProvider.signUpWithEmailAndPassword.mockImplementation(
      getTokenAndUserMock
    );

    await authService.signUpWithEmailAndPassword(data);

    expect(logging.info).toHaveBeenCalled();
    expect(logging.info).toBeCalledTimes(2);
    expect(authServiceProvider.signUpWithEmailAndPassword).toHaveBeenCalled();
    expect(authServiceProvider.signUpWithEmailAndPassword).toBeCalledWith(data);
  });

  test("authServiceProvider returns the user and token after sign up with email and password", async () => {
    const authService = new AuthService({ authServiceProvider });
    const data = { email: "", password: "" };
    const user = { id: "", email: "" };
    const token = "";
    authServiceProvider.signUpWithEmailAndPassword.mockImplementation(
      getTokenAndUserMock
    );

    const result = await authService.signUpWithEmailAndPassword(data);

    expect(result).toEqual({ user, token });
    expect(authServiceProvider.signUpWithEmailAndPassword).toHaveBeenCalled();
    expect(authServiceProvider.signUpWithEmailAndPassword).toBeCalledWith(data);
    expect(authServiceProvider.signUpWithEmailAndPassword).toHaveReturned();
    expect(authServiceProvider.signUpWithEmailAndPassword).toHaveReturnedWith({
      user,
      token,
    });
  });

  test("authServiceProvider returns the user and token after sign up with provider", async () => {
    const authService = new AuthService({ authServiceProvider });
    const user = { id: "", email: "" };
    const token = "";
    authServiceProvider.signUpWithProvider.mockImplementation(
      getTokenAndUserMock
    );

    await authService.signUpWithProvider({ provider: "google" });

    expect(authServiceProvider.signUpWithProvider).toHaveBeenCalled();
    expect(authServiceProvider.signUpWithProvider).toBeCalledWith({
      provider: "google",
    });
    expect(authServiceProvider.signUpWithProvider).toHaveReturned();
    expect(authServiceProvider.signUpWithProvider).toHaveReturnedWith({
      user,
      token,
    });
  });

  test("should call the logger if the logger is provided during sign up with provider", async () => {
    const authService = new AuthService({
      authServiceProvider,
      logger: logging,
    });
    authServiceProvider.signUpWithProvider.mockImplementation(
      getTokenAndUserMock
    );

    await authService.signUpWithProvider({ provider: "google" });

    expect(logging.info).toHaveBeenCalled();
    expect(logging.info).toBeCalledTimes(2);
  });
});
