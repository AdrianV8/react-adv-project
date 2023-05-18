import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
  redirect
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={"Cargando..."}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={ <route.component /> }
              />
            ))}

            
            <Route path="/*" element={ <Navigate to={routes[0].path} replace /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
