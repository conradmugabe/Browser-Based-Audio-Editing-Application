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
  apiClientService: ApiClientServiceProvider;
}

export class HttpAuthServiceProvider implements AuthServiceProvider {
  constructor(private readonly config: HttpAuthServiceProviderConfig) {}

  loginWithEmailAndPassword(
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse> {
    const endpoint = "/auth/login";
    return this.config.apiClientService.post(endpoint, data);
  }

  loginWithProvider(data: SignUpWithProviderRequest): Promise<SignUpResponse> {
    const endpoint = "/auth/login/provider";
    return this.config.apiClientService.post(endpoint, data);
  }

  logout(): Promise<void> {
    const endpoint = "/auth/logout";
    return this.config.apiClientService.post(endpoint);
  }

  resetPasswordViaEmail(data: ResetPasswordViaEmail): Promise<void> {
    const endpoint = "/auth/reset-password";
    return this.config.apiClientService.post(endpoint, data);
  }

  signUpWithEmailAndPassword(
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse> {
    const endpoint = "/auth/signup";
    return this.config.apiClientService.post(endpoint, data);
  }

  signUpWithProvider(data: SignUpWithProviderRequest): Promise<SignUpResponse> {
    const endpoint = "/auth/signup/provider";
    return this.config.apiClientService.post(endpoint, data);
  }

  updatePassword(data: UpdatePassword): Promise<void> {
    const endpoint = "/auth/update-password";
    return this.config.apiClientService.post(endpoint, data);
  }
}
