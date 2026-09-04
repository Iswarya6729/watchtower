import { mockStocks } from "./mockStocks";

export function generateEvents() {
  const events = [];

  for (const stock of mockStocks) {
    if (Math.abs(stock.changePercent) >= 7) {
      events.push({
        symbol: stock.symbol,
        severity: "high",
        message: `${stock.symbol} experienced a major price movement`,
        reason: "Price change exceeded 7%",
      });
    }

    if (
      Math.abs(stock.changePercent) >= 5 &&
      Math.abs(stock.changePercent) < 7
    ) {
      events.push({
        symbol: stock.symbol,
        severity: "medium",
        message: `${stock.symbol} moved significantly`,
        reason: "Price change exceeded 5%",
      });
    }

    if (stock.volume > stock.previousVolume * 2) {
      events.push({
        symbol: stock.symbol,
        severity: "medium",
        message: `${stock.symbol} volume spike detected`,
        reason: "Trading volume exceeded 2x average",
      });
    }
  }

  return events;
}