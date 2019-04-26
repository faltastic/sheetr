export default function formatDateTime(days, times, id) {
  const d = days.trim().split(",");
  const t = times.trim().split(",");

  let dates = [];
  if (d.length === t.length) {
    for (var i = 0; i < d.length; i++) {
      t[i] = t[i].replace("permenant", "∞");
      dates[i] = d[i] + " @ " + t[i];
    }
    dates = dates.join(" & ");
  } else {
    console.log("days times not same for id " + id);
    return "date ERROR at id " + id;
  }

  return dates;
}
