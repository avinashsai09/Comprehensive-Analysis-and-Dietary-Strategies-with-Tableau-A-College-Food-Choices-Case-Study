const rawDashboardData = document.getElementById("dashboard-data");
const rows = rawDashboardData ? JSON.parse(rawDashboardData.textContent) : [];
let activeFilter = null;

const numberValue = (row, field) => Number.parseFloat(row[field]) || 0;

const average = (items, field) => {
  if (!items.length) return 0;
  return items.reduce((total, row) => total + numberValue(row, field), 0) / items.length;
};

const countBy = (items, field, values) => {
  const counts = Object.fromEntries(values.map((value) => [value, 0]));
  items.forEach((row) => {
    if (row[field] in counts) counts[row[field]] += 1;
  });
  return counts;
};

const getFilteredRows = () => {
  if (!activeFilter) return rows;

  return rows.filter((row) =>
    activeFilter.fields.every((field, index) => row[field] === activeFilter.values[index])
  );
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const updateKpis = (items) => {
  setText('[data-kpi="records"]', items.length.toString());
  setText('[data-kpi="gpa"]', average(items, "GPA").toFixed(1));
  setText('[data-kpi="weight"]', average(items, "weight").toFixed(1));
  setText('[data-kpi="grade_level"]', average(items, "grade_level").toFixed(1));
};

const updateBreakfast = (items) => {
  const counts = countBy(items, "breakfast", ["cereal", "Donut"]);
  const maxCount = Math.max(...Object.values(counts), 1);

  document.querySelectorAll(".bar-row[data-filter-field='breakfast']").forEach((row) => {
    const value = row.dataset.filterValue;
    const count = counts[value] || 0;
    row.querySelector("i").style.width = `${(count / maxCount) * 100}%`;
    row.querySelector("b").textContent = count;
  });
};

const updateHealthGender = (items) => {
  const bars = document.querySelectorAll(".group-bars [data-filter-field]");
  const counts = Array.from(bars).map((bar) => {
    const fields = bar.dataset.filterField.split(",");
    const values = bar.dataset.filterValue.split(",");
    return items.filter((row) => fields.every((field, index) => row[field] === values[index])).length;
  });
  const maxCount = Math.max(...counts, 1);

  bars.forEach((bar, index) => {
    bar.querySelector("span").style.height = `${(counts[index] / maxCount) * 100}%`;
  });
};

const updateComfortReasons = (items) => {
  const bubbles = document.querySelectorAll(".bubble[data-filter-field='comfort_food_reason']");
  const values = Array.from(bubbles).map((bubble) => bubble.dataset.filterValue);
  const counts = countBy(items, "comfort_food_reason", values);
  const maxCount = Math.max(...Object.values(counts), 1);

  bubbles.forEach((bubble) => {
    const count = counts[bubble.dataset.filterValue] || 0;
    const scale = 0.55 + (count / maxCount) * 0.45;
    bubble.style.transform = `scale(${scale})`;
    bubble.style.opacity = count ? "1" : "0.35";
  });
};

const linePoints = (items, field) => {
  const values = [1, 2, 3, 4, 5];
  const counts = values.map((value) => items.filter((row) => Number(row[field]) === value).length);
  const maxCount = Math.max(...counts, 1);

  return counts
    .map((count, index) => {
      const x = 20 + index * 70;
      const y = 130 - (count / maxCount) * 105;
      return `${x},${y}`;
    })
    .join(" ");
};

const updateTrendLines = (items) => {
  const eatingOut = document.querySelector('[data-line="eating_out"]');
  const cooking = document.querySelector('[data-line="cook"]');
  if (eatingOut) eatingOut.setAttribute("points", linePoints(items, "eating_out"));
  if (cooking) cooking.setAttribute("points", linePoints(items, "cook"));
};

const updateDashboard = () => {
  const filteredRows = getFilteredRows();
  updateKpis(filteredRows);
  updateBreakfast(filteredRows);
  updateHealthGender(filteredRows);
  updateComfortReasons(filteredRows);
  updateTrendLines(filteredRows);
};

document.querySelectorAll("[data-filter-field]").forEach((element) => {
  element.addEventListener("click", () => {
    activeFilter = {
      fields: element.dataset.filterField.split(","),
      values: element.dataset.filterValue.split(","),
    };
    updateDashboard();
  });
});

updateDashboard();
