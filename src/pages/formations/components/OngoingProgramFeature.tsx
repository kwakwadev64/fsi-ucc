import {
  getProgramStatusLabel,
  type TrainingProgram,
} from "../data/programmes";
import RegistrationNotice from "@/shared/ui/RegistrationNotice";

export default function OngoingProgramFeature({
  program,
}: {
  program: TrainingProgram;
}) {
  const Icon = program.icon;

  return (
    <article className="grid overflow-hidden border border-[#17477D]/20 bg-white lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <p className="inline-flex w-fit items-center gap-2 bg-cyan-50 px-3 py-2 text-xs font-semibold text-[#0F6E91]">
          <span
            className="h-2 w-2 rounded-full bg-cyan-600"
            aria-hidden="true"
          />
          {getProgramStatusLabel(program.status)}
        </p>
        <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
          {program.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          {program.announcement}
        </p>

        <ul className="mt-6 grid gap-x-5 gap-y-2 border-t border-slate-200 pt-5 sm:grid-cols-2">
          {program.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 text-sm leading-6 text-slate-700"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600"
                aria-hidden="true"
              />
              {topic}
            </li>
          ))}
        </ul>

        <RegistrationNotice formationName={program.title} className="mt-7 w-fit" />
      </div>

      <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#102D4D] p-6 text-white sm:p-8 lg:min-h-full lg:p-10">
        <img
          src={program.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102D4D]/65" aria-hidden="true" />
        <div className="relative flex h-14 w-14 items-center justify-center border border-cyan-200/60 bg-[#102D4D]/40 text-cyan-100">
          <Icon size={29} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <div className="relative mt-10">
          <p className="text-sm font-semibold text-cyan-100">
            Apprendre les bases de l’intelligence artificielle
          </p>
          <p className="mt-2 max-w-sm font-display text-3xl leading-tight text-white sm:text-4xl">
            le machine learning
          </p>
        </div>
      </div>
    </article>
  );
}
