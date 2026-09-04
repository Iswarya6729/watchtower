export function getTimeAway(lastVisit: string) {
  const now = new Date();
  const last = new Date(lastVisit);

  const diffMs = now.getTime() - last.getTime();

  const minutes = Math.floor(diffMs / 60000);

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hr`;
  }

  const days = Math.floor(hours / 24);

  return `${days} day`;
}