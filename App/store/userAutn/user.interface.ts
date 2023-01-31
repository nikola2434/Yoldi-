import { IUser } from "@/App/shared/interfaces/user.interface";

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
}
