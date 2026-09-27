const SURVEY_RESPONSE_COUNT = 43;

type ChartSegment = {
  label: string;
  count: number;
};

const PIE_SLICE_COLORS = [
  "#9f7aea",
  "#805ad5",
  "#b794f4",
  "#6b46c1",
  "#d6bcfa",
] as const;

function pct(count: number, total: number) {
  return Math.round((count / total) * 100);
}

const BAR_COLUMN_COLORS = [
  "#9f7aea",
  "#805ad5",
  "#b794f4",
  "#6b46c1",
  "#d6bcfa",
] as const;

function yAxisScale(maxCount: number) {
  const step = maxCount <= 12 ? 2 : maxCount <= 25 ? 5 : 10;
  const top = Math.max(step, Math.ceil(maxCount / step) * step);
  const ticks: number[] = [];
  for (let value = 0; value <= top; value += step) {
    ticks.push(value);
  }
  return { top, ticks };
}

function VerticalBarChart({
  title,
  note,
  segments,
  total = SURVEY_RESPONSE_COUNT,
}: {
  title: string;
  note?: string;
  segments: ChartSegment[];
  total?: number;
}) {
  const maxCount = Math.max(...segments.map((s) => s.count), 1);
  const { top, ticks } = yAxisScale(maxCount);
  const ariaLabel = segments
    .map((segment) => `${segment.label}: ${segment.count} responses (${pct(segment.count, total)}%)`)
    .join(", ");

  return (
    <figure className="via-chart via-chart--vbar">
      <figcaption className="via-chart-title">{title}</figcaption>
      {note ? <p className="via-chart-note">{note}</p> : null}
      <div className="via-vbar-chart" role="img" aria-label={`${title}: ${ariaLabel}`}>
        <div className="via-vbar-shell">
          <p className="via-vbar-y-title">Responses</p>
          <div className="via-vbar-y-axis" aria-hidden="true">
            {[...ticks].reverse().map((tick) => (
              <span key={tick} className="via-vbar-y-tick">
                {tick}
              </span>
            ))}
          </div>
          <div className="via-vbar-plot-wrap">
            <div className="via-vbar-plot">
              <div className="via-vbar-gridlines" aria-hidden="true">
                {ticks.map((tick) => (
                  <div
                    key={tick}
                    className="via-vbar-gridline"
                    style={{ bottom: `${(tick / top) * 100}%` }}
                  />
                ))}
              </div>
              <div className="via-vbar-columns">
                {segments.map((segment, index) => (
                  <div className="via-vbar-column-wrap" key={segment.label}>
                    <div
                      className="via-vbar-column"
                      style={{
                        height: `${(segment.count / top) * 100}%`,
                        backgroundColor: BAR_COLUMN_COLORS[index % BAR_COLUMN_COLORS.length],
                      }}
                      title={`${segment.count} (${pct(segment.count, total)}%)`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="via-vbar-x-axis">
              {segments.map((segment) => (
                <span className="via-vbar-x-label" key={segment.label}>
                  {segment.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function PieChart({
  title,
  note,
  segments,
  total = SURVEY_RESPONSE_COUNT,
}: {
  title: string;
  note?: string;
  segments: ChartSegment[];
  total?: number;
}) {
  let cumulative = 0;
  const gradientStops = segments
    .map((segment, index) => {
      const startPct = (cumulative / total) * 100;
      cumulative += segment.count;
      const endPct = (cumulative / total) * 100;
      const color = PIE_SLICE_COLORS[index % PIE_SLICE_COLORS.length];
      return `${color} ${startPct}% ${endPct}%`;
    })
    .join(", ");

  const ariaLabel = segments
    .map((segment) => `${segment.label}: ${pct(segment.count, total)}%`)
    .join(", ");

  return (
    <figure className="via-chart via-chart--pie">
      <figcaption className="via-chart-title">{title}</figcaption>
      {note ? <p className="via-chart-note">{note}</p> : null}
      <div className="via-pie-layout">
        <div
          className="via-pie-chart"
          style={{ background: `conic-gradient(${gradientStops})` }}
          role="img"
          aria-label={`${title}: ${ariaLabel}`}
        />
        <ul className="via-pie-legend">
          {segments.map((segment, index) => (
            <li key={segment.label} className="via-pie-legend-item">
              <span
                className="via-pie-swatch"
                style={{
                  backgroundColor: PIE_SLICE_COLORS[index % PIE_SLICE_COLORS.length],
                }}
                aria-hidden="true"
              />
              <span className="via-pie-legend-label">{segment.label}</span>
              <span className="via-pie-legend-value">
                {segment.count}{" "}
                <span className="via-pie-legend-pct">({pct(segment.count, total)}%)</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

const navigationUsage: ChartSegment[] = [
  { label: "Always", count: 17 },
  { label: "Often", count: 16 },
  { label: "Sometimes", count: 10 },
];

const obstacleFrequency: ChartSegment[] = [
  { label: "1 — Rarely", count: 3 },
  { label: "2", count: 16 },
  { label: "3", count: 12 },
  { label: "4", count: 11 },
  { label: "5 — Often", count: 1 },
];

const nonSidewalkRoutes: ChartSegment[] = [
  { label: "Yes", count: 23 },
  { label: "Sometimes", count: 13 },
  { label: "No", count: 7 },
];

const sidewalkMaintenance: ChartSegment[] = [
  { label: "No", count: 26 },
  { label: "Yes", count: 17 },
];

const overallAccessibilityRating: ChartSegment[] = [
  { label: "2", count: 5 },
  { label: "3", count: 26 },
  { label: "4", count: 12 },
];

const transitAccessibilityRating: ChartSegment[] = [
  { label: "2", count: 13 },
  { label: "3", count: 20 },
  { label: "4", count: 6 },
  { label: "5", count: 3 },
];

const researchHighlights = [
  {
    value: "77%",
    body: "use Google Maps or Apple Maps always or often when getting around.",
  },
  {
    value: "56%",
    body: "said construction and other obstacles affect their routes at least moderately.",
  },
  {
    value: "60%",
    body: "do not consider local sidewalks well-maintained or equipped with ramps and tactile paving.",
  },
  {
    value: "3.2 / 5",
    body: "average rating for overall environmental accessibility among respondents.",
  },
] as const;

export default function ViaSurveyCharts() {
  return (
    <div className="via-research-data" aria-labelledby="via-survey-heading">
      <p className="via-research-data-intro cs-body">
        We ran a Google Forms survey with 43 city and suburban residents in March 2024. Most relied
        heavily on mainstream navigation apps, but rated everyday accessibility only in the mid
        range.
      </p>

      <p className="via-research-subheading">Data has shown that...</p>
      <div className="via-research-stat-grid">
        {researchHighlights.map((item) => (
          <div className="via-research-stat" key={item.value}>
            <p className="via-research-stat-value">{item.value}</p>
            <p className="via-research-stat-body">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="via-research-subheading">Response breakdown</p>
      <div className="via-research-chart-grid">
        <PieChart title="Navigation app usage" segments={navigationUsage} />
        <VerticalBarChart
          title="Construction & obstacles affecting routes"
          note="1 = rarely,   5 = very often"
          segments={obstacleFrequency}
        />
        <VerticalBarChart
          title="Using routes other than sidewalks"
          note="Roads, hills, alleys, etc."
          segments={nonSidewalkRoutes}
        />
        <PieChart
          title="Sidewalks maintained with ramps & tactile paving"
          segments={sidewalkMaintenance}
        />
        <VerticalBarChart
          title="Overall environmental accessibility"
          note="1 = poor, 5 = excellent"
          segments={overallAccessibilityRating}
        />
        <VerticalBarChart
          title="Public transportation accessibility"
          note="Boarding, seating, and information"
          segments={transitAccessibilityRating}
        />
      </div>

      <p className="cs-body via-research-qual">
        The survey responses showed a clear issue regarding daily accessibility. So much so that 
        most respondents have noticed it in their daily travels. Although most of this data is surveyed
        on respondants without accessibility needs, the fact that those without accessibility needs are still
        noticing these issues suggests that these are not just a problem for those with mobility issues and that 
        these issues can be a even larger inconvenience to those with mobility issues. 
      </p>
    </div>
  );
}
