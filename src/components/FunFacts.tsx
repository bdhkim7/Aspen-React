import { CountUp } from "@/components/CountUp";
import { funFacts } from "@/data/fun-facts";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function FunFacts() {
  const t = getDictionary(await getLocale());
  return (
    <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
      <div className="container">
        <div className="row">
          {funFacts.map((fact, index) => (
            <div key={fact.label} className="col-md-3 col-sm-6">
              <div className="fun-fact--two text-center">
                <h6 className="fun-fact__text">{t.facts[index]?.prefix ?? fact.prefix}</h6>
                <CountUp value={fact.count} />
                <h6 className="fun-fact__text">{t.facts[index]?.label ?? fact.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
