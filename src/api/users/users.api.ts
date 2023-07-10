import { DateInterval } from "@hyper-fetch/core";

import { PostUserModel, UserModel } from "../../models";
import { builder } from "../builder";

export const getUser = builder.createRequest<UserModel>()({
  endpoint: "/api/user/:userId",
  cache: true,
  cacheTime: DateInterval.second * 10
});

export const getUsers = builder.createRequest<UserModel[]>()({
  endpoint: "/api/users",
  cache: true,
  cacheTime: DateInterval.second * 5
});

export const postUser = builder.createRequest<UserModel, PostUserModel>()({
  endpoint: "/api/user",
  method: "POST",
  cancelable: true
});

export const patchUser = builder.createRequest<UserModel, PostUserModel>()({
  endpoint: "/api/user/:userId",
  method: "PATCH",
  cancelable: false
});

export const deleteUser = builder.createRequest()({
  endpoint: "/api/user/:userId",
  method: "DELETE"
});
