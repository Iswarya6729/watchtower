type SummaryCardProps = {
  title: string;
  value: string;
};

export default function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}