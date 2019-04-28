import axios, { AxiosInstance } from 'axios';

interface ISignInUserResponse {
  token: string;
}

interface ISignInUserDTO {
  emailAddress: string;
  password: string;
}

export const signInUser = async (
  instance: AxiosInstance,
  credentials: ISignInUserDTO,
) =>
  (await instance.post<ISignInUserResponse>('auth/sign-in', credentials)).data;
