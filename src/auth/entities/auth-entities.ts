export type SignUpWithEmailAndPasswordRequest = {
  email: string;
  password: string;
};

export type UserAuth = {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
};

export type SignUpResponse = {
  token: string;
  user: UserAuth;
};

export type Provider = "google" | "facebook" | "twitter" | "github";

export type SignUpWithProviderRequest = {
  provider: Provider;
};

export type LoginWithEmailAndPasswordRequest =
  SignUpWithEmailAndPasswordRequest;

export type LoginWithProviderRequest = SignUpWithProviderRequest;

export type LoginResponse = SignUpResponse;

export interface AuthServiceProvider {
  signUpWithEmailAndPassword(
    data: SignUpWithEmailAndPasswordRequest
  ): Promise<SignUpResponse>;

  signUpWithProvider(data: SignUpWithProviderRequest): Promise<SignUpResponse>;

  loginWithEmailAndPassword(
    data: LoginWithEmailAndPasswordRequest
  ): Promise<LoginResponse>;

  loginWithProvider(data: LoginWithProviderRequest): Promise<LoginResponse>;
}
