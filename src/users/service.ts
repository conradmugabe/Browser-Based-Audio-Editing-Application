import axios from "axios";

import { User } from "./interface";
import httpService from "../services/httpService";

const apiClientService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const userService = httpService<User>(apiClientService, "/users");