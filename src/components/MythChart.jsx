import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Samostatný (lazy-loaded) komponent s grafmi, aby sa ťažká knižnica recharts
// nenačítavala v úvodnom balíku, ale až keď používateľ otvorí mýtus s grafom.
export default function MythChart({ myth }) {
  if (myth.chartType === "none" || !myth.chartData) return null;

  return (
    <div className="chart-container glass-panel">
      <h3 className="chart-title">{myth.chartTitle}</h3>
      <ResponsiveContainer width="100%" height="100%">
        {myth.chartType === "bar" ? (
          <BarChart
            data={myth.chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" unit={myth.chartUnit} />
            <YAxis
              dataKey="name"
              type="category"
              width={120}
              tick={{ fill: "var(--color-text-light)", fontSize: 13 }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Bar dataKey={myth.chartDataKey} radius={[0, 4, 4, 0]}>
              {myth.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={myth.chartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey={myth.chartDataKey}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {myth.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
