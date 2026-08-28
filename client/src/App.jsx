import { lazy } from "react";
import { Route } from "wouter";
import { ProtectedRoute } from "./Components/AdminPanel/ProtectedRoute.jsx";
import Studio from "./Pages/Studio.jsx";

const AdminLogIn = lazy(() => import("./Pages/AdminLogIn.jsx"));
const AdminMain = lazy(() => import("./Pages/AdminMain.jsx"));
const E404Page = lazy(() => import("./Pages/E404Page.jsx"));

const App = () => {
  return (
    <div>
      <Route path="/admin/logIn" component={AdminLogIn} />
      <Route path="/admin/main">
        <ProtectedRoute>
          <AdminMain></AdminMain>
        </ProtectedRoute>
      </Route>
      <Route path="/" component={Studio} />
      <Route path="/404" component={E404Page} />
    </div>
  );
};

export default App;
