export function Container({
  className,
  children,
  id,
}: {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`sm:max-w-[360px] w-full md:max-w-[720px] lg:w-full lg:max-w-[78.25rem] xl:max-w-[96rem] px-2 md:px-4 lg:px-8 mx-auto flex ${className}`}
    >
      {children}
    </div>
  );
}
