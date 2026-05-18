export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
