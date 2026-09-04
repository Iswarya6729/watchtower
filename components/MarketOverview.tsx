"use client";

import { useEffect, useState } from "react";

type Stock = {
  symbol: string;
  price: number;
  change: number;
  volume: number;
};

export default function MarketOverview() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    async function loadStocks() {
      const response = await fetch("/api/stocks");
      const data = await response.json();
      setStocks(data);
    }

    loadStocks();
  }, []);

  return (
    <div className="mt-6 rounded-xl bg-slate-900 border border-slate-800 p-5">
      <h2 className="text-xl font-semibold mb-4">
        Market Overview
      </h2>

      <div className="space-y-3">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="grid grid-cols-3 items-center rounded-lg bg-slate-800 p-3"
          >
            <span className="font-medium">
              {stock.symbol}
            </span>

            <span className="text-center font-semibold">
              ₹{stock.price}
            </span>

            <span
              className={`text-right font-medium ${
                stock.change > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}