import { createFileRoute } from "@tanstack/solid-router";
import { puter } from "@heyputer/puter.js";
import { createSignal, Show } from "solid-js";

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
  const [isLoading, setLoading] = createSignal(false);
  return (
    <main class="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div class="gradient-border shadow-lg">
        <section class="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div class="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            <Show when={!isLoading()} fallback={<button class="auth-button animate-pulse">
              <p>Signing you in...</p>
              </button>}>
              <Show when={puter.auth.isSignedIn()}>
                <button class="auth-button" onClick={puter.auth.signOut}><p>Log Out</p></button>
              </Show>
              <Show when={!puter.auth.isSignedIn()}>
                <button class="auth-button" onClick={puter.auth.signIn}><p>Log In</p></button>
              </Show>
            </Show>
          </div>
        </section>
      </div>
    </main>
  );
}
