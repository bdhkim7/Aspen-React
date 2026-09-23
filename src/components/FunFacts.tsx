import { funFacts } from "@/data/fun-facts";

export function FunFacts() {
  return (
    <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
      <div className="container">
        <div className="row">
          {funFacts.map((fact) => (
            <div key={fact.label} className="col-md-3 col-sm-6">
              <div className="fun-fact--two text-center">
                <h6 className="fun-fact__text">{fact.prefix}</h6>
                <div className="fun-fact__count counter">{fact.count}</div>
                <h6 className="fun-fact__text">{fact.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
