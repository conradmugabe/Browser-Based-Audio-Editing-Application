import {
  AuthServiceProvider,
  LoginResponse,
  LoginWithEmailAndPasswordRequest,
  ResetPasswordViaEmail,
  SignUpResponse,
  SignUpWithEmailAndPasswordRequest,
  SignUpWithProviderRequest,
  UpdatePassword,
} from "@auth/entities/auth-entities";
import { Logging } from "@auth/ext-deps";

interface AuthServiceConfig {
  authServiceProvider: AuthServiceProvider;
  logger?: Logging;
}

export class AuthService {
  constructor(private readonly config: AuthServiceConfig) {}

  signUpWithEmailAndPassword = async (
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse> => {
    await this.config.logger?.info(
      `user with email ${data.email} is attempting to sign up with email and password`
    );
    const { user, token } =
      await this.config.authServiceProvider.signUpWithEmailAndPassword(data);
    await this.config.logger?.info(
      `user with email ${data.email} has signed up with email and password`
    );
    return { user, token };
  };

  signUpWithProvider = async (
    data: SignUpWithProviderRequest
  ): Promise<SignUpResponse> => {
    await this.config.logger?.info(
      `user is attempting to sign up with ${data.provider.toUpperCase()} provider`
    );
    const { user, token } =
      await this.config.authServiceProvider.signUpWithProvider(data);
    await this.config.logger?.info(
      `user with email ${
        user.email
      } has signed up with ${data.provider.toUpperCase()} provider`
    );
    return { user, token };
  };

  loginWithEmailAndPassword = async (
    data: LoginWithEmailAndPasswordRequest
  ): Promise<LoginResponse> => {
    await this.config.logger?.info(
      `user with email ${data.email} is attempting to login with email and password`
    );
    const { user, token } =
      await this.config.authServiceProvider.loginWithEmailAndPassword(data);
    await this.config.logger?.info(
      `user with email ${data.email} has logged in with email and password`
    );
    return { user, token };
  };

  loginWithProvider = async (
    data: SignUpWithProviderRequest
  ): Promise<LoginResponse> => {
    await this.config.logger?.info(
      `user is attempting to login with ${data.provider.toUpperCase()} provider`
    );
    const { user, token } =
      await this.config.authServiceProvider.loginWithProvider(data);
    await this.config.logger?.info(
      `user with email ${
        user.email
      } has logged in with ${data.provider.toUpperCase()} provider`
    );
    return { user, token };
  };

  resetPasswordViaEmail = async (
    data: ResetPasswordViaEmail
  ): Promise<void> => {
    await this.config.logger?.info(
      `user with email ${data.email} is requesting to reset password`
    );
    await this.config.authServiceProvider.resetPasswordViaEmail(data);
    await this.config.logger?.info(
      `user with email ${data.email} has requested to reset password`
    );
  };

  updatePassword = async (data: UpdatePassword): Promise<void> => {
    await this.config.logger?.info(
      `user with email ${data.email} is requesting to update password`
    );
    await this.config.authServiceProvider.updatePassword(data);
    await this.config.logger?.info(
      `user with email ${data.email} has requested to update password`
    );
  };
}
