import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{ rel: "stylesheet", href: styleCss }],
  }),
  component: RootComponent,
  notFoundComponent: () => <h1>Page not found!</h1>,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
      <Scripts />
    </>
  );
}
