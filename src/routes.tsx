import { BrowserRouter, Routes as RoutesApp, Route, Outlet, Navigate  } from "react-router-dom";
import { isAutenticated } from "./auth";
import {
  Login,
  Dashboard,
  ListUnits,
  EditUnits,
  RegisterUnits,
  RegisterMonth,
} from "./pages";

const PrivateRouter: React.FC = () => {
  return isAutenticated() ? <Outlet /> : <Navigate to="/" />;
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/units" element={<ListUnits />} />
          <Route path="/edit/:id" element={<EditUnits />} />
          <Route path="/register_units" element={<RegisterUnits />} />
          <Route path="/register_month" element={<RegisterMonth />} />
        </Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
