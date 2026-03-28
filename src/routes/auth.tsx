import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Resumind | Auth" },
      { name: "description", content: "Log into your account" },
    ],
  }),
});

function RouteComponent() {
  return (
    <main class="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div class="gradient-border shadow-lg">
        <section class="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div class="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
