import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const Navigation = () => {

    const { pathname } = useLocation();
    
  return (
    <>
        <div>
            <h2>LazyLayout Pages</h2>

            <div>
                <ul>
                    <li>
                        <NavLink to={ `lazy1` }> LazyPage 1 </NavLink>
                    </li>
                    <li>
                        <NavLink to={ `lazy2` }> LazyPage 2 </NavLink>
                    </li>
                    <li>
                        <NavLink to={ `lazy3` }> LazyPage 3 </NavLink>
                    </li>
                </ul>

                <Routes>
                    <Route path={`lazy1`} element={ <LazyPage1/> } />
                    <Route path={`lazy2`} element={ <LazyPage2/> } />
                    <Route path={`lazy3`} element={ <LazyPage3/> } />

                    <Route path={`*`} element={ <Navigate replace to={'lazy1'} /> }/>
                </Routes>
            </div>

        </div>

    </>
  )
}
