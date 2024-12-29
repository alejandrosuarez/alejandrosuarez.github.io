import { lazy } from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import withSuspense from "./withSuspense";

// Lazy-loaded page components
const Main = lazy(() => import("../pages/Main/Main"));
const MarkdownRenderer = lazy(() => import("../components/markdown/MarkdownRenderer/MarkdownRenderer"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(Main)({}),
  },
  {
    path: "/blog/:slug",
    element: withSuspense(MarkdownRenderer)({}),
  },
  {
    path: "*",
    element: withSuspense(NotFound)({}),
  },
];

const router = createHashRouter(routes);

export default router;
