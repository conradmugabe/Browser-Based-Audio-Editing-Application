import axios from "axios";
import { z } from "zod";

import { CreateUser, User } from "./entity";
import httpService from "../services/httpService";

const apiClientService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

abstract class RepositoryService {
  abstract create(data: CreateUser): Promise<User>;

  abstract getMany(): Promise<User[]>;
}

class UserUseCases<TSchema> {
  constructor(
    private repositoryService: RepositoryService,
    private schema: z.Schema<TSchema>
  ) {}

  createUser = async (data: CreateUser): Promise<User> => {
    const result = this.repositoryService.create(data);
    const schemaResult = this.schema.safeParse(result);
    if (!schemaResult.success) {
      throw new Error("Something went wrong");
    }
    return result;
  };

  getUsers = async (): Promise<User[]> => {
    const result = this.repositoryService.getMany();
    const schemaResult = this.schema.safeParse(result);
    if (!schemaResult.success) {
      throw new Error("Something went wrong");
    }
    return result;
  };
}

const repositoryService = httpService<User>(apiClientService, "/users");

export const userService = new UserUseCases(repositoryService, User);
