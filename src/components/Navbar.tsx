import { Link } from "@tanstack/solid-router";

export default function Navbar() {
  return (
    <nav class="navbar">
      <Link to="/">
        <p class="text-2xl font-bold text-gradient uppercase">Resumind</p>
      </Link>
      <Link to="/upload" class="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
}
