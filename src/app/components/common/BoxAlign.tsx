export const BoxAlign = ({
  children,
  brX = false,
  className = "",
}: {
  children: React.ReactNode;
  brX?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`border-[#222]  ${brX ? "border-x" : "border-y"} ${className}`}
    >
      {children}
    </div>
  );
};
