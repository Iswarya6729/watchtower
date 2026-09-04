export function calculateScore(change: number) {
  const abs = Math.abs(change);

  if (abs >= 8) return "High";
  if (abs >= 5) return "Medium";

  return "Low";
}