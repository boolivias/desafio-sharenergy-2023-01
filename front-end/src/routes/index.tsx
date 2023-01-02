import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PrivateLayout from "../layout/private";
import list from "./config";

const router = createBrowserRouter(
  list.map((route) => ({
    path: route.path,
    element: route.protected
      ? (
        <PrivateLayout>
          <route.element />
        </PrivateLayout>
      ) : (
        <route.element />
      )
  }))
);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;