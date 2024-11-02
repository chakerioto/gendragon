export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(0) + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(0) + "M";
  } else if (num >= 1_000) {
    return num.toLocaleString();
  }
  return num.toString();
}
