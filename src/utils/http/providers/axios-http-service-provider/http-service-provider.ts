import { AxiosInstance } from "axios";

import { ApiClientServiceProvider } from "@utils-http/entities/http-entities";

interface AxiosClientServiceProviderConfig {
  axiosInstance: AxiosInstance;
}

export class AxiosClientServiceProvider implements ApiClientServiceProvider {
  constructor(private readonly config: AxiosClientServiceProviderConfig) {}

  post = async (endpoint: string, data: unknown) => {
    const response = await this.config.axiosInstance.post(endpoint, data);
    return response.data;
  };

  get = async (endpoint: string) => {
    const response = await this.config.axiosInstance.get(endpoint);
    return response.data;
  };

  put = async (endpoint: string, data: unknown) => {
    const response = await this.config.axiosInstance.put(endpoint, data);
    return response.data;
  };

  delete = async (endpoint: string) => {
    const response = await this.config.axiosInstance.delete(endpoint);
    return response.data;
  };
}
