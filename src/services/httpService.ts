import { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpService<TData> {
  constructor(
    private apiClientService: AxiosInstance,
    private endpoint: string
  ) {}

  getMany = async (config?: AxiosRequestConfig) => {
    const { data } = await this.apiClientService.get<TData[]>(
      this.endpoint,
      config
    );
    return data;
  };

  create = async <T>(newData: T, config?: AxiosRequestConfig) => {
    const { data } = await this.apiClientService.post<TData>(
      this.endpoint,
      newData,
      config
    );
    return data;
  };
}

export default <TData>(apiClientService: AxiosInstance, endpoint: string) =>
  new HttpService<TData>(apiClientService, endpoint);
