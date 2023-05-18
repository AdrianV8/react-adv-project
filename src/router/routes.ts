import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Route {
    path: string,
    component: LazyExoticComponent< () => JSX.Element > | JSXComponent,
    name: string,
    children?: Route[]
}

const Home = lazy( () => import(/*webpackChunkName: "Home"*/'../01-lazyload/pages/Home') )
const LazyPage1 = lazy( () => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1') )
const LazyPage2 = lazy( () => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2') )
const LazyPage3 = lazy( () => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3') )


export const routes: Route[] = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
    },
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'Lazypage-1',
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'Lazypage-2',
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'Lazypage-3',
    },
]