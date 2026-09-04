type Props = {
  message: string;
  reason?: string;
};

export default function EventCard({
  message,
  reason,
}: Props) {
  const highImpact =
    message.includes("major");

  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          {message}
        </h3>

        <span
          className={
            highImpact
              ? "px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-400"
              : "px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400"
          }
        >
          {highImpact
            ? "High Impact"
            : "Medium Impact"}
        </span>
      </div>

      <p className="mt-3 text-slate-400 text-sm">
        Why am I seeing this?
      </p>

      <p className="text-slate-300 text-sm">
        {reason}
      </p>
    </div>
  );
}