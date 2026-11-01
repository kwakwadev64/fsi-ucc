import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "@/shared/ui/PageHero";

import { programmesData, type ProgramStatus } from "./data/programmes";
import UpcomingProgramCard from "./components/UpcomingProgramCard";
import OngoingProgramFeature from "./components/OngoingProgramFeature";
import NoData from "./components/NoData";
import CtaBanner from "./components/CtaBanner";
import SearchBar from "./components/SearchBar";

type ProgramFilter = ProgramStatus | "all";

const filters: { id: ProgramFilter; label: string }[] = [
  { id: "all", label: "Toutes les formations" },
  { id: "ongoing", label: "En cours" },
  { id: "upcoming", label: "Bientôt disponibles" },
];

export default function FormationsPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("recherche") ?? "");
  const [activeFilter, setActiveFilter] = useState<ProgramFilter>("all");

  const visiblePrograms = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    return programmesData.filter((program) => {
      const matchesFilter =
        activeFilter === "all" || program.status === activeFilter;
      const searchableText = [
        program.title,
        program.announcement,
        ...program.topics,
      ]
        .join(" ")
        .toLocaleLowerCase("fr");
      return (
        matchesFilter &&
        (!normalizedQuery || searchableText.includes(normalizedQuery))
      );
    });
  }, [activeFilter, query]);

  const ongoingProgram = visiblePrograms.find(
    (program) => program.status === "ongoing",
  );
  const upcomingPrograms = visiblePrograms.filter(
    (program) => program.status === "upcoming",
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PageHero
        image="/DJI_0349-1536x864.jpg"
        eyebrow="Catalogue des formations"
        title="Formez-vous aux métiers du numérique"
        subtitle="Quatre domaines sont annoncés à la FSI. Consultez leur contenu et vérifiez en un coup d’œil lesquels sont actuellement disponibles."
      />

      <main>
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SearchBar query={query} setQuery={setQuery} />

            <div
              className="mt-5 flex gap-2 overflow-x-auto pb-1"
              aria-label="Filtrer les formations par disponibilité"
            >
              {filters.map((filter) => {
                const count =
                  filter.id === "all"
                    ? programmesData.length
                    : programmesData.filter(
                        (program) => program.status === filter.id,
                      ).length;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={activeFilter === filter.id}
                    className={`inline-flex shrink-0 items-center gap-2 border px-3 py-2 text-xs font-semibold transition sm:px-4 ${
                      activeFilter === filter.id
                        ? "border-[#17477D] bg-[#17477D] text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700"
                    }`}
                  >
                    {filter.label}
                    <span
                      className={
                        activeFilter === filter.id
                          ? "text-blue-100"
                          : "text-slate-500"
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {visiblePrograms.length > 0 ? (
              <div className="mt-7 space-y-5">
                {ongoingProgram && (
                  <OngoingProgramFeature program={ongoingProgram} />
                )}
                {upcomingPrograms.length > 0 && (
                  <div>
                    {ongoingProgram && (
                      <h3 className="mb-4 text-lg font-bold text-slate-950">
                        À venir
                      </h3>
                    )}
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {upcomingPrograms.map((program) => (
                        <UpcomingProgramCard
                          key={program.id}
                          program={program}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NoData setQuery={setQuery} setActiveFilter={setActiveFilter} />
            )}
          </div>
        </section>
        <CtaBanner />
      </main>
    </div>
  );
}
