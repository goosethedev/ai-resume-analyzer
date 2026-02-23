/* @refresh reload */
import { RouterProvider, createRouter } from "@tanstack/solid-router";
import { render } from "solid-js/web";

import { routeTree } from "./routeTree.gen.ts";
import "./styles.css";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const root = document.getElementById("root");
render(() => <App />, root!);
