import userAuth_Controller from "./auth";
import userLogout_Controller from "./logout";
import userRefreshToken_Controller from "./refreshToken";

export default {
  auth: userAuth_Controller,
  refreshToken: userRefreshToken_Controller,
  logout: userLogout_Controller,
}