"use client";

import { useState } from "react";

type Props = {
  onAdd: (stock: string) => void;
};

export default function AddStock({ onAdd }: Props) {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = () => {
    if (!symbol.trim()) return;

    onAdd(symbol.toUpperCase());
    setSymbol("");
  };

  return (
    <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
      <h2 className="text-xl font-semibold mb-4">
        Add Stock
      </h2>

      <div className="flex gap-2">
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Search stocks e.g. INFY"
          className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-white outline-none"
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}