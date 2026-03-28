import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { title: "Resumind" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "AI Resume Analyzer",
      },
      {
        name: "keywords",
        content: "resume, ai, resume analyzer, resume analyzer",
      },
      {
        name: "charset",
        content: "utf-8",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.ico",
      },
    ],
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
