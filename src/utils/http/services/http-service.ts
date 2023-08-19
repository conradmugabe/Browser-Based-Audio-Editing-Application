import { ApiClientServiceProvider } from "@utils-http/entities/http-entities";

interface ApiClientServiceProviderConfig {
  apiClientServiceProvider: ApiClientServiceProvider;
  endpoint: string;
}

interface Entity {
  id: number | string;
}

export class HttpService<T extends Entity, TCreate> {
  constructor(private readonly config: ApiClientServiceProviderConfig) {}

  create = async (entity: TCreate): Promise<T> => {
    return this.config.apiClientServiceProvider.post(
      this.config.endpoint,
      entity
    );
  };

  delete = async (id: number): Promise<void> => {
    return this.config.apiClientServiceProvider.delete(
      this.config.endpoint + "/" + id
    );
  };

  getMany = async (): Promise<T[]> => {
    const response = await this.config.apiClientServiceProvider.get<T[]>(
      this.config.endpoint
    );
    return response;
  };

  getOne = async (id: number): Promise<T> => {
    return this.config.apiClientServiceProvider.get(
      this.config.endpoint + "/" + id
    );
  };

  update = async (entity: T): Promise<T> => {
    return this.config.apiClientServiceProvider.put(
      this.config.endpoint + "/" + entity.id,
      entity
    );
  };
}
