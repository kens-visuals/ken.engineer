export default function Section({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[];
}) {
  return (
    <section id={id} className="my-60 pt-40 lg:pt-20">
      {children}
    </section>
  );
}
