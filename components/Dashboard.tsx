"use client";

import { useEffect, useState } from "react";
import Watchlist from "./Watchlist";
import AddStock from "./AddStock";
import EventCard from "./EventCard";
import SummaryCard from "./SummaryCard";
import { generateEvents } from "@/services/eventEngine";
import { saveVisitTime, getLastVisit } from "@/utils/visitTracker";
import { getTimeAway } from "@/utils/timeAway";
import AttentionBanner from "./AttentionBanner";
import MarketOverview from "./MarketOverview";
import { calculateAttentionScore } from "@/utils/attentionScore";
import DataFreshness from "./DataFreshness";

export default function Dashboard() {
  const [lastVisit, setLastVisit] = useState("");
  const [stocks, setStocks] = useState<string[]>([]);

  const events = generateEvents();

  useEffect(() => {
    const savedStocks = localStorage.getItem("watchlist");

    if (savedStocks) {
      setStocks(JSON.parse(savedStocks));
    } else {
      const defaultStocks = ["RELIANCE", "INFY", "TCS", "HDFCBANK"];

      setStocks(defaultStocks);

      localStorage.setItem("watchlist", JSON.stringify(defaultStocks));
    }

    const previousVisit = getLastVisit();

    if (previousVisit) {
      setLastVisit(previousVisit);
    }

    saveVisitTime();
  }, []);

  const addStock = (stock: string) => {
    if (stocks.includes(stock)) return;

    const updatedStocks = [...stocks, stock];

    setStocks(updatedStocks);

    localStorage.setItem("watchlist", JSON.stringify(updatedStocks));
  };

  const removeStock = (stock: string) => {
    const updatedStocks = stocks.filter((item) => item !== stock);

    setStocks(updatedStocks);

    localStorage.setItem("watchlist", JSON.stringify(updatedStocks));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <SummaryCard
          title="Watchlist Stocks"
          value={stocks.length.toString()}
        />

        <SummaryCard
          title="Meaningful Changes"
          value={events.length.toString()}
        />

        <SummaryCard
          title="Attention Required"
          value={events.length.toString()}
        />
        <SummaryCard
          title="Attention Score"
          value={`${calculateAttentionScore(events.length)}/100`}
        />
      </div>

      <AttentionBanner count={events.length} />

      <MarketOverview />

      <div className="mt-6">
        <AddStock onAdd={addStock} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-2">
          <p className="text-sm text-slate-400 mb-2">
            Last Visit:{" "}
            {lastVisit ? new Date(lastVisit).toLocaleString() : "First Visit"}
          </p>

          {lastVisit && (
            <p className="text-sm text-blue-400 mb-4">
              You were away for: {getTimeAway(lastVisit)}
            </p>
          )}

          <DataFreshness />

          <h2 className="text-2xl font-semibold mb-4">Since Your Last Visit</h2>

          <div className="space-y-4">
            {events.length === 0 ? (
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
                <h3 className="font-semibold text-green-400">
                  Everything Looks Stable
                </h3>

                <p className="text-slate-300 mt-2">
                  No meaningful changes since your last visit.
                </p>
              </div>
            ) : (
              events.map((event, index) => (
                <EventCard
                  key={`${event.symbol}-${index}`}
                  message={event.message}
                  reason={event.reason}
                />
              ))
            )}
          </div>
        </div>

        <Watchlist stocks={stocks} onRemove={removeStock} />
      </div>
    </>
  );
}
