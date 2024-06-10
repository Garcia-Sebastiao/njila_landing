export function EssenceCard({
  className,
  label,
  labelColor,
  title,
  titleColor,
}: {
  className?: string;
  label: string;
  title: string;
  titleColor: "bg-blueOcean" | "bg-orangeFruit" | "bg-purpleColor";
  labelColor: string;
}) {
  return (
    <div
      className={`bg-white border flex flex-col gap-y-6  max-w-[20.31rem] border-[#E3E3E380] rounded-2xl shadow-xl p-4 ${className}`}
    >
      <div
        className={`w-full flex justify-center items-center p-2 rounded-xl ${titleColor}`}
      >
        <span className="text-white font-bold text-xl">{title}</span>
      </div>

      <p className={`font-bold text-lg ${labelColor}`}>{label}</p>
    </div>
  );
}
