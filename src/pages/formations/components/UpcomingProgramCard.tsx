import {
  getProgramStatusLabel,
  type TrainingProgram,
} from "../data/programmes";
import { Clock3 } from "lucide-react";
import RegistrationNotice from "@/shared/ui/RegistrationNotice";

export default function UpcomingProgramCard({
  program,
}: {
  program: TrainingProgram;
}) {
  const Icon = program.icon;

  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={program.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-50 text-[#17477D]">
            <Icon size={21} aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700">
            <Clock3 size={13} aria-hidden="true" />
            {getProgramStatusLabel(program.status)}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-950">
          {program.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {program.announcement}
        </p>

        <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4">
          {program.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 text-xs leading-5 text-slate-700"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-600"
                aria-hidden="true"
              />
              {topic}
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-slate-200 pt-4">
          <p className="text-xs leading-5 text-slate-500">
            Cette formation n’est pas encore disponible.
          </p>
          <RegistrationNotice
            formationName={program.title}
            variant="outline"
            className="mt-3 w-full"
          />
        </div>
      </div>
    </article>
  );
}
