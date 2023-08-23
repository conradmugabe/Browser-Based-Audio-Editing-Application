import {
  AuthServiceProvider,
  ResetPasswordViaEmail,
  SignUpResponse,
  SignUpWithEmailAndPasswordRequest,
  SignUpWithProviderRequest,
  UpdatePassword,
} from "@auth/entities/auth-entities";
import { ApiClientServiceProvider } from "@auth/ext-deps";

interface HttpAuthServiceProviderConfig {
  apiClientServiceProvider: ApiClientServiceProvider;
  loginWithEmailAndPasswordEndpoint: string;
  loginWithProviderEndpoint: string;
  logoutEndpoint: string;
  resetPasswordViaEmailEndpoint: string;
  signUpWithEmailAndPasswordEndpoint: string;
  signUpWithProviderEndpoint: string;
  updatePasswordEndpoint: string;
}

export class HttpAuthServiceProvider implements AuthServiceProvider {
  constructor(private readonly config: HttpAuthServiceProviderConfig) {}

  loginWithEmailAndPassword(
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse> {
    const endpoint = this.config.loginWithEmailAndPasswordEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }

  loginWithProvider(data: SignUpWithProviderRequest): Promise<SignUpResponse> {
    const endpoint = this.config.loginWithProviderEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }

  logout(): Promise<void> {
    const endpoint = this.config.logoutEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint);
  }

  resetPasswordViaEmail(data: ResetPasswordViaEmail): Promise<void> {
    const endpoint = this.config.resetPasswordViaEmailEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }

  signUpWithEmailAndPassword(
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse> {
    const endpoint = this.config.signUpWithEmailAndPasswordEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }

  signUpWithProvider(data: SignUpWithProviderRequest): Promise<SignUpResponse> {
    const endpoint = this.config.signUpWithProviderEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }

  updatePassword(data: UpdatePassword): Promise<void> {
    const endpoint = this.config.updatePasswordEndpoint;
    return this.config.apiClientServiceProvider.post(endpoint, data);
  }
}
