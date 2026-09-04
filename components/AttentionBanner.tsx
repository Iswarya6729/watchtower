type Props = {
  count: number;
};

export default function AttentionBanner({
  count,
}: Props) {
  return (
    <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
      <h3 className="font-semibold">
        Attention Summary
      </h3>

      <p className="text-slate-300 mt-2">
        {count} meaningful changes deserve your attention since your last visit.
      </p>
    </div>
  );
}