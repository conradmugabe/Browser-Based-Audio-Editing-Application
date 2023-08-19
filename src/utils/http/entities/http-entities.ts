export interface ApiClientServiceProvider {
  post<T, Q>(endpoint: string, data?: Q): Promise<T>;

  get<T>(endpoint: string): Promise<T>;

  put<T, Q>(endpoint: string, data: Q): Promise<T>;

  delete<T>(endpoint: string): Promise<T>;
}
