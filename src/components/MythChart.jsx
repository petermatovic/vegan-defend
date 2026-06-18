// Ľahké, závislosťami-nezaťažené grafy (nahradili recharts ~356 kB).
// Stĺpcový graf = čisté CSS, koláčový = conic-gradient. Bez externej knižnice.

function BarChart({ data, dataKey = "amount", unit = "" }) {
  const max = Math.max(...data.map((d) => d[dataKey])) || 1;
  return (
    <div className="vchart-bars">
      {data.map((d, i) => {
        const pct = Math.max((d[dataKey] / max) * 100, 1.5);
        return (
          <div className="vbar-row" key={i}>
            <div className="vbar-label">{d.name}</div>
            <div className="vbar-track">
              <div
                className="vbar-fill"
                style={{ width: `${pct}%`, background: d.fill }}
              >
                <span className="vbar-value">
                  {d[dataKey]}
                  {unit}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PieChart({ data, dataKey = "amount" }) {
  const total = data.reduce((s, d) => s + d[dataKey], 0) || 1;
  // Kumulatívne uhly počítame čisto (bez mutácie premennej počas renderu).
  const stops = data
    .map((d, i) => {
      const before = data
        .slice(0, i)
        .reduce((s, x) => s + x[dataKey], 0);
      const start = (before / total) * 360;
      const end = ((before + d[dataKey]) / total) * 360;
      return `${d.fill} ${start}deg ${end}deg`;
    })
    .join(", ");

  return (
    <div className="vpie-wrap">
      <div
        className="vpie"
        style={{ background: `conic-gradient(${stops})` }}
        role="img"
        aria-label="Koláčový graf"
      />
      <ul className="vpie-legend">
        {data.map((d, i) => (
          <li key={i}>
            <span className="vpie-dot" style={{ background: d.fill }} />
            <span>
              {d.name} — <strong>{Math.round((d[dataKey] / total) * 100)}%</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MythChart({ myth }) {
  if (myth.chartType === "none" || !myth.chartData) return null;

  return (
    <div className="chart-container glass-panel">
      <h3 className="chart-title">{myth.chartTitle}</h3>
      {myth.chartType === "bar" ? (
        <BarChart
          data={myth.chartData}
          dataKey={myth.chartDataKey}
          unit={myth.chartUnit}
        />
      ) : (
        <PieChart data={myth.chartData} dataKey={myth.chartDataKey} />
      )}
    </div>
  );
}
