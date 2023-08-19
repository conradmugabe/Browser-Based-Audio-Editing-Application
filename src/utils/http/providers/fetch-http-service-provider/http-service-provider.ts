import { ApiClientServiceProvider } from "@utils-http/entities/http-entities";

interface FetchClientServiceProviderConfig {
  baseUrl: string;
}

export class FetchClientServiceProvider implements ApiClientServiceProvider {
  constructor(private readonly config: FetchClientServiceProviderConfig) {}

  post = async (endpoint: string, data: unknown) => {
    const response = await fetch(this.config.baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  get = async (endpoint: string) => {
    const response = await fetch(this.config.baseUrl + endpoint);
    return response.json();
  };

  put = async (endpoint: string, data: unknown) => {
    const response = await fetch(this.config.baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  delete = async (endpoint: string) => {
    const response = await fetch(this.config.baseUrl + endpoint, {
      method: "DELETE",
    });
    return response.json();
  };
}
