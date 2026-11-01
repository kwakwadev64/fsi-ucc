import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            Déjà étudiant à la FSI ?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Consultez les cours et les ressources de votre promotion.
          </p>
        </div>
        <Link
          to="/etude"
          className="inline-flex w-fit items-center gap-2 border border-[#17477D] px-4 py-3 text-sm font-semibold text-[#17477D] transition hover:bg-[#17477D] hover:text-white"
        >
          Accéder aux cours
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
