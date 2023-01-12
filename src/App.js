import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import Welcome from "./components/Welcome";
import RequierdAuth from "./components/auth/RequiredAuth/RequierdAuth";
import IsUnAuth from "./components/auth/RequiredAuth/IsUnAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <RequierdAuth>
              <Welcome />
            </RequierdAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequierdAuth>
              <Profile />
            </RequierdAuth>
          }
        />
        <Route
          path="/login"
          element={
            <IsUnAuth>
              <Login />
            </IsUnAuth>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
