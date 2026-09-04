type Props = {
  stocks: string[];
  onRemove: (stock: string) => void;
};

export default function Watchlist({
  stocks,
  onRemove,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
      <h2 className="text-xl font-semibold mb-4">
        Watchlist
      </h2>

      <div className="space-y-2">
        {stocks.map((stock) => (
          <div
            key={stock}
            className="bg-slate-800 rounded-lg p-3 flex justify-between items-center"
          >
            <span>{stock}</span>

            <button
              onClick={() => onRemove(stock)}
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
``