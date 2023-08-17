import {
  AuthServiceProvider,
  SignUpWithEmailAndPasswordRequest,
  SignUpWithProviderRequest,
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
  ) => {
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

  signUpWithProvider = async (data: SignUpWithProviderRequest) => {
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
}
