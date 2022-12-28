import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import list from "./config";

const router = createBrowserRouter(list);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;