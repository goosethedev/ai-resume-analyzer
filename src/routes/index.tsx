import { createFileRoute, Link } from "@tanstack/solid-router";
import { For } from "solid-js";
import Navbar from "../components/Navbar";
import { resumes } from "../constants";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main class="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section class="main-section">
          <div class="page-heading px-4 pb-12">
            <h1>Track your applications & resume ratings</h1>
            <h2>Review your submissions and check AI-powered feedback.</h2>
          </div>

          <div class="resumes-section px-8">
            <For each={resumes}>
              {(resume) => <ResumeCard resume={resume} />}
            </For>
          </div>
        </section>
      </main>
    </>
  );
}

function ResumeCard(props: { resume: Resume }) {
  return (
    <Link
      to={"/resume/$resumeId"}
      params={{ resumeId: props.resume.id }}
      class="resume-card animate-in fade-in duration-1000"
    >
      <div class="resume-card-header">
        <div class="flex flex-col gap-2">
          <h2 class="text-black! font-bold wrap-break-word">
            {props.resume.companyName}
          </h2>
          <h3 class="text-lg wrap-break-word text-gray-500">
            {props.resume.jobTitle}
          </h3>
        </div>
        <div class="shrink-0">
          <ScoreCircle score={props.resume.feedback.overallScore} />
        </div>
      </div>
      <div class="gradient-border animate-in fade-in duration-1000">
        <div class="w-full h-full">
          <img
            src={props.resume.imagePath}
            alt="resume"
            class="w-full h-87.5 max-sm:h-50 object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
}

function ScoreCircle(props: { score: number }) {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const score = props.score ?? 75;
  const progress = score / 100;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div class="relative w-25 h-25">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        class="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="#e5e7eb"
          stroke-width={stroke}
          fill="transparent"
        />
        {/* Partial circle with gradient */}
        <defs>
          <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FF97AD" />
            <stop offset="100%" stop-color="#5171FF" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="url(#grad)"
          stroke-width={stroke}
          fill="transparent"
          stroke-dasharray={`${circumference}`}
          stroke-dashoffset={strokeDashoffset}
          stroke-linecap="round"
        />
      </svg>

      {/* Score and issues */}
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="font-semibold text-sm">{`${score}/100`}</span>
      </div>
    </div>
  );
}
