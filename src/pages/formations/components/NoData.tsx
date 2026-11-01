import React from "react";
import { BookOpen } from "lucide-react";

function NoData({
  setQuery,
  setActiveFilter,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setActiveFilter: React.Dispatch<
    React.SetStateAction<"all" | "ongoing" | "upcoming">
  >;
}) {
  return (
    <div className="mt-7 border border-slate-200 bg-slate-50 px-5 py-10 text-center">
      <BookOpen
        size={22}
        className="mx-auto text-blue-700"
        aria-hidden="true"
      />
      <h3 className="mt-3 text-base font-bold text-slate-900">
        Aucune formation trouvée
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        Essayez un autre terme ou affichez toutes les formations.
      </p>
      <button
        type="button"
        onClick={() => {
          setQuery("");
          setActiveFilter("all");
        }}
        className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        Réinitialiser les filtres
      </button>
    </div>
  );
}

export default NoData;
