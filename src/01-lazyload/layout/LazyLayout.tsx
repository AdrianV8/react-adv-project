import { NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


export const LazyLayout = () => {
  return (
    <div>
        <h1> Lazy Layout </h1>

        {/* RUTAS */}
        <ul>
          <li>
            <NavLink to={"lazy1"}>Lazy1</NavLink>
          </li>
          <li>
            <NavLink to={"lazy2"}>Lazy2</NavLink>
          </li>
          <li>
            <NavLink to={"lazy3"}>Lazy3</NavLink>
          </li>
        </ul>

        <Routes>
            <Route path="lazy1" element={<LazyPage1/> } />
            <Route path="lazy2" element={<LazyPage2/> } />
            <Route path="lazy3" element={<LazyPage3/> } />
        </Routes>

    </div>
  )
}

export default LazyLayout;