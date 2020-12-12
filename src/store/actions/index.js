import * as api from "../../api";
import { AUTH_USER } from "../types";

export const registerUser = (userData) => ({
  type: AUTH_USER,
  payload: api.registerUser(userData),
});
