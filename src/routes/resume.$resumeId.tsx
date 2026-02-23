import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/resume/$resumeId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resume/$resumeId"!</div>
}
