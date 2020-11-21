import axios, { AxiosPromise } from "axios";
import { Chatting } from "@/types/chatting";

export const write = (data: string): AxiosPromise<Chatting[]> => {
  return axios.post("/api/auth/chats/", {
    receive: data
  });
};

export const list = (): AxiosPromise<Chatting> => {
  return axios.get("/api/auth/chatr/");
};
