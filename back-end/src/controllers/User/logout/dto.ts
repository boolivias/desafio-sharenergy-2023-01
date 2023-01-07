import { RefreshToken } from "@prisma/client";

export interface UserLogout_RequestDTO {
  id: RefreshToken['id']
}