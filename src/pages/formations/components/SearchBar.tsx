import { Search } from "lucide-react";
const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) => {
  return (
    <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-5 lg:flex-row lg:items-end">
      <div>
        <p className="text-xs font-semibold text-blue-700">
          Les parcours annoncés
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Choisir une formation
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
          Une formation est en cours ; les trois autres sont annoncées, mais ne
          sont pas encore disponibles.
        </p>
      </div>
      <label className="flex min-h-11 w-full items-center border border-slate-300 bg-white px-3 lg:max-w-sm">
        <Search
          size={17}
          className="shrink-0 text-slate-500"
          aria-hidden="true"
        />
        <span className="sr-only">Rechercher dans les formations</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher une formation"
          className="ml-2 min-w-0 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400 focus:ring-0"
        />
      </label>
    </div>
  );
};

export default SearchBar;
