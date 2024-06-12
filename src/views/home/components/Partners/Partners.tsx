export function Partners() {
  return (
    <div className="container w-full grid grid-cols-6 gap-x-8 mx-auto">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="col-span-1 bg-[#D9D9D930] h-24 rounded-2xl"
          />
        ))}
    </div>
  );
}
