export function calculateAttentionScore(events: number) {
  return Math.min(events * 20, 100);
}