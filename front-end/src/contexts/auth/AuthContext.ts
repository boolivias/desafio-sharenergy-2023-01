import { createContext } from "react";
import { IUser } from "../../entities/IUser";

interface IAuthContext {
  user: IUser | null,
  loading: boolean,
  signIn(user: string, pass: string): Promise<boolean>,
  signOut(): void,
}

const AuthContext = createContext({} as IAuthContext)

export default AuthContext