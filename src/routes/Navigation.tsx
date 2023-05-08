import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {

    return (
        <Suspense fallback={ <span> Cargando... </span> } >
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {
                        // Posibilidad de desectructurar el contenido del map
                        routes.map((map) => (
                            <li key={map.to}>
                            <NavLink
                                to={map.to}
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                {" "}
                                {map.name}{" "}
                            </NavLink>
                            </li>
                        ))
                        }
                    </ul>
                    </nav>

                    <Routes>
                    {routes.map((map) => (
                        <Route key={map.to} path={map.path} element={<map.Component />} />
                    ))}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
