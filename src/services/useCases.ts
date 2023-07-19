abstract class RepositoryService {}

export class CrudUseCase {
  constructor(private repository: RepositoryService) {}

  create = async () => {
    return this.repository;
  };

  delete = async () => {
    return this.repository;
  };

  getOne = async () => {
    return this.repository;
  };

  getMany = async () => {
    return this.repository;
  };

  update = async () => {
    return this.repository;
  };
}
