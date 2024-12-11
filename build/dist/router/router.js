import {lazy} from "../../_snowpack/pkg/react.js";
import {createBrowserRouter} from "../../_snowpack/pkg/react-router-dom.js";
import withSuspense from "./withSuspense.js";
const Main = lazy(() => import("../pages/Main/Main.js"));
const MarkdownRenderer = lazy(() => import("../components/markdown/MarkdownRenderer/MarkdownRenderer.js"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.js"));
const routes = [
  {
    path: "/",
    element: withSuspense(Main)({})
  },
  {
    path: "/blog/:slug",
    element: withSuspense(MarkdownRenderer)({})
  },
  {
    path: "*",
    element: withSuspense(NotFound)({})
  }
];
const router = createBrowserRouter(routes);
export default router;
